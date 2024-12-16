import React from 'react'
import direxrXImage from "../images/DirectX.png";

const pr:string = "";

const BlogPage = () => {
  return (
    <div className="container text-center">
      <div className="text-padding-bottom">
        <h1 className="blog title">ブログ</h1>
      </div>
      <section id="skill">
        <div className="text-center">
          <div className="row text-center">
            <div className="services text-padding-bottom centered-text">
              <h3>MinecraftServer編</h3>
              <h6 className="left-aligned-text">
                <p>マイクラは高校時代から始め、その時のネット友達からサーバーの立て方を教えてもらいその時からマイクラにハマって行き、</p>
                <p>最初の方はサーバーを立てるのがめんどうに思っていましたが、立ててるうちに楽しくなり、最近ではMODサーバーやプラグイ</p>
                <p>ンサーバーを立てたりして遊んでいます。最近ではドラゴンが出てくるようなMODや、魔法が使えるMODなどを入れて遊ん</p>
                <p>でいます。</p>
                <p></p>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage