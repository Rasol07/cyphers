import { Link } from 'react-router-dom'; // 1. Link 컴포넌트 불러오기
import chris from '../image/chris.png';
import './addition.css';

export default function Header() {
    return (
        <header>
            {/* 2. class를 className으로 변경 */}
            <div style={{ 
                backgroundImage: `url(${chris})`, 
                backgroundSize: '1500px',
                backgroundRepeat: 'no-repeat', 
                // 이제 이 calc 값이 다른 속성에 방해받지 않고 우선적으로 적용됩니다.
                backgroundPosition: `calc(50% + 100px) 5%`, 
                
            }}>
                
                <h1>
                    <b>CYP. 중력 능력자</b>
                    <span className = "mainName">탐미자
                        <em>크리스</em>
                    </span>
                </h1>
                <h2>연관 캐릭터 </h2>
                <p className="lst_char">
                    
                    <Link to="https://cyphers.nexon.com/game/character/info/elfriede">
                        <img src="https://resource.cyphers.co.kr/ui/img/char/char65.png" alt="엘프리데" />
                        <em>엘프리데</em>
                    </Link>
                    <Link to="https://cyphers.nexon.com/game/character/info/tisha">
                        <img src="https://resource.cyphers.co.kr/ui/img/char/char66.png" alt="티샤" />
                        <em>티샤</em>
                    </Link>
                </p>
            </div>
        </header>
    );
}