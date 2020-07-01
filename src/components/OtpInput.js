import React, { useState } from 'react'
import SingleOtpInput from './SingleOtpInput'

const OtpInput = () => {

    const [activeInput, setActiveInput] = useState(1)

    function changeActiveInput() {
        console.log(activeInput)
        if(activeInput == 4)
            setActiveInput(1)
        else
            setActiveInput(activeInput+1)
    }

    return (
        <div className="container">
            <SingleOtpInput focus={activeInput === 1} informKeyDown={changeActiveInput}/>
            <SingleOtpInput focus={activeInput === 2} informKeyDown={changeActiveInput}/>
            <SingleOtpInput focus={activeInput === 3} informKeyDown={changeActiveInput}/>
            <SingleOtpInput focus={activeInput === 4} informKeyDown={changeActiveInput}/>
        </div>
    )
}

export default OtpInput;
