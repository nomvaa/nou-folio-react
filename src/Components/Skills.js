import '../index.css';
import img from '../Images/img.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { React, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import feathers from '../Images/feathers.png';

function Homepage() {

    const el = useRef([]);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['women', 'hmong', 'coder', 'nou'],
            typeSpeed: 80,
            loop: true,
            backSpeed: 80,
            backDelay: 1500
        });

        return () => {
            typed.destroy();
        };
    }, []);




    return (<>
        <Container>
            <div className="wrapper">
                <Row>
                    <div className='cols cols0'>
                        <Col>
                            <span className='topline'>Hello</span>
                            <h1>I'm <span ref={el} className='multiText'></span></h1>
                            <p>Nou obtained her Java Full Stack Web Development certificate from Dev10 where she currently works as an Associate Software Developer. With a passion to learn and create, she is looking to apply her creative, analytical and problem solving abilities to a development team. </p>
                            <div className='btns'>
                                <button>More about Me</button>
                            </div>
                        </Col>
                    </div>
                    <Col>
                        <div className='cols cols1'>
                            <div className='imgBox'>
                                {/* <img src="" id="splash" /> */}
                                <img src={img} alt="profilePic" />
                            </div>
                            <div className='pattern'><img src={feathers} alt='feathers' /></div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </>)

}

export default Homepage;