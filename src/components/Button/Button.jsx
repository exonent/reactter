// Componente React con estilo Widget: Button
// Algunas de las propiedades que el Button de Flutter puede tener:
// - onPressed
// - child
// - color
// - disabledColor
// - highlightColor
// - splashColor
// - shape
// - elevation
// - padding
// - minWidth
// - height

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Button
 * @param {Object} props - Propiedades del componente
 * @param {function} props.onPressed - Función a ejecutar al hacer clic en el botón
 * @param {Node} props.child - Contenido del botón
 * @param {string} props.color - Color del botón
 * @param {string} props.disabledColor - Color del botón cuando está deshabilitado
 * @param {string} props.highlightColor - Color del botón al hacer clic
 * @param {string} props.splashColor - Color del efecto de splash
 * @param {Object} props.shape - Forma del botón
 * @param {number} props.elevation - Elevación del botón
 * @param {string} props.padding - Espaciado interno del botón
 * @param {string|number} props.minWidth - Ancho mínimo del botón
 * @param {string|number} props.height - Altura del botón
 */
const Button = ({
    onPressed,
    child,
    color,
    disabledColor,
    highlightColor,
    splashColor,
    shape,
    elevation,
    padding,
    minWidth,
    height
}) => {
    const style = {
        backgroundColor: color,
        padding: padding,
        minWidth: minWidth,
        height: height,
        boxShadow: elevation ? `0px ${elevation}px ${elevation * 2}px rgba(0, 0, 0, 0.3)` : 'none',
        borderRadius: shape?.borderRadius || '4px',
        border: shape?.border || 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const handleMouseDown = (e) => {
        e.target.style.backgroundColor = highlightColor;
    };

    const handleMouseUp = (e) => {
        e.target.style.backgroundColor = color;
    };

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = color;
    };

    return (
        <button
            onClick={onPressed}
            style={style}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            disabled={!onPressed}
        >
            {child}
        </button>
    );
};

Button.propTypes = {
    onPressed: PropTypes.func,
    child: PropTypes.node.isRequired,
    color: PropTypes.string,
    disabledColor: PropTypes.string,
    highlightColor: PropTypes.string,
    splashColor: PropTypes.string,
    shape: PropTypes.shape({
        borderRadius: PropTypes.string,
        border: PropTypes.string
    }),
    elevation: PropTypes.number,
    padding: PropTypes.string,
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Button.defaultProps = {
    color: 'gray',
    disabledColor: 'lightgray',
    highlightColor: 'darkgray',
    splashColor: 'lightgray',
    elevation: 0,
    padding: '8px 16px',
    minWidth: '64px',
    height: '36px'
};

export default Button;

// USO DEL COMPONENTE BUTTON
// import React from 'react';
// import Button from './Button';

// const App = () => {
//     return (
//         <div style={{ padding: '16px' }}>
//             <Button
//                 onPressed={() => alert('¡Botón presionado!')}
//                 color="blue"
//                 highlightColor="darkblue"
//                 splashColor="lightblue"
//                 shape={{ borderRadius: '8px', border: '2px solid darkblue' }}
//                 elevation={2}
//                 padding="12px 24px"
//                 minWidth="100px"
//                 height="40px"
//             >
//                 <span style={{ color: 'white' }}>Presióname</span>
//             </Button>
//         </div>
//     );
// };

// export default App;
