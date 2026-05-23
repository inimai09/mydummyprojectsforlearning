import React, { useRef, useState } from 'react'
import './Image-generator.css'
import monkeyy from '../assets/monkeyy.png'

const ImageGenerator = () => {

  const [imageurl, setImageurl] = useState('/')

  let inputref = useRef(null)

  const imageGenerator = async () => {

    if (inputref.current.value === '') {
      return
    }

    const prompt = encodeURIComponent(
      inputref.current.value
    )

    const imageUrl =
      `https://image.pollinations.ai/prompt/${prompt}?width=512&height=512&seed=1`

    setImageurl(imageUrl)
  }

  return (
    <div className='image-generator'>

      <div className='header'>
        AI IMAGE <span>GENERATOR</span>
      </div>

      <div className='imgloading'>

        <img
          key={imageurl}
          src={imageurl === '/' ? monkeyy : imageurl}
          alt='generated'
          className='monkeyy'
        />

      </div>

      <div className='search-box'>

        <input
          type='text'
          ref={inputref}
          placeholder='Type image prompt'
          className='search-input'
          name='prompt'
        />

        <div
          className='gen-btn'
          onClick={imageGenerator}
        >
          Generate
        </div>

      </div>

    </div>
  )
}

export default ImageGenerator