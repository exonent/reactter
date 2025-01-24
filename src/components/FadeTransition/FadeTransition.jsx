// Componente React con estilo Widget: FadeTransition

// Algunas de las propiedades que el FadeTransition de Flutter puede tener:
// - duration
// - curve
// - opacity
// - child

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente FadeTransition
 * @param {Object} props - Propiedades del componente
 * @param {number} props.duration - Duración de la animación en milisegundos
 * @param {string} props.curve - Curva de la animación (ease, linear, ease-in, ease-out, ease-in-out)
 * @param {number} props.opacity - Valor de opacidad (0 a 1)
 * @param {Node} props.child - Componente hijo
 */
const FadeTransition = ({
    duration,
    curve,
    opacity,
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
        <div style={style}>
            {child}
        </div>
    );
};

FadeTransition.propTypes = {
    duration: PropTypes.number.isRequired,
    curve: PropTypes.oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']),
    opacity: PropTypes.number.isRequired,
    child: PropTypes.node.isRequired
};

FadeTransition.defaultProps = {
    curve: 'ease'
};

export default FadeTransition;

// USO DEL COMPONENTE FADETRANSITION
// import React, { useState } from 'react';
// import FadeTransition from './FadeTransition';

// const App = () => {
//     const [isVisible, setIsVisible] = useState(true);

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={() => setIsVisible(!isVisible)}>
//                 Toggle Fade
//             </button>
//             <FadeTransition
//                 duration={500}
//                 curve="ease-in-out"
//                 opacity={isVisible ? 1 : 0}
//             >
//                 <div style={{ backgroundColor: 'blue', color: 'white', padding: '16px' }}>
//                     Contenido
//                 </div>
//             </FadeTransition>
//         </div>
//     );
// };

// export default App;
