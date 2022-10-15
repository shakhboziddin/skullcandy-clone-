import React from 'react'
import Logo from '../images/logo.png'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { AiOutlinePlus } from 'react-icons/ai'
// import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
// import Logo from '../images/logo.png'


function Navbar() {
  const [sidebar, setSidebar] = useState(true)

  const style = {
    main_div: 'text-white text-[Hind Siliguri] z-[50]',
    top: 'flex items-center justify-between w-full fixed bg-black px-[15px] py-[10px] border-b-[1px] border-slate-700',
    logo_div: 'flex items-center cursor-pointer',
    logo_1: 'w-[25px]',
    logo_h3: 'text-[22px] font-bold',
    bar_1: 'text-[20px] cursor-pointer',
  }
  const st = {
    Sidebar: 'bg-[rgba(0,0,0,.6)] fixed flex duration-[.5s] z-50 text-black  w-full min-h-[100vh] top-[0]  justify-between',
    left: 'bg-white w-[70%] ',
    main_box: 'hidden',
    nav: 'flex border-[1px] border-b-black py-[20px] px-[18px] items-center justify-between cursor-pointer font-[500] text-[15px] hover:text-slate-500',
    main_box2: 'hidden',
    main_box3: 'hidden',
    main_box4: 'hidden',
    acc: 'flex m-[10px] gap-[10px] items-center text-[16px] mt-[20px]',
    user: 'text-[22px]',
    right: 'w-[40px] m-[10px] cursor-pointer',
    right_div: "w-[30%] flex items-start justify-end"
  }


  const close = () => {
    setSidebar(true)
  }
  const open = () => {
    setSidebar(false)
  }
  return (
    <div className={style.main_div}>
      <div className={style.top}>
        <div onClick={open}>
          <FaBars onClick={open} className={style.bar_1} />
        </div>

        <Link to={'/'} className={style.logo_div}>
          <img className={style.logo_1} src={Logo} alt="" />
          <h3 className={style.logo_h3}>Skullcandy</h3>
        </Link>

        <div>
          <BsBag className={style.bar_1} />
        </div>
      </div>


      return (
      <div className={st.Sidebar} style={{ transform: sidebar ? 'translateX(-1000px)' : 'translateX(0)' }}>
        <div className={st.left}>
          <div>
            <Link to={'/shop'} onClick={close} className={st.nav}>SHOP <AiOutlinePlus /> </Link>
            <div className={st.main_box}>
              <ul>
                <li><Link to={'/'}>Featured & Sale</Link></li>
                <li><Link to={'/'}>Earbuds</Link></li>
                <li><Link to={'/'}>Headphones</Link></li>
                <li><Link to={'/'}>Gaming</Link></li>
                <li><Link to={'/'}>Accessories</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <div className={st.nav}>INSIDE SKULLCANDY <AiOutlinePlus /> </div>
            <div className={st.main_box2}>
              <ul>
                <li><Link to={'/'}>Featured & Sale</Link></li>
                <li><Link to={'/'}>Earbuds</Link></li>
                <li><Link to={'/'}>Headphones</Link></li>
                <li><Link to={'/'}>Gaming</Link></li>
                <li><Link to={'/'}>Accessories</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <div className={st.nav}>SUPPORT <AiOutlinePlus /> </div>

            <div className={st.main_box3}>
              <ul>
                <li><Link to={'/'}>Featured & Sale</Link></li>
                <li><Link to={'/'}>Earbuds</Link></li>
                <li><Link to={'/'}>Headphones</Link></li>
                <li><Link to={'/'}>Gaming</Link></li>
                <li><Link to={'/'}>Accessories</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <div className={st.nav}>LOCATION <AiOutlinePlus /> </div>

            <div className={st.main_box4}>
              <ul>
                <li><Link to={'/'}>Featured & Sale</Link></li>
                <li><Link to={'/'}>Earbuds</Link></li>
                <li><Link to={'/'}>Headphones</Link></li>
                <li><Link to={'/'}>Gaming</Link></li>
                <li><Link to={'/'}>Accessories</Link></li>
              </ul>
            </div>
          </div>
          <Link to={'/signin'} onClick={close} className={st.acc}>
            <AiOutlineUser className={st.user} /> Account
          </Link>

        </div>

        <div onClick={close} className={st.right_div} onChange={close}>
          <img onClick={close} src={Logo} className={st.right} alt="" />
        </div>
      </div>
      )

    </div>
  )
}

export default Navbar