import React from 'react'

import PropTypes from 'prop-types'

const Frame = (props) => {
  return (
    <>
      <div className={`frame-frame ${props.rootClassName} `}>
        <div className="frame-frame1">
          <div className="frame-frame14">
            <img
              alt={props.IMAGE_alt}
              src={props.IMAGE_src}
              className="frame-i-m-a-g-e"
            />
            <div className="frame-frame13">
              <span className="frame-text">
                <span>Learn And Play</span>
              </span>
              <span className="frame-text2">
                <span>
                  With the criteria of playing and learning together, children
                  will have a comfortable.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .frame-frame {
            width: 270px;
            height: 422px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
          }
          .frame-frame1 {
            top: 0px;
            left: 0px;
            width: 270px;
            display: flex;
            padding: 32px 35px 51px 35px;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 20px;
            margin-bottom: 0;
            background-color: rgba(255, 102, 102, 1);
          }
          .frame-frame14 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .frame-i-m-a-g-e {
            width: 180px;
            height: 180px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 22px;
            margin-bottom: 0;
          }
          .frame-frame13 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .frame-text {
            color: rgba(255, 255, 255, 1);
            width: 178px;
            height: auto;
            font-size: 24px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 28.799999237060547px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .frame-text2 {
            color: rgba(255, 255, 255, 1);
            width: 200px;
            height: auto;
            font-size: 15px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          @media (max-width: 479px) {
            .frame-frame1 {
              width: 252px;
              height: 388px;
            }
          }
        `}
      </style>
    </>
  )
}

Frame.defaultProps = {
  IMAGE_alt: 'IMAGE1032',
  rootClassName: '',
  IMAGE_src: '/playground_assets/image1032-eph6-200w.png',
}

Frame.propTypes = {
  IMAGE_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  IMAGE_src: PropTypes.string,
}

export default Frame
