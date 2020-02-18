import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form, FormGroup,Label,Input}
from 'reactstrap';

export default class Login extends Component {
    render() {
        return ( 
        
               
            <div className="App">
            <div className="App-header">
              
            <Form className="container" >
    
              <h1 className="font-weight-bold text-center ">Login
              </h1>
              <h1 className=" font-weight-bold text-center ">Welcome</h1>
              
   
              <FormGroup >
                
                  <Label className="  te font-weight-bold">Email</Label>
                  <Input   type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup >
                  <Label className=" te font-weight-bold">Password</Label>
                  <Input  type="password" placeholder="password" />
              </FormGroup>
              <Button className="btn-lg btn-dark btn-block" href="http://localhost:3000/home">Log In</Button>
           
          
              <div className="text-center pt-3">or continue with social account</div>

              <div className="text-center">
               <a href="/sign-up">Sign up</a>
               <span className="p-2">|</span>
               <a href="/Forgot Password">Forgot Password</a>   
            
              </div>
            </Form>
           </div>
    </div>
        
        )
    }
}
