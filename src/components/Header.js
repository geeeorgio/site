import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
    super(props);
        this.state = {
            scrollingLock: false
        }
    //this.handleScroll = this.handleScroll.bind(this);
    this.isResponsive = this.isResponsive.bind(this);    
    }

/*  componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let navbar = document.getElementById("resp");

        if (window.scrollY >= 333) {
            navbar.classList.add("sticky");
            console.log("should lock");
            this.setState({ scrollingLock: true });
        } else {
            navbar.classList.remove("sticky");
            console.log("not locked" );
            this.setState({ scrollingLock: false });
        }
    }    
*/
    isResponsive() {
        let target = document.getElementById('resp')
        if (target.className === "topnav") {
            target.className += "-responsive";
        } else {
          target.className = "topnav";
        }  
    }

  
    render() {

    return (
        <header className="site-header">
            
            {/*<div className="header-banner">
                <img src={process.env.PUBLIC_URL + '/cards/hk.png'} alt="hong kong"/>
            </div>*/}

            <div id="resp" className="topnav">                                       
                <ul>
                    <li className="nav-brand"><a href="/">Georgiy Kirilyuk</a></li>
                    <li className="about"><a href="/about">About</a></li>
                    <li className="resume"><a href="/cv">Resume</a></li>
                    <li className="projects"><a href="/projects">Projects</a></li>  
                </ul>                                                        
                <a href='#' className="icon" style={{fontSize: '1.2em'}} onClick={() => this.isResponsive()}>
                <b>&#9776;</b>  
                </a> 
            </div>
                                
        </header>         
    )
  }  
}     


export default Header;