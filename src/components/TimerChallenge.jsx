import { useState, useRef } from "react";

import ResultModal from "./ResultModal";



export default function TimerChallenge({title, targetTime}) {
    
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    let timer = useRef();
    let dialog = useRef();

    function handleStart(){
       timer.current = setTimeout(() => { setTimerExpired(true); dialog.current.showModal();}, targetTime * 1000);
       
        setTimerStarted(true);
        
    }

    function handleStop(){
        clearTimeout(timer.current);
        setTimerStarted(false);
    }

    return (
        <>
         <ResultModal ref = {dialog} targetTime = {targetTime} result="won" ></ResultModal>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                
                  {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick = {timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop':'Start'} Challenge</button>
            </p>
            <p className={timerStarted ? 'active':undefined}>
                {timerStarted ? 'Timer is running...' : 'Timer InActive'}
            </p>
        </section>
        </>
    );
}