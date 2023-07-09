import React from 'react'
import PropTypes from 'prop-types';

// Podemos agregar le Prop-Types para indicar que tipo de parametros esperamos
// En caso de Vite es necesario agregar la dependencia: yarn add prop-types

export const FirstComponent = ({ title = "Titulo por defecto", subtitle}) => {

    if (!subtitle) throw new Error("El titulo no existe!");

    return (
        <React.Fragment>
            <h2>{ title }</h2>
            <h3>{ subtitle }</h3>
        </React.Fragment>
    )
}

FirstComponent.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string.isRequired
}

FirstComponent.defaultProps = {
    subtitle: "Subtitulo por defecto"
}
