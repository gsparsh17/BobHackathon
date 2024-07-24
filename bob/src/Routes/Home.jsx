import React from 'react'
import img1 from "../Images/pic.png"
import Ap from "../Ap.jsx"
import Discover from './Discover.jsx'

function Home() {
  return (
    <div className='bg-orange-50 h-screen mt-12'>
        {/* <Ap/> */}
        <div className='flex pt-24 justify-center gap-x-[4vw]'>
            <div className='my-auto w-1/2 -mt-8'>
                <h1 className='font-bold text-[6vw] text-red-500'>BOBInvest</h1>
                <h2 className='font-semibold text-yellow-400 -mt-[2.5vw] text-[3vw]'>Financial Advisory Platform</h2>
                <br/>
                <br />
                <p className='font-serif leading-[1.3vw] text-[1.2vw] text-gray-500'>It involves integrating various key services to help individuals achieve their financial goals. The platform will provide tailored investment advice, guiding users to make informed decisions based on their risk tolerance, time horizon, and financial objectives. It will offer savings strategies to help users build and grow their wealth over time, ensuring they have adequate funds for both short-term needs and long-term goals.</p>
                <br/>
                <p className='font-serif leading-[1.3vw] text-[1.2vw] text-gray-500'>Tax optimization strategies will be provided to help users minimize their tax liabilities and maximize their savings, ensuring compliance with tax laws while taking advantage of available benefits. Expense management tools will help users track and control their spending, enabling them to create and adhere to budgets that support their overall financial plans.</p>
                <input className=" bg-orange-50 active:bg-white hover:bg-white w-[44vw] h-[3vw] mt-4 border-[0.1vw] border-red-500 checked:border-red-500 rounded-3xl pl-4" type="text" placeholder="Ask Your Quick Doubts Here..."></input>
                <button className='-z-9 relative -left-[3vw] top-[0.6vw]'><svg class="mt-8 svg-icon search-icon w-[2.2vw] h-[2.2vw]" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg></button>
            </div>
            <div className=''>
                <img className='w-[450px]' src={img1} alt="" />
            </div>
        </div>
        <Discover/>
    </div>
  )
}

export default Home