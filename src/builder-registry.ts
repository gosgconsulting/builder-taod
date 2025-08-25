import { Builder } from "@builder.io/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Register shadcn/ui Button component
Builder.registerComponent(Button, {
  name: "Button",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8aa0c0b8e5b54d8a9b8e8c8d8e8f8g8h",
  defaultStyles: {
    appearance: "none",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Click me",
    },
    {
      name: "variant",
      type: "string",
      enum: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      defaultValue: "default",
    },
    {
      name: "size",
      type: "string",
      enum: ["default", "sm", "lg", "icon"],
      defaultValue: "default",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

// Register Card components
Builder.registerComponent(Card, {
  name: "Card",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F9bb0c0b8e5b54d8a9b8e8c8d8e8f8g8h",
  defaultStyles: {
    minHeight: "20px",
    minWidth: "20px",
  },
  inputs: [
    {
      name: "className",
      type: "string",
    },
  ],
  canHaveChildren: true,
});

Builder.registerComponent(CardHeader, {
  name: "Card Header",
  inputs: [
    {
      name: "className",
      type: "string",
    },
  ],
  canHaveChildren: true,
});

Builder.registerComponent(CardTitle, {
  name: "Card Title",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Card Title",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(CardDescription, {
  name: "Card Description",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Card description text",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(CardContent, {
  name: "Card Content",
  inputs: [
    {
      name: "className",
      type: "string",
    },
  ],
  canHaveChildren: true,
});

// Register Badge component
Builder.registerComponent(Badge, {
  name: "Badge",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F7aa0c0b8e5b54d8a9b8e8c8d8e8f8g8h",
  defaultStyles: {
    display: "inline-flex",
  },
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Badge",
    },
    {
      name: "variant",
      type: "string",
      enum: ["default", "secondary", "destructive", "outline"],
      defaultValue: "default",
    },
  ],
});

// Custom components will be registered separately in component files
