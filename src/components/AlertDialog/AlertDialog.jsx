// Componente React con estilo Widget: AlertDialog

// Algunas de las propiedades que el AlertDialog de Flutter puede tener:
// - title
// - content
// - actions
// - onClose

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente AlertDialog
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título del diálogo
 * @param {string} props.content - Contenido del diálogo
 * @param {Array} props.actions - Lista de acciones (botones) del diálogo
 * @param {function} props.onClose - Función a ejecutar cuando se cierra el diálogo
 */
const AlertDialog = ({
    title,
    content,
    actions,
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
            <p>{content}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                {actions.map((action, index) => (
                    <button
                        key={index}
                        onClick={action.onClick}
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {action.label}
                    </button>
                ))}
            </div>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                &times;
            </button>
        </div>
    );
};

AlertDialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired
};

export default AlertDialog;

// USO DEL COMPONENTE ALERTDIALOG
// import React, { useState } from 'react';
// import AlertDialog from './AlertDialog';

// const App = () => {
//     const [isDialogVisible, setDialogVisible] = useState(false);

//     const showAlertDialog = () => {
//         setDialogVisible(true);
//     };

//     const handleActionClick = () => {
//         alert('Acción del AlertDialog ejecutada!');
//     };

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={showAlertDialog}>
//                 Mostrar AlertDialog
//             </button>
//             {isDialogVisible && (
//                 <AlertDialog
//                     title="¡Alerta!"
//                     content="Este es un mensaje de alerta en el diálogo."
//                     actions={[
//                         { label: 'Aceptar', onClick: handleActionClick },
//                         { label: 'Cancelar', onClick: () => setDialogVisible(false) }
//                     ]}
//                     onClose={() => setDialogVisible(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default App;