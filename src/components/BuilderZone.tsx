import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";

const BuilderZone = () => {
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

        // Set document title if found
        if (content?.data?.title) {
          document.title = content.data.title;
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

  if (notFound && !isPreviewing) {
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

  // In Builder.io Visual Editor, render without Layout wrapper for proper editing
  if (isPreviewing) {
    return (
      <BuilderComponent 
        model="page" 
        content={content}
        data={{
          // Sample data for testing Data tab functionality
          user: { name: "John Doe", email: "john@example.com" },
          products: [
            { id: 1, name: "Product A", price: 99 },
            { id: 2, name: "Product B", price: 149 },
            { id: 3, name: "Product C", price: 199 }
          ],
          settings: { theme: "light", notifications: true }
        }}
      />
    );
  }

  // For live site, render with Layout wrapper
  return (
    <Layout>
      <BuilderComponent 
        model="page" 
        content={content}
        data={{
          // Sample data for live site
          user: { name: "John Doe", email: "john@example.com" },
          products: [
            { id: 1, name: "Product A", price: 99 },
            { id: 2, name: "Product B", price: 149 },
            { id: 3, name: "Product C", price: 199 }
          ],
          settings: { theme: "light", notifications: true }
        }}
      />
    </Layout>
  );
};

export default BuilderZone;
