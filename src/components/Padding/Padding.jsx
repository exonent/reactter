// Componente React con estilo Widget: Padding

// Algunas de las propiedades que el Padding de Flutter puede tener:
// - padding
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Padding
 * @param {Object} props - Propiedades del componente
 * @param {string} props.padding - Padding alrededor del componente hijo
 * @param {Node} props.child - Componente hijo
 */
const Padding = ({
    padding,
    child
}) => {
    const style = {
        padding
    };

    return (
        <div style={style}>
            {child}
        </div>
    );
};

Padding.propTypes = {
    padding: PropTypes.string.isRequired,
    child: PropTypes.node.isRequired
};

export default Padding;

// USO DEL COMPONENTE PADDING
// import React from 'react';
// import Padding from './Padding';

// const App = () => {
//     return (
//         <div style={{ border: '1px solid black', margin: '16px' }}>
//             <Padding padding="16px">
//                 <div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>
//                     Contenido con Padding
//                 </div>
//             </Padding>
//         </div>
//     );
// };

// export default App;
