import React, { Component } from 'react';
//&#xf082; - fb &#xf09a;
//&#xf081; -tw &#xf099;
class Footer extends Component {
  render() {
    return (
        <footer className="site-foot">
            <div className="foot-nav">
                <ul>
                    <li className="git">
                        <a href="https://github.com/geeeorgio">
                          <i className="fa">&#xf09b;</i>
                        </a>
                    </li>
                    <li className="facebook">
                        <a href="https://www.facebook.com/geeeorgio">
                          <i className="fa">&#xf082;</i>
                        </a>
                    </li>
                    <li className="twitter">
                        <a href="https://twitter.com/GKyryliuk">
                          <i className="fa">&#xf081;</i>
                        </a>
                    </li>
                    <li className="instagram">
                        <a href="https://www.instagram.com/geeeorgio/">
                          <i className="fa">&#xf16d;</i>
                        </a>
                    </li>
                    <li className="telegram">
                        <a href="#">
                          <i className="fa">&#xf2c6;</i>
                        </a>
                    </li>
                </ul>
            </div>                 
        </footer>         
    )
  }  
}     

export default Footer;