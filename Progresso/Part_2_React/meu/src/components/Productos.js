import styled from "styled-components"
import { produtos } from "../data"
import Producto from "./Producto"

const Container=styled.div`

`
const ContainerProdutos= styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const Titulo=styled.h2`
    text-align:center;
`
const Linha=styled.hr`
  max-width:1200px;
  margin:auto;
`
export default function productos() {
  return (
      <Container>
          <Titulo>Produtos Em Promocao</Titulo>
          <Linha/>
   <ContainerProdutos>
       {produtos.map((item)=>(
           <Producto item={item} key={item.id}/>
       ))}
   </ContainerProdutos>
   </Container>
  )
}
