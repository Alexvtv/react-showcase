import '../styles/main.scss'
import {useState, useEffect} from 'react'

function Main(props) {


  const [currency, setCurrency] = useState('rub')

  const changeCurrency = (event) => {
    setCurrency(event.target.value)
  }

  const elemList = () => {
    if(props.data.result === "Ok") {

      return props.data.items.map(elem => {
        console.log(elem.grade.split(";"))
        if((props.subject !== 'default') && (props.subject !== elem.subject)) {
          return
        }
        if((props.genre !== 'default') && (props.genre !== elem.genre)) {
          return
        }
        if((props.grade !== 'default') && (elem.grade.split(";").indexOf(props.grade) === -1)) {
          return
        }
        if((props.inputValue !== '') && (elem.description.toLowerCase().indexOf(props.inputValue) === -1) && (elem.title.toLowerCase().indexOf(props.inputValue) === -1)) {
          return
        }

        const priceButton = () => {
          if(currency === 'rub') {
            return (
              <button>
                {elem.price} руб
              </button>
            )
          } else if(currency === 'bonus') {
            return (
              <button>
                {elem.priceBonus} бонусов
              </button>
            )
          }
        }
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 element" key={elem.courseId}>
            <div className="content">
              <img src="/noimg.png" />
              <div>
                <p>{elem.subject}</p>
                <p>{elem.grade} класс</p>
                <p className="genre">{elem.genre}</p>
                <a>Подробнее</a>
                {priceButton()}
              </div>
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div className="main row justify-content-center">
      <div className="col-12">
        <select value={currency} onChange={changeCurrency}>
          <option value='rub'>Рубли</option>
          <option value='bonus'>Бонусы</option>
        </select>
        <h3>Результаты поиска:</h3>
      </div>
      {elemList()}
    </div>
  )

}

export default Main