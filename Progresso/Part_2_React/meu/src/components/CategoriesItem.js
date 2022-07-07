
import styled from "styled-components"

const Container= styled.div`
flex:1;
margin:7px;
height:70vh;
position:relative;
`
const Image= styled.img`
    width:90%;
    height:80%; 
    object-fit:cover; 
`
const Info= styled.div`
    position:absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const Title= styled.h2`
    color:white;
    margin-bottom:20px;
`
const Button=styled.button`
    border:none;
    padding:10px;
    background-color:white;
    cursor:pointer;
    font-weight:600;
`
export default function CategoriesItem({item}) {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title> {item.titulo}</Title>
            <Button>Comprar agora</Button>
        </Info>
    </Container>
  )
}
