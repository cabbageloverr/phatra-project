import React from 'react'
import './ArticleNew.css'
import gold from '../img/gold.png'
import pat from '../img/pat.png'
import watch from '../img/watch.png'
import safety from '../img/safety.png'
import index from '../img/index.png'
function ArticleNew() {
  return (
    <div>
    <div className="bg-top">
    
      <div container-art>
         <ul className='article-new'>
            <li className='article'>Article</li>
            <li ><a href='#' className='all1'>ดูทั้งหมด</a></li>
            <li className='new'>News</li>
            <li ><a href='#' className='all2'>ดูทั้งหมด</a></li>
         </ul>
         <div className='art'>
          <div className='art-l'>
            <img src={gold} />
          </div>
          <div className='art-text'>
            <div className='highlight'>
              <h2><a href='#' className='art-t'>Margin of safety กลยุทธ์การลงทุนอย่างปลอดภัย หลักการลงทุนของเบนจามิน เกรแฮม</a></h2>
              <p><a href='#' className='art-t-p'>ตอบคําถามที่ว่า คุณมีความจำเป็น พร้อมเป็น เจ้าของหรือยัง เช่น เพื่อหน้าที่การงาน อาชีพ หรือการเดินทาง ความสะดวกสบาย เพราะการซื้อรถนอกจากรถแล้ว ยังมีค่าน้ำมัน ค่าบำรุงรักษา ค่าประกันภัย ซึ่งเป็นค่าใช้จ่ายในระยะยาว</a></p>
            </div>
            <p className='inv'><a href='#' className='invest'>| การลงทุน</a></p>
          </div>
          <div><a href='#' className='pat'><img src={pat} /></a>
            <div className='movedot'>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            </div>
        </div>
        <section section className='artbutton'>
          <div className='art-bt1'>
              <div><a href='#' className='watch'><img src={ watch } /></a>
              <h2><a href='#' className='art-t-bt'>จับจังหวะการลงทุนเป็นการสรัางเงินล้านได้ง่ายๆใกล้แค่เอื้อม</a></h2>
              <p clsaaName='inv'><a href='#' className='invest'>| การลงทุน</a></p></div>
         </div>
         <div className='art-bt2'>
              <div><a href='#' className='safe'><img src={ safety } /></a>
              <h2><a href='#' className='art-t-bt'>Margin of safety กลยุทธ์การลงทุนอย่างปลอดภัย</a></h2>
              <p clsaaName='inv'><a href='#' className='invest'>| การลงทุน</a></p></div>
              </div>
              <div><img src={index} className="index"></img></div>
        </section>

       
      </div>
      
    </div>
    <div className='slant'></div>
    </div>
  )
}

export default ArticleNew