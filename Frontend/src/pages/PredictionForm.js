import React, { useState } from "react";
import axios from "axios";

const PredictionForm = () => {
    const [recency, setRecency] = useState(30);
    const [frequency, setFrequency] = useState(5);
    const [monetary, setMonetary] = useState(100);
    const [time, setTime] = useState(3);
    const [prediction, setPrediction] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/predict", {
                recency,
                frequency,
                monetary,
                time,
            });

            setPrediction(
                response.data.prediction === "1"
                    ? "The Person is likely to donate"
                    : "The Person is unlikely to donate"
            );
        } catch (error) {
            console.error("Error making prediction", error);
            setPrediction("Error: Could not get prediction");
        }
    };

    return (
        <div className="grid grid-cols-12 min-h-screen bg-white text-black p-4">
            
            {/* Sidebar */}
            <div className="col-span-4 bg-gray-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-blue-800 mb-4">Specify Input Parameters</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        Recency (months)
                        <input
                            type="range"
                            min="0"
                            max="74"
                            value={recency}
                            onChange={(e) => setRecency(e.target.value)}
                            className="w-full"
                        />
                        <span className="text-red-500">{recency}</span>
                    </label>
                    <label className="block">
                        Frequency (times)
                        <input
                            type="range"
                            min="1"
                            max="43"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                            className="w-full"
                        />
                        <span className="text-red-500">{frequency}</span>
                    </label>
                    <label className="block">
                        Monetary (c.c. blood)
                        <input
                            type="range"
                            min="250"
                            max="12500"
                            value={monetary}
                            onChange={(e) => setMonetary(e.target.value)}
                            className="w-full"
                        />
                        <span className="text-red-500">{monetary}</span>
                    </label>
                    <label className="block">
                        Time (months)
                        <input
                            type="range"
                            min="2"
                            max="98"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full"
                        />
                        <span className="text-red-500">{time}</span>
                    </label>
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Predict
                    </button>
                </form>
            </div>

            {/* Main Content */}
            <div className="col-span-8 flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl font-bold text-blue-800 mb-4">Prediction Model</h1>
                <div className="bg-gray-300 p-4 rounded-lg shadow-md">
                    <img
                        src="https://www.africaengineeringnews.com/wp-content/uploads/2020/09/blood-donation.jpg"
                        alt="Blood Donation"
                        className="h-50 w-85 mx-auto rounded"
                    />
                    <p>1. <strong>Recency (months):</strong> Number of months since the last donation</p>
                    <p>2. <strong>Frequency (times):</strong> The total number of donations</p>
                    <p>3. <strong>Monetary (c.c. blood):</strong> Total volume of blood donated in cubic centimeters.</p>
                    <p>4. <strong>Time (months):</strong> Number of months that the donor has been donating blood.</p>
                </div>
                {/* Live Table */}
                <table className="w-full mt-6 border border-gray-300 text-center">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="border p-2">Recency (months)</th>
                            <th className="border p-2">Frequency (times)</th>
                            <th className="border p-2">Monetary (c.c. blood)</th>
                            <th className="border p-2">Time (months)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-200">
                            <td className="border p-2">{recency}</td>
                            <td className="border p-2">{frequency}</td>
                            <td className="border p-2">{monetary}</td>
                            <td className="border p-2">{time}</td>
                        </tr>
                    </tbody>
                </table>

                {prediction && (
                    <p
                        className={`text-lg font-bold mt-6 ${prediction.includes("The Person is likely to donate") ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {prediction}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PredictionForm;
