import React from 'react'
import IMAGES from '../assets'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='fixed top-0 flex w-full bg-emerald-800 h-16 justify-center items-center z-30'>
      <div>
        <img src={IMAGES.TMDB_LOGO} className="w-14 h-14" alt="logo"/>
      </div>
    </div>
  )
}

export default Header