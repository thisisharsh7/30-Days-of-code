import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Card({ display, placeHolder, goto, title, cnt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03 }}
      style={{
        scale: scaleProgress, // from useScroll
        opacity: opacityProgress,
      }}
      className="card"
    >
      <div className="card-image">
        <LazyLoadImage
          src={display}
          placeholderSrc={placeHolder}
          effect="blur"
          className="card-img"
          alt={cnt}
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <a href={goto} target="_blank" rel="noreferrer" className="card-button">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Visit
        </a>
      </div>
    </motion.div>
  );
}

export default Card;
