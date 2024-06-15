import React, { useEffect, useState } from 'react';
import Base from './Base';
import { Card, Row, CardTitle, CardBody, Container, Form, FormGroup, Label, Input, Button, Col, FormFeedback } from 'reactstrap';
import { signup } from '../services/user-service';
import { ToastContainer, toast } from 'react-toastify';
const Signup = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: ""
  });

  const [error, setError] = useState({
    errors: {},
    isError: false
  });

  useEffect(()=>{
    console.log(user);
  },[user])

  const handleChange = (event) => {
    
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    
  };

  const handleReset = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: ""
    });
  };

  const submitForm=(event)=>{
    event.preventDefault()
    if(error.isError){
      toast.error("Form is Invalid, correct all details")
      setError({
        ...error,isError:false
      })
    }
    signup(user).then((resp)=>{
      console.log(resp)
      console.log("success log")
      toast.success("user is register successfully !!")
      setUser({
        name: "",
        email: "",
        password: "",
        about: ""
      });
    }).catch((error)=>{
      console.log(error)
      console.log("error log")
      setError({
        errors:error,
        isError:true
      })
    })
  }

  return (
    <Base>
      <Container>
        <Row className='mt-4'>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color='dark' inverse>
              <CardTitle className='mt-1'>
                <h3 style={{ marginLeft: '20px' }}>Fill Information To Register !!</h3>
              </CardTitle>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label htmlFor="name">Enter Name</Label>
                    <Input type="text" placeholder='Enter here' id='name' name='name' value={user.name} onChange={handleChange} invalid={error.errors?.response?.data?.name ? true : false}/>
                    <FormFeedback>
                  {error.errors?.response?.data?.name}
                  </FormFeedback>
                  </FormGroup>
                 
                  <FormGroup>
                    <Label htmlFor="email">Enter Email</Label>
                    <Input type="email" placeholder='Enter here' id='email' name='email' value={user.email} onChange={handleChange} invalid={error.errors?.response?.data?.email ? true : false}/>
                    <FormFeedback>
                  {error.errors?.response?.data?.email}
                  </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Enter Password</Label>
                    <Input type="password" placeholder='Enter here' id='password' name='password' value={user.password} onChange={handleChange} invalid={error.errors?.response?.data?.password ? true : false}/>
                    <FormFeedback>
                  {error.errors?.response?.data?.password}
                  </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="about">About.. </Label>
                    <Input type="textarea" placeholder='Enter here' id='about' name='about' value={user.about} style={{ height: "250px" }} onChange={handleChange} invalid={error.errors?.response?.data?.about ? true : false}/>
                    <FormFeedback>
                  {error.errors?.response?.data?.about}
                  </FormFeedback>
                  </FormGroup>
                  <Container className='text-center'>
                    <Button outline color='light'>
                      Register
                    </Button>
                    <Button  color='secondary' type='button' className='ms-2' onClick={handleReset}>
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default Signup;
