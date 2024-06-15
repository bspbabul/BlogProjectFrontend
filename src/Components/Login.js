import React from 'react'
import Base from './Base'
import { Card,Row, CardTitle, CardBody, Container, Form, FormGroup, Label, Input ,Button, Col} from 'reactstrap';
const Login=()=> {
  return (
    <Base>
    <Container >
        <Row className='mt-4'>
          <Col sm={{size:6,offset:3}}>
          <Card color='dark' inverse>
            
          
            <CardTitle className='mt-1'>
               <h3 style={{ marginLeft: '20px' }}>Login here !!</h3> 
            </CardTitle>
            <CardBody>
              <Form>
               
                <FormGroup>
                  <Label htmlFor="email">Enter Email</Label>
                  <Input type="email" placeholder='Enter here'  id='email'/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Enter Password</Label>
                  <Input type="password" placeholder='Enter here'  id='password'/>
                </FormGroup>
                
                <Container className='text-center'>
                <Button outline color='light'>
                    Register
                </Button>
                <Button color='secondary' type='reset' className='ms-2'>
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
