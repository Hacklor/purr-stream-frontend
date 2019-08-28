import React from 'react'

export const PurrStream = ({ ...props }) => (
 <div>
   { JSON.stringify(props.purrs) }
 </div>
)

export default PurrStream;
