import styled from "styled-components"
import { categories } from "../data"
import CategoriesItem from "./CategoriesItem"

const Container=styled.div`
  margin: 30px 0;
`
const ContainerItem= styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
`
const Titulo=styled.h2`
  text-align:center;

`
const Linha=styled.hr`
  max-width:1200px;
  margin:auto;
`


export default function Categories() {
  return (
   
    <Container>
      <Titulo>Categoria dos produtos</Titulo>
      <Linha/>
      <ContainerItem>
        {categories.map(item=>(
           <CategoriesItem item={item} key={item.id}/> 
        ))}
        </ContainerItem>
    </Container>
  )
}
