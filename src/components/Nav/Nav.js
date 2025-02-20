import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavModal from './NavModal/NavModal';
import Navlogin from './NavModal/Navlogin/Navlogin';
import NavInfo from './NavModal/Nabinfo/Navinfo';
import cart from './icon/cart.svg';
import info from './icon/info.svg';
import './Nav.scss';

function Nav() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [currentMenuId, setCurrentMenuId] = useState(0);

  const navOnMouseLeave = () => {
    setCurrentMenuId(0);
  };

  const navOnMouseEnter = id => {
    setCurrentMenuId(id);
  };

  const infoOnMouse = () => {
    setIsInfoOpen(prev => !prev);
  };
  const loginOnMouse = () => {
    setIsLoginOpen(prev => !prev);
  };

  return (
    <div className="nav">
      <div className="startHeader">
        <Link to="/">
          <img className="logo" src="images/nav/Logo.PNG" alt="Logo" />
        </Link>
      </div>

      <div className="secondHeader">
        {NAVBAR_LIST.map(({ title, id }) => {
          return (
            <div
              className="navMenuWrap"
              key={id}
              onMouseEnter={() => {
                navOnMouseEnter(id);
              }}
              onMouseLeave={navOnMouseLeave}
            >
              <div className="navMenu">
                <Link to="/productlist">
                  <div className="navMenuTitle"> {title}</div>
                </Link>
                {currentMenuId === id && (
                  <NavModal
                    setCurrentMenuId={setCurrentMenuId}
                    currentMenuId={currentMenuId}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="thirdHeader">
        <div className="cartWrap">
          <Link to="/cart">
            <img className="cartImg" src={cart} alt="cart" />
          </Link>
        </div>
        <div className="infoWrap" onMouseLeave={infoOnMouse}>
          <img
            className="infoImg"
            src={info}
            alt="info"
            onMouseOver={infoOnMouse}
          />
          {isInfoOpen === true ? <NavInfo /> : null}
        </div>
      </div>
      <div className="endHeader">
        <div className="loginWrap" onMouseLeave={loginOnMouse}>
          <div className="loginBtn" onMouseOver={loginOnMouse}>
            로그인
          </div>
          {isLoginOpen === true ? <Navlogin /> : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;

export const NAVBAR_LIST = [
  {
    id: 1,
    title: '티제품',
    classname: 'teashop',
    category: [
      {
        id: 1,
        list: '녹차',
        subclassname: 'greentea',
      },
      {
        id: 2,
        list: '홍차',
        subclassname: 'blacktea',
      },
      {
        id: 3,
        list: '티세트',
        subclassname: 'teaset',
      },
      {
        id: 4,
        list: '라이프스타일',
        subclassname: 'teaset',
      },
    ],
  },
  {
    id: 2,
    title: '티푸드',
    classname: 'teafood',
    category: [
      {
        id: 1,
        list: '케익',
        subclassname: 'cake',
      },
      {
        id: 2,
        list: '베이커리',
        subclassname: 'bread',
      },
      {
        id: 3,
        list: '아이스크림',
        subclassname: 'bread',
      },
    ],
  },
  {
    id: 3,
    title: '티웨어',
    classname: 'teaware',
    category: [
      {
        id: 1,
        list: '텀블러',
        subclassname: 'tumblr',
      },
      {
        id: 2,
        list: '티포트 세트',
        subclassname: 'tumblr',
      },
    ],
  },
];
