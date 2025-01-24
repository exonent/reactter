// Componente React con estilo Widget: PhysicalModel

// Algunas de las propiedades que el PhysicalModel de Flutter puede tener:
// - color
// - shadowColor
// - elevation
// - shape
// - borderRadius
// - clipBehavior
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente PhysicalModel
 * @param {Object} props - Propiedades del componente
 * @param {string} props.color - Color del modelo físico
 * @param {string} props.shadowColor - Color de la sombra
 * @param {number} props.elevation - Elevación del modelo físico
 * @param {string} props.shape - Forma del modelo físico (box, circle)
 * @param {string} props.borderRadius - Radio del borde (para forma de caja)
 * @param {string} props.clipBehavior - Comportamiento del recorte (clip, unclip, etc.)
 * @param {Node} props.child - Componente hijo
 */
const PhysicalModel = ({
    color,
    shadowColor,
    elevation,
    shape,
    borderRadius,
    clipBehavior,
    child
}) => {
    const isCircle = shape === 'circle';

    const style = {
        backgroundColor: color,
        boxShadow: `${elevation}px ${elevation}px ${elevation * 2}px ${shadowColor}`,
        borderRadius: isCircle ? '50%' : borderRadius,
        overflow: clipBehavior === 'clip' ? 'hidden' : 'visible',
        width: isCircle ? '100px' : 'auto', // Establecer un tamaño fijo para el ejemplo de círculo
        height: isCircle ? '100px' : 'auto'
    };

    return (
        <div style={style}>
            {child}
        </div>
    );
};

PhysicalModel.propTypes = {
    color: PropTypes.string.isRequired,
    shadowColor: PropTypes.string,
    elevation: PropTypes.number,
    shape: PropTypes.oneOf(['box', 'circle']),
    borderRadius: PropTypes.string,
    clipBehavior: PropTypes.oneOf(['clip', 'unclip']),
    child: PropTypes.node.isRequired
};

PhysicalModel.defaultProps = {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 2,
    shape: 'box',
    borderRadius: '4px',
    clipBehavior: 'clip'
};

export default PhysicalModel;

// USO DEL COMPONENTE PHYSICALMODEL
// import React from 'react';
// import PhysicalModel from './PhysicalModel';

// const App = () => {
//     return (
//         <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
//             <PhysicalModel
//                 color="lightblue"
//                 shadowColor="rgba(0, 0, 0, 0.5)"
//                 elevation={4}
//                 shape="box"
//                 borderRadius="8px"
//                 clipBehavior="clip"
//             >
//                 <div style={{ backgroundColor: 'white', color: 'blue', padding: '16px', textAlign: 'center' }}>
//                     Caja
//                 </div>
//             </PhysicalModel>
//             <PhysicalModel
//                 color="lightcoral"
//                 shadowColor="rgba(0, 0, 0, 0.5)"
//                 elevation={4}
//                 shape="circle"
//                 clipBehavior="clip"
//             >
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
//                     Círculo
//                 </div>
//             </PhysicalModel>
//         </div>
//     );
// };

// export default App;
