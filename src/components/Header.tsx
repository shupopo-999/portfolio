import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>ポートフォリオ</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
                 <li>
                    <Link to="/work-history">職務経歴</Link>
                </li>
                <li>
                    <Link to="/deli">作品一覧</Link>
                </li>
                <li>
                    <Link to="/sns">SNS</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
