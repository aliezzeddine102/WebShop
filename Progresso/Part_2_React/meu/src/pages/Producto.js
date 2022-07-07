import styled from "styled-components"
import Anuncio from "../components/Anuncio"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import front from "../images/front.png"

const Container=styled.div``
const Wrapper=styled.div`
    padding:50px;
    display:flex;
`
const ImageContainer=styled.div`
    flex:1;
`
const Image=styled.img`
    width:100%;
    height:70vh;
    object-fit:cover;
`
const InfoContainer=styled.div`
    flex:1;
    padding:0 50px;
`
const Title=styled.h1`
    font-weight:bold;
`
const Desc=styled.p`
    margin:20px 0;
`
const Preco=styled.span`
    font-size:30px;
    font-weight:100;
`
const ButtonContainer=styled.div`
    padding:10px 0;
`
const Button=styled.button`
    padding:10px;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
`

export default function Producto() {
  return (
    <Container>
        
        <Wrapper>
            <ImageContainer>
                <Image src={front}/>
            </ImageContainer>
            <InfoContainer>
                <Title>Cimento</Title>
                <Desc>Este cimento e mais nnmgnggmgmgnggngngnngggggg</Desc>
                <Preco>800kz</Preco>
                <ButtonContainer>
                <Button>Adiciona ao carrinho</Button>
                </ButtonContainer>
                
            </InfoContainer>
            
        </Wrapper>
        <NewsLetter/>
        

    </Container>
  )
}
