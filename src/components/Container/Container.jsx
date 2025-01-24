// Componente React con estilo Widget: Container

// Algunas de las propiedades que el Container de Flutter puede tener:
// - alignment
// - padding
// - color
// - decoration
// - foregroundDecoration
// - width
// - height
// - constraints
// - margin
// - transform
// - child

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Container
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.alignment - Alineación horizontal y vertical del contenido
 * @param {string} props.padding - Espaciado interno del contenedor
 * @param {string} props.color - Color de fondo del contenedor
 * @param {Object} props.decoration - Decoración del contenedor
 * @param {Object} props.foregroundDecoration - Decoración del contenido del contenedor
 * @param {string|number} props.width - Ancho del contenedor
 * @param {string|number} props.height - Alto del contenedor
 * @param {Object} props.constraints - Restricciones de tamaño del contenedor
 * @param {string} props.margin - Margen del contenedor
 * @param {string} props.transform - Transformación del contenedor
 * @param {Node} props.children - Contenido del contenedor
 */
const Container = ({
    alignment,
    padding,
    color,
    decoration,
    foregroundDecoration,
    width,
    height,
    constraints,
    margin,
    transform,
    children
}) => {
    const style = {
        display: 'flex',
        justifyContent: alignment?.horizontal || 'flex-start',
        alignItems: alignment?.vertical || 'flex-start',
        padding: padding,
        backgroundColor: color,
        ...decoration,
        ...foregroundDecoration,
        width: width,
        height: height,
        ...constraints,
        margin: margin,
        transform: transform
    };

    return <div style={style}>{children}</div>;
};

Container.propTypes = {
    alignment: PropTypes.shape({
        horizontal: PropTypes.string,
        vertical: PropTypes.string,
    }),
    padding: PropTypes.string,
    color: PropTypes.string,
    decoration: PropTypes.object,
    foregroundDecoration: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    constraints: PropTypes.object,
    margin: PropTypes.string,
    transform: PropTypes.string,
    children: PropTypes.node.isRequired
};

Container.defaultProps = {
    alignment: { horizontal: 'flex-start', vertical: 'flex-start' },
    padding: '0',
    color: 'transparent',
    decoration: {},
    foregroundDecoration: {},
    width: 'auto',
    height: 'auto',
    constraints: {},
    margin: '0',
    transform: 'none'
};

export default Container;


// USO DEL COMPONENTE CONTAINER

// import React from 'react';
// import Container from './Container';

// const App = () => {
//   return (
//     <Container
//       alignment={{ horizontal: 'center', vertical: 'center' }}
//       padding="16px"
//       color="blue"
//       width="100%"
//       height="200px"
//       margin="16px"
//       transform="rotate(10deg)"
//     >
//       <p>Hello, React!</p>
//     </Container>
//   );
// };

// export default App;
