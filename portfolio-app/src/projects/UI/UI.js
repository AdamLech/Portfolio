import React from 'react';
// import {useRef} from 'react';
import './UI.scss';

function UI() {
    return(
        <>
            <div className="cont">
                <div className="left">
                    <div className="login-info">
                        <img src="https://unsplash.it/500/500" alt="" className="icon" width="60px" />
                        <div className="user-info">
                        <h1>Unknown User</h1>
                        <h2>Log in</h2>
                        </div>
                    </div>
                    <div className="login-in">
                        <input type="text" placeholder="Login" />
                        <input type="password" placeholder="Password" />
                        <input type="button" value="Log in" />
                        <input type="button" value="Sign up" />
                    </div>
                <div className="fpass">Forgot password? <a href="">Click here</a></div>
                </div>
                <div className="right">
                <div className="weather">
                    <h1>Weather</h1>
                    <div className="weather-body">
                    <div id="temp">27</div>
                    <div id="weather-day">27 Sep</div>
                    <div id="weather-array">

                    </div>
                    <h1 id="weather-month"></h1>
                    </div>
                </div>
                <div className="contacts">
                    <h1>Contacts</h1>
                    <div className="contacts-wraper">
                    <img src="https://unsplash.it/150/150" alt="" />
                    <img src="https://unsplash.it/400/400" alt="" />
                    <img src="https://unsplash.it/300/300" alt="" />
                    <img src="https://unsplash.it/200/200" alt="" />
                    <img src="https://unsplash.it/600/600" alt="" />
                    <img src="https://unsplash.it/250/250" alt="" />
                    <img src="https://unsplash.it/100/100" alt="" />
                    <img src="https://unsplash.it/500/500" alt="" />
                    <img src="https://unsplash.it/500/500" alt="" />
                    </div>
                </div>
                <div className="mail">
                    <h1>Messages</h1>
                    <div id="messages">
                    <div id="mail-body">
                        <div id="contact-name"><img src="https://unsplash.it/500/500" alt="" />
                        <p>John Doe</p>
                        </div>
                        <div id="title">RE: Project</div>
                        <div id="mess">I think we should change the way we're looking at this project</div>
                        <div id="date">Today</div>
                    </div>
                    <div id="mail-body">
                        <div id="contact-name"><img src="https://unsplash.it/400/400" alt="" />
                        <p>Mark Smith</p>
                        </div>
                        <div id="title">Coffee break</div>
                        <div id="mess">Hey, I'd like to talk to You during coffee break</div>
                        <div id="date">4/09</div>
                    </div>
                    <div id="mail-body">
                        <div id="contact-name"><img src="https://unsplash.it/400/400" alt="" />
                        <p>Spam Bot</p>
                        </div>
                        <div id="title">YOU WON!</div>
                        <div id="mess">You are THE FIRST to receive a grand prize of 100k euro! Just CLICK HERE</div>
                        <div id="date">Today</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default UI;