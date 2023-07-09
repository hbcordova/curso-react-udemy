import { useState } from 'react';

const EMPTY_STRING = '';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // Emitir el evento al padre
        onNewCategory( inputValue.trim() );

        setInputValue(EMPTY_STRING);
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text"
                placeholder='Buscar gifs...' 
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
}