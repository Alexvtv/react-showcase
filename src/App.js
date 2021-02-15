import './styles/main.scss'
import {useState, useEffect} from 'react'

import Panel from './components/panel.js'
import Main from './components/main.js'

function App() {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const [subject, setSubject] = useState('default')
  const [genre, setGenre] = useState('default')
  const [grade, setGrade] = useState('default')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch("https://krapipl.imumk.ru:8443/api/mobilev1/update",
      {
        method: 'POST',
        body: {"data":""}
      })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <div className="App">
        <h2>Витрина</h2>
        <Panel 
          data={items} 
          subject={subject}
          setSubject={setSubject}
          genre={genre}
          setGenre={setGenre}
          grade={grade}
          setGrade={setGrade}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <div>Загрузка...</div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <h2>Витрина</h2>
        <Panel 
          data={items} 
          subject={subject}
          setSubject={setSubject}
          genre={genre}
          setGenre={setGenre}
          grade={grade}
          setGrade={setGrade}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Main 
          data={items} 
          subject={subject}
          genre={genre}
          grade={grade}
          inputValue={inputValue.toLowerCase()}
        />
      </div>
    )
  }
}

export default App
