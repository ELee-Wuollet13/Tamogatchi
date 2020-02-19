import React from "react";
import Moment from 'moment';
import PropTypes from "prop-types";

function Pet(props){


function displayTimeOpen(timeOpen) {
  console.log(props.timeOpen);
  console.log(timeOpen);
  return timeOpen.from(new Moment(), true);
}



return (

  <div>
  {console.log(props)}
  <h3>{props.name}</h3>
  <h4>{displayTimeOpen(props.timeOpen)} minutes old</h4>
  </div>


);
}
Pet.propTypes = {
  names: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};
export default Pet;
