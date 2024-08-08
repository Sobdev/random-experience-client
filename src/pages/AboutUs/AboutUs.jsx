import Confetti from "react-confetti"
import { InfoBox } from '../../components/InfoBox/InfoBox';
import { Container, Card, Row, Col } from 'react-bootstrap';

export const AboutUs = () => {
    return (
        <Container className='mt-5 mb-5'>
            <Confetti />
            <InfoBox
                title="Hey its us! 👋"
                description="This project was a collaborative effort to create a modern web application using technologies such as React, Bootstrap, Node.js, Express and MongoDB. Our goal was to build a seamless and user-friendly experience for our users using all our knowledge adquired during our bootcamp in IronHack Madrid."
            />
            <Row>
                <Col md={4}>
                    <Card className="mt-2 pb-5">
                        <InfoBox
                            image="https://res.cloudinary.com/drpdy7tju/image/upload/v1717609633/1653902628078_qqcjnx.jpg"
                            name="Cristina Colomoiets"
                            subtle="Git merge Queen"
                            infoCentered="Cristina is a talented frontend developer passionate about crafting stunning webs."
                        />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mt-2 pb-5">
                        <InfoBox
                            image="https://res.cloudinary.com/drpdy7tju/image/upload/v1717609633/1716231063988_jqcd31.jpg"
                            name="Samuel Pérez Morcillo"
                            subtle="Monster DB"
                            infoCentered="Samuel is our backend wizard, ensuring our server-side logic runs smoothly and efficiently."
                        />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mt-2 pb-5">
                        <InfoBox
                            image="https://res.cloudinary.com/drpdy7tju/image/upload/v1717609947/Sin_ti%CC%81tulo_500_x_500_px_300_x_300_px_webpid.png"
                            name="Adrian Sobota Matuszak"
                            subtle="React Monster Bootstrap"
                            infoCentered="Adrian is a versatile full stack developer, bridging the gap between front and backend."
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
