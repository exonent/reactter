// Componente React con estilo Widget: IconButton

// Algunas de las propiedades que el IconButton de Flutter puede tener:
// - icon
// - onPressed
// - tooltip
// - color
// - disabledColor
// - highlightColor
// - splashColor
// - iconSize

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente IconButton
 * @param {Object} props - Propiedades del componente
 * @param {Node} props.icon - Icono del botón
 * @param {function} props.onPressed - Función a ejecutar al hacer clic en el botón
 * @param {string} props.tooltip - Texto de sugerencia
 * @param {string} props.color - Color del icono
 * @param {string} props.disabledColor - Color del icono cuando está deshabilitado
 * @param {string} props.highlightColor - Color del icono al hacer clic
 * @param {string} props.splashColor - Color del efecto de splash
 * @param {string|number} props.iconSize - Tamaño del icono
 */
const IconButton = ({
    icon,
    onPressed,
    tooltip,
    color,
    disabledColor,
    highlightColor,
    splashColor,
    iconSize
}) => {
    const style = {
        color: onPressed ? color : disabledColor,
        fontSize: iconSize,
        cursor: onPressed ? 'pointer' : 'not-allowed',
        backgroundColor: splashColor,
        borderRadius: '50%',
        padding: '8px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const handleMouseDown = (e) => {
        e.target.style.color = highlightColor;
    };

    const handleMouseUp = (e) => {
        e.target.style.color = color;
    };

    const handleMouseOut = (e) => {
        e.target.style.color = color;
    };

    return (
        <button
            onClick={onPressed}
            style={style}
            title={tooltip}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            disabled={!onPressed}
        >
            {icon}
        </button>
    );
};

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    onPressed: PropTypes.func,
    tooltip: PropTypes.string,
    color: PropTypes.string,
    disabledColor: PropTypes.string,
    highlightColor: PropTypes.string,
    splashColor: PropTypes.string,
    iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconButton.defaultProps = {
    color: 'black',
    disabledColor: 'gray',
    highlightColor: 'darkgray',
    splashColor: 'transparent',
    iconSize: '24px'
};

export default IconButton;

// USO DEL COMPONENTE ICONBUTTON
// import React from 'react';
// import IconButton from './IconButton';
// import Icon from './Icon';

// const App = () => {
//     return (
//         <div style={{ padding: '16px' }}>
//             <IconButton
//                 icon={<Icon name="home" />}
//                 onPressed={() => alert('¡Botón de icono presionado!')}
//                 tooltip="Inicio"
//                 color="blue"
//                 highlightColor="darkblue"
//                 splashColor="lightblue"
//                 iconSize="32px"
//             />
//         </div>
//     );
// };

// export default App;
