# Empaquetar la Librería

## Empaquetar librería usando Webpack

### Añadir Script en package.json

```json
"scripts": {
  "build": "webpack"
}
```

### Ejecutar el Script de Construcción

```bash
npm run build
```

## Publicar en npm

Publica tu librería en npm para que otros puedan usarla.

### Crear una Cuenta en npm

Si no tienes una cuenta en npm, crea una en [npmjs.com](https://www.npmjs.com/).

### Iniciar Sesión en npm

Inicia sesión en npm desde la terminal.

```bash
npm login
```

### Publicar la Librería

```bash
npm publish --access public
```

## Documentación y Uso

Asegúrate de incluir una buena documentación en tu `README.md` para que otros desarrolladores sepan cómo usar tu librería.

```jsx
import React from 'react';
import { MyComponent } from 'my-react-library';

const App = () => {
  return <MyComponent text="Hello, world!" />;
};

export default App;

```

## Table of Widgets transformed into React Components

| Widget | Transformed (❌ or ❎) |
| --- | --- |
|Container | ❎ |
|Text | ❎ |
|Image | ❎ |
|Button | ❎ |
|AppBar | ❎ |
|Scaffold | ❎ |
|Column | ❎ |
|Row | ❎ |
|Stack | ❎ |
|ListView | ❎ |
|GridView | ❎ |
|Icon | ❎ |
|IconButton | ❎ |
|DropdownButton | ❎ |
|TextField | ❎ |
|Checkbox | ❌ |
|Radio | ❌ |
|Slider | ❌ |
|Switch | ❌ |
|PopupMenuButton | ❌ |
|AnimatedContainer | ❌ |
|AnimatedOpacity | ❌ |
|AnimatedPositioned | ❌ |
|AnimatedSize | ❌ |
|FadeTransition | ❌ |
|Align | ❌ |
|Padding | ❌ |
|Expanded | ❌ |
|AspectRatio | ❌ |
|ClipRect | ❌ |
|ClipRRect | ❌ |
|ClipPath | ❌ |
|DecoratedBox | ❌ |
|DecoratedBoxBackground | ❌ |
|PhysicalModel | ❌ |
|PhysicalShape | ❌ |
|InkWell | ❌ |
|InkResponse | ❌ |
|Ink | ❌ |
|GestureDetector | ❌ |
|Overlay | ❌ |
|OverlayEntry | ❌ |
|SnackBar | ❌ |
|AlertDialog | ❌ |
|BottomSheet | ❌ |
|FloatingActionButton | ❌ |
|FloatingActionButtonLocation | ❌ |
|FloatingActionButtons | ❌ |
|ModalBottomSheet | ❌ |
|SimpleDialog | ❌ |

## Ejemplo de transformación Flutter to React

### Column Widget en Flutter

Ejemplo de Column en Flutter

```Dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Flutter Column Example')),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text('First Child'),
            Text('Second Child'),
            Text('Third Child'),
          ],
        ),
      ),
    );
  }
}

```

### Convertir Column de Flutter a React

Vamos a crear un componente en React que imite la funcionalidad del widget `Column` de **Flutter** utilizando `CSS Flexbox` para manejar el diseño.

#### Componente Column en React

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Column.css';

const Column = ({ mainAxisAlignment, crossAxisAlignment, children }) => {
  const mainAxisStyles = {
    'start': 'flex-start',
    'center': 'center',
    'end': 'flex-end',
    'spaceBetween': 'space-between',
    'spaceAround': 'space-around',
    'spaceEvenly': 'space-evenly'
  };

  const crossAxisStyles = {
    'start': 'flex-start',
    'center': 'center',
    'end': 'flex-end',
    'stretch': 'stretch'
  };

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: mainAxisStyles[mainAxisAlignment],
    alignItems: crossAxisStyles[crossAxisAlignment]
  };

  return <div style={style}>{children}</div>;
};

Column.propTypes = {
  mainAxisAlignment: PropTypes.oneOf([
    'start', 'center', 'end', 'spaceBetween', 'spaceAround', 'spaceEvenly'
  ]),
  crossAxisAlignment: PropTypes.oneOf([
    'start', 'center', 'end', 'stretch'
  ]),
  children: PropTypes.node.isRequired
};

export default Column;

```

#### Uso del Componente Column en React

```jsx
import React from 'react';
import Column from './Column';

const App = () => {
  return (
    <div>
      <h1>React Column Example</h1>
      <Column mainAxisAlignment="center" crossAxisAlignment="center">
        <p>First Child</p>
        <p>Second Child</p>
        <p>Third Child</p>
      </Column>
    </div>
  );
};

export default App;

```

#### Explicación

Definición de `Column` en **React**: Hemos creado un componente `Column` en **React** que acepta `mainAxisAlignment`, `crossAxisAlignment` y `children` como **props**.

Estilos `Flexbox`: Utilizamos `Flexbox` en CSS para replicar la funcionalidad de ` de **Flutter**.

- `justifyContent` se mapea a `mainAxisAlignment`.

- `alignItems` se mapea a `crossAxisAlignment`.

Uso del Componente: Puedes usar el componente `Column` en tu aplicación **React** de manera similar a cómo usarías `Column` en **Flutter**.

Este enfoque te permite replicar **widgets** de **Flutter** en React, manteniendo una lógica y usabilidad similar.
