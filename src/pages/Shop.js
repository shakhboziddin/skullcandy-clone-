import React, { useContext, useState, useEffect } from "react";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { ProductContext } from "../context/ProductContext";
import Product from "./Product";
import { db } from "../Firebase/FirebaseConfig";

function Shop() {
    document.title = "Shop";
    const { state, dispatch } = useContext(ProductContext);
    const style = {
        Shop: "w-[100%] h-auto mt-[88px] absolute bg-white",
        text: "text-[50px] text-center font-extrabold pt-[30px]",
        btns: "w-[60%] h-[100px] m-[auto] flex justify-between items-center ",
        btn: "w-[250px] h-[60px] bg-[#EDEDED] m-[10px]",
    };
    const [data, setData] = useState([]);
    console.log(data);
    const sortedData = data.sort(
        (a, b) => new Date() - new Date()
    );
    useEffect(() => {
        const getData = async () => {
            const box = [];
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) =>
                box.push({ id: doc.id, data: doc.data() })
            );
            setData(box);
        };
        return () => {
            getData();
        };
    }, []);
    return (
        <div>
            <div className={style.Shop}>
                <h1 className={style.text}>SHOP</h1>
                <div className={style.btns}>
                    <button className={style.btn}>TRUE WIRELESS</button>
                    <button className={style.btn}>EARBUDS</button>
                    <button className={style.btn}>HEADPHONES</button>
                    <button className={style.btn}>SALE</button>
                    {/* <select>
                        <option>SORT: FEATURED ITEMS</option>
                        <option>NEWEST ITEMS</option>
                        <option>A TO Z</option>
                        <option>Z TO A</option>
                        <option>BY REVIEW</option>
                        <option>PRICE LOW TO HIGH</option>
                        <option>PRICE HIGH TO LOW</option>
                    </select> */}
                </div>
                {sortedData.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default Shop;