// Componente React con estilo Widget: InkResponse

// Algunas de las propiedades que el InkResponse de Flutter puede tener:
// - child
// - onTap
// - onDoubleTap
// - onLongPress
// - onTapDown
// - onTapCancel
// - onHover
// - onFocusChange
// - focusColor
// - hoverColor
// - highlightColor
// - splashColor
// - radius
// - borderRadius
// - customBorder
// - enableFeedback
// - excludeFromSemantics
// - containedInkWell

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente InkResponse
 * @param {Object} props - Propiedades del componente
 * @param {Node} props.child - Componente hijo
 * @param {function} props.onTap - Función a ejecutar al hacer clic
 * @param {function} props.onDoubleTap - Función a ejecutar al hacer doble clic
 * @param {function} props.onLongPress - Función a ejecutar al hacer una pulsación larga
 * @param {function} props.onTapDown - Función a ejecutar al presionar
 * @param {function} props.onTapCancel - Función a ejecutar al cancelar el clic
 * @param {function} props.onHover - Función a ejecutar al pasar el cursor
 * @param {function} props.onFocusChange - Función a ejecutar al cambiar el enfoque
 * @param {string} props.focusColor - Color del contenedor cuando está enfocado
 * @param {string} props.hoverColor - Color del contenedor cuando se pasa el cursor
 * @param {string} props.highlightColor - Color del contenedor al hacer clic
 * @param {string} props.splashColor - Color del efecto splash
 * @param {number} props.radius - Radio del efecto splash
 * @param {string} props.borderRadius - Radio del borde del contenedor
 * @param {Object} props.customBorder - Borde personalizado del contenedor
 * @param {boolean} props.enableFeedback - Si se debe habilitar la retroalimentación
 * @param {boolean} props.excludeFromSemantics - Si se debe excluir de la semántica
 * @param {boolean} props.containedInkWell - Si se debe contener el efecto de tinta dentro del contenedor
 */
const InkResponse = ({
    child,
    onTap,
    onDoubleTap,
    onLongPress,
    onTapDown,
    onTapCancel,
    onHover,
    onFocusChange,
    focusColor,
    hoverColor,
    highlightColor,
    splashColor,
    radius,
    borderRadius,
    customBorder,
    enableFeedback,
    excludeFromSemantics,
    containedInkWell
}) => {
    const style = {
        display: 'inline-block',
        position: 'relative',
        borderRadius: borderRadius,
        ...customBorder,
        cursor: onTap || onDoubleTap || onLongPress ? 'pointer' : 'default',
        outlineColor: focusColor
    };

    const handleClick = (e) => {
        if (enableFeedback) {
            console.log('Feedback enabled');
        }
        if (onTap) {
            onTap(e);
        }
    };

    const handleDoubleClick = (e) => {
        if (onDoubleTap) {
            onDoubleTap(e);
        }
    };

    const handleLongPress = (e) => {
        if (onLongPress) {
            e.preventDefault(); // Para prevenir la aparición del menú contextual del navegador
            onLongPress(e);
        }
    };

    const handleMouseDown = (e) => {
        if (highlightColor) {
            e.target.style.backgroundColor = highlightColor;
        }
        if (onTapDown) {
            onTapDown(e);
        }
    };

    const handleMouseUp = (e) => {
        if (highlightColor) {
            e.target.style.backgroundColor = '';
        }
    };

    const handleMouseOut = (e) => {
        if (hoverColor) {
            e.target.style.backgroundColor = '';
        }
    };

    const handleMouseOver = (e) => {
        if (hoverColor) {
            e.target.style.backgroundColor = hoverColor;
        }
        if (onHover) {
            onHover(e);
        }
    };

    const handleFocusChange = (e) => {
        if (onFocusChange) {
            onFocusChange(e);
        }
    };

    return (
        <div
            style={style}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleLongPress}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onFocus={handleFocusChange}
            tabIndex={excludeFromSemantics ? -1 : 0}
        >
            {child}
            {splashColor && (
                <span
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: splashColor,
                        borderRadius: radius,
                        pointerEvents: 'none',
                        transition: 'opacity 0.3s',
                        opacity: 0
                    }}
                />
            )}
        </div>
    );
};

InkResponse.propTypes = {
    child: PropTypes.node.isRequired,
    onTap: PropTypes.func,
    onDoubleTap: PropTypes.func,
    onLongPress: PropTypes.func,
    onTapDown: PropTypes.func,
    onTapCancel: PropTypes.func,
    onHover: PropTypes.func,
    onFocusChange: PropTypes.func,
    focusColor: PropTypes.string,
    hoverColor: PropTypes.string,
    highlightColor: PropTypes.string,
    splashColor: PropTypes.string,
    radius: PropTypes.number,
    borderRadius: PropTypes.string,
    customBorder: PropTypes.object,
    enableFeedback: PropTypes.bool,
    excludeFromSemantics: PropTypes.bool,
    containedInkWell: PropTypes.bool
};

InkResponse.defaultProps = {
    focusColor: 'transparent',
    hoverColor: 'transparent',
    highlightColor: 'transparent',
    splashColor: 'transparent',
    radius: 0,
    borderRadius: '4px',
    customBorder: {},
    enableFeedback: false,
    excludeFromSemantics: false,
    containedInkWell: false
};

export default InkResponse;

// USO DEL COMPONENTE INKRESPONSE
// import React from 'react';
// import InkResponse from './InkResponse';

// const App = () => {
//     return (
//         <div style={{ padding: '16px' }}>
//             <InkResponse
//                 onTap={() => alert('InkResponse presionado!')}
//                 onHover={(e) => console.log('Cursor sobre InkResponse')}
//                 hoverColor="lightgreen"
//                 highlightColor="darkgreen"
//                 splashColor="rgba(0, 128, 0, 0.3)"
//                 radius={8}
//                 borderRadius="8px"
//                 enableFeedback
//             >
//                 <div style={{ backgroundColor: 'lightgray', padding: '16px', textAlign: 'center' }}>
//                     Contenido Clickable
//                 </div>
//             </InkResponse>
//         </div>
//     );
// };

// export default App;
