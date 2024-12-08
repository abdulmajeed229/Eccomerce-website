import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

function WishLisht2(){
    return(

        <>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
  
  {/* Product 1 */}
  <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full">
      5% OFF
    </div>
    <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md absolute top-4 right-4">
      <FaTrashAlt className="text-red-600" size={20} />
    </div>
    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <img
        src="/product/lap.webp"  
        alt="Product 1"  
        className="h-full w-full object-contain"
      />
    </div>
    <button className="bg-black text-white flex items-center justify-center py-2 px-4 w-full text-sm font-bold hover:bg-blue-700 transition-all mb-3">
      <AiOutlineShoppingCart className="mr-2 text-[white]" size={20} />
      Add to Cart
    </button>
    <div>
      <h3 className="text-lg font-extrabold text-gray-800">ASUS FHD Gaming Laptop</h3>  {/* Replace with your title */}
     
      <h4 className="text-lg text-gray-800 font-bold mt-4">$3000 &nbsp; <del>$4000</del></h4>

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
        src="/product/motitor.jpg"  
        alt="Product 2"  
        className="h-full w-full object-contain"
      />
    </div>
    <button className="bg-black text-white flex items-center justify-center py-2 px-4 w-full text-sm font-bold hover:bg-blue-700 transition-all mb-3">
      <AiOutlineShoppingCart className="mr-2 text-[white]" size={20} />
      Add to Cart
    </button>
    <div>
      <h3 className="text-lg font-extrabold text-gray-800">IPL LCD Gaming Monitor</h3>  
     
      <h4 className="text-lg text-gray-800 font-bold mt-4">$600 &nbsp; <del>$700</del> </h4>

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
        src="/product/pad.jpg"  
        alt="Product 3" 
        className="h-full w-full object-contain"
      />
    </div>
    <button className="bg-black text-white flex items-center justify-center py-2 px-4 w-full text-sm font-bold hover:bg-blue-700 transition-all mb-3">
      <AiOutlineShoppingCart className="mr-2 text-[white]" size={20} />
      Add to Cart
    </button>
    <div>
      <h3 className="text-lg font-extrabold text-gray-800">HAVIT HV-G92 Gamepad</h3> 
     
      <h4 className="text-lg text-gray-800 font-bold mt-4">$225 &nbsp; <del>$250</del></h4>

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
        src="/product/mykey.webp" 
        alt="Product 4" 
        className="h-full w-full object-contain"
      />
    </div>
    <button className="bg-black text-white flex items-center justify-center py-2 px-4 w-full text-sm font-bold hover:bg-blue-700 transition-all mb-3">
      <AiOutlineShoppingCart className="mr-2 text-[white]" size={20} />
      Add to Cart
    </button>
    <div>
      <h3 className="text-lg font-extrabold text-gray-800">AK-900 Wired Keyboard</h3>  {/* Replace with your title */}
     
      <h4 className="text-lg text-gray-800 font-bold mt-4">$100 &nbsp; <del>$120</del></h4>

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

export default WishLisht2;