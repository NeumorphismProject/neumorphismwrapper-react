import React from "react";
import { NeumorphismPannel, getNeumorphismStyle, isValidColor, NeumorphismStyleParams } from "neumorphism-pannel"

export interface PreviewProps extends NeumorphismStyleParams {
}
export default function Preview(props: PreviewProps) {
  return <NeumorphismPannel {...props}
    style={{
      width: "300px",
      height: "300px",
      margin: "0 auto"
    }}>
  </NeumorphismPannel>
}