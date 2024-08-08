import { Row, Col, Container } from "react-bootstrap"
import './InfoBoxHDW.css'

const InfoBoxItem = ({ icon, step, description }) => (
    <Col md={4}>
        <div className="box-info">
            <img src={icon} alt={`Step ${step} icon`} className="icons" />
            <h5 className="sub-title">Step {step}</h5>
            <p>{description}</p>
        </div>
    </Col>
)

const InfoBoxHDW = () => {
    const steps = [
        {
            icon: 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/select_vhhqjf.png',
            step: 1,
            description: 'We offer you to know our promotions within Standard, Premium and Delux Packages that have different experiences.'
        },
        {
            icon: 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/calendar_mrnd4b.png',
            step: 2,
            description: 'Choose and buy the Package that you liked the most and that seemed to correspond to your tastes and expectations.'
        },
        {
            icon: 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350206/person_ftbfu4.png',
            step: 3,
            description: 'Once you have purchased the Package you can play your lottery and luck! Click to get your unforgettable experience and enjoy it!'
        }
    ]

    return (
        <div className="InfoBoxHDW">
            <h1 className="title h1-gradient">How does <span className="ttl-brand">TripBliss</span> work?</h1>
            <Container>
                <Row>
                    {steps.map(({ icon, step, description }) => (
                        <InfoBoxItem key={step} icon={icon} step={step} description={description} />
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default InfoBoxHDW