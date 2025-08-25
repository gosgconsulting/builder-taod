import { Builder } from "@builder.io/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DataExample from "@/components/DataExample";
import BuilderSection from "@/components/BuilderSection";
import BuilderContainer from "@/components/BuilderContainer";
import BuilderHeroSection from "@/components/BuilderHeroSection";
import BuilderGallery from "@/components/BuilderGallery";
import BuilderStatistics from "@/components/BuilderStatistics";
import BuilderCarousel from "@/components/BuilderCarousel";
import BuilderTabsSection from "@/components/BuilderTabsSection";

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

// Register Input component
Builder.registerComponent(Input, {
  name: "Input",
  inputs: [
    {
      name: "type",
      type: "string",
      enum: ["text", "email", "password", "number", "tel", "url"],
      defaultValue: "text",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter text...",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

// Register Label component
Builder.registerComponent(Label, {
  name: "Label",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Label",
    },
    {
      name: "htmlFor",
      type: "string",
    },
  ],
});

// Register Textarea component
Builder.registerComponent(Textarea, {
  name: "Textarea",
  inputs: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter your message...",
    },
    {
      name: "rows",
      type: "number",
      defaultValue: 4,
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

// Register Separator component
Builder.registerComponent(Separator, {
  name: "Separator",
  inputs: [
    {
      name: "orientation",
      type: "string",
      enum: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
  ],
});

// Register Alert components
Builder.registerComponent(Alert, {
  name: "Alert",
  inputs: [
    {
      name: "variant",
      type: "string",
      enum: ["default", "destructive"],
      defaultValue: "default",
    },
  ],
  canHaveChildren: true,
});

Builder.registerComponent(AlertTitle, {
  name: "Alert Title",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Alert Title",
    },
  ],
});

Builder.registerComponent(AlertDescription, {
  name: "Alert Description",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Alert description text",
    },
  ],
});

// Register Avatar components
Builder.registerComponent(Avatar, {
  name: "Avatar",
  canHaveChildren: true,
});

Builder.registerComponent(AvatarImage, {
  name: "Avatar Image",
  inputs: [
    {
      name: "src",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
    },
    {
      name: "alt",
      type: "string",
      defaultValue: "Avatar",
    },
  ],
});

Builder.registerComponent(AvatarFallback, {
  name: "Avatar Fallback",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "AB",
    },
  ],
});

// Register Progress component
Builder.registerComponent(Progress, {
  name: "Progress",
  inputs: [
    {
      name: "value",
      type: "number",
      defaultValue: 50,
      min: 0,
      max: 100,
    },
  ],
});

// Register Skeleton component
Builder.registerComponent(Skeleton, {
  name: "Skeleton",
  inputs: [
    {
      name: "className",
      type: "string",
      defaultValue: "h-4 w-[250px]",
    },
  ],
});

// Register Tabs components
Builder.registerComponent(Tabs, {
  name: "Tabs",
  inputs: [
    {
      name: "defaultValue",
      type: "string",
      defaultValue: "tab1",
    },
  ],
  canHaveChildren: true,
});

Builder.registerComponent(TabsList, {
  name: "Tabs List",
  canHaveChildren: true,
});

Builder.registerComponent(TabsTrigger, {
  name: "Tabs Trigger",
  inputs: [
    {
      name: "value",
      type: "string",
      defaultValue: "tab1",
    },
    {
      name: "children",
      type: "text",
      defaultValue: "Tab 1",
    },
  ],
});

Builder.registerComponent(TabsContent, {
  name: "Tabs Content",
  inputs: [
    {
      name: "value",
      type: "string",
      defaultValue: "tab1",
    },
  ],
  canHaveChildren: true,
});

// Register Accordion components
Builder.registerComponent(Accordion, {
  name: "Accordion",
  inputs: [
    {
      name: "type",
      type: "string",
      enum: ["single", "multiple"],
      defaultValue: "single",
    },
    {
      name: "collapsible",
      type: "boolean",
      defaultValue: true,
    },
  ],
  canHaveChildren: true,
});

Builder.registerComponent(AccordionItem, {
  name: "Accordion Item",
  inputs: [
    {
      name: "value",
      type: "string",
      defaultValue: "item-1",
    },
  ],
  canHaveChildren: true,
});

Builder.registerComponent(AccordionTrigger, {
  name: "Accordion Trigger",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Is it accessible?",
    },
  ],
});

Builder.registerComponent(AccordionContent, {
  name: "Accordion Content",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ],
});

// Section and layout components will be imported from separate files

// Custom components will be registered separately in component files
