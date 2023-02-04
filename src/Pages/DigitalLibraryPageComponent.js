import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPapers } from "../app/actions/paper.action";
import { BiSearchAlt } from "react-icons/bi";
import PreviewSectionCardComponent from "../Components/PreviewSectionCardComponent";
import PaperComponent from "../Components/PaperComponent";

const paperType = {
  ADVANCED_LEVEL: "ADVANCED_LEVEL",
  ORDINARY_LEVEL: "ORDINARY_LEVEL",
  OTHER: "OTHER",
};

function DigitalLibraryPageComponent() {
  const [activeSlideIndex, setactiveSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const papers = useSelector((state) => state.paper.papers);

  const setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  useEffect(() => {
    dispatch(fetchAllPapers());
  }, []);

  const filterPapers = (papers, paperType) => {
    return papers.filter(function (el) {
      return el.paperType === paperType;
    });
  };

  return (
    <div>
      <section id="search">
        <div className="m-2">
          <div className="container flex 	 flex-col-reverse  mx-auto  space-y-0 md:space-y-0 md:flex-row">
            <div className=" md:w-3/4 mx-2 ">
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
            <div className="md:w-1/4 hidden md:block">
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
      <section id="search" className="hidden md:block">
        <div className="m-5">
          <div className=" container flex rounded-xl space-x-2 px-10 py-10">
            <PreviewSectionCardComponent cardName="Digital Books" />
            <PreviewSectionCardComponent cardName="Audio Books" />
            <PreviewSectionCardComponent cardName="Past Papers" />
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="mx-10 my-5">
          <div className="container flex justify-start">
            <p className="ml-10 md:ml-6 text-slate-500 text-lg ">Advanced Level</p>
          </div>
          <div className="container grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
            {papers &&
              filterPapers(papers, paperType.ADVANCED_LEVEL).map((paper) => {
                return (
                  <PaperComponent key={paper.id} paper={paper}/>
                );
              })}
          </div>
        </div>
        <div className="mx-10 my-5">
          <div className="container flex justify-start">
            <p className="ml-10 md:ml-6 text-slate-500 text-lg ">Ordinary Level</p>
          </div>
          <div className="container grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
            {papers &&
              filterPapers(papers, paperType.ORDINARY_LEVEL).map((paper) => {
                return (
                  <PaperComponent key={paper.id} paper={paper}/>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalLibraryPageComponent;
