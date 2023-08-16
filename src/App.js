import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const emojiCipher = {
  'A': '😄', 'B': '🎈', 'C': '🍕', 'D': '🐶', 'E': '🌞', 'F': '🚀', 'G': '🌸', 'H': '🌊',
  'I': '🎉', 'J': '🍔', 'K': '🍦', 'L': '🦄', 'M': '🌙', 'N': '🍀', 'O': '🐼', 'P': '🍎',
  'Q': '🍭', 'R': '🌈', 'S': '🎸', 'T': '🚲', 'U': '🌵', 'V': '📚', 'W': '🍉', 'X': '🎮',
  'Y': '🎨', 'Z': '🚤', 'a': '😃', 'b': '🎉', 'c': '🍔', 'd': '🍦', 'e': '🌈', 'f': '🚀',
  'g': '🌻', 'h': '🍁', 'i': '🎈', 'j': '🍔', 'k': '🍦', 'l': '🍨', 'm': '🌙', 'n': '🌱',
  'o': '🐼', 'p': '🍎', 'q': '🍭', 'r': '🌈', 's': '🎸', 't': '🚲', 'u': '🌷', 'v': '📚',
  'w': '🍉', 'x': '🎮', 'y': '🎨', 'z': '🚤',
  '0': '🔵', '1': '🔴', '2': '🟢', '3': '🟡', '4': '🟠', '5': '🟣',
  '6': '🟤', '7': '⚫', '8': '⚪', '9': '🟦', ' ': '⬛', '!': '❗', '?': '❓', '.': '🔸',
  ',': '🔹', '-': '➖', '+': '➕', '*': '✳️', '/': '🔀', '=': '🔗', '#': '🔗', '@': '📧',
  '$': '💲', '%': '💯', '^': '🔼', '&': '🔽', '(': '🔴', ')': '🔵', '<': '⬅️', '>': '➡️',
  '[': '🔷', ']': '🔶', '{': '🟦', '}': '🟩', '|': '⏬', '_': '⏫', '\\': '↘️', '`': '🔡',
  '~': '🌙', ':': '🔸', ';': '🔹', '"': '📖', "'": '📜'
};


function App() {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [displayEncode, setDisplayEncode] = useState(false);
  const [displayDecode, setDisplayDecode] = useState(false);
  const [decodedText, setDecodedText] = useState('');

  const convertToEmoji = (text) => {
    return text
      .toUpperCase()
      .split('')
      .map(char => emojiCipher[char] || char)
      .join(' ');
  };

  const convertToText = (emojis) => {
    const emojiKeys = Object.keys(emojiCipher);
    const emojiValues = Object.values(emojiCipher);

    return emojis
      .split(' ')
      .map(emoji => emojiValues.includes(emoji) ? emojiKeys[emojiValues.indexOf(emoji)] : emoji)
      .join('');
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setEncodedText(convertToEmoji(text));
  
  };
  const handleInputEmoji=(event)=>{
    const text = event.target.value;
    setDecodedText(convertToText(text));
  }

  const handleEncodeClick = () => {
    setDisplayEncode(!displayEncode);
    setDisplayDecode(false);
  };

  const handleDecodeClick = () => {
    setDisplayDecode(!displayDecode);
    setDisplayEncode(false);
  };

  return (
    <div className="App">
      <div>
        <h1>Emoji Encoder</h1>
        <textarea
          placeholder="Type your text here..."
          rows="4"
          cols="50"
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleEncodeClick}>Encode</button>
        {displayEncode && <div><p>{encodedText}</p></div>}
      </div>
      <div>
        <h1>Emoji Decoder</h1>
        <textarea
          placeholder="Type your emojis here..."
          rows="4"
          cols="50"
          onChange={handleInputEmoji}
        />
        <br />
        <button onClick={handleDecodeClick}>Decode</button>
        {displayDecode && <div><p>{decodedText}</p></div>}
      </div>
    </div>
  );
}

export default App;
