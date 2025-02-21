import './pageFlip02.css'
import img1 from '@/public/KakaoTalk_20250202_154023894_01.jpg'
import img2 from '@/public/KakaoTalk_20250202_154023894_02.jpg'
import img3 from '@/public/KakaoTalk_20250202_154023894_03.jpg'
import Image from 'next/image'
import { IoChevronForward, IoChevronBack } from 'react-icons/io5'

const PageFlip02 = () => {
  return (
    <div>
      <input type='checkbox' id='checkbox-cover' />
      <input type='checkbox' id='checkbox-page1' />
      <input type='checkbox' id='checkbox-page2' />
      <input type='checkbox' id='checkbox-page3' />
      <input type='checkbox' id='checkbox-backCover' />
      <div className='book'>
        <div className='cover'>
          <label htmlFor='checkbox-cover'></label>
        </div>
        <div className='page' id='page1'>
          <div className='front-page'>
            <Image src={img1} alt='img1' />
            <label className='prev' htmlFor='checkbox-cover'>
              <IoChevronBack />
            </label>
            <label className='next' htmlFor='checkbox-page1'>
              <IoChevronForward />
            </label>
          </div>
        </div>
        <div className='page' id='page2'>
          <div className='front-page'>
            <Image src={img2} alt='img2' />
            <label className='prev' htmlFor='checkbox-page1'>
              <IoChevronBack />
            </label>
            <label className='next' htmlFor='checkbox-page2'>
              <IoChevronForward />
            </label>
          </div>
        </div>
        <div className='page' id='page3'>
          <div className='front-page'>
            <Image src={img3} alt='img3' />
            <label className='prev' htmlFor='checkbox-page2'>
              <IoChevronBack />
            </label>
            <label className='next' htmlFor='checkbox-cover'>
              <IoChevronForward />
            </label>
          </div>
        </div>
        <div className='back-cover'>
          <label htmlFor='checkbox-cover'>
            <IoChevronBack />
          </label>
        </div>
      </div>
    </div>
  )
}

export default PageFlip02
