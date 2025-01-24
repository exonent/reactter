// Componente React con estilo Widget: GestureDetector

// Algunas de las propiedades que el GestureDetector de Flutter puede tener:
// - onTap
// - onDoubleTap
// - onLongPress
// - onPanStart
// - onPanUpdate
// - onPanEnd
// - onVerticalDragStart
// - onVerticalDragUpdate
// - onVerticalDragEnd
// - onHorizontalDragStart
// - onHorizontalDragUpdate
// - onHorizontalDragEnd
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente GestureDetector
 * @param {Object} props - Propiedades del componente
 * @param {function} props.onTap - Función a ejecutar al hacer clic
 * @param {function} props.onDoubleTap - Función a ejecutar al hacer doble clic
 * @param {function} props.onLongPress - Función a ejecutar al hacer una pulsación larga
 * @param {function} props.onPanStart - Función a ejecutar al iniciar un paneo
 * @param {function} props.onPanUpdate - Función a ejecutar al actualizar un paneo
 * @param {function} props.onPanEnd - Función a ejecutar al finalizar un paneo
 * @param {function} props.onVerticalDragStart - Función a ejecutar al iniciar un arrastre vertical
 * @param {function} props.onVerticalDragUpdate - Función a ejecutar al actualizar un arrastre vertical
 * @param {function} props.onVerticalDragEnd - Función a ejecutar al finalizar un arrastre vertical
 * @param {function} props.onHorizontalDragStart - Función a ejecutar al iniciar un arrastre horizontal
 * @param {function} props.onHorizontalDragUpdate - Función a ejecutar al actualizar un arrastre horizontal
 * @param {function} props.onHorizontalDragEnd - Función a ejecutar al finalizar un arrastre horizontal
 * @param {Node} props.child - Componente hijo
 */
const GestureDetector = ({
    onTap,
    onDoubleTap,
    onLongPress,
    onPanStart,
    onPanUpdate,
    onPanEnd,
    onVerticalDragStart,
    onVerticalDragUpdate,
    onVerticalDragEnd,
    onHorizontalDragStart,
    onHorizontalDragUpdate,
    onHorizontalDragEnd,
    child
}) => {
    const handleTouchStart = (e) => {
        if (onPanStart) onPanStart(e);
        if (onVerticalDragStart) onVerticalDragStart(e);
        if (onHorizontalDragStart) onHorizontalDragStart(e);
    };

    const handleTouchMove = (e) => {
        if (onPanUpdate) onPanUpdate(e);
        if (onVerticalDragUpdate) onVerticalDragUpdate(e);
        if (onHorizontalDragUpdate) onHorizontalDragUpdate(e);
    };

    const handleTouchEnd = (e) => {
        if (onPanEnd) onPanEnd(e);
        if (onVerticalDragEnd) onVerticalDragEnd(e);
        if (onHorizontalDragEnd) onHorizontalDragEnd(e);
    };

    return (
        <div
            onClick={onTap}
            onDoubleClick={onDoubleTap}
            onContextMenu={(e) => {
                e.preventDefault();
                if (onLongPress) onLongPress(e);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
        >
            {child}
        </div>
    );
};

GestureDetector.propTypes = {
    onTap: PropTypes.func,
    onDoubleTap: PropTypes.func,
    onLongPress: PropTypes.func,
    onPanStart: PropTypes.func,
    onPanUpdate: PropTypes.func,
    onPanEnd: PropTypes.func,
    onVerticalDragStart: PropTypes.func,
    onVerticalDragUpdate: PropTypes.func,
    onVerticalDragEnd: PropTypes.func,
    onHorizontalDragStart: PropTypes.func,
    onHorizontalDragUpdate: PropTypes.func,
    onHorizontalDragEnd: PropTypes.func,
    child: PropTypes.node.isRequired
};

export default GestureDetector;

// USO DEL COMPONENTE GESTUREDETECTOR
// import React, { useState } from 'react';
// import GestureDetector from './GestureDetector';

// const App = () => {
//     const [message, setMessage] = useState('No gesture detected yet');

//     return (
//         <div style={{ padding: '16px' }}>
//             <GestureDetector
//                 onTap={() => setMessage('Tap detected')}
//                 onDoubleTap={() => setMessage('Double Tap detected')}
//                 onLongPress={() => setMessage('Long Press detected')}
//                 onPanStart={() => setMessage('Pan Start detected')}
//                 onPanUpdate={() => setMessage('Pan Update detected')}
//                 onPanEnd={() => setMessage('Pan End detected')}
//                 onVerticalDragStart={() => setMessage('Vertical Drag Start detected')}
//                 onVerticalDragUpdate={() => setMessage('Vertical Drag Update detected')}
//                 onVerticalDragEnd={() => setMessage('Vertical Drag End detected')}
//                 onHorizontalDragStart={() => setMessage('Horizontal Drag Start detected')}
//                 onHorizontalDragUpdate={() => setMessage('Horizontal Drag Update detected')}
//                 onHorizontalDragEnd={() => setMessage('Horizontal Drag End detected')}
//             >
//                 <div style={{ backgroundColor: 'lightgray', padding: '50px', textAlign: 'center', border: '1px solid black' }}>
//                     Interactúa aquí
//                 </div>
//             </GestureDetector>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default App;
