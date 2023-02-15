import React from 'react';

function Easybank() {

    return(
        <>
            <div className="header">
                <img src="./images/logo.svg" alt="" />
                <ul id="nav-bar">
                    <li className="header-list-element">Home</li>
                    <li className="header-list-element">About</li>
                    <li className="header-list-element">Contact</li>
                    <li className="header-list-element">Blog</li>
                    <li className="header-list-element">Careers</li>
                </ul>
                <button className="request-invite">Request Invite</button>
                </div>
                <div className="cont">
                <div className="top-bar">
                    <div className="top-bar-banner">
                    <h1>Next generation digital banking</h1>
                    <p>
                        Take your financial life online. Your Easybank account will be a
                        one-stop-shop for spending, saving, budgeting, investing, and much
                        more.
                    </p>
                    <button className="request-invite">Request Invite</button>
                    </div>
                    <div className="bg-desktop">
                    <img className="top-image-1" src="./images/bg-intro-desktop.svg" alt="" />
                    <img className="top-image-2" src="./images/image-mockups.png" alt="" />
                    </div>
                </div>
                <div className="middle-bar">
                    <div className="middle-bar-title">
                    <h2>Why choose Easybank?</h2>
                    <p>
                        We leverage Open banking to turn your bank account into your
                        financial hub. Control your finances like never before
                    </p>
                    </div>
                    <div className="middle-showcase">
                    <div>
                        <img src="./images/icon-online.svg" alt="" />
                        <h3>Online Banking</h3>
                        <p>
                        Our modern web and mobile applications allow you to keep track of
                        your finances wherever you are in the world
                        </p>
                    </div>
                    <div>
                        <img src="./images/icon-budgeting.svg" alt="" />
                        <h3>Simple Budgeting</h3>
                        <p>
                        See exactly where your money goes each month. Receive
                        notifications when you're close to hitting your limits
                        </p>
                    </div>
                    <div>
                        <img src="./images/icon-onboarding.svg" alt="" />
                        <h3>Fast Onboarding</h3>
                        <p>
                        We don't do branches. Open your account in minutes online and
                        start taking control of your finances right away
                        </p>
                    </div>
                    <div>
                        <img src="./images/icon-api.svg" alt="" />
                        <h3>Open API</h3>
                        <p>
                        Manage your savings, investments, pension, and much more from one
                        account. Tracking your money has never been easier
                        </p>
                    </div>
                    </div>
                </div>
                <div className="bottom-bar">
                    <h2>Latest Articles</h2>
                    <div className="bottom-showcase">
                    <div className="showcase-element">
                        <img src="./images/image-currency.jpg" alt="" />
                        <div>
                        <h6>By Clarie Robinson</h6>
                        <h4>Receive money in any currency with no fees</h4>
                        <p>
                            The world is getting smaller and we're becoming more mobile. So
                            why should you be forced to only receive money in a single …
                        </p>
                        </div>
                    </div>
                    <div className="showcase-element">
                        <img src="./images/image-restaurant.jpg" alt="" />
                        <div>
                        <h6>By Wilson Hutton</h6>
                        <h4>Treat yourself without worrying about money</h4>
                        <p>
                            Our simple budgeting feature allows you to separate out your
                            spending and set realistic limits each month. That means you …
                        </p>
                        </div>
                    </div>
                    <div className="showcase-element">
                        <img src="./images/image-plane.jpg" alt="" />
                        <div>
                        <h6>By Wilson Hutton</h6>
                        <h4>Take your Easybank card wherever you go</h4>
                        <p>
                            We want you to enjoy your travels. This is why we don't charge
                            any fees on purchases while you're abroad. We'll even show you …
                        </p>
                        </div>
                    </div>
                    <div className="showcase-element">
                        <img src="./images/image-confetti.jpg" alt="" />
                        <div>
                        <h6>By Wilson Hutton</h6>
                        <h4>Our invite-only Beta accounts are now live!</h4>
                        <p>
                            After a lot of hard work by the whole team, we're excited to
                            launch our closed beta. It's easy to request an invite through
                            the site ...
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer">
                <div className="left-footer">
                    <img src="./images/logo.svg" alt="" />
                    <ul>
                    <li>
                        <a href="https://facebook.com">
                        <img src="./images/icon-facebook.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com"
                        ><img src="./images/icon-youtube.svg" alt=""
                        /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com"
                        ><img src="./images/icon-twitter.svg" alt=""
                        /></a>
                    </li>
                    <li>
                        <a href="https://pinterest.com"
                        ><img src="./images/icon-pinterest.svg" alt=""
                        /></a>
                    </li>
                    <li>
                        <a href="https://instagram.com"
                        ><img src="./images/icon-instagram.svg" alt=""
                        /></a>
                    </li>
                    </ul>
                </div>
                <div className="middle-footer">
                    <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    </ul>
                    <ul>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="right-footer">
                    <button className="request-invite">Request Invite</button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </>
    );
}

export default Easybank;