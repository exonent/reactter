// Componente React con estilo Widget: AnimatedContainer

// Algunas de las propiedades que el AnimatedContainer de Flutter puede tener:
// - duration
// - curve
// - width
// - height
// - color
// - alignment
// - padding
// - margin
// - borderRadius
// - boxShadow
// - onEnd

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente AnimatedContainer
 * @param {Object} props - Propiedades del componente
 * @param {number} props.duration - Duración de la animación en milisegundos
 * @param {string} props.curve - Curva de la animación (ease, linear, ease-in, ease-out, ease-in-out)
 * @param {string|number} props.width - Ancho del contenedor
 * @param {string|number} props.height - Alto del contenedor
 * @param {string} props.color - Color de fondo del contenedor
 * @param {string} props.alignment - Alineación del contenido (center, start, end, stretch, baseline)
 * @param {string} props.padding - Padding del contenedor
 * @param {string} props.margin - Margen del contenedor
 * @param {string} props.borderRadius - Radio del borde del contenedor
 * @param {string} props.boxShadow - Sombra del contenedor
 * @param {function} props.onEnd - Función a ejecutar al finalizar la animación
 * @param {Node} props.children - Contenido del contenedor
 */
const AnimatedContainer = ({
    duration,
    curve,
    width,
    height,
    color,
    alignment,
    padding,
    margin,
    borderRadius,
    boxShadow,
    onEnd,
    children
}) => {
    const [style, setStyle] = useState({
        width,
        height,
        backgroundColor: color,
        display: 'flex',
        justifyContent: alignment,
        padding,
        margin,
        borderRadius,
        boxShadow,
        transition: `all ${duration}ms ${curve}`
    });

    useEffect(() => {
        setStyle({
            width,
            height,
            backgroundColor: color,
            display: 'flex',
            justifyContent: alignment,
            padding,
            margin,
            borderRadius,
            boxShadow,
            transition: `all ${duration}ms ${curve}`
        });
    }, [width, height, color, alignment, padding, margin, borderRadius, boxShadow, duration, curve]);

    return (
        <div
            style={style}
            onTransitionEnd={onEnd}
        >
            {children}
        </div>
    );
};

AnimatedContainer.propTypes = {
    duration: PropTypes.number.isRequired,
    curve: PropTypes.oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    alignment: PropTypes.oneOf(['center', 'start', 'end', 'stretch', 'baseline']),
    padding: PropTypes.string,
    margin: PropTypes.string,
    borderRadius: PropTypes.string,
    boxShadow: PropTypes.string,
    onEnd: PropTypes.func,
    children: PropTypes.node
};

AnimatedContainer.defaultProps = {
    curve: 'ease',
    color: 'transparent',
    alignment: 'center',
    padding: '0',
    margin: '0',
    borderRadius: '0',
    boxShadow: 'none',
    onEnd: () => { }
};

export default AnimatedContainer;

// USO DEL COMPONENTE ANIMATEDCONTAINER
// import React, { useState } from 'react';
// import AnimatedContainer from './AnimatedContainer';

// const App = () => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={() => setIsExpanded(!isExpanded)}>
//                 Toggle Container
//             </button>
//             <AnimatedContainer
//                 duration={500}
//                 curve="ease-in-out"
//                 width={isExpanded ? '300px' : '100px'}
//                 height={isExpanded ? '300px' : '100px'}
//                 color={isExpanded ? 'blue' : 'red'}
//                 borderRadius={isExpanded ? '50%' : '0'}
//                 boxShadow="0px 4px 8px rgba(0, 0, 0, 0.3)"
//                 onEnd={() => console.log('Animation Ended')}
//             >
//                 <div style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
//                     Contenido
//                 </div>
//             </AnimatedContainer>
//         </div>
//     );
// };

// export default App;
