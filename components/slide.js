import React from 'react'

const Slide = (props) => {
  return (
    <>
      <div className="slide-container"></div>
      <style jsx>
        {`
          .slide-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Slide
