from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import joblib
import numpy as np
import pandas as pd


model = load_model('../model_training/models/house_price_prediction_model.keras')
scaler = joblib.load('../model_training/models/house_price_prediction_scaler.pkl')


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "House Price Prediction API is live!"})

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No input data provided'}), 400

    try:
        house = pd.DataFrame([data])
        house_scaled = scaler.transform(house)
        prediction = model.predict(house_scaled)
        predicted_price = prediction[0][0]

        return jsonify({'predicted_price': f"{predicted_price:,.2f}"})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
