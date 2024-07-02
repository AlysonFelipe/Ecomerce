import { Carousel } from "react-bootstrap";
import img1 from "../assents/image/fretegratis.jpg"; //- importar imagem
import img2 from "../assents/image/anuncio02.jpg"
import img3 from "../assents/image/anuncio03.jpg"
import img4 from "../assents/image/anuncio04.jpg"

function CarouselAnuncios() {

  return (
    
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {img1} height="500px"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {img2} height="500px"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3} height="500px"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {img4} height="500px"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      



    
  );
}



  export default CarouselAnuncios;