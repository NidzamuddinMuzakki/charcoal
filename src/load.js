const LazyLoad = ({imagesLoaded}) => {
    return(
      <div style={{display:!imagesLoaded?"flex":"none",position:'fixed',top:0, left:0, right:0, bottom:0,zIndex:1000,width:'100vw',color:'white',fontSize:'50px',fontFamily:'MaisonNeue-Medium', height:'100vh', background:"#242424",  justifyContent:'center',alignItems:'center'}}>
        <div style={{textAlign:'center'}}>
  
          <div style={{marginBottom:'20px'}}>WARANEY COCO</div>
          <span className="loader"></span>
        </div>
      </div>
    )

  };

export default LazyLoad