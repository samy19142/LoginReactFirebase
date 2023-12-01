import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const NavbarComponent =()=>{
    const {user,logout}=useAuth();
    

    const handleLogout=()=>{

        Swal.fire({
            title: "Quieres cerrar la sesión?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si",
            cancelButtonText:'No'
          }).then(async(result) => {
            if (result.isConfirmed) {
               await logout();
            }
          });
    }

    return(
        <Navbar expand='lg' className='bg-body-tertiary'>
             <Container>
        <Navbar.Brand >
        <Link to={'/'}>
        Navbar with text
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        {user&&(

          <Navbar.Text>
          
            Signed in as: <Link onClick={()=>handleLogout()}>{user.email}</Link>
          </Navbar.Text>
        )}
        </Navbar.Collapse>
      </Container>
        </Navbar>
    )
}

export default NavbarComponent;