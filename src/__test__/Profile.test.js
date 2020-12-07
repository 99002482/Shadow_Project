import React from 'react';
import ReactDom from 'react-dom';
import Profile from '../component/Profile';


it("renders Profile without crashing",()=>{
    const div=document.createElement("div");
    ReactDom.render(<Profile></Profile>,div);


})