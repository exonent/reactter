// Componente React con estilo Widget: TextField

// Algunas de las propiedades que el TextField de Flutter puede tener:
// - controller
// - decoration
// - keyboardType
// - textInputAction
// - textCapitalization
// - style
// - textAlign
// - autofocus
// - readOnly
// - showCursor
// - obscureText
// - maxLength
// - maxLines
// - onChanged
// - onSubmitted
// - enabled

import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente TextField
 * @param {Object} props - Propiedades del componente
 * @param {function} props.controller - Controlador del campo de texto
 * @param {Object} props.decoration - Decoración del campo de texto
 * @param {string} props.keyboardType - Tipo de teclado (text, number, email, etc.)
 * @param {string} props.textInputAction - Acción del teclado (done, go, next, search, send)
 * @param {string} props.textCapitalization - Capitalización del texto (none, characters, words, sentences)
 * @param {Object} props.style - Estilo del campo de texto
 * @param {string} props.textAlign - Alineación del texto (left, right, center, justify)
 * @param {boolean} props.autofocus - Si el campo debe tener enfoque automático
 * @param {boolean} props.readOnly - Si el campo es de solo lectura
 * @param {boolean} props.showCursor - Si se debe mostrar el cursor
 * @param {boolean} props.obscureText - Si el texto debe estar oculto (para contraseñas)
 * @param {number} props.maxLength - Longitud máxima del texto
 * @param {number} props.maxLines - Número máximo de líneas
 * @param {function} props.onChanged - Función a ejecutar cuando el texto cambia
 * @param {function} props.onSubmitted - Función a ejecutar cuando el texto se envía
 * @param {boolean} props.enabled - Si el campo está habilitado
 */
const TextField = ({
    controller,
    decoration,
    keyboardType,
    textInputAction,
    textCapitalization,
    style,
    textAlign,
    autofocus,
    readOnly,
    showCursor,
    obscureText,
    maxLength,
    maxLines,
    onChanged,
    onSubmitted,
    enabled
}) => {
    const [value, setValue] = useState(controller ? controller.value : '');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (onChanged) onChanged(newValue);
        if (controller) controller.onChange(newValue);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && onSubmitted) {
            onSubmitted(e.target.value);
        }
    };

    const inputType = obscureText ? 'password' : keyboardType || 'text';

    return (
        <input
            type={inputType}
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            style={{
                ...style,
                textAlign: textAlign,
                outline: decoration ? 'none' : '',
                ...decoration?.style
            }}
            placeholder={decoration?.hintText}
            autoFocus={autofocus}
            readOnly={readOnly}
            maxLength={maxLength}
            size={maxLines}
            disabled={!enabled}
        />
    );
};

TextField.propTypes = {
    controller: PropTypes.shape({
        value: PropTypes.string,
        onChange: PropTypes.func
    }),
    decoration: PropTypes.shape({
        hintText: PropTypes.string,
        style: PropTypes.object
    }),
    keyboardType: PropTypes.string,
    textInputAction: PropTypes.string,
    textCapitalization: PropTypes.string,
    style: PropTypes.object,
    textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    autofocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    showCursor: PropTypes.bool,
    obscureText: PropTypes.bool,
    maxLength: PropTypes.number,
    maxLines: PropTypes.number,
    onChanged: PropTypes.func,
    onSubmitted: PropTypes.func,
    enabled: PropTypes.bool
};

TextField.defaultProps = {
    keyboardType: 'text',
    textInputAction: 'done',
    textCapitalization: 'none',
    style: {},
    textAlign: 'left',
    autofocus: false,
    readOnly: false,
    showCursor: true,
    obscureText: false,
    maxLength: null,
    maxLines: 1,
    enabled: true
};

export default TextField;

// USO DEL COMPONENTE TEXTFIELD
// import React, { useState } from 'react';
// import TextField from './TextField';

// const App = () => {
//     const [textValue, setTextValue] = useState('');

//     return (
//         <div style={{ padding: '16px' }}>
//             <TextField
//                 controller={{
//                     value: textValue,
//                     onChange: setTextValue
//                 }}
//                 decoration={{ hintText: 'Escribe algo...', style: { border: '1px solid gray', borderRadius: '4px', padding: '8px' } }}
//                 keyboardType="text"
//                 textAlign="left"
//                 autofocus
//                 onChanged={(value) => console.log('Texto cambiado:', value)}
//                 onSubmitted={(value) => alert('Texto enviado: ' + value)}
//                 maxLength={100}
//                 maxLines={1}
//             />
//             <p>Texto ingresado: {textValue}</p>
//         </div>
//     );
// };

// export default App;
