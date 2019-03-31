import React from 'react';
import styled from "styled-components";


const Country = ({city,setmode,setname}) =>{

        const url = require( `./flags/${city.country}.png`) ;


   
    return (
        <Card url={url} onClick={()=> {setmode(false); setname(city.country) }} >
            
            
        </Card>
           
    )
}


const Card = styled.div`
    margin:32px;
    width:28%;
    height:40%;
    border:solid 1px red;
    display: inline-block;
    background:url(${props=>props.url});
    background-size:cover;

`



export default Country;