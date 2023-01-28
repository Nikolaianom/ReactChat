import React from 'react'
import './Modal.scss'

const Modal = ( {handleCloseModal, openModal, closeModal, 
    handleOnChangeComment,
    comment,
    valueUrl,
    url,
    handleOnChangeUrl,
    addPicture} ) => {



  return (
    <div onClick={closeModal} className={openModal ? 'modal active' : 'modal'}>
        <div className="modal__wrapper">
            <h2 className="modal__title">Отправить Картинку</h2>
            <form className='modal__form' action="">
            <div className="modal__group">
                <input onChange={handleOnChangeUrl} value={valueUrl} type="text" required/>
                <span className='bar'></span>
                <label >URL</label>
            </div>
            <div className="modal__group">
                <input onChange={handleOnChangeComment} value={comment} type="text" required/>
                <span className='bar'></span>
                <label>Комментарий</label>
            </div>
            </form>
            <div className="modal__btns">
                <button onClick={handleCloseModal} >Отмена</button>
                <button onClick={addPicture} >Отправить</button>
            </div>
        </div>
    </div>
  )
}

export default Modal