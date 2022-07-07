import {Send} from '@material-ui/icons'
import styled from 'styled-components'

const Container=styled.div`
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-bottom:20px;
`
const Titulo=styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
const Desc=styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
`
const InputContainer=styled.div`
    width:50%;
    height:40px;
    display:flex;
    justify-content:space-between;
    border: 1px solid gray;
    
`
const Input=styled.input`
    border:none;
    flex:8;
    padding-left:10px;
  
`
const Button=styled.button`
    flex:1;
    background-color:teal;
    color:white;
    border:0;
    cursor:pointer;
`
export default function NewsLetter() {
  return (
    <Container>
        <Titulo>NewsLetter</Titulo>
        <Desc>Atualiza-se aqui para mais Informacao</Desc>
        <InputContainer>
            <Input placeholder='Seu email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}
