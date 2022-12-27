import React from 'react'
import { useEffect } from 'react';
import { FaClock } from "react-icons/fa";
import "./header.css";


const Header = () => {
    const startTimer = () => {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) { m = m - 1 }
        if (m < 0) {
            return
        }
        // localStorage.setItem("time", m + ":" + s);
        document.getElementById('timer').innerHTML =
            m + ":" + s;
        //  console.log(m + ":" + s);
        setTimeout(startTimer, 1000);
    }

    const checkSecond = (sec) => {
        if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
        if (sec < 0) { sec = "59" };
        return sec;
    }

    useEffect(() => {
        console.log("eeeee");
        document.getElementById('timer').innerHTML = "08:00";
        startTimer();
        // if (localStorage.getItem("time") !== null && localStorage.getItem("time") !== "0:00") {
        //     document.getElementById('timer').innerHTML = localStorage.getItem("time");
        //     startTimer();
        // } else {
        //     document.getElementById('timer').innerHTML = "08 : 00";
        //     startTimer();
        // }

    }, [])



    return (
        <div>
            <div className='header'>
                <p className='text-dark text-center mb-0 p-0' style={{ letterSpacing: 2, fontSize: 16 }}><b>Your Special Price Is Reserved For </b><span className='text-danger'><FaClock /></span>
                    <span className='stopwatch text-danger ml-2' style={{ fontWeight: 'bold' }} id="timer"></span> </p>
            </div>
        </div>


    )

}



export default Header
