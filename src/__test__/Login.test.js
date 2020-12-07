import React from 'react';
import ReactDom from 'react-dom';
import Login from '../component/Login';


it("renders loginform without crashing",()=>{
    const div=document.createElement("div");
    ReactDom.render(<Login></Login>,div);

    

})