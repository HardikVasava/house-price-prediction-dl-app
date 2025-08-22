import React, { useState } from 'react';
import axios from 'axios';

const defaultForm = {
  bedrooms: 3,
  bathrooms: 2.0,
  sqft_living: 1800,
  sqft_lot: 5000,
  floors: 1.0,
  waterfront: 0,
  view: 0,
  condition: 3,
  grade: 7,
  sqft_above: 1200,
  sqft_basement: 600,
  yr_built: 1990,
  yr_renovated: 0,
  lat: 47.5112,
  long: -122.257,
  sqft_living15: 1500,
  sqft_lot15: 4000,
  year: 2014,
  month: 10,
};

const App = () => {
  const [formData, setFormData] = useState(defaultForm);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = value === '' ? '' : parseFloat(value);
    setFormData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);
    setError('');

    try {
      const { data } = await axios.post('http://localhost:5000/predict', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      const predictedPrice = data.predicted_price ?? data.prediction;

      if (predictedPrice === undefined) {
        setError('Unexpected server response.');
      } else {
        setPrediction(predictedPrice);
      }
    } catch (err) {
      console.error(err);
      setError('Prediction failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-10 px-4">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-10 animate-fadeIn">
          🏠 House Price Predictor
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg transition-all duration-300"
        >
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label
                htmlFor={key}
                className="text-sm font-semibold text-gray-700 mb-1 capitalize"
              >
                {key.replace(/_/g, ' ')}
              </label>
              <input
                type="number"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                step="any"
                required
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>
          ))}

          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-200 shadow-md disabled:opacity-60"
            >
              {loading ? 'Predicting...' : 'Predict Price'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-6 text-center text-red-600 text-md font-medium">
            {error}
          </div>
        )}

        {prediction !== null && (
          <div className="mt-8 text-center text-green-600 text-2xl font-bold animate-pulse">
            Predicted House Price: ${Number(prediction.replace(/,/g, '')).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
