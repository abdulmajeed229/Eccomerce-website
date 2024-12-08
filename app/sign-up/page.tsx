import Link from "next/link"

function SignUp(){
    return(

        <>
        
        <div className="min-h-[100vh] w-full flex justify-center items-center">

<div className="createBgMy h-[90vh] w-[60%]">

</div>





<div className="h-[90vh] w-[40%] flex justify-center items-center p-10">

<div className="min-h-[60vh]  w-[400px] p-10">

    <h1 className="text-[28px]">Create an account</h1>

    <p className=" text-[15px] mt-2 mb-5">Enter your details below</p>


<div>


<input type="text" placeholder="Name" className="bormyown h-[40px] w-full" />
<br /><br />

<input type="text" placeholder="Email or Phone Number" className="bormyown h-[40px] w-full" />
<br /><br />

<input type="password"  placeholder="Password" className="bormyown h-[40px] w-full" />
<br /><br />
<button className=" h-[40px] w-full text-white rounded bg-[#DB4444] text-[14px]">Create Account</button>

<button className=" h-[40px] w-full text-[#DB4444] rounded border border-[#DB4444] text-[14px] mt-5"> 
<img src="/icons/google.png" className="inline ml-2 h-7" />
Sign in with Google
</button>

<div className="text-center mt-5">

<span className="text-[13px]">Already have an account?</span>

<Link href="/login">
 <span className="text-[#DB4444] text-[13px]">Login</span>
 </Link>

</div>



</div>



</div>

</div>




        </div>
        
        
        
        
        </>
    )
}

export default SignUp