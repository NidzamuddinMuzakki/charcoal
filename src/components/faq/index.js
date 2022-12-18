import React,{ useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {DivParentMenuTop,DivBurgerMenu, DivMenuTop,DivHero,DivLogoMenuTop, DivHitam, DivJudul,DivIcon, DivPunya,DivContentJudul ,DivImg, DivLeftMenu, DivRightMenu} from "./../home/styled";
// import HeroImg from './../../assets/img/hero1.webp'
import { DivContents, DivContent,DivIConCUy, ContentType,ContentJudul } from "../Content/styled";
import { DivIconContenerS,DivIconContener,DivContener,DivContenerS,DivHeaderMenu } from "../home/styled";
import Flame from './../../assets/img/flame-transformed.webp'
import Flame2 from './../../assets/img/25572-removebg-preview.png'
import {DivJudulQuestion,DivIconQu,DivJudulQuestions } from './styled'
import Content from "../Content/content";
import Tatesless from  './../../assets/img/Tasteless.png'
import LowAshContent from './../../assets/img/low_ash_content.png'

import Ouderless  from './../../assets/img/orderless.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import ScrollTriggerProxy from "./../ScrollTriggerProxy";
import Footer from "../footer";
import IMG2 from './../../assets/img/ezgif.com-gif-maker.webp'
import IMG3 from './../../assets/img/ezgif.com-gif-maker (6).webp'
import Logo from './../../assets/img/wa.png'
import { InlineIcon } from "@iconify/react";
import { useOnLoadImages } from "../../loaded";
import Image1 from './../../assets/img/ezgif.com-gif-maker (6).webp'

import LazyLoad from "../../load";
const Faq = ()=>{
    let m = useLocation();
    let ParentcontentRef = useRef(null)
    // const wrapperRef = useRef(null);
    let turbulance = useRef(null)
    const containerRef = useRef(null);
    let DivParentHomeRef = useRef(null);
    const cuyRef = useRef(null)
    const imagesLoaded = useOnLoadImages(cuyRef);
    const [openQuestion,setOpenQuestion] = useState(0)
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let Image1Ref =useRef(null);
    let JudulLogo = useRef(null);
    let imgRef = useRef(null);
    let leftMenu = useRef(null);
    let righMenuIMG1 = useRef(null);
    let righMenuIMG2 = useRef(null);
    let divRightMenu = useRef(null)
    let logo = useRef(null)
    let line10 = useRef(null);
    let line12 = useRef(null);
    let line13 = useRef(null);
    let line14 = useRef(null);
   
    const [show, setShow]= useState(false)
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        if(imagesLoaded){
            setTimeout(()=>{
                setLoaded(true)
            },100)
        }else{
            setLoaded(false)
        }
    },[imagesLoaded])
    console.log(imagesLoaded)
    const handleCLikc = ()=>{
        // if(!show){
        //     document.getElementById("container").removeAttribute("data-scroll-container")
        // }else{
        //     document.getElementById("container").setAttribute("data-scroll-container",true)
        // }
        setShow(!show)
        let cuy = document.getElementById("nav-icon1")
        cuy.classList.toggle('open')
        if(!show){
            gsap.to(leftMenu, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateY:"0%",
                delay:0.2,
               
            });
            
            gsap.to([line10,line12,line13, line14], { 
                duration: 1.5, 
                ease: "power2.out",
                rotate:0,
                opacity:1, 
                y: -200,
                delay:0.2,
                stagger: {
                    amount: 0.4
                }
            });

        }else{
            gsap.to(leftMenu, { 
                duration: 0.5, 
                ease: "Power3.easeNone",
                opacity:1, 
                translateY:"100%",
                delay:0.4,
               
            });
           
            gsap.to([line10,line12,line13, line14], { 
                duration: 1.5, 
                ease: "power2.out",
                rotate:30,
                opacity:0, 
                y: 200,
                delay:0.1,
                stagger: {
                    amount: 0.4
                }
            });
        }
    }
  
    
    
    useEffect(()=>{
        window.addEventListener('scroll',function(e){
            if(this.window.scrollY>10){
                this.document.getElementById('menuTop').style.background="rgba(0,0,0,1)"
            }else{
                this.document.getElementById('menuTop').style.background="rgba(0,0,0,0.5)"

            }
            // console.log(this.window.scrollY)
        })
       
    },[])
    
    return(
<>
         
        <div id="container" data-scroll-container ref={containerRef}  style={{width:'100vw', height:'100%', background:'#242424'}}>
            <LazyLoad data-scroll data-scroll-sticky data-scroll-target="#targetID" imagesLoaded={imagesLoaded}></LazyLoad>
            
            <div id="targetID" data-scroll-section style={{width:'100%', height:'100%'}}>
                
                <div  data-scroll data-scroll-sticky data-scroll-target="#targetID" style={{display:!show?'none':'flex',alignItems:'center',position:'fixed',zIndex:show?98:0,right:0, width:'100vw',height:'100vh', overflow:'hidden',display:'flex', justifyContent:'center',alignItems:'center',color:'white' }}>
                        
                       
                        <DivRightMenu ref={el=>(leftMenu =el)}  style={{paddingLeft:'20px',fontSize:'40px', fontWeight:800,height:'100%',position:'relative',transform:'translateY(100%)',background:'#242424'}}>
                        
                            {/* <div style={{overflow:'hidden', height:'50px', }} ><div className="menu-item" style={{cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line10 = el)}>
                                <div><span style="--index:0;">H</span><span style="--index:1;">o</span><span style="--index:2;">m</span><span style="--index:3;">e</span></div>
                                <div style="position: absolute; left: 0px; top: 0px;"><span style="--index:0;">H</span><span style="--index:1;">o</span><span style="--index:2;">m</span><span style="--index:3;">e</span></div>
                            </div></div>
                            <div style={{overflow:'hidden', height:'50px', }} ><div className="menu-item" style={{cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line12 = el)}>
                                <div><span style="--index:0;">A</span><span style="--index:1;">b</span><span style="--index:2;">o</span><span style="--index:3;">u</span><span style="--index:4;">t</span></div>
                                <div style="position: absolute; left: 0px; top: 0px;"><span style="--index:0;">A</span><span style="--index:1;">b</span><span style="--index:2;">o</span><span style="--index:3;">u</span><span style="--index:4;">t</span></div>
                            </div></div> */}
                            <div style={{overflow:'hidden', height:'50px', }} >
                                <Link style={{color:m.pathname=="/"?"#D5651B":"white"}}  to={"/"}>
                                <div className="menu-item" style={{width:'150px',cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line10 = el)}>
                                    <div><span style={{"--index":0}}>H</span><span style={{"--index":1}}>o</span><span style={{"--index":2}}>m</span><span style={{"--index":3}}>e</span></div>
                                    <div style={{position:"absolute", left: "0px",top: "0px"}}><span style={{"--index":0}}>H</span><span style={{"--index":1}}>o</span><span style={{"--index":2}}>m</span><span style={{"--index":3}}>e</span></div>
                                </div>
                                </Link>
                            </div>
                            <div style={{overflow:'hidden', height:'50px', }} >
                                <Link style={{color:m.pathname=="/spec"?"#D5651B":"white"}} to={"/spec"}>
                                <div  className="menu-item" style={{width:'150px',cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line12 = el)}>
                                    <div><span style={{"--index":0}}>S</span><span style={{"--index":1}}>p</span><span style={{"--index":2}}>e</span><span style={{"--index":3}}>c</span></div>
                                    <div style={{position:"absolute", left: "0px",top: "0px"}}><span style={{"--index":0}}>S</span><span style={{"--index":1}}>p</span><span style={{"--index":2}}>e</span><span style={{"--index":3}}>c</span></div>
                                    </div>
                                </Link>
                            </div>
                            <div style={{overflow:'hidden', height:'50px', }} >
                                <Link style={{color:m.pathname=="/contact"?"#D5651B":"white"}} to={"/contact"}>
                                <div className="menu-item" style={{width:'180px',cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line13 = el)}>
                                    <div><span style={{"--index":0}}>C</span><span style={{"--index":1}}>o</span><span style={{"--index":2}}>n</span><span style={{"--index":3}}>t</span><span style={{"--index":4}}>a</span><span style={{"--index":5}}>c</span><span style={{"--index":6}}>t</span></div>
                                    <div style={{position:"absolute", left: "0px",top: "0px"}}><span style={{"--index":0}}>C</span><span style={{"--index":1}}>o</span><span style={{"--index":2}}>n</span><span style={{"--index":3}}>t</span><span style={{"--index":4}}>a</span><span style={{"--index":5}}>c</span><span style={{"--index":6}}>t</span></div>
                                </div>
                                </Link>
                            </div>
                            <div style={{overflow:'hidden', height:'50px', }} >
                                <Link style={{color:m.pathname=="/faq"?"#D5651B":"white"}} to={"/faq"}>
                                <div className="menu-item" style={{width:'180px',cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line14 = el)}>
                                    <div><span style={{"--index":0}}>F</span><span style={{"--index":1}}>a</span><span style={{"--index":2}}>q</span></div>
                                    <div style={{position:"absolute", left: "0px",top: "0px"}}><span style={{"--index":0}}>F</span><span style={{"--index":1}}>a</span><span style={{"--index":2}}>q</span></div>
                                </div>
                                </Link>
                            </div>
                            {/* <div style={{overflow:'hidden', height:'50px', position:'relative'}} ><div className="menu-item" style={{transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line14= el)}></div></div> */}


                           
                
                        </DivRightMenu>
                </div >
                {/* <DivIcon data-scroll data-scroll-sticky data-scroll-target="#targetID" style={{overflow:'hidden',flexDirection:'column',position:'fixed',zIndex:9, right:0, width:'40px',height:'80px',gap:'20px',display:'flex', justifyContent:'center',alignItems:'center',color:'white' }}>
                    <a href=" https://wa.me/085156400713?text=I'm%20interested%20in%20your%20car%20for%20sale">
                        <InlineIcon style={{fontSize:"30px",}} icon="logos:whatsapp-icon"/>
                    </a>
                    <a href="mailto:sales@waraney">
                        <InlineIcon  style={{fontSize:"30px",}} icon="fluent-emoji-flat:e-mail"/>

                    </a>
                    
                    
                   
                </DivIcon> */}
                <DivParentMenuTop  id="menuTop" style={{flexFlow:'none',position:'fixed',zIndex:99, left:0,top:0, height:'80px',display:'flex', alignItems:'center',gap:'20em',color:'white' }}>
                    
                    <DivLogoMenuTop onClick={()=>window.location.href="/"} style={{cursor:'pointer',height:'100%', display:'flex',alignItems:'center'}}>
                        <img src={Logo} style={{width:'60px'}} alt="logo" />
                        <div style={{marginLeft:'10px',display:'flex', gap:'5px'}}>
                            <div>Waraney </div>
                            <div>Coco</div>
                        </div>

                    </DivLogoMenuTop>
                    
                    <DivMenuTop style={{ gap:'20px', fontSize:'18px', cursor:'pointer', }}>
                        <DivHeaderMenu>
                            <Link style={{textDecoration:'none', color:m.pathname=="/"?"#D5651B":"white"}} to={"/"}>
                            Home
                            </Link>
                            <div style={{height:'0px',borderTop:'2px solid #D5651B'}}></div>
                        </DivHeaderMenu> 
                        <DivHeaderMenu>
                            <Link style={{textDecoration:'none', color:m.pathname=="/spec"?"#D5651B":"white"}} to={"/spec"}>
                            Spec
                            </Link>
                            <div style={{height:'0px',borderTop:'2px solid #D5651B'}}></div>
                        </DivHeaderMenu> 
                        <DivHeaderMenu>
                            <Link style={{textDecoration:'none', color:m.pathname=="/contact"?"#D5651B":"white"}} to={"/contact"}>
                            Contact
                            </Link>
                            <div style={{height:'0px',borderTop:'2px solid #D5651B'}}></div>
                        </DivHeaderMenu>
                        <DivHeaderMenu>
                            <Link style={{textDecoration:'none', color:m.pathname=="/faq"?"#D5651B":"white"}} to={"/faq"}>
                            Faq
                            </Link>
                            <div style={{height:'0px',borderTop:'2px solid #D5651B'}}></div>
                        </DivHeaderMenu>
                    </DivMenuTop>
                    <DivBurgerMenu onClick={handleCLikc}>
                        <div   id="nav-icon1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </DivBurgerMenu>
                </DivParentMenuTop>
                
        
                        {/* <Home /> */}
                        <section ref={ParentcontentRef}   style={{position:'relative',transition:'1s',background:"#242424",color:'white'}}>
            <div ref={cuyRef}>

            </div>
            <DivContent className="contentJudul"  style={{paddingTop:'100px',opacity:1, transition:'1s'}} >
                <ContentJudul  style={{fontWeight:800, fontSize:'25px'}}>YOUR QUESTIONS ANSWERED</ContentJudul>
               
            </DivContent>
            <DivContent>
                <div style={{marginTop:'10px', marginLeft:'10px',fontFamily:'Tisa_Sans_Pro_Light',fontSize:'17px'}}> The answers to some of the most popular questions asked by our new clients are shown below. If you have any other queries please do not hesitate to contact us by mail or telephone directly.</div>
            </DivContent>
            <DivContent className="contentJudul"  style={{overflow:'hidden',paddingTop:'30px',opacity:1, transition:'1s'}} >
                <DivJudulQuestion onClick={()=>openQuestion==1?setOpenQuestion(0):setOpenQuestion(1)}  style={{background:openQuestion==1?"#B0571C":"none",cursor:'pointer',marginLeft:'10px',fontWeight:800,cursor:'pointer',flexDirection:'row',display:"flex"}}>{openQuestion!=1?<InlineIcon style={{fontSize:'25px',marginRight:'10px'}}  icon={"akar-icons:plus"}></InlineIcon>:<InlineIcon style={{fontSize:'30px',marginRight:'10px'}}  icon={"akar-icons:minus"}></InlineIcon>} <div>How do you ensure the charcoal briquettes are kept dry during delivery?</div></DivJudulQuestion>
                {/* <DivJudulQuestion style={{transition:'0.3s',display:openQuestion==1?"flex":"none",background:openQuestion==1?"#B0571C":"none",paddingBottom:'20px',paddingLeft:'55px',paddingRight:'20px',paddingTop:'10px', marginLeft:'10px',fontFamily:'Tisa_Sans_Pro_Light'}}> We only pack our briquettes after the moisture level has been brought down below 5% and the briquettes are at room temperature. The briquettes are packed in very well sealed plastic lined boxes which ensure they do not come into contact with moist air. We also place several desiccant bags inside the shipping containers so that the air within the container is kept dry during sea transit. You can rest assured that only well dried charcoal briquettes will be delivered to you!</DivJudulQuestion> */}
                <DivJudulQuestions style={{marginLeft:'10px',marginTop:'-1px',paddingTop:'10px',transition:'0.3s',display:openQuestion==1?'flex':'none',background:openQuestion==1?"#B0571C":"none",fontFamily:'Tisa_Sans_Pro_Light',}}><DivIconQu><InlineIcon style={{fontSize:'17px',opacity:0}}  icon={"akar-icons:plus"}></InlineIcon></DivIconQu> We only pack our briquettes after the moisture level has been brought down below 5% and the briquettes are at room temperature. The briquettes are packed in very well sealed plastic lined boxes which ensure they do not come into contact with moist air. We also place several desiccant bags inside the shipping containers so that the air within the container is kept dry during sea transit. You can rest assured that only well dried charcoal briquettes will be delivered to you!</DivJudulQuestions>
                
            </DivContent>
            <DivContent  className="contentJudul"  style={{overflow:'hidden',marginTop:openQuestion!=1?'0px':"0px",opacity:1, transition:'1s'}} >
                <DivJudulQuestion onClick={()=>openQuestion==2?setOpenQuestion(0):setOpenQuestion(2)}   style={{background:openQuestion==2?"#B0571C":"none",cursor:'pointer',marginLeft:'10px',fontWeight:800,cursor:'pointer',flexDirection:'row',display:"flex"}}>{openQuestion!=2?<InlineIcon style={{fontSize:'25px',marginRight:'10px'}}  icon={"akar-icons:plus"}></InlineIcon>:<InlineIcon style={{fontSize:'30px',marginRight:'10px'}} icon={"akar-icons:minus"}></InlineIcon>}Do you add any other ingredients to your briquettes apart from coconut sher charcoal?</DivJudulQuestion>
                <DivJudulQuestions style={{marginLeft:'10px',marginTop:'-1px',paddingTop:'10px',transition:'0.3s',display:openQuestion==2?'flex':'none',background:openQuestion==2?"#B0571C":"none",fontFamily:'Tisa_Sans_Pro_Light',}}><DivIconQu><InlineIcon style={{fontSize:'17px',opacity:0}}  icon={"akar-icons:plus"}></InlineIcon></DivIconQu> We only use coconut shell charcoal and approximately 4% of a natural, eco-friendly binder such as tapioca starch to make our briquettes. Nothing else! No nitrates, no borax, no lime, no sawdust or even wood charcoal. Thus our briquettes do not give off any foul odors or smoke during lighting or burning making them a healthier choice compared to traditional quick light charcoals.</DivJudulQuestions>
                
            </DivContent>

            </section>
                    
                    
               
                <Footer></Footer>
            </div>
            
           
        </div>
        </>
       
    )
}

export default  Faq