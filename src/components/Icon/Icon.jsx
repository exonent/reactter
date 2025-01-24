// Componente React con estilo Widget: Icon

// Algunas de las propiedades que el Icon de Flutter puede tener:
// - name
// - size
// - color
// - semanticLabel
// - textDirection

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Icon
 * @param {Object} props - Propiedades del componente
 * @param {string} props.name - Nombre del icono (e.g., 'home', 'settings')
 * @param {string|number} props.size - Tamaño del icono
 * @param {string} props.color - Color del icono
 * @param {string} props.semanticLabel - Etiqueta semántica para accesibilidad
 * @param {string} props.textDirection - Dirección del texto (ltr, rtl)
 */
const Icon = ({
    name,
    size,
    color,
    semanticLabel,
    textDirection
}) => {
    const style = {
        fontSize: size,
        color: color,
        textAlign: textDirection
    };

    return (
        <i className={`icon-${name}`} style={style} aria-label={semanticLabel} />
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    semanticLabel: PropTypes.string,
    textDirection: PropTypes.oneOf(['ltr', 'rtl'])
};

Icon.defaultProps = {
    size: '24px',
    color: 'black',
    semanticLabel: '',
    textDirection: 'ltr'
};

export default Icon;

// USO DEL COMPONENTE ICON
// import React from 'react';
// import Icon from './Icon';

// const App = () => {
//     return (
//         <div style={{ padding: '16px' }}>
//             <Icon name="home" size="32px" color="blue" semanticLabel="Home Icon" />
//             <Icon name="settings" size="32px" color="green" semanticLabel="Settings Icon" textDirection="rtl" />
//         </div>
//     );
// };

// export default App;
