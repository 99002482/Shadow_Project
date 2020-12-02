import React from 'react';
import ReactDom from 'react-dom';
import Device from '../component/Device';


it("renders loginform without crashing",()=>{
    const div=document.createElement("div");
    ReactDom.render(<Device></Device>,div);


})