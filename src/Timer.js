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
                <li>{minutes - 1 >= 10 ? `${minutes}`[0] : 0}</li>
                <li>{minutes - 1 >= 10 ? `${minutes}`[1] : minutes}</li>
                <li style={{margin: '0 0', padding: '0 0 ', width: '50px'}}>:</li>
                <li>{seconds > 10 ? `${seconds}`[0] : 0}</li>
                <li>{seconds > 10 ? `${seconds}`[1] : seconds}</li>
            </ul>
            {/* <button className="breakBtn" type="submit" onClick={() => console.log('sad')}>Breakpoint</button> */}
        </div>
    )
}