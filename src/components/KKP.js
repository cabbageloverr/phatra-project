import React from 'react'
import './KKP.css'
import Fon from '../img/Fon.png'
import wasin from '../img/wasin.png'
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'

function KKP() {
  return (
    
    <div className='kkp-container'>
        <div className='center'>
        <div className='kkp-con'>
            <div className='lineborder'><p className='line'>&#8212;</p></div>
            <div><h2>KPP Channel</h2></div>
            <div><p className='title'>อัพเดททุกความรู้ด้านการเงินและการลงทุนก่อนใคร พร้อมอินเทรนด์ไปกับหลายเรื่องราวไลฟ์สไตล์</p></div>
        </div>
        </div>
        <ul className='vdo-bt'>
            <li ><a href='/'>KKP FOCUS</a></li>
            <li><a href='/'>OPTIMISE</a></li>
            <li className='paddingr'><a href='/'>KKP ADVISOR</a></li>
        </ul>
        <div className='Fonpart'>
            <img className='fon' src={Fon}/>
            <div className='ftext'>
                <h2>KKP FOCUS</h2>
                <p>ฝนนักสู้ พบเรื่องราวความจริง เจ็บจริง ประสบความสำเร็จจริงที่จะเป็นแรงกระตุ้นให้ SME นักสู้รุ่นต่อไปได้ก้าวไปถึงฝัน</p>
            </div>
        </div>
        <div className='KKP-bt'>
            <div className='focus1'>
                <div><a href='#' className='f1'><img src={ wasin } /></a>
                <h2 className='ttspace'><a href='#' className='tt'>KKP FOCUS ช่วงที่ 2 กูรู โต๊ะกลม</a></h2>
                </div>
            </div>
            <div className='focus2'>
                <div><a href='#' className='f2'><img src={ p1 } /></a>
                <h2 className='ttspace'><a href='#' className='tt'>KKP FOCUS ช่วงที่ 1 ย่อประเด็นโลก โยกประเด็นร้อน</a></h2>
                </div>
            </div>
            <div className='focus3'>
                <div><a href='#' className='f3'><img src={ p2 } /></a>
                <h2 className='ttspace'><a href='#' className='tt'>KKP FOCUS ช่วงที่ 2 กูรู โต๊ะกลม</a></h2>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default KKP