import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import About from '../About/About';
import SingleCourse from '../SingleCourse/SingleCourse';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shubhomedia/react-academia/main/src/Assets/course_data.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);

    return (
        <div>
            <Slider></Slider>
            <About></About>
            <h2>Our Courses</h2>
            <div className='container'>
                <div className='row gx-5 gy-5'>
                    {
                        course.map(course =>
                            <SingleCourse
                                key={course.id}
                                course={course}>
                            </SingleCourse>
                        )
                    }

                </div>
            </div>
        </div >
    );
};

export default Home;