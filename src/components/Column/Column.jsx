// Componente React con estilo Widget: Column

// Algunas de las propiedades que el Column de Flutter puede tener:
// - children
// - mainAxisAlignment
// - crossAxisAlignment
// - mainAxisSize
// - verticalDirection
// - textBaseline
// - textDirection

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Column
 * @param {Object} props - Propiedades del componente
 * @param {Array<Node>} props.children - Lista de elementos hijos
 * @param {string} props.mainAxisAlignment - Alineación principal de los hijos (start, center, end, spaceBetween, spaceAround, spaceEvenly)
 * @param {string} props.crossAxisAlignment - Alineación cruzada de los hijos (start, center, end, stretch, baseline)
 * @param {string} props.mainAxisSize - Tamaño principal del eje (max, min)
 * @param {string} props.verticalDirection - Dirección vertical de los hijos (up, down)
 * @param {string} props.textBaseline - Línea base del texto (alphabetic, ideographic)
 * @param {string} props.textDirection - Dirección del texto (ltr, rtl)
 */
const Column = ({
    children,
    mainAxisAlignment,
    crossAxisAlignment,
    mainAxisSize,
    verticalDirection,
    textBaseline,
    textDirection
}) => {
    const mainAxisStyles = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        spaceBetween: 'space-between',
        spaceAround: 'space-around',
        spaceEvenly: 'space-evenly'
    };

    const crossAxisStyles = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        stretch: 'stretch',
        baseline: 'baseline'
    };

    const style = {
        display: 'flex',
        flexDirection: verticalDirection === 'up' ? 'column-reverse' : 'column',
        justifyContent: mainAxisStyles[mainAxisAlignment],
        alignItems: crossAxisStyles[crossAxisAlignment],
        flexGrow: mainAxisSize === 'min' ? 0 : 1,
        textAlign: textDirection,
        ...(textBaseline && { textBaseline: textBaseline })
    };

    return <div style={style}>{children}</div>;
};

Column.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    mainAxisAlignment: PropTypes.oneOf(['start', 'center', 'end', 'spaceBetween', 'spaceAround', 'spaceEvenly']),
    crossAxisAlignment: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
    mainAxisSize: PropTypes.oneOf(['max', 'min']),
    verticalDirection: PropTypes.oneOf(['up', 'down']),
    textBaseline: PropTypes.oneOf(['alphabetic', 'ideographic']),
    textDirection: PropTypes.oneOf(['ltr', 'rtl'])
};

Column.defaultProps = {
    mainAxisAlignment: 'start',
    crossAxisAlignment: 'start',
    mainAxisSize: 'max',
    verticalDirection: 'down',
    textBaseline: 'alphabetic',
    textDirection: 'ltr'
};

export default Column;

// USO DEL COMPONENTE COLUMN
// import React from 'react';
// import Column from './Column';

// const App = () => {
//     return (
//         <Column
//             mainAxisAlignment="center"
//             crossAxisAlignment="center"
//             mainAxisSize="max"
//             verticalDirection="down"
//             textBaseline="alphabetic"
//             textDirection="ltr"
//         >
//             <div style={{ padding: '8px', backgroundColor: 'lightgray' }}>Child 1</div>
//             <div style={{ padding: '8px', backgroundColor: 'gray' }}>Child 2</div>
//             <div style={{ padding: '8px', backgroundColor: 'darkgray' }}>Child 3</div>
//         </Column>
//     );
// };

// export default App;
