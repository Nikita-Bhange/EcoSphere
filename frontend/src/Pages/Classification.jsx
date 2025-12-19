import React, { useState } from 'react';
import { FaCamera } from "react-icons/fa";
import Navbar from '../Components/Navbar';

function Classification() {
    const [preview, setPreview] = useState(null);
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
            const res = await api.post("/predict", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            setResult(res.data);
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
                <p className='text-2xl text-gray-700 text-center max-w-4xl'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eveniet, impedit officiis neque autem expedita explicabo sequi ex repellat eum?
                </p>

                <div className='flex mt-10 flex-col items-center'>
                    {/* Upload Box */}
                    <div className='bg-[#C3F3C0] border-dashed border-2 border-gray-400 rounded-2xl h-65 w-120 flex items-center justify-center flex-col'>
                        <div
                            className='bg-[#C3F3C0]  rounded-2xl h-60 w-100 flex items-center justify-center flex-col relative overflow-hidden'
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}>
                            {/* Camera Icon (hidden after upload) */}
                            {!preview && (
                                <button
                                    onClick={() => document.getElementById("fileInput").click()}
                                    className='absolute z-10'
                                >
                                    <FaCamera size={50} color='green' className='cursor-pointer' />
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

                            {/* Upload Text (hidden after upload) */}
                            {/* {!preview && (
                            <div className='text-xl pt-20 text-gray-700 cursor-pointer'>
                                Upload or Drag image Here
                            </div>
                        )} */}

                            {/* Image Preview */}
                            {preview && (
                                <img
                                    src={preview}
                                    alt="preview"
                                    className='w-full h-full object-contain'
                                />
                            )}
                        </div>
                        <div className='text-xl pb-2 text-gray-700 cursor-pointer'>
                            Upload or Drag image Here
                        </div>
                    </div>
                    {/* added predict button */}
                    <button
                        onClick={handlePrediction}
                        className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700"
                    >
                        {loading ? "Predicting..." : "Predict Now"}
                    </button>

                    {/* Prediction Prompt */}
                    {result && (
                        <div className="bg-white shadow-lg p-5 rounded-xl mt-6 w-96 text-center border border-green-300">
                            <h2 className="text-2xl font-bold text-green-700 mb-3">Prediction Result</h2>

                            <p><b>Category:</b> {result.class}</p>
                            <p><b>Material Type:</b> {result.type}</p>
                            <p><b>Recyclable:</b> {String(result.recyclable)}</p>
                            <p><b>Tips:</b> {result.tips}</p>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
}

export default Classification;