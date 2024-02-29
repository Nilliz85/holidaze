import styled from 'styled-components';


export const LocationSearchContainer = styled.div`
position: absolute;
top: 96%;
left: 50%;
transform: translate(-50%, -50%);
width: 40%;
height: 150px;
border-radius: 24px;
background-color: #fff;
box-shadow: dimgray 0px 0px 10px 0px;`


export const LocationSearchBody = styled.div`
text-align: center;
display: flex;
margin: 0 0 0 50px;
gap: 30px;
align-items: center;
justify-content: space-around;`

export const LocationSearchBodySection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 100%;
text-align: center;`


export const LocationSearchInput = styled.input`
width: 100%;
height: 100%;
border: none;
outline: none;
font-size: 1.5rem;
padding: 10px;
border-radius: 24px;
background-color: #f5f5f5;
color: #000;

&::placeholder{
    color: #000;


}`
export const DateSearchInput = styled.input`
width: 100%;
height: 100%;
border: none;
outline: none;
font-size: 1.5rem;
padding: 10px;
border-radius: 24px;
background-color: #f5f5f5;
color: #000;

&::placeholder{
    color: #000;
}`



export const LocationSearchBodyButton = styled.button`
background-color: #f9a825; 
color: #fff;
border-radius: 24px;
border: none;
padding: 20px 30px;
cursor: pointer;
outline: none;
justify-content: center;
align-items: center;
margin-top: auto;`


export const LocationSearchBodyButtonArrow = styled.span`
font-size: 36px; 
font-weight: bold;`
