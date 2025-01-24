// Componente React con estilo Widget: FloatingActionButton

// Algunas de las propiedades que el FloatingActionButton de Flutter puede tener:
// - onClick
// - icon
// - backgroundColor
// - tooltip

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente FloatingActionButton
 * @param {Object} props - Propiedades del componente
 * @param {function} props.onClick - Función a ejecutar al hacer clic
 * @param {Node} props.icon - Ícono a mostrar en el botón
 * @param {string} props.backgroundColor - Color de fondo del botón
 * @param {string} props.tooltip - Texto de ayuda (tooltip) del botón
 */
const FloatingActionButton = ({
    onClick,
    icon,
    backgroundColor,
    tooltip
}) => {
    const style = {
        backgroundColor: backgroundColor || 'blue',
        borderRadius: '50%',
        width: '56px',
        height: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        color: 'white',
        cursor: 'pointer',
        position: 'fixed',
        bottom: '16px',
        right: '16px'
    };

    return (
        <div
            style={style}
            onClick={onClick}
            title={tooltip}
        >
            {icon}
        </div>
    );
};

FloatingActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string,
    tooltip: PropTypes.string
};

export default FloatingActionButton;

// USO DEL COMPONENTE FLOATINGACTIONBUTTON
// import React from 'react';
// import FloatingActionButton from './FloatingActionButton';

// const App = () => {
//     const handleClick = () => {
//         alert('Floating Action Button presionado!');
//     };

//     return (
//         <div style={{ padding: '16px' }}>
//             <FloatingActionButton
//                 onClick={handleClick}
//                 icon={<span style={{ fontSize: '24px' }}>+</span>}
//                 backgroundColor="red"
//                 tooltip="Añadir"
//             />
//         </div>
//     );
// };

// export default App;
