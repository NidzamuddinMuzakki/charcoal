import styled from "styled-components";
import { device } from "../../device";

const DivJudulQuestion = styled.div`
    text-decoration:none;
    background:none;
    text-align:justify;
    &:hover{
        text-decoration:underline;
    }
    @media ${device.mobileM} {
        padding-top:20px;
        padding-left:10px;
        padding-right:20px;
        font-size:12px;
        padding-bottom:20px;

    }
    @media ${device.tablet} {
        padding-top:20px;
        padding-left:20px;
        padding-right:20px;
        font-size:20px;
    
    }
    @media ${device.laptop} {
        padding-top:20px;
        padding-left:20px;
        padding-right:20px;
        font-size:20px;
        
    }
    

`
const DivJudulQuestions = styled.div`
    text-decoration:none;
    background:none;
    text-align:justify;
   
    @media ${device.mobileM} {
        padding-top:20px;
        padding-left:10px;
        padding-right:20px;
        font-size:13px;
        padding-bottom:20px;

    }
    @media ${device.tablet} {
        padding-top:20px;
        padding-left:20px;
        padding-right:20px;
        font-size:17px;
    
    }
    @media ${device.laptop} {
        padding-top:20px;
        padding-left:20px;
        padding-right:20px;
        font-size:17px;
        
    }
    

`
const DivIconQu = styled.div`
@media ${device.mobileM} {
   margin-right:-7px;
    

}
@media ${device.tablet} {
    margin-right:0px;
   

}
@media ${device.laptop} {
   margin-right:10px;
    
}
`
export {DivJudulQuestion,DivJudulQuestions,DivIconQu}