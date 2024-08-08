import PackageList from '../../components/PackageList/PackageList'
import InfoBoxHDW from '../../components/InfoBoxHDW/InfoBoxHDW'
import InfoBoxIncluded from '../../components/InfoBoxIncluded/InfoBoxIncluded'
import { Container, Row, Col } from 'react-bootstrap'
import { InfoBox } from '../../components/InfoBox/InfoBox'

const HomePage = () => {
    return (
        <>
            <video autoPlay loop playsInline muted className="mb-5 w-100 h-80 video">
                <source src="https://res.cloudinary.com/drpdy7tju/video/upload/v1717662947/CleanShot_2024-06-06_at_10.34.05_rooa28.mp4" type="video/mp4" />
            </video>
            <Container>
                <InfoBox
                    title="How does TripBliss work?"
                />
                <Row>
                    <Col>
                        <InfoBox
                            imageSquare="https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/select_vhhqjf.png"
                            subtitle="Step 1"
                            infoCentered="We offer you to know our promotions within Standard, Premium and Delux Packages that have different experiences."
                        />
                    </Col>
                    <Col>
                        <InfoBox
                            imageSquare="https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/calendar_mrnd4b.png"
                            subtitle="Step 2"
                            infoCentered="Choose and buy the Package that you liked the most and that seemed to correspond to your tastes and expectations."
                        />
                    </Col>
                    <Col>
                        <InfoBox
                            imageSquare="https://res.cloudinary.com/drpdy7tju/image/upload/v1717350206/person_ftbfu4.png"
                            subtitle="Step 3"
                            infoCentered="Once you have purchased the Package you can play your lottery and luck! Click to get your unforgettable experience and enjoy it!"
                        />
                    </Col>
                </Row>
                <InfoBox
                    title="What is included?"
                />
                <Row>
                    <Col>
                        <InfoBox
                            imageSquare="https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/avion_gnvrdd.png"
                            subtitle="Surprise Flights"
                            infoCentered="Round trip flights"
                        />
                    </Col>
                    <Col>
                        <InfoBox
                            imageSquare="https://res.cloudinary.com/drpdy7tju/image/upload/v1717350206/hotel_ufagcy.png"
                            subtitle="Hotels"
                            infoCentered="Choose and buy the Package that you liked the most and that seemed to correspond to your tastes and expectations."
                        />
                    </Col>
                    <Col>
                        <InfoBox
                            imageSquare="https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/ubi_jnl3t2.png"
                            subtitle="Places"
                            infoCentered="Places and excursions prepared to visit"
                        />
                    </Col>
                    <Col>
                        <InfoBox
                            imageSquare="https://res.cloudinary.com/drpdy7tju/image/upload/v1717350206/person_ftbfu4.png"
                            subtitle="Surprise Trip!"
                            infoCentered="You don't know what you're getting until you buy a random experience. Let yourself go!"
                        />
                    </Col>
                </Row>
                <div id="all-packages">
                    <PackageList />
                </div>
            </Container >
        </>

    )
}
export default HomePage


