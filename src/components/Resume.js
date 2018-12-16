import React, { Component } from 'react';

class Resume extends Component {
  
    render() {
    	return (
          
            <div className="container-cv">
                <div className="c-main-container  js-main-container">
            
            <section className="o-section o-section--header  t-section  t-section--header">
                <div className="c-header">

                    <div className="o-section__header-bg  t-section__header"></div>
                    <div className="o-section__content-bg  t-section__content"></div>

                    <div className="o-container">
                        <div className="o-section__container">

                            <header className="o-section__header  c-header__header  t-section__header">
                                <div className="c-header__inner-header">

                                    <div className="c-header__avatar">
                                        <div className="a-header  c-avatar">
                                            <img className="c-avatar__img" src={process.env.PUBLIC_URL + '/cards/q.png'} alt=""/>
                                        </div>
                                    </div>

                                </div>
                            </header>

                            <div className="o-section__content  c-header__content  t-section__content">
                                <div className="c-header__inner-content">

                                    <div className="c-header__top">

                                        <div className="c-header__brand">

                                            <div className="c-brand">
                                                <h1 className="c-brand__title  t-title">
                                                    <span className="c-brand__sizer">
                                                        <span className="a-header  c-brand__first-word  t-title__first-word">
                                                            Georgiy
                                                        </span>
                                                        <span className="a-header  c-brand__second-word  t-title__second-word">
                                                            Kirilyuk
                                                        </span>
                                                    </span>
                                                </h1>
                                                <h2 className="a-header  c-brand__sub-title  t-sub-title">
                                                    <span className="c-brand__sizer">
                                                           Front-end Web Developer
                                                    </span>
                                                </h2>
                                            </div>
                                         </div>

                                        <ul className="c-header__social-buttons  c-social-buttons">
                                            <li className="a-header">
                                                <a href="https://www.facebook.com/geeeorgio" target="_blank" rel="noopener noreferrer" className="c-social-button  t-social-button">
                                                    <i className="fa  fa-lg fa-facebook-square"></i>
                                                </a>
                                            </li>
                                            <li className="a-header">
                                                <a href="https://www.instagram.com/geeeorgio/" target="_blank" rel="noopener noreferrer" className="c-social-button  t-social-button">
                                                    <i className="fa  fa-lg  fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="a-header">
                                                <a href="https://twitter.com/GKyryliuk" target="_blank" rel="noopener noreferrer" className="c-social-button  t-social-button">
                                                    <i className="fa  fa-lg  fa-twitter-square"></i>
                                                </a>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="c-header__contact">

                                        <hr className="a-header  c-header__contact-divider" />

                                        <div className="o-grid">

                                            <div className="o-grid__col-md-3  o-grid__col-sm-6">
                                                <div className="a-header  o-content">
                                                    <div className="o-content__body">
                                                        <h4>Location</h4>
                                                        <address>
                                                            Vinnytsia, Ukraine
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="o-grid__col-md-3  o-grid__col-sm-6">
                                                <div className="a-header  o-content">
                                                    <div className="o-content__body">
                                                        <h4>Date of birth</h4>
                                                        <address>
                                                            January 16th, 1994
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="o-grid__col-md-3  o-grid__col-sm-6">
                                                <div className="a-header  o-content">
                                                    <div className="o-content__body">
                                                        <a href="#" target="_blank" rel="noopener noreferrer" className="t-link-container">
                                                            <h4>Web</h4>
                                                            <p>
                                                                <span className="t-link-container__item--blended">
                                                                    example.com
                                                                </span>
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="o-grid__col-md-3  o-grid__col-sm-6">
                                                <div className="a-header  o-content">
                                                    <div className="o-content__body">
                                                        <a href="#" target="_blank" rel="noopener noreferrer" className="t-link-container">
                                                            <h4>Email</h4>
                                                            <p>
                                                                <span className="t-link-container__item--blended">
                                                                    hello@example.com
                                                                </span>
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            <section className="o-section  t-section  ">

                <div className="o-section__header-bg  t-section__header"></div>
                <div className="o-section__content-bg  t-section__content"></div>

                <div className="o-container">
                    <div className="o-section__container">

                        <header className="o-section__header  t-section__header">
                            <div className="o-content">
                                <h2 className="o-section__heading">
                                    Intro
                                </h2>
                                <div className="o-content__body  o-section__description">
                                    What I am all about.
                                </div>
                            </div>
                        </header>

                        <div className="o-section__content  t-section__content  ">
                            
                            <div className="o-content">
                                <div className="c-intro">
                                    <div className="o-content__body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                                            <a href="#" target="_blank" rel="noopener noreferrer">pretium</a>, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus.
                                        </p>
                                        <p>
                                            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            
            <section className="o-section  t-section  ">

                <div className="o-section__header-bg  t-section__header"></div>
                <div className="o-section__content-bg  t-section__content"></div>

                <div className="o-container">
                    <div className="o-section__container">

                        <header className="o-section__header  t-section__header">
                            <div className="o-content">
                                <h2 className="o-section__heading">
                                    Expertise
                                </h2>
                                <div className="o-content__body  o-section__description">
                                    Batman would be jealous.
                                </div>
                            </div>
                        </header>

                        <div className="o-section__content  t-section__content  ">
                            
                            <div className="o-grid">

                                <div className="o-grid__col-sm-6">
                                    <div className="o-media  o-media--block  o-content">
                                        <div className="o-media__figure">
                                            <div className="c-number  t-primary-color">
                                                01
                                            </div>
                                        </div>
                                        <div className="o-media__body  o-content__body">
                                            <h3>HTML5 &amp; CSS3</h3>
                                            <p>
                                                Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="o-grid__col-sm-6">
                                    <div className="o-media  o-media--block  o-content">
                                        <div className="o-media__figure">
                                            <div className="c-number  t-primary-color">
                                                02
                                            </div>
                                        </div>
                                        <div className="o-media__body  o-content__body">
                                            <h3>Front-end Design</h3>
                                            <p>
                                                Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="o-grid__col-sm-6">
                                    <div className="o-media  o-media--block  o-content">
                                        <div className="o-media__figure">
                                            <div className="c-number  t-primary-color">
                                                03
                                            </div>
                                        </div>
                                        <div className="o-media__body  o-content__body">
                                            <h3>JavaScript / ReactJS </h3>
                                            <p>
                                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Vivamus vestibulum nulla cras ornare tristique elit nec ante.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
            
            <section className="o-section  t-section  ">

                <div className="o-section__header-bg  t-section__header"></div>
                <div className="o-section__content-bg  t-section__content"></div>

                <div className="o-container">
                    <div className="o-section__container">

                        <header className="o-section__header  t-section__header">
                            <div className="o-content">
                                <h2 className="o-section__heading">
                                    Skills
                                </h2>
                                <div className="o-content__body  o-section__description">
                                    Progress bars, anyone?
                                </div>
                            </div>
                        </header>

                        <div className="o-section__content  t-section__content  ">
                            
                            <div className="o-grid">

                                <div className="o-grid__col-sm-6">
                                    <div className="o-content">
                                        <div className="o-media  o-media--block">
                                            <div className="o-media__figure">
                                                <div className="c-number  t-primary-color">
                                                    88<small>%</small>
                                                </div>
                                            </div>
                                            <div className="o-media__body">
                                                <h3>HTML5 &amp; CSS3</h3>
                                            </div>
                                        </div>
                                        <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                                            <div className="a-progress-bar c-progress-bar__filler  t-primary-bg" style={{width: '88%'}}></div>
                                        </div>
                                    </div>
                                </div> 

                                <div className="o-grid__col-sm-6">
                                    <div className="o-content">
                                        <div className="o-media  o-media--block">
                                            <div className="o-media__figure">
                                                <div className="c-number  t-primary-color">
                                                    77<small>%</small>
                                                </div>
                                            </div>
                                            <div className="o-media__body">
                                                <h3>SEO</h3>
                                            </div>
                                        </div>
                                        <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                                            <div className="a-progress-bar c-progress-bar__filler  t-primary-bg" style={{width: '77%'}}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="o-grid__col-sm-6">
                                    <div className="o-content">
                                        <div className="o-media  o-media--block">
                                            <div className="o-media__figure">
                                                <div className="c-number  t-primary-color">
                                                    99<small>%</small>
                                                </div>
                                            </div>
                                            <div className="o-media__body">
                                                <h3>JavaScript / ReactJS</h3>
                                            </div>
                                        </div>
                                        <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                                            <div className="a-progress-bar c-progress-bar__filler  t-primary-bg" style={{width: '99%'}}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            
            <section className="o-section  t-section  ">

                <div className="o-section__header-bg  t-section__header"></div>
                <div className="o-section__content-bg  t-section__content"></div>

                <div className="o-container">
                    <div className="o-section__container">

                        <header className="o-section__header  t-section__header">
                            <div className="o-content">
                                <h2 className="o-section__heading">
                                    Experience
                                </h2>
                                <div className="o-content__body  o-section__description">
                                    Yes. I&#39;ve been around.
                                </div>
                            </div>
                        </header>

                        <div className="o-section__content  t-section__content  u-pb-0">
                            
                            <div className="a-experience-timeline  c-timeline  t-border-color">

                                <div className="c-timeline__item">
                                    <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                    <div className="o-content">
                                        <div className="o-grid">
                                            <div className="o-grid__col-md-5">
                                                <div className="c-work__timeframe">
                                                    2015 &ndash; Present
                                                </div>
                                                <h3 className="c-work__heading">
                                                    Unicorn Incubator Inc.
                                                </h3>
                                                <h4 className="c-work__title">
                                                    Senior Interface Designer
                                                </h4>
                                                <div className="c-work__location">
                                                    Portland, OR
                                                </div>
                                            </div>
                                            <div className="o-grid__col-md-7">
                                                <p>
                                                    Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="c-timeline__item">
                                    <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                    <div className="o-content">
                                        <div className="o-grid">
                                            <div className="o-grid__col-md-5">
                                                <div className="c-work__timeframe">
                                                    2013 &ndash; 2015
                                                </div>
                                                <h3 className="c-work__heading">
                                                    California Design Bureau
                                                </h3>
                                                <h4 className="c-work__title">
                                                    Creative Director
                                                </h4>
                                                <div className="c-work__location">
                                                    Cupertino, CA
                                                </div>
                                            </div>
                                            <div className="o-grid__col-md-7">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="c-timeline__item">
                                    <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                    <div className="o-content">
                                        <div className="o-grid">
                                            <div className="o-grid__col-md-5">
                                                <div className="c-work__timeframe">
                                                    2010 &ndash; 2013
                                                </div>
                                                <h3 className="c-work__heading">
                                                    Dreamland Creative
                                                </h3>
                                                <h4 className="c-work__title">
                                                    Front-end Designer
                                                </h4>
                                                <div className="c-work__location">
                                                    New York, NY
                                                </div>
                                            </div>
                                            <div className="o-grid__col-md-7">
                                                <p>
                                                    Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section className="o-section  t-section  ">

                <div className="o-section__header-bg  t-section__header"></div>
                <div className="o-section__content-bg  t-section__content"></div>

                <div className="o-container">
                    <div className="o-section__container">

                        <header className="o-section__header  t-section__header">
                            <div className="o-content">
                                <h2 className="o-section__heading">
                                    Education
                                </h2>
                                <div className="o-content__body  o-section__description">
                                    Philomath.
                                </div>
                            </div>
                        </header>

                        <div className="o-section__content  t-section__content  u-pt-0">
                            
                            <div className="o-content">
                                <div className="a-education-timeline  c-timeline  t-border-color  o-section__full-top-space">
                                    <div className="c-timeline__end  t-border-color"></div>

                                    <div className="c-timeline__item">
                                        <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                        <div className="o-content">
                                            <div className="o-grid">
                                                <div className="o-grid__col-md-5">
                                                    <div className="c-work__timeframe">
                                                        2018 &ndash; present
                                                    </div>
                                                    <h3 className="c-work__heading">
                                                        Self-Taught 
                                                    </h3>
                                                    <h4 className="c-work__title">
                                                        Web Developer
                                                    </h4>
                                                    <div className="c-work__location">
                                                        Ukraine-Poland-China
                                                    </div>
                                                </div>
                                                <div className="o-grid__col-md-7">
                                                    <p>
                                                        Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="c-timeline__item">
                                        <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                        <div className="o-content">
                                            <div className="o-grid">
                                                <div className="o-grid__col-md-5">
                                                    <div className="c-work__timeframe">
                                                        2015 &ndash; 2018
                                                    </div>
                                                    <h3 className="c-work__heading">
                                                        Jan Kochanowski University
                                                    </h3>
                                                    <h4 className="c-work__title">
                                                        Bachelor of Journalism
                                                    </h4>
                                                    <div className="c-work__location">
                                                        Kielce, Poland 
                                                    </div>
                                                </div>
                                                <div className="o-grid__col-md-7">
                                                    <p>
                                                        Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="c-timeline__item">
                                        <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                        <div className="o-content">
                                            <div className="o-grid">
                                                <div className="o-grid__col-md-5">
                                                    <div className="c-work__timeframe">
                                                        2010 &ndash; 2015 
                                                    </div>
                                                    <h3 className="c-work__heading">
                                                        Yaroslav Mudryi National Law University
                                                    </h3>
                                                    <h4 className="c-work__title">
                                                        Master of Law 
                                                    </h4>
                                                    <div className="c-work__location">
                                                        Kharkiv, Ukraine
                                                    </div>
                                                </div>
                                                <div className="o-grid__col-md-7">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>         

        </div>
    </div>                   
    	)
    }
}

export default Resume;