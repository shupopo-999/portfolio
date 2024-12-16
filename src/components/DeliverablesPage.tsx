import React from 'react'
import direxrXImage from "../images/DirectX.png";

const DeliverablesPage = () => {
  return (
    <div className="container text-center">
      <div className="text-padding-bottom">
        <h1 className="delicerbles title">作品(仮)</h1>
      </div>
      <section id="skill">
        <div className="text-center">
          <div className="row text-center">
            <div className="services text-padding-bottom">
              <img src={direxrXImage} />
              <h4>1年次の作品</h4>
              <p>頑張った</p>
            </div>
            <div className="services text-padding-bottom">
              <img src={direxrXImage} />
              <h4>2年次の作品</h4>
              <p>この作品ではスキルを使う部分がありそこの一部を担当していました。</p>
            </div>
            <div className="services text-padding-bottom">
              <img src={direxrXImage} />
              <h4>3年次の作品</h4>
              <p>独学で他の言語を学び頑張りました。</p>
              <a href='https://main.d1imdaxv4yro4n.amplifyapp.com/'>これが作品です。</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeliverablesPage