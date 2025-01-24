// Componente React con estilo Widget: SimpleDialog

// Algunas de las propiedades que el SimpleDialog de Flutter puede tener:
// - title
// - children
// - onClose

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente SimpleDialog
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título del diálogo
 * @param {Node} props.children - Contenido del diálogo
 * @param {function} props.onClose - Función a ejecutar cuando se cierra el diálogo
 */
const SimpleDialog = ({
    title,
    children,
    onClose
}) => {
    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 1000
        }}>
            <h2>{title}</h2>
            <div>{children}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '16px' }}>
                <button
                    onClick={onClose}
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

SimpleDialog.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
};

export default SimpleDialog;

// USO DEL COMPONENTE SIMPLEDIALOG

// import React, { useState } from 'react';
// import SimpleDialog from './SimpleDialog';

// const App = () => {
//     const [isDialogVisible, setDialogVisible] = useState(false);

//     const showDialog = () => {
//         setDialogVisible(true);
//     };

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={showDialog}>
//                 Mostrar SimpleDialog
//             </button>
//             {isDialogVisible && (
//                 <SimpleDialog
//                     title="Simple Dialog"
//                     onClose={() => setDialogVisible(false)}
//                 >
//                     <p>Este es un diálogo simple con contenido personalizado.</p>
//                 </SimpleDialog>
//             )}
//         </div>
//     );
// };

// export default App;
