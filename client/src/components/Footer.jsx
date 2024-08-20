import React from 'react'
import { discoveryToShare, MTlogo, siteLogoBlack } from '../assets'

const Footer = () => {
    return (
        <div className="w-full flex flex-col h-auto bg-secondary mt-20 font-outfit">
            <div className="h-full max-w-screen-xl mx-auto w-full justify-center flex flex-col mb-16">
                <div className='flex w-full'>
                    <img className="w-60 md:w-80 mt-2" src={siteLogoBlack} alt="Logo" />

                </div>
            </div>
            <div className="flex flex-col items-center mb-2">
                <p className="font-body text-black text-xs md:text-sm uppercase">Copyright &copy; 2024. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
