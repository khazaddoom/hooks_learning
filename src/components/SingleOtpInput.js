import React, { useState, useEffect, useRef } from 'react'

const SingleOtpInput = ({focus, informKeyDown}) => {

    const [value, setValue] = useState('')

    const refInput = useRef();

    // useEffect(() => {
    //     const { current } = refInput;

    //     const handleFocus = () => {
    //         console.log('input is focussed');
    //     }
    //     const handleBlur = () => {
    //         console.log('input is blurred');
    //     }

    //     current.addEventListener('focus', handleFocus);
    //     current.addEventListener('blur', handleBlur);

    //     return () => {
    //         current.removeEventListener('focus', handleFocus);
    //         current.removeEventListener('blur', handleBlur);
    //     }
    // });

    useEffect(() => {
        const { current } = refInput;
        focus? current.focus() : current.blur()
    }, [focus])

    function handleKeyUp(e) {
        const keyValue = +e.keyCode;

        if(keyValue >= 48 && keyValue <= 57) {
            setValue(keyValue - 48)
            informKeyDown()
        } else if(keyValue === 8 || keyValue === 46) {
           setValue('')
        } else {
            setValue(prevState => prevState)
        }
    }

    return (
        <div>
            <input type="text" maxLength="1" ref={refInput} onKeyUp={handleKeyUp} value={value} />
        </div>
    )
}

export default SingleOtpInput;
