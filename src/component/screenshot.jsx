import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const screenshotImages = ["/photo-1.jpeg", "/photo-2.jpeg", "/photo-3.jpeg"];
const INTERVAL = 3000; // 3 seconds per slide

function ScreenshotsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const tick = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const index = Math.floor(elapsed / INTERVAL) % screenshotImages.length;
      setCurrentIndex(index);
      requestAnimationFrame(tick);
    };

    const animationId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const prevIndex = (currentIndex - 1 + screenshotImages.length) % screenshotImages.length;
  const nextIndex = (currentIndex + 1) % screenshotImages.length;

  return (
    <Row>
      <Col xs={12} lg={10} xl={8} className="mx-auto">
        <div className="carousel-inner-custom px-5 mx-aauto">
          <img src={screenshotImages[prevIndex]} className="side-image d-none d-md-block" alt="Left" />
          <img src={screenshotImages[currentIndex]} className="active-image" alt="Center" />
          <img src={screenshotImages[nextIndex]} className="side-image d-none d-md-block" alt="Right" />
        </div>
      </Col>
    </Row>
  );
}

export default ScreenshotsCarousel;
