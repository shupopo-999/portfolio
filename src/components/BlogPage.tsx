import React from 'react'
import MinecraftImage from '../images/minecraft.png'

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
              <img src={MinecraftImage} />
              <h3>MinecraftServer編</h3>
              <h6 className="left-aligned-text">
                <p>
                  マイクラは高校時代から始め、その時のネット友達からサーバーの立て方を教えてもらいその時からマイクラにハマって行き、<br/>
                  最初の方はサーバーを立てるのがめんどうに思っていましたが、立ててるうちに楽しくなり、最近ではMODサーバーやプラグイ<br/>
                  ンサーバーを立てたりして遊んでいます。最近ではドラゴンが出てくるようなMODや、魔法が使えるMODなどを入れて遊ん<br/>
                  でいます。
                </p>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage