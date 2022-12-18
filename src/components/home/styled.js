import styled from "styled-components";
import { device } from "../../device";
import Image from './../../assets/img/ezgif.com-gif-maker(8).webp'
import Image1 from './../../assets/img/ezgif.com-gif-maker (6).webp'
const SA = styled.ul`
@media ${device.mobileM} {
   
    margin-left:-20px;
    
    
    
}
@media ${device.tablet} {
    margin-left:-10px;
    
    

}
@media ${device.laptop} {
    margin-left:0px;
    
    
    
}
`
const DIVPAR = styled.div`
@media ${device.mobileM} {
   
    
    
    display:flex;
    justify-content:left;
    margin-top:0px;
    top:10px;
    
}
@media ${device.tablet} {
    
    display:flex;
    justify-content:center;
    margin-top:100px;
    top:-30px;

}
@media ${device.laptop} {
    margin-top:0px;
    display:flex;
    justify-content:center;
    top:-30px;
    
    
    
}
`
const DivPrice = styled.div`
opacity:0;
font-size:14px;
transition:0.3s;

display:flex;
justify-content:center;
font-family:ArcaMajora3-Bold;
&:hover{
    font-size:14px;
}
@media ${device.mobileM} {
   
    position:relative;
    width:100%;
}
@media ${device.tablet} {
    position:relative;
    width:50%;
    top:40px;
    

}
@media ${device.laptop} {
    width:50%;
    position:relative;
    top:40px;
    
}
`
const DivParentMenuTop = styled.div`
    background:rgba(0,0,0,0.4);
    transition:0.4s;
    @media ${device.mobileM} {
        justify-content:space-between;
        padding-left:10px;
        padding-right:10px;
        flex-flow:none;
        width:calc(100vw - 20px);
        
    }
    @media ${device.tablet} {
        justify-content:space-between;
        padding-left:20px;
        padding-right:20px;
        flex-flow:none;
        width:calc(100vw - 40px);

    }
    @media ${device.laptop} {
        padding-left:20px;
        padding-right:20px;
        width:calc(100vw - 40px);
        flex-flow:none;
       
        justify-content:left;
        
    }

`
const DivBurgerMenu = styled.div`
    position:relative;
    width:30px;
    height:30px;
    padding-right:20px;
    margin-top:-10px;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;
    cursor:pointer;
   
    @media ${device.mobileM} {
        display:block;
        
    }
    @media ${device.tablet} {
        display:block;

    }
    @media ${device.laptop} {
        
        display:none;
    }

`
const DivLogoMenuTop = styled.div`
  @media ${device.mobileM} {
    font-size:18px;
    width:10px;
    flex-flow:none;

  }
  @media ${device.tablet} {
    font-size:18px;
    width:100px;
    flex-flow:none;

  }
  @media ${device.laptop} {
    width:400px;
    font-size:28px;
    flex-flow:none;

  }
`
const DivMenuTop = styled.div`
    @media ${device.mobileM} {
      display:none; 
    }
    @media ${device.tablet} {
      display:none; 
    }
    @media ${device.laptop} {
      display:flex;

      width:300px;
    }

`
const DivHero  = styled.section`
    width:0;
    overflow:hidden;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:url('${Image}');
    background-size:cover;
    
`

const DivHitam = styled.div`
    position:absolute;
    width:100%;
    height:100vh;
    overflow-x:hidden;
    z-index:2;
    top:0;
    left:0;
    background:rgba(0,0,0,0.6);
`

const DivImg = styled.div`
    position:absolute;
    width:0;
    z-index:3;
    transition:0.5s;
    top:80px;
    height:480px;
    // background:url('${Image1}');
    background-size:cover;
    
    backround-repeat:no-repeat;
    svg{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
    img{
        filter:url(#filter1);
        position:absolute;
        top:0;
        left:0;
        width:100%;
        object-fit:cover;
        height:100%;
    }
    @media ${device.mobileM} {
        display:none;
    }
    @media ${device.tablet} {
        display:block;
        right:100px;
    }
    @media ${device.laptop} {
        display:block;
        right:100px;
    }
`
const DivPunya = styled.div`
    position:absolute;
    z-index:3;
    left:120px;
    color:white;
    overflow-x:hidden;
    font-size:23px;
    letter-spacing:1px;
    
    top:110px;
    @media ${device.mobileM} {
        left:20px;
        top:160px;
        font-size:20px;
    }
    @media ${device.tablet} {
        left:80px;
        top:110px;
    }
    @media ${device.laptop} {
        left:120px;
        top:110px;
    }
`
const DivChildJudulKecil = styled.div`
@media ${device.mobileM} {
  
    width:90%;
    margin-left:-15px;

    flex-direction:row;
 
    top:40px; 
    
   

}
@media ${device.tablet} {
    
    width:70%;
    margin-left:0px;
    top:90px; 
    flex-direction:row;

    
   

}
@media ${device.laptop} {

    
    top:90px; 
    margin-left:0px;
    flex-direction:row;
    width:50%;

    
}
`
const DIvJudulKecil = styled.div`
position:relative;
font-family:ArcaMajora3-Heavy;
@media ${device.mobileM} {
    
    font-size:12px;
    width:100%;
    top:10px;

}
@media ${device.tablet} {
    font-size:18px;
    width:100%;
    top:-70px;
   

}
@media ${device.laptop} {

    font-size:18px;
    width:100%;
    top:-70px;
    

    
}
`
const DivJudul = styled.div`
    position:absolute;
    z-index:3;
    overflow:hidden;
    left:0;
    color:white;
    display:flex;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    letter-spacing:1px;
    font-family:ArcaMajora3-Bold;
    @media ${device.mobileM} {
        
        position:absolute;
        font-size:30px;
        

    }
    @media ${device.tablet} {
        left:0px;
        font-size:30px;
        top:0px;
       

    }
    @media ${device.laptop} {
        left:0;
        top:0;
        font-size:50px;
        flex-direction:column;
    }
`

const DivContentJudul = styled.div`
    
    background:red;
    overflow-x:hidden;
    color:white;
`
const DivLeftMenu = styled.div`
    @media ${device.mobileM} {
        display:none;
    }
    @media ${device.tablet} {
        display:none;
    }
    @media ${device.laptop} {
        display:flex;
    }
`

const DivRightMenu = styled.div`
    @media ${device.mobileM} {
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
     

    }
    @media ${device.tablet} {
        width:100%;
        display:flex;
        flex-direction:column;

    }
    @media ${device.laptop} {
        width:50%;
        
    }
`


const DivIcon= styled.div`
    @media ${device.mobileM} {
        top:15%;
    }
    @media ${device.tablet} {
        top:15%;

    }
    @media ${device.laptop} {
       top:15%;
        
    }
`
const DivContenerS = styled.div`
@media ${device.mobileM} {
    display:flex; 
    align-items:center;
    flex-direction:column;
    margin-top:-150px;
  

    gap:20px;
    width:calc(100%);

}
@media ${device.tablet} {
    display:flex; 
    flex-direction:row;
    align-items:start;
    gap:20px;
    margin-bottom:0px;
    margin-top:-20px;
    width:calc(100% - 70px);
}
@media ${device.laptop} {
    display:flex; 
    flex-direction:row;
    align-items:start;
    margin-bottom:0px;
    margin-top:-20px;
    gap:20px;
    width:calc(100% - 70px);
    
}
`
const DivContener= styled.div`
@media ${device.mobileM} {
    display:flex; 
    flex-direction:column;
    align-items:center;
    margin-left:0px;
    justify-content:center;
    gap:20px;
    margin-top:100px;
    width:calc(100%);
}
@media ${device.tablet} {
    display:flex; 
    flex-direction:row;
    gap:20px;
    margin-left:-30px;
    margin-top:30px;
    width:calc(100% - 70px);

}
@media ${device.laptop} {
    display:flex; 
    flex-direction:row;
    gap:20px;
    margin-left:-30px;
    margin-top:0px;
    width:calc(100% - 70px);
    
}
`
const DivIconContenerSisha2 = styled.div`
@media ${device.mobileM} {
    display:flex;
    gap:50px;
    color:white;
    width:calc(100% - 30px);
    flex-direction:column;
   
    justify-content:center;
    background:#242424;
    margin-top:-180px;
    margin-bottom:200px;
}
@media ${device.tablet} {
    display:flex;
    gap:50px;
    color:white;
    flex-direction:row;
    justify-content:center;
    width:calc(100% - 70px);
    background:#242424;
    margin-Top:80px;
    margin-bottom:80px;


}
@media ${device.laptop} {
    display:flex;
    gap:50px;
    color:white;
    flex-direction:row;
    width:calc(100% - 30px);
    justify-content:center;
    background:#242424;
    margin-Top:80px;
    margin-bottom:80px;
    
}
`
const DivIconContenerSisha = styled.div`
@media ${device.mobileM} {
    display:flex;
    gap:50px;
    color:white;
    width:calc(100% - 30px);
    flex-direction:column;
   
    justify-content:center;
    background:#242424;
    margin-top:-180px;
    margin-bottom:200px;
}
@media ${device.tablet} {
    display:flex;
    gap:50px;
    color:white;
    flex-direction:row;
    flex-flow:wrap;
    justify-content:center;
   
    background:#242424;
    margin-Top:10px;
    margin-bottom:80px;
    width:calc(100% - 100px);

}
@media ${device.laptop} {
    display:flex;
    gap:50px;
    color:white;
    flex-direction:row;
    flex-flow:wrap;
    justify-content:center;
    background:#242424;
    margin-Top:10px;
    margin-bottom:80px;
    padding-left:30px;
    padding-right:30px;

    width:calc(100% - 100px);

    
}
`
const DivIconContener = styled.div`

@media ${device.mobileM} {
    display:flex;
    gap:50px;
    color:white;
    width:calc(100% - 30px);
    flex-direction:column;
    flex-wrap:no-wrap;
    justify-content:center;
    background:#242424;
    margin-top:80px;
    
}
@media ${device.tablet} {
    display:flex;
    gap:50px;
    color:white;
    flex-direction:row;
    justify-content:center;
    width:calc(100% - 70px);
    background:#242424;
    flex-flow:wrap;
    margin-Top:80px;
    margin-bottom:20px;


}
@media ${device.laptop} {
    display:flex;
    gap:50px;
    color:white;
    flex-direction:row;
    width:calc(100% - 70px);
    flex-flow:wrap;
    justify-content:center;
    background:#242424;
    margin-Top:80px;
    margin-bottom:20px;
    
}

`
const DivIconContenerS = styled.div`

@media ${device.mobileM} {
    display:flex;
    gap:50px;
    color:white;
    width:calc(100% - 150px);
    flex-direction:column;
   
    justify-content:center;
    background:#242424;
    margin-top:80px;
    margin-bottom:90px;
}
@media ${device.tablet} {
    display:flex;
    gap:50px;
    color:white;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
    background:#242424;
    margin-Top:20px;
    margin-bottom:40px;
    width:calc(100% - 400px);

}
@media ${device.laptop} {
    display:flex;
    gap:50px;
    color:white;
    flex-direction:row;
    flex-wrap:wrap;

    width:calc(100% - 400px);
    justify-content:center;
    background:#242424;
    margin-Top:20px;
    margin-bottom:40px;
    
}

`
const DivHeaderMenu = styled.div`
    
   
    div{
        width:0%;
        transition:0.3s;
    }
    &:hover{
        div{

            width:100%;
        }
    }
`
export {
    DivIconContenerSisha,DivIconContenerS,DivIconContener,DivContenerS,DivContener,DivChildJudulKecil, DivParentMenuTop,DIvJudulKecil,DivPrice,
    DivBurgerMenu,DivLogoMenuTop,DivMenuTop,DivHero, 
    DivIcon,DivHitam, DivJudul, DivPunya,DivContentJudul,
    DivImg,DivLeftMenu,DivRightMenu,DIVPAR,SA,DivIconContenerSisha2,DivHeaderMenu
}