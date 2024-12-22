import React, { useEffect, useRef } from 'react';

type ImageListProps = {
  images: string[];
};

const AutoScrollImageList: React.FC<ImageListProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scrollStep = () => {
      if (container) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollHeight - container.clientHeight) {
          scrollAmount = 0; // Reset to the top
        }
        container.scrollTo({
          top: scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    const intervalId = setInterval(scrollStep, 30); // Adjust speed as needed

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: '500px', // Adjust the height
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 'max-content',
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              width: '10%',
              marginBottom: '10px', // Space between images
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollImageList;
