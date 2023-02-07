import React, { useEffect } from "react";
import regBannerImg from "../assets/regBannerImg.png";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhysicalBooks } from "../app/actions/physicalbook.action";

function BookBurrowPageComponent() {
  const books = useSelector((state) => state.physicalbook.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPhysicalBooks());
  }, [dispatch]);

  return (
    <div>
      <section id="hero">
        <div className="m-5">
          <div className="container flex bg-bannerBlue rounded-xl	 flex-col-reverse  px-10 py-10 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            <div className="my-5 md:mx-10 md:w-3/4">
              <h1 className="text-white text-2xl md:text-4xl mb-4 md:text-left">
                REGISTER HERE
              </h1>
              <p className="text-white text-[10px] md:text-xs mb-4 text-justify hidden md:block">
                Bookhub is an online platform that enables to donate and share
                books. We provide a platform for people to donate, share, and
                explore books of all genres. Through our platform, you can
                donate books to people in need, share books with other readers,
                and explore a wide range of books from all around the world. At
                Bookhub, we believe that books are a powerful tool for knowledge
                and understanding. We are committed to providing access to books
                to everyone, regardless of their financial or physical
                limitations. With our platform, we strive to promote learning
                and literacy for all. Thank you for visiting Bookhub and we hope
                you will find something you love!
              </p>
              <p className="text-white text-[10px] md:text-xs mb-4 text-justify">
                Bookhub is an online platform that enables to donate and share
                books. We provide a platform for people to donate, share, and
                explore books of all genres. Through our platform, you can
                donate books to people in need, share books with other readers,
                and explore a wide range of books from all around the world. At
                Bookhub, we believe that books are a powerful tool for knowledge
                and understanding. We are committed to providing access to books
                to everyone, regardless of their financial or physical
                limitations. With our platform, we strive to promote learning
                and literacy for all. Thank you for visiting Bookhub and we hope
                you will find something you love!
              </p>
            </div>
            {/* <!-- Image --> */}
            <div className="md:w-1/4">
              <img className="rounded-xl mx-auto" src={regBannerImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="search">
        <div className="m-2">
          <div className="container flex 	 flex-col-reverse  mx-auto  space-y-0 md:space-y-0 md:flex-row">
            <div className="mx-2 ">
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                  Search
                </span>
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="block w-full flex-1 rounded-none border-gray-300 focus:border-brightRed focus:ring-brightRed sm:text-sm"
                  placeholder="Enter the name of the book..."
                />
                <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                  <BiSearchAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="mx-10 my-5">
          <div className="container flex justify-start">
            <p className="ml-10 md:ml-6 text-slate-500 text-lg ">
              Newest Additions...
            </p>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Book Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Genre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Publisher
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edition
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Donated By
                  </th>
                </tr>
              </thead>
              <tbody>
                {books && books.map((book)=>{
                return (
                  <tr className="bg-white border-b " key={book.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {book.title}
                    </th>
                    <td className="px-6 py-4"> {book.author}</td>
                    <td className="px-6 py-4"> {book.genre}</td>
                    <td className="px-6 py-4"> {book.description}</td>
                    <td className="px-6 py-4"> {book.publisher}</td>
                    <td className="px-6 py-4"> {book.edition}</td>
                    <td className="px-6 py-4"> {book.donatedby}</td>
                    <td className="px-6 py-4"> {book.status}</td>
                    <td className="flex items-center px-6 py-4 space-x-3">
                      <a
                        href="/"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Request
                      </a>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookBurrowPageComponent;
