import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import './index.css'


function Sections() {
  return (
    
    <div className='section1'>
      <div className='section2'>
        <div className="section3">
            <div>
                <h1 className="sect1">Casual Leave</h1>
                <h1 className="sec1">08 <span clasName="sec2">Remaining</span></h1>
            </div>

        </div>
    <div className='section4'>
        <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="27" viewBox="0 0 14 27" fill="none">
<path d="M4.25464 23.0581C4.25464 16.1119 6.39816 9.33501 10.3926 3.6523" stroke="#039855" stroke-width="6.98182" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p className='sec3'>04</p>

<p className='sec4'>Availed</p>
</div>





    </div>

      </div>

      <div className='section2'>
        <div className="section3">
            <div>
                <h1 className="sect1">Privilege</h1>
                <h1 className="sec1">11 <span clasName="sec2">Remaining</span></h1>
            </div>

        </div>
    <div className='section4'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
<path d="M3.75452 14.0581C3.75452 10.499 4.31754 6.96242 5.4227 3.57932" stroke="#444CE7" stroke-width="6.98182" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className='sec3'>01</p>

<p className='sec4'>Availed</p>

</div>





    </div>

      </div>

      <div className='section2'>
        <div className="section3">
            <div>
                <h1 className="sect1">Sick Leave</h1>
                <h1 className="sec1">03<span clasName="sec2">Remaining</span></h1>
            </div>

        </div>
    <div className='section4'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="42" viewBox="0 0 58 42" fill="none">
<path d="M4.25452 38.0581C4.25452 32.171 5.79462 26.3864 8.72186 21.2787C11.6491 16.171 15.8616 11.9179 20.9411 8.94192C26.0205 5.96592 31.7902 4.37052 37.677 4.31417C43.5637 4.25782 49.3628 5.74247 54.4983 8.62069" stroke="#DC6803" stroke-width="6.98182" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p className='sec3'>07</p>

    <p className='sec4'>Availed</p>
</div>





    </div>

      </div>

      <div className='section2'>
        <div className="section3">
            <div>
                <h1 className="sect1">Comp off</h1>
                <h1 className="sec1">02<span clasName="sec2">Remaining</span></h1>
            </div>

        </div>
    <div className='section4'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="32" viewBox="0 0 18 32" fill="none">
<path d="M3.75452 28.0581C3.75452 23.6266 4.62737 19.2384 6.32324 15.1442C8.01911 11.0501 10.5048 7.32999 13.6383 4.19643" stroke="#DD2590" stroke-width="6.98182" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className='sec3'>01</p>
    <p className='sec4'>Availed</p>
</div>

    



    </div>

      </div>
      <div className='section5'>
        <div className='section6'>
            <FaArrowRight />

        </div>
        <div className='section6'>
            <FaArrowLeft />

        </div>
         
      </div> 
    </div>
  )
}

export default Sections
