import { useState } from 'react';
import './Text.css';

function Text({ text }) {
  return (
    <div className="slide-right__wrapper">
      <span className="slide-right__text">{text}</span>
    </div>
  );
}

export default Text;
