import styled from "styled-components";
import { device } from "../../device";
const DivContactButton = styled.div`
    font-size:30px;
    transition:0.3s;
    &:hover{
        font-size:33px;
    }
   
`

const DivForm = styled.form`
    @media ${device.mobileM} {
        margin-left:0px;
        width:90%;
    }
    @media ${device.tablet} {
        margin-left:0px;
        width:50%;
    }
    @media ${device.laptop} {
        width:50%;
        margin-left:0px;

        
    }
    
`

const DivContact = styled.div`
@media ${device.mobileM} {
    flex-direction:column;
    margin-top:-60px;
}
@media ${device.tablet} {
    flex-direction:row;
    margin-top:0px;
}
@media ${device.laptop} {
    flex-direction:row;
    margin-top:0px;

    
}
`

export{
    DivContactButton,DivForm,DivContact
}