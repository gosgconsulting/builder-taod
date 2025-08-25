import { Builder } from "@builder.io/react";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const BuilderSection = ({ children, className }: SectionProps) => (
  <section className={`builder-section ${className || ""}`}>
    {children}
  </section>
);

// Register Section wrapper for better editing structure
Builder.registerComponent(BuilderSection, {
  name: "Section",
  canHaveChildren: true,
  inputs: [
    {
      name: "className",
      type: "string",
      defaultValue: "",
    },
  ],
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: {
        name: "Text",
        options: {
          text: "Add your content here...",
        },
      },
    },
  ],
});

export default BuilderSection;
