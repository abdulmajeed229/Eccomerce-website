function Footer(){
    return(

        <footer className="bg-[black]  tracking-wide">
      <div className="py-14 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          <div className="lg:col-span-1 text-white">
<span className="text-white text-[20px] font-bold ">Exclusive</span>
           
           <p className="mt-4">Subscribe</p>
           
           <p className="text-[15px] mt-2">Get 10% off your first order</p>

           <input type="email" placeholder="Enter your Email" className="h-[44px] w-[210px] rounded pl-2 border border-white bg-transparent mt-4" />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-4">
              <li><a  className="text-gray-300 hover:text-white text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">exclusive@gmail.com</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">+88015-88888-9999</a></li>
              
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Account</h4>
            <ul className="space-y-4">
              <li><a  className="text-gray-300 hover:text-white text-sm">My  Account</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">Login / Register</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">Cart</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">Wishlist</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">Shop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Link</h4>
            <ul className="space-y-4">
              <li><a  className="text-gray-300 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">Term Of Use</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">FAQ</a></li>
              <li><a  className="text-gray-300 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Download App</h4>

<span className="text-white text-[10px]">Save $3 with App New User Only</span>



<div className="flex gap-4 mt-4 mb-4">
    <img src="/images/code.png" alt="" />

    <img src="/images/app.png" alt="" />
</div>





            <ul className="flex gap-4">
              <li><a >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                    clip-rule="evenodd" />
                </svg></a></li>
              <li><a  className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                    clip-rule="evenodd" />
                </svg></a></li>
              <li><a  className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                </svg></a></li>
              <li><a  className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6"
                  viewBox="0 0 24 24">
                  <path
                    d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg></a></li>
            </ul>

          </div>

        </div>
      </div>

      <div className="text-center py-5 bg-[black]">
        <p className='text-gray-300 text-sm'>Copyright &copy; Rimel 2022. All right reserved</p>
      </div>
    </footer>
    )
}

export default Footer