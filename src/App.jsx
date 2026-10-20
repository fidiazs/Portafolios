import React from 'react';
import { Anchor } from 'antd';
import SobreMi from "./components/organisms/SobreMi.jsx";
import Experiencia from "./components/organisms/Experiencia.jsx";
import Estudios from "./components/organisms/Estudios.jsx";
import Proyectos from "./components/organisms/Proyectos.jsx";
import Formulario from "./components/organisms/Formulario.jsx";


const App = () => (
    <>
      <div style={{ padding: '20px',
                    width: 'fit-content',
                    marginLeft: 'auto',
                    marginRight: '50px',}}>
        <Anchor
            direction="horizontal"
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Inicio',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Sobre mi',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Mis experiencias',
              },
              {
                key: 'part-4',
                href: '#part-4',
                title: 'Mis proyectos',
              },
              {
                  key: 'part-5',
                  href: '#part-5',
                  title: 'Estudios',
              },
                {
                    key: 'part-6',
                    href: '#part-6',
                    title: 'Formulario',
                },
            ]}
        />
      </div>
      <div>
        <div
            id="part-1"
            style={{
              width: '100vw',
              height: '100vh',
              textAlign: 'center',
            }}
        />
        <SobreMi/>

        <Experiencia/>
        <Proyectos/>
        <Estudios/>
        <Formulario/>
      </div>

    </>
);
export default App;