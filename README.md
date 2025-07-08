# 💨 LifeBank – Smart Blood Bank Management System

LifeBank is a smart, IoT-based management system tailored for blood banks. It makes use of a prediction model as well to facilitate blood units but mainly uses the support of MERN tech stack for clean and effective integration. It tracks temperature and humidity in real time to ensure optimal storage conditions for blood units, and integrates with a web dashboard for inventory and environmental monitoring.

## 🔧 Features

*  Real-time temperature and humidity tracking (via DHT11)
*  Add, update, delete and monitor blood inventory by blood group
*  IoT data upload using ESP8266 and ThingSpeak
*  Web dashboard for data visualization
*  Alert system for abnormal environmental conditions
*  Prediction model to keep a track of future changes and trends of blood donation

## 🪨 Tech Stack

* **IoT Integration**: ESP8266, DHT11 Sensor
* **Backend**: Node.js, Express
* **Frontend**: React, TailwindCSS
* **Monitoring**: ThingSpeak
* **Database**: MongoDB

## 💡 Problem Solved

Traditional blood banks face issues like stock mismatches, and blood spoilage due to undetected temperature deviations. LifeBank enables data-driven decision-making and proactive monitoring to ensure safety and efficiency.

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/LifeBank.git
   cd LifeBank
   ```

2. Install server dependencies:

   ```bash
   cd Backend
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd Frontend
   npm install
   ```

4. Run the backend:

   ```bash
   cd Backend
   npm run start
   ```
   
3. Install client dependencies:

   ```bash
   cd Frontend
   npm run dev
   ``` 

6. Open the app at:

   ```
   http://localhost:5000
   ```

5. For IoT:

   * Flash ESP8266 with Arduino code (provided in `/iot_code`)
   * Ensure Wi-Fi credentials and ThingSpeak API key are set

## 🖼️ Screenshots


![image](https://github.com/user-attachments/assets/3b2261a6-7f1d-49c7-a425-ceba362d0b8f)
![image](https://github.com/user-attachments/assets/d9b6f6ad-c702-4efd-9615-acfa60dfd636)
![image](https://github.com/user-attachments/assets/939db6dd-aec8-4cee-a1b0-cbb5354fc499)






## 📄 License

MIT License © Sarayu Kammari


