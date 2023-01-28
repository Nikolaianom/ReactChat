import React, {useState} from 'react'
import './Left.scss'
import left from '../../assets/images/first.png'
import Icons from '../../assets/icons/Icons'
import './fonts.css'





const Left = ({valueRight , openModal, addMsgLeft,valueLeft,  time, handleOnChangeMsg, message, messageRight , addPicture, url,valueUrl
  
}) => {
  
  return (
    <div className='left'>
        <div className='left__user'>
            <img onClick={openModal} className='left__user-img' src={left} alt="" />
            <div >
              <h1 className='left__user-name'>Александр</h1>
              <span>{valueRight   ?  'Печатает...' : 'Онлайн'  }</span>
            </div>
        </div>
        <div className='left__message'>
            {messageRight.map((item, index) => (
              <p key={index} className='left__message-oponent'>
              {item.valueRight}
              <span key= {index}>{time}</span>
              </p>
            ))}
            {message.map((item, index) => (
              <p key={index} className='left__message-user'>
              {item.valueLeft}
              <span key={index}>{item.time}</span></p>
            ))}
            {url.map(item  => (
              <div className='left-div' ><img className='left-img'  src={item.valueUrl}  alt="" />
              <p className='left-comment' >{item.comment}
              <span>{time}</span>
              </p>
              </div>
            ))}
            
        </div>
        <div className='left__send'>
              <form action="">
                <input onChange={handleOnChangeMsg} value={valueLeft} type="text" placeholder='Написать сообщение...' />
                {valueLeft ? <button onClick={addMsgLeft}><Icons id='send' /></button>:
                <button onClick={openModal}><Icons id='photo'/></button>
                }
              </form>
        </div>
    </div>
  )
}

export default Left

