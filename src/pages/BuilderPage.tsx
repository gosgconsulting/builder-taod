import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BuilderPage = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const location = useLocation();
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setNotFound(false);
      
      try {
        const content = await builder
          .get("page", {
            url: location.pathname,
          })
          .promise();

        if (!content && !isPreviewing) {
          setNotFound(true);
        } else {
          setContent(content);
        }
      } catch (error) {
        console.error("Error fetching Builder.io content:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [location.pathname, isPreviewing]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <BuilderComponent model="page" content={content} />
    </div>
  );
};

export default BuilderPage;
