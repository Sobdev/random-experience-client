import { Container, Card, Row, Col } from 'react-bootstrap';
import './AboutUs.css';
import Confetti from "react-confetti"
import { InfoBox } from '../../components/InfoBox/InfoBox';

const teamMembers = [
    {
        name: "Cristina Colomoiets",
        role: "Git merge Queen",
        image: "https://res.cloudinary.com/drpdy7tju/image/upload/v1717609633/1653902628078_qqcjnx.jpg",
        description: "Cristina is a talented frontend developer passionate about crafting stunning web experiences."
    },
    {
        name: "Samuel Pérez Morcillo",
        role: "Monster DB",
        image: "https://res.cloudinary.com/drpdy7tju/image/upload/v1717609633/1716231063988_jqcd31.jpg",
        description: "Samuel is our backend wizard, ensuring our server-side logic runs smoothly and efficiently."
    },
    {
        name: "Adrian Sobota Matuszak",
        role: "React Monster Bootstrap",
        image: "https://res.cloudinary.com/drpdy7tju/image/upload/v1717609947/Sin_ti%CC%81tulo_500_x_500_px_300_x_300_px_webpid.png",
        description: "Adrian is a versatile full stack developer, bridging the gap between front and backend."
    }
];

const AboutUs = () => {
    return (
        <Container className="about-us-container">
            <Confetti />
            <InfoBox title="Hey its us! 👋" description="This project was a collaborative effort to create a modern web application using technologies such as React, Bootstrap, Node.js, Express and MongoDB. Our goal was to build a seamless and user-friendly experience for our users using all our knowledge adquired during our bootcamp in IronHack Madrid." />
            <Row className="justify-content-center">
                {teamMembers.map((member, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="team-member-card text-center">
                            <Card.Img variant="top" src={member.image} className="team-member-image mx-auto" />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                                <Card.Text>{member.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>



    );
};

export default AboutUs
