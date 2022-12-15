import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import cardBackgroundImg from '../assets/cardBackgroundImg.png'

import PreviewSectionCardComponent from '../Components/PreviewSectionCardComponent';
import Carousel from "react-simply-carousel";




function DigitalLibraryPageComponent() {

    const [activeSlideIndex, setactiveSlideIndex] = useState(0)

    const setActiveSlideIndex = (newActiveSlideIndex) => {
        this.setState({
            activeSlideIndex: newActiveSlideIndex,
        });
    };

    return (
        <div>
            <section id='search'>
                <div className='m-2'>
                    <div class="container flex 	 flex-col-reverse  mx-auto  space-y-0 md:space-y-0 md:flex-row">
                        <div class=" md:w-3/4 mx-2 ">
                            <div class="mt-1 flex rounded-md shadow-sm">
                                <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500" >Search</span>
                                <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none border-gray-300 focus:border-brightRed focus:ring-brightRed sm:text-sm" placeholder="Enter the name of the book..." />
                                <span class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500" ><BiSearchAlt /></span>
                            </div>
                        </div>
                        <div class='md:w-1/4 hidden md:block'>
                            <div class="mt-1 flex rounded-md shadow-sm">
                                <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500" >Search</span>
                                <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none border-gray-300 focus:border-brightRed focus:ring-brightRed sm:text-sm" placeholder="Enter the name of the book..." />
                                <span class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500" ><BiSearchAlt /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='search' className='hidden md:block'>
                <div class="m-5">
                    <div class=" container flex rounded-xl space-x-2 px-10 py-10">
                        <PreviewSectionCardComponent />
                        <PreviewSectionCardComponent />
                        <PreviewSectionCardComponent />
                        <PreviewSectionCardComponent />
                        {/* <Carousel
                            containerProps={{
                                style: {
                                    width: "100%",
                                    justifyContent: "space-between",
                                    userSelect: "text"
                                }
                            }}
                            activeSlideIndex={activeSlideIndex}
                            forwardBtnProps={{
                                children: ">",
                                style: {
                                  width: 60,
                                  height: 60,
                                  minWidth: 60,
                                  alignSelf: "center"
                                }
                              }}
                              backwardBtnProps={{
                                children: "<",
                                style: {
                                  width: 60,
                                  height: 60,
                                  minWidth: 60,
                                  alignSelf: "center"
                                }
                              }}
                            onRequestChange={setActiveSlideIndex}
                            itemsToShow={3}
                            autoplay={true}
                            autoplayDirection={'forward'}
                        >
                            <PreviewSectionCardComponent />
                            <PreviewSectionCardComponent />
                            <PreviewSectionCardComponent />
                            <PreviewSectionCardComponent />
                            <PreviewSectionCardComponent />

                        </Carousel> */}

                    </div>
                </div>


            </section>
            <section id='gallery'>
                <div className='mx-10 my-5'>
                    <div class="container flex justify-start">
                        <p class="ml-10 md:ml-6 text-slate-500 text-lg ">
                            Newest Additions...
                        </p>
                    </div>
                    <div class="container flex flex-col md:flex-row">
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                    </div>


                </div>
                <div className='mx-10 my-5'>
                    <div class="container flex justify-start">
                        <p class="ml-10 md:ml-6 text-slate-500 text-lg ">
                            Non-fiction...
                        </p>
                    </div>
                </div>
            </section>
        </div>



    )
}

export default DigitalLibraryPageComponent