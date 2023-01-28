import React, {useState} from "react";
import Left from "./components/Left/Left"
import Modal from "./components/Modal/Modal";
import Right from "./components/Right/Right";


const time = `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`
function App() {
  //Модалка
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = (e) => {
    e.preventDefault()
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }  
  const closeModal = (e) => {
    if(e.target.classList.contains('modal')) {
      setOpenModal(false)
    }
  }
  // Добавление картинки
  const [valueUrl, setValueUrl] = useState('')
  const [url, setUrl] = useState([])

  const [comment, setComment] = useState('')
  const handleOnChangeComment = (e) => {
    setComment(e.target.value)
  }

  const handleOnChangeUrl = (e) => {
    setValueUrl(e.target.value)
  }

  const addPicture = (e) => {
    e.preventDefault()
    if(valueUrl !== ''){
      const newUrl = {
        id: Math.random().toString(36).substring(2, 9),
        valueUrl,
        comment,
        time
      }
      setUrl([...url, newUrl])
      setValueUrl('')
      setComment('')
      setOpenModal(false)
      console.log(newUrl);
    }
  }

  
  



  //Левая часть
  const [valueLeft, setValueLeft] = useState('')
  const [message, setMessage] = useState([])
  const handleOnChangeMsg = (e) => {
    setValueLeft(e.target.value)
  }
  const addMsgLeft = (e) => {
    e.preventDefault()
    if(valueLeft !== '') {
      const newMsg = {
        id: Math.random().toString(36).substring(2, 9),
        valueLeft,
        time
      }
    setMessage([...message, newMsg])
    setValueLeft('')
  }}
  // Правая часть
  const [valueRight, setValueRight] = useState('')
  const [messageRight, setMessageRight] = useState([])
  const handleOnChangeMsgRight = (e) => {
    setValueRight(e.target.value)
  }
  const addMsgRight = (e) => {
    e.preventDefault()
    if(valueRight !== '') {
      const newMsgRight = {
        id: Math.random().toString(36).substring(2, 9),
        valueRight,
        time
      }
    setMessageRight([...messageRight, newMsgRight])
    setValueRight('')
    console.log(valueRight);
  }}


  return (
    <div className="App">
      <Modal handleCloseModal={handleCloseModal} openModal={openModal} handleOpenModal={handleOpenModal}
      handleOnChangeUrl={handleOnChangeUrl}
      addPicture={addPicture}
      valueUrl={valueUrl}
      url={url}
      closeModal={closeModal}
      handleOnChangeComment={handleOnChangeComment}
      comment={comment}
      
      />
      
        <div className="container">
          <div className="app__wrapper">
            <Left 
            time={time}
             addMsgLeft={addMsgLeft}
             handleOnChangeMsg={handleOnChangeMsg}
             message={message}
             setMessage={setMessage}
             valueLeft={valueLeft}
             setValueLeft={setValueLeft}
             messageRight={messageRight}
             openModal={handleOpenModal}
             valueRight={valueRight}
             addPicture={addPicture}
             url={url}
             valueUrl={valueUrl}


            //  Picture
            
            

             />
            <Right
            valueRight={valueRight}
            addMsgRight={addMsgRight}
            handleOnChangeMsgRight={handleOnChangeMsgRight}
            messageRight={messageRight}
            valueLeft={valueLeft}
            url={url}

            message={message}
             time={time}

             openModal={handleOpenModal}
            ></Right>
          </div>
        </div>
    </div>
  );
}

export default App;
