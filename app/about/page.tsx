import DelCard from "../components/delvrycard"
import Footer from "../components/footer"
import Team from "../components/team"

function About(){
    return(

        <>
        
        <section className="min-h-[100vh] w-full  flex justify-center items-center">

<div className="min-h-[80vh] w-full flex justify-center items-center">

    <div className="w-[500px]">


    <h2 className="text-[35px] mb-4">Our Story</h2>

    <p className="text-[15px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

<br />
    <p className="text-[15px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>

    </div>
</div>



<div className="imageAbout min-h-[80vh] w-full bg-black">
  
    
</div>
        </section>




        <section className="min-h-[40vh] w-full flex justify-evenly items-center p-5 flex-wrap ">

            <div className="h-[200px] w-[230px] border border-gray-300 shadow-lg flex flex-col items-center gap-3 justify-center">

<img src="/icons/Services.png" className="h-[55px] w-[55px]" alt=""/>
                <strong className="text-[20px] font-bold">10.5k</strong>

                <p className="text-[14px]">Sallers active our site</p>

            </div>

            <div className="h-[200px] w-[230px] border border-gray-300 shadow-lg flex flex-col items-center gap-3 justify-center">

                <img src="/icons/dollor.png" className="h-[55px] w-[55px]" alt="" />

                <strong className="text-[20px] font-bold">33k</strong>

                <p className="text-[14px]">Monthly Product Sale</p>

</div>

<div className="h-[200px] w-[230px] border border-gray-300 shadow-lg flex flex-col items-center gap-3 justify-center">

<img className="h-[55px] w-[55px]"  src="/icons/gift.png" alt="" />
    <strong className="text-[20px] font-bold">45.5k</strong>

    <p className="text-[14px]">Customer active in our site</p>

</div>

<div className="h-[200px] w-[230px] border border-gray-300 shadow-lg flex flex-col items-center gap-3 justify-center">
<img className="h-[55px] w-[55px]"  src="/icons/money.png" alt="" />
    <strong className="text-[20px] font-bold">25k</strong>

    <p className="text-[14px]">Anual gross sale in our site</p>

</div>


        </section>


<br /><br /><br />

        <section className="min-h-[80vh] w-ful flex justify-center item-center gap-10 flex-wrap">






<Team/>




        
        </section>





<br />
<br />

        <section className="h-[50vh] w-full flex justify-center items-center  flex-wrap">

            <DelCard/>

        </section>

        <br /><br />
        
        </>

    )
}

export default About