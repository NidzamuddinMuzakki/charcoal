import React,{ useRef, useState,lazy, Suspense, useEffect } from "react";
import styled from "styled-components";
import Home from "./components/home";
import Spec from "./components/spec";
import Contact from "./components/contact";
import Faq from "./components/faq"
import { device } from "./device";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
  useLocation
} from "react-router-dom";
// const  Home = lazy(()=>import("./components/home"));

import ScrollToTop from "./components/scrollToTop";
import { InlineIcon } from "@iconify/react";
const DivFloat = styled.div`
  @media ${device.mobileM} {
    width:calc(100vw - 20px);
    justify-content:space-between;
  }
  @media ${device.tablet} {
    width:calc(100vw - 20px);
    justify-content:end;

  }
  @media ${device.laptop} {
    width:calc(100vw - 20px);
    justify-content:end;
  }
`
const DivEmail = styled.div`
  @media ${device.mobileM} {
    display:flex;
  
  }
  @media ${device.tablet} {
    display:none;
    
  }
  @media ${device.laptop} {
    display:none;
  }
`
const DivWa = styled.div`
@media ${device.mobileM} {
  width:50%;
  margin-right:20px;
  

}
@media ${device.tablet} {
  width:200px;
  margin-right:20px;
  
}
@media ${device.laptop} {
  width:200px;
  margin-right:20px;
}

`
function App() {
  // const [loaded, setLoaded] = useState(true)
    let m = useLocation();
    
 
    return (
    <>
      <ScrollToTop></ScrollToTop>
      {m?.pathname=="/contact"?"":<DivFloat style={{gap:'20px',position:'fixed',display:'flex',cursor:'pointer',zIndex:108,bottom:10,left:10 }}>
        <DivEmail onClick={()=>{window.location.href='mailto:sales@waraneycoco.com'}} style={{width:'50%',borderRadius:'10px',background:"rgba(213,101,27,0.8)",gap:'5px', justifyContent:'center', alignItems:'center', color:'white',  padding:'10px 20px'}}>
          <InlineIcon style={{color:'white', fontSize:'20px'}} icon="charm:mail"></InlineIcon>
          <div style={{fontSize:'20px'}}>Email</div>
        </DivEmail>
        <DivWa onClick={()=>{window.location.href="https://wa.me/+628118951809?text=Hi, I want more information about your product price"}} style={{borderRadius:'10px',background:"rgba(213,101,27,0.8)",display:'flex',gap:'5px', justifyContent:'center', alignItems:'center', color:'white', padding:'10px 20px'}}>
          <InlineIcon style={{color:'white', fontSize:'20px'}} icon="fa:whatsapp"></InlineIcon>
          <div style={{fontSize:'20px'}}>Whatsapp</div>
        </DivWa>
        
        

        
      </DivFloat>}
      <Routes>
          <Route path={"/"} exact element={<Home   ></Home>}>
           
          </Route>
          <Route path={"/spec"} exact element={<Spec   ></Spec>}>
            
          </Route>
         
          {/* <Route path={"/contact/:id?"} > */}
          <Route path={"/contact"} exact element={<Contact   ></Contact>}>
            <Route path=":id" exact element={<Contact   ></Contact>} >
              <Route path=":email" exact element={<Contact   ></Contact>} />
            </Route>
          </Route>
          {/* </Route> */}
          <Route path="/faq" exact element={<Faq></Faq>}>

          </Route>
      </Routes>
      {/* </Suspense> */}
         

        
    </>
  );
}

export default App;
