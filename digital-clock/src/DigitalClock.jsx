import React, {useState, useEffect} from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()); // update time
        }, 1000); // updating time every second (1000ms)

        // cleanup before unmount
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // to get 1 after 12
        // hours%12 will returns 1,2,3 ... instead of 12,13 ...
        // hours%12 || 12 will return 12 if the hour is 12 
        // because 12%12 will be 0 => 0 || 12 = 12
        // this is because we don't want to show 0'o clock

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;