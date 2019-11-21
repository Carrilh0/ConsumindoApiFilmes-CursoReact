import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
`;


export const ListaFilmes = styled.div`
    margin: 15px;
`;

export const Filme = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 15px;
    padding: 15px;
    border-radius: 5px;
`;

export const NomeFilme = styled.strong`
    padding-bottom: 15px;
    font-size: 20px;
`;

export const Acessar = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 25px;
    background-color: brown;
    width: 100%;
    height: 40px;
    margin-top: -30px;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Capa = styled.img`
    max-height: 350px;
    width: 900px
`;
