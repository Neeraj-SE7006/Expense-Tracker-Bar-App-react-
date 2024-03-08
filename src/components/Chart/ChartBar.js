import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
  const barFilledHeight = props.maxValue > 0 ? (props.value / props.maxValue) * 100 + '%' : '0%';

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: barFilledHeight }}></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
