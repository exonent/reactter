// Componente React con estilo Widget: Overlay

// Algunas de las propiedades que el Overlay de Flutter puede tener:
// - child
// - isVisible
// - onOverlayClick

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Overlay
 * @param {Object} props - Propiedades del componente
 * @param {Node} props.child - Componente hijo (contenido del overlay)
 * @param {boolean} props.isVisible - Si el overlay está visible
 * @param {function} props.onOverlayClick - Función a ejecutar al hacer clic en el overlay
 */
const Overlay = ({
    child,
    isVisible,
    onOverlayClick
}) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onClick={onOverlayClick}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)'
                }}
                onClick={(e) => e.stopPropagation()} // Evita cerrar el overlay al hacer clic dentro del contenido
            >
                {child}
            </div>
        </div>
    );
};

Overlay.propTypes = {
    child: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onOverlayClick: PropTypes.func
};

export default Overlay;

// USO DEL COMPONENTE OVERLAY
// import React, { useState } from 'react';
// import Overlay from './Overlay';

// const App = () => {
//     const [isOverlayVisible, setOverlayVisible] = useState(false);

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={() => setOverlayVisible(true)}>
//                 Mostrar Overlay
//             </button>
//             <Overlay
//                 isVisible={isOverlayVisible}
//                 onOverlayClick={() => setOverlayVisible(false)}
//             >
//                 <div style={{ textAlign: 'center' }}>
//                     <h2>¡Hola desde el Overlay!</h2>
//                     <p>Haz clic fuera de esta caja para cerrar.</p>
//                     <button onClick={() => setOverlayVisible(false)}>
//                         Cerrar
//                     </button>
//                 </div>
//             </Overlay>
//         </div>
//     );
// };

// export default App;
