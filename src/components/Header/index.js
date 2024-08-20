import React from 'react'
import './index.css'
import { BsCalendarDate } from "react-icons/bs";
import { GiArchiveRegister } from "react-icons/gi";


function Header() {
  return (
    <>
    <div className="frame">
    <div className="imga">
     <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
<rect width="44" height="44" rx="4" fill="#141B41"/>
<rect x="10" y="9" width="23" height="26" fill="white"/>
</svg> 
</div>
</div>

<div className="nav1">
    <nav className='naav'>
        <ul className='unav'>
            <li className="tex texre">Attendance</li>
            <li className="tex">Leave</li>
            <li className="tex">Presents</li>
            <li className="tex">Others</li>
        </ul>

    </nav>
    <div className='buttons'>
      <div><button class="buton"><BsCalendarDate />
        <span className="bu">Jan 2022</span>
      </button>
      </div>
      <div><button class="buton"><GiArchiveRegister />
        <span className="bu">Registration</span>
      </button>
      </div>
    </div>

</div>

    </>
  )
}

export default Header
