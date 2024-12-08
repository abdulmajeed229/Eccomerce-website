function Cart(){

    return(
     <>
     
     <div className="min-h-[80vh] w-full  flex  justify-center items-center">











     <div className="overflow-x-auto w-[85%]">
      <table className="min-w-full bg-white">
        <thead className="whitespace-nowrap bg-gray-100 rounded">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Products
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Price
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Quantity
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Subtotal
            </th>
           
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-black">
              <div className="flex items-center cursor-pointer w-max">
                <img src='/product/motitor.jpg' className="w-13 h-[70px] rounded-md shrink-0" />
                <div className="ml-4">
                  <p className="text-sm text-black">LCD Monitor</p>
                </div>
              </div>
            </td>
            <td className="p-4 text-sm text-black">
              $650
             
            </td>
            <td className="p-4 text-sm text-black">
              <input type="number" className="w-[50px] border border-gray-400 h-[35px] outline-none rounded" />
             
            </td>
            <td className="p-4 text-sm text-black">
           $650
             
            </td>
           
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-black">
              <div className="flex items-center cursor-pointer w-max">
              <img src='/product/pad.jpg' className="w-13 h-[70px] rounded-md shrink-0" />
                <div className="ml-4">
                  <p className="text-sm text-black">H1 Gamepad</p>
                </div>
              </div>
            </td>
            <td className="p-4 text-sm text-black">
              $550
            </td>
            <td className="p-4 text-sm text-black">
            <input type="number" className="w-[50px] border border-gray-400 h-[35px] outline-none rounded" />
             
            </td>
            <td className="p-4 text-sm text-black">
             $1100
             
            </td>
           
          </tr>




          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-black">
              <div className="flex items-center cursor-pointer w-max">
               
               <button className="border border-gray-400 h-[35px] w-[150px]">Return To Shop</button>
               
              </div>
            </td>
            <td className="p-4 text-sm text-black">
              &nbsp;
            </td>
            <td className="p-4 text-sm text-black">
            &nbsp;
            
            </td>
            <td className="p-4 text-sm text-black">
              
            <button className="border border-gray-400 h-[35px] w-[120px]">Update Cart</button>
               
             
            </td>
           
          </tr>
        </tbody>
      </table>

     
    </div>

     </div>




























     <div className="chekMy min-h-[60vh] w-full flex justify-center items-center p-3">
  <div className="chekMy min-h-[60vh] w-[85%] flex flex-col lg:flex-row justify-between p-3 gap-4">
    
    <div className="flex gap-2 flex-col sm:flex-row">
     
     
     
     
     
     
      <input
        type="text"
        className="h-[40px] outline-none border border-gray-300 pl-3 text-[13px] w-full sm:w-[200px]"
        placeholder="Coupon Code"
      />
      <button className="border bg-red-400 text-white h-[40px] w-full sm:w-[150px] text-[13px]">
        Apply Coupon
      </button>
    </div>

    
    <div className="h-auto w-full lg:w-[400px] border border-gray-300 p-5 text-[19px]">
      <strong>Cart Total</strong>






      <div className="subtotal flex justify-between text-[15px] pb-2 pt-5">
        <p>Subtotal :</p>
        <p>$1750</p>
      </div>

      <div className="subtotal flex justify-between text-[15px] pb-2 pt-5">
        <p>Shipping :</p>
        <p>Free</p>
      </div>







      <div className="flex justify-between text-[15px] pb-2 pt-5">
        <p>Total :</p>
        <p>$1750</p>
      </div>

      <div className="w-full text-center mt-5">
        <button className="bg-red-400 text-white h-[35px] w-full rounded-sm text-[16px]">
          Proceed To Checkout
        </button>
     
     
     
      </div>
    </div>





  </div>




</div>

    
     
     </>
    )
}

export default Cart;