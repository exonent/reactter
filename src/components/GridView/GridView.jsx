// Componente React con estilo Widget: GridView

// Algunas de las propiedades que el GridView de Flutter puede tener:
// - children
// - scrollDirection
// - reverse
// - shrinkWrap
// - padding
// - crossAxisCount
// - mainAxisSpacing
// - crossAxisSpacing
// - childAspectRatio

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente GridView
 * @param {Object} props - Propiedades del componente
 * @param {Array<Node>} props.children - Lista de elementos hijos
 * @param {string} props.scrollDirection - Dirección del scroll (vertical, horizontal)
 * @param {boolean} props.reverse - Si el scroll debe estar invertido
 * @param {boolean} props.shrinkWrap - Si el GridView debe ajustarse a sus hijos
 * @param {string} props.padding - Padding alrededor del GridView
 * @param {number} props.crossAxisCount - Número de elementos en el eje transversal
 * @param {number} props.mainAxisSpacing - Espaciado entre elementos en el eje principal
 * @param {number} props.crossAxisSpacing - Espaciado entre elementos en el eje transversal
 * @param {number} props.childAspectRatio - Proporción de aspecto de los elementos hijos
 */
const GridView = ({
    children,
    scrollDirection,
    reverse,
    shrinkWrap,
    padding,
    crossAxisCount,
    mainAxisSpacing,
    crossAxisSpacing,
    childAspectRatio
}) => {
    const style = {
        display: 'grid',
        gridTemplateColumns: `repeat(${crossAxisCount}, 1fr)`,
        gridGap: `${mainAxisSpacing}px ${crossAxisSpacing}px`,
        padding: padding,
        overflowY: scrollDirection === 'vertical' ? 'auto' : 'hidden',
        overflowX: scrollDirection === 'horizontal' ? 'auto' : 'hidden',
        ...(shrinkWrap && { height: 'auto' }),
    };

    if (reverse) {
        style.gridAutoFlow = 'dense';
    }

    if (childAspectRatio) {
        style.gridAutoRows = `calc((100vw / ${crossAxisCount} - ${mainAxisSpacing}px) / ${childAspectRatio})`;
    }

    return (
        <div style={style}>
            {children}
        </div>
    );
};

GridView.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    scrollDirection: PropTypes.oneOf(['vertical', 'horizontal']),
    reverse: PropTypes.bool,
    shrinkWrap: PropTypes.bool,
    padding: PropTypes.string,
    crossAxisCount: PropTypes.number.isRequired,
    mainAxisSpacing: PropTypes.number,
    crossAxisSpacing: PropTypes.number,
    childAspectRatio: PropTypes.number
};

GridView.defaultProps = {
    scrollDirection: 'vertical',
    reverse: false,
    shrinkWrap: false,
    padding: '0',
    mainAxisSpacing: 0,
    crossAxisSpacing: 0,
    childAspectRatio: 1
};

export default GridView;

// USO DEL COMPONENTE GRIDVIEW
// import React from 'react';
// import GridView from './GridView';

// const App = () => {
//     return (
//         <GridView
//             crossAxisCount={3}
//             mainAxisSpacing={8}
//             crossAxisSpacing={8}
//             padding="16px"
//             childAspectRatio={1}
//         >
//             <div style={{ backgroundColor: 'lightgray', height: '100px' }}>Item 1</div>
//             <div style={{ backgroundColor: 'gray', height: '100px' }}>Item 2</div>
//             <div style={{ backgroundColor: 'darkgray', height: '100px' }}>Item 3</div>
//             <div style={{ backgroundColor: 'lightgray', height: '100px' }}>Item 4</div>
//             <div style={{ backgroundColor: 'gray', height: '100px' }}>Item 5</div>
//             <div style={{ backgroundColor: 'darkgray', height: '100px' }}>Item 6</div>
//         </GridView>
//     );
// };

// export default App;
