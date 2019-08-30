import React from 'react'

const DestroyPurr = ({ ...props }) => (
  <div>
    <p>MockedDestroyPurr:{props.purr.id}</p>
    <p>Purrservice{props.purr.id}:{props.purrService !== undefined ? "present" : "not present"}</p>
  </div>
)

export default DestroyPurr;
