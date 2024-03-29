import { Carousel } from 'flowbite-react'

function Veryimportantservice() {
  return (
    <>
      <div className=" bg-sky-500 py-20 text-slate-100 text-lg font-medium font-sans">
        <div className="flex px-5 py-12 lg:flex-row flex-col text-white justify-between shadow-amber-500 shadow-3xl">
          <div
            data-aos="fade-right"
            className="basis 2/3 h-56 md:h-96 order-last lg:order-first relative place-self-center w-full lg:mr-10 overflow-hidden pt-10 md:pt-0 min-h-[58.5vw] md:min-h-[53.075vw] min-w-[55vw] lg:min-h-[31.075vw]"
          >
            <Carousel id="default-carousel" className="">
              <a href="images/vif1.jpg">
                <img
                  src="images/vif1.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="home page"
                ></img>
              </a>

              <a href="images/vif2.jpg">
                <img
                  src="images/vif2.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="terms of service page"
                ></img>
              </a>
              <a href="images/vif3.jpg">
                <img
                  src="images/vif3.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="form page"
                ></img>
              </a>

              <a href="images/vif4.jpg">
                <img
                  src="images/vif4.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="captcha page"
                ></img>
              </a>
            </Carousel>
          </div>
          <div data-aos="fade-left">
            <div className="basis-1/3 flex-initial lg:flex-shrink md:pb-10 flex flex-col mx-auto min-w-[33.33333vw] ">
              <a href="https://github.com/Ryan-Kendrick/very-important-service">
                <h2 className="hover:text-amber-500 hover:scale-110 duration-300 text-5xl pb-12 text-center">
                  Very Important Service
                </h2>
              </a>
              <blockquote className="p-4 my-4 border-l-4 border-gray-300 ">
                <p className="text-xl italic font-medium leading-relaxed">
                  Getting data from users in a suitable format is important, but
                  nobody likes an unintuitive returning angry red text. An
                  experiment in form validation made in React.
                </p>
              </blockquote>

              <h3 className="sm:text-2xl text-1xl py-6">Features</h3>
              <ul className="list-disc list-inside">
                <li>A very long terms of service you must read</li>
                <li>An annoying form</li>
                <li>An ambiguous CAPTCHA</li>
              </ul>
              <p className="mt-3 pt-3 border-t">
                An afternoon group project where I dabbled in input validation
                and displaying errors. With more time I would have liked to do
                more with validation requirements and occasionally messing with
                user input.
              </p>

              <div className="pt-12 mx-auto">
                <form
                  action="https://github.com/Ryan-Kendrick/very-important-service"
                  target="_blank"
                >
                  <span className="cursor-pointer inline-block border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:shadow-outline">
                    <input
                      className="cursor-pointer"
                      type="submit"
                      value="See on GitHub"
                    ></input>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block fill-current w-6 h-6 ml-2 mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Veryimportantservice
