// Componente React con estilo Widget: ClipRRect

// Algunas de las propiedades que el ClipRRect de Flutter puede tener:
// - borderRadius
// - clipBehavior
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente ClipRRect
 * @param {Object} props - Propiedades del componente
 * @param {string} props.borderRadius - Radio del borde del recorte
 * @param {string} props.clipBehavior - Comportamiento del recorte (clip, unclip, etc.)
 * @param {Node} props.child - Componente hijo
 */
const ClipRRect = ({
    borderRadius,
    clipBehavior,
    child
}) => {
    const style = {
        borderRadius: borderRadius,
        overflow: 'hidden',
        ...(clipBehavior === 'unclip' && { overflow: 'visible' })
    };

    return (
        <div style={style}>
            {child}
        </div>
    );
};

ClipRRect.propTypes = {
    borderRadius: PropTypes.string.isRequired,
    clipBehavior: PropTypes.oneOf(['clip', 'unclip']),
    child: PropTypes.node.isRequired
};

ClipRRect.defaultProps = {
    clipBehavior: 'clip'
};

export default ClipRRect;

// USO DEL COMPONENTE CLIPRRECT
// import React from 'react';
// import ClipRRect from './ClipRRect';

// const App = () => {
//     return (
//         <div style={{ border: '1px solid black', width: '200px', height: '200px', margin: '16px' }}>
//             <ClipRRect borderRadius="16px" clipBehavior="clip">
//                 <div style={{ backgroundColor: 'blue', color: 'white', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     Contenido
//                 </div>
//             </ClipRRect>
//         </div>
//     );
// };

// export default App;
