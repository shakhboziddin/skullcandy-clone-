import React from 'react'

function Header() {
    const style = {
        bottom: 'text-center text-[13px] text-white  pt-[30px] p-[4px]'
    }
    return (
        <div>
            <div className={style.bottom}>
                <h2>Free Shipping over $100</h2>
            </div>
        </div>
    )
}

export default Header