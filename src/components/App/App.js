import './App.css';

import SlideLeft from '../SlideLeft/SlideLeft';
import SlideRight from '../SlideRight/SlideRight';

import { useRef, useState } from 'react';

function App() {
  const [startX, setStartX] = useState(0); //начальная координата (куда тапнули)
  const [moveTrans, setMoveTrans] = useState(''); // установка класса для анимации
  const [leftOffset, setLeftOffset] = useState(0); //Есть сдвиг или нет
  const page = useRef(null);

  function handleTouchStart(e) {
    setMoveTrans('');
    setStartX(e.touches[0].pageX);
  }

  // устанавливаем ширину
  function setPropLeft(offset) {
    page.current.style.left = offset + 'px';
  }

  function handleMove(e) {
    const dist = startX - e.touches[0].pageX;
    const dirSwipe = dist > 0 ? 'right' : 'left'; //определение направления свайпа

    if ((leftOffset && dirSwipe === 'right') || (!leftOffset && dirSwipe === 'left')) {
      setPropLeft(leftOffset);
    } else {
      setPropLeft(leftOffset - dist);
    }
  }

  function handleTouchEnd(e) {
    const dist = startX - e.changedTouches[0].pageX; // определение размера свайпа
    const dirSwipe = dist > 0 ? 'right' : 'left'; //определение направления свайпа

    // Если свайп не в ту сторону, то выходим
    if ((dirSwipe === 'right' && leftOffset) || (dirSwipe === 'left' && !leftOffset)) {
      return;
    }

    const isMinDist = Math.abs(dist) > page.current.offsetWidth / 6 ? true : false; //определение минимального свайпа (треть ширины экрана)
    const offset = page.current.offsetWidth / 2; // определение размера смещения

    if ((leftOffset && isMinDist) || (!isMinDist && !leftOffset)) {
      setPropLeft(0);
      setLeftOffset(0);
    } else {
      setPropLeft(-offset);
      setLeftOffset(-offset);
    }

    setMoveTrans('page_move');
    setStartX(0);
  }

  return (
    <div
      className={`page ${moveTrans}`}
      ref={page}
      onTouchMove={handleMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <SlideLeft />
      <SlideRight />
    </div>
  );
}

export default App;
