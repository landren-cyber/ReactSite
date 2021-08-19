import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> Design </Nav.Link>
                                    <Nav.Link eventKey="second"> Team </Nav.Link>
                                    <Nav.Link eventKey="third"> Progrmming </Nav.Link>
                                    <Nav.Link eventKey="fourth"> Frameworks </Nav.Link>
                                    <Nav.Link eventKey="fifth"> Libraries </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://indiaappdevelopers.com/wp-content/uploads/2018/08/Design.jpg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://static2.clutch.co/s3fs-public/software-development-team-1.jpg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://cdn.neow.in/news/images/uploaded/2020/02/1582191446_cplus_story.jpg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://www.twinztech.com/wp-content/uploads/2019/02/Most-Popular-JavaScript-Frameworks.png" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://1.bp.blogspot.com/-_n4CSuACPFY/XpNjaODTrPI/AAAAAAAAAyg/93MM1KbPBnQoCbynLGycvsj_PvV-KMFHgCLcBGAsYHQ/w1200-h630-p-k-no-nu/uzaktan-e%25C4%259Fitim.jpg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;