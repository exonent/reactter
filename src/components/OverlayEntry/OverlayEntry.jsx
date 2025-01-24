// Componente React con estilo Widget: OverlayEntry

// Algunas de las propiedades que el OverlayEntry de Flutter puede tener:
// - child
// - isVisible
// - onOverlayClick

import React, { useEffect, createPortal } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente OverlayEntry
 * @param {Object} props - Propiedades del componente
 * @param {Node} props.child - Componente hijo (contenido del overlay)
 * @param {boolean} props.isVisible - Si el overlay está visible
 * @param {function} props.onOverlayClick - Función a ejecutar al hacer clic en el overlay
 */
const OverlayEntry = ({
    child,
    isVisible,
    onOverlayClick
}) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isVisible) {
                onOverlayClick();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isVisible, onOverlayClick]);

    if (!isVisible) {
        return null;
    }

    return createPortal(
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
        </div>,
        document.body
    );
};

OverlayEntry.propTypes = {
    child: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onOverlayClick: PropTypes.func
};

export default OverlayEntry;

// USO DEL COMPONENTE OVERLAYENTRY
// import React, { useState } from 'react';
// import OverlayEntry from './OverlayEntry';

// const App = () => {
//     const [isOverlayVisible, setOverlayVisible] = useState(false);

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={() => setOverlayVisible(true)}>
//                 Mostrar OverlayEntry
//             </button>
//             <OverlayEntry
//                 isVisible={isOverlayVisible}
//                 onOverlayClick={() => setOverlayVisible(false)}
//             >
//                 <div style={{ textAlign: 'center' }}>
//                     <h2>¡Hola desde el OverlayEntry!</h2>
//                     <p>Haz clic fuera de esta caja o presiona Escape para cerrar.</p>
//                     <button onClick={() => setOverlayVisible(false)}>
//                         Cerrar
//                     </button>
//                 </div>
//             </OverlayEntry>
//         </div>
//     );
// };

// export default App;
