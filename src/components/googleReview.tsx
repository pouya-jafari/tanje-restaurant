import { useEffect } from "react";

const GoogleReviewsWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="elfsight-app-7fac25ea-8a83-49ea-8b9e-9d6182ab8e28"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviewsWidget;
