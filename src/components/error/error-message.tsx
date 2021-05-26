import './error-message.scss';

import * as React from 'react';

interface ErrorMessageProps {
    message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <h2 className="error-message">
        {message}
    </h2>
);

export default ErrorMessage;
