import * as React from 'react';

interface MyComponentState {
  stateNums: Array<number>
  title: string,
}

const policz = () => {
  const tablicaCyfr = [];
    for( let i = 1; i <= 49; i++){
      tablicaCyfr.push(i);
    }
  console.log(tablicaCyfr)
  return tablicaCyfr;
}

export class RandomNums extends React.Component<{},MyComponentState> {
    
    constructor(props: {}){
      super(props);
      
      this.state = {
        stateNums: [],
        title: '',
      }
    }
    
  drawNumbers = () => {
    this.setState({ 
      stateNums: this.pickNumbers(),
      title: "Your drawed numbers:",
    })
  }
    
  pickNumbers = () => {
    const wylosowaneLiczby: Array<number> = [];
    let tablica = policz();

    for( let i = 0; i < 6; i++ ){
        const index = Math.floor(Math.random() * tablica.length);
        const randomNum = tablica[index];

        wylosowaneLiczby.push(randomNum);

        tablica = tablica.filter( (el) => el !== randomNum);

        console.log('tablica',tablica)
        console.log(wylosowaneLiczby,'z petli')
    }

    wylosowaneLiczby.sort( ( function(a, b){ return a - b} ) );
    console.log('newTab',wylosowaneLiczby)
    return wylosowaneLiczby;
   }

    render() {
      const title = this.state.title;
      return(
        <div className="mainSection">
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
            { this.props.nums.map(el => <div key={el} className="circle"> {el} </div>) }
        </div>
        </React.Fragment>
      );
    }
  }
  
