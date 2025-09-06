// import { useState } from 'react';
// import { LoadScript } from '@react-google-maps/api';
// import DistanceMatrix from '@/components/ui/DistanceMatrix';

// function Pricing() {
//     const [formData, setFormData] = useState({ windows: '', location: '' });
//     const [output, setOutput] = useState('');
//     const [mapsReady, setMapsReady] = useState(false);

//     const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleCalculate = (e) => {
//         e.preventDefault();

//         if (!formData.location) {
//             setOutput('Please enter a location');
//             return;
//         }

//         if (!mapsReady) {
//             setOutput('Google Maps API not loaded yet');
//             return;
//         }

//         setOutput('Calculating...');
//     };

//     return (
//         <LoadScript
//             googleMapsApiKey={apiKey}
//             onLoad={() => setMapsReady(true)}
//             onError={() => setOutput('Failed to load Google Maps API')}
//         >
//             <div className="bg-black w-full h-screen flex flex-col items-center justify-center gap-8">
//                 <section className="w-auto h-auto flex bg-white rounded-lg shadow-lg">
//                     <form
//                         onSubmit={handleCalculate}
//                         className="bg-white text-black rounded-lg p-4 space-y-4 w-full max-w-md flex flex-col items-center"
//                     >
//                         <header className="text-center text-lg font-bold mb-2">Number of Windows</header>
//                         <input
//                             type="number"
//                             name="windows"
//                             value={formData.windows}
//                             onChange={handleChange}
//                             className="border rounded p-2"
//                         />
//                         <header className="text-center text-lg font-bold mb-2">Location</header>
//                         <input
//                             type="text"
//                             name="location"
//                             value={formData.location}
//                             onChange={handleChange}
//                             className="border rounded p-2"
//                         />
//                         <button
//                             type="submit"
//                             className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </section>

//                 {/* Show the output */}
//                 {output && <p className="text-white mt-4">{output}</p>}

//                 {/* Wait for Google Maps API to load before using DistanceMatrix */}
//                 {output === 'Calculating...' && mapsReady && (
//                     <DistanceMatrix userLocation={formData.location} onResult={setOutput} />
//                 )}

//                 <div className="bg-white w-auto h-auto text-black items-center justify-center">
//                     <a href="/" className="text-black-500 hover:underline">
//                         Back to Home
//                     </a>
//                 </div>
//             </div>
//         </LoadScript>
//     );
// }

import { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import DistanceMatrix from '@/components/ui/DistanceMatrix';

function parseMinutes(text) {
    if (!text) return null;
    const match = text.match(/Duration:\s*([0-9]+)\s*mins?/i);
    return match ? parseInt(match[1], 10) : null;
}

function Pricing() {
    const [formData, setFormData] = useState({ windows: '', location: '' });
    const [output, setOutput] = useState('');
    const [mapsReady, setMapsReady] = useState(false);

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCalculate = (e) => {
        e.preventDefault();

        if (!formData.location) {
            setOutput('Please enter a location');
            return;
        }

        if (!mapsReady) {
            setOutput('Google Maps API not loaded yet');
            return;
        }

        setOutput('Calculating...');
    };

    return (
        <LoadScript
            googleMapsApiKey={apiKey}
            onLoad={() => setMapsReady(true)}
            onError={() => setOutput('Failed to load Google Maps API')}
        >
            <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 gap-8">

                {/* Main Card */}
                <section className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 space-y-6">
                    <h1 className="text-2xl font-bold text-center text-gray-800">
                        Instant Estimate
                    </h1>

                    <form
                        onSubmit={handleCalculate}
                        className="space-y-6"
                    >
                        {/* Windows Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 text-left">
                                Number of Windows
                            </label>
                            <input
                                type="number"
                                name="windows"
                                value={formData.windows}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Location Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 text-left">
                                Service Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200"
                        >
                            Get Quote
                        </button>
                    </form>
                </section>

                {/* Results */}
                {output && (
                    <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 text-center">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Your Estimate
                        </h2>
                        {output.includes("Duration") ? (
                            (() => {
                                const minutes = parseMinutes(output);
                                if (minutes === null) {
                                    // fallback: just show raw string if it's not in mins (like "1 hour 5 mins")
                                    return <p className="text-gray-600">{output}</p>;
                                }
                                const windowsCost = Number(formData.windows || 0) * 5;
                                const timeCost = minutes * 4;
                                const total = windowsCost + timeCost;

                                return (
                                    <div className="space-y-1 text-gray-700">
                                        <p>Windows: ${windowsCost}</p>
                                        <p>Travel: ${timeCost} ({minutes} mins)</p>
                                        <p className="font-bold text-lg mt-2">Total: ${total}</p>
                                    </div>
                                );
                            })()
                        ) : (
                            <p className="text-gray-600">{output}</p>
                        )}
                    </div>
                )}



                {/* Distance Matrix (unchanged logic) */}
                {output === 'Calculating...' && mapsReady && (
                    <DistanceMatrix userLocation={formData.location} onResult={setOutput} />
                )}

                {/* Back link */}
                <div className="bg-white rounded-lg shadow px-4 py-2">
                    <a href="/" className="text-blue-600 hover:underline font-medium">
                        ← Back to Home
                    </a>
                </div>
            </div>
        </LoadScript>
    );
}

export default Pricing;
