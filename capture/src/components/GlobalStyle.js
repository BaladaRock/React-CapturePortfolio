import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    background: #1b1b1b
}

button{
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
    background: transparent;
    border: 3px solid #23d997;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}

h2{
    font-weight: lighter;
    font-size: 3rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
    font-size: 2rem;
}

a{
    font-size: 1.1rem;
}

span{
    font-weight: bold;
    color:#23d997;
}

p{
    padding: 2rem 0rem;
    line-height: 150%;
    font-size: 1.4rem;
    color: #ccc;
}
`;

export default GlobalStyle;
