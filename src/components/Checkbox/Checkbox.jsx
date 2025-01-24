// Componente React con estilo Widget: Checkbox

// Algunas de las propiedades que el Checkbox de Flutter puede tener:
// - value
// - onChanged
// - activeColor
// - checkColor
// - hoverColor
// - focusColor
// - tristate
// - autofocus
// - shape
// - side

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Checkbox
 * @param {Object} props - Propiedades del componente
 * @param {boolean|null} props.value - Estado del checkbox (true, false, null para tristate)
 * @param {function} props.onChanged - Función a ejecutar cuando el estado cambia
 * @param {string} props.activeColor - Color del checkbox cuando está activo
 * @param {string} props.checkColor - Color de la marca de verificación
 * @param {string} props.hoverColor - Color del checkbox cuando se pasa el cursor por encima
 * @param {string} props.focusColor - Color del checkbox cuando está enfocado
 * @param {boolean} props.tristate - Si el checkbox puede estar en un tercer estado (null)
 * @param {boolean} props.autofocus - Si el checkbox debe tener enfoque automático
 * @param {Object} props.shape - Forma del checkbox
 * @param {string} props.side - Lado del checkbox donde se coloca la marca de verificación
 */
const Checkbox = ({
    value,
    onChanged,
    activeColor,
    checkColor,
    hoverColor,
    focusColor,
    tristate,
    autofocus,
    shape,
    side
}) => {
    const handleChange = (e) => {
        if (onChanged) onChanged(tristate ? e.target.indeterminate : e.target.checked);
    };

    const style = {
        accentColor: activeColor,
        borderColor: checkColor,
        outlineColor: focusColor,
    };

    return (
        <input
            type="checkbox"
            checked={value === true}
            onChange={handleChange}
            style={style}
            ref={input => {
                if (input) input.indeterminate = tristate && value === null;
            }}
            autoFocus={autofocus}
        />
    );
};

Checkbox.propTypes = {
    value: PropTypes.oneOf([true, false, null]),
    onChanged: PropTypes.func,
    activeColor: PropTypes.string,
    checkColor: PropTypes.string,
    hoverColor: PropTypes.string,
    focusColor: PropTypes.string,
    tristate: PropTypes.bool,
    autofocus: PropTypes.bool,
    shape: PropTypes.object,
    side: PropTypes.string
};

Checkbox.defaultProps = {
    value: false,
    tristate: false,
    autofocus: false
};

export default Checkbox;

// USO DEL COMPONENTE CHECKBOX
// import React, { useState } from 'react';
// import Checkbox from './Checkbox';

// const App = () => {
//     const [checked, setChecked] = useState(false);

//     return (
//         <div style={{ padding: '16px' }}>
//             <Checkbox
//                 value={checked}
//                 onChanged={(value) => setChecked(value)}
//                 activeColor="blue"
//                 checkColor="white"
//                 hoverColor="lightblue"
//                 focusColor="darkblue"
//                 tristate={false}
//                 autofocus
//             />
//             <p>Checkbox está {checked ? 'marcado' : 'desmarcado'}</p>
//         </div>
//     );
// };

// export default App;
