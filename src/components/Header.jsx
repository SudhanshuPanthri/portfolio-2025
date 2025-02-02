import React from 'react'
import logo from "../assets/logo.png";

const Header = ({ selectedCard, selectedCardImage }) => {
    console.log(selectedCard, selectedCardImage);
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='w-[30%] flex justify-between items-center'>
                <img src={logo} alt="logo" height={180} width={180} className='p-6' />
                {selectedCard == "About Me" && (
                    <>
                        <span>Education</span>
                        <span>Projects</span>
                        <span>Hobbies</span>
                    </>
                )}
                {selectedCard == "Education" && (
                    <>
                        <span>About Me</span>
                        <span>Projects</span>
                        <span>Hobbies</span>
                    </>
                )}
                {selectedCard == "Projects" && (
                    <>
                        <span>About Me</span>
                        <span>Education</span>
                        <span>Hobbies</span>
                    </>
                )}
                {selectedCard == "Hobbies" && (
                    <>
                        <span>About Me</span>
                        <span>Education</span>
                        <span>Projects</span>
                    </>
                )}
            </div>
            <div className='w-[70%] flex justify-end items-center gap-6 mr-10'>
                <span>Search</span>
                <div>
                    <img src={selectedCardImage} alt="profile" height={40} width={40} className='rounded-sm' />
                </div>
            </div>
        </div>
    )
}

export default Header
