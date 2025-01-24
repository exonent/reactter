// Componente React con estilo Widget: Slider

// Algunas de las propiedades que el Slider de Flutter puede tener:
// - value
// - onChanged
// - min
// - max
// - divisions
// - activeColor
// - inactiveColor
// - label
// - thumbColor

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Slider
 * @param {Object} props - Propiedades del componente
 * @param {number} props.value - Valor actual del slider
 * @param {function} props.onChanged - Función a ejecutar cuando el valor cambia
 * @param {number} props.min - Valor mínimo del slider
 * @param {number} props.max - Valor máximo del slider
 * @param {number} props.divisions - Número de divisiones del slider
 * @param {string} props.activeColor - Color de la parte activa del slider
 * @param {string} props.inactiveColor - Color de la parte inactiva del slider
 * @param {string} props.label - Etiqueta para el valor del slider
 * @param {string} props.thumbColor - Color del pulgar del slider
 */
const Slider = ({
    value,
    onChanged,
    min,
    max,
    divisions,
    activeColor,
    inactiveColor,
    label,
    thumbColor
}) => {
    const style = {
        background: `linear-gradient(to right, ${activeColor} ${((value - min) / (max - min)) * 100}%, ${inactiveColor} ${((value - min) / (max - min)) * 100}%)`,
        borderRadius: '4px',
        height: '6px',
        position: 'relative',
    };

    const thumbStyle = {
        position: 'absolute',
        top: '50%',
        left: `${((value - min) / (max - min)) * 100}%`,
        transform: 'translate(-50%, -50%)',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: thumbColor,
        cursor: 'pointer',
    };

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        onChanged(newValue);
    };

    return (
        <div>
            <div style={style}>
                <div style={thumbStyle}></div>
            </div>
            <input
                type="range"
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
                step={divisions ? (max - min) / divisions : 1}
                style={{ width: '100%', appearance: 'none', opacity: 0, position: 'absolute', top: 0, left: 0, height: '100%' }}
                aria-label={label}
            />
        </div>
    );
};

Slider.propTypes = {
    value: PropTypes.number.isRequired,
    onChanged: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    divisions: PropTypes.number,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    label: PropTypes.string,
    thumbColor: PropTypes.string
};

Slider.defaultProps = {
    min: 0,
    max: 100,
    divisions: null,
    activeColor: '#007bff',
    inactiveColor: '#e9ecef',
    label: 'Slider',
    thumbColor: '#007bff'
};

export default Slider;

// USO DEL COMPONENTE SLIDER
// import React, { useState } from 'react';
// import Slider from './Slider';

// const App = () => {
//     const [sliderValue, setSliderValue] = useState(50);

//     return (
//         <div style={{ padding: '16px' }}>
//             <Slider
//                 value={sliderValue}
//                 onChanged={(value) => setSliderValue(value)}
//                 min={0}
//                 max={100}
//                 divisions={20}
//                 activeColor="blue"
//                 inactiveColor="lightgray"
//                 thumbColor="blue"
//                 label="My Slider"
//             />
//             <p>Valor del slider: {sliderValue}</p>
//         </div>
//     );
// };

// export default App;
