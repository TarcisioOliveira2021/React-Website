import styled from "styled-components";
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;

    //Função para trocar o background do botão.
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;

    //Função para trocar o padding do botão.
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};

    //Função para trocar a cor do botão.
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};

    //Função para trocar o tamanho da fonte do botão.
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
    }
`