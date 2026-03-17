import { useState } from 'react'
import './HomePage.css'
import Header from '../components/Header'

const HomePage = () => {
  const [showBubble, setShowBubble] = useState(false)

  return (
    <div className="home-page">
      <Header
        navItems={[
          { label: 'Trang chủ', icon: 'home', to: '/home' },
          { label: 'Bảng xếp hạng', icon: 'leaderboard', href: '#' },
          { label: 'Cửa hàng', icon: 'storefront', href: '#' },
          { label: 'Bố mẹ', icon: 'family_restroom', href: '#' },
        ]}
        actions={
          <>
            <button className="profile-btn">
              <div className="profile-avatar-small"></div>
              <span className="profile-btn-text">Hồ sơ bé</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </>
        }
      />

      {/* Main Content */}
      <main className="main-content adventure-path">
        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stats-container">
            <div className="stats-left">
              <div className="stat-item">
                <div className="stat-icon stat-icon-yellow">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div className="stat-info">
                  <span className="stat-label">Sao tích lũy</span>
                  <span className="stat-value">125</span>
                </div>
              </div>

              <div className="stat-divider"></div>

              <div className="stat-item">
                <div className="stat-icon stat-icon-blue">
                  <span className="material-symbols-outlined">diamond</span>
                </div>
                <div className="stat-info">
                  <span className="stat-label">Kim cương</span>
                  <span className="stat-value">40</span>
                </div>
              </div>
            </div>

            <div className="stats-right">
              <span className="level-text">
                Cấp độ hiện tại: <span className="level-name">Thám hiểm nhí</span>
              </span>
              <div className="xp-bar">
                <div className="xp-fill"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Adventure Map Container */}
        <div className="map-container">
          <h1 className="map-title">Chọn Vùng Đất Để Khám Phá!</h1>

          {/* SVG Path Decoration */}
          <svg
            className="map-svg-path"
            fill="none"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dotted-path"
              d="M100,500 C150,400 50,300 200,200 S500,100 650,150 S750,450 600,500"
              stroke="#f5b13d"
              strokeLinecap="round"
              strokeWidth="8"
            />
          </svg>

          {/* Islands Grid */}
          <div className="islands-grid">
            {/* Island 1: Math - Completed */}
            <div className="island-wrapper">
              <div className="island-card island-card-default">
                <div className="island-image island-math"></div>
                <div className="island-gradient"></div>
                <div className="island-badge badge-completed">
                  <span className="material-symbols-outlined">check_circle</span>
                  Hoàn thành
                </div>
                <div className="island-subject-icon">
                  <div className="subject-icon-bg subject-icon-blue">
                    <span className="material-symbols-outlined">calculate</span>
                  </div>
                </div>
              </div>
              <div className="island-content-card island-content-default">
                <h3 className="island-name">Đảo Toán Học</h3>
                <p className="island-desc">Khám phá hình khối 3D</p>
                <button className="island-btn island-btn-blue">Xem lại bài học</button>
              </div>
            </div>

            {/* Island 2: Vietnamese - Current */}
            <div className="island-wrapper island-wrapper-current">
              <div className="island-pulse"></div>
              <div className="island-card island-card-current">
                <div className="island-image island-vietnamese"></div>
                <div className="island-gradient"></div>
                <div className="island-badge badge-current">
                  <span className="material-symbols-outlined">play_arrow</span>
                  Đang học
                </div>
                <div className="island-subject-icon">
                  <div className="subject-icon-bg subject-icon-green">
                    <span className="material-symbols-outlined">menu_book</span>
                  </div>
                </div>
              </div>
              <div className="island-content-card island-content-current">
                <h3 className="island-name">Rừng Tiếng Việt</h3>
                <p className="island-desc">Chữ cái vui nhộn</p>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <button className="island-btn island-btn-primary">Tiếp tục học</button>
              </div>
            </div>

            {/* Island 3: Science - Locked */}
            <div className="island-wrapper island-wrapper-locked">
              <div className="island-card island-card-locked">
                <div className="island-image island-science"></div>
                <div className="island-overlay-dark"></div>
                <div className="lock-overlay">
                  <div className="lock-icon-wrapper">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                </div>
                <div className="island-subject-icon">
                  <div className="subject-icon-bg subject-icon-purple">
                    <span className="material-symbols-outlined">science</span>
                  </div>
                </div>
              </div>
              <div className="island-content-card island-content-default">
                <h3 className="island-name">Hang Động Khoa Học</h3>
                <p className="island-desc">Thí nghiệm kỳ thú</p>
                <button className="island-btn island-btn-locked" disabled>
                  Yêu cầu cấp độ 5
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Bee Character */}
        <div
          className="floating-bee"
          onMouseEnter={() => setShowBubble(true)}
          onMouseLeave={() => setShowBubble(false)}
        >
          <div className="bee-wrapper">
            {showBubble && (
              <div className="speech-bubble">
                <p className="bubble-text">
                  Chào bé! Mình là <span className="bubble-highlight">Ong Vàng</span>. Cậu muốn học bài nào hôm nay?
                </p>
              </div>
            )}
            <button className="bee-btn">
              <span className="material-symbols-outlined">emoji_nature</span>
            </button>
            <span className="bee-ripple"></span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
