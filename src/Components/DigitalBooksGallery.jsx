import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../app/actions/digitalbook.action';
import DigitalBookComponent from './DigitalBookComponent';

export default function DigitalBookGallery() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.digitalbook.filterBooks);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
    <section id='gallery'>
      <div className='mx-10 my-5'>
        <div className='container flex justify-start'>
          <p className='ml-10 md:ml-6 text-slate-500 text-lg '>Digital Books</p>
        </div>
        <div className='container grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8'>
          {books &&
            books.map((book) => {
              return <DigitalBookComponent key={book.id} book={book} />;
            })}
        </div>
      </div>
    </section>
  );
}
