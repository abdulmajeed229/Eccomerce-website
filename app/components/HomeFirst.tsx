import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import WishLiast1 from "./whishListcard1";
import HomeCard from "./HomeMycard";

export default function HomeFirst() {
    return (

        <>
      <div className="min-h-[50vh] w-full  flex p-10 justify-center items-center">


        <div className="sidemy w-[25%]  h-[50vh] ">

            <ul className="flex gap-2 flex-col">

                <li>

                    <select className="outline-none">
                        <option value="value1">Woman's Fashion
                        </option>
                        
                    </select>
                </li>

                <li>


                <select className="outline-none">
                        <option value="value1">Man's Fashion
                        </option>
                        
                    </select>
                </li>

                <li>Electronics</li>


                <li>Home & Lifestyle</li>


                <li>Medicine</li>


                <li>Sports & Outdoor</li>

                <li>Boys and Toys</li>

                <li>Grocories and Pets</li>

                <li>health and Beauty</li>
            </ul>

        </div>



        <div className="migm w-[75%] h-[50vh] ">

            <img src="/images/phone.png" alt="" className="h-[300px] w-full"/>

        </div>







      </div>






      <div className="w-full flex justify-center">
  <div className="flex justify-between items-center p-5 w-[97%]">
    <h3 className="flex items-center">
      <div className="h-[30px] w-[20px] rounded-md bg-red-400 mr-2"></div> Just For You
    </h3>

    <button className="border border-gray-300 h-[40px] w-[150px] text-[13px]">
      See All
    </button>
  </div>
  </div>










  <div className="w-full h-auto flex flex-wrap items-center justify-between p-4 md:p-10">
     
      <div className="flex flex-wrap items-center gap-4 md:gap-[1cm]">
        <h1 className="text-[20px] md:text-[25px] font-bold">Flash Sales</h1>

        <div className="flex gap-2">
          <div>
            <span className="text-[12px] md:text-[14px]">Days</span>
            <br />
            <strong className="text-[18px] md:text-[22px]">03</strong>
            &nbsp;&nbsp;
            <span className="text-[20px] md:text-[25px]">:</span>
          </div>

          <div>
            <span className="text-[12px] md:text-[14px]">Hours</span>
            <br />
            <strong className="text-[18px] md:text-[22px]">23</strong>
            &nbsp;&nbsp;
            <span className="text-[20px] md:text-[25px]">:</span>
          </div>

          <div>
            <span className="text-[12px] md:text-[14px]">Minutes</span>
            <br />
            <strong className="text-[18px] md:text-[22px]">19</strong>
            &nbsp;&nbsp;
            <span className="text-[20px] md:text-[25px]">:</span>
          </div>

          <div>
            <span className="text-[12px] md:text-[14px]">Seconds</span>
            <br />
            <strong className="text-[18px] md:text-[22px]">56</strong>
          </div>
        </div>
      </div>

    
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <BiChevronLeft className="text-[25px] md:text-[30px] cursor-pointer" />
        <BiChevronRight className="text-[25px] md:text-[30px] cursor-pointer" />
      </div>
    </div>










    <HomeCard/>


    <div className="h-[70px] w-full flex justify-center items-center">


<button className="h-[40px] w-[160px] text-white rounded-sm bg-red-500">View All Products</button>
    </div>




















    <div className="w-full flex justify-center">
  <div className="flex justify-between items-center p-5 w-[97%]">
    <h3 className="flex items-center">
      <div className="h-[30px] w-[20px] rounded-md bg-red-400 mr-2"></div> Categories
    </h3>
  </div>
  </div>



  <div className="w-full p-5 flex justify-between">
    <span className="text-[27px] ml-5 font-bold">Browse By Category</span>



    <div className="flex items-center gap-2 mt-4 md:mt-0">
        <BiChevronLeft className="text-[25px] md:text-[30px] cursor-pointer" />
        <BiChevronRight className="text-[25px] md:text-[30px] cursor-pointer" />
      </div>
  </div>













  <div className="min-h-[200px] w-full  p-5 flex justify-around">




<div className="h-[140px] w-[140px] border border-gray-300 rounded-sm text-center flex flex-col justify-center items-center gap-2">


<img src="/cat/cell.png" alt="" />
    <span>Phones</span>

</div>







<div className="h-[140px] w-[140px] border border-gray-300 rounded-sm text-center flex flex-col justify-center items-center gap-2">


<img src="/cat/comp.png" alt="" />
    <span>Phones</span>

</div>





<div className="h-[140px] w-[140px] border border-gray-300 rounded-sm text-center flex flex-col justify-center items-center gap-2">


<img src="/cat/wat.png" alt="" />
    <span>SmartWatch</span>

</div>







<div className="h-[140px] w-[140px] border bg-[#e62b2bb6] border-gray-300 rounded-sm text-center flex flex-col justify-center items-center gap-2">


<img src="/cat/ca.png" alt="" />
    <span className="text-white">Camera</span>

</div>







<div className="h-[140px] w-[140px] border border-gray-300 rounded-sm text-center flex flex-col justify-center items-center gap-2">


<img src="/cat/head.png" alt="" />
    <span>Head Phones</span>

</div>






<div className="h-[140px] w-[140px] border border-gray-300 rounded-sm text-center flex flex-col justify-center items-center gap-2">


<img src="/cat/gam.png" alt="" />
    <span>Gaming</span>

</div>



  </div>

















  <div className="w-full flex justify-center">
  <div className="flex justify-between items-center p-5 w-[97%]">
    <h3 className="flex items-center">
      <div className="h-[30px] w-[20px] rounded-md bg-red-400 mr-2"></div> This Month
    </h3>
  </div>
  </div>










  <div className="w-full p-5 flex justify-between">
    <span className="text-[27px] ml-5 font-bold">Best Selling Products</span>



    <div className="flex items-center gap-2 mt-4 md:mt-0">
      <button className="h-[40px] w-[100px] bg-red-400 rounded-sm text-white">View All</button>
      </div>
  </div>





<HomeCard/>

        </>
    );
  }
  