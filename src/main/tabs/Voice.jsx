import { useState } from "react";

export default function Voice() {
    const [activeTab, setActiveTab] = useState("기본");

    const tabs = ["프리미엄", "기본", "스킬", "퀵보이스", "메시지"];

    const content = {
    "프리미엄": [
        { title: "메인대사", text: "모든 것의 가치를 정하는 기준은 단 하나. 아름다운가, 혹은 그렇지 않은가." },
        { title: "^^ (웃음)", text: "(짧은 웃음)" },
        { title: "ㅠㅠ (울음)", text: "(짧은 울음)" },
        { title: "인사", text: "또 보네." },
        { title: "궁금", text: "무슨 생각 하고 있어?" },
        { title: "감사", text: "이런 영광이." },
        { title: "춤", text: "스텝이 나쁘지 않군." },
        { title: "슬픔", text: "안타깝군." },
        { title: "기쁨", text: "가치있는 소장품이야." },
        { title: "도발_1", text: "미감이 구려. 수준알 만하네." },
        { title: "도발_2", text: "실력이 없으면 근성이라도 있어야지." },
        { title: "첫 킬", text: "Good!" },
        { title: "두 번째 킬", text: "Cool!" },
        { title: "세 번째 킬", text: "Nice!!" },
        { title: "네 번째 킬", text: "Great!!" },
        { title: "다섯 번째 킬", text: "Wonderful!!" },
        { title: "여섯 번 이상 킬_1", text: "Fantastic!!" },
        { title: "여섯 번 이상 킬_2", text: "Excellent!!!" },
        { title: "여섯 번 이상 킬_3", text: "Amazing!!!" },
        { title: "짧은 시간 내에 2킬", text: "더블킬!! (Double Kill)" },
        { title: "짧은 시간 내에 3킬", text: "트리플킬!! (Triple Kill)" },
        { title: "짧은 시간 내에 4킬", text: "쿼드로킬!! (Quadru Kill)" },
        { title: "짧은 시간 내에 5킬", text: "제노사이드!! (Genocide)" },
    ],
    "기본": [
        { title: "등장하면서_1", text: "아름다운 전장이군." },
        { title: "등장하면서_2", text: "원하는걸 말해, 엘프리데." },
        { title: "등장하면서_3", text: "추악한 것들이 뒤엉켜 있는 꼴이란…" },
        { title: "위기 상황-1", text: "하…짜증나는군…" },
        { title: "위기 상황-2", text: "슬슬 사려야겠어…" },
        { title: "적을 죽였을 때-1", text: "상대할 가치도 없군." },
        { title: "적을 죽였을 때-2", text: "다음엔 좀 더 현명하게 행동해." },
        { title: "죽었을 때-1", text: "형편없는 결말이군." },
        { title: "죽었을 때-2", text: "어이없네…" },
        { title: "쉽게 이겼을 때-1", text: "훌륭한 작품이었어." },
        { title: "쉽게 이겼을 때-2", text: "평론할 가치도 없었네." },
        { title: "어렵게 이겼을 때-1", text: "이렇게까지 할 일이었나?" },
        { title: "어렵게 이겼을 때-2", text: "시간을 너무 끌었어." },
        { title: "쉽게 졌을 때-1", text: "별 기대를 안했으니 실망할거 없지." },
        { title: "쉽게 졌을 때-2", text: "아쉽냐고? 딱히." },
        { title: "어렵게 졌을 때-1", text: "시간낭비 했군." },
        { title: "어렵게 졌을 때-2", text: "이건 예술에 대한 모독이야." },
        { title: "도움 요청-1", text: "기회를 줄게. 다음은 없어." },
        { title: "도움 요청-2", text: "여기와봐. 손해볼거 없을걸?" },
        { title: "사과-1", text: "미안하게 됐어." },
        { title: "사과-2", text: "실수는 누구나 하잖아?" },
        { title: "콜라 마실 때-1", text: "도로 가져가." },
        { title: "콜라 마실 때-2", text: "한번만 참는다…" },
        { title: "아이템을 구입하면서_1", text: "좋아, 그걸로." },
        { title: "아이템을 구입하면서_2", text: "이정도는 돼야지." },
        { title: "감탄", text: "뛰어난 안목이야" },
        { title: "고마움-1", text: "보답하지." },
        { title: "고마움-2", text: "꽤 하는데?" },
        { title: "기분 좋은 소리", text: "예술의 정점을 보게 될거야." },
    ],
    "스킬": [
        { title: "프레임 프레셔 시전-1", text: "프레임!" },
        { title: "프레임 프레셔 시전-2", text: "압박해라." },
        { title: "센터 오브 그래비티 시전-1", text: "중심으로." },
        { title: "센터 오브 그래비티 시전-2", text: "거기가 아니야." },
        { title: "센터 오브 그래비티 시전-3", text: "변위." },
        { title: "밸런스 브레이크 잡기 중", text: "가까이 오지마." },
        { title: "밸런스 브레이크 잡기 후 ", text: "불쾌하네." },
        { title: "액시스 시프트 시전-1", text: "중력 축 변경." },
        { title: "액시스 시프트 시전-2", text: "액시스." },
        { title: "골든 레이시오 시전-1", text: "그 자리에." },
        { title: "골든 레이시오 시전-2", text: "골든 레이시오." },
        { title: "골든 레이시오 시전 후-1", text: "정지." },
        { title: "골든 레이시오 시전 후-2", text: "그러고 있어." },
        { title: "퍼펙트 컴포지션 시전-1", text: "미학의 정점을." },
        { title: "퍼펙트 컴포지션 시전-2", text: "목도해라." },
        { title: "퍼펙트 컴포지션 시전-3", text: "퍼펙트." },
        { title: "퍼펙트 컴포지션 폭발 후-1", text: "여기서 실현해볼까." },
        { title: "퍼펙트 컴포지션 폭발 후-2", text: "완벽한 구조야." },
        { title: "퍼펙트 컴포지션 폭발 후-3", text: "컴포지션!" },
    ],
    "퀵보이스": [
        { title: "공격", text: "시대의 걸작을 만들 때야" },
        { title: "후퇴-1", text: "만용은 작품을 망치는 법이지." },
        { title: "후퇴-2", text: "그쯤 해둬. 추하다." },
        { title: "트루퍼 대기-1", text: "트루퍼? 잠시 감상해볼까?" },
        { title: "트루퍼 대기-2", text: "얼마나 추악한지 구경해볼까?" },
        { title: "트루퍼 공격-1", text: "아마추어의 졸작일뿐. 처리해." },
        { title: "트루퍼 공격-2", text: "보존할 가치도 없어." },
        { title: "기지 방어-1", text: "가진 것에 만족할 줄 알아야지." },
        { title: "기지 방어-2", text: "본진이나 신경쓸래?" },
        { title: "궁극기 사용 가능-1", text: "이 조악한 곳을 뜯어고쳐줄게." },
        { title: "궁극기 사용 가능-2", text: "슬슬 이 촌극을 끝내자." },
        { title: "궁극기 사용 가능-3", text: "완벽한 예술을 보게 될거야." },
    ],
    "메시지": [
        { title: "문자 수신음", text: "문자 확인해. 알림이 꼴보기 싫어." },
        { title: "카톡 수신음", text: "카톡 확인해. 알림이 꼴보기 싫어." },
        { title: "모닝콜", text: "자는 얼굴이 짜증나네. 당장 일어나." },
        { title: "굿나잇", text: "얼마나 험한꼴을 봐야 잠들고 싶어질까?" },
    ],
    };

return (
    <section className="content">
    <div className="s7">
        {/* 성우 정보 */}
        <div className="s7_1">
        <h2>성우 정보</h2>
        <p className="txt_box">
            <span>장민혁</span>
            KBS 32기
            <br />
            가디언즈오브갤럭시-앤트맨 / 나루토 질풍전-오오츠츠키 인드라 / 디지몬 크로스워즈-아폴로몬 / 명탐정 코난-우상길 / 겨울왕국-크리스토프 / 극장판 귀멸의 칼날-렌고쿠 쿄쥬로 / 던전앤파이터-마이어 / 데스티니 차일드-호루스 외 다수
        </p>
        </div>

        {/* 보이스 듣기 */}
        <div className="s7_2">
        <h2>보이스 듣기</h2>

        {/* 탭 영역 */}
        <p className="tab">
            {tabs.map((tab) => (
                <a key={tab} className={`${activeTab === tab ? "on" : ""}`} onClick={() => setActiveTab(tab)} style={{width:'194px'}}>
                    {tab}
                </a>
            ))}
        </p>

        {/* 내용 영역 */}
        <div className="tab_c">
            <div className="voice_box show">
                <table className="voice_lst" cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    {content[activeTab].map((item, idx) => (
                        <tr key={idx}>            
                            <td className="btn_p">
                                <a>play</a>
                            </td>
                            <td className="name">{item.title}</td>
                            <td className="cmt">{item.text}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
    </div>
    </section>
);
}