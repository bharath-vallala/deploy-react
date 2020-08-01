import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import "./disp.css"

export class DisplayQA extends Component {

    constructor(props) {
        super(props);

      }

    componentDidUpdate(){
        console.log(this.props.list1);
    }
   
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }

    renderQA=()=>{
        const { activeIndex } = this.state

        return this.props.list1.map((item ,i)=>{
            return(
                <div className="cont-item">
                    <Accordion>
                        <Accordion.Title
                        active={activeIndex === i}
                        index={i}
                        onClick={this.handleClick}
                        >
                        
                        <span><strong>Q </strong>{item.question}</span>
                        <Icon name='dropdown' />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === i}>
                        
                        <span><strong>A </strong></span><p>
                            {item.answer}
                        </p>
                        </Accordion.Content>

        
                    </Accordion>
                </div>
            )
        })
    }

    render() {

        return (
            <div className="container">
                <p id="headding">QUESTION AND ANSWER</p>
                {this.renderQA()}
               
            </div>
        )
    }
}

export default DisplayQA
