import React from "react";
import illustration from "../assets/illustration.png";
import avatarAnisha from "../assets/avatar-anisha.png";
import avatarAli from "../assets/avatar-ali.png";
import avatarRichard from "../assets/avatar-richard.png";

function HomePageComponent() {
  return (
    <div>
      <h1>
        {/* <!-- Hero Section --> */}
        <section id="hero">
          {/* <!-- Flex Container --> */}
          <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            {/* <!-- Left item --> */}
            <div className="flex flex-col  space-y-12 md:w-1/2">
              <h1 className="max-w-md text-3xl font-bold text-center md:text-5xl md:text-left">
                Bring everyone together to build better future for our children
              </h1>
              <p className="max-w-sm text-xs	text-justify text-center text-darkGrayishBlue md:text-left">
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
              <div className="flex justify-center md:justify-start">
                <a
                  href="#"
                  className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                >
                  Get Started
                </a>
              </div>
            </div>
            {/* <!-- Image --> */}
            <div className="md:w-1/2">
              <img
                width="110%"
                className="rounded-3xl"
                src={illustration}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* <!-- Features Section --> */}
        <section id="features">
          {/* <!-- Flex container --> */}
          <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            {/* <!-- What's Different --> */}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                What's different about BookHub?
              </h2>
              <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                At Bookhub, we believe that books are a powerful tool for
                knowledge and understanding. We are committed to providing
                access to books to everyone, regardless of their financial or
                physical limitations. With our platform, we strive to promote
                learning and literacy for all. Our platform provides :
              </p>
              <ul type="disc">
                <li>Access to books in the open domain</li>
                <li>Access to past papers</li>
                <li>Ability to donate stationary and books for the needful</li>
                <li>Ability to Burrow and share books with friends</li>
                <li>
                  Register today and get access to all the available features.
                </li>
              </ul>
            </div>

            {/* <!-- Numbered List --> */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* <!-- List Item 1 --> */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* <!-- Heading --> */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      01
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Track company-wide progress
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Track company-wide progress
                  </h3>
                  <p className="text-darkGrayishBlue">
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    down to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </div>

              {/* <!-- List Item 2 --> */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* <!-- Heading --> */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      02
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Advanced built-in reports
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Advanced built-in reports
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </div>

              {/* <!-- List Item 3 --> */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* <!-- Heading --> */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      03
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Everything you need in one place
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Everything you need in one place
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <section id="testimonials">
          {/* <!-- Container to heading and testm blocks --> */}
          <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* <!-- Heading --> */}
            <h2 className="text-4xl font-bold text-center">
              What's Different About Manage?
            </h2>
            {/* <!-- Testimonials Container --> */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
              {/* <!-- Testimonial 1 --> */}
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                <img src={avatarAnisha} className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">Anisha Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>

              {/* <!-- Testimonial 2 --> */}
              <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                <img src={avatarAli} className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">Ali Bravo</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “We have been able to cancel so many other subscriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused.”
                </p>
              </div>

              {/* <!-- Testimonial 3 --> */}
              <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                <img src={avatarRichard} className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">Richard Watts</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            </div>
            {/* <!-- Button --> */}
            <div className="my-16">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </h1>
    </div>
  );
}

export default HomePageComponent;
