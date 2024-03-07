import React, { useState } from "react";
import { MdOutlineError } from "react-icons/md";

function Performance() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="">
        <div className="flex gap-12 text-sm text-[#626569] mt-2 cursor-pointer overflow-scroll md:overflow-hidden">
            {[
            "Overview",
            "Fundamentals",
            "News Insights",
            "Sentiments",
            "Team",
            "Technicals",
            "Tokenomics",
            ].map((item, index) => {
            return (
                <div
                className={` text-nowrap pb-2 ${
                    selected === index + 1
                    ? " border-b-[3px] border-[#2b62e2] text-[#2b62e2]"
                    : ""
                } `}
                onClick={() => setSelected(index + 1)}
                key={index}
                >
                {item}
                </div>
            );
            })}
        </div>

        <div className="w-[99%] h-[2px] bg-[#62656934] border-none mb-6"></div>

        <div className="p-2 bg-white rounded-md mt-3 shadow-md md:p-4 md:px-6 flex flex-col md:gap-5 gap-1">
            <div className=" text-lg md:text-xl font-bold pt-2">Performance</div>

            <div className="flex flex-col md:gap-4 gap-3">
            <div className="flex w-[100%] items-center justify-between">
                <div className="w-[15%] md:w-[10%] text-xs flex flex-col gap-2">
                    <div className=" font-medium text-gray-700">Today's Low</div>
                    <div className=" text-[14px] font-medium">46,930.22</div>
                </div>
                <div className="md:w-[72%] w-[68%]">
                <div className="w-[100%] h-[6px] bg-gradient-to-r from-[#F74F46] from-0% via-[#F7A519] via-50% to-[#3DDF60] to-100%  rounded-md"></div>
                </div>
                <div className="w-[15%] md:w-[10%] text-xs flex flex-col items-end gap-2">
                <div className=" font-medium text-gray-700">Today's High</div>
                <div  className=" text-[14px] font-medium">46,343.82</div>
                </div>
            </div>
            <div className="flex w-[100%]items-center justify-between">
                <div className="w-[15%] md:w-[10%] text-xs flex flex-col gap-2 ">
                    <div className=" font-medium text-gray-700">52W Low</div>
                    <div className=" text-[14px] font-medium">46,930.22</div>
                </div>
                <div className="md:w-[72%] w-[68%] flex items-center">
                <div className="w-[100%] h-[6px] bg-gradient-to-r from-[#F74F46] from-0% via-[#F7A519] via-50% to-[#3DDF60] to-100% rounded-md"></div>
                </div>
                <div className="w-[15%] md:w-[10%] text-xs flex flex-col items-end gap-2">
                <div className=" font-medium text-gray-700">52W High</div>
                <div  className=" text-[14px] font-medium">47,630.22</div>
                </div>
            </div>
            </div>

            <div className="flex flex-col gap-2 mt-[20px]">
                <div className=" text-lg font-medium">Fundamentals <MdOutlineError className=" inline-block" color="gray" size="1.3rem"/></div>
                <div className="fundamentals md:flex md:justify-between text-sm font-medium">
                <div className="md:w-[45%]">
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-4 items-center">
                        <div className=" text-gray-500">Bitcoin Price</div>
                        <div className=" font-semibold">$16,815.46</div>
                    </div>
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-4 items-center">
                        <div className=" text-gray-500">24h Low / 24h High</div>
                        <div className=" font-semibold">$16,386.62/$16,815.46</div>
                    </div>
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-4 items-center">
                        <div className=" text-gray-500">7d Low / 7d High</div>
                        <div className=" font-semibold">$16,386.62/$16,815.46</div>
                    </div>
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-4 items-center">
                        <div className=" text-gray-500">Trading Volume</div>
                        <div className=" font-semibold">$16,815.46</div>
                    </div>
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-4 items-center">
                        <div className=" text-gray-500">Market Cap Rank</div>
                        <div className=" font-semibold">#1</div>
                    </div>
                </div>
                <div className="md:w-[48%] pb-12">
                <div className="flex justify-between border-b-[2px] border-[#62656934] py-4 items-center">
                        <div className=" text-gray-500">Market Cap</div>
                        <div className=" font-semibold">$332,507,290,047</div>
                    </div>
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-4 items-center">
                        <div className=" text-gray-500">Market Cap Dominance</div>
                        <div className=" font-semibold">38.343%</div>
                    </div>
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-4 items-center">
                        <div className=" text-gray-500">Volume / Market Cap</div>
                        <div className=" font-semibold">0.0718</div>
                    </div>
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-2 items-center">
                        <div className=" text-gray-500">All-Time High</div>
                        <div className=" font-semibold">
                            <div className=" text-end">
                                $69,044.77 <span className=" text-red-600">-75.6%</span>
                            </div>
                            <div className=" text-xs font-medium">
                                Nov 10, 2021 (about 1 year)
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between border-b-[2px] border-[#62656934] py-2 items-center">
                        <div className=" text-gray-500">All-Time Low</div>
                        <div className="font-semibold">
                            <div className="text-end">
                                $69.77 <span className=" text-green-500"> 24793.1%</span>
                            </div>
                            <div className=" text-xs font-medium">
                                Jul 06, 2013 (over 9 years)
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>

        </div>
    </div>
  );
}

export default Performance;
