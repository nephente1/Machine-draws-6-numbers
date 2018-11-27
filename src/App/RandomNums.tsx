import * as React from 'react';

interface MyComponentProps {
  someArray: Array<number>
}

interface MyComponentState {
  stateNums: Array<number>
  title: string
}

export class RandomNums extends React.Component<MyComponentProps,MyComponentState> {
    numbers:Array<number>;
    
    constructor(props:MyComponentProps){
      super(props);
      this.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
      
      this.state = {
        stateNums: this.props.someArray,
        title: ''
      }
    }
    
  drawNumbers = () => {
    const xxx = this.pickNumbers(this.numbers);
    this.setState({ 
      stateNums: xxx,
      title: "Your drawed numbers:" 
    })
  }
    
  pickNumbers = (tablica: Array<number>) => {
    const newTab = []
    
    let randomNum1 = Math.floor(Math.random()*tablica.length);
    newTab.push(tablica[randomNum1]);
    tablica = tablica.filter(el => el !== tablica[randomNum1])
    
    let randomNum2 = Math.floor(Math.random()*tablica.length)
    newTab.push(tablica[randomNum2]);
    tablica = tablica.filter(el => el !== tablica[randomNum2])
    
    let randomNum3 = Math.floor(Math.random()*tablica.length)
    newTab.push(tablica[randomNum3]);
    tablica = tablica.filter(el => el !== tablica[randomNum3])
    
    let randomNum4 = Math.floor(Math.random()*tablica.length);
    newTab.push(tablica[randomNum4]);
    tablica = tablica.filter(el => el !== tablica[randomNum4])
    
    let randomNum5 = Math.floor(Math.random()*tablica.length);
    newTab.push(tablica[randomNum5]);
    tablica = tablica.filter(el => el !== tablica[randomNum5])
    
    let randomNum6 = Math.floor(Math.random()*tablica.length);
    newTab.push(tablica[randomNum6]);
    tablica = tablica.filter(el => el !== tablica[randomNum6])
  
    newTab.sort( (function(a, b){return a - b}) );
    
    return newTab;
   }
  
    render() {
      const title = this.state.title;
      return(
        <div>
          <h2>Draw 6 numbers from box</h2>
          <button onClick={this.drawNumbers}>press to draw</button>   
           <NumbersList nums={this.state.stateNums} title={title} />
        </div>
      )
    }
  }
  
  interface NumberListPropsType{
    nums: Array<number>
    title: string
  }

  class NumbersList extends React.Component<NumberListPropsType> {
    render(){
      return (
        <React.Fragment>
          <h2>{this.props.title}</h2> 
          <div className="rows">
            {this.props.nums.map(el => <div key={el} style={{ display: "inline-block", marginRight:"10px" }}>{el}</div>)}
        </div>
        </React.Fragment>
      );
    }
  }
  
