import React from "react";
import '../addition.css'

export default function Ability() {
  return (
    <section className="content">
      <h2 className="mb3">타입 및 능력</h2>
      <p className="txt">
        ‘반중력’ 상태이상으로 적의 움직임을 봉쇄하고 위치를 재정렬
      </p>

      <div className="s1_1">
        <h3>캐릭터 타입</h3>
        <div className="st_bar s1_11">
          <p>근거리</p>
          <p className="cnt cnt1"><i style={{ left: "75.2%" }}>8</i></p>
          <p>원거리</p>
        </div>

        <div className="st_bar s1_12">
          <p>대인</p>
          <p className="cnt cnt2"><i style={{ left: "28.2%" }}>3</i></p>
          <p>공성</p>
        </div>

        <h3 style={{ marginTop: "23px" }}>조작 난이도</h3>
        <div className="s1_13">
          ★★★
          <span>어려움</span>
        </div>
      </div>

      <div className="s1_2">
        <h3>능력</h3>
        <div className="s1_21">
          <p>공격<em>90</em></p>
          <p>치명<em>43</em></p>
          <p>체력<em>1560</em></p>
          <p>회피<em>56</em></p>
          <p>방어<em>14</em></p>
          <p>이동<em>312</em></p>
        </div>
      </div>

      <div className="s1_3">
        <h3>특수능력</h3>
        <div className="s1_31">
          <p>
            <span>
              <img 
                src="https://resource.cyphers.co.kr/ui/img/character/special_skill/2.png" 
                style={{ margin: "19px" }} 
                alt="특수능력"
              />
            </span>
            <em>무력화★★</em>
          </p>
          <p>
            <span>
              <img 
                src="https://resource.cyphers.co.kr/ui/img/character/special_skill/10.png" 
                style={{ margin: "19px" }} 
                alt="특수능력"
              />
            </span>
            <em>약화★☆</em>
          </p>
          <p><span></span><em>-</em></p>
        </div>
      </div>

      <div className="s1_4">
        <h2>활용정보</h2>
        <h3>강점</h3>
        <p className="txt">
          특정 스킬이 보유한 반중력 상태이상 효과로 일정시간 적을 다운시키지 않고 아군의 공격이 용이한 상태로 만들 수 있습니다. <br />
          반중력 상태의 적을 공격하면 추가대미지를 입힐 수 있습니다.
        </p>

        <h3 className="mt23">약점</h3>
        <p className="txt">
          강력한 딜링기가 없어 통제된 적을 아군의 지원 없이 마무리하기 어렵습니다.
        </p>

        <h3 className="mt23">사용할 때</h3>
        <p className="txt">
          ‘프레임 프레셔’로 적의 이동속도를 둔화시킨 뒤 ‘골든 레이시오’로 스택을 쌓으면 적을 반중력 상태로 만들어 공격할 수 있습니다. <br />
          궁극기 ‘퍼펙트 컴포지션’을 아군 딜러와 연계하면 여러 명의 적을 효과적으로 처치할 수 있습니다.
        </p>

        <h3 className="mt23">상대할 때</h3>
        <p className="txt">
          반중력 상태이상에 걸리면 다운되지 않고 일정시간 공중에 떠 피격당하기 용이해지므로 반중력 스택을 쌓을 수 있는 스킬에 당하지 않도록 조심해야합니다. 
        </p>
      </div>
    </section>
  );
}