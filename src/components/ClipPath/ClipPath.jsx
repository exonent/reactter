// Componente React con estilo Widget: ClipPath

// Algunas de las propiedades que el ClipPath de Flutter puede tener:
// - customClipper
// - clipBehavior
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente ClipPath
 * @param {Object} props - Propiedades del componente
 * @param {function} props.customClipper - Función para personalizar el recorte
 * @param {string} props.clipBehavior - Comportamiento del recorte (clip, unclip, etc.)
 * @param {Node} props.child - Componente hijo
 */
const ClipPath = ({
    customClipper,
    clipBehavior,
    child
}) => {
    const clipRef = React.useRef(null);

    React.useEffect(() => {
        if (clipRef.current && customClipper) {
            const path = new Path2D(customClipper());
            clipRef.current.style.clipPath = `path('${path}')`;
        }
    }, [customClipper]);

    const style = {
        overflow: 'hidden',
        ...(clipBehavior === 'unclip' && { overflow: 'visible' })
    };

    return (
        <div ref={clipRef} style={style}>
            {child}
        </div>
    );
};

ClipPath.propTypes = {
    customClipper: PropTypes.func.isRequired,
    clipBehavior: PropTypes.oneOf(['clip', 'unclip']),
    child: PropTypes.node.isRequired
};

ClipPath.defaultProps = {
    clipBehavior: 'clip'
};

export default ClipPath;

// USO DEL COMPONENTE CLIPPATH
// import React from 'react';
// import ClipPath from './ClipPath';

// const customClipper = () => {
//     return 'M10 80 Q 95 10 180 80 T 330 80 T 490 80'; // Ejemplo de una ruta SVG para recorte
// };

// const App = () => {
//     return (
//         <div style={{ border: '1px solid black', width: '300px', height: '200px', margin: '16px' }}>
//             <ClipPath customClipper={customClipper} clipBehavior="clip">
//                 <div style={{ backgroundColor: 'blue', color: 'white', width: '400px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     Contenido
//                 </div>
//             </ClipPath>
//         </div>
//     );
// };

// export default App;
