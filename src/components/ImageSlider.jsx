import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";

function ImageSilder({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return <img className={styles.img} src={slides[currentIndex].url} alt="" />;
}

export default ImageSilder;
