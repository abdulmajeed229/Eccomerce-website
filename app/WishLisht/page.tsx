import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import WishLiast1 from "../components/whishListcard1";
import WishLisht2 from "../components/WishListCard2";

function WishLisht(){
    return(
<>

<div className="min-h-[100vh] w-full bg-white">

<div className="w-full flex justify-center">

<div className="flex justify-between items-center p-5 w-[97%]">

    <h3>Whishlist (4)</h3>

    <button className="border border-gray-300 h-[40px] w-[150px] text-[13px]">Move All To Bag</button>

</div >

</div>


<div>

<WishLiast1/>


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

<WishLisht2/>

</div>

</>
    )
}

export default WishLisht;