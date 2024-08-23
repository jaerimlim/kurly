import React, {useState, useEffect} from 'react';
import Style from '../css/Style.module.css';

function Banner(props) {
  const [RandomPic, setRandomPic]=useState('banner1.jpg');

  const imgArray=[
    'banner1.jpg',
    'banner2.jpg',
    'banner3.jpg',
    'banner4.jpg',
    'banner5.jpg'
  ]
  useEffect(()=>{
    window.onload=showImage(RandomPic);
  },[])
  
  const showImage = () =>{
    // const imgNum1 = Math.floor(Math.random()*5+1);
    const imgNum2 = Math.round(Math.random()*4);
    //랜덤 숫자를 배열객체의 n번째의 담아서 함수에 넘긴다.
    setRandomPic(imgArray[imgNum2]); //banner1.jpg ~ banner5.jpg
    console.log(imgArray[imgNum2]);
    setTimeout(showImage, 2000);
  }
  return (
    <>
      <article className={Style.Banner}>
        <img src={`${process.env.PUBLIC_URL}/images/${RandomPic}`} alt="" />
      </article>
    </>
  );
}

export default Banner;