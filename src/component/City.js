import React from 'react';
import styled from "styled-components";



const City = ({name,setN,Inx,setmode2}) =>{

     const url = require( `./cities/${name}/${Inx}.jpg`) ;
  

    return (

            <Card2 url={url}  onClick={() => {setN(Inx); setmode2(false)}} >
                   
            </Card2>

    )





}

const Card2 = styled.div`
        
        margin:34px;
        width:28%;      
        height:38%;
        border:solid 1px red;
        display: inline-block;
        background:url(${props=>props.url});
        background-size:cover;
        &:hover {
                box-shadow:
                inset 10px 0 11px red;
                inset -50px 0 120px #0ff; 
                cursor:pointer;
                } 
`




export default City;