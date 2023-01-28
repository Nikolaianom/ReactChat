import React from 'react'
import './Right.scss'
import right from '../../assets/images/second.png'
import './fonts.css'
import Icons from '../../assets//icons/Icons'

const Right = ({time, url, valueLeft ,openModal ,valueRight, addMsgRight, handleOnChangeMsgRight, messageRight, message, }) => {
  return (
    <div className='right'>
      <div className='right__user'>
          <img src={right} className='right__user-img' alt="" />
          <div >
              <h1 className='right__user-name'>Евгений</h1>
              <span>{valueLeft ? 'Печатает...' : 'Онлайн' }</span>
            </div>
            </div>
            <div className='right__message'>
                {messageRight.map((item, index)=> (
                  <p key={index} className='left__message-user'>{item.valueRight}
                  <span key={index}>{item.time}</span>
                  </p>
                ))}
                {message.map((item, index) => (
              <p key={index} className='left__message-oponent'>
              {item.valueLeft}
              <span key={index}>{item.time}</span></p>
            ))}
            {url.map( item => (
              <div className='right-div' ><img className='right-img'  src={item.valueUrl}  alt="" />
              <p className='right-comment' >{item.comment}
              <span>{time}</span>
              </p>
              </div>
            ))}
          </div>
        <div className='right__send'>
              <form action="">
                <input onChange={handleOnChangeMsgRight} value={valueRight} type="text" placeholder='Написать сообщение...' />
                {valueRight ? <button onClick={addMsgRight}><Icons id='send' /></button>:
                <button onClick={openModal}><Icons id='photo'/></button>
                }
              </form>
        </div>
      
    </div>
  )
}

export default Right