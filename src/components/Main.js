import React, { Component } from 'react';

const Testemonial = (props) => {

    //let ovation;

    const list = props.array;
    //const randomIdx = Math.floor(Math.random()*list.length);
    //list.forEach((item,idx) => {if (idx === randomIdx) {return ovation = item}});

    return ( 
        <div className="ovation-col">
            <h3>References</h3>
        {list.map((ovation,idx) =>
        <div key={ovation.id} className="main-testemonial">
            <img src={ovation.img} alt="Avatar" />
            <p><span className="ovation-author">{ovation.author}</span></p>
            <hr className="test-hr"/>
            <p className="ovation-content"><i>{ovation.content}</i></p>         
        </div> )}
        </div>  
    )
} 

const Quotes = (props) => {

    const list = props.arr; 
    const randomIdx = Math.floor(Math.random()*(list.length)); 
    let quote;
    list.forEach((item,idx) => {if (idx === randomIdx) {return quote = item}}); 

    return (
         
        <div key={quote.id} id="ct">
            <div className="corner "id="left_top"></div>
            <div className="corner" id="left_bottom"></div>
            <div className="corner" id="right_top"></div>
            <div className="corner" id="right_bottom"></div>
                <span className="quote-author">{quote.author}</span>
            <blockquote className="random-quote">
                <p className="quote-content">&ldquo;{quote.content}&rdquo; </p>
            </blockquote>
        </div>

    )                   
}

const Iam = (props) => {

    return (

        <div className="main-intro"> 
            <div className="main-photo">               
                <img src={process.env.PUBLIC_URL + '/cards/q.png'} alt="hong kong" />
            </div>            
            <h3>Welcome</h3>
            <p> My name is <b>Georgiy Kirilyuk</b> and i'm gonna be a <b>billionaire</b> soon.</p> 
            <p>Just stay tuned and check the updates</p>
        </div> 

    )

}

class Main extends Component {

    render() {
      return (
        <div className="container-main">
            <Iam />
            <hr />
            <Quotes arr={this.props.info[0]} />
            <hr />   
            <Testemonial array={this.props.info[1]} />    
        </div>    
      )
    }  
}     


export default Main;