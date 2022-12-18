import React,{ useEffect, useRef, useState } from "react";

import gsap from "gsap";
import {DivHeaderMenu,DivParentMenuTop,DivBurgerMenu,DivMenuTop,DivHero,DivLogoMenuTop, DivHitam, DivJudul,DivIcon, DivPunya,DivContentJudul ,DivImg, DivLeftMenu, DivRightMenu} from "./../home/styled";
// import HeroImg from './../../assets/img/hero1.webp'
import { DivContents, DivContent} from "../Content/styled";
import {  DivContactButton,DivForm,DivContact} from "./styled";
import Content from "../Content/content";
import Thanks from '../../assets/img/thanks.webp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from 'react-router-dom'
import axios from "axios";
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
import { DivButtonAsk } from "../spec/styled";
const Home = ()=>{
    let m  = useLocation();
    const params = useParams();
    
    // const wrapperRef = useRef(null);
    let turbulance = useRef(null)
    const containerRef = useRef(null);
    let DivParentHomeRef = useRef(null);
    const cuyRef = useRef(null)
    const imagesLoaded = useOnLoadImages(cuyRef);
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
    const [showLoading, setShowLoading] = useState(false)
    const [show, setShow]= useState(false)
    const [loaded, setLoaded] = useState(false)
    const [berhasil, setBerhasil] = useState(false)
    const [emails, setEmails]= useState('') 
    useEffect(()=>{
        if(imagesLoaded){
            setTimeout(()=>{
                setLoaded(true)
            },100)
        }else{
            setLoaded(false)
        }
    },[imagesLoaded])
    useEffect(()=>{
        if(params?.id){
            setMessage(params?.id)
        }else{
            setMessage('')
        }
        if(params?.email){
            setEmails(params?.email)

        }else{
            setEmails('')

        }
        setTimeout(()=>{
            document.getElementById("username")?.focus()
        },500)
    },[JSON.stringify(params)])
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
            gsap.to(divRightMenu, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateY:"0%",
                delay:0.3,
               
            });
            
            gsap.to(righMenuIMG1, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                width:"100%",
                delay:0.4,
               
            });
            gsap.to(righMenuIMG2, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateX:"0%",
                delay:0.4,
               
            });
            gsap.to(  logo, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateY:"0%",
                delay:0.1,
               
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
            gsap.to(divRightMenu, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateY:"100%",
                delay:0.4,
               
            });
            gsap.to(righMenuIMG1, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                width:"0%",
                delay:0.4,
               
            });
            gsap.to(righMenuIMG2, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateX:"100%",
                delay:0.3,
               
            });
            gsap.to(  logo, { 
                duration: 0.4, 
                ease: "power2.out",
                 
                translateY:"40%",
                delay:0.1,
               
            });
            gsap.to(  logo, { 
                duration: 0.4, 
                ease: "power2.out",
                opacity:0, 
               
                delay:0.3,
               
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
  
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleFormSubmit = e => {
        e.preventDefault();
        setShowLoading(true)
       
        axios({
          method: "post",
          url: emails=="lody"?`https://waraneycoco.com/phpmailer/lody.php`:emails=="gerry"?`https://waraneycoco.com/phpmailer/gerry.php`:emails=="oky"?`https://waraneycoco.com/phpmailer/oky.php`:`https://waraneycoco.com/phpmailer/mail.php`,
          headers: { "content-type": "application/json" },
          data: {username:username,email:email,message:message}
        })
          .then(result => {
            if(result?.data=="Message has been sent successfully"){
                setBerhasil(true)
                toast.success('berhasil mengirim email')
                window.scrollTo(0, 0);
            }else{
                setBerhasil(false)
                toast.error('gagal mengirim email')
            }
          })
          .catch(error =>{
            setBerhasil(false)
            toast.error('gagal mengirim email')
          }).finally(()=>{
            setShowLoading(false)
          })
      };
      useEffect(()=>{
        
      },[])
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
            <ToastContainer />
            <div id="targetID" data-scroll-section style={{width:'100%', height:'100%'}}>
                
                <div  data-scroll data-scroll-sticky data-scroll-target="#targetID" style={{display:!show?'none':'flex',alignItems:'center',position:'fixed',zIndex:show?99:0,right:0, width:'100vw',height:'100vh', overflow:'hidden',display:'flex', justifyContent:'center',alignItems:'center',color:'white' }}>
                        
                        <DivLeftMenu style={{width:'50%', height:'100%'}}>
                            <div style={{display:'flex', flexDirection:"column",width:'100%', height:'100%'}}>
                                <div ref={el=>(righMenuIMG1 =el)} style={{overflow:'hidden',width:'0%', height:'60%', }}>
                                   
                                    <img alt="content1" src={IMG2} style={{maxHeight:'100%', width:'800px'}} height={"100%"}></img>
                                </div>
                                <div style={{height:'40%', width:'100%', display:'flex'}}>
                                    <div style={{width:'60%', height:'100%', overflow:'hidden',}}>
                                        
                                            <img alt="content2" ref={el=>(righMenuIMG2 =el)}  src={IMG3} style={{transform:"translateX(100%)", }} height="100%" width={"500px"}></img>
                                        

                                    </div>
                                    <div ref={el=>(divRightMenu =el)} style={{display:'flex',justifyContent:'center', alignItems:'center',transform:'translateY(100%)',width:'40%', height:'100%',background:"black"}}>
                                        <img alt="content3" ref={el=>(logo =el)}  src={Logo}  style={{width:'100%',transform:"translateY(30%)", opacity:0}}></img>
                                        
                                        {/* <div ref={el=>(logo =el)} style={{color:'white'}}>WARANEY COCO</div> */}
                                    </div>
                                </div>

                            </div>
                        </DivLeftMenu>
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
                <DivParentMenuTop id="menuTop" style={{flexFlow:'none',position:'fixed',zIndex:99, left:0,top:0, height:'80px',display:'flex', alignItems:'center',gap:'20em',color:'white' }}>
                    
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
                <div ref={cuyRef}>
                    <div style={{paddingTop:'200px'}}></div>
                    <DivContact style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'30px'}}>
                        <a style={{textDecoration:'none'}} href="https://wa.me/+628118951809?text=Hi, I want more information about your product price">

                            <DivContactButton style={{cursor:'pointer',position:'relative',zIndex:9,fontFamily:'ArcaMajora3-Bold',display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <div style={{background:'rgba(213,101,27,0.8)',width:'80px',height:'80px', borderRadius:'50%',color:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>

                                    <InlineIcon style={{color:'white'}} icon="fa:whatsapp"></InlineIcon>
                                </div>
                                <div style={{marginTop:'10px',fontSize:'20px', color:'white'}}>+628118951809</div>
                            </DivContactButton>

                        </a>
                        <a style={{textDecoration:'none'}} href="mailto:sales@waraneycoco.com">
                            <DivContactButton style={{cursor:'pointer',position:'relative',zIndex:9,fontFamily:'ArcaMajora3-Bold',display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <div style={{background:'rgba(213,101,27,0.8)',width:'80px',height:'80px', borderRadius:'50%',color:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>

                                    <InlineIcon style={{color:'white'}} icon="charm:mail"></InlineIcon>
                                </div>
                                <div style={{marginTop:'10px',fontSize:'20px', color:'white'}}>sales@waraneycoco.com</div>
                            </DivContactButton>

                        </a>
                    </DivContact>
                    <div style={{marginBottom:'100px',fontFamily:'ArcaMajora3-Bold',position:'relative',zIndex:9,marginTop:'30px', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {berhasil?<div style={{color:'white', textAlign:'center'}}>
                            <img alt="content4" width={300} src={Thanks}></img>
                            <div>Your email has been sent.</div>
                            <div>Your order will be processed within 24 hours.</div>
                        </div>:
                        <DivForm onSubmit={showLoading?null:handleFormSubmit} style={{color:'white',display:'flex',gap:'20px', flexDirection:'column'}}>
                                
                                {showLoading?<div style={{width:'100%', height:'100%', background:'rgba(0,0,0,0.3)', position:'absolute', top:0, left:0,zIndex:3000}}></div>:null}
                                <input id="username" value={username} onChange={(e)=>setUsername(e?.target?.value)} name="username"  required style={{padding:'5px',boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",outline:'none',border:'none',borderRadius:'2px',background:'rgba(213,101,27,0.8)',color:'white',fontSize:'20px',}}   placeholder="Your Name"></input>
                                <input value={email} onChange={(e)=>setEmail(e?.target?.value)} name="email" type={"email"} required style={{padding:'5px',boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",outline:'none',border:'none',borderRadius:'2px',background:'rgba(213,101,27,0.8)',color:'white',fontSize:'20px',}} placeholder="Your Email"></input>
                                <textarea value={message} onChange={(e)=>setMessage(e?.target?.value)} name="message"  rows="5" cols="50" required style={{padding:'5px',boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",outline:'none',border:'none',borderRadius:'2px',background:'rgba(213,101,27,0.8)',color:'white',fontSize:'20px',}} placeholder="Message"></textarea>

                                <div style={{width:'100%', display:'flex', justifyContent:'end'}}>
                                    <DivButtonAsk  style={{background:'rgba(213,101,27,0.8)',fontSize:'18px', padding:"7px 20px"}}>
                                        <input type={"submit"}   value={showLoading?"Loading..":"SEND"} style={{fontFamily:'ArcaMajora3-Bold',cursor:'pointer',background:'transparent',fontSize:'18px', padding:"7px 20px", color:'white', border:'none'}}/>
                                    </DivButtonAsk>
                                </div>
                            
                        </DivForm>}
                    </div>

                
                
                </div>
                    
                    
               
                <Footer></Footer>
            </div>
            
           
        </div>
        </>
       
    )
}

export default  Home