# 💨 LifeBank – Smart Blood Bank Management System

LifeBank is a smart, IoT-based management system tailored for blood banks. It tracks temperature and humidity in real time to ensure optimal storage conditions for blood units, and integrates with a web dashboard for inventory and environmental monitoring.

## 🔧 Features

* 📡 Real-time temperature and humidity tracking (via DHT11)
* 🌐 IoT data upload using ESP8266 and ThingSpeak
* 📋 Add, update, delete and monitor blood inventory by blood group
* ⚠️ Alert system for abnormal environmental conditions
* 📊 Web dashboard for data visualization

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






## 📄 License

MIT License © Sarayu Kammari


