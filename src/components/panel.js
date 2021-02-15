import '../styles/panel.scss'
function Panel(props) {

  const optionList = (type) => {
    let result = []

    if(props.data.result === "Ok") {
      if(type === 'grade') {
        result = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
      } else {
        props.data.items.forEach((item, index, array) => {
          if(!result.find(elem => elem === item[type])) {
            result.push(item[type])
          }
        })
      }
    }

    return result.map(elem => {
      return (
        <option value={elem} key={elem}>{elem}</option>
      )
    })
  }

  const changeSubject = (event) => {
    props.setSubject(event.target.value)
  }
  const changeGenre = (event) => {
    props.setGenre(event.target.value)
  }
  const changeGrade = (event) => {
    props.setGrade(event.target.value)
  }
  const changeInputValue = (event) => {
    props.setInputValue(event.target.value)
  }

  return (
    <div className="panel row">
      <div className="col-12 col-sm-4 col-md-3 panel-elem">
        <select value={props.subject} onChange={changeSubject}>
          <option value='default'>Все предметы</option>
          {optionList('subject')}
        </select>
      </div>
      <div className="col-12 col-sm-4 col-md-3 panel-elem">
        <select value={props.genre} onChange={changeGenre}>
          <option value='default'>Все жанры</option>
          {optionList('genre')}
        </select>
      </div>
      <div className="col-12 col-sm-4 col-md-3 panel-elem">
        <select value={props.grade} onChange={changeGrade}>
          <option value='default'>Все классы</option>
          {optionList('grade')}
        </select>
      </div>
      <div className="col-12 col-sm-12 col-md-3 panel-elem">
        <input value={props.inputValue} onChange={changeInputValue} />
      </div>
    </div>
  )

}

export default Panel