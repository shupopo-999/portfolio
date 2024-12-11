import React from 'react'

const SNSPage = () => {
  return (
    <header>
      <div className="sns">
        <h1>SNS</h1>
      </div>
      <div className="sns-content">
        <div className="sns-card">
          <h2>X(旧Twitter)</h2>
          <p>X(旧Twitter)ではたまにツイートしたりします。</p>
          <a href="https://x.com/shu125481/">Twitterを見る</a>
        </div>
        <div className="sns-card">
          <h2>Youtube</h2>
          <p>Youtubeではたまに趣味のゲームを投稿したりします。</p>
          <a href="https://www.youtube.com/@shu_9999/">Youtubeを見る</a>
        </div>
        <div className="sns-card">
          <h2>GitHub</h2>
          <p>GitHubでは今まで作ったプロジェクトをほぼ上げています。</p>
          <a href="https://github.com/shupopo-999">GitHubを見る</a>
        </div>
        <div className="sns-card">
          <h2>Instagram</h2>
          <p>Instagramはあまりやっておりません。(見る専です)</p>
          <a href="https://www.instagram.com/">Instagramを見る</a>
        </div>
      </div>
    </header>
  )
}

export default SNSPage