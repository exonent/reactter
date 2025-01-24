// Componente React con estilo Widget: Switch

// Algunas de las propiedades que el Switch de Flutter puede tener:
// - value
// - onChanged
// - activeColor
// - activeTrackColor
// - inactiveThumbColor
// - inactiveTrackColor
// - materialTapTargetSize
// - focusColor
// - hoverColor
// - autofocus

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Switch
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.value - Estado del switch
 * @param {function} props.onChanged - Función a ejecutar cuando el estado cambia
 * @param {string} props.activeColor - Color del switch cuando está activo
 * @param {string} props.activeTrackColor - Color de la pista cuando el switch está activo
 * @param {string} props.inactiveThumbColor - Color del thumb cuando el switch está inactivo
 * @param {string} props.inactiveTrackColor - Color de la pista cuando el switch está inactivo
 * @param {string} props.materialTapTargetSize - Tamaño del objetivo táctil (small, large)
 * @param {string} props.focusColor - Color del switch cuando está enfocado
 * @param {string} props.hoverColor - Color del switch cuando se pasa el cursor por encima
 * @param {boolean} props.autofocus - Si el switch debe tener enfoque automático
 */
const Switch = ({
    value,
    onChanged,
    activeColor,
    activeTrackColor,
    inactiveThumbColor,
    inactiveTrackColor,
    materialTapTargetSize,
    focusColor,
    hoverColor,
    autofocus
}) => {
    const style = {
        cursor: onChanged ? 'pointer' : 'not-allowed',
        position: 'relative',
        width: materialTapTargetSize === 'large' ? '40px' : '34px',
        height: materialTapTargetSize === 'large' ? '20px' : '14px',
        backgroundColor: value ? activeTrackColor : inactiveTrackColor,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: value ? 'flex-end' : 'flex-start',
        padding: '2px',
        transition: 'background-color 0.3s',
    };

    const thumbStyle = {
        width: '50%',
        height: '100%',
        backgroundColor: value ? activeColor : inactiveThumbColor,
        borderRadius: '50%',
        transition: 'background-color 0.3s, transform 0.3s',
        transform: value ? 'translateX(20px)' : 'translateX(0)',
        boxShadow: value ? `0px 0px 5px ${focusColor}` : 'none',
    };

    const handleChange = () => {
        if (onChanged) onChanged(!value);
    };

    return (
        <div onClick={handleChange} style={style} aria-checked={value} role="switch" tabIndex={0}>
            <div style={thumbStyle}></div>
        </div>
    );
};

Switch.propTypes = {
    value: PropTypes.bool.isRequired,
    onChanged: PropTypes.func.isRequired,
    activeColor: PropTypes.string,
    activeTrackColor: PropTypes.string,
    inactiveThumbColor: PropTypes.string,
    inactiveTrackColor: PropTypes.string,
    materialTapTargetSize: PropTypes.oneOf(['small', 'large']),
    focusColor: PropTypes.string,
    hoverColor: PropTypes.string,
    autofocus: PropTypes.bool
};

Switch.defaultProps = {
    activeColor: '#007bff',
    activeTrackColor: '#80bdff',
    inactiveThumbColor: '#6c757d',
    inactiveTrackColor: '#e9ecef',
    materialTapTargetSize: 'small',
    focusColor: '#0056b3',
    hoverColor: '#0056b3',
    autofocus: false
};

export default Switch;

// USO DEL COMPONENTE SWITCH
// import React, { useState } from 'react';
// import Switch from './Switch';

// const App = () => {
//     const [switchValue, setSwitchValue] = useState(false);

//     return (
//         <div style={{ padding: '16px' }}>
//             <Switch
//                 value={switchValue}
//                 onChanged={(value) => setSwitchValue(value)}
//                 activeColor="blue"
//                 activeTrackColor="lightblue"
//                 inactiveThumbColor="gray"
//                 inactiveTrackColor="lightgray"
//                 focusColor="darkblue"
//                 hoverColor="darkblue"
//                 materialTapTargetSize="large"
//                 autofocus
//             />
//             <p>Switch está {switchValue ? 'encendido' : 'apagado'}</p>
//         </div>
//     );
// };

// export default App;
