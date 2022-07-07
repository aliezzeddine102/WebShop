
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from '../data'
import { useState } from 'react'

const Container= styled.div`
    width:100%;
    height:80vh;
    display:flex;
    position:relative;
    overflow:hidden;
    
    
`
const Arrow= styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=> props.direction==="left" && "10px"};
    right:${props=> props.direction==="right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`
const Wrapper=styled.div`
    height:100%;
    display:flex;
    transform:translateX(${props=>props.slideIndex* -100}vw);
    transition:all 1.5s ease;
   
`
const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#${props=>props.bg};
`
const ImgContainer=styled.div`
    height:100%;
    flex:1;  
`
const InfoContiner=styled.div`
    flex:1;
    padding:50px;
`
const Image=styled.img`
    height:80%;
    width:90%;
`
const Titulo= styled.h1`

`
const Desc= styled.p`
    margin:20px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:4px;
`
const Button= styled.button`
    padding:10px;
    font-size:20px;
    background-color:teal;
    color:white;
    border:0;
    cursor:pointer;
`

export default function Slider() {
    const [slideIndex, setSlideIndex]= useState(0)
    const handleClick= (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex - 1:2)
        }else{
            setSlideIndex(slideIndex<2 ? slideIndex + 1:0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                  <Slide bg={item.bg} key={item.id}>
                  <ImgContainer>
                  <Image src={item.img}/>
                  </ImgContainer>
                  <InfoContiner>
                      <Titulo>{item.titulo}</Titulo>
                      <Desc>{item.desc}</Desc>
                      <Button>Comprar agora</Button>
                  </InfoContiner>
              </Slide>
            ))}
          
           
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("left")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
