import styled from "styled-components"
import Anuncio from "../components/Anuncio"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Productos from "../components/Productos"

const Container=styled.div``

const Title=styled.h1`
    margin-top:20px;
    text-align:center;
`

const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter=styled.div`
    margin:20px;
`
const FilterText=styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`
const Select=styled.select`
    padding:10px;
    margin-right:10px;
    
`
const Option=styled.option`
    background-color: teal;
    color:white;
`


export default function ListaProdutos() {
  return (
   <Container>
      
       <Title>Produtos</Title>
       <FilterContainer>
           
            <Filter><FilterText>Filtrar Produtos:</FilterText>
            <Select>
                <Option disabled selected>
                    tipo
                </Option>
                <Option>a</Option>
                <Option>b</Option>
                <Option>c</Option>
                <Option>d</Option>
                <Option>e</Option>
                <Option>f</Option>
            </Select>
            </Filter>
            
            <Filter><FilterText>Preco:</FilterText>
            <Select>
                <Option disabled selected>
                    preco
                </Option>
                <Option>preco(asc)</Option>
                <Option>preco(desc)</Option>
                
            </Select>
            </Filter>
       </FilterContainer>
       <Productos/>
       <NewsLetter/>
      s
   </Container>
  )
}
