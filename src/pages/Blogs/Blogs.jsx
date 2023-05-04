import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PDFDownloadLink, PDFViewer, Document, Page } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Blogs = () => {
    const [loader, setLoader] = useState(false);

    const downloadPDF = () => {
        const capture = document.querySelector('.bloggulo');
        setLoader(true);
        html2canvas(capture).then((canvas)=>{
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth=doc.internal.pageSize.getWidth();
            const componentHeight=doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('Blogs.pdf');
        })
    }
    return (
        <div className='py-5 bloggulo'>

            <Container >
                <Row xs={1} md={2} className="g-4">

                    <Col>
                        <Card>

                            <Card.Body>
                                <Card.Title className='text-center mb-4'>Controlled vs Uncontrolled Components</Card.Title>
                                <Card.Text>
                                    Controlled components are components where the state of the component is controlled by React. This means that the value of the input is set by the state of the component and updated by a change event handler. Controlled components are useful when you need to validate
                                    user input or perform some other action based on the state of the input.

                                    <br />
                                    <br />
                                    Uncontrolled components, on the other hand, are components where the state of the component is controlled by the browser. This means that the value of the input is set by the browser and updated by a change event handler. Uncontrolled components are useful when you have a simple form that
                                    doesn't require validation or other actions based on the state of the input.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body>
                                <Card.Title className='text-center mb-4'>How to validate React props using PropTypes?</Card.Title>
                                <Card.Text>
                                    React provides a built-in PropTypes library for validating the props passed to components. PropTypes is a type-checking library that allows developers to specify the type of data that is expected to be passed to a component's props. It helps to ensure that the right type of data is passed to
                                    a component, which in turn helps to prevent errors in your application.
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    In summary, PropTypes is a helpful library for ensuring that the right type of data is passed to a component's props, which can help prevent errors and improve the overall stability of your application.


                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body>
                                <Card.Title className='text-center mb-4'>Difference between nodejs and express js.</Card.Title>
                                <Card.Text>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It provides an environment for executing JavaScript code outside of a web browser, allowing developers to build server-side applications using JavaScript. Node.js provides core modules for building network applications, such as HTTP, HTTPS, and TCP. It also has a package manager called npm, which provides access to thousands of open-source libraries and tools for building Node.js applications.


                                    <br />
                                    <br />
                                    Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and utilities for building web applications, such as routing, middleware, and templates. Express.js is designed to be unopinionated and minimalistic, giving developers the flexibility to build web applications in the way they see fit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body>
                                <Card.Title className='text-center mb-4'>What is a custom hook, and why will you create a custom hook?</Card.Title>
                                <Card.Text>
                                    A custom hook is a reusable function that contains logic which can be shared across multiple React components. The idea behind custom hooks is to separate out and share common functionality between components, rather than duplicating the same logic in each component.
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    To create a custom hook, you simply write a function that uses React hooks (such as useState, useEffect, useContext, etc.) and returns an object that can be used by the components that call it.
                                    <br />
                                    <br />
                                    Overall, custom hooks are a powerful tool that can help you write cleaner, more maintainable React code.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

            <div className='text-center mt-5'>
                <Button variant='primary' onClick={downloadPDF} disabled={!(loader===false)}>
                    {loader?(
                        <span>Downloading</span>):(<span>Download</span>)

                    }
                </Button>
            </div>
            

        </div>
    );
};

export default Blogs;

