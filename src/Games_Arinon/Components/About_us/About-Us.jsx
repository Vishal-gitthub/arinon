import React from 'react'
import "./About.css"
import { NavLink } from 'react-router-dom'

export default function AboutUs() {
      return (
            <section className='aboutUsBg'>
                  <div className='text-white'>
                        <h1 className='uppercase text-5xl'>
                              About Us
                        </h1>
                        <div className='flex  gap-3'>
                              <NavLink to="/arinon-games" className={({ isActive }) => isActive ? "text-red-600" : "text-green-500"}>
                                    Home •
                              </NavLink>
                              <p>About Us</p>
                        </div>
                  </div>
            </section>
      )
}


