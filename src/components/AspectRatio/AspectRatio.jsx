// Componente React con estilo Widget: AspectRatio

// Algunas de las propiedades que el AspectRatio de Flutter puede tener:
// - aspectRatio
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente AspectRatio
 * @param {Object} props - Propiedades del componente
 * @param {number} props.aspectRatio - Relación de aspecto del contenido
 * @param {Node} props.child - Componente hijo
 */
const AspectRatio = ({
    aspectRatio,
    child
}) => {
    const style = {
        position: 'relative',
        width: '100%',
        paddingBottom: `${100 / aspectRatio}%`,
        overflow: 'hidden'
    };

    const innerStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    };

    return (
        <div style={style}>
            <div style={innerStyle}>
                {child}
            </div>
        </div>
    );
};

AspectRatio.propTypes = {
    aspectRatio: PropTypes.number.isRequired,
    child: PropTypes.node.isRequired
};

export default AspectRatio;

// USO DEL COMPONENTE ASPECTRATIO
// import React from 'react';
// import AspectRatio from './AspectRatio';

// const App = () => {
//     return (
//         <div style={{ width: '300px', margin: '16px' }}>
//             <AspectRatio aspectRatio={16 / 9}>
//                 <div style={{ backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
//                     Contenido
//                 </div>
//             </AspectRatio>
//         </div>
//     );
// };

// export default App;
