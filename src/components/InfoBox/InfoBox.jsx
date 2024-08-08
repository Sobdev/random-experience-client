import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './InfoBox.css';

export const InfoBox = ({ title, image, imageSquare, name, subtle, subtitle, description, info, infoCentered }) => {
    return (
        <div className="info-box">
            <h1 className='h1-gradient text-center'>{title}</h1>
            <Card.Img src={image} className="mb-3" />
            <Card.Img src={imageSquare} className="squareImage mb-3 mx-auto d-block" />
            <Card.Title className="mb-2 text-center">{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-center text-muted">{subtle}</Card.Subtitle>
            <Card.Subtitle className="fs-4 mb-2 text-center text-uppercase">{subtitle}</Card.Subtitle>
            <Card.Text className="description mb-2 text-center fst-italic">{description}</Card.Text>
            <Card.Text className="mb-2 ps-5">{info}</Card.Text>
            <Card.Text className="ps-2 pe-2 text-center">{infoCentered}</Card.Text>
        </div>
    );
};

InfoBox.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    imageSquare: PropTypes.string,
    name: PropTypes.string,
    subtle: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    info: PropTypes.string,
    infoCentered: PropTypes.string
};
