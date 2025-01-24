// Componente React con estilo Widget: ListView

// Algunas de las propiedades que el ListView de Flutter puede tener:
// - children
// - scrollDirection
// - reverse
// - shrinkWrap
// - padding
// - itemExtent
// - prototypeItem
// - cacheExtent

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente ListView
 * @param {Object} props - Propiedades del componente
 * @param {Array<Node>} props.children - Lista de elementos hijos
 * @param {string} props.scrollDirection - Dirección del scroll (vertical, horizontal)
 * @param {boolean} props.reverse - Si el scroll debe estar invertido
 * @param {boolean} props.shrinkWrap - Si el ListView debe ajustarse a sus hijos
 * @param {string} props.padding - Padding alrededor del ListView
 * @param {number} props.itemExtent - Extensión fija para cada hijo en el ListView
 * @param {Node} props.prototypeItem - Elemento prototipo para medir el tamaño de los hijos
 * @param {number} props.cacheExtent - Extensión de la caché para los hijos fuera de pantalla
 */
const ListView = ({
    children,
    scrollDirection,
    reverse,
    shrinkWrap,
    padding,
    itemExtent,
    prototypeItem,
    cacheExtent
}) => {
    const style = {
        display: 'flex',
        flexDirection: scrollDirection === 'horizontal' ? 'row' : 'column',
        flexWrap: shrinkWrap ? 'wrap' : 'nowrap',
        padding: padding,
        overflowY: scrollDirection === 'vertical' ? 'auto' : 'hidden',
        overflowX: scrollDirection === 'horizontal' ? 'auto' : 'hidden',
    };

    const itemStyle = itemExtent ? { flexBasis: itemExtent, flexGrow: 0 } : {};

    if (reverse) {
        style.flexDirection = scrollDirection === 'horizontal' ? 'row-reverse' : 'column-reverse';
    }

    return (
        <div style={style}>
            {React.Children.map(children, (child, index) => (
                <div key={index} style={itemStyle}>
                    {child}
                </div>
            ))}
        </div>
    );
};

ListView.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    scrollDirection: PropTypes.oneOf(['vertical', 'horizontal']),
    reverse: PropTypes.bool,
    shrinkWrap: PropTypes.bool,
    padding: PropTypes.string,
    itemExtent: PropTypes.number,
    prototypeItem: PropTypes.node,
    cacheExtent: PropTypes.number
};

ListView.defaultProps = {
    scrollDirection: 'vertical',
    reverse: false,
    shrinkWrap: false,
    padding: '0',
    itemExtent: null,
    prototypeItem: null,
    cacheExtent: null
};

export default ListView;

// USO DEL COMPONENTE LISTVIEW
// import React from 'react';
// import ListView from './ListView';

// const App = () => {
//     return (
//         <ListView
//             scrollDirection="vertical"
//             reverse={false}
//             shrinkWrap={true}
//             padding="16px"
//         >
//             <div style={{ padding: '8px', backgroundColor: 'lightgray' }}>Item 1</div>
//             <div style={{ padding: '8px', backgroundColor: 'gray' }}>Item 2</div>
//             <div style={{ padding: '8px', backgroundColor: 'darkgray' }}>Item 3</div>
//         </ListView>
//     );
// };

// export default App;
