import React, {useState,useContext} from 'react';
import styled from "styled-components";
import City from './City';
import CityCon from './Store';


const CityList = ({name,setmode}) =>{

    const Cities = useContext(CityCon);
        
    
        const [n,setN] = useState(false);

        const [mode2,setmode2] = useState(true);
       

        const CITY = Cities.Cist.map(Index =>{
            return <City name={name} setN={setN} Inx={Index} setmode2={setmode2} />
        }) 

        const Num =() =>{
            if(n>-1) {
                const url = require( `./cities/${name}/${n}.jpg`) ;
                return <View url={url} > </View>
            }
        }

    return (

            <Board2  > 
                   {mode2 ? 
                   <div>
                       <Board3>{CITY}</Board3> 
                        <Close onClick={() => {setmode(true) }} >🔙</Close>
                   </div> : 
                   <div>
                        <Close onClick={() => {setmode2(true) }} >🔙</Close>
                   {Num()} 
                  
                    </div>
                   } 
                   
            </Board2>

    )





}

const Board2 = styled.div`
    
    width:100%;
    height:720px;
    margin:auto;
    margin-top:18px;
`


const Board3 = styled.div`
    float:left;
    text-align:center;
    width:95%;
    height:720px;
    margin:auto;
`
const View =styled.div`

    width:72%;
    height:720px;
    border:solid 1px red;
    margin:auto;
    background-color: red;
    background:url(${props=>props.url});
    background-size:cover;
`

const Close  = styled.div `
    font-size:46pt;
    float:right;
    width:69px;
    height:80px;
    margin-top:320px;
    margin-right:11px;
    border:solid 1px red;
    border-radius:5px;
    &:hover {
        color:white;
        cursor:Default;
        box-shadow:
        inset 10px 0 11px red;
        inset -50px 0 120px #0ff; 
        cursor:pointer;
            
        }
  
`


export default CityList;