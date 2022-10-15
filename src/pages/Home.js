import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import Home_swiper from '../Swipers/Home_swiper'

function Home() {
    const st = {
        main_div: ' text-white text-[Hind Siliguri]',
        hero: "bg-[url('https://images.prismic.io/skullcandy/168f3059-aeed-41ae-918c-ef78f291f640_Image20220922111752.jpg?auto=compress,format&rect=0,0,800,1400&w=800&h=1400')] min-h-[90vh] bg-center bg-cover text-center pt-[15px] px-[9px]  cursor-pointer",
        hero_h1: "text-[40px] font-[700] w-[50%] m-auto leading-[30px] my-[20px] tracking-[-2px]",
        hero_p: "leading-[13px] text-[14px]",
        hero_btn: "bg-white text-black w-full p-[10px] text-[14px] mt-[20px]",
        gaming: "bg-[url('https://images.prismic.io/skullcandy/35db5ddd-2c84-4cb0-85fc-a23bea09e17c_2_gaming.jpg?auto=compress,format&rect=0,0,800,800&w=800&h=800')] min-h-[520px] bg-center bg-cover text-center pt-[45px]  cursor-pointer",
        gaming_h1: "text-[20px] font-[700] mx-auto",
        gaming_p: 'flex items-center m-auto justify-center',
        freedom: "bg-[url('https://images.prismic.io/skullcandy/bf9c44c1-bf88-460b-adac-c29f589c618d_3_indyevo.jpg?auto=compress,format&rect=0,0,800,800&w=800&h=800')] min-h-[520px] bg-center bg-cover text-center pt-[45px]  cursor-pointer",
        freedom_h1: "text-[20px] font-[700] mx-auto",
        freedom_p: "flex items-center m-auto justify-center",
        proof: "bg-[url('https://images.prismic.io/skullcandy/bb7ff1da-e609-4bba-b932-df9f12d07f5c_P7_mobile_skulliq.jpg?auto=compress,format&rect=0,0,800,1400&w=800&h=1400')] min-h-[520px] bg-cover bg-center text-center pt-[45px]  cursor-pointer px-[20px]",
        proof_h1: "text-[33px] font-[800] mx-auto leading-[30px]",
        proof_p: "leading-[15px] my-[20px]",
        proof_btn: "bg-white text-black w-full p-[10px] text-[14px]",
        back: "bg-[url('https://images.prismic.io/skullcandy/dfd62465-495e-44e9-9fa6-b2cc980125a0_P7_mobile_gaming.jpg?auto=compress,format&rect=0,0,800,1400&w=800&h=1400')] min-h-[520px] bg-cover bg-center text-center pt-[45px]  cursor-pointer px-[20px]"

    }
    const navigate = useNavigate()

    return (
        <div className={st.main_div}>
            {/* Hero start*/}
            <div onClick={() => navigate('/shop')} className={st.hero}>
                <h1 className={st.hero_h1}>GET INTO THE GAME.</h1>
                <p className={st.hero_p}>Our most affordable gaming heaset features 50mm dynamic drivers, a removable boom mic and everything else you need to reach the next level.</p>
                <button className={st.hero_btn}>MEET SLYR</button>
            </div>
            {/* Hero end */}


            <div>
                {/* Gaming🎮 Start  */}
                <div onClick={() => navigate('/gaming')} className={st.gaming}>
                    <h1 className={st.gaming_h1}>SKULLCANDY GAMING IS BACK.</h1>
                    <div className={st.gaming_p}>Celebrate the Return <AiOutlineRight className='p-[2px]' /> </div>
                </div>
                {/* Gaming🎮 End */}

                {/* Freedom start */}

                <div className={st.freedom}>
                    <h1 className={st.freedom_h1}>TRUE FREEDOM, AMPLIFIED.</h1>
                    <p className={st.freedom_p}>Shop Indy Evo <AiOutlineRight className='p-[2px]' /> </p>
                </div>

                {/* Freedom end */}

            </div>


            <Home_swiper />


            {/* Proof audio start */}
            <div className={st.proof}>
                <h1 className={st.proof_h1}>WELCOME TO FUTURE-PROOF AUDIO</h1>
                <p className={st.proof_p}>Our new Smart Feature Technology runs innovative features and adds upgrades via the Skullcandy App. The future is now.</p>
                <button className={st.proof_btn}>SHOP SKULL-IQ</button>
            </div>
            {/* Proof audio end */}

            {/* back in the game start */}

            <div className={st.back}>
                <h1 className={st.proof_h1}>BACK IN THE GAME.</h1>
                <p className={st.proof_p}>You asked, we answered. Skullcandy Gaming is back with 3 all-new, badass gaming headsets to cover every budget and skill level.</p>
                <button className={st.proof_btn}>SEE SKULLCANDY GAMING</button>
            </div>

            {/* back in the game start */}

        </div>
    )
}

export default Home