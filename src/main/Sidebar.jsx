import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Slidebar.css';

export default class Sidebar extends Component {
  state = {
    info: false,
    story: false,
    media: false,
    isFixed : false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;

    if(scrollTop > 768) {
      if(!this.state.isFixed)
          this.setState({isFixed: true});
    }
    else {
      if(this.state.isFixed) this.setState({isFixed: false});
    }
  };

  toggleSection = (key) => {
    this.setState((prev) => ({
      [key]: !prev[key], // 클릭한 것만 토글
    }));
  };

  render() {
    const { info, story, media, isFixed} = this.state;

    const ddStyle = (isOpen) => ({
      display: isOpen ? "block" : "none", // 각 dd 독립적으로 제어
    });

    return (
      <section className= {`s_menu ${isFixed ? "mn_fix" : ""}`}>
        <dl>
          {/* 기본정보 */}
          <dt
            className={info ? "open" : ""}
            onClick={() => this.toggleSection("info")}
          >
            기본정보
          </dt>
          <dd style={ddStyle(info)}>
            <NavLink to="/main/ability" className={({ isActive }) => (isActive ? "sel" : "")}>
              능력 및 활용
            </NavLink>
            <NavLink to="/main/skill" className={({ isActive }) => (isActive ? "sel" : "")}>
              스킬
            </NavLink>
          </dd>

          <dt
            className={story ? "open" : ""}
            onClick={() => this.toggleSection("story")}
          >
            스토리
          </dt>
          <dd style={ddStyle(story)}>
            <NavLink to="/main/eclipse" className={({ isActive }) => (isActive ? "sel" : "")}>
              이클립스
            </NavLink>
            <NavLink to="/main/report" className={({ isActive }) => (isActive ? "sel" : "")}>
              ESPER 보고서
            </NavLink>
            <NavLink to="/main/document" className={({ isActive }) => (isActive ? "sel" : "")}>
              관련문서
            </NavLink>
          </dd>

          {/* 미디어 */}
          <dt
            className={media ? "open" : ""}
            onClick={() => this.toggleSection("media")}
          >
            미디어
          </dt>
          <dd style={ddStyle(media)}>
            <NavLink to="/main/content" className={({ isActive }) => (isActive ? "sel" : "")}>
              콘텐츠
            </NavLink>
            <NavLink to="/main/voice" className={({ isActive }) => (isActive ? "sel" : "")}>
              보이스
            </NavLink>
          </dd>
        </dl>
      </section>
    );
  }
}
