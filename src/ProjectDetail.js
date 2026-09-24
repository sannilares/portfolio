import PropTypes from 'prop-types';
import React, {
  useEffect, useRef, useState,
} from 'react';
import { useParams, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Carousel from 'react-material-ui-carousel';
import './ProjectDetail.css';
import UIUXData from './DataUIUX';
import OhterProjectsData from './DataOtherProjects';
import { UIUX_SECTION_ID, OTHER_PROJECTS_SECTION_ID } from './Portfolio';

const allProjects = [
  ...UIUXData.map((p) => ({ ...p, sectionId: UIUX_SECTION_ID })),
  ...OhterProjectsData.map((p) => ({ ...p, sectionId: OTHER_PROJECTS_SECTION_ID })),
];

const lang = localStorage.getItem('language') || 'fi';

// from https://stackoverflow.com/questions/47023211/better-way-to-get-property-than-using-lodash
function get(object, path) {
  if (typeof path === 'string') path = path.split('.');
  return path.reduce((xs, x) => (xs && xs[x] ? xs[x] : ''), object);
}

function ProjectMedia(props) {
  const {
    carousel,
    image,
    imageAlt,
  } = props;
  const containerRef = useRef(null);
  const naturalRatioRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(null);

  const recalcHeight = () => {
    if (naturalRatioRef.current && containerRef.current) {
      setImgHeight(containerRef.current.clientWidth * naturalRatioRef.current);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', recalcHeight);
    return () => window.removeEventListener('resize', recalcHeight);
  }, []);

  if (carousel) {
    return (
      <div className="projectDetailCarousel" ref={containerRef}>
        <Carousel autoPlay={false}>
          {carousel.map((item, i) => (
            <img
              key={i}
              src={item.img}
              alt={item.alt ? item.alt[lang] : ''}
              className="projectDetailCarouselImg"
              style={{
                height: imgHeight ? `${imgHeight}px` : undefined,
                objectFit: item.naturalRatio ? 'contain' : 'cover',
              }}
              onLoad={(e) => {
                if (i === 0 && !naturalRatioRef.current) {
                  naturalRatioRef.current = e.target.naturalHeight / e.target.naturalWidth;
                  recalcHeight();
                }
              }}
            />
          ))}
        </Carousel>
      </div>
    );
  }
  return (
    <img src={image} alt={imageAlt ? imageAlt[lang] : ''} className="dialogImg" />
  );
}

ProjectMedia.propTypes = {
  carousel: PropTypes.array,
  image: PropTypes.string,
  imageAlt: PropTypes.object,
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);
  const backTo = project ? `/#${project.sectionId}` : '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="projectDetail">
      <Link to={backTo} className="backLink">
        &larr;
        {' '}
        <FormattedMessage id="backToProjects" />
      </Link>

      {project ? (
        <>
          <h2 className="projectDetailTitle">{project.title[lang]}</h2>
          <div className="projectDetailMedia">
            <ProjectMedia key={project.slug} carousel={project.carousel} image={project.img} imageAlt={project.imgAlt} />
          </div>
          {project.aiGeneratedImage && (
            <p className="projectDetailImageNote"><FormattedMessage id="projectImageAiNote" /></p>
          )}
          <div className="projectDetailDesc" style={{ whiteSpace: 'break-spaces' }}>
            {get(project, `desc.${lang}`)}
          </div>
        </>
      ) : (
        <p className="projectDetailDesc"><FormattedMessage id="projectNotFound" /></p>
      )}
    </div>
  );
}

export default ProjectDetail;
