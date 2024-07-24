import React from 'react'
import './Register.js'
import pic1 from '../Images/pic (1).png'
import pic2 from '../Images/pic (2).png'
import pic3 from '../Images/pic (3).png'

<script src="Register.js"/>

function Register() {
    function card1() {
        document.getElementById("card1").style.display = "none";
    }
    function card2() {
      document.getElementById("card2").style.display = "none";
  }
  function card3() {
    document.getElementById("card3").style.display = "none";
  }
  function card4() {
    document.getElementById("card4").style.display = "none";
  }
  function card5() {
    document.getElementById("whole").style.display = "none";
  }
  return (
    <div id="whole" className='absolute top-0 bg-gray-50/60 h-screen overflow-y-hidden z-50'>
        <div className='flex-col justify-center'>
            <div id='card1' className='text-center w-1/3 p-8 text-2xl font-semibold text-gray-500 bg-white rounded-2xl shadow-2xl m-auto mt-[5.4vw] z-50'>
            <h1 className='text-[2vw] font-normal text-black mb-12'>User Details</h1>
            <p>Name</p>
            <input type="text" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            <p className='mt-8'>Address</p>
            <input type="text" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            <p className='mt-8'>Phone Number</p>
            <input type="number" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            <button onClick={card1} className='block m-auto bg-red-500 px-4 py-2 rounded-2xl text-yellow-100 shadow-xl mt-12'>Next</button>
            </div>
            <div id='card2' className='text-center w-1/3 p-8 text-2xl font-semibold text-gray-500 bg-white rounded-2xl shadow-2xl m-auto mt-[5.4vw] '>
            <h1 className='text-[2vw] font-normal text-black mb-12'>User Details</h1>
            <p>Username</p>
            <input type="text" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            <p className='mt-8'>Email Address</p>
            <input type="text" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            <p className='mt-8'>Password</p>
            <input type="password" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            <button onClick={card2} className='block m-auto bg-red-500 px-4 py-2 rounded-2xl text-yellow-100 shadow-xl mt-12'>Next</button>
            </div>
            <div id='card3' className='text-center w-3/5 p-8 text-2xl font-semibold text-gray-500 bg-white rounded-2xl shadow-2xl m-auto mt-[5.4vw] '>
            <h1 className='text-[2vw] font-normal text-black mb-8'>Do You Want Save Money For The Future?? </h1>
            <img className='m-auto w-[10vw]' src={pic1} alt="" />
            <p className='text-lg'>A successful savings strategy is essential for financial stability and achieving long-term goals. Start by setting clear, specific goals for both short-term needs (like an emergency fund) and long-term objectives (such as retirement). Create a detailed budget to track income and expenses, allocating a fixed percentage of income to savings. Automate these savings through direct transfers to ensure consistency.</p>
            <div className='flex justify-around -mt-4'>
              <div className=''>
            <p className='mt-8'>Monthly Salary</p>
            <input type="number" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            </div>
            <div className=''>
            <p className='mt-8'>Monthly Expense</p>
            <input type="number" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            </div>
            </div>
            <button onClick={card3} className='block m-auto bg-red-500 px-4 py-2 rounded-2xl text-yellow-100 shadow-xl mt-8'>Next</button>
            </div>
            <div id='card4' className='text-center w-3/5 p-8 text-2xl font-semibold text-gray-500 bg-white rounded-2xl shadow-2xl m-auto mt-[5.4vw] '>
            <h1 className='text-[2vw] font-normal text-black mb-8'>Planning For Retirement??</h1>
            <img className='m-auto w-[10vw]' src={pic2} alt="" />
            <p className='text-lg'>
            Retirement planning is crucial for ensuring financial security in your later years. Start by determining your retirement goals, such as desired lifestyle and estimated expenses. Calculate the amount of money you'll need by considering factors like inflation and life expectancy.</p>
            <div className='flex justify-around'>
            <div className=''>
            <p className='mt-8'>Your Age</p>
            <input type="number" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            </div>
            <div className=''>
            <p className='mt-8'>Retirement Age</p>
            <input type="number" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            </div>
            </div>
            <button onClick={card4} className='block m-auto bg-red-500 px-4 py-2 rounded-2xl text-yellow-100 shadow-xl mt-12'>Next</button>
            </div>
            <div id='card5' className='text-center w-3/5 p-8 text-2xl font-semibold text-gray-500 bg-white rounded-2xl shadow-2xl m-auto mt-[5.4vw] '>
            <h1 className='text-[2vw] font-normal text-black mb-8'>Any Debt??</h1>
            <img className='m-auto w-[10vw]' src={pic3} alt="" />
            <p className='text-lg mt-4'>Debt management is essential for maintaining financial health and achieving long-term goals. Start by listing all your debts, including balances, interest rates, and monthly payments. Prioritize paying off high-interest debt first to reduce overall interest costs.</p>
            <div className='flex justify-around'>
            <div className=''>
            <p className='mt-4'>Amount</p>
            <input type="number" className='p-1 mt-4 border-[0.1vw] border-black rounded-2xl' />
            </div>
            </div>
            <button onClick={card5} className='block m-auto bg-red-500 px-4 py-2 rounded-2xl text-yellow-100 shadow-xl mt-8'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Register