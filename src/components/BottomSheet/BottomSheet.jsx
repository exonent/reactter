// Componente React con estilo Widget: BottomSheet

// Algunas de las propiedades que el BottomSheet de Flutter puede tener:
// - isVisible
// - onClose
// - children
// - height

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente BottomSheet
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.isVisible - Si el BottomSheet está visible
 * @param {function} props.onClose - Función a ejecutar cuando se cierra el BottomSheet
 * @param {Node} props.children - Contenido del BottomSheet
 * @param {string|number} props.height - Altura del BottomSheet
 */
const BottomSheet = ({
    isVisible,
    onClose,
    children,
    height
}) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: height,
                backgroundColor: 'white',
                boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.2)',
                padding: '16px',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                zIndex: 1000,
                overflowY: 'auto'
            }}
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
    );
};

BottomSheet.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BottomSheet.defaultProps = {
    height: '50%'
};

export default BottomSheet;

// USO DEL COMPONENTE BOTTOMSHEET
// import React, { useState } from 'react';
// import BottomSheet from './BottomSheet';

// const App = () => {
//     const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

//     const showBottomSheet = () => {
//         setBottomSheetVisible(true);
//     };

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={showBottomSheet}>
//                 Mostrar BottomSheet
//             </button>
//             <BottomSheet
//                 isVisible={isBottomSheetVisible}
//                 onClose={() => setBottomSheetVisible(false)}
//                 height="300px"
//             >
//                 <div style={{ padding: '16px' }}>
//                     <h2>Contenido del BottomSheet</h2>
//                     <p>Aquí puedes poner cualquier contenido que desees mostrar en el BottomSheet.</p>
//                 </div>
//             </BottomSheet>
//         </div>
//     );
// };

// export default App;