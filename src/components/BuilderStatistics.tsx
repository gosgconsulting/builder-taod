import { Builder } from "@builder.io/react";
import React from "react";

interface StatisticItem {
  value: string;
  label: string;
  color: string;
}

interface BuilderStatisticsProps {
  title?: string;
  subtitle?: string;
  statistics?: StatisticItem[];
}

const BuilderStatistics = ({
  title = "Begin Your Dance Journey",
  subtitle = "Jump into dance with a $20 trial class! Experience top-tier instruction and find your perfect style.",
  statistics = [
    { value: "10,000+", label: "Students Trained", color: "violet-500" },
    { value: "40", label: "Years Experience", color: "emerald-500" },
    { value: "95%", label: "Success Rate", color: "orange-500" },
    { value: "2000+", label: "Awards Won", color: "rose-500" }
  ]
}: BuilderStatisticsProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-4xl md:text-5xl font-bold text-${stat.color} drop-shadow-lg mb-4`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            {title}
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

// Register Statistics component
Builder.registerComponent(BuilderStatistics, {
  name: "Statistics Section",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Begin Your Dance Journey",
    },
    {
      name: "subtitle",
      type: "longText",
      defaultValue: "Jump into dance with a $20 trial class! Experience top-tier instruction and find your perfect style.",
    },
    {
      name: "statistics",
      type: "list",
      subFields: [
        {
          name: "value",
          type: "text",
        },
        {
          name: "label",
          type: "text",
        },
        {
          name: "color",
          type: "text",
          defaultValue: "violet-500",
        }
      ],
      defaultValue: [
        { value: "10,000+", label: "Students Trained", color: "violet-500" },
        { value: "40", label: "Years Experience", color: "emerald-500" },
        { value: "95%", label: "Success Rate", color: "orange-500" },
        { value: "2000+", label: "Awards Won", color: "rose-500" }
      ],
    },
  ],
});

export default BuilderStatistics;
