import React, { useState } from 'react';
import PortfolioNavbar from '../../Portfolio/PortfolioNavbar';

export default function Department_1() {
    const [formVisible, setFormVisible] = useState(false);
    const ToggleForm = () => {
        setFormVisible(!formVisible);
    };
    return (
        <div>
            <PortfolioNavbar />
            <div className='flex max-md:flex-col bg-purple-custom w-full'>
                <div className='max-md:static fixed flex flex-col items-start bg-purple-custom p-8 w-1/2 max-md:w-full h-screen max-md:h-auto'>
                    <div>
                        <h1 className='font-semibold text-5xl text-left text-white max-sm:text-2xl max-md:text-3xl leading-tight'>
                            Video Editor - Creative Content Production
                            <br />
                            <span className='text-white/50'> Remote / Full-time</span>
                        </h1>
                    </div>
                    <div className='bottom-20 left-5 absolute'>
                        <button
                            onClick={ToggleForm}
                            className='inline-flex relative justify-center items-center hover:border-white bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 border border-transparent rounded-full font-medium text-white transition-all'
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
                <div className='max-md:m-0 ml-[50%] w-1/2 max-md:w-full min-h-screen'>
                    <div className='bg-white p-8 max-md:rounded-t-md'>
                        <div className='space-y-3 rounded-tl-3xl'>
                            <h3 className='text-2xl text-black'>What You'll Do</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom tracking-widest list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Where You'll Be</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Onsite: You’ll be based out of our Ghitorni, Delhi office.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Experience *</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Experience: <strong>1+ Years</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Skills</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Video Editing:
                                        <strong>
                                            Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, Avid
                                            Media Composer,Lightworks, Adobe After Effects
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Audio Editing:
                                        <strong>Audacity, Adobe Audition, Logic Pro X</strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Adaptability:
                                        <strong>
                                            Comfortable working with different genres (corporate
                                            videos, ads, documentaries, etc.).
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Creativity:
                                        <strong>
                                            Ability to think outside the box and come up with
                                            unique, engaging ideas for videos.
                                        </strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-evenly items-center'>
                            <div>
                                <span className='text-black/60 text-sm'>Location</span>
                                <p>Ghitorni, Delhi</p>
                            </div>
                            <div>
                                <span className='text-black/60 text-sm'>Job Type</span>
                                <p>Permanent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`bottom-0 z-30 fixed bg-black text-white h-2/4 rounded-t-2xl transition-transform duration-500 ease-in-out ${
                    formVisible ? '-translate-y-0' : 'translate-y-full'
                } `}
            >
                <div>
                    <button className='float-right p-4 font-bold' onClick={ToggleForm}>
                        X
                    </button>
                </div>
                <div className='px-5 py-10'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium at
                    reiciendis blanditiis soluta iusto quas aspernatur eius porro dolores qui nisi,
                    veniam ex in molestiae temporibus suscipit eligendi ducimus minima, sed deleniti
                    quasi pariatur sint quos. Illum illo veniam minima sint corrupti ullam, quaerat
                    officiis laborum quia quo pariatur sed, voluptas eaque expedita porro? Totam
                    laborum odit delectus fugit possimus quos aspernatur accusantium distinctio
                    eligendi doloribus quidem fuga minima provident quibusdam placeat nostrum natus
                    et animi, tempore sunt. Cum, ullam. Necessitatibus optio iure voluptate iste
                    repudiandae. Culpa quod fugiat sequi dolorem? Sint ipsa suscipit quia deleniti
                    laborum eaque optio, tenetur sed iusto dolor provident rerum minima quas ullam
                    odio, assumenda ut itaque quod cupiditate voluptas reiciendis quibusdam dicta!
                    Inventore natus est iusto recusandae mollitia incidunt ad fugiat laborum
                    dolorem? Qui quam, repudiandae molestias, minima, a provident maiores laudantium
                    odit placeat cumque neque vitae? Rem enim molestiae tenetur deleniti quis nisi
                    minus. Sunt fuga minima vitae, explicabo officiis dignissimos modi suscipit
                    dicta quae odio, nihil libero perspiciatis quo ut. Impedit doloribus cum iste
                    dolores voluptatem excepturi molestiae earum ab consequuntur, libero illo error
                    repellat sunt. Ducimus quas commodi quasi. Aut error, quisquam culpa omnis
                    facere est ex ipsa velit ratione incidunt molestias iure, vel repudiandae,
                    laudantium deserunt. Porro ratione nostrum repudiandae, consequatur rem quam
                    corrupti delectus voluptas facilis hic adipisci! Accusamus sequi voluptate unde
                    excepturi libero quo consequuntur necessitatibus. Dolorum, sint dolores? Dolore
                    illo consequuntur eos ad officiis quisquam id? Laudantium, sequi dolorum?
                    Laboriosam est itaque delectus quibusdam repudiandae adipisci placeat! Minima
                    cupiditate ut, velit, perferendis et odio ab corporis alias vitae placeat
                    architecto iste? Minus soluta atque nulla qui, praesentium in! Esse minima quod
                    alias sint nobis consequuntur in suscipit perspiciatis, velit sed animi, eveniet
                    obcaecati ipsum enim nihil aliquam dolores optio ea perferendis incidunt.
                    Deserunt dolor sed laudantium reprehenderit vero aspernatur adipisci voluptas,
                    nesciunt laboriosam consequatur possimus illo commodi aperiam nulla perspiciatis
                    ea corporis facere placeat vel doloremque? Dicta fugit sequi repellendus, ea
                    rerum eum labore, quod doloremque similique obcaecati enim a aperiam.
                </div>
            </div>
        </div>
    );
}
