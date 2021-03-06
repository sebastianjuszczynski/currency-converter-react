import styled from "styled-components";

export const FormBox = styled.form`
    margin: 0 auto;
    padding: 15px;
    width: 50%;
    background-color: #F8FFB3;
    border: 8px solid black;
    border-radius: 5px;
`;
export const FormFieldset = styled.fieldset`
    font-size: 20px;
    background-color: hsl(66, 100%, 65%);
    border: 2px solid hsl(120, 93%, 40%);
    border-radius: 5px;
`;
export const Legend = styled.legend`
    font-size: 32px;
    color: hsl(120, 93%, 40%);
    padding: 5px;
    border: 2px solid hsl(120, 93%, 40%);
    border-radius: 5px;
`;
export const FormLabel = styled.label`
    font-size: 26px;
    color: hsl(120, 93%, 40%);
`;
export const FormInput = styled.input`
    color: hsl(120, 93%, 40%);
    width: 50%;
    float: right;
    border: 2px solid hsl(120, 93%, 40%);
    border-radius: 5px;

    &::after {
        content: "";
        clear: both;
    }
`;
export const FormButton = styled.button`
    width: 100%;
    margin: 5px auto;
    padding: 8px;
    text-transform: uppercase;
    border: 4px solid hsl(120, 93%, 40%);
    color: hsl(120, 93%, 40%);
    background-color: rgb(22, 61, 61);
    font-size: 50px;
    cursor: pointer;

    &:hover {
        background-color: hsl(180, 47%, 20%);
        color: hsl(120, 93%, 45%);
    }
`;
export const Text = styled.div`
    margin: auto;
    padding: 20px;
    text-align: center;
    color: hsl(120, 93%, 40%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
`;
export const Error = styled.div`
    margin: auto;
    padding: 20px;
    text-align: center;
    color: crimson;
`;
export const Info = styled.div`
    margin: auto;
    padding: 0;
    text-align: center;
    color: hsl(120, 93%, 40%);
    font-size: 16px;
`;



