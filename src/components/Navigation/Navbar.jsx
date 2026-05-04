import { useEffect, useRef, useState } from "react";
import SubNav from "./SubNav";
import MainNav from "./MainNav";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const Navbar = () => {
  const isSubNavVisible = useScrollDirection();
  const subNavRef = useRef(null);
  const [subNavHeight, setSubNavHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (subNavRef.current) {
        setSubNavHeight(subNavRef.current.getBoundingClientRect().height);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (subNavRef.current) resizeObserver.observe(subNavRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full z-50">
      <SubNav ref={subNavRef} isVisible={isSubNavVisible} />
      <MainNav isSubNavVisible={isSubNavVisible} subNavHeight={subNavHeight} />
    </div>
  );
};

export default Navbar;
