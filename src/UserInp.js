import React from "react"
import "./userInp.css"
import DIsplayQA from "./DisplayQA"


 

class UserInp extends React.Component{

    constructor(props){
        super(props)
        this.state={listQA:[],currentQA:{question:"",answer:"",key:""}}
    }
    addList=(e)=>{

       const QA=this.state.currentQA;
       QA.key=Date.now();
       console.log(QA)
       console.log(this.state.listQA)
       if(QA.question!=="" && QA.answer!=="" && QA.key!==""){
           const data=[...this.state.listQA, QA]
           console.log(data)
           this.setState({listQA:data,currentQA:{question:"",answer:""}});

       }
       console.log(this.state.listQA)


        

    }



   questionChange=(e)=>{
        this.setState({currentQA:{question:e.target.value,answer:this.state.currentQA.answer}})
    }

    answerChange=(e)=>{
        this.setState({currentQA:{question:this.state.currentQA.question,answer:e.target.value}})
        


    }

    deleteItem=(key)=>{
        console.log(key);
        let list= this.state.listQA.filter((item)=>{
            return item.key !== key;
        })
       
        this.setState({listQA:list});
        console.log(this.state.listQA)


    }

    resizeInput=(e)=>{
        console.log(e.target.style.width)
        
       
    }




    input=()=>{
        return(
            <div>
                <div className="user-input">
                <span><strong>Q.</strong><input className="input-field"
                onKeyPress={this.resizeInput}
                    type="text" placeholder="write question here" value={this.state.currentQA.question} onChange={this.questionChange}></input></span>
                <span><strong>A.</strong> <input className="input-field" type="text" placeholder="write answer here" value={this.state.currentQA.answer} onChange={this.answerChange}></input> </span>
                
                <div class="btn" onClick={this.addList}><i class="fa fa-plus-circle  fa-2x" aria-hidden="true"></i></div>

                </div>
                
            </div>
        )
    }

    listOfQA=()=>{
        if(this.state.listQA.length > 0){
            console.log(this.state.listQA)
           return this.state.listQA.map((obj)=>{
               console.log(obj)
               
                return (
                    <div className="flex-cont-2">

                   
                    <div className="user-input">
                        <span><strong>Q.</strong><p className="input-field" readOnly value={obj.question}>{obj.question}</p></span>
                        <span><strong>A.</strong><p className="input-field" readOnly value={obj.answer}>{obj.answer}</p></span>
                    </div>
                    <div className="btn-del" onClick={()=>{ this.deleteItem(obj.key)}}>
                        <i class="fa fa-trash fa-1x" aria-hidden="true"></i>

                        </div>
                    </div>
                )


            })

        }
        
    }

    render() {

        return(
            <div className="flex-container">
                <div className="headdings">
                    <p className="head-item" id="h1">QUESTION AND ANSWERS</p>
                    <p className="head-item" id="h2">write the question and answers that come up</p>
                </div>
                <div>{this.listOfQA()}</div>
                <div>{this.input()}</div>
                <DIsplayQA className="disp" list1= {this.state.listQA} ></DIsplayQA>

        </div>
        )
      }
}

export default UserInp;