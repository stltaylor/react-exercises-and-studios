import React from "react";

class HobbyLinks extends React.Component {
   render() {
      const hobbyLinks = ["https://kno.wled.ge/","https://www.popularwoodworking.com/"];
      return (
      <div>
            <a href = {hobbyLinks[0]}>WLED</a>
            <a href = {hobbyLinks[1]}>Woodworking</a>
      </div>
      );
   }
}

export default HobbyLinks;