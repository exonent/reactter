// Componente React con estilo Widget: ClipRect

// Algunas de las propiedades que el ClipRect de Flutter puede tener:
// - clipBehavior
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente ClipRect
 * @param {Object} props - Propiedades del componente
 * @param {string} props.clipBehavior - Comportamiento del recorte (clip, unclip, etc.)
 * @param {Node} props.child - Componente hijo
 */
const ClipRect = ({
    clipBehavior,
    child
}) => {
    const style = {
        overflow: 'hidden',
        ...(clipBehavior === 'unclip' && { overflow: 'visible' })
    };

    return (
        <div style={style}>
            {child}
        </div>
    );
};

ClipRect.propTypes = {
    clipBehavior: PropTypes.oneOf(['clip', 'unclip']),
    child: PropTypes.node.isRequired
};

ClipRect.defaultProps = {
    clipBehavior: 'clip'
};

export default ClipRect;

// USO DEL COMPONENTE CLIPRECT
// import React from 'react';
// import ClipRect from './ClipRect';

// const App = () => {
//     return (
//         <div style={{ border: '1px solid black', width: '200px', height: '200px', margin: '16px' }}>
//             <ClipRect clipBehavior="clip">
//                 <div style={{ backgroundColor: 'blue', color: 'white', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     Contenido
//                 </div>
//             </ClipRect>
//         </div>
//     );
// };

// export default App;
