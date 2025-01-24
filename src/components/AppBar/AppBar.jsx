// Componente React con estilo Widget: AppBar

// Algunas de las propiedades que el AppBar de Flutter puede tener:
// - title
// - backgroundColor
// - leading
// - actions
// - elevation
// - centerTitle
// - toolbarHeight

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente AppBar
 * @param {Object} props - Propiedades del componente
 * @param {string|Node} props.title - Título o contenido del AppBar
 * @param {string} props.backgroundColor - Color de fondo del AppBar
 * @param {Node} props.leading - Widget opcional a la izquierda del título
 * @param {Array<Node>} props.actions - Lista de widgets opcionales a la derecha del título
 * @param {number} props.elevation - Elevación del AppBar
 * @param {boolean} props.centerTitle - Si el título debe estar centrado
 * @param {string|number} props.toolbarHeight - Altura de la barra de herramientas
 */
const AppBar = ({
    title,
    backgroundColor,
    leading,
    actions,
    elevation,
    centerTitle,
    toolbarHeight
}) => {
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: centerTitle ? 'center' : 'space-between',
        backgroundColor: backgroundColor,
        height: toolbarHeight,
        boxShadow: elevation ? `0px ${elevation}px ${elevation * 2}px rgba(0, 0, 0, 0.3)` : 'none',
        padding: '0 16px',
    };

    return (
        <div style={style}>
            {leading && <div>{leading}</div>}
            <div>{title}</div>
            <div style={{ display: 'flex', gap: '8px' }}>
                {actions && actions.map((action, index) => <div key={index}>{action}</div>)}
            </div>
        </div>
    );
};

AppBar.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    backgroundColor: PropTypes.string,
    leading: PropTypes.node,
    actions: PropTypes.arrayOf(PropTypes.node),
    elevation: PropTypes.number,
    centerTitle: PropTypes.bool,
    toolbarHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AppBar.defaultProps = {
    backgroundColor: 'blue',
    elevation: 0,
    centerTitle: false,
    toolbarHeight: '56px'
};

export default AppBar;

// USO DEL COMPONENTE APPBAR
// import React from 'react';
// import AppBar from './AppBar';

// const App = () => {
//     return (
//         <div>
//             <AppBar
//                 title="Mi AppBar"
//                 backgroundColor="blue"
//                 leading={<button>Menu</button>}
//                 actions={[
//                     <button key="search">Buscar</button>,
//                     <button key="profile">Perfil</button>
//                 ]}
//                 elevation={2}
//                 centerTitle
//                 toolbarHeight="64px"
//             />
//             <div style={{ padding: '16px' }}>
//                 <p>Contenido de la página...</p>
//             </div>
//         </div>
//     );
// };

// export default App;
