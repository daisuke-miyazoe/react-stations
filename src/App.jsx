// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
  async function changeDogUrl(){
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setDogUrl(data.message)
  }
  return (
    <div>
      <header className='dog-header'>Dogアプリ</header>
      <div>犬の画像を表示するサイトです</div>
      <button onClick={changeDogUrl}>更新</button>
      <img src={dogUrl}></img>
    </div>
  )
}
