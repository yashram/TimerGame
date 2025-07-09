import { useState, useRef } from "react";

import ResultModal from "./ResultModal";



export default function TimerChallenge({title, targetTime}) {

    let timer = useRef();
    let dialog = useRef();
    
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

   

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart(){
       timer.current = setInterval(() => {
        setTimeRemaining(
        prevTimeRemaining => prevTimeRemaining - 10); 
    }, 10);
        
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
         <ResultModal ref = {dialog} targetTime = {targetTime} remainingTime = {timeRemaining} onReset={handleReset} ></ResultModal>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                
                  {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick = {timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop':'Start'} Challenge</button>
            </p>
            <p className={timerIsActive ? 'active':undefined}>
                {timerIsActive ? 'Timer is running...' : 'Timer InActive'}
            </p>
        </section>
        </>
    );
}