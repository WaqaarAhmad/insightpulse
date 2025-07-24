import React from "react";
import FileUploader from "./components/FileUploader";
import DataPreview from "./components/DataPreview";
import ChatInterface from "./components/ChatInterface";
import ResponseDisplay from "./components/ResponseDisplay";

function App() {
  return (
    <div className="container mx-auto p-4">
      <FileUploader />
      <DataPreview />
      <ChatInterface />
      <ResponseDisplay />
    </div>
  );
}

export default App;
