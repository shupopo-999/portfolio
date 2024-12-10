import React from 'react'

const SNSPage = () => {
  return (
    <header>
      <div className="sns">
        <h1>SNS</h1>
      </div>
      <div className="sns-content">
        <div className="sns-card">
          <h2>Twitter</h2>
          <p>Twitterの最新情報をお届けします。</p>
          <a href="https://x.com/shu125481/">Twitterを見る</a>
        </div>
        <div className="sns-card">
          <h2>Youtube</h2>
          <p>Youtubeの最新情報をお届けします。</p>
          <a href="https://www.youtube.com/@shu_9999/">Youtubeを見る</a>
        </div>
        <div className="sns-card">
          <h2>Instagram</h2>
          <p>Instagramの最新情報をお届けします。</p>
          <a href="https://www.instagram.com/">Instagramを見る</a>
        </div>
      </div>
    </header>
  )
}

export default SNSPage