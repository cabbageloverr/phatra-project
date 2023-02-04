import React from 'react'
import './Footer.css'
import logo from '../img/logo.png'
import { BsTelephone, BsPrinter, BsFacebook } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialYoutubeCircular} from 'react-icons/ti'

function Footer() {
  return (
    <div className='main-footer'>
      <div className='f-container'>
        <div className='row'>
          <div className='col'>
            <div><img src={logo}/>
              <div className='tunpat'>
                <h3>บริษัท ทุนภัทร จำกัด (มหาชน)</h3>
                <li>ชั้น 9 อาคารสำนักงานเมืองไทย-ภัทร 1 252/6</li>
                <li>ถนนรัชดาภิเษก แขวงห้วยขวาง</li>
                <li>กรุงเทพมหานคร 10310</li>
              </div>
            </div>
          </div>
            <div className='col2'>
                <h3>เมนู</h3>
                <div>
                  <li><a href=''>รู้จัก บลจ.ภัทร</a></li>
                  <li><a href=''>เกี่ยวกับเรา</a></li>
                  <li><a href=''>ติดต่อเรา</a></li>
                  <li><a href=''>คำถามที่พบบ่อย</a></li>
                  <li><a href=''>สมัครงาน</a></li>
                  <li><a href=''>Links</a></li>
                </div>
            </div>
            <div className='col3'>
                <h3>เมนู</h3>
                <div>
                  <li><a href=''>รู้จัก บลจ.ภัทร</a></li>
                  <li><a href=''>เกี่ยวกับเรา</a></li>
                  <li><a href=''>ติดต่อเรา</a></li>
                  <li><a href=''>คำถามที่พบบ่อย</a></li>
                  <li><a href=''>สมัครงาน</a></li>
                  <li><a href=''>Links</a></li>
                </div>
            </div>
            <div className='col4'>
                <h3>ติดต่อเรา</h3>
                <div>
                  <li> <a href=''> <BsTelephone className='iconft'/> (66) 2305 9800</a></li>
                  <li><a href=''><BsPrinter className='iconft'/> (66) 2305 9803</a></li>
                  <li><a href=''><TfiEmail className='iconft'/> cutomerservice@phatraasset.com</a></li>
                </div>
                <div className='contact'>
                  <li className='fb-sp'><BsFacebook className ='fb'/></li>
                  <li><AiFillTwitterCircle className='tw'/></li>
                  <li><TiSocialYoutubeCircular className='yt'/></li>
                </div>
            </div>
        </div>
        <div className='planweb'>
          <ul classnam='plan-posi'>
            <li><a href='plan'>แผนเว็บไซต์</a></li>
            <li><a href='agree'>ข้อตกลกและเงื่อนไข</a></li>
            <li><a href='policy'>นโยบายข้อมูลส่วนตัว</a></li>
          </ul>
          <ul className='lc'>
            <li>@2019 phatra &copy; สงวนลิขสิทธิ์ 2563 บริษัทหลักทรัพย์จัดการกองทุน ภัทร จำกัด All rights reserved.
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
         
         