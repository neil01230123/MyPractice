import { useState } from "react";
import './main.css'
import Pic1 from "../Image/22274666.png";

const Shopping = () => {
    return(
        <section className="row">
            <Card image={Pic1} title="牛五花" text="牛肉部位油脂豐富" text2="價格：NT.240/包(300g)"/>
            <Card image={Pic1} title="牛五花" text="牛肉部位油脂豐富" text2="價格：NT.240/包(300g)"/>
            <Card image={Pic1} title="牛五花" text="牛肉部位油脂豐富" text2="價格：NT.240/包(300g)"/>
            <Card image={Pic1} title="牛五花" text="牛肉部位油脂豐富" text2="價格：NT.240/包(300g)"/>
            <Card image={Pic1} title="牛五花" text="牛肉部位油脂豐富" text2="價格：NT.240/包(300g)"/>
            <Card image={Pic1} title="牛五花" text="牛肉部位油脂豐富" text2="價格：NT.240/包(300g)"/>
        </section>
    )
}

export default Shopping;

function Card({image, title, text, text2}){
    const [count,setCount] = useState(0);
    return(
        <div className="card col-4 col-md-3 col-lg-2 cardstyle ms-4">
            <div className="card-header"><img className="card-img-top" src={image}/></div>
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-text">{text}</div>
                <div className="card-text">{text2}</div>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary m-2" onClick={()=>setCount(count+1)}>＋</button>
                <span>{count}</span>
                <button className="btn btn-outline-primary m-2" onClick={()=>setCount(count>0?count-1:count)}>－</button>
                <button>加入購物車</button>
            </div>
        </div>
    )
}
