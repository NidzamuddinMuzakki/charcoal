import styled from "styled-components";
import { device } from "../../device";
const DivFooterFont = styled.div`
    div{
        @media ${device.mobileM} {
            height:40px;
            width:100%;
        }
        @media ${device.tablet} {
            height:70px;
            width:100%;
        }
        @media ${device.laptop} {
            height:70px;
            width:100%;
        }
    }

`
const DivParentFooter = styled.div`
    @media ${device.mobileM} {
        padding-left:30px;
        padding-right:30px;
        width:calc(100% - 60px);
        font-size:22px;
        padding-top:50px;
    }
    @media ${device.tablet} {
        padding-left:200px;
        padding-right:200px;
        width:calc(100% - 400px);
        padding-top:100px;
        font-size:30px;
    }
    @media ${device.laptop} {
        padding-left:200px;
        padding-right:200px;
        width:calc(100% - 400px);
        padding-top:50px;
        font-size:30px;
    }

`
const DivChild = styled.div`
    margin-top:-300px;
    @media ${device.mobileM} {
        padding-left:30px;
        padding-right:10px;
        width:calc(100% - 40px);
        font-size:25px;
        
    }
    @media ${device.tablet} {
        padding-left:200px;
        padding-right:200px;
        width:calc(100% - 400px);
        
        font-size:50px;
    }
    @media ${device.laptop} {
        padding-left:200px;
        padding-right:200px;
        width:calc(100% - 400px);
       
        font-size:50px;
    }
`

const DivChildsss = styled.div`
    position:relative;
    
    @media ${device.mobileM} {
        padding-left:30px;
        padding-right:10px;
        width:230px;
        margin-top:10px;
        margin-bottom:-10px;
        font-size:16px;
        
    }
    @media ${device.tablet} {
        padding-left:200px;
        padding-right:200px;
        width:230px;
       
        margin-top:10px;
        font-size:16px;
    }
    @media ${device.laptop} {
        padding-left:200px;
        padding-right:200px;
        width:230px;
        margin-top:10px;
       
        font-size:16px;
    }
`

export {
    DivFooterFont, DivParentFooter,DivChild,DivChildsss
}