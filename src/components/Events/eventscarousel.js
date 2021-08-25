import React from "react"

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from "react-icons/io"




export default class Carousel extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            
            items:this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = this.state.active - 1 ; i < this.state.active + 2; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
       
        items.push(<Item key={index} title={this.state.items[index].title} img={this.state.items[index].img}  level={level} />)
            console.log(this.state.items[index].img)
        }
        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    
    render() {
      // document.getElementsByClassName('level0')[0].append('<button>Click Me</button>')
        return(
            // className="absolute inset-0 mx-auto mb-auto mt-72 "
            <div id="carousel">
                <div className="arrow arrow-left" onClick={this.leftClick}><IoIosArrowDropleftCircle className="arrow-left"></IoIosArrowDropleftCircle></div>
                 <CSSTransitionGroup 
                    transitionName={this.state.direction}>
                    {this.generateItems()}
                </CSSTransitionGroup>
                
                <div className="arrow arrow-right" onClick={this.rightClick}><IoIosArrowDroprightCircle className="arrow-right"></IoIosArrowDroprightCircle></div>
            </div>
        )
    }
}

class Item extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level,
            title:this.props.title,
            img:this.props.img
        }
    }
    
    render() {
        const className = 'item level' + this.props.level 
        const innerclass='innerlevel'+this.props.level
        
            
        return(
          
            <div className={className}>
    
              <div className={innerclass}>
               <h1 className="text-lg pt-5 eventhead">{this.state.title}</h1>
               <img className="eventimg" src={require(`../../images/${this.state.img}.png`).default} alt="noo"></img>
               
              
              </div>
                </div>
          
        )
    }
}

