import React from "react";
import skill01 from "../../image/01좌클릭.png";
import skill02 from "../../image/02우클릭.png";
import skill03 from "../../image/03쌍클릭.png";
import skill04 from "../../image/04시프트.png";
import skill05 from "../../image/05F.png";
import skill06 from "../../image/06스페.png";
import skill07 from "../../image/07휠업.png";
import skill08 from "../../image/08_궁극기1차.png";

export default function Skill() {
    return (
        <section class="content">
        {/* 좌클릭 */}
        <div class="s2 skill_box">
            <h2 class="mb2">라인 컴포지션</h2>
            <p class="txt">
                중력선을 생성해 직선상의 적을 압박합니다.
            </p>

            <div class="s2_1">
                <h3>조작키</h3>
                <div>
                    <p class="key key1">마우스 좌클릭</p>
                </div>
            </div>

            <div class="s2_2">
                <h3>기본 정보</h3>
                <div class="tbl">
                    <p><b>쿨타임(초)</b>	<i>0.40</i></p>
                    <p><b>사거리</b><i>850</i></p>
                    <p><b>공격판정</b><i>원거리</i></p>
                    <p><b>다운 유발</b><i>OFF</i></p>
                </div>
            </div>

            <div class="s2_3">
                <h3>스킬 영상</h3>
                <div class="video">
                        <img src = {skill01} style = {{width : '605px', height : '340px'}}></img>
                </div>
            </div>
        </div>

        {/* 우클릭 */}
        <div class="s2 skill_box">
            <h2 class="mb2">프레임 프레셔</h2>
            <p class="txt">
                공간을 압축하는 중력 프레임을 형성합니다. 
                영역 안의 적은 이동이 둔화됩니다.
            </p>

            <div class="s2_1">
                <h3>조작키</h3>
                <div>
                    <p class="key key2">마우스 우클릭</p>
                </div>
            </div>

            <div class="s2_2">
                <h3>기본 정보</h3>
                <div class="tbl">
                    <p><b>쿨타임(초)</b>	<i>{Number(8.00).toFixed(2)}</i></p>
                    <p><b>사거리</b><i>850</i></p>
                    <p><b>공격판정</b><i>원거리</i></p>
                    <p><b>다운 유발</b><i>OFF</i></p>
                </div>
            </div>

            <div class="s2_3">
                <h3>스킬 영상</h3>
                <div class="video">
                        <img src = {skill02} style = {{width : '605px', height : '340px'}}></img>
                </div>
            </div>
        </div>

        {/* 양쪽 클릭 */}
        <div class="s2 skill_box">
            <h2 class="mb2">골든 레이시오</h2>
            <p class="txt">
                황금비 구조의 중력장을 생성합니다.
                영역 안의 적은 특정위치로 정렬되어 ‘반중력’ 상태가 됩니다.
            </p>

            <div class="s2_1">
                <h3>조작키</h3>
                <div>
                    <p class="key key3">마우스 양쪽클릭</p>
                </div>
            </div>

            <div class="s2_2">
                <h3>기본 정보</h3>
                <div class="tbl">
                    <p><b>쿨타임(초)</b>	<i>13.00</i></p>
                    <p><b>사거리</b><i>1400</i></p>
                    <p><b>공격판정</b><i>원거리</i></p>
                    <p><b>다운 유발</b><i>ON</i></p>
                </div>
            </div>

            <div class="s2_3">
                <h3>스킬 영상</h3>
                <div class="video">
                        <img src = {skill03} style = {{width : '605px', height : '340px'}}></img>
                </div>
            </div>
        </div>
        
        {/* 시프트 */}
        <div class="s2 skill_box">
            <h2 class="mb2">센터 오브 그래비티</h2>
            <p class="txt">
                중력 중심을 이동시켜 위치를 재배치합니다.
            </p>

            <div class="s2_1">
                <h3>조작키</h3>
                <div>
                    <p class="key key4">Shift+마우스 좌클릭</p>
                </div>
            </div>

            <div class="s2_2">
                <h3>기본 정보</h3>
                <div class="tbl">
                    <p><b>쿨타임(초)</b>	<i>5.50</i></p>
                    <p><b>사거리</b><i>1060</i></p>
                    <p><b>공격판정</b><i>원거리</i></p>
                    <p><b>다운 유발</b><i>ON</i></p>
                </div>
            </div>

            <div class="s2_3">
                <h3>스킬 영상</h3>
                <div class="video">
                        <img src = {skill04} style = {{width : '605px', height : '340px'}}></img>
                </div>
            </div>
        </div>

        {/* F */}
        <div class="s2 skill_box">
            <h2 class="mb2">밸런스 브레이크</h2>
            <p class="txt">
                적을 붙잡고 균형을 망가뜨려 바닥에 충돌시킵니다.
            </p>

            <div class="s2_1">
                <h3>조작키</h3>
                <div>
                    <p class="key key6">F</p>
                </div>
            </div>

            <div class="s2_2">
                <h3>기본 정보</h3>
                <div class="tbl">
                    <p><b>쿨타임(초)</b>	<i>5.00</i></p>
                    <p><b>공격범위</b><i>100</i></p>
                    <p><b>공격판정</b><i>근거리</i></p>
                    <p><b>다운 유발</b><i>ON</i></p>
                </div>
            </div>

            <div class="s2_3">
                <h3>스킬 영상</h3>
                <div class="video">
                        <img src = {skill05} style = {{width : '605px', height : '340px'}}></img>
                </div>
            </div>
        </div>

        {/* 스페이스 */}
        <div class="s2 skill_box">
            <h2 class="mb2">액시스 시프트</h2>
            <p class="txt">
                중력축을 바꿔 미끄러지듯 이동합니다.
            </p>

            <div class="s2_1">
                <h3>조작키</h3>
                <div>
                    <p class="key key7">Space</p>
                </div>
            </div>

            <div class="s2_2">
                <h3>기본 정보</h3>
                <div class="tbl">
                    <p><b>쿨타임(초)</b>	<i>25.00</i></p>
                    <p><b>사거리</b><i>자신</i></p>
                    <p><b>공격판정</b><i>없음</i></p>
                    <p><b>다운 유발</b><i>OFF</i></p>
                </div>
            </div>

            <div class="s2_3">
                <h3>스킬 영상</h3>
                <div class="video">
                        <img src = {skill06} style = {{width : '605px', height : '340px'}}></img>
                </div>
            </div>
        </div>

        {/* 휠 */}
        <div class="s2 skill_box">
            <h2 class="mb2">에스테틱 센스</h2>
            <p class="txt">
                벡터 선들을 정렬하며 최적의 비율을 찾습니다.
                자신의 시야가 증가합니다.
            </p>

            <div class="s2_1">
                <h3>조작키</h3>
                <div>
                    <p class="key key8">Wheel Up</p>
                </div>
            </div>

            <div class="s2_2">
                <h3>기본 정보</h3>
                <div class="tbl">
                    <p><b>쿨타임(초)</b>	<i>0.00</i></p>
                    <p><b>사거리</b><i>자신</i></p>
                    <p><b>공격판정</b><i>없음</i></p>
                    <p><b>다운 유발</b><i>OFF</i></p>
                </div>
            </div>

            <div class="s2_3">
                <h3>스킬 영상</h3>
                <div class="video">
                        <img src = {skill07} style = {{width : '605px', height : '340px'}}></img>
                </div>
            </div>
        </div>

        {/* E */}
        <div class="s2 skill_box">
            <h2 class="mb2">퍼펙트 컴포지션</h2>
            <p class="txt">
                광범위한 중력 구도를 전개합니다. 전장 위에 형성된 중력선이 적의 움직임을 제한합니다.
                중력선이 닫히기까지 범위 내의 모든 적들은 ‘반중력’ 상태가 됩니다.
            </p>

            <div class="s2_1">
                <h3>조작키</h3>
                <div>
                    <p class="key key9">E</p>
                </div>
            </div>

            <div class="s2_2">
                <h3>기본 정보</h3>
                <div class="tbl">
                    <p><b>쿨타임(초)</b>	<i>5.50</i></p>
                    <p><b>사거리</b><i>1060</i></p>
                    <p><b>공격판정</b><i>원거리</i></p>
                    <p><b>다운 유발</b><i>ON</i></p>
                </div>
            </div>

            <div class="s2_3">
                <h3>스킬 영상</h3>
                <div class="video">
                        <img src = {skill08} style = {{width : '605px', height : '340px'}}></img>
                </div>
            </div>
        </div>
    </section>
    );
}

// 또는 함수 선언 후 맨 아래에 아래 줄을 추가하세요.
// export default Ability;