import React from "react";
import reactImage from "../images/react.png";
import tsImage from "../images/ts.png";
import awsImage from "../images/AWS.jpg";
import profileImage from "../images/shupopo.png";
import cplusImage from "../images/c++.png";
import cImage from "../images/c.png";
import direxrXImage from "../images/DirectX.png";
import pythonImage from "../images/python.png";

const HomePage = () => {
  const names:string = "shu_999です!!";
  const pr:string = "普段行っているプログラムはReactを使ってTypeScriptでWebアプリケーションを作ったり、DirectXを使ってゲームを作ったりしています。\nその他にも、私生活ではゲームをしたり、アニメを見たりしています。\nゲームではApexやVALORANT、最近ではPUBGに再度ハマっております。\nアニメでは、ダンダダンや黙示録の四騎士、ドラゴンボールDAIMAなどを見ています。";

  return (
    <div className="container text-center">
      <h1 className="home title">ホーム</h1>
      <div>
        <img src={profileImage} className="profileImage" />
        <p>
          <h4>{names}</h4>
          <MultiLineBody body={pr}></MultiLineBody>
        </p>
      </div>
      
      <section id="skill">
        <div className="text-center">
          <div className="text-padding-bottom text-padding-top">
            <h1 className="title">スキル一覧</h1>
          </div>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img src={direxrXImage} />
              <h4>DirectX</h4>
              <p>DirectXが使えます</p>
            </div>
            <div className="col-md-4 services">
              <img src={cImage} />
              <h4>C言語</h4>
              <p>C言語が使えます</p>
            </div>
            <div className="col-md-4 services">
              <img src={cplusImage} />
              <h4>C++</h4>
              <p>C++が使えます</p>
            </div>

            <div className="text-padding-bottom text-padding-top">
              <h1 className="title">勉強中のスキル一覧</h1>
            </div>

            <div className="col-md-4 services">
              <img src={awsImage} />
              <h4>AWS</h4>
              <p>AWS勉強中です</p>
            </div>
            <div className="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>独学でReact勉強中です</p>
            </div>
            <div className="col-md-4 services">
              <img src={tsImage} />
              <h4>TypeScript</h4>
              <p>独学でTypeScript勉強中です</p>
            </div>
            <div className="col-md-4 services">
              <img src={pythonImage} />
              <h4>python</h4>
              <p>独学でpython勉強中です</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const MultiLineBody = ({ body }: { body: string }) => {
  const texts = body.split('\n').map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    );
  });
  return <div>{texts}</div>;
};

export default HomePage;
