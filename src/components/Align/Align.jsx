// Componente React con estilo Widget: Align

// Algunas de las propiedades que el Align de Flutter puede tener:
// - alignment
// - widthFactor
// - heightFactor
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Align
 * @param {Object} props - Propiedades del componente
 * @param {string} props.alignment - Alineación del contenido (topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight)
 * @param {number} props.widthFactor - Factor de ancho del contenido
 * @param {number} props.heightFactor - Factor de altura del contenido
 * @param {Node} props.child - Componente hijo
 */
const Align = ({
    alignment,
    widthFactor,
    heightFactor,
    child
}) => {
    const alignmentStyles = {
        topLeft: { justifyContent: 'flex-start', alignItems: 'flex-start' },
        topCenter: { justifyContent: 'flex-start', alignItems: 'center' },
        topRight: { justifyContent: 'flex-start', alignItems: 'flex-end' },
        centerLeft: { justifyContent: 'center', alignItems: 'flex-start' },
        center: { justifyContent: 'center', alignItems: 'center' },
        centerRight: { justifyContent: 'center', alignItems: 'flex-end' },
        bottomLeft: { justifyContent: 'flex-end', alignItems: 'flex-start' },
        bottomCenter: { justifyContent: 'flex-end', alignItems: 'center' },
        bottomRight: { justifyContent: 'flex-end', alignItems: 'flex-end' }
    };

    const style = {
        display: 'flex',
        ...alignmentStyles[alignment],
        width: widthFactor ? `${widthFactor * 100}%` : 'auto',
        height: heightFactor ? `${heightFactor * 100}%` : 'auto',
    };

    return (
        <div style={style}>
            {child}
        </div>
    );
};

Align.propTypes = {
    alignment: PropTypes.oneOf(['topLeft', 'topCenter', 'topRight', 'centerLeft', 'center', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight']),
    widthFactor: PropTypes.number,
    heightFactor: PropTypes.number,
    child: PropTypes.node.isRequired
};

Align.defaultProps = {
    alignment: 'center',
    widthFactor: null,
    heightFactor: null
};

export default Align;

// USO DEL COMPONENTE ALIGN
// import React from 'react';
// import Align from './Align';

// const App = () => {
//     return (
//         <div style={{ width: '300px', height: '300px', border: '1px solid black', margin: '16px' }}>
//             <Align
//                 alignment="bottomRight"
//                 widthFactor={0.5}
//                 heightFactor={0.5}
//             >
//                 <div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>
//                     Contenido
//                 </div>
//             </Align>
//         </div>
//     );
// };

// export default App;
