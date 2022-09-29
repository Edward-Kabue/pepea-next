import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PrimaryPinkButton1 from './primary-pink-button1'

const HeaderFull = (props) => {
  return (
    <>
      <div className={`header-full-header ${props.rootClassName} `}>
        <nav className="header-full-nav navbar">
          <div className="header-full-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              loading="eager"
              className="header-full-image"
            />
            <div className="header-full-menu">
              <Link href="/">
                <a className="header-full-link large">Home</a>
              </Link>
              <span className="header-full-text large">About us</span>
              <span className="header-full-text1">Programs</span>
              <span className="header-full-text2">Contact us</span>
            </div>
            <div className="header-full-container1">
              <div className="header-full-container2">
                <PrimaryPinkButton1 rootClassName="primary-pink-button1-root-class-name"></PrimaryPinkButton1>
              </div>
              <svg viewBox="0 0 1024 1024" className="header-full-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .header-full-header {
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 3;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header-full-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .header-full-container {
            color: var(--dl-color-gray-black);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-full-image {
            width: 213px;
            height: auto;
            object-fit: contain;
          }
          .header-full-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-full-link {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-full-link:hover {
            color: var(--dl-color-gray-500);
          }
          .header-full-text {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .header-full-text:hover {
            color: var(--dl-color-gray-500);
          }
          .header-full-text1 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .header-full-text1:hover {
            color: var(--dl-color-gray-500);
          }
          .header-full-text2 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .header-full-text2:hover {
            color: var(--dl-color-gray-500);
          }
          .header-full-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-full-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-full-icon {
            width: 24px;
            height: 24px;
            display: none;
            margin-left: var(--dl-space-space-unit);
          }
          .header-full-root-class-name {
            height: auto;
          }
          @media (max-width: 991px) {
            .header-full-nav {
              max-width: 960px;
            }
            .header-full-menu {
              display: none;
            }
            .header-full-icon {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-full-image {
              width: 50%;
              margin-left: -20px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .header-full-container2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

HeaderFull.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/image-200h.png',
}

HeaderFull.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default HeaderFull
