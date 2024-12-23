import React from 'react'
import DirexrXImage from "../images/DirectX.png";
import TodoImage from "../images/todo.png";
import PortfolioImage from "../images/portfolio.png";
import ContestImage from "../images/contest.png";
import HEWImage from "../images/hew.png";
import WEBImage from "../images/web-app.png";
import WEBImage2 from "../images/web-app2.png";

const DeliverablesPage = () => {
  return (
    <div className="container text-center">
      <div className="text-padding-bottom">
        <h1 className="delicerbles title">作品(仮)</h1>
      </div>
      <section id="skill">
        <div className="text-center">
          <div className="row text-center">
            <h4>現在制作中の作品</h4>
            <div className="services text-padding-bottom">
              <img src={WEBImage} /><br />
              <p>
                現在WEBで僕の苦手な英語を克服するために<br />
                英単語を時間内にタイピングするゲームを制作中です！<br />
                <img src={WEBImage2} /><br />
                このように分からない単語があればSkipボタンを押すことによって4点を代償に答えが表示されるようにしました。<br />
                最初は-6点にしていたのですが自分でやってるうちに回転率が悪いなと感じ始めたので-4点にしました。<br />
                代償はなしでもいいかなと思ってはいたのですがゲーム性が失われると思ったのでskipを押すと-4点をするようにしました。<br />
                現在単語数も少ないので同じ単語が何回か出てきたりします。<br />
                今後のUpdateでどんどん増やしていこうと思います。<br />
              </p>
              <a href='https://main.d24t8naahauj49.amplifyapp.com/'>作品のURL <br /></a>
              <a href='https://github.com/shupopo-999/web-app'>作品のGitHubURL</a>
            </div>
            <h4>1年次の作品</h4>
            <div className="services text-padding-bottom">
              <img className="image" src={DirexrXImage} />
              <p>1年次では主にコンソール画面でのゲームを作っていました。</p>
            </div>
            <h4>2年次の作品</h4>
            <div className="services text-padding-bottom">
              <img src={HEWImage} />
              <p>この作品ではスキルを使う部分がありそこの一部を担当していました。</p>
              <a href='https://github.com/mukai0000/HEW_MIKO'>作品のGitHubURL</a>
            </div>
            <h4>3年次の作品</h4>
            <div className="services text-padding-bottom">
              <img src={ContestImage} />
              <p>
                ぷちコンというUnrealEngenのコンテストに提出した作品です。<br />
                このコンテストでは個人で作成しました。<br />
              </p>
              <a href='https://github.com/shupopo-999/Contest'>作品のGitHubURL</a>
            </div>
            <div className="services text-padding-bottom">
              <img src={PortfolioImage} />
              <p>
                独学で他言語を学び現在のこのページを作成し、このWebサイトはAWSのAmplifyを使用して動かしています。<br />
                これが作品でもありポートフォリオです。<br />
              </p>
              <a href='https://main.d1imdaxv4yro4n.amplifyapp.com/'>作品のURL</a><br />
              <a href='https://github.com/shupopo-999/portfolio'>作品のGitHubURL</a>
            </div>
            <div className="services text-padding-bottom">
              <img src={TodoImage} />
              <p>
                独学でYoutubeやサイトなどでReactやTypeScriptを学びました。<br />
                ReactのTypeScriptで作成した作品です。<br />
              </p>
              <a href='https://github.com/shupopo-999/todo-list'>作品のGitHubURL</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeliverablesPage