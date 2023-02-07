import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

const App = () => {
  let url = "";

  // const [open , setOpen] = useState(true)

  
  useEffect(() => {
    if (isAndroid) {
      // alert(5)
      url =
        "intent://social.stockedge.com/#Intent;scheme=https;package=com.stockedge.social;end";

      // console.log(window.location.url);
    } else if (isIOS) {
      window.location.replace("instagram://");

      setTimeout(() => {
        window.location.replace(
          "https://apps.apple.com/us/app/instagram/id389801252"
        );
      }, 10000);
    } else {
      // window.location.replace("https://instagram.com");
    }
  }, []);

  const handleClick = () => {
    window.location.replace(url);
  };

  const handleClose = ()=>{
    
  }

  return (
    <div className="App">

      {isAndroid ?  <div>
        <div onClick={handleClick} style={
          {color:"white" , backgroundColor:"#99bbff" , height:"70px" , display:"flex" , justifyContent:"center" , alignItems:"center"}
        }>Open in App</div>
      </div>:null }
    
      {/* {isAndroid ? (
        <button>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://play.google.com/store/apps/details?id=com.stockedge.social&referrer=utm_source=sesocial&utm_medium=website&utm_content=download&utm_campaign=websiteinstall
        "
          >
            Open Android app
          </a>
        </button>
      ) : isIOS ? (
        <a href="https://apps.apple.com/us/app/instagram/id389801252">
          Open iOS app
        </a>
      ) : (
        <a href="https://instagram.com">Open Web app</a>
      )} */}
    </div>
  );
};

export default App;
