import React from 'react'
import './style.scss';

const Home = () => {
    return (
        <section className='home-wrapper'>
            <div className='home-content'>
                <h2>Hi! I am software developer</h2>
                <p>Transforming Ideas into Seamless and visually stunning web solutions</p>
            </div>

            <div className='home-dev-img'>
                <img src='./dev.svg' alt='developer' />
            </div>

        </section>
    );
}

export default Home;