import React, { useState } from 'react'
import SingleOtpInput from './SingleOtpInput'

const OtpInput = ({otpLength}) => {

    const [activeInput, setActiveInput] = useState(1)

    function changeActiveInput() {
        if(activeInput == otpLength)
            setActiveInput(1)
        else
            setActiveInput(activeInput+1)
    }

    function renderInputs() {
        const inputs = [];
        for (let index = 1; index <= otpLength; index++) {
            inputs.push(<SingleOtpInput key={index} focus={activeInput === index} informKeyDown={changeActiveInput}/>)
        }
        return inputs;
    }

    return (
        <div className="container">
            { [...renderInputs()] }
        </div>
    )
}

export default OtpInput;
