import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";

function HomeCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">


        {/* Product 1 */}
        <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
          <div className="flex flex-col space-y-2 absolute top-4 right-4">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md border border-white">
           
              <AiOutlineHeart className="text-blue-600" size={20} />
            </div>
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <AiOutlineEye className="text-blue-600" size={20} />
            </div>
          </div>
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
            <img
              src="/product/bag.jpg"
              alt="Product 1"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">
              Gucci Duffle Bag
            </h3>
            <h4 className="text-lg text-gray-800 font-bold mt-4">
              $960 &nbsp; <del>$1160</del>
            </h4>
            <div className="flex mt-2">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-gray-400" />
              <AiFillStar className="text-gray-400" />
              <span className="text-[13px]">(10)</span>
            </div>
          </div>
        </div>

      
        <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
          <div className="flex flex-col space-y-2 absolute top-4 right-4">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md border border-white">
            
              <AiOutlineHeart className="text-blue-600" size={20} />
            </div>
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <AiOutlineEye className="text-blue-600" size={20} />
            </div>
          </div>
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
            <img
              src="/product/cooler.jpg"
              alt="Product 2"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">
              RBG Liquid CPU Cooler
            </h3>
            <h4 className="text-lg text-gray-800 font-bold mt-4">
              $1890 &nbsp; <del>$2000</del>
            </h4>
            <div className="flex mt-2">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-gray-400" />
              <AiFillStar className="text-gray-400" />
              <span className="text-[13px]">(10)</span>
            </div>
          </div>
        </div>





        <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
          <div className="flex flex-col space-y-2 absolute top-4 right-4">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md border border-white">
            
              <AiOutlineHeart className="text-blue-600" size={20} />
            </div>
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <AiOutlineEye className="text-blue-600" size={20} />
            </div>
          </div>
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
            <img
              src="/product/lap.webp"
              alt="Product 2"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">
              RBG Liquid CPU Cooler
            </h3>
            <h4 className="text-lg text-gray-800 font-bold mt-4">
              $1890 &nbsp; <del>$2000</del>
            </h4>
            <div className="flex mt-2">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-gray-400" />
              <AiFillStar className="text-gray-400" />
              <span className="text-[13px]">(10)</span>
            </div>
          </div>
        </div>









        <div className="bg-white rounded p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
          <div className="flex flex-col space-y-2 absolute top-4 right-4">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md border border-white">
            
              <AiOutlineHeart className="text-blue-600" size={20} />
            </div>
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <AiOutlineEye className="text-blue-600" size={20} />
            </div>
          </div>
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
            <img
              src="/product/pad.jpg"
              alt="Product 2"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">
              RBG Liquid CPU Cooler
            </h3>
            <h4 className="text-lg text-gray-800 font-bold mt-4">
              $1890 &nbsp; <del>$2000</del>
            </h4>
            <div className="flex mt-2">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-gray-400" />
              <AiFillStar className="text-gray-400" />
              <span className="text-[13px]">(10)</span>
            </div>
          </div>
        </div>













      </div>
    </>
  );
}

export default HomeCard;
