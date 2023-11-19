import { Button, Carousel, Col, Container, Form, Image, Row } from "react-bootstrap";
import SLIDER_1 from "../assets/slider-1.jpeg";
import SLIDER_2 from "../assets/slider-2.jpeg";
import { useState } from "react";

const Login = () => {
    const [formData,setFormData] = useState({
        email:'',
        password:''
    });

    const handleInputs =(e)=>{
        e.preventDefault();
        const {name,value} = e.target;
            
        setFormData({...formData,[name]:value})

    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        console.log('fin')
    }

  return (
    <>
      <Container fluid className="min-vh-100 d-inline-block">
        <Row className="text-center m-5 mx-auto">
          {/*para el carrusel*/}
          <Col md={8} xs={12} className="bg-dark">
            <Carousel fade>
              <Carousel.Item>
                <Image className="d-block w-100" src={SLIDER_1}  style={{ width: '100%', height: 'auto' }}></Image>
                <Carousel.Caption>
                  <h3>Bienvenido</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image className="d-block w-100" src={SLIDER_2} style={{ width: '100%', height: 'auto' }}></Image>
                <Carousel.Caption>
                  <h3>Curso Intecap</h3>
                  <p>2023</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* //todo Formulario*/}
          <Col md={4} xs={12} className="my-auto">
            <h2>LOGIN </h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="email"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name="email" onKeyUp={(e)=>handleInputs(e)} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="password"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onKeyUp={(e)=>handleInputs(e)} type="password" />
              </Form.Group>
              <Button variant="primary" onClick={(e)=>handleSubmit(e)}>Iniciar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
