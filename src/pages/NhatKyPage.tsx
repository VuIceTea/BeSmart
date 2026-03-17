import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NhatKyPage.css'

const DIARY_POSTS = [
  {
    id: 1,
    name: 'Hà Ngọc Linh',
    avatarColor: '#e91e63',
    initials: 'L',
    time: '3 giờ trước',
    privacy: '🌍 Mọi người',
    content: 'Cuối tuần rồi, cà phê buổi sáng và một quyển sách hay. Không gì tuyệt hơn thế này ☕📚 #weekend #relax',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&h=280&fit=crop',
    reactions: ['❤️', '😍', '👍'],
    reactionCount: 47,
    comments: 12,
    isLiked: false,
  },
  {
    id: 2,
    name: 'Trần Văn Nam',
    avatarColor: '#3498db',
    initials: 'N',
    time: '5 giờ trước',
    privacy: '👥 Bạn bè',
    content: 'Kết thúc một ngày làm việc mệt mỏi. Nhưng nhìn lại thấy mình progres khá nhiều 💪 Keep going!',
    image: null,
    reactions: ['👍', '💪', '❤️'],
    reactionCount: 23,
    comments: 8,
    isLiked: false,
  },
  {
    id: 3,
    name: 'Phạm Thị Bích',
    avatarColor: '#2ecc71',
    initials: 'B',
    time: '8 giờ trước',
    privacy: '🌍 Mọi người',
    content: 'Hôm nay nấu thử món pasta bơ tôm, mà ngon bất ngờ 😋 Lần sau sẽ thêm phô mai cho đậm vị hơn!',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=280&fit=crop',
    reactions: ['😋', '❤️', '👍'],
    reactionCount: 61,
    comments: 19,
    isLiked: true,
  },
  {
    id: 4,
    name: 'Lê Hoàng Dũng',
    avatarColor: '#9b59b6',
    initials: 'D',
    time: '1 ngày trước',
    privacy: '👥 Bạn bè',
    content: 'Sáng nay dậy sớm chạy bộ ven hồ. Không khí trong lành, tâm trạng cực tốt để bắt đầu một tuần mới 🏃‍♂️🌅',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=280&fit=crop',
    reactions: ['👍', '💪', '❤️'],
    reactionCount: 38,
    comments: 5,
    isLiked: false,
  },
]

const VIDEO_POSTS = [
  {
    id: 1,
    name: 'Minh Châu Cooking',
    avatarColor: '#ff5722',
    initials: 'C',
    title: 'Cách làm bánh bông lan mềm xốp 🎂',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop',
    views: '12K lượt xem',
    duration: '8:24',
  },
  {
    id: 2,
    name: 'Travel With Me',
    avatarColor: '#00bcd4',
    initials: 'T',
    title: 'Khám phá phố cổ Hội An lúc hoàng hôn 🌅',
    thumbnail: 'https://images.unsplash.com/photo-1557750255-c06bde6cde35?w=400&h=220&fit=crop',
    views: '8.5K lượt xem',
    duration: '12:03',
  },
]

const BottomNav = ({ active }: { active: string }) => {
  const navigate = useNavigate()
  const tabs = [
    { key: 'tinnhan', label: 'Tin nhắn', icon: '💬' },
    { key: 'danhba', label: 'Danh bạ', icon: '👥' },
    { key: 'khampha', label: 'Khám phá', icon: '🧭' },
    { key: 'nhatky', label: 'Nhật ký', icon: '📖' },
    { key: 'canhan', label: 'Cá nhân', icon: '👤' },
  ]
  return (
    <nav className="zalo-bottom-nav">
      {tabs.map((t) => (
        <button
          key={t.key}
          className={`zalo-nav-tab${active === t.key ? ' zalo-nav-tab-active' : ''}`}
          onClick={() => t.key === 'khampha' && navigate('/khampha')}
        >
          <span className="zalo-nav-icon">{t.icon}</span>
          <span className="zalo-nav-label">{t.label}</span>
        </button>
      ))}
    </nav>
  )
}

const NhatKyPage = () => {
  const [activeTab, setActiveTab] = useState<'nhatky' | 'video'>('nhatky')
  const [likedPosts, setLikedPosts] = useState<Set<number>>(
    new Set(DIARY_POSTS.filter((p) => p.isLiked).map((p) => p.id))
  )

  const toggleLike = (id: number) => {
    setLikedPosts((prev) => {
      const s = new Set(prev)
      s.has(id) ? s.delete(id) : s.add(id)
      return s
    })
  }

  return (
    <div className="zalo-screen">
      {/* Header */}
      <header className="zalo-header nk-header">
        <div className="nk-header-row">
          <h1 className="nk-title">Nhật Ký</h1>
          <div className="nk-header-actions">
            <button className="nk-icon-btn">🔍</button>
            <button className="nk-post-btn">Đăng</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="nk-tabs">
          <button
            className={`nk-tab${activeTab === 'nhatky' ? ' nk-tab-active' : ''}`}
            onClick={() => setActiveTab('nhatky')}
          >
            Nhật Ký
          </button>
          <button
            className={`nk-tab${activeTab === 'video' ? ' nk-tab-active' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            Zalo Video
          </button>
        </div>
      </header>

      {activeTab === 'nhatky' ? (
        <>
          {/* Compose Area */}
          <div className="nk-compose-card">
            <div className="nk-compose-top">
              <div className="zalo-avatar nk-my-avatar" style={{ background: '#0068ff' }}>
                B
              </div>
              <div className="nk-compose-input">Hôm nay bạn thế nào?</div>
            </div>
            <div className="nk-compose-actions">
              <button className="nk-compose-action-btn">
                <span>🖼️</span>
                <span>Ảnh/Video</span>
              </button>
              <button className="nk-compose-action-btn">
                <span>🎭</span>
                <span>Cảm xúc</span>
              </button>
              <button className="nk-compose-action-btn">
                <span>📍</span>
                <span>Check-in</span>
              </button>
              <button className="nk-compose-action-btn">
                <span>✏️</span>
                <span>Văn bản</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="nk-section-divider">
            <span>Nhật ký bạn bè</span>
          </div>

          {/* Diary Feed */}
          <div className="zalo-feed">
            {DIARY_POSTS.map((post) => (
              <article key={post.id} className="zalo-post-card">
                {/* Post Header */}
                <div className="zalo-post-header">
                  <div className="zalo-avatar" style={{ background: post.avatarColor }}>
                    {post.initials}
                  </div>
                  <div className="zalo-post-meta" style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span className="zalo-post-name">{post.name}</span>
                      <button className="nk-more-btn">•••</button>
                    </div>
                    <div className="nk-post-sub">
                      <span className="zalo-post-time">{post.time}</span>
                      <span className="nk-privacy-badge">{post.privacy}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <p className="zalo-post-content">{post.content}</p>

                {/* Image */}
                {post.image && (
                  <div className="zalo-post-image-wrap">
                    <img src={post.image} alt="" className="zalo-post-image" />
                  </div>
                )}

                {/* Stats */}
                <div className="zalo-post-stats">
                  <span className="zalo-stat">
                    <span className="nk-reactions-stack">
                      {post.reactions.map((r, i) => (
                        <span key={i} className="nk-reaction-emoji" style={{ zIndex: 3 - i }}>
                          {r}
                        </span>
                      ))}
                    </span>
                    {post.reactionCount + (likedPosts.has(post.id) && !post.isLiked ? 1 : 0)}
                  </span>
                  <span className="zalo-stat nk-stat-right">{post.comments} bình luận</span>
                </div>

                {/* Actions */}
                <div className="zalo-post-actions">
                  <button
                    className={`zalo-action-btn${likedPosts.has(post.id) ? ' zalo-action-btn-liked' : ''}`}
                    onClick={() => toggleLike(post.id)}
                  >
                    <span>{likedPosts.has(post.id) ? '❤️' : '👍'}</span>
                    <span>{likedPosts.has(post.id) ? 'Đã thích' : 'Thích'}</span>
                  </button>
                  <button className="zalo-action-btn">
                    <span>💬</span>
                    <span>Bình luận</span>
                  </button>
                  <button className="zalo-action-btn">
                    <span>↗️</span>
                    <span>Chia sẻ</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        /* Zalo Video Tab */
        <div className="nk-video-feed">
          {VIDEO_POSTS.map((v) => (
            <div key={v.id} className="nk-video-card">
              <div className="nk-video-thumb-wrap">
                <img src={v.thumbnail} alt="" className="nk-video-thumb" />
                <div className="nk-video-play-overlay">
                  <div className="nk-video-play-btn">▶</div>
                </div>
                <div className="nk-video-duration">{v.duration}</div>
              </div>
              <div className="nk-video-info">
                <div className="zalo-avatar nk-video-avatar" style={{ background: v.avatarColor }}>
                  {v.initials}
                </div>
                <div className="nk-video-meta">
                  <p className="nk-video-title">{v.title}</p>
                  <span className="nk-video-channel">{v.name}</span>
                  <span className="nk-video-views"> · {v.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <BottomNav active="nhatky" />
    </div>
  )
}

export default NhatKyPage
