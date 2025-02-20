import sys
import joblib
import numpy as np
import pandas as pd

# Load the trained model and scaler
model = joblib.load("blood_donation_model.pkl")
scaler = joblib.load("scaler.pkl")

# Read inputs
recency, frequency, monetary, time = map(float, sys.argv[1:])

# Create a DataFrame with column names
input_data = pd.DataFrame([[recency, frequency, monetary, time]], columns=["Recency", "Frequency", "Monetary", "Time"])

# Scale the input data
scaled_data = scaler.transform(input_data)

# Make prediction
prediction = model.predict(scaled_data)[0]

# Print prediction result (0 or 1)
print(prediction)
