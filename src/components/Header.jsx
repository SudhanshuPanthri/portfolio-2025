import React from 'react'
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = ({ selectedCard, selectedCardImage }) => {
    console.log(selectedCard, selectedCardImage);
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='w-[30%] flex justify-between items-center'>
                <Link to='/'>
                    <img src={logo} alt="logo" height={180} width={180} className='p-6' />
                </Link>
                {selectedCard == "About Me" && (
                    <div className='flex gap-6'>
                        <span>Experience</span>
                        <span>Projects</span>
                        <span>Hobbies</span>
                    </div>
                )}
                {selectedCard == "Education" && (
                    <div className='flex gap-6'>
                        <span>About Me</span>
                        <span>Projects</span>
                        <span>Hobbies</span>
                    </div>
                )}
                {selectedCard == "Projects" && (
                    <div className='flex gap-6'>
                        <span>About Me</span>
                        <span>Experience</span>
                        <span>Hobbies</span>
                    </div>
                )}
                {selectedCard == "Hobbies" && (
                    <div className='flex gap-6'>
                        <span>About Me</span>
                        <span>Experience</span>
                        <span>Projects</span>
                    </div>
                )}
            </div>
            <div className='w-[70%] flex justify-end items-center gap-6 mr-10'>
                <CiSearch size={30} />
                <span className=''>{selectedCard}</span>
                <div>
                    <img src={selectedCardImage} alt="profile" height={40} width={40} className='rounded-sm' />
                </div>
            </div>
        </div>
    )
}

export default Header
