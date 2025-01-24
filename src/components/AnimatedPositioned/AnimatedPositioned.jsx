// Componente React con estilo Widget: AnimatedPositioned

// Algunas de las propiedades que el AnimatedPositioned de Flutter puede tener:
// - duration
// - curve
// - left
// - right
// - top
// - bottom
// - width
// - height
// - onEnd
// - child

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente AnimatedPositioned
 * @param {Object} props - Propiedades del componente
 * @param {number} props.duration - Duración de la animación en milisegundos
 * @param {string} props.curve - Curva de la animación (ease, linear, ease-in, ease-out, ease-in-out)
 * @param {string|number} props.left - Posición izquierda
 * @param {string|number} props.right - Posición derecha
 * @param {string|number} props.top - Posición superior
 * @param {string|number} props.bottom - Posición inferior
 * @param {string|number} props.width - Ancho del componente
 * @param {string|number} props.height - Alto del componente
 * @param {function} props.onEnd - Función a ejecutar al finalizar la animación
 * @param {Node} props.child - Componente hijo
 */
const AnimatedPositioned = ({
    duration,
    curve,
    left,
    right,
    top,
    bottom,
    width,
    height,
    onEnd,
    child
}) => {
    const [style, setStyle] = useState({
        position: 'absolute',
        left,
        right,
        top,
        bottom,
        width,
        height,
        transition: `all ${duration}ms ${curve}`
    });

    useEffect(() => {
        setStyle({
            position: 'absolute',
            left,
            right,
            top,
            bottom,
            width,
            height,
            transition: `all ${duration}ms ${curve}`
        });
    }, [left, right, top, bottom, width, height, duration, curve]);

    return (
        <div
            style={style}
            onTransitionEnd={onEnd}
        >
            {child}
        </div>
    );
};

AnimatedPositioned.propTypes = {
    duration: PropTypes.number.isRequired,
    curve: PropTypes.oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onEnd: PropTypes.func,
    child: PropTypes.node.isRequired
};

AnimatedPositioned.defaultProps = {
    curve: 'ease',
    left: 'auto',
    right: 'auto',
    top: 'auto',
    bottom: 'auto',
    width: 'auto',
    height: 'auto',
    onEnd: () => { }
};

export default AnimatedPositioned;

// USO DEL COMPONENTE ANIMATEDPOSITIONED
// import React, { useState } from 'react';
// import AnimatedPositioned from './AnimatedPositioned';

// const App = () => {
//     const [isMoved, setIsMoved] = useState(false);

//     return (
//         <div style={{ position: 'relative', width: '300px', height: '300px', border: '1px solid black', margin: '16px' }}>
//             <button onClick={() => setIsMoved(!isMoved)} style={{ marginBottom: '16px' }}>
//                 Toggle Position
//             </button>
//             <AnimatedPositioned
//                 duration={500}
//                 curve="ease-in-out"
//                 left={isMoved ? '150px' : '0'}
//                 top={isMoved ? '150px' : '0'}
//                 width="50px"
//                 height="50px"
//                 color="blue"
//                 onEnd={() => console.log('Animation Ended')}
//             >
//                 <div style={{ backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
//                     Box
//                 </div>
//             </AnimatedPositioned>
//         </div>
//     );
// };

// export default App;
