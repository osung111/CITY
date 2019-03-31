import React, {useState,useContext } from 'react';
import styled  from "styled-components";
import CityCon from './Store';
import Country from './Country';
import CityList from './CityList';

const CountryList = () =>{
    const [mode,setmode] = useState(true);
    const [name,setname] = useState('');
    const Cities = useContext(CityCon);
    console.log(mode)
       const flags = Cities.countries.map(city => {
           return <Country city={city} setmode={setmode} setname={setname} /> 
       })

      
    
       
        return(
            
         <Board> {mode ?  flags : <CityList  name={name} setmode={setmode}  />}  </Board>  
     
        )


    
}


const Board = styled.div`
    text-align:center;
    width:88%;
    height:100%;
    border : 1px solid transparent;
    margin:auto;
    background-color: rgba( 255, 255, 255, 0.2 );
    box-shadow:
    inset 1px 0 15px #2ECCFA;
    inset -50px 0 120px #0ff; 
`



export default CountryList;