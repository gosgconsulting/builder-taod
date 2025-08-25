import { Builder } from "@builder.io/react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabItem {
  id: string;
  label: string;
  title?: string;
  content?: string;
  image?: string;
}

interface BuilderTabsSectionProps {
  title?: string;
  subtitle?: string;
  tabs?: TabItem[];
}

const BuilderTabsSection = ({
  title = "Our Programs",
  subtitle = "Discover our comprehensive dance programs designed for all ages and skill levels.",
  tabs = [
    {
      id: "ballet",
      label: "Ballet",
      title: "Classical Ballet",
      content: "Learn the fundamentals of classical ballet with our experienced instructors.",
      image: "/lovable-uploads/f07ceee7-3742-4ddb-829b-9abae14d5a11.png"
    },
    {
      id: "jazz",
      label: "Jazz",
      title: "Jazz Dance",
      content: "Express yourself through energetic jazz movements and contemporary styles.",
      image: "/lovable-uploads/08117ced-f7b0-4045-9bd4-3e5bd0309238.png"
    },
    {
      id: "contemporary",
      label: "Contemporary",
      title: "Contemporary Dance",
      content: "Explore modern dance techniques and creative expression.",
      image: "/lovable-uploads/4ac15b36-88be-402a-b290-d345ee972ebb.png"
    }
  ]
}: BuilderTabsSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            {title}
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={tabs[0]?.id} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="text-lg">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      {tab.title && (
                        <h3 className="font-playfair text-3xl font-bold text-primary mb-4">
                          {tab.title}
                        </h3>
                      )}
                      {tab.content && (
                        <p className="font-inter text-gray-600 text-lg leading-relaxed">
                          {tab.content}
                        </p>
                      )}
                    </div>
                    {tab.image && (
                      <div className="relative">
                        <img
                          src={tab.image}
                          alt={tab.title}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

// Register Tabs Section component
Builder.registerComponent(BuilderTabsSection, {
  name: "Tabs Section",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8aa0c0b8e5b54d8a9b8e8c8d8e8f8g8h",
  canHaveChildren: false,
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Our Programs",
    },
    {
      name: "subtitle",
      type: "longText",
      defaultValue: "Discover our comprehensive dance programs designed for all ages and skill levels.",
    },
    {
      name: "tabs",
      type: "list",
      subFields: [
        {
          name: "id",
          type: "text",
        },
        {
          name: "label",
          type: "text",
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "content",
          type: "longText",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
        }
      ],
      defaultValue: [
        {
          id: "ballet",
          label: "Ballet",
          title: "Classical Ballet",
          content: "Learn the fundamentals of classical ballet with our experienced instructors.",
          image: "/lovable-uploads/f07ceee7-3742-4ddb-829b-9abae14d5a11.png"
        },
        {
          id: "jazz",
          label: "Jazz",
          title: "Jazz Dance",
          content: "Express yourself through energetic jazz movements and contemporary styles.",
          image: "/lovable-uploads/08117ced-f7b0-4045-9bd4-3e5bd0309238.png"
        }
      ],
    },
  ],
});

export default BuilderTabsSection;
