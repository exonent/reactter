// Componente React con estilo Widget: DropdownButton

// Algunas de las propiedades que el DropdownButton de Flutter puede tener:
// - items
// - onChanged
// - value
// - hint
// - disabledHint
// - elevation
// - style
// - underline
// - icon
// - iconSize
// - isDense
// - isExpanded

import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente DropdownButton
 * @param {Object} props - Propiedades del componente
 * @param {Array<{value: any, label: string}>} props.items - Lista de elementos desplegables
 * @param {function} props.onChanged - Función a ejecutar cuando se selecciona un elemento
 * @param {any} props.value - Valor seleccionado actualmente
 * @param {string|Node} props.hint - Texto o nodo de sugerencia
 * @param {string|Node} props.disabledHint - Texto o nodo de sugerencia cuando está deshabilitado
 * @param {number} props.elevation - Elevación del menú desplegable
 * @param {Object} props.style - Estilo del botón desplegable
 * @param {Node} props.underline - Componente de subrayado
 * @param {Node} props.icon - Icono del botón desplegable
 * @param {string|number} props.iconSize - Tamaño del icono
 * @param {boolean} props.isDense - Si el menú debe ser denso
 * @param {boolean} props.isExpanded - Si el menú debe ocupar todo el ancho
 */
const DropdownButton = ({
    items,
    onChanged,
    value,
    hint,
    disabledHint,
    elevation,
    style,
    underline,
    icon,
    iconSize,
    isDense,
    isExpanded
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (itemValue) => {
        setIsOpen(false);
        onChanged(itemValue);
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    justifyContent: isExpanded ? 'space-between' : 'center',
                    alignItems: 'center',
                    padding: isDense ? '4px 8px' : '8px 16px',
                    ...style
                }}
            >
                {value ? items.find(item => item.value === value).label : hint}
                {icon && <span style={{ marginLeft: '8px', fontSize: iconSize }}>{icon}</span>}
            </button>
            {isOpen && (
                <div style={{ boxShadow: `0px ${elevation}px ${elevation * 2}px rgba(0, 0, 0, 0.3)`, marginTop: '4px', zIndex: 1 }}>
                    <ul style={{ listStyleType: 'none', padding: '8px', margin: 0 }}>
                        {items.map(item => (
                            <li
                                key={item.value}
                                onClick={() => handleSelect(item.value)}
                                style={{ padding: '8px', cursor: 'pointer' }}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {underline}
        </div>
    );
};

DropdownButton.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    onChanged: PropTypes.func.isRequired,
    value: PropTypes.any,
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabledHint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    elevation: PropTypes.number,
    style: PropTypes.object,
    underline: PropTypes.node,
    icon: PropTypes.node,
    iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isDense: PropTypes.bool,
    isExpanded: PropTypes.bool
};

DropdownButton.defaultProps = {
    elevation: 1,
    style: {},
    iconSize: '24px',
    isDense: false,
    isExpanded: false
};

export default DropdownButton;

// USO DEL COMPONENTE DROPDOWNBUTTON
// import React, { useState } from 'react';
// import DropdownButton from './DropdownButton';

// const App = () => {
//     const [selectedValue, setSelectedValue] = useState(null);

//     const items = [
//         { value: '1', label: 'Item 1' },
//         { value: '2', label: 'Item 2' },
//         { value: '3', label: 'Item 3' }
//     ];

//     return (
//         <div style={{ padding: '16px' }}>
//             <DropdownButton
//                 items={items}
//                 onChanged={(value) => setSelectedValue(value)}
//                 value={selectedValue}
//                 hint="Select an item"
//                 elevation={2}
//                 isDense
//                 isExpanded
//                 icon="▼"
//                 iconSize="16px"
//             />
//         </div>
//     );
// };

// export default App;
