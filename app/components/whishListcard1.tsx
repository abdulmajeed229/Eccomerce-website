import { AiOutlineShoppingCart ,AiFillStar  } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

function WishLiast1(){
    return(
        
<>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
  
 
  <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full">
      5% OFF
    </div>
    <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md absolute top-4 right-4">
      <FaTrashAlt className="text-red-600" size={20} />
    </div>
    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <img
        src="/product/bag.jpg" 
        alt="Product 1" 
        className="h-full w-full object-contain"
      />
    </div>
    <button className="bg-black text-white flex items-center justify-center py-2 px-4 w-full text-sm font-bold hover:bg-blue-700 transition-all mb-3">
      <AiOutlineShoppingCart className="mr-2 text-[white]" size={20} />
      Add to Cart
    </button>
    <div>
      <h3 className="text-lg font-extrabold text-gray-800">Gucci duffle Bag</h3> 
      <h4 className="text-lg text-gray-800 font-bold mt-4">$960 &nbsp; <del>$1160</del></h4>


      <div className="flex mt-2">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-gray-400" />
            <AiFillStar className="text-gray-400" />
          </div>
    </div>
  </div>












  {/* Product 2 */}
  <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full">
      10% OFF
    </div>
    <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md absolute top-4 right-4">
      <FaTrashAlt className="text-red-600" size={20} />
    </div>
    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <img
        src="/product/cooler.jpg"  // Replace with your own image URL
        alt="Product 2"  
        className="h-full w-full object-contain"
      />
    </div>
    <button className="bg-black text-white flex items-center justify-center py-2 px-4 w-full text-sm font-bold hover:bg-blue-700 transition-all mb-3">
      <AiOutlineShoppingCart className="mr-2 text-[white]" size={20} />
      Add to Cart
    </button>
    <div>
      <h3 className="text-lg font-extrabold text-gray-800">RBG Liquid CPU Cooler</h3>  
    
      <h4 className="text-lg text-gray-800 font-bold mt-4">$1890  &nbsp; <del>$2000</del></h4>

      <div className="flex mt-2">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-gray-400" />
            <AiFillStar className="text-gray-400" />
          </div>

    </div>
  </div>











  {/* Product 3 */}
  <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full">
      15% OFF
    </div>
    <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md absolute top-4 right-4">
      <FaTrashAlt className="text-red-600" size={20} />
    </div>
    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <img
        src="/product/shooter.webp"  
        alt="Product 3"  
        className="h-full w-full object-contain"
      />
    </div>
    <button className="bg-black text-white flex items-center justify-center py-2 px-4 w-full text-sm font-bold hover:bg-blue-700 transition-all mb-3">
      <AiOutlineShoppingCart className="mr-2 text-[white]" size={20} />
      Add to Cart
    </button>
    <div>
      <h3 className="text-lg font-extrabold text-gray-800">GP 11 Shooter USB Gamepad</h3> 
     
      <h4 className="text-lg text-gray-800 font-bold mt-4">$300 &nbsp;<del>$400</del></h4>

      <div className="flex mt-2">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-gray-400" />
            <AiFillStar className="text-gray-400" />
          </div>
    </div>
  </div>

  {/* Product 4 */}
  <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full">
      20% OFF
    </div>
    <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md absolute top-4 right-4">
      <FaTrashAlt className="text-red-600" size={20} />
    </div>
    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <img
        src="/product/jack.jpg" 
        alt="Product 4"  // Replace with your own product title
        className="h-full w-full object-contain"
      />
    </div>
    <button className="bg-black text-white flex items-center justify-center py-2 px-4 w-full text-sm font-bold hover:bg-blue-700 transition-all mb-3">
      <AiOutlineShoppingCart className="mr-2 text-[white]" size={20} />
      Add to Cart
    </button>
    <div>
      <h3 className="text-lg font-extrabold text-gray-800">Quilted Satin Jacket</h3>
      
      <h4 className="text-lg text-gray-800 font-bold mt-4">$160 &nbsp; <del>$200</del></h4>

      <div className="flex mt-2">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-gray-400" />
            <AiFillStar className="text-gray-400" />
          </div>
    </div>
  </div>
  
</div>



</>


    )
}

export default WishLiast1;