import React, { useState, useEffect } from 'react';

function MouseCoordinates() {

    const[coordinates, setCoordinates] = useState({x: 0, y: 0})

    function attach(e) {
        setCoordinates({
            x: e.offsetX,
            y: e.offsetY
        })
    } 

    useEffect(() => {
        window.addEventListener('mousemove', attach)
        return () => {
            window.removeEventListener('mousemove', attach)
        }
    }, [])

    return (
        <div>
            X-{coordinates.x}, Y-{coordinates.y}
        </div>
    )
}

export default MouseCoordinates;
