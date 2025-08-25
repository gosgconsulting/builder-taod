import { Builder } from "@builder.io/react";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BuilderContainer = ({ children, className }: ContainerProps) => (
  <div className={`container mx-auto px-4 ${className || ""}`}>
    {children}
  </div>
);

// Register Container for layout structure
Builder.registerComponent(BuilderContainer, {
  name: "Container",
  inputs: [
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
  ],
  canHaveChildren: true,
});

export default BuilderContainer;
