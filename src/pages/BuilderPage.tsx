import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";

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
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="text-lg">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (notFound) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600">The page you're looking for doesn't exist.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <BuilderComponent model="page" content={content} />
    </Layout>
  );
};

export default BuilderPage;
