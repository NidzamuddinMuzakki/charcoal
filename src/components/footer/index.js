import React, { useEffect, useRef} from "react";
import gsap from "gsap";
import { useInView } from 'react-intersection-observer';
import { DivFooterFont, DivParentFooter, DivChild,DivChildsss } from "./styled";
import { InlineIcon } from "@iconify/react";
const Footer = ()=>{
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    const [contentJudulRef, inview, entry] = useInView({
        threshold:0.3,
        triggerOnce:true,
    })
    useEffect(()=>{
        if(inview){
            gsap.to([line1,line2,line3, line4], { 
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

        }
    },[inview])
    return(
        <section >
            <div style={{width:'100vw', background:"#202020",color :"white", overflow:'hidden',paddingBottom:'100px'}}>
                <div style={{width:'100%',paddingTop:'5em' ,display:'flex', justifyContent:'center', fontFamily:'ArcaMajora3-Bold', fontSize:'20px'}}>
                    WARANEY COCO
                </div>
                <DivParentFooter ref={contentJudulRef}  style={{position:'relative',overflow:'hidden',display:'flex'}}>
                    <DivFooterFont style={{  fontWeight:800}}>
                        <div style={{overflow:'hidden', position:'relative'}} ><div style={{transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line1 = el)}>Request A Free Sample </div></div>
                        <div style={{overflow:'hidden',  position:'relative'}} ><div style={{transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line2 = el)}>From Waraney Coco </div></div>
                        {/* <div style={{overflow:'hidden',  position:'relative'}} ><div style={{transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line3 = el)}>Briquettes </div></div>
                        <div style={{overflow:'hidden',  position:'relative'}} ><div style={{transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line4 = el)}>Price List & Specs.</div></div> */}
                    </DivFooterFont>
                    
                </DivParentFooter>
                {/* <DIVPAR style={{width:'100%', position:'relative'}}> */}
                                    {/* <DivPrice  onClick={()=>{window.location.href='/contact'}} style={{fontFamily:"ArcaMajora3-Bold",fontWeight:'500'}}> */}
                                     
                                    {/* </DivPrice> */}

                                {/* </DIVPAR> */}
                <DivChild  style={{color:'white', fontSize:'20px', marginTop:'0px',marginBottom:"20px",fontFamily:'Tisa_Sans_Pro_Light',}}>We will send you sample for free. You only cover the shipping cost.</DivChild>
                <DivChildsss onClick={()=>{window.location.href='/contact/Request Sample'}}>
                <div  style={{cursor:'pointer',textAlign:'center',borderRadius:'5px', width:'100%',background:'rgba(255,0,0,0.5)',border:'none',cursor:'pointer', padding:"5px 5px"}}>
                                            Click to Request Sample

                                        </div>
                </DivChildsss>
                <DivChild onClick={()=>{window.location.href='/contact/Request Sample'}} style={{position:'relative',color:'white',alignItems:'center', fontSize:'20px',fontFamily:'Tisa_Sans_Pro_Light', marginTop:'30px', cursor:'pointer'}}><InlineIcon style={{fontSize:'20px'}} icon={"carbon:email"}></InlineIcon> sales@waraneycoco.com</DivChild>
                <DivChild onClick={()=>{window.location.href='/contact/Request Sample/gerry'}} style={{position:'relative',color:'white',alignItems:'center', fontSize:'20px',fontFamily:'Tisa_Sans_Pro_Light',marginTop:'10px', cursor:'pointer'}}><InlineIcon style={{fontSize:'20px'}} icon={"carbon:email"}></InlineIcon> gerry@waraneycoco.com</DivChild>
                <DivChild onClick={()=>{window.location.href='/contact/Request Sample/oky'}} style={{position:'relative',color:'white',alignItems:'center', fontSize:'20px',fontFamily:'Tisa_Sans_Pro_Light',marginTop:'10px', cursor:'pointer'}}><InlineIcon style={{fontSize:'20px'}} icon={"carbon:email"}></InlineIcon> eky@waraneycoco.com</DivChild>

            </div>
        </section>
    )
}

export default Footer