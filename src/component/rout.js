import React from "react";
import { Link } from "react-router-dom";
import Img from "../images/aaaa.png"
import { TbCalendarTime } from "react-icons/tb"

function Rout() {
    return (

        <>
            <section class="route text-gray-600 body-font bg-[ #FAFAFA] h-[70vh]  ">


                <div class="container px-5 py-24 mx-auto ">
                    <div className="flex items-center justify-center">
                        <h2 class="text-base title-font text-red-600 font-bold tracking-widest  EventScheduleDetails ">Event Schedule Details</h2>
                        <img src={Img} />
                    </div>
                    <h1 class="text-gray-900 text-[48px] font-extrabold ml-56 ">Information of Event Schedules</h1>
                </div>
                <div class="grid grid-cols-4 gap-1 w-[70%]  items-center mx-[15%]">

                    <Link to="/">
                        <button className="h-[13vh] w-[16vw] hover:text-white flex justify-center items-center border hover:bg-orange-600 rounded-md">
                            <div className="h-10 w-10 ">
                                <TbCalendarTime className="text-red-500 h-[100%] w-[100%] hover:text-white" />
                            </div>
                            <div className="flex flex-col w-36  h-14  ml-6">
                                <h1 className="">Day-01</h1>
                                <h1 className="text-slate-400" >15th june, 2022</h1>
                            </div>
                        </button>
                    </Link>

                    <Link to="/Route2">

                        <button className="h-[13vh] w-[16vw] hover:text-white flex justify-center items-center border rounded-md hover:bg-orange-600">
                            <div className="h-10 w-10 ">
                                <TbCalendarTime className="text-red-500 h-[100%] w-[100%] hover:text-white" />
                            </div>
                            <div className="flex flex-col w-36  h-14  ml-6">
                                <h1 className="">Day-01</h1>
                                <h1 className="text-slate-400" >15th june, 2022</h1>
                            </div>
                        </button>
                    </Link>
                    <Link to="/Route3">

                        <button className="h-[13vh] w-[16vw] hover:text-white flex justify-center items-center border rounded-md hover:bg-orange-600">
                            <div className="h-10 w-10 ">
                                <TbCalendarTime className="text-red-500 h-[100%] w-[100%] hover:text-white" />
                            </div>
                            <div className="flex flex-col w-36  h-14  ml-6">
                                <h1 className="">Day-01</h1>
                                <h1 className="text-slate-400" >15th june, 2022</h1>
                            </div>
                        </button>
                    </Link>
                    <Link to="/Route4">
                        <button className="h-[13vh] w-[16vw] hover:text-white flex justify-center items-center border rounded-md hover:bg-orange-600">
                            <div className="h-10 w-10">
                                <TbCalendarTime className="text-red-500 h-[100%] w-[100%] hover:text-white" />
                            </div>
                            <div className="flex flex-col w-36  h-14  ml-6">
                                <h1 className="">Day-01</h1>
                                <h1 className="text-slate-400 " >15th june, 2022</h1>
                            </div>
                        </button>
                    </Link>

                </div>
            </section>
        </>
    )
}

export default Rout