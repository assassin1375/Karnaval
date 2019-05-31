import React from 'react';
import './styles/header.css';

function Header(props) {
  return (
    <div class="parent-menu container-fluid large-menu ">
      <div class="row m-0">
        <div class="col m12 zero-padding">
          <div id="header" class="header">
            <div class="site-logo">
              <a href="https://www.karnaval.ir" target="_self">
                <img
                  alt="کارناوال | راهنمای سفر"
                  src="images/site-logo-658.jpg"
                />
              </a>
            </div>
            <div class="show-search-icons">
              <i class="fa fa-search" />
              <p> جستجوی شهر، کشور ، جاذبه گردشگری و ... </p>
            </div>
            <div class="section-btn-header">
              <div class="overly" />
              <ul>
                {props.header_items.map((item, i) => {
                  return (
                    <li>
                      <a href="">{item.title}</a>
                      <ul className="sub-li-menu-first">
                        {item.sub_headers.map((subItem, i) => {
                          return (
                            <li
                              class="ajax-menu-li"
                              id="OlcNtBzd4j"
                              data-type="3"
                              data-display="1"
                              data-id="5922dbde2e7ccfa44d2a12ed"
                            >
                              <a href="https://www.karnaval.ir/category/excitement-adrenaline">
                                {subItem.title}
                              </a>
                              <div class="mega-sub-menu-li">
                                <a
                                  target="_blank"
                                  class="btn ka-blue btn-next-all-post-menu"
                                  href="https://www.karnaval.ir/category/excitement-adrenaline"
                                >
                                  مشاهده همه مطالب
                                </a>
                                <div class="line-posts-top-menu" />
                                <h4 class="title-posts-menu-section">
                                  آخرین مطالب {subItem.title}
                                </h4>
                                <div class="load-posts-menu-section" hidden="">
                                  <p>در حال بارگذاری ...</p>
                                  <div class="preloader-wrapper small active">
                                    <div class="spinner-layer spinner-green-only">
                                      <div class="circle-clipper left">
                                        <div class="circle" />
                                      </div>
                                      <div class="gap-patch">
                                        <div class="circle" />
                                      </div>
                                      <div class="circle-clipper right">
                                        <div class="circle" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}

                <div class="sub-li-menu-first-top-menu-one">
                  <li
                    class="menu-video-li ajax-menu-li"
                    id="UktDnD4FAV"
                    data-type="3"
                    data-display="3"
                    data-id="5922dbde2e7ccfa44d2a130d"
                  >
                    <a
                      class="ka-video-color"
                      href="https://www.karnaval.ir/category/time-lapse-video-hd"
                    >
                      <span>ویدیو HD</span>
                      <i class="fa fa-play-circle-o" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div class="login-section-view">
              <div class="login-section hidden ng-scope">
                <div class="login-info" data-target="modal-welcome">
                  <i class="material-icons">chat_bubble</i>
                  <span class="no-persian">1</span>
                </div>
                <button class="btn login">
                  ورود <i class="fa fa-lock" aria-hidden="true" />
                </button>
                <button class="btn sign-up">
                  عضویت <i class="fa fa-user-plus" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div class="search-box">
              <div class="head-search-box">
                <div class="col m1">
                  <div class="close-search-icons animated" id="animated-search">
                    <img
                      alt="کارناوال | راهنمای سفر"
                      src="images/cancel-790.png"
                      class="fa-times b-t"
                    />
                  </div>
                </div>
                <div class="col m10 pull-m1 rtl p-l-0">
                  <div class="input-field animated" id="animated-search">
                    <input
                      type="text"
                      placeholder="جستجو کنید : شهر ، مقصد یا جاذبه گردشگری"
                      id="input_search_box"
                      class=""
                    />
                    >
                    <div class="header-search">
                      <i class="fa fa-search" id="header-search" />
                    </div>
                  </div>
                </div>
                <div class="col m2 p-0 push-m10">
                  <div
                    class="site-logo-search-box animated"
                    id="animated-search"
                  >
                    <a href="https://www.karnaval.ir">
                      <img
                        alt="کارناوال | راهنمای سفر"
                        src="images/logo-search-541.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="search-box-body"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
