import styled from "styled-components";
import { device } from "../../device";
const DivParnetSalessss = styled.div`
    
    height:100%;
   
    margin-bottom:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:20;
    color:white;
    gap:30px;
    @media ${device.mobileM} {
        margin-top:-120px;
        margin-bottom:180px;
        flex-direction:column;
        width:100%;
    }
    @media ${device.tablet} {
        margin-top:140px;
        margin-bottom:80px;
        flex-direction:row;
        width:calc(100% - 70px);
    }
    @media ${device.laptop} {
        margin-top:140px;
        margin-bottom:80px;
        flex-direction:row;
        width:calc(100% - 70px);
      
        
    }
`
const DivParnetSales = styled.div`
    width:100vw;
    height:100%;
    margin-top:100px;
    margin-bottom:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:20;
    color:white;
    
    @media ${device.mobileM} {
        margin-top:80px;
        margin-bottom:-70px;
        flex-direction:column;
    }
    @media ${device.tablet} {
        margin-top:80px;
        margin-bottom:0px;
        flex-direction:row;
    }
    @media ${device.laptop} {
        margin-top:80px;
        margin-bottom:0px;
        flex-direction:row;
      
        
    }

`
const DivSales = styled.div`
    
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px 0px;
   
    flex-direction:column;
    border-radius: 18px;
    background: #202020;
    box-shadow:  5px 5px 10px #0d0d0d,
             -5px -5px 10px #333333;
    @media ${device.mobileM} {
        width:calc(100% - 30px);
    
    }
    @media ${device.tablet} {
        width:350px;
    }
    @media ${device.laptop} {
        width:350px;
        
    }

`
const DivButtonAsk = styled.div`
    position:relative;
    z-index:19;
    cursor:pointer;
    padding:10px 10px;
    display:flex;
    height:30px;
    justify-content:center;
    align-items:center;
    background:rgba(213,101,27,0.5);
    transition:0.3s;
    border-radius:10px;
    &:hover{
        font-size:17px;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
`
const DivParentDetail = styled.div`
    @media ${device.mobileM} {
        width:80%;


    }
    @media ${device.tablet} {
        width:80%;

    }
    @media ${device.laptop} {
        width:80%;
        
    }
`
const DivJudulSales = styled.div`
    @media ${device.mobileM} {
        margin-top:-25px;
        font-size:35px;
    }
    @media ${device.tablet} {
        margin-top:0px;

        font-size:50px;

    }
    @media ${device.laptop} {
        margin-top:0px;

        font-size:50px;
        
    }
`
const DivJudulSalessss = styled.div`
@media ${device.mobileM} {
    margin-top:0px;
    font-size:35px;
    
}
@media ${device.tablet} {
    margin-top:0px;

    font-size:50px;

}
@media ${device.laptop} {
    margin-top:0px;

    font-size:50px;
    
}
`
export{
    DivJudulSalessss,DivSales,DivParnetSales,DivButtonAsk,DivJudulSales, DivParentDetail,DivParnetSalessss
}