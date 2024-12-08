import Link from "next/link"

function SignUp(){
    return(

        <>
        
        <div className="min-h-[100vh] w-full flex justify-center items-center">

<div className="createBgMy h-[90vh] w-[60%]">

</div>





<div className="h-[90vh] w-[40%] flex justify-center items-center p-10">

<div className="min-h-[60vh]  w-[400px] p-10">

    <h1 className="text-[28px]">Login in to Exclusive</h1>

    <p className=" text-[15px] mt-2 mb-5">Enter your details below</p>


<div>




<input type="text" placeholder="Email or Phone Number" className="bormyown h-[40px] w-full" />
<br /><br />

<input type="password"  placeholder="Password" className="bormyown h-[40px] w-full" />
<br /><br />

<div className="flex justify-between mt-5">


<button className=" h-[40px] w-[100px] text-white rounded bg-[#DB4444] text-[14px]">Log In </button>

<button className=" h-[40px]  text-red-500 text-[14px]">Forgot Password? </button>



</div>



</div>



</div>

</div>




        </div>
        
        
        
        
        </>
    )
}

export default SignUp