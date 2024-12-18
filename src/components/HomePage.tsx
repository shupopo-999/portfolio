import React from "react";
import reactImage from "../images/react.png";
import tsImage from "../images/ts.png";
import awsImage from "../images/AWS.jpg";
import profileImage from "../images/prof.png";
import cplusImage from "../images/c++.png";
import cImage from "../images/c.png";
import direxrXImage from "../images/DirectX.png";
import pythonImage from "../images/python.png";
import unityImage from "../images/unity.png";
import unrealImage from "../images/unreal.png";
import CSharplImage from "../images/CSharp.jpg";
import BlenderlImage from "../images/blender.png";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1 className="home title">ホーム</h1>
      <div>
        <img src={profileImage} className="profileImage" />
        <p>
          <h4>乾 修です!!</h4>
          <p>
          普段行っているプログラムはReactを使ってTypeScriptでWebアプリケーションを作ったり、DirectXを使ってゲームを作ったりしています。<br/>
          その他にも、私生活ではゲームをしたり、アニメを見たりしています。<br/>
          ゲームではApexやVALORANT、最近ではPUBGに再度ハマっております。<br/>
          アニメでは、ダンダダンや黙示録の四騎士、ドラゴンボールDAIMAなどを見ています。
          </p>
        </p>
      </div>
      
      <section id="skill">
        <div className="text-center">
          <div className="text-padding-bottom text-padding-top">
            <h1 className="title">スキル一覧</h1>
          </div>
          <div className="row text-center">
            <div className="col-md-4 services image">
              <img src={direxrXImage} />
              <h4>DirectX</h4>
              <p>DirectXが使えます</p>
            </div>
            <div className="col-md-4 services image">
              <img src={unityImage} />
              <h4>Unity</h4>
              <p>Unityが使えます</p>
            </div>
            <div className="col-md-4 services image">
              <img src={unrealImage} />
              <h4>Unreal</h4>
              <p>Unrealが使えます</p>
            </div>
            <div className="col-md-4 services image">
              <img src={cImage} />
              <h4>C言語</h4>
              <p>C言語が使えます</p>
            </div>
            <div className="col-md-4 services image">
              <img src={cplusImage} />
              <h4>C++</h4>
              <p>C++が使えます</p>
            </div>
            <div className="col-md-4 services image">
              <img src={CSharplImage} />
              <h4>C#</h4>
              <p>C#が使えます</p>
            </div>


            <div className="text-padding-bottom text-padding-top">
              <h1 className="title">勉強中のスキル一覧</h1>
            </div>

            <div className="col-md-4 services image">
              <img src={BlenderlImage} />
              <h4>Blender</h4>
              <p>Blender勉強中です</p>
            </div>
            <div className="col-md-4 services image">
              <img src={awsImage} />
              <h4>AWS</h4>
              <p>AWS勉強中です</p>
            </div>
            <div className="col-md-4 services image">
              <img src={reactImage} />
              <h4>React</h4>
              <p>独学でReact勉強中です</p>
            </div>
            <div className="col-md-4 services image">
              <img src={tsImage} />
              <h4>TypeScript</h4>
              <p>独学でTypeScript勉強中です</p>
            </div>
            <div className="col-md-4 services image">
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
