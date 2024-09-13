import React, { useEffect, useState } from "react";

interface Props {
  desktopElement: JSX.Element;
  mobileElement: JSX.Element;
}

export default function WithMobile({ desktopElement, mobileElement }: Props) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return <>{width > 991 ? desktopElement : mobileElement}</>;
}
