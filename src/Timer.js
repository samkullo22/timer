import React, { useState, useEffect } from 'react'

export default function Timer({ammount}) {
    const [minSec, setMinSec] = useState({minutes: ammount, seconds: 0});
    useEffect(() => {
        const interval = setInterval(()=> {
            const {seconds, minutes} = minSec
            if(seconds > 0) {
                setMinSec({minutes,seconds: seconds -1})
            }
            if(seconds === 0){
                if(minutes === 0){
                    clearInterval()
                }else{
                    setMinSec({minutes: minutes - 1, seconds: 59})
                }
            }

        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [minSec])
    const {minutes,seconds} = minSec;
    return (
        <div className="timer">
            <ul className="timing">
                <li className='seconds'>{minutes - 1 < 10 ? `0${minutes}` : minutes}</li>
                <li className='seconds'>:</li>
                <li className='seconds'>{seconds < 10 ? `0${seconds}` : seconds}</li>
            </ul>
            {/* <button className="breakBtn" type="submit" onClick={() => console.log('sad')}>Breakpoint</button> */}
        </div>
    )
}