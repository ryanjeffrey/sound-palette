import { useContext } from "react";
import { ColorContext } from "../ColorContext";

export default function PianoBackgroundColor() {
  const { setCurrentBackground } = useContext(ColorContext);
  
  return (
    <div></div>
  );
}
