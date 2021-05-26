import './loading-with-title.scss';

import * as React from 'react';
import ReactLoading, { LoadingType } from 'react-loading';

interface LoadingProps {
    type: LoadingType,
    color: string,
    height?: number,
    width?: number,
    title: string,
}

const LoadingWithTitle: React.FC<LoadingProps> = ({ type, color, height, width, title }) => (
    <section className="loading-with-title">
        <h3 className="loading-with-title-text">
            {title}
        </h3>
        <article className="loading-with-title-content">
            <ReactLoading
              type={type}
              color={color}
              height={height}
              width={width}
            />
            </article>
    </section>
);

export default LoadingWithTitle;
