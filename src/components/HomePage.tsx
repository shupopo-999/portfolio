import React from "react";
import reactImage from "../images/react.png";
import tsImage from "../images/ts.png";
import awsImage from "../images/AWS.jpg";
import profileImage from "../images/20099.jpg";
import cplusImage from "../images/c++.png";
import cImage from "../images/c.png";
import direxrXImage from "../images/DirectX.png";
import pythonImage from "../images/python.png";
import unityImage from "../images/unity.png";
import unrealImage from "../images/unreal.png";
import cluster from "../images/Cluster.png";
import CSharplImage from "../images/CSharp.jpg";
import BlenderlImage from "../images/blender.png";
import ActiveDirectry from "../images/ActiveDirectry.jpg";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1 className="home title">ホーム</h1>
      <div>
        <img src={profileImage} className="profileImage" />
        <div>
          <div className="profile-name">
            <p>ｲﾇｲ ｼｭｳ</p>
            <h3>乾 修</h3>
          </div>
          <p>
          現在会社では、Windows Serverの構築をメインとしてその他に手順書作成や先輩や上司のサポートを行っております。 <br/>
          また、個人開発を通してWeb技術を継続的に学び、課題を整理して形にする力を磨いており、現在のWebサイトのURLに<br/>
          使用しているドメインを自ら購入し、Webサイトに使用したり、ゲームでのサーバー構築を行う際に使用したりしています。
          </p>
        </div>
      </div>
      
      <section id="skill">
        <div className="text-center">
           <div className="text-padding-bottom text-padding-top">
              <h1 className="title">入社して得たスキル一覧</h1>
            </div>
            <div className="row text-center">
              <div className="col-md-4 services image">
                <img src={awsImage} />
                <h4>AWS</h4>
                <p>入社して初めての案件でAWSを活用しました。</p>
              </div>
              <div className="col-md-4 services image">
                <img src={ActiveDirectry} />
                <h4>Active  Derectry</h4>
                <p>入社して社内の検証環境でドメインコントローラーの昇格や降格を学習していました。</p>
              </div>
              <div className="col-md-4 services image">
                <img src={cluster} />
                <h4>Cluster</h4>
                <p>入社して社内の検証環境でクラスタリングを学習していました。</p>
              </div>
            </div>
          <div className="text-padding-bottom text-padding-top">
            <h1 className="title">学生時代に得たスキル一覧</h1>
          </div>
          <div className="row text-center">
            <div className="col-md-4 services image">
              <img src={direxrXImage} />
              <h4>DirectX</h4>
              <p>DirectXは2年から卒業するまで学習していました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={unityImage} />
              <h4>Unity</h4>
              <p>Unityは１年から卒業するまで学習しており、アルバイトでも生徒に教えていました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={unrealImage} />
              <h4>UnrealEngine</h4>
              <p>UnrealEngineは3年の授業で学習しておりコンテストにも提出していました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={cImage} />
              <h4>C言語</h4>
              <p>C言語は学生生活４年間学習していました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={cplusImage} />
              <h4>C++</h4>
              <p>C++は学生生活４年間学習していました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={CSharplImage} />
              <h4>C#</h4>
              <p>C#は主にUnityでのみ使用しています。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={BlenderlImage} />
              <h4>Blender</h4>
              <p>Blenderでゲーム制作時に使用していました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={reactImage} />
              <h4>React</h4>
              <p>ポートフォリオを作成するにあたって学習しました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={tsImage} />
              <h4>TypeScript</h4>
              <p>ポートフォリオを作成するにあたって学習しました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={awsImage} />
              <h4>AWS</h4>
              <p>ポートフォリオや就職作品の公開するにあたってAWSを活用しました。</p>
            </div>
            <div className="col-md-4 services image">
              <img src={pythonImage} />
              <h4>python</h4>
              <p>最終学年の授業で画像生成をするために学習しました。</p>
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
