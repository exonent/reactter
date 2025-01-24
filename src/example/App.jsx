// example/App.js to show all the widgets in a single page

import React, { useState } from 'react';
import Align from '../components/Align/Align';
import Padding from '../components/Padding/Padding';
import Expanded from '../components/Expanded/Expanded';
import AspectRatio from '../components/AspectRatio/AspectRatio';
import ClipRect from '../components/ClipRect/ClipRect';
import ClipRRect from '../components/ClipRRect/ClipRRect';
import ClipPath from '../components/ClipPath/ClipPath';
import DecoratedBox from '../components/DecoratedBox/DecoratedBox';
import PhysicalModel from '../components/PhysicalModel/PhysicalModel';
import PhysicalShape from '../components/PhysicalShape/PhysicalShape';
import InkWell from '../components/InkWell/InkWell';
import InkResponse from '../components/InkResponse/InkResponse';
import Ink from '../components/Ink/Ink';
import GestureDetector from '../components/GestureDetector/GestureDetector';
import Overlay from '../components/Overlay/Overlay';
import OverlayEntry from '../components/OverlayEntry/OverlayEntry';
import SnackBar from '../components/SnackBar/SnackBar';
import AlertDialog from '../components/AlertDialog/AlertDialog';
import BottomSheet from '../components/BottomSheet/BottomSheet';
import FloatingActionButton from '../components/FloatingActionButton/FloatingActionButton';
import FloatingActionButtonLocation from '../components/FloatingActionButtonLocation/FloatingActionButtonLocation';
import ModalBottomSheet from '../components/ModalBottomSheet/ModalBottomSheet';
import SimpleDialog from '../components/SimpleDialog/SimpleDialog';

const componentsList = [
    'Align',
    'Padding',
    'Expanded',
    'AspectRatio',
    'ClipRect',
    'ClipRRect',
    'ClipPath',
    'DecoratedBox',
    'PhysicalModel',
    'PhysicalShape',
    'InkWell',
    'InkResponse',
    'Ink',
    'GestureDetector',
    'Overlay',
    'OverlayEntry',
    'SnackBar',
    'AlertDialog',
    'BottomSheet',
    'FloatingActionButton',
    'FloatingActionButtonLocation',
    'ModalBottomSheet',
    'SimpleDialog'
];

const App = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Align':
                return <Align alignment="center" child={<div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div>} />;
            case 'Padding':
                return <Padding padding="16px"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></Padding>;
            case 'Expanded':
                return <Expanded><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></Expanded>;
            case 'AspectRatio':
                return <AspectRatio aspectRatio={16 / 9}><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></AspectRatio>;
            case 'ClipRect':
                return <ClipRect><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></ClipRect>;
            case 'ClipRRect':
                return <ClipRRect borderRadius="8px"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></ClipRRect>;
            case 'ClipPath':
                return <ClipPath customClipper={() => 'M10 80 Q 95 10 180 80 T 330 80 T 490 80'}><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></ClipPath>;
            case 'DecoratedBox':
                return <DecoratedBox decoration={{ backgroundColor: 'lightblue', border: '2px solid blue', borderRadius: '8px', padding: '16px' }}><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></DecoratedBox>;
            case 'PhysicalModel':
                return <PhysicalModel color="lightblue" shadowColor="rgba(0, 0, 0, 0.5)" elevation={4} shape="box" borderRadius="8px" clipBehavior="clip"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></PhysicalModel>;
            case 'PhysicalShape':
                return <PhysicalShape color="lightblue" shadowColor="rgba(0, 0, 0, 0.5)" elevation={4} clipper={() => 'M10 80 Q 95 10 180 80 T 330 80 T 490 80'} clipBehavior="clip"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></PhysicalShape>;
            case 'InkWell':
                return <InkWell onTap={() => alert('InkWell presionado!')} hoverColor="lightblue" highlightColor="darkblue" splashColor="rgba(0, 0, 255, 0.3)" radius={8} borderRadius="8px"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></InkWell>;
            case 'InkResponse':
                return <InkResponse onTap={() => alert('InkResponse presionado!')} hoverColor="lightblue" highlightColor="darkblue" splashColor="rgba(0, 0, 255, 0.3)" radius={8} borderRadius="8px"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></InkResponse>;
            case 'Ink':
                return <Ink onTap={() => alert('Ink presionado!')} hoverColor="lightblue" highlightColor="darkblue" splashColor="rgba(0, 0, 255, 0.3)" radius={8} borderRadius="8px"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></Ink>;
            case 'GestureDetector':
                return <GestureDetector onTap={() => alert('GestureDetector presionado!')}><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></GestureDetector>;
            case 'Overlay':
                return <Overlay isVisible onOverlayClick={() => alert('Overlay presionado!')}><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></Overlay>;
            case 'OverlayEntry':
                return <OverlayEntry isVisible onOverlayClick={() => alert('OverlayEntry presionado!')}><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></OverlayEntry>;
            case 'SnackBar':
                return <SnackBar message="Hola desde el SnackBar!" duration={3000} action={{ label: 'Acción', onClick: () => alert('Acción del SnackBar ejecutada!') }} onClose={() => alert('SnackBar cerrado!')} />;
            case 'AlertDialog':
                return <AlertDialog title="¡Alerta!" content="Este es un mensaje de alerta en el diálogo." actions={[{ label: 'Aceptar', onClick: () => alert('Acción del AlertDialog ejecutada!') }, { label: 'Cancelar', onClick: () => alert('Cancelar presionado!') }]} onClose={() => alert('AlertDialog cerrado!')} />;
            case 'BottomSheet':
                return <BottomSheet isVisible onClose={() => alert('BottomSheet cerrado!')} height="300px"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></BottomSheet>;
            case 'FloatingActionButton':
                return <FloatingActionButton onClick={() => alert('FloatingActionButton presionado!')} icon={<span style={{ fontSize: '24px' }}>+</span>} backgroundColor="blue" tooltip="Añadir" />;
            case 'FloatingActionButtonLocation':
                return <FloatingActionButtonLocation onClick={() => alert('FloatingActionButtonLocation presionado!')} icon={<span style={{ fontSize: '24px' }}>+</span>} backgroundColor="blue" tooltip="Añadir" position="bottomRight" />;
            case 'ModalBottomSheet':
                return <ModalBottomSheet isVisible onClose={() => alert('ModalBottomSheet cerrado!')} height="300px"><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></ModalBottomSheet>;
            case 'SimpleDialog':
                return <SimpleDialog title="Simple Dialog" onClose={() => alert('SimpleDialog cerrado!')}><div style={{ backgroundColor: 'blue', color: 'white', padding: '8px' }}>Contenido</div></SimpleDialog>;
            default:
                return <p>Selecciona un componente para ver su vista previa.</p>;
        }
    };

    return (
        <div style={{ padding: '16px' }}>
            <h1>Componentes Ejemplo</h1>
            <ul>
                {componentsList.map((component) => (
                    <li key={component}>
                        <button onClick={() => setSelectedComponent(component)}>{component}</button>
                    </li>
                ))}
            </ul>
            <div style={{ marginTop: '16px' }}>
                {renderComponent()}
            </div>
        </div>
    );
};

export default App;
