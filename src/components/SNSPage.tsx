import React from 'react'
import XImage from '../images/X.jpg'
import YoutubeImage from '../images/YouTube.png'
import GitHubImage from '../images/GitHub.png'
import InstagramImage from '../images/Instagram.png'

const SNSPage = () => {
  return (
    <div className="container text-center">
      <div className="text-padding-bottom">
        <h1 className="sns title">SNS</h1>
      </div>
      <section className="text-padding-bottom" id="skill">
        <div className="text-center title">
          <div className="row text-center">
            <div className="col-md-4 services text-padding-bottom image">
              <img src={XImage} />
              <h4>X(旧Twitter)</h4>
              <a href='https://x.com/shu125481'>Twitterを見る</a>
            </div>
            <div className="col-md-4 services text-padding-bottom image">
              <img src={YoutubeImage} />
              <h4>Youtube</h4>
              <a href='https://www.youtube.com/@shu_9999'>YouTubeを見る</a>
            </div>
            <div className="col-md-4 services text-padding-bottom image">
              <img src={GitHubImage} />
              <h4>GitHub</h4>
              <a href='https://github.com/shupopo-999'>GitHubを見る</a>
            </div>
            <div className="col-md-4 services text-padding-bottom image">
              <img src={InstagramImage} />
              <h4>Instagram</h4>
              <a href='https://www.instagram.com/'>Instagramを見る</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SNSPage