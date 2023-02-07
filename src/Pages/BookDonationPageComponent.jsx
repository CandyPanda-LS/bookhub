import { React, useState } from "react";
import regBannerImg from "../assets/regBannerImg.png";

function BookDonationPageComponent() {
  // physical books
  const [title, settitle] = useState();
  const [author, setauthor] = useState();
  const [genre, setgenre] = useState();
  const [description, setdescription] = useState();
  const [publisher, setpublisher] = useState();
  const [edition, setedition] = useState();
  const [donatedBy, setdonatedBy] = useState();

  //Audio books
  const [audiobooktitle, setaudiobooktitle] = useState();
  const [audiobookauthor, setaudiobookauthor] = useState();
  const [audiobookgenre, setaudiobookgenre] = useState();
  const [audiobookdescription, setaudiobookdescription] = useState();
  const [audiobookpublisher, setaudiobookpublisher] = useState();
  const [audiobookedition, setaudiobookedition] = useState();
  const [audiobooklink, setaudiobooklink] = useState();

  //Digital books
  const [digitalbooktitle, setdigitalbooktitle] = useState();
  const [digitalbookauthor, setdigitalbookauthor] = useState();
  const [digitalbookgenre, setdigitalbookgenre] = useState();
  const [digitalbookdescription, setdigitalbookdescription] = useState();
  const [digitalbookpublisher, setdigitalbookpublisher] = useState();
  const [digitalbookedition, setdigitalbookedition] = useState();
  const [digitalbooklink, setdigitalbooklink] = useState();

  const donationHandlerPhysical = () => {
    const physicalBookObj = {
      title,
      author,
      genre,
      description,
      publisher,
      edition,
      donatedBy,
    };
  };
  const donationHandlerAudio = () => {
    const audioBookObj = {
      audiobooktitle,
      audiobookauthor,
      audiobookgenre,
      audiobookdescription,
      audiobookpublisher,
      audiobookedition,
      audiobooklink,
    };
  };
  const donationHandlerDigital = () => {
    const digitalBookObj = {
      digitalbooktitle,
      digitalbookauthor,
      digitalbookgenre,
      digitalbookdescription,
      digitalbookpublisher,
      digitalbookedition,
      digitalbooklink,
    };
  };
  return (
    <div>
      <section id="hero">
        <div className="m-5">
          <div className="container flex bg-bannerBlue rounded-xl	 flex-col-reverse  px-10 py-10 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            <div className="my-5 md:mx-10 md:w-3/4">
              <h1 className="text-white text-2xl md:text-4xl mb-4 md:text-left">
                Donate here
              </h1>
              <p className="text-white text-[10px] md:text-xs mb-4 text-justify hidden md:block">
                Bookhub is an online platform that connects book lovers and
                encourages the sharing and donation of books. Our goal is to
                make knowledge and learning accessible to everyone, regardless
                of their financial or physical constraints. With a diverse
                selection of books from around the world, our platform provides
                an opportunity for people to donate, share, and discover books
                of all genres. We believe that books are a valuable tool for
                learning and growth, and our mission is to promote literacy and
                education for all. Thank you for choosing Bookhub, where you're
                sure to find a book you love.
              </p>
              <p className="text-white text-[10px] md:text-xs mb-4 text-justify">
                Bookhub is a unique and innovative platform that brings together
                book lovers from all walks of life. Our platform provides a
                space for individuals to not only discover new books and genres,
                but also to give back to the community by donating and sharing
                books. Our mission is to break down barriers and make books
                accessible to everyone, regardless of their financial or
                physical limitations. We believe that books hold immense power
                and are a vital tool for learning, growth, and personal
                development. By providing access to books, we aim to encourage
                literacy and promote a love for reading and learning. Whether
                you're an avid reader, a student, or just someone who
                appreciates the power of books, Bookhub is the perfect place for
                you.
              </p>
            </div>
            {/* <!-- Image --> */}
            <div className="md:w-1/4">
              <img className="rounded-xl mx-auto" src={regBannerImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="DonationForm" className="p-5">
        <div className="container shadow rounded-xl border-2 borer-grey">
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5"></div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Book Donation Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Please provide correct information of the book that you are
                    willing to donate
                  </p>
                </div>
              </div>

              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Book Title
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => settitle(e.target.value)}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Author name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setauthor(e.target.value)}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Genre
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setgenre(e.target.value)}
                          >
                            <option>Education</option>
                            <option>Fiction</option>
                            <option>Science Fiction</option>
                            <option>History</option>
                            <option>Poetry</option>
                            <option>Short Story</option>
                            <option>Fairy Tale</option>
                            <option>Autobiography</option>
                            <option>Thriller</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm text-left font-medium text-gray-700"
                          >
                            Discription
                          </label>
                          <textarea
                            id="about"
                            name="about"
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Discription about the donation book"
                            onChange={(e) => setdescription(e.target.value)}
                          ></textarea>
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Publisher
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setpublisher(e.target.value)}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Edition
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setedition(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 mt-5">
                    Audio Books
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    This may help you to publish audiobooks to the digital
                    library. Make sure you have the necessary copyrights to
                    publish it{" "}
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Book Title
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setaudiobooktitle(e.target.value)}

                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Author name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setaudiobookauthor(e.target.value)}

                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Genre
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setaudiobookgenre(e.target.value)}

                          >
                            <option>Education</option>
                            <option>Fiction</option>
                            <option>Science Fiction</option>
                            <option>History</option>
                            <option>Poetry</option>
                            <option>Short Story</option>
                            <option>Fairy Tale</option>
                            <option>Autobiography</option>
                            <option>Thriller</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm text-left font-medium text-gray-700"
                          >
                            Discription
                          </label>
                          <textarea
                            id="about"
                            name="about"
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Discription about the audio book"
                            onChange={(e) => setaudiobookdescription(e.target.value)}

                          ></textarea>
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Publisher
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setaudiobookpublisher(e.target.value)}

                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Edition
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setaudiobookedition(e.target.value)}

                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Audio Book
                          </label>
                          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Book Donation Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Please provide correct information of the book that you are
                    willing to donate
                  </p>
                </div>
              </div>

              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Book Title
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setdigitalbooktitle(e.target.value)}

                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Author name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setdigitalbookauthor(e.target.value)}

                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Genre
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setdigitalbookgenre(e.target.value)}

                          >
                            <option>Education</option>
                            <option>Fiction</option>
                            <option>Science Fiction</option>
                            <option>History</option>
                            <option>Poetry</option>
                            <option>Short Story</option>
                            <option>Fairy Tale</option>
                            <option>Autobiography</option>
                            <option>Thriller</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm text-left font-medium text-gray-700"
                          >
                            Discription
                          </label>
                          <textarea
                            id="about"
                            name="about"
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Discription about the audiobook"
                            onChange={(e) => setdigitalbookdescription(e.target.value)}

                          ></textarea>
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Publisher
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setdigitalbookpublisher(e.target.value)}

                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-left text-gray-700"
                          >
                            Edition
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setdigitalbookedition(e.target.value)}

                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Book cover Image
                          </label>
                          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookDonationPageComponent;
