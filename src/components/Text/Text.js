import { useState } from 'react';
import './Text.css';

function Text({ text }) {
  return <p className="slide-right__text">{text}</p>;
}

export default Text;
