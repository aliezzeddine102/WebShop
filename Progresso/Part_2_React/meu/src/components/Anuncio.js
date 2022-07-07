import styled from "styled-components"


const Container=styled.div`
    height:30px;
    background-color: black;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bold;
    padding:10px 0;
    

`

export default function Anuncio() {
  return (
    <Container>Publicidade
    </Container>
  )
}
