import React, { useEffect, useRef, useState, useLayoutEffect, useCallback } from "react"
import gsap from "gsap";
import { DivImgKeduaSsssass,DivBestSeller,DivIConCUy,DivSize,ContentTypeCoco,ContentTypeShipping,ContentTypeShipping1,DivContentFontKEdua,DivWorldWideB,DivWorldWideA,DivGa,DivContents,DivImgKeduaSss,DivImgKeduaS,DivContentFontKeduaLS,DivContentFontKedua,DivLeft1,DivContentFontKeduaS,DivContentFontKeduaL,DivContentFontKeduaB,DivImgKedua,DIvimgsss,DivLeft,ContentType,ContentType1,DivContent,DivContentFont,DivParentFont, ContentJudul,ContentPertama,ContentFlex,ContentParagraf,DivGaris} from "./styled"
// import { useIntersection } from "react-use";
import { useInView } from 'react-intersection-observer';
import { DivIconContener,DivContener,DivContenerS,DivIconContenerSisha,DivIconContenerSisha2 } from "../home/styled";
import img1 from './../../assets/img/ezgif.com-gif-maker (6).webp'
import { InlineIcon } from "@iconify/react";
import { DivJudulSalessss,DivParnetSalessss,DivParentDetail,DivJudulSales,DivParnetSales, DivSales,DivButtonAsk } from "./../spec/styled";
import img2 from './../../assets/img/ezgif.com-gif-maker (1).webp'
import img3 from './../../assets/img/ezgif.com-gif-maker (5).webp'
import img4 from './../../assets/img/ezgif.com-gif-maker (2).webp'
import imgbox from './../../assets/img/box.webp'
import img10 from './../../assets/img/ezgif.com-gif-maker (4).webp'
import BestSeller from './../../assets/img/100-removebg-preview.png'
import CubeSize from './../../assets/img/1667125735928-removebg-preview.png'
import HexaSize from './../../assets/img/Hexa-removebg-preview.png'
import FingerSize from './../../assets/img/finger-removebg-preview.png'
import { useLocation } from "react-router-dom";
import ContainerImg from './../../assets/img/container.webp'
import WorldMap from "./../../assets/img/worlmap.png"
import Tatesless from  './../../assets/img/Tasteless.png'
import Ouderless  from './../../assets/img/orderless.png'
import Flame from './../../assets/img/flame-transformed.webp'
import Flame2 from './../../assets/img/25572-removebg-preview.png'
import LowAshContent from './../../assets/img/low_ash_content.png'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos.js";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    
    useLayoutEffect(() => {
      function updateSize() {
        console.log('hay')
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      window.addEventListener('DOMContentLoaded', updateSize);
      updateSize();
      return () => {
        window.removeEventListener('resize', updateSize);
        window.removeEventListener('DOMContentLoaded', updateSize);
    
      }
    }, []);
    return size;
  }
const Content = ()=>{
    let svgRef = useRef(null)
    let m  = useLocation();
    const [width, height] = useWindowSize();
    const [heighContent, setHeightContent] = useState(0)
    const [contentHeightsss, setcontentHeightsss] = useState(0)
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    useEffect(()=>{
        if(width && height){
            let type = document.getElementById('nidzamContentType')
            let types = document.getElementById('nidzamContentShipping')

            // if(type){
                let bounding = type.getBoundingClientRect()
                setHeightContent(bounding.height)
                if(types){
                    let boundings = types.getBoundingClientRect()
                    setcontentHeightsss(boundings.height-30)

                }
            // }

        }

    },[width, height])
    // let garifRef = useRef(null)
    let turbulance = useRef(null)
    let ParentcontentRef = useRef(null)
    const [contentJudulRef, inview, entry] = useInView({
        threshold:0.3,
        triggerOnce:true,
    })
    const [garifRef, inview2, entry2] = useInView({
        threshold:0.3,
        triggerOnce:false,
    })

    const [imgRefr, inviewImg, entryIMg] = useInView({
        threshold:0.4,
        triggerOnce:true,
    })

    const [imgRefr1, inviewImg1, entryIMg1] = useInView({
        threshold:0.3,
        triggerOnce:true,
    })
    const [imgRefr3, inviewImg3, entryIMg3] = useInView({
        threshold:0.4,
        triggerOnce:true,
    })

    const [imgRefr4, inviewImg4, entryIMg4] = useInView({
        threshold:0.3,
        triggerOnce:true,
    })
    useEffect(()=>{
        if(inviewImg4){
            // gsap.to(turbulance,  1, 
            //     { duration: 0.7, ease: "Power3.easeNone",delay:0.2,  attr: { baseFrequency: 0 } }
            // );
            // gsap.to('.cuy',  1, 
            //     { duration: 0.4, ease: "Power3.easeNone",delay:0.9,  filter:'' }
            // );
            // gsap.to(svgRef,  1, 
            //     { duration: 0.4, ease: "Power3.easeNone",delay:1,  display:'none' }
            // );
            
        }
    },[inviewImg4])
    
    return(
        <section ref={ParentcontentRef} style={{position:'relative',transition:'1s',background:inview2?"#242424":"#242424",color:inview2?'white':'white'}}>
            {m?.pathname=="/"?<DivContent className="contentJudul"  style={{paddingTop:'100px',opacity:1, transition:'1s'}} >
                <ContentJudul  style={{fontWeight:800}}>WARANEY COCO - MANUFACTURING THE FINEST  CHARCOAL BRIQUETTES</ContentJudul>
               
            </DivContent>:null}
            {m?.pathname=="/"?<DivContent>
                <ContentTypeCoco style={{flexWrap:'wrap'}}>
                    {/* <DivImgKeduaS  style={{marginTop:'30px',width:'17%',overflow:"hidden", height:'100%'}}>
                        <img src={img10} style={{width:"100%",height:'100%',transform:'translateY(0%)',transition:'0.8s'}}></img>
                    </DivImgKeduaS> */}
                    <DivContentFontKeduaLS style={{  flexDirection:'column', gap:'20px',marginTop:'30px',lineHeight:'30px' }}>
                        {/* <h2 data-splitting class="headline headline--fall">falling</h2> */}
                       <DivGa style={{width:"100px", borderTop:'2px solid #5D5D5D', height:'30px', textAlign:'justify'}}></DivGa>
                        <p style={{fontWeight:400,fontFamily:"Tisa_Sans_Pro_Light",fontSize:'18px',width:'100%',lineHeight:'28px',  textAlign:'justify'}}>
                            
                        {/* <img src={img10} style={{width:"100%",height:'100%',transform:'translateY(0%)',transition:'0.8s'}}></img> */}
                        <img src={img10} alt="content10" width="270px" height="160px" style={{float:'left',marginRight:"20px",marginBottom:'20px'}}/> 
                            Waraney Coco is a company providing coconut shell charcoal briquettes that prioritizes product quality. Waraney Coco is located in Indonesia which is a country with the longest coastline in the world and one of the best coconut producers in the world. With the best and abundant raw materials, Waraney Coco produces coconut charcoal briquettes that are maintained in the manufacturing process.
                            
                            </p>
                            {/* </p> */}
                       
                    </DivContentFontKeduaLS>

                </ContentTypeCoco>

            </DivContent>:null}
            <DivContent className="contentJudul" ref={contentJudulRef} style={{paddingTop:m?.pathname=="/spec"?'100px':'0px',opacity:inview?1:0, transition:'1s'}} >
                <ContentJudul >TYPE OF BRIQUETTES</ContentJudul>
               
            </DivContent>
            <DivContents ref={garifRef} style={{ overflow:'hidden'}}>
                <ContentType1 style={{position:'relative'}}>
                        
                        <DivParentFont data-scroll data-scroll-speed="3"  style={{display:'flex',justifyContent:'right',color:'#D5651B',}}>
                           
                        </DivParentFont>
                </ContentType1>
                <ContentType style={{ position:'relative',}}>
                    
                    <DivContentFontKeduaB style={{ fontWeight:100,  flexDirection:'column', gap:'20px', }}>
                        {/* <h2 data-splitting class="headline headline--fall">falling</h2> */}
                        <DivContentFont style={{fontWeight:800,}}>
                            <div>Sisha/hookah </div> 
                               
                        </DivContentFont>
                        <div style={{lineHeight:'28px',fontFamily:"Tisa_Sans_Pro_Light",fontSize:'10px', fontWeight:'400', textAlign:'justify'}}>Waraney coco premium Coconut Shell Charcoal - Organic Hookah Coals - Natural Coconut Shisha Briquettes Lights Quickly Long Lasting burning time with No Odor and smokeless. 
Our briquettes are made from Indonesian selected coconut shell 
With high burning heat also
Spark Free No Foul Aftertaste for Smooth Smoking Experiences</div>
                        {/* <div>28x28x28 mm (48 pcs per 1 kg)</div>
                        <div>27x27x27 mm (56 pcs per 1 kg)</div>
                        <div>26x26x26 mm (64 pcs per 1 kg)</div>
                        <div>25x25x25 mm (72 pcs per 1 kg) – Most popular size</div>
                        <div>22x22x22 mm (96 pcs per 1 kg)</div>
                        <div>20x20x20 mm (120 pcs per 1 kg)</div> */}
                    </DivContentFontKeduaB>
                    <DivImgKedua ref={imgRefr1} style={{overflow:"hidden"}}>
                        <img alt="content1" src={img2} style={{width:"100%",transform:inviewImg1?'translateY(0%)':'translateY(100%)',transition:'0.8s'}}></img>
                    </DivImgKedua>
                    <DivContentFontKeduaS style={{paddingLeft:'30px',fontWeight:100,fontSize:'13px', flexDirection:'column', gap:'20px', }}>
                        {/* <h2 data-splitting class="headline headline--fall">falling</h2> */}
                        <DivContentFont style={{fontWeight:800,}}>
                            <div>Sisha/hookah </div> 
                               
                        </DivContentFont>
                        <div style={{fontFamily:"Tisa_Sans_Pro_Light",fontSize:'18px',lineHeight:'28px', fontWeight:100, textAlign:'justify'}}>Waraney coco premium Coconut Shell Charcoal Cubes - Organic Hookah Coals - Natural Coconut Shisha Briquettes Lights Quickly Long Lasting burning time with No Odor and smokeless. 
Our cube briquettes are made from Indonesian selected coconut shell 
With high burning heat also
Spark Free No Foul Aftertaste for Smooth Smoking Experiences</div>
                        {/* <div>28x28x28 mm (48 pcs per 1 kg)</div>
                        <div>27x27x27 mm (56 pcs per 1 kg)</div>
                        <div>26x26x26 mm (64 pcs per 1 kg)</div>
                        <div>25x25x25 mm (72 pcs per 1 kg) – Most popular size</div>
                        <div>22x22x22 mm (96 pcs per 1 kg)</div>
                        <div>20x20x20 mm (120 pcs per 1 kg)</div> */}
                    </DivContentFontKeduaS>
                    
                </ContentType>
                <DivLeft1 style={{fontSize:'20px',position:"relative",   }}>
                    Size of Sisha/hookah

                </DivLeft1>
                <DivIconContenerSisha style={{position:"relative"}}>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img width={"250px"} src={CubeSize} alt="flame"></img>
                                        
                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                            Cube   
                                        </div>
                                        <div>
                                        26x26x26 
                                        </div>
                                        <div>
                                        1KG (54PCS) 
                                        </div>
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                    <img width={"250px"} src={CubeSize} alt="flame"></img>
                                        

                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                            Cube   
                                        </div>
                                        <div>
                                        25x25x25  
                                        </div>
                                        <div>
                                        1KG (72PCS)
                                        </div>
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                    
                                        

                                        <img width={"250px"} src={CubeSize} alt="flame"></img>
                                        
                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                            Cube   
                                        </div>
                                        <div>
                                        23.5x23.5x23.5
                                        </div>
                                        <div>
                                        1KG (84PCS) 
                                        </div>
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                    
                                        

                                        <img width={"250px"} src={CubeSize} alt="flame"></img>
                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                            Cube   
                                        </div>
                                        <div>
                                        22x22x22
                                        </div>
                                        <div>
                                        1KG (96PCS) 
                                        </div>
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img width={"250px"} src={HexaSize} alt="flame"></img>
                                        
                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                        Hexa 
                                        </div>
                                        <div>
                                        20x50  
                                        </div>
                                        
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img style={{marginTop:'-40px'}} width={"250px"} src={FingerSize} alt="flame"></img>
                                        
                                        <div style={{marginTop:'-30px',fontSize:'30px', fontWight:'600'}}>
                                        Finger 
                                        </div>
                                        <div>
                                        20x35 
                                        </div>
                                        
                                    
                                    </DivSize>
                    
                                    
                                   
                            </DivIconContenerSisha>
                            
                            <DivParnetSalessss style={{}}>

<DivSales >
    <DivJudulSales style={{ justifyContent:'center', display:'flex', alignItems:'center',height:'100px'}}>
        Platinum
    </DivJudulSales>
    <div style={{background:'rgba(213,101,27,0.1)',fontSize:'25px',height:'100px',width:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
        ash 1,6-1,9%

    </div>
    <DivParentDetail style={{display:'flex', flexDirection:'column', gap:'20px', fontFamily:"Tisa_Sans_Pro_Light",fontSize:'17px',marginTop:'20px', }}>

       
        <div>
            2h 30m+ hours burning time
            
        </div>
        <div>
            Moisture 5% max
             
        </div>
        <div>
            Calorific 8500 kcal
            
        </div>
        
        <div >
            Ash color natural white
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            Fix carbon 80% min
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            Volatile Matter 14,5% max
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            Drop test 1/10 times
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            <div> Ignition time 10min</div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            100% Coconut Charcoal Shell
        </div>
        {/* <a style={{textDecoration:'none', color:'white', }} href="https://wa.me/085156400713?text=I'm%20interested%20in%20your%20car%20for%20sale"> */}
            <DivButtonAsk onClick={()=>{window.location.href="https://wa.me/+628118951809?text=Get%20charcoal%20price"}} style={{zIndex:97, position:'relative', fontSize:'15px', fontFamily:'ArcaMajora3-Bold'}}>
                ASK THE PRICE
            </DivButtonAsk>
        {/* </a> */}
        
    </DivParentDetail>
</DivSales>
<DivSales  style={{position:'relative'}}>
    <DivJudulSalessss style={{ justifyContent:'center', display:'flex', alignItems:'center',height:'100px'}}>
        Diamond
    </DivJudulSalessss>
    <DivBestSeller style={{position:'absolute',}}>
        <img   src={BestSeller} alt="BestSeller" /> 
    </DivBestSeller>
    <div style={{background:'rgba(213,101,27,0.3)',fontSize:'25px',height:'100px',width:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
        ash 2,3-2,5%

    </div>
    <DivParentDetail style={{display:'flex', flexDirection:'column', gap:'20px', fontFamily:"Tisa_Sans_Pro_Light",fontSize:'17px',marginTop:'20px', }}>

        <div>
            100% free from smell
            

        </div>
        <div>
            2h+ hours burning time
            
        </div>
        <div>
            Moisture 6% max
            
        </div>
        <div>
            Calorific 7800 kcal
            
        </div>
        <div>
            Odor free
            
        </div>
        <div >
            Ash color natural white
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            Fix carbon 80% min
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            Volatile Matter 16% max
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            Drop test 2/10 times
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            <div> Ignition time 10min</div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            100% Coconut Charcoal Shell
        </div>
        {/* <a style={{textDecoration:'none', color:'white', }} href="https://wa.me/085156400713?text=I'm%20interested%20in%20your%20car%20for%20sale"> */}
            <DivButtonAsk onClick={()=>{window.location.href="https://wa.me/+628118951809?text=Get%20charcoal%20price"}} style={{zIndex:97, position:'relative', fontSize:'15px', fontFamily:'ArcaMajora3-Bold'}}>
                ASK THE PRICE
            </DivButtonAsk>
        {/* </a> */}
        
    </DivParentDetail>
</DivSales>
<DivSales  style={{position:'relative',marginTop:'30px',}}>
    <DivJudulSales style={{ justifyContent:'center', display:'flex', alignItems:'center',height:'100px'}}>
        Premium
    </DivJudulSales>
    
    <div style={{background:'rgba(213,101,27,0.1)',fontSize:'25px',height:'100px',width:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
        ash 2,3-2,5%

    </div>
    <DivParentDetail style={{fontFamily:"Tisa_Sans_Pro_Light",fontSize:'17px',display:'flex', flexDirection:'column', gap:'20px', marginTop:'20px', }}>

        
        <div>
            1h 30m+ hours burning time
            
        </div>
        <div>
            Moisture 8%
            
        </div>
        <div>
            Calorific 7500 kcal
            
        </div>
       
        <div >
            Ash color natural grey
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            Fix carbon 75% min
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            Volatile Matter 18% max
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            Drop test 4/10 times
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            <div> Ignition time 10min</div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            100% Coconut Charcoal Shell
        </div>
        {/* <a style={{textDecoration:'none', color:'white', }} href="https://wa.me/085156400713?text=I'm%20interested%20in%20your%20car%20for%20sale"> */}
            <DivButtonAsk  onClick={()=>{window.location.href="https://wa.me/+628118951809?text=Get%20charcoal%20price"}} style={{zIndex:97, position:'relative', fontFamily:'ArcaMajora3-Bold', fontSize:'15px'}}>
                ASK THE PRICE
            </DivButtonAsk>
        {/* </a> */}
        
    </DivParentDetail>
</DivSales>
</DivParnetSalessss>            
                           
                <ContentType id="nidzamContentType" style={{marginTop:'-5px', position:'relative',maxHeight:"500px"}}>
                    
                    <DivContentFontKeduaL style={{ fontWeight:100,fontSize:'13px', display:'flex', flexDirection:'column', gap:'20px', }}>
                        <DivContentFontKEdua style={{fontWeight:800}}>
                                    <div>Barbeque  </div> 
                                
                        </DivContentFontKEdua>
                        {/* <h2 data-splitting class="headline headline--fall">falling</h2> */}
                        <div style={{fontSize:'16px',lineHeight:'28px', fontFamily:"Tisa_Sans_Pro_Light",fontSize:'18px', textAlign:'justify'}}>Waraney Coconut Shell Charcoal BBQ Briquettes are 100% natural from Indonesia and designed to burn longer and hotter BBQ briquette.

Charcoal BBQ briquettes are easy to use, fast ignition time with long burning and will provide a high and consistent heat output for up to 3 hours approximately get that Real BBQ taste and excellent grilling experience with our finest charcoal barbeque premium eco friendly cocoshell


Each of our briquettes charcoal shape is available in custom size and packaging</div>

                        {/* <div>18×35 mm (102 pcs per 1 kg)</div>
                        <div>20×50 mm (64 pcs per 1 kg)</div>
                        <div>20×35 mm (94 pcs per 1 kg)</div>
                        <div>22×50 mm</div>
                        <div>22×48 mm</div>
                        <div>custom size available</div> */}
                    </DivContentFontKeduaL>
                    <DivImgKeduaSss ref={imgRefr4} style={{overflow:"hidden", position:'relative',height:`${heighContent}px` }}>
                        
                        <img alt="content2" src={img4} className="cuy" style={{objectFit:'cover',width:inviewImg4?"100%":"100%",transform:inviewImg4?'translateY(0%)':'translateY(100%)',transition:'0.8s',height:'100%'}}></img>
                    </DivImgKeduaSss>
                </ContentType>
                <DivLeft1 style={{fontSize:'20px',position:"relative",marginTop:'60px'   }}>
                    Size of Barbeque

                </DivLeft1>
                <DivIconContenerSisha style={{position:"relative"}}>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img width={"250px"} src={CubeSize} alt="flame"></img>
                                        
                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                            Cube   
                                        </div>
                                        <div>
                                        26x26x26 
                                        </div>
                                        <div>
                                        1KG (54PCS) 
                                        </div>
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                    <img width={"250px"} src={CubeSize} alt="flame"></img>
                                        

                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                            Cube   
                                        </div>
                                        <div>
                                        25x25x25  
                                        </div>
                                        <div>
                                        1KG (72PCS)
                                        </div>
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                    
                                        

                                        <img width={"250px"} src={CubeSize} alt="flame"></img>
                                        
                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                            Cube   
                                        </div>
                                        <div>
                                        23.5x23.5x23.5
                                        </div>
                                        <div>
                                        1KG (84PCS) 
                                        </div>
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                    
                                        

                                        <img width={"250px"} src={CubeSize} alt="flame"></img>
                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                            Cube   
                                        </div>
                                        <div>
                                        22x22x22
                                        </div>
                                        <div>
                                        1KG (96PCS) 
                                        </div>
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img width={"250px"} src={HexaSize} alt="flame"></img>
                                        
                                        <div style={{marginTop:'-3px',fontSize:'30px', fontWight:'600'}}>
                                        Hexa 
                                        </div>
                                        <div>
                                        20x50  
                                        </div>
                                        
                                    
                                    </DivSize>
                                    <DivSize style={{borderRadius:'30px',paddingBottom:'20px',background:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img style={{marginTop:'-40px'}} width={"250px"} src={FingerSize} alt="flame"></img>
                                        
                                        <div style={{marginTop:'-30px',fontSize:'30px', fontWight:'600'}}>
                                        Finger 
                                        </div>
                                        <div>
                                        20x35 
                                        </div>
                                        
                                    
                                    </DivSize>
                    
                                    
                                   
                            </DivIconContenerSisha>
                            <DivParnetSalessss style={{}}>

<DivSales  style={{position:'relative'}}>
    <DivJudulSalessss style={{ justifyContent:'center', display:'flex', alignItems:'center',height:'100px'}}>
        Diamond
    </DivJudulSalessss>
    {/* <DivBestSeller style={{position:'absolute',}}>
        <img   src={BestSeller} alt="BestSeller" /> 
    </DivBestSeller> */}
    <div style={{background:'rgba(213,101,27,0.3)',fontSize:'25px',height:'100px',width:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
        ash 2,3-2,5%

    </div>
    <DivParentDetail style={{display:'flex', flexDirection:'column', gap:'20px', fontFamily:"Tisa_Sans_Pro_Light",fontSize:'17px',marginTop:'20px', }}>

        <div>
            100% free from smell
            

        </div>
        <div>
            2h+ hours burning time
            
        </div>
        <div>
            Moisture 6% max
            
        </div>
        <div>
            Calorific 7800 kcal
            
        </div>
        <div>
            Odor free
            
        </div>
        <div >
            Ash color natural white
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            Fix carbon 80% min
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            Volatile Matter 16% max
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            Drop test 2/10 times
            
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            <div> Ignition time 10min</div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
            <InlineIcon icon="bx:check-circle" style={{fontSize:'20px'}}></InlineIcon>
            100% Coconut Charcoal Shell
        </div>
        {/* <a style={{textDecoration:'none', color:'white', }} href="https://wa.me/085156400713?text=I'm%20interested%20in%20your%20car%20for%20sale"> */}
            <DivButtonAsk onClick={()=>{window.location.href="https://wa.me/+628118951809?text=Get%20charcoal%20price"}} style={{zIndex:97, position:'relative',fontSize:'15px', fontFamily:'ArcaMajora3-Bold'}}>
                ASK THE PRICE
            </DivButtonAsk>
        {/* </a> */}
        
    </DivParentDetail>
</DivSales>

</DivParnetSalessss>  
                
                {/* <DivIconContenerSisha2 style={{position:"relative"}}>
                    <DivLeft style={{fontSize:'20px',position:"absolute",   transform:'rotate(-90deg)',}}>
                        Size of Barbeque

                    </DivLeft>
                    Belum Ada */}
                                    {/* <div style={{background:'#56341E',borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img width={"200px"} src={Flame} alt="flame"></img>
                                        <div >
                                            Cube 26x26x26 1KG (54PCS) 
                                        </div>
                                    
                                    </div>
                                    <div style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img width={"200px"} src={Flame} alt="flame"></img>
                                        <div >
                                            Cube 25x25x25 1KG (72PCS) 
                                        </div>
                                    
                                    </div>
                                    <div style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img width={"200px"} src={Flame} alt="flame"></img>
                                        <div >
                                            Cube 23.5x23.5x23.5 1KG (84PCS) 
                                        </div>
                                    
                                    </div>
                                    <div style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start',fontSize:'14px',paddingLeft:'15px',paddingRight:'15px'}}>
                                        <img width={"200px"} src={Flame2} alt="flame2"></img>
                                        <div>
                                            Hexa 20x50
                                        </div>
                                        {/* <div>high quality coconut</div> */}
                                    {/* </div>  */}
                            {/* </DivIconContenerSisha2> */}
                
                {m?.pathname=="/"?<DivIconContener >
                                    <DivIConCUy style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                                        <img style={{marginTop:'30px', filter:'grayscale(1)'}} width={"140px"} src={LowAshContent} alt="flame2"></img>
                                        <div  style={{marginTop:'10px',fontSize:'23px',marginBottom:'10px'}}>
                                            Low Ash Content 
                                        </div>
                                        
                                        <div style={{fontFamily:'Tisa_Sans_Pro_Light', textAlign:'center',textAlign:'center', padding:'0px 40px', width:'calc(100% - 80px)'}}>
                                        Heat logs produce very little ash. Their actual ash content equals around 1% from sawdust, and about 4.5% from bark
                                            
                                        </div>
                                    </DivIConCUy>
                                    <DivIConCUy style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                                        <img width={"200px"} src={Flame} alt="flame" style={{filter:'grayscale(1)'}}></img>
                                        <div style={{fontSize:'23px',marginTop:'-5px',marginBottom:'10px'}}>
                                            Long burning duration
                                        </div>
                                        
                                        <div style={{fontFamily:'Tisa_Sans_Pro_Light', fontSize:'15px',textAlign:'center', padding:'0px 40px', width:'calc(100% - 80px)'}}>Briquettes are economical to use, they last longer than any firewood, they burn steadily, and they produce even, intense heat.</div>
                                    </DivIConCUy>
                                    <DivIConCUy style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                                        <img width={"200px"} src={Flame2} alt="flame2" style={{filter:'grayscale(1)'}}></img>
                                        <div style={{fontSize:'23px',marginTop:'0px',marginBottom:'10px'}}>
                                            100% high quality coconut
                                        </div>
                                        <div style={{fontFamily:"Tisa_Sans_Pro_Light",fontSize:'15px',textAlign:'center', padding:'0px 40px', width:'calc(100% - 80px)'}}>
                                        Our products are manufactured using natural resources to ensure a superior quality of eco-friendly products and  100% from high quality handpicked coconut shell charcoal.
                                        </div>
                                    </DivIConCUy>
                                    
                                    <DivIConCUy style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                                        <img style={{marginTop:'30px',filter:'grayscale(1)'}} width={"140px"}  src={Ouderless} alt="flame2"></img>
                                        <div style={{fontSize:'23px',marginTop:'28px',marginBottom:'10px'}}>
                                            Odourless
                                        </div>
                                        <div style={{fontFamily:"Tisa_Sans_Pro_Light",fontSize:'15px',textAlign:'center', padding:'0px 40px', width:'calc(100% - 80px)'}}>
                                        Our products are manufactured using natural resources to ensure a superior quality of eco-friendly products and  100% from high quality handpicked coconut shell charcoal.
                                        </div>
                                        
                                    </DivIConCUy>
                            </DivIconContener>:""}
                            {m?.pathname=="/"?<DivIconContener  style={{paddingTop:m?.pathname=="/spec"?'100px':'70px', transition:'1s'}} >
                <ContentJudul >Custom Packaging with Your Brand</ContentJudul>
               
            </DivIconContener>:""}
            
            {m?.pathname=="/"?<DivIconContener style={{marginTop:'-30px'}}>
                <ContentTypeCoco style={{flexWrap:'wrap'}}>
                    {/* <DivImgKeduaS  style={{marginTop:'30px',width:'17%',overflow:"hidden", height:'100%'}}>
                        <img src={img10} style={{width:"100%",height:'100%',transform:'translateY(0%)',transition:'0.8s'}}></img>
                    </DivImgKeduaS> */}
                    <DivContentFontKeduaLS style={{  flexDirection:'column', gap:'20px',marginTop:'30px',lineHeight:'30px' }}>
                        {/* <h2 data-splitting class="headline headline--fall">falling</h2> */}
                       {/* <DivGa style={{width:"100px", borderTop:'2px solid #5D5D5D', height:'30px', textAlign:'justify'}}></DivGa> */}
                        <p style={{fontWeight:400,fontFamily:"Tisa_Sans_Pro_Light",fontSize:'20px',width:'100%',lineHeight:'28px',  textAlign:'justify'}}>
                            
                        {/* <img src={img10} style={{width:"100%",height:'100%',transform:'translateY(0%)',transition:'0.8s'}}></img> */}
                            
                        Coconut charcoal briquettes manufactured under your brand or Private Lable (OEM manufacturer). We can pack it in 1, 2, 5 and 10 kg carton boxes with full-color print, laminating and embossing. We keep your design secret, sign NDA and make it is safe from your competitors.
                            
                            </p>
                            <DivImgKeduaSsssass  style={{display:'flex', gap:'20px',maxHeight:'350px',width:'100%',overflow:"hidden", position:'relative'}}>
                        
                        <img alt="content2" src={imgbox} className="cuy" style={{objectFit:'cover',transform:'translateY(0%)',transition:'0.8s',height:'100%'}}></img>
                        <img alt="content2" src={img3} className="cuy" style={{objectFit:'cover',transform:'translateY(0%)',transition:'0.8s',height:'100%'}}></img>
                        
                        {/* <img src={imgbox} alt="content10" width="270px" height="160px" style={{float:'left',marginRight:"20px",marginBottom:'20px'}}/> */}
                        {/* <img src={imgbox} alt="content10" width="270px" height="160px" style={{float:'left',marginRight:"20px",marginBottom:'20px'}}/> */}
                    
                    </DivImgKeduaSsssass>
                    <div style={{marginTop:'100px'}}></div>
                            
                            {/* </p> */}
                       
                    </DivContentFontKeduaLS>

                </ContentTypeCoco>

            </DivIconContener>:null}

                            {m?.pathname=="/"?

                                <ContentType style={{alignItems:'center',marginTop:'-100px', position:'relative',}}>
                            <DivContener style={{alignItems:'center'}}>
                                    <DivWorldWideB  style={{fontSize:'45px',color:'white'}}>
                                        <div >We are Ready </div>
                                        <div  >to Ship World Wide</div>
                                        <div> </div>

                                    </DivWorldWideB>
                                    <DivImgKeduaSss style={{overflow:"hidden"}}>
                                        
                                        <img style={{width:"100%",transition:'0.8s'}}  src={WorldMap} alt="worldMap"></img>
                                    </DivImgKeduaSss>
                                    <DivWorldWideA  style={{fontSize:'35px',color:'white'}}>
                                        <div >We are Ready </div>
                                        <div  >to Ship World Wide</div>
                                        <div> </div>

                                    </DivWorldWideA>
                                    
                            </DivContener>
                                </ContentType>
                            :""}

                                {m?.pathname=="/"?<ContentTypeShipping style={{alignItems:'center', position:'relative',}}>
                            <DivContenerS    id="nidzamContentShipping">
                                    <div style={{fontSize:'35px',color:'white',marginTop:'30px' }}>Shipping & Export Details
                                    <ul  style={{fontFamily:"Tisa_Sans_Pro_Light",fontSize:'20px',lineHeight:'30px'}}>
                                        <li>Port of loading : Semarang or Surabaya, Indonesia</li>
                                        <li>Min Order : 18MT / 20"FCL</li> 
                                        <li>Production time : ± 21 Working days</li>
                                        <li>Packaging : 1 kg carton box, 10 kg master box</li>
                                        <li>Payment Terms : 50% DP, rest against B/L</li>
                                        <li>Payment Method : Bank Transfer (TT)</li>
                                    </ul>
                                    </div>
                                    <DivImgKeduaSss style={{maxHeight:'500px',overflow:"hidden",position:'relative',height:`${contentHeightsss>500?500:contentHeightsss}px`}}>
                                        <img style={{objectFit:'cover',width:"100%",transition:'0.8s',height:'100%'}}  src={ContainerImg} alt="containerIMG"></img>
                                    </DivImgKeduaSss>
                                    
                            </DivContenerS>
                                </ContentTypeShipping>:""}
                                <div style={{width:'100%', display:'flex', justifyContent:'center',alignItems:'center', fontSize:'35px', marginTop:'100px'}}>Gallery of Waraney Coco</div>
                                {m.pathname=="/"?<ContentTypeShipping1 style={{}}>
                                <div style={{marginTop:contentHeightsss>400?500:contentHeightsss+'px'}}></div>
                            <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <div style={{marginBottom:"500px"}}></div>
      </ContentTypeShipping1>:""}
            </DivContents>

           
        </section>
    )
}
export default Content