import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import CertificateComponent from './CertificateComponent';


const CertificateGenerator = () => {
  const componentRef = useRef();

  return (
    <React.Fragment>
      <div className='grid  gap-4 mt-4'>
        <div>
          <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' onClick={() => exportComponentAsJPEG(componentRef)}>
            Export As JPEG
          </button>
          <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' onClick={() => exportComponentAsPDF(componentRef)}>
            Export As PDF
          </button>
          <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' onClick={() => exportComponentAsPNG(componentRef)}>
            Export As PNG
          </button>
        </div>
        <CertificateComponent ref={componentRef} />
      </div>
      
    </React.Fragment>
  );
};

export default CertificateGenerator;