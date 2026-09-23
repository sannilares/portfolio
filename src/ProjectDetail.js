import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
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
    video,
    image,
  } = props;

  if (carousel) {
    return (
      <Carousel autoPlay={false}>
        {carousel.map((item, i) => <img key={i} src={item.img} alt="" style={{ width: '100%' }} />)}
      </Carousel>
    );
  }
  if (video) {
    return (
      <video className="video" controls>
        <source src={video} type="video/webm" />
      </video>
    );
  }
  return (
    <img src={image} alt="" className="dialogImg" />
  );
}

ProjectMedia.propTypes = {
  carousel: PropTypes.array,
  image: PropTypes.string,
  video: PropTypes.string,
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
            <ProjectMedia carousel={project.carousel} video={project.video} image={project.img} />
          </div>
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
