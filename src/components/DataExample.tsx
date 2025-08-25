import { Builder } from "@builder.io/react";

interface DataItem {
  name?: string;
  price?: number;
  email?: string;
}

interface DataExampleProps {
  title?: string;
  items?: DataItem[];
  showDetails?: boolean;
}

// Example component that demonstrates data binding
const DataExample = ({ title, items, showDetails }: DataExampleProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title || "Dynamic Title"}</h2>
      
      {showDetails && (
        <div className="mb-4 p-4 bg-blue-50 rounded">
          <p className="text-blue-800">Details are now visible!</p>
        </div>
      )}
      
      {items && items.length > 0 && (
        <div className="grid gap-4">
          {items.map((item: DataItem, index: number) => (
            <div key={index} className="p-3 border rounded-md">
              <h3 className="font-semibold">{item.name}</h3>
              {item.price && (
                <p className="text-green-600 font-bold">${item.price}</p>
              )}
              {item.email && (
                <p className="text-gray-600">{item.email}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Register the component with Builder.io
Builder.registerComponent(DataExample, {
  name: "Data Example",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Sample Data Component",
    },
    {
      name: "items",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "price",
          type: "number",
        },
        {
          name: "email",
          type: "text",
        },
      ],
    },
    {
      name: "showDetails",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

export default DataExample;
