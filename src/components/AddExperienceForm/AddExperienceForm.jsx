import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom"
import { useReducer, useState } from "react"
import GeoForm from "../GeoForm/GeoForm"
import LocationMap from "../LocationMap/LocationMap"
import experiencesServices from '../../services/experiences.services'
import uploadServices from '../../services/upload.services'
import { toast } from 'sonner'
import './AddExperienceForm.css'

const initialState = {
    country: "",
    hotel: "",
    places: "",
    package: "",
    imageUrl: "",
    imageLinks: [],
    location: {
        type: "Point",
        coordinates: []
    },
    geocode: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value }
        case 'ADD_IMAGE_LINK':
            return { ...state, imageLinks: [...state.imageLinks, action.value] }
        case 'REMOVE_IMAGE_LINK':
            return { ...state, imageLinks: state.imageLinks.filter((_, i) => i !== action.index) }
        case 'SET_LOCATION':
            return { ...state, location: action.location, geocode: action.geocode }
        case 'SET_IMAGE_URL':
            return { ...state, imageUrl: action.url }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const AddExpForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [imagePreview, setImagePreview] = useState('')
    const [imageLink, setImageLink] = useState('')
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        dispatch({ type: 'SET_FIELD', field: name, value })
    }

    const handleImageLinkChange = e => {
        setImageLink(e.target.value)
    }

    const handleAddImageLink = () => {
        if (imageLink) {
            dispatch({ type: 'ADD_IMAGE_LINK', value: imageLink })
            setImageLink('')
            toast.info('Image URL added')
        } else {
            toast.error('Image URL cannot be empty')
        }
    }

    const handleRemoveImageLink = (index) => {
        dispatch({ type: 'REMOVE_IMAGE_LINK', index })
        toast.info('Image URL removed')
    }

    const handleLocationSelect = (location) => {
        dispatch({
            type: 'SET_LOCATION',
            location: {
                type: "Point",
                coordinates: [location.longitude, location.latitude]
            },
            geocode: location.address
        })
    }

    const handleFileUpload = e => {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices.uploadimage(formData)
            .then(({ data }) => {
                dispatch({ type: 'SET_IMAGE_URL', url: data.cloudinary_url })
                setImagePreview(data.cloudinary_url)
                toast.info('Cover image uploaded')
            })
            .catch(err => {
                console.log(err)
                toast.error('Cover image upload failed')
            })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (state.country && state.hotel && state.places && state.package) {
            experiencesServices.createExperience(state)
                .then(() => {
                    toast.success('Experience created successfully!')
                    navigate('/experiences/all')
                })
                .catch(err => {
                    console.log(err)
                    toast.error('Something went wrong with the experience creation')
                })
        } else {
            toast.error('Please fill in all required fields')
        }
    }

    const handleClear = () => {
        dispatch({ type: 'RESET' })
        setImagePreview('')
        toast.info('Fields have been cleared')
    }

    const handleCancel = () => {
        toast.info('Operation cancelled')
        navigate('/experiences/all')
    }

    return (
        <div className="addExpForm">
            <Form onSubmit={handleFormSubmit} className="mt-3">
                <GeoForm onLocationSelect={handleLocationSelect} />
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="latitude">
                            <Form.Control
                                type="number"
                                name="latitude"
                                placeholder="Waiting for an address to display the latitude..."
                                value={state.location.coordinates[1]}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="longitude">
                            <Form.Control
                                type="number"
                                name="longitude"
                                placeholder="Waiting for an address to display the latitude..."
                                value={state.location.coordinates[0]}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {state.location.coordinates.length > 0 && (
                    <LocationMap address={{ latitude: state.location.coordinates[1], longitude: state.location.coordinates[0] }} />
                )}

                <Form.Group className="mb-3" controlId="package">
                    <Form.Control
                        placeholder="PackageID"
                        type="text"
                        name="package"
                        value={state.package}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Control
                                placeholder="Country"
                                type="text"
                                name="country"
                                value={state.country}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="hotel">
                            <Form.Control
                                placeholder="Hotel name"
                                type="text"
                                name='hotel'
                                value={state.hotel}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="places">
                    <Form.Control
                        placeholder="Places to see"
                        type="text"
                        name="places"
                        value={state.places}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Control
                                placeholder="Cover image"
                                type="file"
                                name="imageUrl"
                                onChange={handleFileUpload}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="imageLinks">
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Image URLS"
                                        value={imageLink}
                                        onChange={handleImageLinkChange}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button variant="primary" onClick={handleAddImageLink} className="mt-2">Add Image Link</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>

                <ul className="image-links-list">
                    {state.imageLinks.map((link, index) => (
                        <li key={index} className="image-link-item">
                            <Button variant="danger" size="sm" onClick={() => handleRemoveImageLink(index)} className="remove-button">Remove</Button>
                            <span className="image-link-text">{link}</span>
                        </li>
                    ))}
                </ul>
                <Row>
                    <Col>
                        <Button type="submit" className="btn-primary w-100 mb-4">
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" type="button" className="w-100 mb-4" onClick={handleClear}>
                            Clear
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/'>
                            <Button variant="dark" type="button" className="btn-neutral w-100 mb-4" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AddExpForm
