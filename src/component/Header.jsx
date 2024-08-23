import React, { Component, useRef } from 'react';
import { MdOutlinePlace } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import Style from '../css/Style.module.css';


function Header(props){
  const seacrhRef = useRef();
  const onclick=()=>{
    seacrhRef.current.focus();
  }

    return (
      <>
          <div className={Style.top_banner}>
            <div className={Style.top_banner_inner}>
              <p>지금 가입하고, <span>1만원 할인 쿠폰</span> 받아가세요!</p>
            </div>
          </div>
        <header>
          <div className={Style.top_menu}>
            <a href="#">회원가입</a>
            <a href="#">로그인</a>
            <a href="#">고객센터</a>
          </div>

          <div className={Style.top_box}>
            <div className={Style.logo_box}>
              <h1>
                <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="로고"  />
              </h1>
              <div className={Style.left_menu}>
                <a href="#">마켓컬리</a>
                <a href="#">뷰티컬리</a>
              </div>
            </div>

            <div className={Style.searchbox}>
              <div className={Style.search}>
                <input type="search" placeholder='검색어를 입력해주세요' ref={seacrhRef} />
                <button onClick={onclick}><IoIosSearch /></button>
              </div>
            </div>


            <div className={Style.iconbox}>
              <a href=""><MdOutlinePlace /></a>
              <a href=""><IoMdHeartEmpty /></a>
              <a href=""><BsCart2 /></a>
            </div>
          </div>

          <div className={Style.gnb}>
            <ul> 
              <li><a href="#">카테고리</a></li>
              <li><a href="#">신상품</a></li>
              <li><a href="#">베스트</a></li>
              <li><a href="#">알뜰쇼핑</a></li>
              <li><a href="#">특가/혜택</a></li>
              <li><a href="#">샛별하루 배송안내</a></li>
            </ul>
          </div>

        </header>
      </>
    );
  }


export default Header;