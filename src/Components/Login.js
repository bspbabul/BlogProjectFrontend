import React, { useState } from 'react'
import Base from './Base'
import { Card, Row, CardTitle, CardBody, Container, Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { login } from '../services/user-service';
import { doLogin } from '../auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''

  })

  const handleChange = (event, field) => {
    let actualValue = event.target.value
    setLoginDetails({
      ...loginDetails, [field]: actualValue

    })
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(loginDetails)
    if (loginDetails.email.trim() == '' || loginDetails.password.trim() == '') {
      toast.error("email and password is required !!")
      return;
    }
    login(loginDetails).then((jwtauthtoken) => {

      console.log(jwtauthtoken)
      doLogin(jwtauthtoken, () => {
        console.log("login detail is saved")
        navigate("/user/dashboard")
      })
      toast.success("login is successfull !!")
      setLoginDetails({
        email: '',
        password: ''
      })
    }).catch((error) => {
      console.log(error)
      console.log(error.response); // Add this to check the response object
      if (error.response?.status === 404 || error.response?.status === 401) {
        toast.error(error.response.data.message || 'Invalid credentials');
      } else {
        toast.error("somethig went wrong with the server")
      }

    })
  }

  const handleReset = () => {
    setLoginDetails({
      email: '',
      password: ''
    })
  }


  return (
    <Base>
      <Container >
        <Row className='mt-4'>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color='dark' inverse>


              <CardTitle className='mt-1'>
                <h3 style={{ marginLeft: '20px' }}>Login here !!</h3>
              </CardTitle>
              <CardBody>
                <Form onSubmit={handleSubmitForm}>

                  <FormGroup>
                    <Label htmlFor="email">Enter Email</Label>
                    <Input type="email" placeholder='Enter here' id='email' value={loginDetails.email} onChange={(e) => handleChange(e, 'email')} />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Enter Password</Label>
                    <Input type="password" placeholder='Enter here' id='password' value={loginDetails.password} onChange={(e) => handleChange(e, 'password')} />
                  </FormGroup>

                  <Container className='text-center'>
                    <Button outline color='light'>
                      Register
                    </Button>
                    <Button color='secondary' type='reset' className='ms-2' onClick={handleReset}>
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

  )
}

export default Login
