import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Container=styled.div `

    height:60px;
    @media only screen and (max-width:530px){
      display:none;
    }
   
    
`
const Wrapper=styled.div `
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`
const Left=styled.div `
    flex:1;
   
    
    
    
`
const Language=styled.span`
font-size:14px;
cursor:pointer;

`
const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input=styled.input`
  border:none;
  padding:0 10px;
`
const Logo=styled.h1`
  font-weight:bold;
  
`
const Center=styled.div `
    flex:1;
    display:flex;
    align-items:center;
`
const Right=styled.div `
flex:1.5; 
display:flex;
justify-content:flex-end;
`
const MenuItem=styled.a`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
  
`


export default function Navbar() {
  return (
    <Container>
           <Wrapper>
           <Left>
              <Logo>Webshop</Logo>
                
           </Left>
           <Center>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:16}}/>
                    
                </SearchContainer>
           </Center>
           <Right>
             <Link  to="/"><MenuItem>Home</MenuItem></Link>
             <Link to="/sobre"><MenuItem>Sobre</MenuItem></Link>
             <Link to="/produto"><MenuItem>Produtos</MenuItem></Link>
             <Link to='/contacto'><MenuItem>Contacto</MenuItem></Link>
             <MenuItem>Register</MenuItem>
             <MenuItem>Sign in</MenuItem>

             <MenuItem><Badge badgeContent={4} color="primary">
               <ShoppingCartOutlined/>
             </Badge>
             </MenuItem>
             <MenuItem><Language>PT</Language></MenuItem>

           </Right>
           
            </Wrapper> 
         
    </Container>
  )
    
  
}
