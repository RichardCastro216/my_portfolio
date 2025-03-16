import React from 'react'

function ServiceCard({ Heading, Content}) {
  return (
    <>
        <div className="serviceCard">
            <h5>{Heading}</h5>
            <p>{Content}</p>
        </div>
    </>
  )
}

export default ServiceCard