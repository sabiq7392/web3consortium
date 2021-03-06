import { useState, useEffect } from "react";

export default function MediaScreen(_option, _screenWidth) {
  const [screenWidth, setScreenWidth] = useState(null);
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const getScreenWidth = entries[0].contentRect.width;
      let width;
      switch(_screenWidth) {
        case "xxl": { width = 1400; break; }
        case "xl": { width = 1200; break; }
        case "lg": { width = 992; break; }
        case "md": { width = 768; break; }
        case "sm": { width = 576; break; }
        case "xs": { width = 0; break; }
        default: {
          if (typeof _screenWidth === "number") { width = _screenWidth; break; }
          else { console.error("_screenWidth is invalid value. try 'xxl' 'xl' 'lg' 'md' 'sm' 'xs' or number"); break; }
        }
      }

      switch(_option) {
        case ">=": { setScreenWidth(getScreenWidth >= width); break; }
        case ">": { setScreenWidth(getScreenWidth > width); break; }
        case "===": { setScreenWidth(getScreenWidth === width); break; }
        case "<=": { setScreenWidth(getScreenWidth <= width); break; }
        case "<": { setScreenWidth(getScreenWidth < width); break; }
        default: { console.error("_option is invalid value. try '<=' '<' '===' '>' '>='"); break; }
      }
    });

    observer.observe(document.querySelector("body"));
  }, []);
  
  return screenWidth;
}

