import { useState } from 'react'
import './App.css'
import { fetchJoke } from './Jokeslice'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const [cate, setCate] = useState("")
  const [inputerr, setInputerr] = useState(false)
  const [cateListerr, setCateListerr] = useState(false)

  const joke = useSelector((state) => state.randomJoke.joke)
  const status = useSelector((state) => state.randomJoke.status)

  const dispatch = useDispatch()

  const cateArr = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"]

  const handleInput = (e) => {
    setCate(e.target.value)
    setInputerr(false) 
    setCateListerr(false) 
  }

  const handleButton = () => {
    if (cate === "") {
      setInputerr(true)  
      setCateListerr(false)
      return;
    }

    if (!cateArr.includes(cate.toLowerCase())) {
      setCateListerr(true)
      setInputerr(false) 
      return;
    }

    setInputerr(false)  
    setCateListerr(false)

    dispatch(fetchJoke(cate))
  }

  return (
    <div className='container'>
      <div className='joke-card'>
        <div className="input-group">
          <input 
            placeholder='Enter the joke category' 
            onChange={handleInput} 
            value={cate} 
          />
          <button onClick={handleButton}>Get Joke</button>
        </div>

      
        {inputerr && <p className='err'>Field is Empty</p>}
        {cateListerr && <p className='cateListerr'>Available categories: {cateArr.join(', ')}</p>}

        {!cateListerr && !inputerr && status && <p className='load'>{status}</p>}
        {!cateListerr && !inputerr && joke && <h1>{joke} 😂</h1>}
      </div>
    </div>
  )
}

export default App
