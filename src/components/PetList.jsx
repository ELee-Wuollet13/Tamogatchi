import React from "react";
import Pet from "./Pet";
import PropTypes from 'prop-types';


function PetList(props){

  console.log(props.petList);
  return (
    <div>
    {props.petList.map((pet) =>
      <Pet name={pet.name}
        timeOpen={pet.timeOpen}
        key={pet.id}/>
    )}
    </div>
  );
}
PetList.propTypes = {
  petList: PropTypes.array
};

export default PetList;
