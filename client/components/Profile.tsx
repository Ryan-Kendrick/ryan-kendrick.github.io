import { Dispatch, SetStateAction, useEffect } from 'react'

interface Props {
  setNavPos: Dispatch<SetStateAction<number | undefined>>
}

function Profile({ setNavPos }: Props) {
  useEffect(() => {
    const handleScroll = (evt: Event) => {
      const profile = document.getElementById('profile')

      const profileHeight = profile?.clientHeight
      profileHeight && setNavPos(profileHeight)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setNavPos])

  useEffect(() => {})

  return (
    <>
      <section
        id="profile"
        className="flex min-h-[40vh] px-5 py-12 md:flex-row flex-col items-start text-white bg-gradient-to-r from-sky-500 to-indigo-500 justify-between"
      >
        <div className="basis-2/3 min-h-[40vh] md:border-r-4 px-2 border-gray-300 text-base lg:flex-grow md:w-1/2">
          <h2 className="text-5xl pb-10 pb-12 text-white text-center font-bold">
            About Me
          </h2>
          <p className="text-2xl pb-2 text-slate-200 font-medium font-sans">
            I&apos;m Ryan and I&apos;m a web developer with a background in
            technical support and the social sciences.
          </p>
          <br></br>
          <p className="text-slate-200 text-lg font-medium font-sans">
            In the past few years I have been getting back to my technical
            roots, exploring what a more technical career path might look like.
            It was when I began helping out with the websites of a think-tank at
            Victoria University on a contract basis that I found what I was
            looking for. I was so fascinated by the work of my predecessor that
            I began taking coding courses. When I finally managed to clone down
            the website to start experimenting with my own code, it dawned on me
            that I had found what I was looking for. Dev Academy seemed like
            natural progression. This process of upskilling and orienting my
            career towards progressively more technical pursuits has been a
            blast, and I am looking to continue that journey.
          </p>
        </div>
        <div className="min-h-[40vh] basis-1/3 relative text-base lg:flex-grow md:w-1/2 divide-l-4">
          <h2 className="text-5xl pb-10 pb-12 text-center font-bold">
            Ryan Online
          </h2>
          <ul className="py-12 list-none text-white text-lg pl-2">
            <li className="flex items-center">
              <img
                className="basis 1/10 inline-block w-4 h-4 rounded-full ring-offset-2 ring"
                src="images/linkedin.png"
                alt="linkedin icon"
              ></img>
              <a
                className="inline-block pl-3 underline underline-offset-2"
                href="https://www.linkedin.com/in/ryan-kendrick-275258272/"
              >
                https://www.linkedin.com/in/ryan-kendrick-275258272/
              </a>
            </li>
            <li className="flex items-center">
              <img
                className="inline-block w-4 h-4 rounded-full ring-offset-2 ring"
                src="images/github.png"
                alt="github icon"
              ></img>
              <a
                className="inline-block pl-3 underline underline-offset-2"
                href="https://github.com/Ryan-Kendrick"
              >
                https://github.com/Ryan-Kendrick
              </a>
            </li>
            <li className="flex items-center">
              <img
                className="inline-block w-4 h-4 rounded-full ring-offset-2 ring"
                src="images/location.png"
                alt="location icon"
              ></img>
              <p className="inline-block pl-3">Wellington Central</p>
            </li>
            <li className="flex items-center">
              <img
                className="inline-block w-4 h-4 rounded-full ring-offset-2 ring"
                src="images/flag.png"
                alt="nz flag icon"
              ></img>
              <p className="inline-block pl-3">NZ citizen </p>
            </li>
          </ul>
          <div className="flex pt-12 justify-center	items-center">
            <form action="images/ryanscv.pdf" target="_blank">
              <span className="inline-flex items-center cursor-pointer inline-block border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:shadow-outline">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <input
                  className="cursor-pointer"
                  type="submit"
                  value="View CV"
                ></input>
              </span>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
