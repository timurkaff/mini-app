import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import pdfFile from '../assets/active.pdf';

interface ActivitiesScreenProps {
  onBack: () => void;
}

const ActivitiesScreen: React.FC<ActivitiesScreenProps> = ({ onBack }) => {

  return (
    <div>
      <div className='btn-exit'>
        <button onClick={onBack} className="nav-btn-exit">
          ←
        </button>
        <h2>Получить баллы</h2>
      </div>
      
      <div className="pdf-container">
        <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`}>
          <div className="pdf-viewer">
            <iframe src={pdfFile} title="PDF Viewer" width="100%" height="700px"></iframe>
          </div>
        </Worker>
      </div>
    </div>
  );
};

export default ActivitiesScreen;