import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Componente controlado (Input)" color="#FF432E">
                <Input></Input>
            </Card>
            <Card titulo="Comunicação Indireta" color="#FF432E">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="Comunicação Direta" color="#FF432E">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="Renderização Condicional" color="#FF432E">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
            </Card>
            <Card titulo="Repetição Desafio" color="#FF432E">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="Repetição" color="#080">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Componente com filhos" color="#080">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                    <FamiliaMembro nome="Elon" ></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="Desafio Aleatório" color="#080">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>
            <Card titulo="Fragmento">
                <Fragmento></Fragmento>
            </Card>
            <Card titulo="Com Parâmetro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Joselito"
                    nota={8.7}>
                </ComParametro>
            </Card>
            <Card titulo="Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>

        </div>

    </div>
);
