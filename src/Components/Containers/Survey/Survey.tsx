import * as React from 'react';
import './Survey.css'
import ActiveSurvey from '../../Presenters/ActiveSurvey/ActiveSurvey';

export interface SurveyProps {
  
}
 
const Survey: React.SFC<SurveyProps> = () => {
  return ( <div className='survey'>
      <h1>Survey Name</h1>
      <ActiveSurvey/>
  </div> );
}
 
export default Survey;