import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import SLIDER_1 from "../assets/slider-1.jpeg";
import { useState } from "react";
import { useAuth } from "../context/authContext/";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const { signup, login } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterOrLogin = () => {
    setIsRegister(!isRegister);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      if(isRegister){
        await signup(formData);
        Swal.fire({
          position:'top-right',
          icon:'success',
          title:'Registro Exitoso!',
          showConfirmButton:false,
          timer:1500,
        });
      }else{
        await login(formData);
        navigate('/')
      }
      
    } catch (error) {
      console.log(error);
      Swal.fire({
        position:'top-right',
        icon:'error',
        title:'Ocurrio un error mientras se registraba',
        showConfirmButton:false,
        timer:1500,
      });
    }
  };

  return (
    <>
      <Container fluid className="min-vh-100 d-inline-block">
        <Row className="text-center m-5 mx-auto">
          {/*para el carrusel*/}
          <Col md={8} xs={12} className="bg-dark">
            <Carousel fade>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={SLIDER_1}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
                <Carousel.Caption>
                  <h3>Bienvenido</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>

              {/*
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={SLIDER_2}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
                <Carousel.Caption>
                  <h3>Curso Intecap</h3>
                  <p>2023</p>
                </Carousel.Caption>
              </Carousel.Item>
            */}
            </Carousel>
          </Col>

          {/* //todo Formulario*/}
          <Col md={4} xs={12} className="my-auto">
            <h2>{isRegister ? "Registrar" : "Iniciar sesion"} </h2>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  onKeyUp={(e) => handleInputs(e)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  name="password"
                  onKeyUp={(e) => handleInputs(e)}
                  type="password"
                  required
                />
              </Form.Group>
              <Stack gap={2}>
                <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                  {isRegister ? "Registrar" : "Iniciar sesión"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleRegisterOrLogin()}
                >
                  {isRegister ? "Regresar" : "Registrar"}
                </Button>
              </Stack>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
