import { useContext, useEffect, useState } from "react"
import packageServices from "../../services/packages.services"
import PackageCard from "../PackageCard/PackageCard"
import { Row, Col } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"

const API_URL = import.meta.env.VITE_API_URL

const PackageList = () => {

    const { loggedUser } = useContext(AuthContext)

    const [packages, setPackages] = useState([])

    useEffect(() => {
        loadAllPackages()
    }, [])

    const loadAllPackages = () => {

        packageServices
            .getAllPackages()
            .then(({ data }) => {
                if (Array.isArray(data)) {
                    setPackages(data)
                } else {
                    console.error("Expected an array but got:", data)
                    setPackages([])
                }
            })
            .catch(err => {
                console.error(err)
                setPackages([])
            })
    }


    return (



        <Row>
            {Array.isArray(packages) && packages.length > 0 ? (
                packages.map(eachPackage => (
                    <Col key={eachPackage._id} xs={12} md={6} lg={4} className="mt-5">
                        <div className={loggedUser ? "" : "text-muted"}>
                            <PackageCard {...eachPackage} isLoggedIn={!!loggedUser} />
                        </div>
                    </Col>
                ))
            ) : (
                <p>No packages available</p>
            )}
        </Row>

    );
}
export default PackageList