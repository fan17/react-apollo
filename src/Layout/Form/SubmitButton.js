import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = props => {
    const { text } = props;
    return (
        <button type="submit" className="form--submit-button">
            {text}
        </button>
    );
};

SubmitButton.defaultProps = {
    text: 'Send'
};

SubmitButton.propTypes = {
    text: PropTypes.string
};

export default SubmitButton;
