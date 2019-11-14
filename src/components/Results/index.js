import React from 'react'

function Results(props) {
  const res = props.data.map((data) => {
    return (
      <>
        <h2>{data.name}</h2>
        <p>{data.artist}</p>
      </>
    )
  })
  return (
    <div className='main'>
      {res}
    </div>
  )
}

export default Results;