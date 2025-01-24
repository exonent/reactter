// Algunas de las propiedades que el Image de Flutter puede tener:
// - src
// - width
// - height
// - color
// - colorBlendMode
// - fit
// - alignment
// - repeat
// - centerSlice
// - matchTextDirection
// - gaplessPlayback
// - filterQuality
// - alt

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Image
 * @param {Object} props - Propiedades del componente
 * @param {string} props.src - URL de la imagen
 * @param {string|number} props.width - Ancho de la imagen
 * @param {string|number} props.height - Alto de la imagen
 * @param {string} props.color - Color de fondo de la imagen
 * @param {string} props.colorBlendMode - Modo de mezcla de color
 * @param {string} props.fit - Cómo encajar la imagen (contain, cover, fill, none, scale-down)
 * @param {string} props.alignment - Alineación de la imagen
 * @param {string} props.repeat - Repetición de la imagen (repeat, repeat-x, repeat-y, no-repeat)
 * @param {Object} props.centerSlice - Área de recorte para centrar la imagen
 * @param {boolean} props.matchTextDirection - Si debe coincidir con la dirección del texto
 * @param {boolean} props.gaplessPlayback - Si se debe reproducir sin interrupciones
 * @param {string} props.filterQuality - Calidad del filtro (low, medium, high)
 * @param {string} props.alt - Texto alternativo para la imagen
 */
const Image = ({
    src,
    width,
    height,
    color,
    colorBlendMode,
    fit,
    alignment,
    repeat,
    centerSlice,
    matchTextDirection,
    gaplessPlayback,
    filterQuality,
    alt
}) => {
    const style = {
        width: width,
        height: height,
        objectFit: fit,
        objectPosition: alignment,
        backgroundColor: color,
        backgroundBlendMode: colorBlendMode,
    };

    // Añadir propiedades específicas
    if (centerSlice) {
        style.clip = `rect(${centerSlice.top}px, ${centerSlice.right}px, ${centerSlice.bottom}px, ${centerSlice.left}px)`;
    }

    if (repeat) {
        style.backgroundRepeat = repeat === 'repeat' ? 'repeat' : repeat === 'repeat-x' ? 'repeat-x' : 'repeat-y';
    }

    return <img src={src} alt={alt} style={style} />;
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    colorBlendMode: PropTypes.string,
    fit: PropTypes.oneOf(['contain', 'cover', 'fill', 'none', 'scale-down']),
    alignment: PropTypes.string,
    repeat: PropTypes.oneOf(['repeat', 'repeat-x', 'repeat-y', 'no-repeat']),
    centerSlice: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
    }),
    matchTextDirection: PropTypes.bool,
    gaplessPlayback: PropTypes.bool,
    filterQuality: PropTypes.oneOf(['low', 'medium', 'high']),
    alt: PropTypes.string
};

Image.defaultProps = {
    width: 'auto',
    height: 'auto',
    color: 'transparent',
    fit: 'fill',
    alignment: 'center',
    repeat: 'no-repeat',
    matchTextDirection: false,
    gaplessPlayback: false,
    filterQuality: 'medium',
    alt: 'Image'
};

export default Image;

// USO DEL COMPONENTE IMAGE
// import React from 'react';
// import Image from './Image';

// const App = () => {
//     return (
//         <div style={{ padding: '16px' }}>
//             <Image
//                 src="https://via.placeholder.com/150"
//                 width="150px"
//                 height="150px"
//                 color="red"
//                 fit="cover"
//                 alignment="center"
//                 repeat="no-repeat"
//                 alt="Example Image"
//             />
//         </div>
//     );
// };

// export default App;
