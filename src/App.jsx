// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
  function changeDogUrl(){
    setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')
  }
  return (
    <div>
      <header>Dogアプリ</header>
      <div>犬の画像を表示するサイトです</div>
      <button onClick={changeDogUrl}>更新</button>
      <img src={dogUrl}></img>
    </div>
  )
}
