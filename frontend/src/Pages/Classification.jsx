

import React, { useState } from 'react';
import { FaCamera } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import axios from 'axios'
function Classification() {
    const [preview, setPreview] = useState(null);
    const [showUploadAnother, setShowUploadAnother] = useState(false);


    
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFile = (file) => {
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => setPreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    // classfication code:
    const handlePrediction = async () => {
        if (!preview) return alert("Please upload an image first.");

        setLoading(true);
        setResult(null);

        const fileInput = document.getElementById("fileInput");
        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post("http://localhost:8000/api/v1/auth/predict", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            setResult(res.data);
            setShowUploadAnother(true);

        } catch (error) {
            console.error("Prediction error:", error);
            alert("Error while predicting");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <section className='flex flex-col items-center justify-center py-10 leading-1.5 gap-10'>
                <p className='text-3xl text-gray-600 font-semibold leading-1.5'>Dispose Smartly</p>
                <p className='text-3xl  text-gray-600 shadow-2xl  text-center max-w-4xl'>
                    “It not only classifies waste but also provides recyclability status, decomposition impact, and actionable disposal guidance, enabling environmentally responsible behavior.”
                </p>

                <div className='mt-10 flex flex-col lg:flex-row gap-3  items-center'>
                    {/* Upload Box */}
                    <div className='bg-[#C3F3C0] border-dashed border-2 border-gray-400 rounded-2xl min-h-70 w-120 flex items-center justify-center flex-col'>




                            
                                <div
                                    className='bg-[#C3F3C0]  rounded-2xl h-60 w-100 flex items-center justify-center flex-col relative overflow-hidden '
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                >
                                    {/* Camera Icon */}
                                    {!preview && (
                                        <button
                                            onClick={() => document.getElementById("fileInput").click()}
                                            className='absolute z-10  flex justify-center flex-col items-center'
                                        >
                                            <FaCamera size={50} color='green' className='cursor-pointer align-middle' />
                                            <p className='text-xl pb-2 text-gray-700 cursor-pointer mt-2'>Upload or Drag image Here</p>
                                        </button>
                                    )}

                                    {/* Hidden File Input */}
                                    <input
                                        id="fileInput"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleInputChange}
                                        className='hidden'
                                    />

                                    {/* Image Preview */}
                                    {preview && (
                                        <img
                                            src={preview}
                                            alt="preview"
                                            className='w-full h-full object-contain '
                                        />
                                    )}
                                </div>

                               
                        
                        
                          {showUploadAnother && (  <button
                                onClick={() => {
                                    setPreview(null);
                                    setHasPredicted(false);
                                    document.getElementById("fileInput").value = "";
                                }}
                                className="mt-3 bg-green-600 text-white px-6 py-3 mb-3 rounded-xl text-lg hover:bg-green-700 transition"
                            >
                             Upload Another Image
                            </button>)
                          }
                        








                        {/* added predict button */}
                        <button
                            onClick={handlePrediction}
                            className="mb-4 bg-green-600 text-white px-4 py-2 rounded-lg text-lg hover:bg-green-700"
                        >
                            {loading ? "Predicting..." : "Predict Now"}
                        </button>
                    </div>


                    {/* Prediction Prompt */}
                    <div className='bg-[#C3F3C0] ml-2 pt-4 border-dashed border-2 border-gray-400 rounded-2xl min-h-70 w-180 flex items-center justify-center flex-col'>

                        {result && (
                            <div className="bg-white shadow-lg p-5 rounded-xl mt-4 mb-4 w-[80%] border border-green-300 ">
                                <h2 className="text-2xl font-bold text-green-700 mb-3 text-center">Prediction Result</h2>

                                <p className="text-xl">
                                    <b className="text-xl text-green-700">Category:</b> {result.type}
                                </p>

                                <p className="text-xl">
                                    <b className="text-xl text-green-700">Material Type:</b> {result.type}
                                </p>

                                <p className="text-xl">
                                    <b className="text-xl text-green-700">Recyclable:</b>{" "}
                                    {String(result.recyclable)}
                                </p>

                                {/* Tips in list form */}
                                <div className="mt-4">
                                    <p className="text-xl font-bold text-green-700">Tips:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-lg">
                                        {result.tips?.map((tip, index) => (
                                            <li key={index}>{tip}</li>
                                        ))}
                                    </ul>
                                </div>

                                {["cardboard", "metal", "plastic"].includes(result.class) && (
                                    <div className="mt-6">
                                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md">
                                            Do you want to sell it to a nearby Kabadi shop?
                                        </button>
                                    </div>
                                )}


                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Classification;