import React from 'react';
import Style from '../css/Style.module.css';
import product_list from '../data/product.json';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { BsCart2 } from "react-icons/bs";

function Bestitem(props) {

  function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function click() {
    alert('click');
  }

  return (
    <>
      <article className={Style.best}>
        <h2>뷰컬페에서 가장 인기있어요 🏅 &#8250;</h2>
        <p>지금 뷰티컬리는 최대 85% 빅세일 중!</p>
        {/* map함수를 활용하여 배열데이터 출력 */}
        <ul className={Style.bestitem}>
          {product_list.product.map((list, idx)=>
          <li key={idx}>
            {list.keyword ? <span className={Style.keyword}>{list.keyword}</span> : '' }
            <img src={`${process.env.PUBLIC_URL}/images/${list.img}`} alt="" />
            <button className={Style.btn}><span><BsCart2 /></span>담기</button>
            <h3>{list.title}</h3>
            <span className={Style.price}>{priceToString(list.price)}원</span>
            <p className={Style.saleprice}><span>{list.sale}%</span>{priceToString(list.price - (list.price*(list.sale/100)))}원</p>
          </li>
          )}
        </ul>
      </article>
    </>
  );
}

export default Bestitem;