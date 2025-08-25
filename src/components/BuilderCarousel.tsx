import { Builder } from "@builder.io/react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselItem {
  image?: string;
  title?: string;
  description?: string;
}

interface BuilderCarouselProps {
  title?: string;
  subtitle?: string;
  items?: CarouselItem[];
  showNavigation?: boolean;
}

const BuilderCarousel = ({
  title = "Featured Content",
  subtitle = "Explore our amazing content",
  items = [
    {
      image: "/lovable-uploads/08117ced-f7b0-4045-9bd4-3e5bd0309238.png",
      title: "Item 1",
      description: "Description for item 1"
    },
    {
      image: "/lovable-uploads/f07ceee7-3742-4ddb-829b-9abae14d5a11.png",
      title: "Item 2", 
      description: "Description for item 2"
    },
    {
      image: "/lovable-uploads/4ac15b36-88be-402a-b290-d345ee972ebb.png",
      title: "Item 3",
      description: "Description for item 3"
    }
  ],
  showNavigation = true
}: BuilderCarouselProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            {title}
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}
                      {item.title && (
                        <h3 className="text-xl font-semibold mb-2 text-center">
                          {item.title}
                        </h3>
                      )}
                      {item.description && (
                        <p className="text-gray-600 text-center">
                          {item.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {showNavigation && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

// Register Carousel component
Builder.registerComponent(BuilderCarousel, {
  name: "Image Carousel",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8aa0c0b8e5b54d8a9b8e8c8d8e8f8g8h",
  canHaveChildren: false,
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Featured Content",
    },
    {
      name: "subtitle",
      type: "longText",
      defaultValue: "Explore our amazing content",
    },
    {
      name: "items",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "longText",
        }
      ],
      defaultValue: [
        {
          image: "/lovable-uploads/08117ced-f7b0-4045-9bd4-3e5bd0309238.png",
          title: "Item 1",
          description: "Description for item 1"
        },
        {
          image: "/lovable-uploads/f07ceee7-3742-4ddb-829b-9abae14d5a11.png",
          title: "Item 2",
          description: "Description for item 2"
        }
      ],
    },
    {
      name: "showNavigation",
      type: "boolean",
      defaultValue: true,
    },
  ],
});

export default BuilderCarousel;
