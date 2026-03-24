import React, { useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";

function App() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [score, setScore] = useState(null);

    const handleUpload = (e) => {
        const selectedFile = e.target.files[0];

        if (!selectedFile) return;

        if (selectedFile.type !== "application/pdf") {
            alert("Only PDF files allowed!");
            return;
        }

        setFile(selectedFile);
        setLoading(true);

        setTimeout(() => {
            const randomScore = Math.floor(Math.random() * 100);
            setScore(randomScore);
            setLoading(false);
        }, 2000);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#000",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                style={{
                    background: "linear-gradient(135deg, #0f172a, #1e293b)",
                    padding: "35px",
                    borderRadius: "15px",
                    width: "400px",
                    textAlign: "center",
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                }}
            >
                <h1 style={{ marginBottom: "10px" }}>Resume Analyzer</h1>

                <p style={{ color: "#cbd5f5", marginBottom: "15px" }}>
                    Upload your resume and get instant feedback
                </p>

                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleUpload}
                    style={{
                        padding: "8px",
                        background: "#1e293b",
                        color: "#cbd5f5",
                        border: "1px solid #475569",
                        borderRadius: "8px",
                        marginBottom: "15px",
                        width: "100%",
                        cursor: "pointer"
                    }}
                />

                {file && (
                    <p style={{ marginBottom: "10px" }}>
                        Uploaded: {file.name}
                    </p>
                )}

                {loading && (
                    <div style={{ marginTop: "10px", textAlign: "center" }}>
                        <FaHourglassHalf size={28} color="#60a5fa" />
                        <p style={{ color: "#cbd5f5" }}>Analyzing resume...</p>
                    </div>
                )}


                {score !== null && (
                    <>
                        <h2 style={{ marginTop: "15px" }}>
                            Score: {score}/100
                        </h2>

                        {/* Progress Bar */}
                        <div
                            style={{
                                width: "100%",
                                height: "25px",
                                background: "#333",
                                borderRadius: "20px",
                                margin: "15px 0",
                            }}
                        >
                            <div
                                style={{
                                    width: `${score}%`,
                                    height: "100%",
                                    borderRadius: "20px",
                                    background:
                                        score > 75
                                            ? "#4CAF50"
                                            : score > 50
                                                ? "#FFC107"
                                                : "#F44336",
                                    transition: "width 1s ease-in-out",
                                }}
                            ></div>
                        </div>

                        {/* Suggestions */}
                        <h3>Suggestions:</h3>
                        <ul style={{ textAlign: "left", marginTop: "10px" }}>
                            {score < 50 ? (
                                <>
                                    <li>Add more technical skills</li>
                                    <li>Include projects</li>
                                    <li>Improve formatting</li>
                                </>
                            ) : (
                                <>
                                    <li>Good resume structure</li>
                                    <li>Add more achievements</li>
                                    <li>Optimize keywords</li>
                                </>
                            )}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;