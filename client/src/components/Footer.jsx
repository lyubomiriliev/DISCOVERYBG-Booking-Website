import React from 'react'
import { siteLogoBlack } from '../assets'

const Footer = () => {
    return (
        <div className="w-full flex flex-col h-40 md:h-60 bg-secondary mt-20 font-outfit">
            <div className="h-full max-w-screen-xl mx-auto w-full justify-center flex flex-col">
                <img className="w-80 mt-5" src={siteLogoBlack} alt="Logo" />
                <p className="text-black w-1/3 text-xs mt-4 ml-2">Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet.</p>
            </div>
            <div className="flex flex-col items-center mb-2">
                <p className="text-black text-xs">Copyright &copy; 2024. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
