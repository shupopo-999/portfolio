import React from 'react'
import DirexrXImage from "../images/DirectX.png";
import TodoImage from "../images/todo.png";
import PortfolioImage from "../images/portfolio.png";

const DeliverablesPage = () => {
  return (
    <div className="container text-center">
      <div className="text-padding-bottom">
        <h1 className="delicerbles title">作品(仮)</h1>
      </div>
      <section id="skill">
        <div className="text-center">
          <div className="row text-center">
            <h4>1年次の作品</h4>
            <div className="services text-padding-bottom">
              <img src={DirexrXImage} />
              <p>頑張った</p>
            </div>
            <h4>2年次の作品</h4>
            <div className="services text-padding-bottom">
              <img src={DirexrXImage} />
              <p>この作品ではスキルを使う部分がありそこの一部を担当していました。</p>
            </div>
            <h4>3年次の作品</h4>
            <div className="services text-padding-bottom">
              <img src={DirexrXImage} />
              <p>UnrealEngenのぷちコンというコンテストに提出した作品です。</p>
              <p>このコンテストでは個人で作成しました。</p>
              <a href='https://github.com/shupopo-999/Contest'>作品のGitHubURL</a>
            </div>
            <div className="services text-padding-bottom">
              <img src={PortfolioImage} />
              <p>独学で他言語を学び現在のこのページを作成し、このWebサイトはAWSのAmplifyを使用して動かしています。</p>
              <p>これが作品でもありポートフォリオです。</p>
              <p><a href='https://main.d1imdaxv4yro4n.amplifyapp.com/'>作品のURL</a></p>
              <a href='https://github.com/shupopo-999/portfolio'>作品のGitHubURL</a>
            </div>
            <div className="services text-padding-bottom">
              <img src={TodoImage} />
              <p>独学でYoutubeやサイトなどでReactやTypeScriptを学びました。</p>
              <p>ReactのTypeScriptで作成した作品です。</p>
              <a href='https://github.com/shupopo-999/todo-list'>作品のGitHubURL</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeliverablesPage