import React, { useEffect, useState } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import HomeOne from "./views/all-home-version/HomeLightAnimation";
import HomeDarkAnimation from "./views/all-home-version/HomeDarkAnimation";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToggleButton } from "./components/ToggleButton";
import { useNavigate, useParams } from "react-router-dom";

const App = () => {
  // const { mode } = useParams();
  // console.log({ mode });
  const path = window.location.pathname;
  // const [mode, setMode] = useState(theme);
  // const navigate = useNavigate();
  const [mode, setMode] = useState(path);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ToggleButton
        style={{ position: "absolute", zIndex: 100000 }}
        checked={mode === "/dark" ? true : false}
        onChange={(event) => {
          const checked = event.target.checked;
          if (checked) {
            setMode("/dark");
            window.location.replace(window.location.origin + "/dark");
          }
          if (!checked) {
            setMode("");
            window.location.replace(window.location.origin + "/");
          }
        }}
      />
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 147, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <ScrollToTop />
      {/* {isDark ? <HomeDarkAnimation /> : <HomeOne />} */}
      <AllRoutes />
    </>
  );
};

export default App;
