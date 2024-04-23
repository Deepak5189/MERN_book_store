// components/PdfReader.js
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfReader = (pdfUrl ) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className='flex flex-col items-center gap-5 mt-5'>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(e)=>{
          return <div>
            {`we occured this error: ${e}`}
          </div>
        }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div className="flex justify-between p-2 m-2 gap-10">
        <button className="p-2 bg-yellow-300 rounded-2xl outline-yellow-300 font-semibold hover:text-white hover:bg-black outline outline-2 hover:outline-black">Prev</button>
        <button className="p-2 bg-yellow-300 rounded-2xl outline-yellow-300 font-semibold hover:text-white hover:bg-black outline outline-2 hover:outline-black">Next</button>
      </div>
    </div>
  );
};

export default PdfReader;
