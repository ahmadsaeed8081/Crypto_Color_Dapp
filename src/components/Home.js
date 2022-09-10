import React from "react";
import { useRef } from "react";
import { useColor } from "react-color-palette";
import Color from "./Color";
import "./Home.css";

function Home(props) {
  const divRef = useRef(null);
  const nameRef = useRef(null);
  const [color, setColor] = useColor("hex", "#11212");
  return (
    
    <div>
      <div className="label">Choose a Color</div>
      <div className="leftbox">
        <Color color={color} setColor={setColor} />
      </div>
      <div className="middlebox" ref={ divRef } >
        <div className="boxinbox" style={{ backgroundColor: color.hex }}></div>
        <div className="boxtext">{color.hex}</div>
        <div className="boxmaintext">crypto color collection</div>
      </div>
      <div className="input">
        <div className="inputabel" name="colorName" >Enter Name</div>
        <input
          type="text"
          className="form__field"
          placeholder="Type a name for your color"
          name="colorName"
          ref={nameRef}
        />
      </div>
      <div className="mint">mint</div>
      <div className="button" onClick={()=>{props.convert(divRef.current,nameRef.current.value,color.hex)}}>Mint your color now</div>
      <div className="rightbox">
        Note: If the Mint button is not responding, open and unlock Metamask
        with your password and try again
      </div>
    </div>
  );
}

export default Home;
