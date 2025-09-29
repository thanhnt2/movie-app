import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      return;
    };

    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);

    // clean up function
    // 1 function có thể return về 1 function
    // khi src thay đổi => thực thi clean up function trước rồi mới thực thi function ở phía trên
    return () => {
      img.onload = null;
    };
  }, [src, width, height]);

  return (
    <img
      className={currentSrc === src || !src ? className : `${className} blur-md`}
      src={currentSrc}
      width={width}
      height={height}
    />
  );
};
export default ImageComponent;
