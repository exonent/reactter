// Componente React con estilo Widget: PopupMenuButton

// Algunas de las propiedades que el PopupMenuButton de Flutter puede tener:
// - items
// - onSelected
// - icon
// - initialValue
// - tooltip
// - shape
// - color
// - elevation
// - padding
// - offset
// - enabled

import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente PopupMenuButton
 * @param {Object} props - Propiedades del componente
 * @param {Array<{value: any, label: string}>} props.items - Lista de elementos del menú
 * @param {function} props.onSelected - Función a ejecutar cuando se selecciona un elemento
 * @param {Node} props.icon - Icono del botón
 * @param {any} props.initialValue - Valor inicial seleccionado
 * @param {string} props.tooltip - Texto de sugerencia
 * @param {Object} props.shape - Forma del menú
 * @param {string} props.color - Color del menú
 * @param {number} props.elevation - Elevación del menú
 * @param {string} props.padding - Padding del menú
 * @param {Object} props.offset - Desplazamiento del menú
 * @param {boolean} props.enabled - Si el botón está habilitado
 */
const PopupMenuButton = ({
    items,
    onSelected,
    icon,
    initialValue,
    tooltip,
    shape,
    color,
    elevation,
    padding,
    offset,
    enabled
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(initialValue);

    const handleSelect = (itemValue) => {
        setSelectedValue(itemValue);
        setIsOpen(false);
        if (onSelected) onSelected(itemValue);
    };

    const style = {
        boxShadow: elevation ? `0px ${elevation}px ${elevation * 2}px rgba(0, 0, 0, 0.3)` : 'none',
        padding: padding,
        backgroundColor: color,
        ...shape
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                title={tooltip}
                disabled={!enabled}
                style={{ cursor: enabled ? 'pointer' : 'not-allowed' }}
            >
                {icon}
            </button>
            {isOpen && (
                <ul style={{ ...style, position: 'absolute', top: offset?.top || 0, left: offset?.left || 0, listStyleType: 'none', margin: 0, padding: '8px', zIndex: 1 }}>
                    {items.map(item => (
                        <li
                            key={item.value}
                            onClick={() => handleSelect(item.value)}
                            style={{ padding: '8px', cursor: 'pointer', backgroundColor: selectedValue === item.value ? 'lightgray' : 'white' }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

PopupMenuButton.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    onSelected: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    initialValue: PropTypes.any,
    tooltip: PropTypes.string,
    shape: PropTypes.object,
    color: PropTypes.string,
    elevation: PropTypes.number,
    padding: PropTypes.string,
    offset: PropTypes.shape({
        top: PropTypes.number,
        left: PropTypes.number
    }),
    enabled: PropTypes.bool
};

PopupMenuButton.defaultProps = {
    initialValue: null,
    tooltip: '',
    shape: {},
    color: 'white',
    elevation: 2,
    padding: '0',
    offset: { top: 0, left: 0 },
    enabled: true
};

export default PopupMenuButton;

// USO DEL COMPONENTE POPUPMENUBUTTON
// import React, { useState } from 'react';
// import PopupMenuButton from './PopupMenuButton';

// const App = () => {
//     const [selectedItem, setSelectedItem] = useState(null);

//     const items = [
//         { value: '1', label: 'Opción 1' },
//         { value: '2', label: 'Opción 2' },
//         { value: '3', label: 'Opción 3' }
//     ];

//     return (
//         <div style={{ padding: '16px' }}>
//             <PopupMenuButton
//                 items={items}
//                 onSelected={(value) => setSelectedItem(value)}
//                 icon={<span>☰</span>}
//                 initialValue={selectedItem}
//                 tooltip="Menú"
//                 color="white"
//                 elevation={2}
//                 padding="8px"
//                 offset={{ top: 30, left: 0 }}
//                 enabled
//             />
//             <p>Opción seleccionada: {selectedItem}</p>
//         </div>
//     );
// };

// export default App;
