import streamlit as st
import joblib
import numpy as np

# Load the trained model and scaler
model = joblib.load('blood_donation_model.pkl')
scaler = joblib.load('scaler.pkl')

# Streamlit app title
st.title('Blood Donation Prediction')

# User input fields
st.header('Enter the features for prediction:')
recency = st.number_input('Recency', min_value=0, max_value=365, value=30)
frequency = st.number_input('Frequency', min_value=1, max_value=12, value=5)
monetary = st.number_input('Monetary', min_value=0, max_value=1000, value=100)
time = st.number_input('Time', min_value=1, max_value=10, value=3)

# Prepare input data for prediction
input_data = np.array([[recency, frequency, monetary, time]])

# Scale the input data using the same scaler used during model training
input_scaled = scaler.transform(input_data)

# Make prediction
prediction = model.predict(input_scaled)

# Display prediction result
if prediction[0] == 1:
    st.success('This person is likely to donate blood.')
else:
    st.error('This person is unlikely to donate blood.')

