import { ColorPicker } from "react-color-palette";
import "./color.css";

const Color = ({ color, setColor }) => {
  return (
    <ColorPicker
      width={230}
      height={180}
      color={color}
      onChange={setColor}
      hideHSV={true}
      hideRGB={false}
      dark
    />
  );
};

export default Color;
