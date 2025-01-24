// Componente React con estilo Widget: AnimatedSize

// Algunas de las propiedades que el AnimatedSize de Flutter puede tener:
// - duration
// - curve
// - width
// - height
// - onEnd
// - child

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente AnimatedSize
 * @param {Object} props - Propiedades del componente
 * @param {number} props.duration - Duración de la animación en milisegundos
 * @param {string} props.curve - Curva de la animación (ease, linear, ease-in, ease-out, ease-in-out)
 * @param {string|number} props.width - Ancho del componente
 * @param {string|number} props.height - Alto del componente
 * @param {function} props.onEnd - Función a ejecutar al finalizar la animación
 * @param {Node} props.child - Componente hijo
 */
const AnimatedSize = ({
    duration,
    curve,
    width,
    height,
    onEnd,
    child
}) => {
    const [style, setStyle] = useState({
        width,
        height,
        transition: `all ${duration}ms ${curve}`
    });

    useEffect(() => {
        setStyle({
            width,
            height,
            transition: `all ${duration}ms ${curve}`
        });
    }, [width, height, duration, curve]);

    return (
        <div
            style={style}
            onTransitionEnd={onEnd}
        >
            {child}
        </div>
    );
};

AnimatedSize.propTypes = {
    duration: PropTypes.number.isRequired,
    curve: PropTypes.oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onEnd: PropTypes.func,
    child: PropTypes.node.isRequired
};

AnimatedSize.defaultProps = {
    curve: 'ease',
    width: 'auto',
    height: 'auto',
    onEnd: () => { }
};

export default AnimatedSize;

// USO DEL COMPONENTE ANIMATEDSIZE
// import React, { useState } from 'react';
// import AnimatedSize from './AnimatedSize';

// const App = () => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={() => setIsExpanded(!isExpanded)}>
//                 Toggle Size
//             </button>
//             <AnimatedSize
//                 duration={500}
//                 curve="ease-in-out"
//                 width={isExpanded ? '300px' : '100px'}
//                 height={isExpanded ? '300px' : '100px'}
//                 onEnd={() => console.log('Animation Ended')}
//             >
//                 <div style={{ backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
//                     Contenido
//                 </div>
//             </AnimatedSize>
//         </div>
//     );
// };

// export default App;
