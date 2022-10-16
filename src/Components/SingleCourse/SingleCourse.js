import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleCourse.css';

const SingleCourse = (props) => {
    const { title, fee, description, thumb } = props.course;
    return (
        <div className="col-md-4">
            <Card>
                <h4>Title: {title}</h4>
                <img src={thumb} alt="" />
                <p>{description}</p>
                <h4>Fee: {fee} $</h4>
            </Card>
        </div>
    );
};

export default SingleCourse;