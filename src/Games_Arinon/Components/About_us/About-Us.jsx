import React from 'react'
import "./About.css"
import { NavLink } from 'react-router-dom'
import console from "../../../Image_Files/GamesImages/Arinon_Games_remote.png"

export default function AboutUs() {
      return (
            <section className='aboutUsBg'>
                  <div className='flex justify-between  px-10'>
                        <div className='text-white'>
                              <h1 className='uppercase text-5xl font-semibold py-3'>
                                    About Us
                              </h1>
                              <div className='flex gap-3 '>
                                    <NavLink to="/arinon-games" className={({ isActive }) => isActive ? "text-red-600" : "text-green-500"}>
                                          Home •
                                    </NavLink>
                                    <p>About Us</p>
                              </div>
                        </div>
                        <div className='w-52 max-sm:hidden hover:animate-puls shakeAnimate'>
                              <div>
                                    <img src={console} className='w-full' alt="" />
                              </div>
                        </div>
                  </div>
            </section>
      )
}


