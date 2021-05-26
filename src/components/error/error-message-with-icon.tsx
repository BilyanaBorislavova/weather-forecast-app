import './error-message-with-icon.scss';

import * as React from 'react';
import ErrorMessage from './error-message';

interface ErrorMessageWithIconProps {
    message: string,
    icon: React.ReactNode,
}

const ErrorMessageWithIcon: React.FC<ErrorMessageWithIconProps> = ({ message, icon }) => (
    <article className="error-message-with-icon">
        <ErrorMessage message={message} />
        {icon}
    </article>
);

export default ErrorMessageWithIcon;
