// Componente React con estilo Widget: Scaffold

// Algunas de las propiedades que el Scaffold de Flutter puede tener:
// - appBar
// - body
// - floatingActionButton
// - drawer
// - backgroundColor
// - bottomNavigationBar
// - persistentFooterButtons

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Scaffold
 * @param {Object} props - Propiedades del componente
 * @param {Node} props.appBar - Componente AppBar opcional
 * @param {Node} props.body - Contenido principal del Scaffold
 * @param {Node} props.floatingActionButton - Botón de acción flotante opcional
 * @param {Node} props.drawer - Widget Drawer opcional
 * @param {string} props.backgroundColor - Color de fondo del Scaffold
 * @param {Node} props.bottomNavigationBar - Barra de navegación inferior opcional
 * @param {Array<Node>} props.persistentFooterButtons - Botones de pie de página persistentes opcionales
 */
const Scaffold = ({
    appBar,
    body,
    floatingActionButton,
    drawer,
    backgroundColor,
    bottomNavigationBar,
    persistentFooterButtons
}) => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: backgroundColor,
    };

    const bodyStyle = {
        flex: 1,
        padding: '16px',
    };

    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '8px',
    };

    return (
        <div style={style}>
            {appBar}
            <div style={bodyStyle}>
                {drawer && <div>{drawer}</div>}
                {body}
            </div>
            {persistentFooterButtons && (
                <div style={footerStyle}>
                    {persistentFooterButtons.map((button, index) => (
                        <div key={index} style={{ margin: '0 8px' }}>
                            {button}
                        </div>
                    ))}
                </div>
            )}
            {bottomNavigationBar}
            {floatingActionButton && (
                <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
                    {floatingActionButton}
                </div>
            )}
        </div>
    );
};

Scaffold.propTypes = {
    appBar: PropTypes.node,
    body: PropTypes.node.isRequired,
    floatingActionButton: PropTypes.node,
    drawer: PropTypes.node,
    backgroundColor: PropTypes.string,
    bottomNavigationBar: PropTypes.node,
    persistentFooterButtons: PropTypes.arrayOf(PropTypes.node),
};

Scaffold.defaultProps = {
    backgroundColor: 'white',
};

export default Scaffold;

// USO DEL COMPONENTE SCAFFOLD
// import React from 'react';
// import Scaffold from './Scaffold';
// import AppBar from './AppBar';
// import Button from './Button';

// const App = () => {
//     return (
//         <Scaffold
//             appBar={<AppBar title="Mi AppBar" backgroundColor="blue" />}
//             body={<p>Contenido de la página...</p>}
//             floatingActionButton={
//                 <Button
//                     onPressed={() => alert('¡Botón de acción flotante presionado!')}
//                     color="blue"
//                     highlightColor="darkblue"
//                     splashColor="lightblue"
//                     shape={{ borderRadius: '50%' }}
//                     elevation={4}
//                     padding="16px"
//                     minWidth="56px"
//                     height="56px"
//                 >
//                     <span style={{ color: 'white' }}>+</span>
//                 </Button>
//             }
//             backgroundColor="lightgray"
//             bottomNavigationBar={<div>Barra de navegación inferior</div>}
//             persistentFooterButtons={[
//                 <button key="1">Botón 1</button>,
//                 <button key="2">Botón 2</button>
//             ]}
//         />
//     );
// };

// export default App;
