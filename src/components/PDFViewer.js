import React from "react";
import { PdfLoader, PdfHighlighter, Tip, Highlight } from "react-pdf-highlighter-extended";

const PDFViewer = ({ highlights }) => {
  const pdfUrl = "example.pdf"; // Replace with your PDF file URL

  const renderHighlight = ({ position, content }) => (
    <Tip content={content}>
      <Highlight position={position} />
    </Tip>
  );

  return (
    <PdfLoader url={pdfUrl} beforeLoad={<div>Loading PDF...</div>}>
      {(pdfDocument) => (
        <PdfHighlighter
          pdfDocument={pdfDocument}
          highlights={highlights}
          renderHighlight={renderHighlight}
        />
      )}
    </PdfLoader>
  );
};

export default PDFViewer;