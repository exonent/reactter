// Componente React con estilo Widget: Expanded

// Algunas de las propiedades que el Expanded de Flutter puede tener:
// - flex
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Expanded
 * @param {Object} props - Propiedades del componente
 * @param {number} props.flex - Factor de flexibilidad del componente
 * @param {Node} props.child - Componente hijo
 */
const Expanded = ({
    flex,
    child
}) => {
    const style = {
        flex: flex
    };

    return (
        <div style={style}>
            {child}
        </div>
    );
};

Expanded.propTypes = {
    flex: PropTypes.number,
    child: PropTypes.node.isRequired
};

Expanded.defaultProps = {
    flex: 1
};

export default Expanded;

// USO DEL COMPONENTE EXPANDED
// import React from 'react';
// import Expanded from './Expanded';
// import Row from './Row'; // Reutilizando el componente Row que creamos anteriormente

// const App = () => {
//     return (
//         <Row
//             mainAxisAlignment="center"
//             crossAxisAlignment="center"
//             mainAxisSize="max"
//             verticalDirection="down"
//             textBaseline="alphabetic"
//             textDirection="ltr"
//         >
//             <div style={{ backgroundColor: 'lightgray', width: '50px', height: '50px' }}>Child 1</div>
//             <Expanded flex={2}>
//                 <div style={{ backgroundColor: 'gray', width: '100%', height: '50px' }}>Child 2 (Expanded)</div>
//             </Expanded>
//             <div style={{ backgroundColor: 'darkgray', width: '50px', height: '50px' }}>Child 3</div>
//         </Row>
//     );
// };

// export default App;
