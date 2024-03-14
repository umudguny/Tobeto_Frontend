import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/my-profile/my-info"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="menu-icn" src="https://tobeto.com/user.svg"></img>
        <span> &nbsp;&nbsp;&nbsp;Kişisel&nbsp;Bilgilerim</span>
      </NavLink>
      <NavLink
        to="/my-profile/editprofile/experience"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="menu-icn" src="https://tobeto.com/business.svg"></img>
        <span> &nbsp;&nbsp;&nbsp;Deneyimlerim</span>
      </NavLink>
      <NavLink
        to="/my-profile/editprofile/education"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="menu-icn" src="https://tobeto.com/book.svg"></img>
        <span>&nbsp;&nbsp;&nbsp;Eğitim&nbsp;Hayatım</span>
      </NavLink>
      <NavLink
        to="/my-profile/editprofile/competence"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="menu-icn" src="https://tobeto.com/award.svg"></img>
        <span>&nbsp;&nbsp;&nbsp;Yetkinliklerim</span>
      </NavLink>{" "}
      <NavLink
        to="/my-profile/editprofile/certificates"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img
          className="menu-icn"
          src="https://tobeto.com/certificates.svg"
        ></img>
        <span> &nbsp;&nbsp;&nbsp;Sertifikalarım</span>
      </NavLink>{" "}
      <NavLink
        to="/my-profile/editprofile/social-media"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="menu-icn" src="https://tobeto.com/globe.svg"></img>
        <span>&nbsp;&nbsp;&nbsp;Medya&nbsp;Hesaplarım</span>
      </NavLink>{" "}
      <NavLink
        to="/my-profile/editprofile/language"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="menu-icn" src="https://tobeto.com/translate.svg"></img>
        <span>&nbsp;&nbsp;&nbsp;Yabancı&nbsp;Dillerim</span>
      </NavLink>{" "}
      <NavLink
        to="/my-profile/editprofile/settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="menu-icn" src="https://tobeto.com/settings.svg"></img>
        <span>&nbsp;&nbsp;&nbsp;Ayarlar</span>
      </NavLink>{" "}
    </div>
  );
};

export default Menu;
