import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";


const Monitor = () => {
  return (
    <div className="flex justify-center gap-8 mt-6 w-full">
      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.mathworks.com/channels/2844568/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=line"
        title="Temperature Chart"
      ></iframe>
      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.mathworks.com/channels/2844568/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"
        title="Humidity Chart"
      ></iframe>
    </div>
  );
};

const Regulatory = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/2844568/feeds.json?results=2"
        );
        const data = await response.json();

        
        if (data && data.feeds && data.feeds.length > 0) {
          
          const latestEntry = data.feeds[data.feeds.length - 1];

          const fetchedTemperature = parseFloat(latestEntry.field1);
          const fetchedHumidity = parseFloat(latestEntry.field2);

          setTemperature(fetchedTemperature);
          setHumidity(fetchedHumidity);

          
          if (
            fetchedTemperature < 2 ||
            fetchedTemperature > 6 ||
            fetchedHumidity < 70 ||
            fetchedHumidity > 90
          ) {
            setAlert(true);
          } else {
            setAlert(false);
          }
        }
      } catch (error) {
        console.error("Error fetching data from ThingSpeak API:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Blood Bank Storage Conditions
      </h1>

      
      {alert && (
        <div className="flex items-center mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md w-full max-w-4xl">
          <AlertTriangle className="mr-2" />
          <span>Alert: Temperature or humidity out of regulatory range!</span>
          <button
            className="ml-auto bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
            onClick={() => setAlert(false)}
          >
            Dismiss
          </button>
        </div>
      )}

     
      <div className="mt-6 flex flex-col md:flex-row gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-lg flex-1 text-center">
          <h2 className="text-gray-700 text-lg font-medium">
            Current Temperature
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {temperature !== null ? `${temperature} °C` : "Loading..."}
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg flex-1 text-center">
          <h2 className="text-gray-700 text-lg font-medium">
            Current Humidity
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {humidity !== null ? `${humidity} %` : "Loading..."}
          </p>
        </div>
      </div>

   
      <Monitor />
    </div>
  );
};

export default Regulatory;