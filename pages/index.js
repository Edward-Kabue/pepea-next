import React from 'react'
import Head from 'next/head'

import TopNav from '../components/top-nav'
import HeaderFull from '../components/header-full'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Pepea school</title>
          <meta property="og:title" content="Pepea school" />
        </Head>
        <TopNav rootClassName="top-nav-root-class-name"></TopNav>
        <HeaderFull rootClassName="header-full-root-class-name"></HeaderFull>
        <div className="home-hero">
          <div className="home-container01">
            <div className="home-card">
              <h1 className="home-text headingOne">Soft Design System.</h1>
              <h1 className="home-text01 headingOne">Choose the best</h1>
              <span className="home-text02 lead">
                <span>
                  Find the story of Creative Tim&apos;s most complex design
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  system and all the work that make this design available.
                </span>
              </span>
              <div className="home-container02">
                <div className="home-container03">
                  <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
                </div>
                <OutlineGrayButton button="read more"></OutlineGrayButton>
              </div>
              <div className="home-container04">
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                  className="home-image"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
                  className="home-image01"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
                  className="home-image02"
                />
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
                  className="home-image03"
                />
              </div>
              <div className="home-frame5">
                <span className="home-text05">
                  <span>Pepea School</span>
                </span>
                <div className="home-frame4">
                  <span className="home-text07">
                    <span>A Brighter Future For All.</span>
                  </span>
                  <span className="home-text09">
                    <span>
                      The Universe is one great kindergarten for man. Everything
                      that exists has brought with it its own peculiar lesson.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/curved6-1500h.jpg"
          className="home-image04"
        />
        <div className="home-frame-about">
          <img
            alt="IMAGE1033"
            src="/playground_assets/dc4a2944-80cd-44c3-a1cc-deacbadf87b3-1500w.png"
            loading="lazy"
            className="home-i-m-a-g-e05"
          />
          <div className="home-about-text">
            <div className="home-frame41">
              <div className="home-frame38">
                <span className="home-text11">
                  <span>Guiding The Young Generation To Success.</span>
                </span>
                <span className="home-text13">
                  <span>
                    Operating since 1996, Kindori Kindergarten provides quality
                    early childhood education through its three year old and
                    four year old group kindergarten programs. Our primary focus
                    is the wellbeing of every child. We provide our children the
                    attention they need to grow and develop into happy, healthy
                    people and be confident for school.
                  </span>
                </span>
              </div>
              <div className="home-frame39">
                <div className="home-frame37">
                  <span className="home-text15">
                    <span>Our Vision</span>
                  </span>
                  <span className="home-text17">
                    <span>
                      We acknowledge that all members of our community including
                      children, families and teachers have rights and all
                      interactions.
                    </span>
                  </span>
                </div>
                <div className="home-frame-frame37">
                  <span className="home-text19">
                    <span>Our Mission</span>
                  </span>
                  <span className="home-text21">
                    <span>
                      Kindori Kindergarten is a vibrant learning community where
                      families, staff and The University of Queensland work
                      together.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-corevalues">
          <div className="home-frame">
            <span className="home-text23">
              <span>Why choose us</span>
            </span>
            <span className="home-text25">
              <span>Our Core Values</span>
            </span>
            <span className="home-text27">
              <span>
                With kindori, we always put the quality of teaching children
                first, please rest assured when sending children at kindori
                kindergarten.
              </span>
            </span>
          </div>
          <img
            alt="IMAGE1032"
            src="/playground_assets/image1032-ne56-200h.png"
            className="home-i-m-a-g-e06"
          />
          <div className="home-frame01">
            <div className="home-frame02">
              <div className="home-frame03">
                <div>
                  <img
                    alt="IMAGE1032"
                    src="/playground_assets/image1032-eph6-200w.png"
                    className="home-i-m-a-g-e07"
                  />
                  <div>
                    <span className="home-text29">
                      <span>Learn And Play</span>
                    </span>
                    <span className="home-text31">
                      <span>
                        With the criteria of playing and learning together,
                        children will have a comfortable.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-frame04">
              <img
                alt="Rectangle1032"
                src="/playground_assets/rectangle1032-dso-500h.png"
                className="home-rectangle"
              />
              <div className="home-frame05">
                <div>
                  <div className="home-frame06">
                    <img
                      alt="IMAGE1032"
                      src="/playground_assets/image1032-i6ar-200w.png"
                      className="home-i-m-a-g-e08"
                    />
                  </div>
                  <div>
                    <span className="home-text33">
                      <span>Nutritious Meal</span>
                    </span>
                    <span className="home-text35">
                      <span>
                        Children&apos;s meals need to be provided with all the
                        nutrients necessary for a day of play.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-frame07">
                <div className="home-frame121">
                  <div className="home-frame08">
                    <img
                      alt="IMAGE1032"
                      src="/playground_assets/image1032-i6ar-200w.png"
                      className="home-i-m-a-g-e09"
                    />
                  </div>
                  <div className="home-frame111">
                    <span className="home-text37">
                      <span>Nutritious Meal</span>
                    </span>
                    <span className="home-text39">
                      <span>
                        Children&apos;s meals need to be provided with all the
                        nutrients necessary for a day of play.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-frame09">
              <img
                alt="Rectangle1032"
                src="/playground_assets/rectangle1032-8qe-500h.png"
                className="home-rectangle1"
              />
              <div className="home-frame10 home-frame10">
                <div>
                  <div className="home-frame11 home-frame11">
                    <img
                      alt="IMAGE1032"
                      src="/playground_assets/image1032-vgfo-200w.png"
                      className="home-i-m-a-g-e10"
                    />
                  </div>
                  <div className="home-frame9">
                    <span className="home-text41">
                      <span>Great Teachers</span>
                    </span>
                    <span className="home-text43">
                      <span>
                        Experienced and dedicated teachers team will help your
                        child develop more in all aspects.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-frame12 home-frame12">
              <img
                alt="Rectangle1033"
                src="/playground_assets/rectangle1033-1qze-500h.png"
                className="home-rectangle2"
              />
              <div className="home-frame13 home-frame13">
                <div className="home-frame8">
                  <div className="home-frame14 home-frame14">
                    <img
                      alt="IMAGE1033"
                      src="/playground_assets/image1033-c4dl9-200h.png"
                      className="home-i-m-a-g-e11"
                    />
                  </div>
                  <div className="home-frame7">
                    <span className="home-text45">
                      <span>Cute Enironment</span>
                    </span>
                    <span className="home-text47">
                      <span>
                        The colorful environment at Kindori is suitable for
                        children &apos;s age, making them more accessible.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-activities">
          <div className="home-activity-title">
            <span className="home-text49">
              <span>Things For Kids</span>
            </span>
            <span className="home-text51">
              <span>Kids Activites</span>
            </span>
            <span className="home-text53">
              <span>
                Infant classroom offers strategies for building positive
                relationships, helping children develop self-regulation and
                responding to challenging behaviors.
              </span>
            </span>
          </div>
          <div className="home-below-activity">
            <div className="home-left">
              <div className="home-creative">
                <div className="home-frame15">
                  <span className="home-text55">
                    <span>Creative Activites</span>
                  </span>
                  <span className="home-text57">
                    <span>
                      Creative activities help children develop comprehensively
                      intelligence, help children.
                    </span>
                  </span>
                </div>
                <div className="home-icon-creative">
                  <img
                    alt="IMAGE1033"
                    src="/playground_assets/image1033-t2dg-200h.png"
                    className="home-i-m-a-g-e12"
                  />
                </div>
              </div>
              <div className="home-sports">
                <div className="home-frame16">
                  <span className="home-text59">Sport Activites</span>
                  <span className="home-text60">
                    Creative activities help children develop comprehensively
                    intelligence, help children.
                  </span>
                </div>
                <div className="home-icon-sports">
                  <img
                    alt="IMAGE1033"
                    src="/playground_assets/image1033-b3jf-200h.png"
                    className="home-i-m-a-g-e13"
                  />
                </div>
              </div>
            </div>
            <img
              alt="IMAGE1033"
              src="/playground_assets/learn%20and%20play%202-400w.jpg"
              className="home-i-m-a-g-e14"
            />
            <div className="home-right">
              <div className="home-creative1">
                <div className="home-icon-creative1">
                  <img
                    alt="IMAGE1646"
                    src="/playground_assets/image1646-i4r-200h.png"
                    className="home-i-m-a-g-e15"
                  />
                </div>
                <div className="home-frame17">
                  <span className="home-text61">
                    <span>Creative Activites</span>
                  </span>
                  <span className="home-text63">
                    <span>
                      Creative activities help children develop comprehensively
                      intelligence, help children.
                    </span>
                  </span>
                </div>
              </div>
              <div className="home-creative2">
                <div className="home-icon-sports1">
                  <img
                    alt="IMAGE1647"
                    src="/playground_assets/image1647-eei8-200h.png"
                    className="home-i-m-a-g-e16"
                  />
                </div>
                <div className="home-frame18">
                  <span className="home-text65">Sport Activites</span>
                  <span className="home-text66">
                    <span>
                      Creative activities help children develop comprehensively
                      intelligence, help children.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-testimonials">
          <div className="home-container05">
            <div className="home-container06">
              <div className="home-container07">
                <h2 className="home-text68 headingOne">Work with us</h2>
                <p className="home-text69 lead">
                  <span className="home-text70">
                    Whatever your qualification is - we got you!
                  </span>
                </p>
                <p className="home-text71 body">
                  <span className="home-text72">
                    &quot;Take up one idea. Make that one idea your life - think
                    of it, dream of it, live on that idea. Let the brain,
                    muscles, nerves, every part of your body, be full of that
                    idea, and just leave every other idea alone. This is the way
                    to success. A single rose can be my garden... a single
                    friend, my world.&quot;
                  </span>
                </p>
                <p className="home-text73">Mark Jojansen</p>
                <p className="home-text74 small">Project manager, Atlassian</p>
                <div className="home-container08">
                  <img
                    alt="image"
                    src="/playground_assets/team-4-200h.jpg"
                    className="home-image17"
                  />
                  <div className="home-container09"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-3-200h.jpg"
                    className="home-image18"
                  />
                  <div className="home-container10"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-2-200h.jpg"
                    className="home-image19"
                  />
                </div>
              </div>
            </div>
            <div className="home-logos">
              <div className="home-container11">
                <div className="home-container12">
                  <div className="home-container13">
                    <img
                      alt="image"
                      src="/playground_assets/logo-asana.svg"
                      className="home-image20"
                    />
                  </div>
                  <div className="home-container14">
                    <img
                      alt="image"
                      src="/playground_assets/logo-slack.svg"
                      className="home-image21"
                    />
                  </div>
                  <div className="home-container15">
                    <img
                      alt="image"
                      src="/playground_assets/logo-google-drive.svg"
                      className="home-image22"
                    />
                  </div>
                </div>
                <div className="home-container16">
                  <div className="home-container17">
                    <img
                      alt="image"
                      src="/playground_assets/logo-shopify.svg"
                      className="home-image23"
                    />
                  </div>
                  <div className="home-container18">
                    <img
                      alt="image"
                      src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                      className="home-image24"
                    />
                  </div>
                  <div className="home-container19">
                    <img
                      alt="image"
                      src="/playground_assets/logo-invision.svg"
                      className="home-image25"
                    />
                  </div>
                </div>
                <div className="home-container20">
                  <div className="home-container21">
                    <img
                      alt="image"
                      src="/playground_assets/logo-attlasian.svg"
                      className="home-image26"
                    />
                  </div>
                  <div className="home-container22">
                    <img
                      alt="image"
                      src="/playground_assets/logo-weave.svg"
                      className="home-image27"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/bottom.svg"
            className="home-bottom-wave-image"
          />
          <img
            alt="image"
            src="/playground_assets/waves-white.svg"
            className="home-image28"
          />
          <img
            alt="image"
            src="/playground_assets/top.svg"
            className="home-top-wave-image"
          />
        </section>
        <section className="home-contaier">
          <div className="home-container23">
            <div className="home-container24">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="home-text75 headingTwo">
              <span className="home-text76">Beware The Components</span>
            </h2>
            <h3 className="home-text77 headingTwo">
              <span className="home-text78">How To Handle Them</span>
              <br></br>
            </h3>
            <span className="home-text79">
              <span className="home-text80">
                We’re constantly trying to express ourselves and actualize our
                dreams. Don&apos;t stop.
              </span>
            </span>
          </div>
          <div className="home-container25">
            <div className="home-container26">
              <div className="home-container27"></div>
              <div className="home-container28">
                <svg
                  viewBox="0 0 987.4285714285713 1024"
                  className="home-icon2"
                >
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="home-text81 headingOne">Search and Discover!</h1>
                <span className="home-text82">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
            <div className="home-container29">
              <ListItem></ListItem>
              <ListItem
                title="2. Performance Analyze"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. Social Conversions"
                description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
              ></ListItem>
            </div>
          </div>
          <div className="home-divider"></div>
          <div className="home-container30">
            <div className="home-container31">
              <ListItem
                title="1. Always in Sync"
                description="No matter where you are, Trello stays in sync across all of your devices."
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                description="Integrate the apps your team already uses directly into your workflow."
              ></ListItem>
            </div>
            <div className="home-container32">
              <div className="home-container33"></div>
              <div className="home-container34">
                <svg viewBox="0 0 1152 1024" className="home-icon4">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="home-text85 headingOne">Talk and Meet!</h1>
                <span className="home-text86">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 100%;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/image%20%5B1%5D-1500w.png');
            background-repeat: no-repeat;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-card {
            width: 715px;
            height: 481px;
            display: flex;
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: flex-start;
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-text {
            display: none;
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text01 {
            color: var(--dl-color-secondary-700);
            display: none;
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .home-text02 {
            color: var(--dl-color-secondary-600);
            display: none;
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .home-container02 {
            display: none;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container03 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 25%;
            object-fit: cover;
          }
          .home-image01 {
            width: 25%;
            object-fit: cover;
          }
          .home-image02 {
            width: 25%;
            object-fit: cover;
          }
          .home-image03 {
            width: 25%;
            object-fit: cover;
          }
          .home-frame5 {
            width: fit-content;
            height: 187px;
            display: flex;
            position: relative;
            max-width: 614px;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-text05 {
            color: rgba(255, 72, 128, 1);
            width: auto;
            height: auto;
            font-size: 25px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Schoolbell;
            font-weight: 400;
            line-height: 41.75px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 7px;
            text-decoration: none;
          }
          .home-frame4 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-text07 {
            color: rgba(39, 19, 68, 1);
            width: auto;
            height: auto;
            font-size: 50px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 60px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 19px;
            text-decoration: none;
          }
          .home-text09 {
            color: rgba(119, 119, 119, 1);
            width: auto;
            height: auto;
            font-size: 17px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 28.389999389648438px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-image04 {
            top: 0px;
            left: auto;
            right: 0px;
            width: 50%;
            bottom: 0px;
            height: 80vh;
            display: none;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .home-frame-about {
            width: 100%;
            height: auto;
            display: flex;
          }
          .home-i-m-a-g-e05 {
            flex: 1;
            width: 50%;
            max-height: inherit;
            object-fit: cover;
          }
          .home-about-text {
            width: 50%;
            height: 680px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
          }
          .home-frame41 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-frame38 {
            width: auto;
            height: 316px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text11 {
            color: rgba(39, 19, 68, 1);
            width: 512px;
            height: auto;
            font-size: 35px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 45px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 33px;
          }
          .home-text13 {
            color: rgba(119, 119, 119, 1);
            width: 545px;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
            font-stretch: normal;
          }
          .home-frame39 {
            width: fit-content;
            display: flex;
            padding: 39px 0 0 0;
            align-items: flex-end;
          }
          .home-frame37 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 50px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-text15 {
            color: rgba(39, 19, 68, 1);
            width: 102px;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 25px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 9px;
            text-decoration: none;
          }
          .home-text17 {
            color: rgba(119, 119, 119, 1);
            width: 256px;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-frame-frame37 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-text19 {
            color: rgba(39, 19, 68, 1);
            width: 113px;
            height: auto;
            font-size: 19px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 25px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .home-text21 {
            color: rgba(119, 119, 119, 1);
            width: 259px;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-corevalues {
            width: 100%;
            height: 757px;
            display: flex;
            align-items: center;
            padding-left: 346px 0 0 0;
            padding-right: 346px 0 0 0;
            flex-direction: column;
            padding-bottom: 346px 0 0 0;
          }
          .home-frame {
            display: flex;
            padding: 0 5px;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 50px;
            flex-direction: column;
          }
          .home-text23 {
            color: rgba(255, 72, 128, 1);
            width: 150px;
            height: auto;
            font-size: 17px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Schoolbell;
            font-weight: 400;
            line-height: 28.389999389648438px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 13px;
            text-decoration: none;
          }
          .home-text25 {
            color: rgba(39, 19, 68, 1);
            width: 315px;
            height: auto;
            font-size: 39px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 48px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 13px;
            text-decoration: none;
          }
          .home-text27 {
            color: rgba(119, 119, 119, 1);
            width: auto;
            height: auto;
            font-size: 15px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-i-m-a-g-e06 {
            width: 99px;
            height: 23px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            margin-bottom: 50px;
          }
          .home-frame01 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: 50px;
          }
          .home-frame02 {
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
          .home-frame03 {
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
          .home-frame14 {
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
          .home-i-m-a-g-e07 {
            width: 180px;
            height: 180px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 22px;
            margin-bottom: 0;
          }
          .home-frame13 {
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
          .home-text29 {
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
          .home-text31 {
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
          .home-frame04 {
            top: 15px;
            left: 315px;
            width: 270px;
            height: 422px;
            display: flex;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
          }
          .home-rectangle {
            top: 0px;
            left: 0px;
            width: 270px;
            height: 422px;
            position: absolute;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 28px;
            margin-bottom: 0;
          }
          .home-frame05 {
            top: 0px;
            left: 0px;
            width: 270px;
            display: flex;
            padding: 32px 31px 51px 31px;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 20px;
            margin-bottom: 0;
            background-color: rgba(255, 192, 0, 1);
          }
          .home-frame12 {
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
          .home-frame06 {
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 22px;
            margin-bottom: 3px;
          }
          .home-i-m-a-g-e08 {
            width: 180px;
            height: 180px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 12px;
            margin-bottom: 0;
          }
          .home-frame11 {
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
          .home-text33 {
            color: rgba(255, 255, 255, 1);
            width: 181px;
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
          .home-text35 {
            color: rgba(255, 255, 255, 1);
            width: 208px;
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
          .home-frame07 {
            top: 0px;
            left: 0px;
            width: 270px;
            display: flex;
            padding: 32px 31px 51px 31px;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 20px;
            margin-bottom: 0;
            background-color: rgba(255, 192, 0, 1);
          }
          .home-frame121 {
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
          .home-frame08 {
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 22px;
            margin-bottom: 3px;
          }
          .home-i-m-a-g-e09 {
            width: 180px;
            height: 180px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 12px;
            margin-bottom: 0;
          }
          .home-frame111 {
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
          .home-text37 {
            color: rgba(255, 255, 255, 1);
            width: 181px;
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
          .home-text39 {
            color: rgba(255, 255, 255, 1);
            width: 208px;
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
          .home-frame09 {
            top: 15px;
            left: 615px;
            width: 270px;
            height: 422px;
            display: flex;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
          }
          .home-rectangle1 {
            top: 0px;
            left: 0px;
            width: 270px;
            height: 422px;
            position: absolute;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 28px;
            margin-bottom: 0;
          }
          .home-frame10 {
            top: 0px;
            left: 0px;
            width: 270px;
            display: flex;
            padding: 32px 30px 51px 30px;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 20px;
            margin-bottom: 0;
            background-color: rgba(171, 205, 82, 1);
          }
          .home-frame10 {
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
          .home-frame11 {
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 30px;
            margin-bottom: 3px;
          }
          .home-i-m-a-g-e10 {
            width: 180px;
            height: 180px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 22px;
            margin-bottom: 0;
          }
          .home-frame9 {
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
          .home-text41 {
            color: rgba(255, 255, 255, 1);
            width: 179px;
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
          .home-text43 {
            color: rgba(255, 255, 255, 1);
            width: 210px;
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
          .home-frame12 {
            top: 15px;
            left: 915px;
            width: 270px;
            height: 422px;
            display: flex;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
          }
          .home-rectangle2 {
            top: 0px;
            left: 0px;
            width: 270px;
            height: 422px;
            position: absolute;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 28px;
            margin-bottom: 0;
          }
          .home-frame13 {
            top: 0px;
            left: 0.5px;
            width: 269px;
            display: flex;
            padding: 32px 32px 52px 32px;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 20px;
            margin-bottom: 0;
            background-color: rgba(26, 185, 255, 1);
          }
          .home-frame8 {
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
          .home-frame14 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 22px;
            margin-bottom: 9px;
            flex-direction: column;
          }
          .home-i-m-a-g-e11 {
            width: 183px;
            height: 174px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            border-radius: 12px;
            margin-bottom: 0;
          }
          .home-frame7 {
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
          .home-text45 {
            color: rgba(255, 255, 255, 1);
            width: 197px;
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
          .home-text47 {
            color: rgba(255, 255, 255, 1);
            width: 205px;
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
          .home-activities {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 1430px;
            align-items: center;
            padding-top: 9px 135px;
            padding-right: 9px 135px;
            flex-direction: column;
            padding-bottom: 9px 135px;
          }
          .home-activity-title {
            width: 100%;
            height: 198px;
            display: flex;
            max-width: 430px;
            margin-bottom: 11px;
            flex-direction: column;
          }
          .home-text49 {
            color: rgba(255, 72, 128, 1);
            width: auto;
            height: auto;
            font-size: 17px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Schoolbell;
            font-weight: 400;
            line-height: 28.389999389648438px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 10px;
            text-decoration: none;
          }
          .home-text51 {
            color: rgba(39, 19, 68, 1);
            width: auto;
            height: auto;
            font-size: 40px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 48px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 10px;
            text-decoration: none;
          }
          .home-text53 {
            color: rgba(119, 119, 119, 1);
            width: auto;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-below-activity {
            height: auto;
            display: flex;
            justify-content: center;
          }
          .home-left {
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-creative {
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-frame15 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-end;
            border-color: transparent;
            margin-right: 20px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-text55 {
            color: rgba(39, 19, 68, 1);
            width: 209px;
            height: auto;
            font-size: 23px;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 28.799999237060547px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 14px;
            text-decoration: none;
          }
          .home-text57 {
            color: rgba(119, 119, 119, 1);
            font-size: large;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
          }
          .home-icon-creative {
            display: flex;
            padding: 17px;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
            background-color: rgba(171, 205, 82, 1);
          }
          .home-i-m-a-g-e12 {
            width: 36px;
            height: 35px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            margin-bottom: 0;
          }
          .home-sports {
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-frame16 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-end;
            border-color: transparent;
            margin-right: 20px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-text59 {
            color: rgba(39, 19, 68, 1);
            width: 209px;
            height: auto;
            font-size: 23px;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 28.799999237060547px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 14px;
            text-decoration: none;
          }
          .home-text60 {
            color: rgba(119, 119, 119, 1);
            font-size: large;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
          }
          .home-icon-sports {
            display: flex;
            padding: 17px;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
            background-color: rgba(255, 102, 102, 1);
          }
          .home-i-m-a-g-e13 {
            width: 35px;
            height: 35px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            margin-bottom: 0;
          }
          .home-i-m-a-g-e14 {
            width: 388px;
            height: 330px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0px;
            margin-bottom: 0;
          }
          .home-right {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-creative1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon-creative1 {
            display: flex;
            padding: 17px;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 20px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
            background-color: rgba(171, 205, 82, 1);
          }
          .home-i-m-a-g-e15 {
            width: 36px;
            height: 35px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            margin-bottom: 0;
          }
          .home-frame17 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-text61 {
            color: rgba(39, 19, 68, 1);
            font-size: 23px;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 28.799999237060547px;
            margin-bottom: 14px;
          }
          .home-text63 {
            color: rgba(119, 119, 119, 1);
            font-size: large;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
          }
          .home-creative2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: 50px;
          }
          .home-icon-sports1 {
            display: flex;
            padding: 17px;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 21px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
            background-color: rgba(255, 102, 102, 1);
          }
          .home-i-m-a-g-e16 {
            width: 35px;
            height: 35px;
            position: relative;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            margin-bottom: 0;
          }
          .home-frame18 {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .home-text65 {
            color: rgba(39, 19, 68, 1);
            font-size: 23px;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Fredoka One;
            font-weight: 400;
            line-height: 28.799999237060547px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 14px;
            text-decoration: none;
          }
          .home-text66 {
            color: rgba(119, 119, 119, 1);
            font-size: large;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Prompt;
            font-weight: 400;
            line-height: 25.049999237060547px;
          }
          .home-testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .home-container06 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container07 {
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text68 {
            color: var(--dl-color-gray-white);
          }
          .home-text69 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text70 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .home-text71 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text72 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .home-text73 {
            color: var(--dl-color-gray-white);
          }
          .home-text74 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
          }
          .home-container08 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image17 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image17:hover {
            transform: scale(1.2);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image18 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image18:hover {
            transform: scale(1.2);
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image19 {
            width: 40px;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image19:hover {
            transform: scale(1.2);
          }
          .home-logos {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container11 {
            flex: 0 0 auto;
            display: flex;
            min-width: 400px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container13 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image20 {
            width: 100%;
          }
          .home-container14 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image21 {
            width: 100%;
          }
          .home-container15 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image22 {
            width: 100%;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container17 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image23 {
            width: 100%;
            object-fit: cover;
          }
          .home-container18 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image24 {
            width: 100%;
          }
          .home-container19 {
            width: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image25 {
            width: 100%;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 50%;
            height: 70px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container21 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image26 {
            width: 100%;
          }
          .home-container22 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image27 {
            width: 100%;
            object-fit: cover;
          }
          .home-bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .home-image28 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-contaier {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container23 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .home-icon {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .home-text75 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text76 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .home-text77 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text78 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text80 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-container25 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container26 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .home-container26:hover {
            transform: scale(1.04);
          }
          .home-container27 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container28 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon2 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text81 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text82 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container29 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container31 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container32 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coffee-shop.jpg');
            background-position: center;
          }
          .home-container32:hover {
            transform: scale(1.04);
          }
          .home-container33 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container34 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon4 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text85 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text86 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-container01 {
              max-width: 960px;
            }
            .home-card {
              width: 100%;
            }
            .home-frame-about {
              flex-direction: column;
            }
            .home-i-m-a-g-e05 {
              width: 100%;
              max-height: inherit;
              object-fit: cover;
            }
            .home-about-text {
              width: 100%;
            }
            .home-frame41 {
              width: 100%;
              align-items: center;
            }
            .home-text11 {
              text-align: center;
            }
            .home-corevalues {
              width: 100%;
            }
            .home-frame {
              width: 100%;
            }
            .home-frame01 {
              width: inherit;
            }
            .home-below-activity {
              align-items: center;
              flex-direction: column;
            }
            .home-left {
              width: fit-content;
              align-items: center;
            }
            .home-creative {
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-frame15 {
              align-items: center;
            }
            .home-sports {
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-frame16 {
              align-items: center;
            }
            .home-text59 {
              color: rgb(39, 19, 68);
              font-size: 23px;
              font-family: Fredoka One;
              font-weight: 400;
              line-height: 28.8px;
              text-decoration: none;
            }
            .home-text60 {
              color: rgb(119, 119, 119);
              font-size: large;
              font-family: Prompt;
              font-weight: 400;
              line-height: 25.05px;
            }
            .home-creative1 {
              align-items: center;
              flex-direction: column;
            }
            .home-frame17 {
              align-items: center;
            }
            .home-text61 {
              align-items: center;
            }
            .home-creative2 {
              align-items: center;
              flex-direction: column;
            }
            .home-frame18 {
              align-items: center;
            }
            .home-container05 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .home-container06 {
              align-items: center;
            }
            .home-container07 {
              margin-right: 0px;
            }
            .home-logos {
              display: none;
            }
            .home-contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container29 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
            .home-container31 {
              width: 45%;
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .home-card {
              align-items: center;
            }
            .home-text02 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-image {
              width: 40%;
            }
            .home-image01 {
              width: 40%;
            }
            .home-image02 {
              width: 40%;
            }
            .home-image03 {
              width: 40%;
            }
            .home-image04 {
              display: none;
            }
            .home-i-m-a-g-e05 {
              width: 100%;
            }
            .home-activities {
              min-width: 100%;
            }
            .home-activity-title {
              min-width: 100%;
            }
            .home-below-activity {
              width: 100%;
              position: relative;
              min-height: inherit;
              align-items: center;
              flex-direction: column;
            }
            .home-left {
              width: 100%;
              align-items: center;
            }
            .home-creative {
              width: 90%;
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-frame15 {
              align-items: center;
            }
            .home-text57 {
              text-align: center;
            }
            .home-sports {
              width: 90%;
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-frame16 {
              align-items: center;
            }
            .home-text60 {
              text-align: center;
            }
            .home-right {
              width: 100%;
              align-items: center;
            }
            .home-creative1 {
              width: 90%;
              align-items: center;
              flex-direction: column;
            }
            .home-frame17 {
              align-items: center;
            }
            .home-text63 {
              width: auto;
              text-align: center;
            }
            .home-creative2 {
              width: 90%;
              align-items: center;
              flex-direction: column;
            }
            .home-frame18 {
              align-items: center;
            }
            .home-text65 {
              color: rgb(39, 19, 68);
              font-size: 23px;
              font-family: Fredoka One;
              font-weight: 400;
              line-height: 28.8px;
              text-decoration: none;
            }
            .home-text66 {
              width: auto;
              text-align: center;
            }
            .home-container05 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .home-container23 {
              width: 80%;
            }
            .home-text79 {
              text-align: center;
            }
            .home-container25 {
              flex-direction: column;
            }
            .home-container29 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .home-divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container30 {
              margin-top: 0px;
              flex-direction: column;
            }
            .home-container31 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              background-position: right;
            }
            .home-card {
              padding: var(--dl-space-space-unit);
            }
            .home-container02 {
              align-items: center;
              flex-direction: column;
            }
            .home-container03 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text09 {
              font-size: 30px;
            }
            .home-frame-about {
              width: 100%;
            }
            .home-frame41 {
              margin-bottom: var(--dl-space-space-sixunits);
            }
            .home-frame38 {
              width: 100%;
            }
            .home-text11 {
              width: 100%;
              text-align: center;
            }
            .home-text13 {
              width: 100%;
            }
            .home-frame39 {
              width: 100%;
              align-items: center;
              margin-bottom: 120px;
              flex-direction: column;
            }
            .home-frame37 {
              width: auto;
              align-items: center;
              margin-right: 0px;
            }
            .home-text17 {
              width: 400px;
            }
            .home-frame-frame37 {
              width: fit-content;
              align-items: center;
            }
            .home-text21 {
              width: 400px;
            }
            .home-frame01 {
              display: flex;
              flex-direction: column;
            }
            .home-frame03 {
              width: 252px;
              height: 388px;
            }
            .home-activities {
              height: inherit;
              margin-top: 100px;
              flex-direction: column;
            }
            .home-activity-title {
              justify-content: center;
            }
            .home-below-activity {
              width: auto;
              position: relative;
              min-width: inherit;
              min-height: inherit;
              justify-content: center;
            }
            .home-left {
              align-items: center;
            }
            .home-right {
              align-items: center;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-container05 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text79 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
