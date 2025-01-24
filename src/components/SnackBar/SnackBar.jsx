// Componente React con estilo Widget: SnackBar

// Algunas de las propiedades que el SnackBar de Flutter puede tener:
// - message
// - duration
// - action
// - onClose

import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente SnackBar
 * @param {Object} props - Propiedades del componente
 * @param {string} props.message - Mensaje a mostrar en el SnackBar
 * @param {number} props.duration - Duración en milisegundos para la visibilidad del SnackBar
 * @param {Object} props.action - Objeto con las propiedades de la acción del SnackBar
 * @param {string} props.action.label - Etiqueta del botón de acción
 * @param {function} props.action.onClick - Función a ejecutar cuando se hace clic en la acción
 * @param {function} props.onClose - Función a ejecutar cuando el SnackBar se cierra
 */
const SnackBar = ({
    message,
    duration,
    action,
    onClose
}) => {
    const [isVisible, setIsVisible] = useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onClose) onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'black',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)'
        }}>
            <span style={{ marginRight: '16px' }}>{message}</span>
            {action && (
                <button
                    onClick={action.onClick}
                    style={{
                        backgroundColor: 'white',
                        color: 'black',
                        border: 'none',
                        padding: '8px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {action.label}
                </button>
            )}
        </div>
    );
};

SnackBar.propTypes = {
    message: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    action: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }),
    onClose: PropTypes.func
};

export default SnackBar;

// USO DEL COMPONENTE SNACKBAR
// import React, { useState } from 'react';
// import SnackBar from './SnackBar';

// const App = () => {
//     const [isSnackBarVisible, setSnackBarVisible] = useState(false);

//     const showSnackBar = () => {
//         setSnackBarVisible(true);
//     };

//     const handleActionClick = () => {
//         alert('Acción del SnackBar ejecutada!');
//     };

//     return (
//         <div style={{ padding: '16px' }}>
//             <button onClick={showSnackBar}>
//                 Mostrar SnackBar
//             </button>
//             {isSnackBarVisible && (
//                 <SnackBar
//                     message="Hola desde el SnackBar!"
//                     duration={3000}
//                     action={{ label: 'Acción', onClick: handleActionClick }}
//                     onClose={() => setSnackBarVisible(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default App;
