import React from 'react';
import './img/bg-image.jpg';

function Home(){
    return(
        <>
            <img className="bg-image" src={require("./img/bg-image.jpg")} alt="" />
            <div className="main-content">
                    {/* {/* <div>
                        <h1>Adam Lech</h1>
                        <h2>Junior Front-End Developer</h2>
                    </div>
                    <h3>Hello, my name is Adam and I'm learning to become a Full-stack developer. <br />I became interested in this field since high school where I first started learning HTML, CSS and JS. Now I'm in college which I'll complete with an engineering degree in front-end.<br /> Currently, i'm learning React, Sass and PHP laravel.</h3> */}
                    <h1>Hello, It's nice to meet You. <br />My name is Adam and I'm front-end developer</h1>
            </div>
        </>
    )
}

export default Home;