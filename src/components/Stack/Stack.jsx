// Componente React con estilo Widget: Stack

// Algunas de las propiedades que el Stack de Flutter puede tener:
// - children
// - alignment
// - fit
// - overflow

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Stack
 * @param {Object} props - Propiedades del componente
 * @param {Array<Node>} props.children - Lista de elementos hijos
 * @param {string} props.alignment - Alineación de los hijos (topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight)
 * @param {string} props.fit - Cómo ajustar el Stack (loose, expand)
 * @param {string} props.overflow - Comportamiento del desbordamiento (visible, hidden)
 */
const Stack = ({
    children,
    alignment,
    fit,
    overflow
}) => {
    const alignmentStyles = {
        topLeft: { justifyContent: 'flex-start', alignItems: 'flex-start' },
        topCenter: { justifyContent: 'flex-start', alignItems: 'center' },
        topRight: { justifyContent: 'flex-start', alignItems: 'flex-end' },
        centerLeft: { justifyContent: 'center', alignItems: 'flex-start' },
        center: { justifyContent: 'center', alignItems: 'center' },
        centerRight: { justifyContent: 'center', alignItems: 'flex-end' },
        bottomLeft: { justifyContent: 'flex-end', alignItems: 'flex-start' },
        bottomCenter: { justifyContent: 'flex-end', alignItems: 'center' },
        bottomRight: { justifyContent: 'flex-end', alignItems: 'flex-end' }
    };

    const style = {
        display: 'flex',
        position: 'relative',
        width: fit === 'expand' ? '100%' : 'auto',
        height: fit === 'expand' ? '100%' : 'auto',
        overflow: overflow,
        ...alignmentStyles[alignment]
    };

    return (
        <div style={style}>
            {React.Children.map(children, (child, index) => (
                <div key={index} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    {child}
                </div>
            ))}
        </div>
    );
};

Stack.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    alignment: PropTypes.oneOf(['topLeft', 'topCenter', 'topRight', 'centerLeft', 'center', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight']),
    fit: PropTypes.oneOf(['loose', 'expand']),
    overflow: PropTypes.oneOf(['visible', 'hidden'])
};

Stack.defaultProps = {
    alignment: 'topLeft',
    fit: 'loose',
    overflow: 'visible'
};

export default Stack;

// USO DEL COMPONENTE STACK
// import React from 'react';
// import Stack from './Stack';

// const App = () => {
//     return (
//         <Stack
//             alignment="center"
//             fit="expand"
//             overflow="hidden"
//         >
//             <div style={{ backgroundColor: 'lightgray', width: '100px', height: '100px' }}>Child 1</div>
//             <div style={{ backgroundColor: 'gray', width: '80px', height: '80px' }}>Child 2</div>
//             <div style={{ backgroundColor: 'darkgray', width: '60px', height: '60px' }}>Child 3</div>
//         </Stack>
//     );
// };

// export default App;
