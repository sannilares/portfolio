import React from 'react';
import { FormattedMessage } from 'react-intl';
import './CareerTimeline.css';

// Newest (top) to oldest (bottom), mirroring the CV's work experience and education.
const timeline = [
  { year: '2025–present', key: 'cv.twoday' },
  { year: '2024–2025', key: 'cv.camper' },
  { year: '2021–2024', key: 'cv.taito' },
  { year: '2024', key: 'cv.mastersDegree' },
  { year: '2023', key: 'cv.bachelorsDegree' },
  { year: '2023', key: 'cv.thesis' },
  { year: '2019–2023', key: 'cv.junior' },
  { year: '2022', key: 'cv.usmb' },
  { year: '2020–2021', key: 'cv.subrosa' },
  { year: '2020', key: 'cv.NAPCON' },
  { year: '2019', key: 'cv.siemens' },
  { year: '2019', key: 'cv.ultra' },
];

function CareerTimeline() {
  return (
    <div className="timelineSidebar">
      <ul className="timelineList">
        {timeline.map((item) => (
          <li className="timelineItem" key={`${item.year}-${item.key}`}>
            <span className="timelineYear">{item.year}</span>
            <span className="timelineName"><FormattedMessage id={item.key} /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CareerTimeline;
