import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import PreviewSectionCardComponent from '../Components/PreviewSectionCardComponent';
import PastPapersGallery from '../Components/PastPapersGallery';
import DigitalBookGallery from '../Components/DigitalBooksGallery';
import { useDispatch } from 'react-redux';
import { filteringBooks } from '../app/slices/digitalbook.slice';

const sectionTypes = {
  DIGITAL_BOOKS: 'DIGITAL_BOOKS',
  PAST_PAPERS: 'PAST_PAPERS',
  AUDIO_BOOK: 'DIGITAL_BOOKS',
};

function DigitalLibraryPageComponent() {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(sectionTypes.DIGITAL_BOOKS);

  const sectionHandler = (sectionType) => {
    setActiveSection(sectionType);
  };

  return (
    <div>
      <section id='search'>
        <div className='m-2'>
          <div className='container flex 	 flex-col-reverse  mx-auto  space-y-0 md:space-y-0 md:flex-row'>
            <div className=' md:w-3/4 mx-2 '>
              <div className='mt-1 flex rounded-md shadow-sm'>
                <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500'>
                  Search
                </span>
                <input
                  type='text'
                  name='company-website'
                  id='company-website'
                  className='block w-full flex-1 rounded-none border-gray-300 focus:border-brightRed focus:ring-brightRed sm:text-sm'
                  placeholder='Enter the name of the book...'
                  onChange={(e) => dispatch(filteringBooks(e.target.value))}
                />
                <span className='inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500'>
                  <BiSearchAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='search' className='hidden md:block'>
        <div className='m-5'>
          <div className=' container flex rounded-xl space-x-2 px-10 py-10'>
            <PreviewSectionCardComponent
              cardName='Digital Books'
              onClick={() => {
                sectionHandler(sectionTypes.DIGITAL_BOOKS);
              }}
            />
            <PreviewSectionCardComponent
              cardName='Audio Books'
              onClick={() => {
                sectionHandler(sectionTypes.AUDIO_BOOK);
              }}
            />
            <PreviewSectionCardComponent
              cardName='Past Papers'
              onClick={() => {
                sectionHandler(sectionTypes.PAST_PAPERS);
              }}
            />
          </div>
        </div>
      </section>
      {activeSection === sectionTypes.DIGITAL_BOOKS && <DigitalBookGallery />}
      {/* // {activeSection === sectionTypes.AUDIO_BOOK && <PastPapersGallery />} */}
      {activeSection === sectionTypes.PAST_PAPERS && <PastPapersGallery />}
    </div>
  );
}

export default DigitalLibraryPageComponent;
