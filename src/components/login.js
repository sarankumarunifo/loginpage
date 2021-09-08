import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css'
import blog from "../images/innerblog.png";
import logo from "../images/logo.png";
// import { AiOutlineCopyright } from "react-icons/ai";



const login = () => {
    return (
        <div >

            <div id="logo">
                <img src={logo} alt="blog" />
            </div>
            <Row>
            <Col>
            <div id="imgblog" Style="float:left">
            <img src={blog} alt="blog" Style="width:45%;" />
            </div>
            </Col>
            <Col>

            <div id="header" Style="float:left;width:50%" >
            <h4><b>C- Gate</b></h4>
            <p>Sign in to your Account</p>
            <Form className="header" Style="width:45%" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label><br />
            <Form.Control type ="email" placeholder="Enter your username" className="textbox" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" Style="margin-top: 17px;">
            <Form.Label>Password</Form.Label><br />
            <Form.Control type ="password" placeholder="Enter your Password" Style="margin-bottom: 14px;" className="textbox" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox" Style="float:left; width:185px"  >
            <Form.Check type ="checkbox" label="Keep me logged in" />

            </Form.Group>
            <Form.Group>
            <Link to="/" id="forgetpassword">Forgetten Password</Link>
            </Form.Group>

            <Button variant="primary" type ="submit" id="button">
            Sign in
            </Button> <br />
            <Link to="/" id="newaccount">No Account?create Account</Link>


            </Form>

            </div>
            </Col>
            </Row>
           

        </div>
    )
}

export default login;