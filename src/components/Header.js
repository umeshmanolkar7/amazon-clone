import React from 'react'
import { logo } from '../assets';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlinedIcon';

const Header = () => {
  return (
    <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
      <div className='headerHover'>
        <img className='w-24 mt-0' src={logo} alt="amazon-logo" />
      </div>

      <div className='headerHover'>
      <span class="material-symbols-outlined">location_on</span>
      <p className='text-sm text-lightText font-light'>Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>India</span></p>
      </div>  


    </div>
    </div>
  )
}

export default Header