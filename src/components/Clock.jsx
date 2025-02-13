import React, {useEffect, useState } from 'react';
import '../styles/boss.css';

function Clock(props) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);   

    const hourHandRotation = (time.getHours() * 30) + (time.getMinutes() * 0.5) + 90;
    const minuteHandRotation = (time.getMinutes() * 6) + (time.getSeconds() * 0.1) + 90;
    const secondHandRotation = (time.getSeconds() * 6) + 90;

    return(
        <>
            <div className={`clock ${props.Name}`}>
                    <div className='clock-face'> 
                        <div className='hand minute-hand' style={{ transform: `rotate(${minuteHandRotation}deg)` }}></div>
                        <div className='hand second-hand' style={{ transform: `rotate(${secondHandRotation}deg)` }}></div>
                        <div className='hand hour-hand' style={{ transform: `rotate(${hourHandRotation}deg)` }}></div>
                        <div className='dot'></div>
                    </div>
            </div>
        </>
    )
}

export default Clock;
