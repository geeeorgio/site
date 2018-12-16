import React, { Component } from 'react';
import './styles.css';
import './resume.css';
import './lightTheme.css';
import { list, array } from './data';
import { Header, Main, Projects, Resume, About, Footer, NotFound } from './components/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
    super(props);
        this.state = {
            info: [],              
        }                 
    //this.isResponsive = this.isResponsive.bind(this);  
    }
    
   /* isResponsive() {
        let target = document.getElementById('resp')
        if (target.className === "topnav") {
            target.className += "-responsive";
        } else {
          target.className = "topnav";
        }  
    } */

    getQuotes() {
        let x = [list,array]
        this.setState({ info: x });
    }

    componentWillMount() {
        this.getQuotes()
    }

    render() {
	    return (
        <Router>    
          <div className="container">
              <Header /*onResponse={this.isResponsive}*/ />
            <div className="content"> 
                <Switch>
                  <Route exact path="/" render={() => <Main info={this.state.info} /> } />
                  <Route exact path="/about" render={() => <About />} />
                  <Route exact path="/cv" render={() => <Resume />} />
                  <Route exact path="/projects" render={() => <Projects />} />                        
                  <Route component={NotFound} />
                </Switch>       
            </div>
              <Footer />                                            
          </div>    
        </Router>          
      )
    }
}

export default App;