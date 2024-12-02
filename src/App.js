import React, { useState } from "react";
import QueryForm from "./components/QueryForm";
import PDFViewer from "./components/PDFViewer";

const App = () => {
  const [highlights, setHighlights] = useState([]);

  const handleCoordinates = (coordinates) => {
    setHighlights(coordinates); // Updates highlights for the PDF
  };

  return (
    <div>
      <h1>PDF Highlighter Demo</h1>
      <QueryForm onCoordinates={handleCoordinates} />
      <PDFViewer highlights={highlights} />
    </div>
  );
};

export default App;