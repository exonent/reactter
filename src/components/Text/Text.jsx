// Componente React con estilo Widget: Text

// Algunas de las propiedades que el Text de Flutter puede tener:
// - data
// - style
// - textAlign
// - overflow
// - maxLines
// - softWrap
// - textDirection

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Text
 * @param {Object} props - Propiedades del componente
 * @param {string} props.data - Texto a mostrar
 * @param {Object} props.style - Estilo del texto
 * @param {string} props.textAlign - Alineación del texto
 * @param {string} props.overflow - Comportamiento del desbordamiento del texto
 * @param {number} props.maxLines - Número máximo de líneas a mostrar
 * @param {boolean} props.softWrap - Si el texto debe ajustarse suavemente
 * @param {string} props.textDirection - Dirección del texto
 * @param {Node} props.children - Contenido del texto
 */
import React from 'react';
import PropTypes from 'prop-types';

const Text = ({
    data,
    style,
    textAlign,
    overflow,
    maxLines,
    softWrap,
    textDirection,
    children
}) => {
    const defaultStyle = {
        textAlign: textAlign,
        overflow: overflow,
        display: softWrap ? 'block' : 'inline-block',
        direction: textDirection,
        ...(maxLines && {
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: maxLines,
            overflow: 'hidden'
        })
    };

    return <span style={{ ...defaultStyle, ...style }}>{data || children}</span>;
};

Text.propTypes = {
    data: PropTypes.string,
    style: PropTypes.object,
    textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'clip', 'ellipsis']),
    maxLines: PropTypes.number,
    softWrap: PropTypes.bool,
    textDirection: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
    children: PropTypes.node
};

Text.defaultProps = {
    style: {},
    textAlign: 'left',
    overflow: 'visible',
    softWrap: true,
    textDirection: 'auto'
};

export default Text;



// USO DEL COMPONENTE TEXT

// import React from 'react';
// import Text from './Text';

// const App = () => {
//     return (
//         <div style={{ padding: '16px' }}>
//             <Text
//                 data="Hello, React!"
//                 style={{ color: 'blue', fontSize: '24px' }}
//                 textAlign="center"
//                 overflow="ellipsis"
//                 maxLines={2}
//                 softWrap={false}
//                 textDirection="ltr"
//             />
//         </div>
//     );
// };

// export default App;

