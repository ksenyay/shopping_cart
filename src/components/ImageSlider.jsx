import { useEffect, useState } from "react";

const styles = {
  width: "100%",
  maxWidth: "750px",
  height: "100%",
  borderRadius: "50px",
  objectFit: "cover",
};

function ImageSilder({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return <img style={styles} src={slides[currentIndex].url} alt="" />;
}

export default ImageSilder;
