import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"



const Container = styled.div`
  position:relative;
`
  
const ImageContainer=styled.div`
  flex:1;
  margin:5px;
  min-width:280px;
  height:350px;
 
`

const Image=styled.img`
  height:75%;
 
 
`
const Info=styled.div`
  width:100%;
  position:absolute;
  display:flex;
  justify-content:center;
  top:280px;
  
  
  

  
`
const Icon=styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  margin:10px;
  transition: all 0.5s ease;

  &:hover{
    backgorund-color:#e9f5f5;
    transform:scale(1.1); 
  }
`
const PrecoButton=styled.div`
    display:flex;
    
`
const Preco=styled.p``
const Button= styled.button`
  
`
export default function Producto({item}) {
  return (
    
   <Container>
     <ImageContainer>
     <Image src={item.img}/>
     </ImageContainer>
    
     <Info>
       <Icon>
         <SearchOutlined/>
       </Icon>
       <Icon>
         <ShoppingCartOutlined/>
       </Icon>
          
     </Info>
     <PrecoButton>
            <Preco>100 kz</Preco>
            <Button>Adicionar ao carrinho</Button>
     </PrecoButton>
            
        
   </Container>
  )
}
