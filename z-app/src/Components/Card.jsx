import React, { useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion, useScroll, useTransform } from 'framer-motion'

function Card(props) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div ref={ref} style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}>
      <div className="card">
        <a href={props.goto} target="_blank" rel="noreferrer" >
          <LazyLoadImage src={props.display}
            width={250} height={180}
            placeholderSrc={props.placeHolder}
            effect="blur"
            className="img-1"
            alt={props.cnt}
          />
          <p>{props.title}</p>
        </a>
      </div>
    </motion.div>
  );
}

export default Card;
