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
            <div className="services text-padding-bottom centered-text">
              <img src={MinecraftImage} />
              <h3>現在やろうとしていること</h3>
              <h6 className="left-aligned-text">
                <p>
                  現在の就職活動が一息ついたら、ToDoリストとスケジュール表見たいなのを作ろうとしていてその他にもアカウント認証<br/>
                  とかもつけて第三者にもスケジュールやToDoリストを共有できるようなアプリケーションを作りたいなと考えております。<br/>
                  例に上げると1つのサイトにGoogleカレンダーやスプレットシート、Googleドキュメントなどを詰め込んだようなアプリケー<br />
                  ーションですね。<br />
                  これが実現できればチーム制作がめっちゃ捗るし、連携も取りやすいと思うんですよね。個人的にはWebだけにしておくと<br />
                  楽だけど、AppleStoreとかGoogleStoreにリリース出来れば通知が流せるのでさらに便利になりそうな感じが...　でも大変そうな作業が...
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