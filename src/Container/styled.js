import styled from "styled-components";
import image from "./money.jpg"

export const ContainerBox = styled.main`
    height: 100vh;
    width: 100%;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: border-box;
    overflow: hidden;
    position: relative;
    z-index: 0;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }    
`;
export const Header = styled.h1`
    text-transform: uppercase;
    letter-spacing: 5px;
    color: white;
    font-size: 100px;
    margin: 0;
    padding: 15px;
    text-align: center;
    font-weight: normal;
`