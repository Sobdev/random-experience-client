import PropTypes from 'prop-types';

export const InfoBox = ({ title, description }) => {
    return (
        <div className="info-box mb-5">
            <h1 className='h1-gradient text-center'>{title}</h1>
            <p className='text-center' style={{ fontStyle: 'italic' }}>{description}</p>
        </div>
    );
};

InfoBox.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};