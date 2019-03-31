import React, { Component } from 'react';
import styled from "styled-components";
import CountryList from './component/CountryList';
import CityCon from './component/Store';
import './App.css';


class App extends Component {

  state={
      countries :[
        {country:"America" },
        {country:"Brazil"},
        {country:"Italy"},  
        {country:"France"  },
        {country:"England" },
        {country:"United_Kingdom"}
      ],
      Cist:[0,1,2,3,4,5],
      mode:false,
      hours:0,
      minutes:0
    
  }

  Open = () =>{
    this.setState({mode:true})
  }

  


  Time =() =>{
      const date = new Date();
      const Thours = date.getHours();
      const Tminutes =  date.getMinutes();
      this.setState({
        hours:Thours,
        minutes:Tminutes
      })
  }

  render() {
    setInterval(this.Time,1000);
    const hours = this.state.hours;
    const minutes = this.state.minutes;
    return (
      <div className="App">
        <Start>
          <OsungDusk>OSUNG_CITY</OsungDusk>
          <Time>{`${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes }`}</Time>
        </Start>
        <Container> 
            {this.state.mode ?
            <CityCon.Provider value={this.state}> 
              <CountryList/>
              
            </CityCon.Provider>
             : 
            <div>
             
              <Circle  onClick={this.Open} >SELECT<br/>CITY!</Circle>
              
            </div>
            }  
        </Container>
        <End>
          010-9303-6835
        </End>
        
      </div>
    );
  }
}


const Start = styled.div`
  margin-bottom:10px;
  width:98%;
  height:140px;
  

`



const Time = styled.div`
  margin-top:20px;
  font-size:5rem;
  color:white;
  opacity:0.8;
  font-weight: lighter;
  text-align:center;
  width:15%;
  float:right;
  
 
  font-family: Monoton;
  -webkit-animation: neon3 1.5s ease-in-out infinite alternate;
  -moz-animation: neon3 1.5s ease-in-out infinite alternate;
  animation: neon3 1.5s ease-in-out infinite alternate;
 
`
const OsungDusk = styled.div`
  color: white;
  font-family: Monoton;
  -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
  -moz-animation: neon1 1.5s ease-in-out infinite alternate;
  animation: neon1 1.5s ease-in-out infinite alternate;
  font-size:5rem;
  font-weight: lighter;
  float:left;
`

const Container = styled.div`
  width:99.8vw;
   height:78%;
   margin:auto;
   border : 1px solid transparent;

   
  
   
`

const Circle  = styled.div`
  width: 330px;
  height: 220px;
  border : 1px solid transparent;
  border-radius: 50%;
  text-align:center;
  margin:auto;
  color: white;

  box-shadow:
  inset 1px 0 120px orange;
  inset -50px 0 120px #0ff; 

  font-family: Monoton;
  -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
  -moz-animation: neon2 1.5s ease-in-out infinite alternate;
  animation: neon2 1.5s ease-in-out infinite alternate;

  font-size:40pt;
  font-weight: lighter;
  padding-top:90px;
  margin-top:270px;
  &:hover {
    box-shadow:
    inset 10px 0 120px #2ECCFA;
    inset -50px 0 120px #0ff; 
    cursor:pointer;
    }


     
`

const End = styled.div`
width:99.8vw;
height:50px;
border : 1px solid transparent;
background-color: rgba( 255, 255, 255, 0.2 );
color:black;
font-size:25pt;
text-align:center;
font-family: Monoton;
-webkit-animation: neon4 1.5s ease-in-out infinite alternate;
-moz-animation: neon4 1.5s ease-in-out infinite alternate;
animation: neon4 1.5s ease-in-out infinite alternate;
position:absolute;
bottom:0;
margin:auto;
`



export default App;
