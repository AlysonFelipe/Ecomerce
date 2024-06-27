import { ListaProdutos } from "../componentes/ListaProdutos";
import  MeuNavBar from "../componentes/MeuNavBar";
import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { Container } from "react-bootstrap";

function Home() {
    return (

       
       <Container>
        <MeuNavBar/>
        <CarouselAnuncios/>
        <ListaProdutos/>
       </Container>
    );
};

export { Home };

