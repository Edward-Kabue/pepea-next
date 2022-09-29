import React from 'react'

import PropTypes from 'prop-types'

const TopNav = (props) => {
  return (
    <>
      <div className={`top-nav-container ${props.rootClassName} `}>
        <span className="top-nav-text">
          <span>888 666 1234</span>
        </span>
        <span className="top-nav-text2">
          <span>Suite 12000 San Francisco</span>
        </span>
        <span className="top-nav-text4">
          <span>Mon-Sat 8am - 5pm, Sun Closed</span>
        </span>
        <div className="top-nav-frame"></div>
        <div className="top-nav-icon-group">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="top-nav-image"
          />
        </div>
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="top-nav-image1"
        />
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="top-nav-image2"
        />
      </div>
      <style jsx>
        {`
          .top-nav-container {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 65px;
            display: flex;
            padding: 15px 19px;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            justify-content: center;
            background-color: #271344;
          }
          .top-nav-text {
            color: rgba(255, 255, 255, 1);
            width: 98px;
            height: auto;
            font-size: 15px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
            font-stretch: normal;
            margin-right: var(--dl-space-space-sixunits);
            margin-bottom: 0;
            text-decoration: none;
          }
          .top-nav-text2 {
            color: rgba(255, 255, 255, 1);
            width: 191px;
            height: auto;
            font-size: 15px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
            font-stretch: normal;
            margin-right: var(--dl-space-space-fourunits);
            margin-bottom: 0;
            text-decoration: none;
          }
          .top-nav-text4 {
            color: rgba(255, 255, 255, 1);
            width: 239px;
            height: auto;
            font-size: 15px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
            font-stretch: normal;
            margin-right: var(--dl-space-space-fourunits);
            margin-bottom: 0;
            text-decoration: none;
          }
          .top-nav-frame {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: 0 3px;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
          }
          .top-nav-image {
            width: 29px;
            height: 26px;
            object-fit: contain;
            transition: 0.3s;
          }

          .top-nav-image1 {
            width: 36px;
            height: 28px;
            object-fit: contain;
            transition: 0.3s;
          }

          .top-nav-image2 {
            width: 40px;
            height: 22px;
            object-fit: contain;
            transition: 0.3s;
          }

          @media (max-width: 767px) {
            .top-nav-text2 {
              display: none;
            }
            .top-nav-text4 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .top-nav-text2 {
              display: none;
            }
            .top-nav-text4 {
              display: none;
            }
            .top-nav-icon-group {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

TopNav.defaultProps = {
  image_alt1: 'image',
  image_src: '/playground_assets/icons8-twitter-64-200h.png',
  image_src2: '/playground_assets/icons8-instagram-64-200h.png',
  image_src1: '/playground_assets/icons8-facebook-48-200h.png',
  rootClassName: '',
  image_alt2: 'image',
  image_alt: 'image',
}

TopNav.propTypes = {
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  image_src2: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default TopNav
