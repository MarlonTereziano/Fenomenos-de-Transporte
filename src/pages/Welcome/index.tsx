import { Container, SideBar, Content, Footer, AletaTemp } from './styles';
import { Slider } from 'antd';
import React, {useState} from 'react';
import 'antd/dist/antd.css';
import logoIF from '../../assets/img/if.png';




export const Welcome: React.FC = () => {

    const [tempAleta, setTempAleta] = useState(Number);
    const [tempAmbiente, setTempAmbiente] = useState(50);

    const mCobre = ((tempAleta-tempAmbiente) * 0.032 * 100)+255;
    const mAluminio = ((tempAleta-tempAmbiente) * 0.052 * 100)+255;
    const mFerro = ((tempAleta-tempAmbiente) * 0.014 * 100)+255;

    console.log(mCobre, mAluminio, mFerro);
    

    return (
        <Container>
            <SideBar>
                <img className='logoIF' alt="" src={logoIF} />
                <div className="contentTemp">
                    <div className="buttonTempAleta">
                        
                        <h1>Temperatura Aleta (K)</h1>
                        <Slider min={50} max={100} onChange={(value) => {setTempAleta(value*-1)}} />
                    </div>
                    <div className="buttonTempAmbiente">
                        <h1>Temperatura Ambiente</h1>
                        <Slider max={50} onChange={(value) => {setTempAmbiente(value*-1)}}/>
                    </div>
                </div>

            </SideBar>
            <Content>
                <div className="ft">Aletas: Aplicações em materias diversos</div>
                <div className="aletas">
                    <div className="blocoHorizontal" />
                    <div className="blocoVerticalCobre">
                    <h1>Cobre: K=380 W/(M*K)</h1>
                        <AletaTemp par={mCobre}>
                        </AletaTemp>
                    </div>
                    <div className="blocoVerticalAluminio">
                        <h1>Aluminio: K=140 W/(M*K)</h1>
                        <AletaTemp par={mAluminio}>
                        </AletaTemp>
                    </div>
                    <div className="blocoVerticalFerro">
                        <h1>Ferro: K=80 W/(M*K)</h1>
                        <AletaTemp par={mFerro}>
                        </AletaTemp>
                    </div>
                </div>
            </Content>
            <Footer>
                <h1>Todos os direitos reservados - IFSULDEMINAS 2022 - Fenômenos de Transporte</h1>
            </Footer>
        </Container>
    );
};



