// Componente React con estilo Widget: PhysicalShape

// Algunas de las propiedades que el PhysicalShape de Flutter puede tener:
// - color
// - shadowColor
// - elevation
// - clipper
// - clipBehavior
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente PhysicalShape
 * @param {Object} props - Propiedades del componente
 * @param {string} props.color - Color de la forma física
 * @param {string} props.shadowColor - Color de la sombra
 * @param {number} props.elevation - Elevación de la forma física
 * @param {function} props.clipper - Función para personalizar el recorte
 * @param {string} props.clipBehavior - Comportamiento del recorte (clip, unclip, etc.)
 * @param {Node} props.child - Componente hijo
 */
const PhysicalShape = ({
    color,
    shadowColor,
    elevation,
    clipper,
    clipBehavior,
    child
}) => {
    const clipRef = React.useRef(null);

    React.useEffect(() => {
        if (clipRef.current && clipper) {
            const path = new Path2D(clipper());
            clipRef.current.style.clipPath = `path('${path}')`;
        }
    }, [clipper]);

    const style = {
        position: 'relative',
        backgroundColor: color,
        boxShadow: `${elevation}px ${elevation}px ${elevation * 2}px ${shadowColor}`,
        overflow: clipBehavior === 'clip' ? 'hidden' : 'visible'
    };

    return (
        <div ref={clipRef} style={style}>
            {child}
        </div>
    );
};

PhysicalShape.propTypes = {
    color: PropTypes.string.isRequired,
    shadowColor: PropTypes.string,
    elevation: PropTypes.number,
    clipper: PropTypes.func.isRequired,
    clipBehavior: PropTypes.oneOf(['clip', 'unclip']),
    child: PropTypes.node.isRequired
};

PhysicalShape.defaultProps = {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 2,
    clipBehavior: 'clip'
};

export default PhysicalShape;

// USO DEL COMPONENTE PHYSICALSHAPE
// import React from 'react';
// import PhysicalShape from './PhysicalShape';

// const customClipper = () => {
//     return 'M10 80 Q 95 10 180 80 T 330 80 T 490 80'; // Ejemplo de una ruta SVG para recorte
// };

// const App = () => {
//     return (
//         <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
//             <PhysicalShape
//                 color="lightgreen"
//                 shadowColor="rgba(0, 0, 0, 0.5)"
//                 elevation={4}
//                 clipper={customClipper}
//                 clipBehavior="clip"
//             >
//                 <div style={{ backgroundColor: 'white', color: 'green', padding: '16px', textAlign: 'center' }}>
//                     Forma Personalizada
//                 </div>
//             </PhysicalShape>
//         </div>
//     );
// };

// export default App;
