// Componente React con estilo Widget: DecoratedBox

// Algunas de las propiedades que el DecoratedBox de Flutter puede tener:
// - decoration
// - position
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente DecoratedBox
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.decoration - Decoración del contenedor
 * @param {string} props.position - Posición del contenedor (background, foreground)
 * @param {Node} props.child - Componente hijo
 */
const DecoratedBox = ({
    decoration,
    position,
    child
}) => {
    const style = {
        position: 'relative',
        ...decoration
    };

    return (
        <div style={style}>
            {position === 'background' && child}
            {position === 'foreground' && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    {child}
                </div>
            )}
        </div>
    );
};

DecoratedBox.propTypes = {
    decoration: PropTypes.object.isRequired,
    position: PropTypes.oneOf(['background', 'foreground']),
    child: PropTypes.node.isRequired
};

DecoratedBox.defaultProps = {
    position: 'foreground'
};

export default DecoratedBox;

// USO DEL COMPONENTE DECORATEDBOX
// import React from 'react';
// import DecoratedBox from './DecoratedBox';

// const App = () => {
//     return (
//         <div style={{ width: '200px', height: '200px', margin: '16px' }}>
//             <DecoratedBox
//                 decoration={{
//                     backgroundColor: 'lightblue',
//                     border: '2px solid blue',
//                     borderRadius: '8px',
//                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
//                     padding: '16px'
//                 }}
//                 position="foreground"
//             >
//                 <div style={{ backgroundColor: 'white', color: 'blue', padding: '8px', textAlign: 'center' }}>
//                     Contenido Decorado
//                 </div>
//             </DecoratedBox>
//         </div>
//     );
// };

// export default App;
