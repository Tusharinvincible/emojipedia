import React from 'react';
import './App.css';
import Header from './Header';
import EmojiArray from './EmojiArray';
import Emoji from './Emoji.jsx';
function createEmoji(emoji){
    return <div className='emoji-board'>
      <Emoji key={emoji.id} emoji={emoji.emoji} name={emoji.name} meaning={emoji.meaning} />
    </div>
}
function App() {
  return (
    <div className="App">

      <Header />

      <dl className='emoji-banner' >
        {
          EmojiArray.map(createEmoji)
        }
      </dl>

    </div>
  );
}

export default App;
