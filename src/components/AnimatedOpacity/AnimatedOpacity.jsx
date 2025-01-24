// Componente React con estilo Widget: AnimatedOpacity

// Algunas de las propiedades que el AnimatedOpacity de Flutter puede tener:
// - duration
// - curve
// - opacity
// - onEnd
// - child

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente AnimatedOpacity
 * @param {Object} props - Propiedades del componente
 * @param {number} props.duration - Duración de la animación en milisegundos
 * @param {string} props.curve - Curva de la animación (ease, linear, ease-in, ease-out, ease-in-out)
 * @param {number} props.opacity - Valor de opacidad (0 a 1)
 * @param {function} props.onEnd - Función a ejecutar al finalizar la animación
 * @param {Node} props.child - Componente hijo
 */
const AnimatedOpacity = ({
    duration,
    curve,
    opacity,
    onEnd,
    child
}) => {
    const [style, setStyle] = useState({
        opacity,
        transition: `opacity ${duration}ms ${curve}`
    });

    useEffect(() => {
        setStyle({
            opacity,
            transition: `opacity ${duration}ms ${curve}`
        });
    }, [opacity, duration, curve]);

    return (
        <div
            style={style}
            onTransitionEnd={onEnd}
        >
            {child}
        </div>
    );
};

AnimatedOpacity.propTypes = {
    duration: PropTypes.number.isRequired,
    curve: PropTypes.oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']),
    opacity: PropTypes.number.isRequired,
    onEnd: PropTypes.func,
    child: PropTypes.node.isRequired
};

AnimatedOpacity.defaultProps = {
    curve: 'ease',
    onEnd: () => { }
};

export default AnimatedOpacity;

// USO DEL COMPONENTE ANIMATEDOPACITY
// import React, { useState } from 'react';
// import AnimatedOpacity from './AnimatedOpacity';

// const App = () => {
//     const [isVisible, setIsVisible] = useState(true);

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={() => setIsVisible(!isVisible)}>
//                 Toggle Opacity
//             </button>
//             <AnimatedOpacity
//                 duration={500}
//                 curve="ease-in-out"
//                 opacity={isVisible ? 1 : 0}
//                 onEnd={() => console.log('Animation Ended')}
//             >
//                 <div style={{ backgroundColor: 'blue', color: 'white', padding: '16px' }}>
//                     Contenido
//                 </div>
//             </AnimatedOpacity>
//         </div>
//     );
// };

// export default App;
