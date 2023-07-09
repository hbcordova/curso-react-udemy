import React from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ initialValue }) => {

    const [value, setValue] = React.useState(initialValue);

    console.log("Heber Cordova"); // No hacer esto, se ejecutara cada vez que se actualice el componente

    const increaseCounter = (event, increment) => {
        setValue(value + increment)
        console.log(event)
    }

    const decreaseCounter = (event) => {
        setValue( (currentValue) => currentValue - 1);
    }

    const resetCounter = () => {
        setValue(0);
    }

    return (
        <React.Fragment>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
            <div className='column-gap'>
                <button onClick={ (event) => increaseCounter(event, 1) }> +1 </button>
                <button onClick={ decreaseCounter }> -1 </button>
                <button onClick={ resetCounter }> Reset </button>
            </div>
        </React.Fragment>
    )
}

CounterApp.propTypes = {
    initialValue: PropTypes.number.isRequired
}
