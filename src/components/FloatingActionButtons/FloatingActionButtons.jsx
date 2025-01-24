// Componente React con estilo Widget: FloatingActionButton

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente FloatingActionButton
 * @param {Object} props - Propiedades del componente
 * @param {function} props.onClick - Función a ejecutar al hacer clic
 * @param {Node} props.icon - Ícono a mostrar en el botón
 * @param {string} props.backgroundColor - Color de fondo del botón
 * @param {string} props.tooltip - Texto de ayuda (tooltip) del botón
 * @param {string} props.position - Posición del botón (bottomRight, bottomLeft, topRight, topLeft, center)
 */
const FloatingActionButton = ({
    onClick,
    icon,
    backgroundColor,
    tooltip,
    position
}) => {
    const positions = {
        bottomRight: { bottom: '16px', right: '16px' },
        bottomLeft: { bottom: '16px', left: '16px' },
        topRight: { top: '16px', right: '16px' },
        topLeft: { top: '16px', left: '16px' },
        center: { bottom: '50%', right: '50%', transform: 'translate(50%, 50%)' }
    };

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
        ...positions[position]
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
    tooltip: PropTypes.string,
    position: PropTypes.oneOf(['bottomRight', 'bottomLeft', 'topRight', 'topLeft', 'center'])
};

FloatingActionButton.defaultProps = {
    position: 'bottomRight'
};

export default FloatingActionButton;

// USO DE VARIOS COMPONENTES FLOATINGACTIONBUTTON
// import React from 'react';
// import FloatingActionButton from './FloatingActionButton';

// const App = () => {
//     const handleClick = (button) => {
//         alert(`Floating Action Button ${button} presionado!`);
//     };

//     return (
//         <div style={{ padding: '16px' }}>
//             <FloatingActionButton
//                 onClick={() => handleClick('Red')}
//                 icon={<span style={{ fontSize: '24px' }}>+</span>}
//                 backgroundColor="red"
//                 tooltip="Añadir"
//                 position="bottomRight"
//             />
//             <FloatingActionButton
//                 onClick={() => handleClick('Green')}
//                 icon={<span style={{ fontSize: '24px' }}>+</span>}
//                 backgroundColor="green"
//                 tooltip="Añadir"
//                 position="bottomLeft"
//             />
//             <FloatingActionButton
//                 onClick={() => handleClick('Blue')}
//                 icon={<span style={{ fontSize: '24px' }}>+</span>}
//                 backgroundColor="blue"
//                 tooltip="Añadir"
//                 position="topRight"
//             />
//             <FloatingActionButton
//                 onClick={() => handleClick('Yellow')}
//                 icon={<span style={{ fontSize: '24px' }}>+</span>}
//                 backgroundColor="yellow"
//                 tooltip="Añadir"
//                 position="topLeft"
//             />
//             <FloatingActionButton
//                 onClick={() => handleClick('Purple')}
//                 icon={<span style={{ fontSize: '24px' }}>+</span>}
//                 backgroundColor="purple"
//                 tooltip="Añadir"
//                 position="center"
//             />
//         </div>
//     );
// };

// export default App;
