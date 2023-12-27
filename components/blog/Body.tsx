import React, { FC } from "react";
import SectionHeading from "../SectionHeading";


type BodyProps = {
  children: React.ReactNode,
  heading: string
}

const Body: FC<BodyProps> = ({heading, children}) => {
  return (
    <div className="max-w-sm">
      <SectionHeading>{heading}</SectionHeading>
      {children}
    </div>
  )
}


export default Body