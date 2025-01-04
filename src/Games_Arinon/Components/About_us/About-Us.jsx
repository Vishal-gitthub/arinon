import React from 'react'
import "./About.css"
import { NavLink } from 'react-router-dom'
import console from "../../../Image_Files/GamesImages/Arinon_Games_remote.png"

export default function AboutUs() {
      return (
            <section>
                  <div className='aboutUsBg'>


                        <div className='flex justify-between  px-10'>
                              <div className='text-white'>
                                    <h1 className='uppercase text-5xl font-semibold py-3'>
                                          About Us
                                    </h1>
                                    <div className='flex gap-3 '>
                                          <NavLink to="/arinon-games" className='text-orange-custom hover:text-blue-custom'>
                                                Home •
                                          </NavLink>
                                          <p>About Us</p>
                                    </div>
                              </div>
                              <div className='w-52 max-sm:hidden shakeAnimate'>
                                    <div>
                                          <img src={console} className='w-full' alt="" />
                                    </div>
                              </div>
                        </div>
                  </div> 
                  <div id='about-us'>
                        <div className='flex justify-between px-5 montserrat-bold  py-10'>
                              <h1 className='text-4xl'>About Us ⏎</h1>
                        </div>

                  </div>
                  <hr />

                  <div className='flex justify-end max-md:justify-center py-10'>
                        <div className='w-3/4'>
                              <h1 className='text-2xl max-md:text-2xl '>At Arinon Games, we are passionate about creating immersive, captivating gaming experiences. As a leading game publisher and developer, we specialize in bringing innovative game concepts to life. From strategic development to marketing, we guide each project through every stage to ensure it reaches its full potential.
                                    <br />
                                    <p className='pt-2'>

                                          Our team combines creativity, technology, and industry expertise to craft games that engage, entertain, and inspire players worldwide. Whether you're looking to publish a game or develop a new concept, Arinon Games is dedicated to delivering exceptional experiences that resonate with audiences and stand out in the gaming
                                    </p>
                              </h1>
                        </div>
                  </div>


            </section>
      )
}


