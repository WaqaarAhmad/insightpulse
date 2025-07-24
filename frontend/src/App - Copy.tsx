import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import DataPreview from "./components/DataPreview"; // Added missing import

const App = () => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleFileUpload = (file: File) => {
        setUploadedFile(file);
        // TODO: Add logic to process the uploaded file
    };

    return (
        <div className="app-container p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">InsightPulse</h1>
            <FileUploader onFileUpload={handleFileUpload} />
            {uploadedFile && (
                <div className="mt-6">
                    <DataPreview />
                </div>
            )}
        </div>
    );
};

export default App;
