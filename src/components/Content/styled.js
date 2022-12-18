import styled from "styled-components";
import { device } from "../../device";
const DivContentFontKeduaS = styled.div`

    @media ${device.mobileM} {
        display:none;
       
       
        margin-top:0px;
    }
    @media ${device.tablet} {
        display:flex;
        width:calc(35% - 0px);
        margin-top:0px;

    }
    @media ${device.laptop} {
        display:flex;
        width:calc(35% - 0px);
        padding-right:30px;
        margin-top:40px;
       
    }
`
const DivContentFontKeduaB = styled.div`
    @media ${device.mobileM} {
        display:flex;
        width:calc(100% - 30px);
        padding-right:30px;
        margin-top:-100px;
    }
    @media ${device.tablet} {
        display:none;
        width:calc(35% - 0px);
        margin-top:0px;

    }
    @media ${device.laptop} {
        display:none;
        width:calc(35% - 0px);
        margin-top:0px;
    }
`
const DIvimgsss = styled.div`
    position:relative;
    width:35%;
    background-size:cover;
    
    @media ${device.mobileM} {
        width:calc(100% - 30px);
        height:450px;
    }
    @media ${device.tablet} {
        width:35%;
        height:100%;
    }
    @media ${device.laptop} {
        height:100%;
        
        width:35%;
        
    }
    
`
const DivContent = styled.div`
    
    opacity:1;
    overflow-x:hidden;
   
    
    @media ${device.mobileM} {
       
        padding-left:30px;
        
        width:calc(100vw - 60px);
    }
    @media ${device.tablet} {
        padding-left:80px;
        width:calc(100vw - 160px);
    }
    @media ${device.laptop} {
        padding-left:170px;
        padding-right:170px;
        width:calc(100vw - 400px);
        
    }

`

const DivContents = styled.div`
    
    opacity:1;
    overflow-x:hidden;
    
    
    @media ${device.mobileM} {
        padding-left:40px;
        margin-top:-240px;
        width:calc(100vw - 60px);
    }
    @media ${device.tablet} {
        padding-left:80px;
        padding-rigt:80px;

        margin-top:0px;
        width:calc(100vw - 100px);
    }
    @media ${device.laptop} {
        padding-left:170px;
        padding-right:300px;
       
        margin-top:0px;
        width:calc(100vw - 330px);
        
    }

`
const ContentJudul = styled.div`
  
    letter-spacing:3px;
    font-size:13px;
    line-height:30px;
    position:relative;
    padding-left:10px;
    &:before {
        content: "";
        position:absolute;
        left:-10px;
        display: inline-block;
        width:10px;
        height:10px;
        background:#D5651B;
    }
    @media ${device.mobileM} {
        font-size:18px;
        width:calc(100%);
    }
    @media ${device.tablet} {
        font-size:22px;
        width:calc(100% );
        
    }
    @media ${device.laptop} {
        font-size:22px;
       
        width:calc(100% );
    }
`
const ContentPertama = styled.div`

    
    margin-top:0px;
    
    font-weight:600;
   
    position:relative;
    @media ${device.mobileM} {
        font-size:22px;
        width:calc(100% - 30px);
    }
    @media ${device.tablet} {
        font-size:27px;
        width:350px;
    }
    @media ${device.laptop} {
        font-size:27px;
        width:520px;
    }
`
const ContentFlex = styled.div`
    display:flex;
    justify-content:left;
    margin-top:50px;
    
    @media ${device.mobileM} {
        flex-direction:column;
        width:calc(100% - 30px);

    }
    @media ${device.tablet} {
        flex-direction:row;
        width:calc(100% - 130px);

    }
    @media ${device.laptop} {
        flex-direction:row;
        width:calc(100% - 130px);
    }
    
`
const DivGaris = styled.div`
    @media ${device.mobileM} {
        margin-top:-20px;
        margin-bottom:30px;
    }
    @media ${device.tablet} {
        margin-top:0;
    }
    @media ${device.laptop} {
        margin-top:0;
    }
`
const ContentParagraf = styled.div`
    font-size:10px;
    line-height:2;
   
  
    font-weight:100;
    
    @media ${device.mobileM} {
        width:calc(100% - 30px);
    }
    @media ${device.tablet} {
        width:50%;
    }
    @media ${device.laptop} {
        width:50%;
    }
`
const ContentTypeShipping = styled.div`
    width:100%;
    display:flex;
    
    @media ${device.mobileM} {
        flex-direction:column;
        align-items:center;
        min-height:700px;
        margin-bottom:-400px;
    }   
    @media ${device.tablet} {
        flex-direction:row;
        align-items:start;
        min-height:300px;
        margin-bottom:0px;
        margin-top:40px;
    }
    @media ${device.laptop} {
        flex-direction:row;
        align-items:start;
        min-height:300px;
        margin-bottom:0px;
        margin-top:40px;


    }
`
const ContentTypeShipping1 = styled.div`
   
    display:flex;
    
    @media ${device.mobileM} {
        flex-direction:column;
        align-items:center;
        min-height:700px;
        width:93%;
        margin-bottom:-400px;
    }   
    @media ${device.tablet} {
        flex-direction:row;
        align-items:start;
        min-height:300px;
        margin-bottom:0px;
        margin-top:40px;
        width:97%;
    }
    @media ${device.laptop} {
        flex-direction:row;
        align-items:start;
        min-height:300px;
        margin-bottom:0px;
        margin-top:40px;
        width:97%;

    }
`
const ContentTypeCoco = styled.div`
width:100%;
display:flex;

@media ${device.mobileM} {
    flex-direction:column;
    align-items:center;
    min-height:630px;
}   
@media ${device.tablet} {
    flex-direction:row;
    align-items:start;
    min-height:300px;

}
@media ${device.laptop} {
    flex-direction:row;
    align-items:start;
    min-height:300px;


}
`
const ContentType = styled.div`
    width:100%;
    display:flex;
    
    @media ${device.mobileM} {
        flex-direction:column;
        align-items:center;
        min-height:700px;
    }   
    @media ${device.tablet} {
        flex-direction:row;
        align-items:start;
        min-height:300px;

    }
    @media ${device.laptop} {
        flex-direction:row;
        align-items:start;
        min-height:300px;


    }
    
`
const ContentType1 = styled.div`
    width:100%;
    display:flex;
    
    @media ${device.mobileM} {
        flex-direction:column;
        height:370px;
    }
    @media ${device.tablet} {
        flex-direction:row;
        height:100%;
    }
    @media ${device.laptop} {
        flex-direction:row;
        height:100%;
    }
    
`
const DivLeft1 = styled.div`
    &:before {
        content: "";
        position:absolute;
        left:-20px;
        display: inline-block;
        width:10px;
        height:10px;
        background:#D5651B;
    }
    
    
    @media ${device.mobileM} {
        
        display:block;
        // padding-top:-300px;
        height:200px;
        margin-top:-230px;
        margin-bottom:50px;
        
    }
    @media ${device.tablet} {
        
        display:block;
        margin-top:50px;
        margin-bottom:60px;
        left:0px;
        height:20px;
    }
    @media ${device.laptop} {
        
        display:block;
        margin-top:50px;
    margin-bottom:60px;
    height:20px;
    
    left:35px;
       

        
    }
`
const DivLeft = styled.div`
    &:before {
        content: "";
        position:absolute;
        left:-20px;
        display: inline-block;
        width:10px;
        height:10px;
        background:#D5651B;
    }
    @media ${device.mobileM} {
        left:-98px;
        display:block;
        top:58%;
    }
    @media ${device.tablet} {
        left:-60px;
        display:block;
        font-size:28px;
        top:112px;
    }
    @media ${device.laptop} {
        left:-60px;
        display:block;
        font-size:28px;
        top:112px;
        
    }
`
const DivContentFontKEdua = styled.div`
    color:#D5651B;
    margin-bottom:20px;
    @media ${device.mobileM} {
        font-size:32px;
        margin-top:20px;
    }
    @media ${device.tablet} {
        font-size:32px;
        margin-top:0px;
    }
    @media ${device.laptop} {
        font-size:25px;
        margin-top:0px;
    }
`
const DivContentFont = styled.div`
    color:#D5651B;
    margin-bottom:10px;
    @media ${device.mobileM} {
        font-size:32px;

    }
    @media ${device.tablet} {
        font-size:32px;
    
    }
    @media ${device.laptop} {
        font-size:25px;
        
    }
`
const DivParentFont = styled.div`
    @media ${device.mobileM} {
        width:40%;
        position:absolute;
        top:40%;
        left:60%
    }
    @media ${device.tablet} {
        width:65%;
        position:relative;
        left:0%
    }
    @media ${device.laptop} {
        width:65%;
        position:relative;
    }
`

const DivContentFontKedua = styled.div`
    
    @media ${device.mobileM} {
       
        width:calc(100% - 0px);
        margin-top:0px;
    }
    @media ${device.tablet} {
       
        width:calc(35% - 0px);
        margin-top:0px;

    }
    @media ${device.laptop} {
      
        width:calc(35% - 0px);
        margin-top:0px;
    }

`
const DivContentFontKeduaLS = styled.div`
    
@media ${device.mobileM} {
    
    width:calc(100% - 30px);
    margin-top:150px;
    margin-left:10px;
    margin-right:30px;
    font-size:10px;

}
@media ${device.tablet} {
   
    width:calc(100% - 0px);
    margin-top:0px;
    margin-left:10px;
    margin-right:0px;
    font-size:15px;


}
@media ${device.laptop} {
  
    width:calc(100% - 0px);
    
    margin-top:0px;
    margin-right:0px;
    margin-left:10px;
    font-size:15px;


}

`
const DivContentFontKeduaL = styled.div`
    
    @media ${device.mobileM} {
        
        width:calc(100% - 30px);
        padding-right:30px;
        margin-top:-150px;
    }
    @media ${device.tablet} {
       
        width:calc(35% - 0px);
        margin-top:0px;

    }
    @media ${device.laptop} {
      
        width:calc(35% - 0px);
        margin-left:12px;
        margin-top:40px;
    }

`
const DivImgKeduaS = styled.div`
height:100%;
@media ${device.mobileM} {
    display:none;
    
}
@media ${device.tablet} {
    width:55%;
    display:block;

}
@media ${device.laptop} {
    width:55%;
    display:block;
    

}

`
const DivImgKedua = styled.div`
    height:400px;
  
    @media ${device.mobileM} {
        width:calc(100% - 30px);
        margin-top:30px;
        margin-left:-28px;
        
    }
    @media ${device.tablet} {
        width:55%;
    }
    @media ${device.laptop} {
        width:55%;
       
        marginTop:30px;
        margin-left:10px;
    }



`
const DivImgKeduaSsssass =styled.div`
height:400px;
display:flex;
@media ${device.mobileM} {
    width:calc(100% - 30px);
    margin-top:30px;
    margin-left:-28px;
    flex-direction:column;
    img{
        width:100%;
    }
    
}
@media ${device.tablet} {
    width:calc(55% - 35px);
    flex-direction:row;
    img{
        width:50%;
    }

}
@media ${device.laptop} {
    width:calc(55% - 30px);
    margin-left:20px;
    marginTop:30px;
    flex-direction:row;
    img{
        width:50%;
    }
}

`
const DivImgKeduaSss = styled.div`
    height:400px;
  
    @media ${device.mobileM} {
        width:calc(100% - 30px);
        margin-top:30px;
        margin-left:-28px;
        
    }
    @media ${device.tablet} {
        width:calc(55% - 35px);
    }
    @media ${device.laptop} {
        width:calc(55% - 30px);
        margin-left:20px;
        marginTop:30px;
    }

`
const DivGa = styled.div`
@media ${device.mobileM} {
    display:block;
    font-size:10px;

    
}
@media ${device.tablet} {
    display:none;
    font-size:13px;
}
@media ${device.laptop} {
    display:none;
    font-size:13px;
  
}
`
const DivWorldWideA = styled.div`
    @media ${device.mobileM} {
        display:none;
    }
    @media ${device.tablet} {
        display:block;
    }
    @media ${device.laptop} {
        display:block;
    }
`
const DivWorldWideB = styled.div`
    @media ${device.mobileM} {
        display:block;
        
    }
    @media ${device.tablet} {
        display:none;
    
    }
    @media ${device.laptop} {
        display:none;
    }
`
const DivSize = styled.div`
transition:0.3s;

&:hover{
    box-shadow:5px 5px 10px #D5651B, -5px -5px 10px #D5651B;
    border:0px solid #56341E;
    cursor:pointer;
}
@media ${device.mobileM} {
    width:100%;
    
}
@media ${device.tablet} {
    width:180px;
}
@media ${device.laptop} {
    width:180px;
    height:250px;
}
`
const DivIConCUy = styled.div`
@media ${device.mobileM} {
    width:100%;
    
}
@media ${device.tablet} {
    width:350px;
}
@media ${device.laptop} {
    width:350px;
    
}
`
const DivBestSeller = styled.div`
@media ${device.mobileM} {
    top:-40px;
    right:-40px;
    img{
        width:150px;
    }
    
}
@media ${device.tablet} {
    top:-120px;
    right:-90px;
    img{
        width:230px;
    }
}
@media ${device.laptop} {
    top:-100px;
    right:-100px;
    img{
        width:200px;
    }
    
}
`
export{ 
    
    DivImgKeduaSsssass,ContentTypeShipping1,DivBestSeller,DivIConCUy,DivSize,ContentTypeCoco,ContentTypeShipping, DivContentFontKEdua,DivWorldWideB,DivWorldWideA
    ,DivImgKeduaSss,DivGa,DivContentFontKeduaLS,DivImgKeduaS,DivContents,DivContentFontKeduaL,DivContentFontKeduaS,DivContentFontKeduaB,DivContent,ContentJudul,ContentPertama,ContentFlex,ContentParagraf, DivGaris,
    ContentType,ContentType1,DivLeft,DivLeft1,DIvimgsss,DivContentFont,DivParentFont,DivContentFontKedua,DivImgKedua
}