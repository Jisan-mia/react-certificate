
import React, { useRef } from 'react';

const CertificateComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>
      <div className='font-Poppins aspect-auto w-[900px] border border-gray-400 relative overflow-hidden rounded'>
        <div className='relative'>
          <img src="./certificate-template.png" alt="Certificate Template" className='h-full w-full object-contain block' />
        </div>

        {/* student name */}
        <div className='absolute text-center top-[37%] left-[46%] translate-x-[-50%] translate-y-[-50%] m-auto max-w-[380px]'>
            <h1 className='uppercase font-semibold text-2xl'>Jisan Mia</h1>
        </div>

        {/* course name */}
        <h3 className='text-sm font-medium absolute text-center top-[48%] left-[46%] translate-x-[-50%] translate-y-[-50%] m-auto max-w-[380px] capitalize'>dOT fmCSA Supervisor Reasonable Suspension Signs and
SymptomsDrug And Alcohol Training</h3>

        {/* course success detail */}
        <div className=' absolute  top-[65%] left-[46%] translate-x-[-50%] translate-y-[-50%] m-auto w-[550px]'>
          <p className='font-normal text-xs text-justify'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ipsum sit. Lorem
ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat. Ut wisi
          </p>
        </div>

        {/* optional detail */}
        <div className='absolute  top-[75%] left-[46%] translate-x-[-50%] translate-y-[-50%] m-auto max-w-[580px]'>
          <h3 className='font-medium text-xl text-center'>
          Fulfills the requirements of 49 CFR Part 382.603
          </h3>
        </div>

        {/* footer section including signature, compilation date, credential id and website url */}
        <footer className='absolute top-[85%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto w-[740px] bg-fuchsia-300'>
          <div>
            
          </div>
        </footer>

      </div>
  </div>
));


export default CertificateComponent