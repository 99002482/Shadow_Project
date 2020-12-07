import React from 'react';
import ReactDom from 'react-dom';
import Footer from '../component/Footer';



it("renders Footer without crashing",()=>{
    const div=document.createElement("div");
    ReactDom.render(<Footer></Footer>,div);


})