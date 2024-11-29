import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Make sure to register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TestPage = () => {
      useEffect(() => {
            const cards = gsap.utils.toArray(".card");
            const spacer = 20;

            cards.forEach((card, index) => {
                  ScrollTrigger.create({
                        trigger: card,
                        start: `top-=${index * spacer} top+=10px`, // Adjust this based on your needs
                        endTrigger: '.pin-panel',
                        end: `bottom top+=${100 + (cards.length * spacer)}`,
                        pin: true,
                        pinSpacing: false,
                        markers: false, // Keep for debugging
                        id: 'card-pin',
                        invalidateOnRefresh: true,
                        onEnter: () => {
                              gsap.to(card, {
                                    scale: 0.98, duration: 0.5, ease: "power1.out"
                              })
                        },
                        onLeaveBack: () => {
                              gsap.to(card, {
                                    scale: 1.1, duration: 0.5, ease: "power1.out"
                              })
                        }
                  });
            });

            // Cleanup GSAP ScrollTrigger on component unmount
            return () => {
                  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
      }, []);

      return (
            <div>


                  <div className="pin-panel p-20">
                        <div className="flex gap-8">
                              <div className="cards flex-1 flex flex-col gap-8">

                                    <div className="card bg-pink-300 p-6 h-[60vh]">
                                          <p>Card 1</p>
                                    </div>
                                    <div className="card bg-blue-300 p-6 h-[60vh]">
                                          <p>Card 2</p>
                                    </div>
                                    <div className="card bg-red-300 p-6 h-[60vh]">
                                          <p>Card 3</p>
                                    </div>
                                    <div className="card bg-green-300 p-6 h-[60vh]">
                                          <p>Card 4</p>
                                    </div>
                                    <div className="card bg-yellow-300 p-6 h-[60vh]">
                                          <p>Card 5</p>
                                    </div>
                              </div>
                        </div>
                  </div>


                  <div className="flex justify-center items-center h-screen">
                        <div className="relative group">

                        </div>
                  </div>



            </div>
      );
};

export default TestPage;
