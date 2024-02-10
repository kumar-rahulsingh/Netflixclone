import CreateProfiles from "../components/CreateProfiles"
import Download from "../components/Download"
import Enjoy from "../components/Enjoy"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Watch from "../components/Watch"
import { faqData } from "../data/faqData"


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Enjoy />
      <Download />
      <Watch />
      <CreateProfiles />

      <div>
        <h2 className='text-white text-center lg:text-5xl md:text-5xl text-3xl font-bold  py-10'>Frequently Asked <br className=' lg:hidden md:hidden' /> Questions</h2>
        <div className='mb-10'>
          {faqData.map((item, index) => {
            const { title, desc } = item
            return (
              <Faq title={title} desc={desc} />
            )
          })}
        </div>

        <div className=" lg:mb-16 md:mb-16 mb-10">
          <p
            className='text-center text-white lg:text-xl md:text-xl
                    text-lg mb-5'>Ready to watch? Enter your email to <br className=' lg:hidden md:hidden' /> create or restart your membership.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <input
              type="text"
              className=' bg-[#1d1e1e] text-white text-lg py-3 px-3 w-80 lg:w-96 rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50   outline-none mb-5 lg:mb-0'
              placeholder='Email address'
            />
            <button
              className='bg-[#e50815] flex items-center gap-2 py-3 px-5 rounded-lg'>
              <p className='text-white font-bold text-xl'>Get Started</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className='hr_Line' />
      </div>

      <Footer/>


    </div>
  )
}


