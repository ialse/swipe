import { useState } from 'react';
import './SlideLeft.css';
import Text from '../Text/Text';

function SlideLeft({}) {
  const [arrText, setArrText] = useState([]);
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    const newArr = [...arrText, text];
    setArrText(newArr);
  }

  return (
    <div className="slide-left">
      <div className="slide-left__header">
        <textarea className="slide-left__input-text" value={text} onChange={handleChange}></textarea>
        <button className="slide-left__btn" onClick={handleClick}>
          Отправить
        </button>
      </div>
      <div className="slide-left__main">
        {arrText.map((item, index) => {
          return <Text key={index} text={item} />;
        })}
      </div>
    </div>
  );
}

export default SlideLeft;
