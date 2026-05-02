import krisBgm from '../../audio/cyphers_Theme_of_Kris.mp3';
import React, { useState, useEffect } from 'react';

export default function Content() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(krisBgm));

  const togglePlay = (e) => {
    e.preventDefault();
    if(isPlaying) {
      audio.pause();
    }
    else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

return (
  <section className="content">
    <div className="s6">
      <div className="s6_1">
        <h2>팬키트</h2>
        <p>
          <span class = "fan_kit">
            <em>크리스티안 팬키트</em>
            <i>일러스트, 원화, SD</i>
          </span>
        </p>
      </div>

      <div className="s6_2">
        <h2>BGM</h2>
        <a
          href= {krisBgm}
          download="Cyphers_Theme_of_Kris.mp3"
          className="btn_bgm_down"
        >
          <b>다운로드</b>
        </a>

        <ul>
          <li className = {isPlaying ? "play" : ""}>
            <a onClick={togglePlay} style={{cursor : 'pointer'}}>
              {isPlaying ? "stop" : "play"}play</a>
            <p className = "bgm_name">
              <span>Theme of Kristian</span>
              <i>작곡: littledeath / 크리스 테마곡</i>
            </p>
          </li>
        </ul>

        <h3>곡 정보</h3>
        <p className="txt_box">
          세상을 관망하며 자신만의 미학으로 타인을 재단하려 든다. 그에게 중요한 것은 오직 한가지. 아름다운가, 혹은 그렇지 않은가.
        </p>

        <h3>작곡가 정보</h3>
        <p className="txt_box">
          <span>littledeath</span>
          애니메이션과 게임 음악 위주로 활동하는 작곡가. 오케스트라 기반의 사운드로 다양한 감정선 표현과 몰입을 선사하는데 주력하고 있다.
        </p>
      </div>

      <div className="s6_3">
        <h2>영상</h2>
        <ul>
          <li>
            <h3>플레이영상_크리스</h3>
          </li>
          <li>
            <h3>스토리영상_크리스</h3>
          </li>
        </ul>
        
      </div>
    </div>
  </section>
);
}