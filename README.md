# 🏡 **House Price Prediction - Full Stack Application** 🌟

Welcome to the **House Price Prediction** project! 🏠  
This is a full-stack machine learning application designed to predict house prices based on various features such as the number of bedrooms, bathrooms, square footage, year built, and more.

---

📂 **Dataset**  
This project uses a dataset containing various features of houses, including the number of bedrooms, bathrooms, square footage, and other relevant details. The target variable is the house price.

You can find the dataset here:  
[House Price Prediction Dataset (CSV)](https://www.kaggle.com/harlfoxem/housesalesprediction)

---

🔧 **Tech Stack**  
- **Data Analysis & Visualization**: `pandas`, `seaborn`, `matplotlib`  
- **Modeling**: `TensorFlow`, `Keras`  
- **Server**: `Flask` REST API  
- **Client**: `React`, `Tailwind CSS`, `Axios`

---

📁 **Project Structure**  
- `**model_training/**`: Contains the trained model file, scaler, and Jupyter notebook for training and exploration.  
- `**server/**`: Flask API source code for serving predictions.  
- `**client/**`: React application for user interaction and visualization.  
- `**data/**`: Contains the original dataset file.  
- `**README.md**`: Project documentation.

---

📊 **1. Data Exploration & Visualization** 📉  
The dataset includes features such as `bedrooms`, `bathrooms`, `sqft_living`, `sqft_lot`, and geographical data like latitude and longitude. 

Visualizations include:  
- **Distribution of House Prices** 🏡💸  
- **Scatter Plots** showing the relationship between price and living area.  
- **Boxplots** comparing price distributions based on different features (e.g., `bedrooms`).  
- **Correlation Heatmap** 🔥 between features like `sqft_living`, `sqft_lot`, and price.

---

🤖 **2. Model Training (TensorFlow/Keras)**  
- Features are **normalized** using `MinMaxScaler`.  
- A **neural network** is built with two hidden layers, each having 19 neurons and using **ReLU activation**.  
- The model is trained using the **Adam optimizer** with **Mean Squared Error (MSE)** as the loss function.  
- **Early stopping** is applied to prevent overfitting, and the model is saved after training.

---

🧪 **3. Prediction Function**  
The prediction function accepts **user input features** such as `bedrooms`, `sqft_living`, and more.  
It scales the input data and uses the trained model to predict the house price. 💵  
It returns the **predicted house price** based on the user's input.

---

🌐 **4. Flask REST API**  
**Endpoints**:  
- `**GET /**`: For a health check ✅  
- `**POST /predict**`: Submit house features (e.g., `bedrooms`, `sqft_living`) and receive the predicted price.

The API responds with the **predicted house price**.  
To run the API, install the required dependencies and start the Flask server.

---

💻 **5. React Client**  
The frontend provides a **clean, modern, and responsive UI**:  
- Users can input house features (e.g., number of bedrooms, square footage) and get real-time predictions 🖥️  
- Features include **input validation**, user-friendly forms, and seamless **API integration** using `Axios`.

---

🚀 **Getting Started**  
1. **Clone** the repository.  
2. **Train** the model by running the Jupyter notebook in the `model_training` folder.  
3. **Start** the Flask backend API.  
4. **Launch** the React frontend.  
5. **Access** the app via `localhost` in your browser.

---

🛠 **Technologies Used**  
| **Layer**     | **Tools**                      |  
|---------------|---------------------------------|  
| **Data/EDA**  | `pandas`, `seaborn`, `matplotlib` |  
| **Modeling**  | `TensorFlow`, `Keras`, `scikit-learn` |  
| **API**       | `Flask`, `joblib`, `numpy`, `pandas` |  
| **Client**  | `React`, `Tailwind CSS`, `Axios` |  

---

🧪 **Sample Prediction**  
Given an input of house features, the application predicts the **house price** accurately 🏠💰

---

❤️ **Enjoy using the House Price Prediction App!** 🌟
