// Componente React con estilo Widget: ModalBottomSheet

// Algunas de las propiedades que el ModalBottomSheet de Flutter puede tener:
// - isVisible
// - onClose
// - children
// - height

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente ModalBottomSheet
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.isVisible - Si el ModalBottomSheet está visible
 * @param {function} props.onClose - Función a ejecutar cuando se cierra el ModalBottomSheet
 * @param {Node} props.children - Contenido del ModalBottomSheet
 * @param {string|number} props.height - Altura del ModalBottomSheet
 */
const ModalBottomSheet = ({
    isVisible,
    onClose,
    children,
    height
}) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isVisible) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isVisible, onClose]);

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
                alignItems: 'flex-end'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    width: '100%',
                    maxHeight: height,
                    backgroundColor: 'white',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.2)',
                    padding: '16px',
                    overflowY: 'auto'
                }}
                onClick={(e) => e.stopPropagation()} // Evita cerrar el ModalBottomSheet al hacer clic dentro del contenido
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '24px'
                        }}
                    >
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

ModalBottomSheet.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ModalBottomSheet.defaultProps = {
    height: '50%'
};

export default ModalBottomSheet;

// USO DEL COMPONENTE MODALBOTTOMSHEET
// import React, { useState } from 'react';
// import ModalBottomSheet from './ModalBottomSheet';

// const App = () => {
//     const [isModalBottomSheetVisible, setModalBottomSheetVisible] = useState(false);

//     const showModalBottomSheet = () => {
//         setModalBottomSheetVisible(true);
//     };

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={showModalBottomSheet}>
//                 Mostrar ModalBottomSheet
//             </button>
//             <ModalBottomSheet
//                 isVisible={isModalBottomSheetVisible}
//                 onClose={() => setModalBottomSheetVisible(false)}
//                 height="300px"
//             >
//                 <div style={{ padding: '16px' }}>
//                     <h2>Contenido del ModalBottomSheet</h2>
//                     <p>Aquí puedes poner cualquier contenido que desees mostrar en el ModalBottomSheet.</p>
//                 </div>
//             </ModalBottomSheet>
//         </div>
//     );
// };

// export default App;
