// Componente React con estilo Widget: Radio

// Algunas de las propiedades que el Radio de Flutter puede tener:
// - value
// - groupValue
// - onChanged
// - activeColor
// - fillColor
// - focusColor
// - hoverColor
// - materialTapTargetSize
// - toggleable

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Radio
 * @param {Object} props - Propiedades del componente
 * @param {any} props.value - Valor del botón de opción
 * @param {any} props.groupValue - Valor del grupo de botones de opción
 * @param {function} props.onChanged - Función a ejecutar cuando el estado cambia
 * @param {string} props.activeColor - Color del botón de opción cuando está activo
 * @param {string} props.fillColor - Color de relleno del botón de opción
 * @param {string} props.focusColor - Color del botón de opción cuando está enfocado
 * @param {string} props.hoverColor - Color del botón de opción cuando se pasa el cursor por encima
 * @param {string} props.materialTapTargetSize - Tamaño del objetivo táctil (small, large)
 * @param {boolean} props.toggleable - Si el botón de opción puede ser alternado
 */
const Radio = ({
    value,
    groupValue,
    onChanged,
    activeColor,
    fillColor,
    focusColor,
    hoverColor,
    materialTapTargetSize,
    toggleable
}) => {
    const handleChange = () => {
        if (onChanged) onChanged(value === groupValue && toggleable ? null : value);
    };

    const style = {
        color: activeColor,
        accentColor: fillColor,
        outlineColor: focusColor,
        cursor: onChanged ? 'pointer' : 'not-allowed',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: materialTapTargetSize === 'large' ? '24px' : '16px',
        height: materialTapTargetSize === 'large' ? '24px' : '16px'
    };

    return (
        <div onClick={handleChange} style={style} title={hoverColor}>
            <input
                type="radio"
                checked={groupValue === value}
                readOnly
                style={{ appearance: 'none', width: '100%', height: '100%' }}
            />
            {groupValue === value && (
                <div style={{ backgroundColor: activeColor, width: '50%', height: '50%', borderRadius: '50%' }} />
            )}
        </div>
    );
};

Radio.propTypes = {
    value: PropTypes.any.isRequired,
    groupValue: PropTypes.any,
    onChanged: PropTypes.func,
    activeColor: PropTypes.string,
    fillColor: PropTypes.string,
    focusColor: PropTypes.string,
    hoverColor: PropTypes.string,
    materialTapTargetSize: PropTypes.oneOf(['small', 'large']),
    toggleable: PropTypes.bool
};

Radio.defaultProps = {
    activeColor: 'blue',
    fillColor: 'blue',
    focusColor: 'darkblue',
    hoverColor: 'lightblue',
    materialTapTargetSize: 'small',
    toggleable: false
};

export default Radio;

// USO DEL COMPONENTE RADIO
// import React, { useState } from 'react';
// import Radio from './Radio';

// const App = () => {
//     const [selectedValue, setSelectedValue] = useState(null);

//     return (
//         <div style={{ padding: '16px' }}>
//             <Radio
//                 value="option1"
//                 groupValue={selectedValue}
//                 onChanged={setSelectedValue}
//                 activeColor="blue"
//                 fillColor="blue"
//                 focusColor="darkblue"
//                 hoverColor="lightblue"
//                 materialTapTargetSize="large"
//                 toggleable
//             />
//             <Radio
//                 value="option2"
//                 groupValue={selectedValue}
//                 onChanged={setSelectedValue}
//                 activeColor="green"
//                 fillColor="green"
//                 focusColor="darkgreen"
//                 hoverColor="lightgreen"
//                 materialTapTargetSize="large"
//                 toggleable
//             />
//             <p>Opción seleccionada: {selectedValue}</p>
//         </div>
//     );
// };

// export default App;
