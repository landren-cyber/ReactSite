import React, { Component } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col><Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form></Col>
                    <Col><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27989702!2d-74.25986997981715!3d40.697670066662496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1629286353254!5m2!1sru!2sua" width="800" height="600" allowfullscreen="" loading="lazy"></iframe></Col>
                </Row>
            </Container>
        );
    }
}

export default Contacts;