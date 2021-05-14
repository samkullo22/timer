import './App.css';
import Timer from './Timer'
import React,  {useState} from 'react'



const App = () => {
  const [val, setVal] = useState(0)
  const [run, setRun] = useState(false)

  return ( 
    <div className="haupt">
      {run ? (
        <Timer  ammount={val}  run={run}/>
      ) : (
        <div className="main">
          <div className="logo">
            <ul className="c-rainbow">
            <li className="c-rainbow__layer c-rainbow__layer--white">TIMER</li>
            <li className="c-rainbow__layer c-rainbow__layer--orange">TIMER</li>
            <li className="c-rainbow__layer c-rainbow__layer--red">TIMER</li>
            <li className="c-rainbow__layer c-rainbow__layer--violet">TIMER</li>
            <li className="c-rainbow__layer c-rainbow__layer--blue">TIMER</li>
            <li className="c-rainbow__layer c-rainbow__layer--green">TIMER</li>
            <li className="c-rainbow__layer c-rainbow__layer--yellow">TIMER</li>
            </ul>
          </div>
          <div className='timerSet'>
            <form onSubmit={(evt) => evt.preventDefault()}>
              <input type="tel" onChange={e => setVal(e.target.value)} placeholder="min"/>
            </form>
            <button type="submit" onClick={()=> setRun(true)}>
              start
            </button>
          </div>
      </div>
      )}
    </div>
  );
}
 
export default App;