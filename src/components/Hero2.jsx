import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

function Hero2() {
  return (
    <div>

<div className=' flex flex-col gap-5 p-8'>
                        <div className=' grid grid-cols-3 gap-4'>
                            <div>
                                <div className=' text-bg1 text-sm font-semibold'>
                              Todays'Revenue
                                </div>
                                <div className=' flex items-start gap-1'>
                                    <p className=' text-text2 text-3xl font-bold'>$1,280</p>
                                    <p className=' text-text9 flex items-center gap-1 text-sm'><FaArrowTrendUp /> <p >9.2%</p></p>
                                </div>
                            </div>
                            <div>
                                <div className=' text-bg1 text-sm font-semibold'>
                                    Today's orders
                                </div>
                                <div className=' flex items-start gap-1'>
                                    <p className=' text-text2 text-3xl font-bold'>14</p>
                                    <p className=' text-text9 flex items-center gap-1 text-sm'><FaArrowTrendUp /> <p >6.6%</p></p>
                                </div>
                            </div>
                            <div>
                                <div className=' text-bg1 text-sm font-semibold'>
                                    Avg. Order value
                                </div>
                                <div className=' flex items-start gap-1'>
                                    <p className=' text-text2 text-3xl font-bold'>$91.42</p>
                                    <p className=' text-text9 flex items-center gap-1 text-sm'><FaArrowTrendUp /> <p >8.1%</p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                


    </div>
  )
}

export default Hero2