import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

interface BuilderZoneProps {
  model: string;
  name?: string;
  fallback?: React.ReactNode;
}

const BuilderZone: React.FC<BuilderZoneProps> = ({ model, name, fallback }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await builder
          .get(model)
          .promise();
        
        setContent(content);
      } catch (error) {
        console.error(`Error fetching Builder.io content for ${model}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [model, name]);

  if (loading) {
    return fallback || null;
  }

  if (!content) {
    return fallback || null;
  }

  return <BuilderComponent model={model} content={content} />;
};

export default BuilderZone;
