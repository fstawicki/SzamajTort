import React from "react";



const HeroPage = (props) => {

    return(
        <div className="heroOverlay">
        {props.children}
        
        </div>
    )


}

export default HeroPage;