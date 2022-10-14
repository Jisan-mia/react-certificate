import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import CertificateComponent from './CertificateComponent';

const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('myMm').offsetHeight);
};

const CertificateGenerator = () => {
  const componentRef = useRef(null);

  const certificateData = {
    name: 'Shakil Mia',
    course_name: "DOT FMCSA Supervisor Reasonable Suspension Signs and SymptomsDrug And Alcohol Training",
    compilation_detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ipsum sit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi",
    optional_detail: "Fulfills the requirements of 49 CFR Part 382.603",
    compilation_date: '01/01/2022',
    credential_id: '#234234',
    company_logo: '/logo2.png'
  }

  const handleExportPdf = () => {

    const a4WidthMm = 230;
    const domHeightMm = pxToMm(document.getElementById('node').offsetHeight);
// console.log(domHeightMm)
// return;
    exportComponentAsPDF(componentRef, {
      fileName: 'Certificate',
      pdfOptions: {
        x: 0,
        y: 0,
        // w: 1000,
        // h: 600,
        unit: "mm",
        // orientation: 'l',
        pdfFormat: [domHeightMm+10, a4WidthMm]
      }
    })
  }


  return (
    <React.Fragment>
      <div className='grid gap-4 mt-4'>
        <div>
          <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' onClick={() => exportComponentAsJPEG(componentRef)}>
            Export As JPEG
          </button>
          <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' 
            onClick={handleExportPdf}>
            Export As PDF
          </button>
          <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' onClick={() => exportComponentAsPNG(componentRef)}>
            Export As PNG
          </button>
        </div>

        <div id="myMm" style={{height: "1mm"}} />

        <CertificateComponent ref={componentRef} certificateData={certificateData}/>
      </div>
      
    </React.Fragment>
  );
};

export default CertificateGenerator;