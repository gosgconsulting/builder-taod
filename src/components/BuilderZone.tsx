import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

interface BuilderZoneProps {
  model: string;
  modelId?: string;
  name?: string;
  fallback?: React.ReactNode;
}

const BuilderZone: React.FC<BuilderZoneProps> = ({ model, modelId, name, fallback }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        let content;
        if (modelId) {
          // Fetch by specific model ID
          content = await builder
            .get(model, { 
              query: { 
                id: modelId 
              } 
            })
            .promise();
        } else {
          // Fetch by model type
          content = await builder
            .get(model)
            .promise();
        }
        
        setContent(content);
      } catch (error) {
        console.error(`Error fetching Builder.io content for ${model}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [model, modelId, name]);

  if (loading) {
    return fallback || null;
  }

  if (!content) {
    return fallback || null;
  }

  return <BuilderComponent model={model} content={content} />;
};

export default BuilderZone;
