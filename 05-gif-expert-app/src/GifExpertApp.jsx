import React, { useState } from 'react'
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        // Validamos que no exista el nuevo category en la lista de categories
        if (categories.includes(newCategory)) return;

        // Agregamos el nuevo category
        setCategories(categories => [newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ onAddCategory }/>

            { 
                categories.map(category => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                )) 
            }
        </>
    );
}