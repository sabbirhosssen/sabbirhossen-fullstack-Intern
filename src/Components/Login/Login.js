import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Login = () => {
    const {user, googleLogin}=useFirebase()
    // const navigate =useNavigate();
    // const location =useLocation();
    // const redirect_uri = location?.state?.from || '/';
    const handleGoogleLogIn =(e)=>{
        e.preventDefault();
        googleLogin().then(result=>{
                // navigate(redirect_uri)
                console.log("hi");
        })
    }
    console.log(user);
    return (
        <div>
            <div  className='  back_logo mx-auto p-5 w-50 '>
            
            <div className="back   border border-2 p-5 mt-5 mb-5 rounded " >
                <Form className=''> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-3 text-info">Log in</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email or Username" />
    
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
    
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
    
                    <Button variant="info w-100  fs-5 text-white"  type="submit">
                        Log in
                    </Button>
                    <br /> <br />
    
                    <Form.Text className="text-muted ">
                        Don't have an account yet ?
                        <Link as={Link} to={'/signup'} className="text-decoration-none colo "> Sign up here</Link>
                    </Form.Text>
                    <br />
                    <Form.Label className="text-success fs-2">or</Form.Label>
    
                    <Button onClick={handleGoogleLogIn} className="bg-info border-0 rounded w-100  fs-5" >
                   
                        <Image width="35px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
                        Sign in with Google
                    </Button>
    
    
    
                </Form>
            </div >
            </div>
             {/* <Button className="bg-info border-0 rounded w-100  fs-5" > */}
        </div>
    );
};

export default Login;