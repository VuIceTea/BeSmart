import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './KhamPhaPage.css'

const CATEGORIES = ['Tất cả', 'Sức khỏe', 'Du lịch', 'Ẩm thực', 'Công nghệ', 'Giải trí', 'Thể thao']

const POSTS = [
  {
    id: 1,
    name: 'Nguyễn Minh Tuấn',
    avatarColor: '#e67e22',
    initials: 'T',
    time: '2 giờ trước',
    tag: 'Du lịch',
    tagColor: '#ff6b35',
    content: 'Chuyến du lịch Đà Lạt thật tuyệt vời! Thời tiết mát mẻ, hoa anh đào nở rộ, cà phê thơm ngon ☕🌸',
    image: 'https://images.unsplash.com/photo-1549720235-6b4b0c9f79b8?w=400&h=250&fit=crop',
    likes: 124,
    comments: 32,
    followed: false,
  },
  {
    id: 2,
    name: 'Trần Thị Lan',
    avatarColor: '#9b59b6',
    initials: 'L',
    time: '4 giờ trước',
    tag: 'Ẩm thực',
    tagColor: '#e74c3c',
    content: 'Bún bò Huế buổi sáng - không gì sánh được! Địa chỉ: 52 Lê Lợi, TP Huế 🍜',
    image: 'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=400&h=250&fit=crop',
    likes: 89,
    comments: 15,
    followed: true,
  },
  {
    id: 3,
    name: 'Phạm Quốc Hùng',
    avatarColor: '#27ae60',
    initials: 'H',
    time: '6 giờ trước',
    tag: 'Công nghệ',
    tagColor: '#2980b9',
    content: 'Vừa thử con laptop mới, hiệu năng cực kỳ mạnh mẽ! AI đang thay đổi cách chúng ta làm việc 💻🚀',
    image: null,
    likes: 56,
    comments: 28,
    followed: false,
  },
  {
    id: 4,
    name: 'Lê Thị Hoa',
    avatarColor: '#e91e63',
    initials: 'H',
    time: '1 ngày trước',
    tag: 'Sức khỏe',
    tagColor: '#4caf50',
    content: 'Chạy bộ buổi sáng mỗi ngày sẽ giúp bạn tràn đầy năng lượng cả ngày dài! Hãy bắt đầu ngay hôm nay 🏃‍♀️',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
    likes: 211,
    comments: 47,
    followed: true,
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
          onClick={() => t.key === 'nhatky' && navigate('/nhatky')}
        >
          <span className="zalo-nav-icon">{t.icon}</span>
          <span className="zalo-nav-label">{t.label}</span>
        </button>
      ))}
    </nav>
  )
}

const KhamPhaPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())
  const [followedPosts, setFollowedPosts] = useState<Set<number>>(
    new Set(POSTS.filter((p) => p.followed).map((p) => p.id))
  )

  const toggleLike = (id: number) => {
    setLikedPosts((prev) => {
      const s = new Set(prev)
      s.has(id) ? s.delete(id) : s.add(id)
      return s
    })
  }

  const toggleFollow = (id: number) => {
    setFollowedPosts((prev) => {
      const s = new Set(prev)
      s.has(id) ? s.delete(id) : s.add(id)
      return s
    })
  }

  return (
    <div className="zalo-screen">
      {/* Header */}
      <header className="zalo-header">
        <div className="zalo-header-inner">
          <div className="zalo-header-left">
            <div className="zalo-search-bar">
              <span className="zalo-search-icon">🔍</span>
              <span className="zalo-search-placeholder">Tìm kiếm</span>
            </div>
          </div>
          <div className="zalo-header-right">
            <button className="zalo-icon-btn">📷</button>
            <button className="zalo-icon-btn">⚙️</button>
          </div>
        </div>
        <h1 className="zalo-page-title">Khám Phá</h1>
      </header>

      {/* Category Tabs */}
      <div className="zalo-category-scroll">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`zalo-category-chip${activeCategory === cat ? ' zalo-category-chip-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="zalo-feed">
        {POSTS.map((post) => (
          <article key={post.id} className="zalo-post-card">
            {/* Post Header */}
            <div className="zalo-post-header">
              <div
                className="zalo-avatar"
                style={{ background: post.avatarColor }}
              >
                {post.initials}
              </div>
              <div className="zalo-post-meta">
                <div className="zalo-post-top">
                  <span className="zalo-post-name">{post.name}</span>
                  <button
                    className={`zalo-follow-btn${followedPosts.has(post.id) ? ' zalo-follow-btn-following' : ''}`}
                    onClick={() => toggleFollow(post.id)}
                  >
                    {followedPosts.has(post.id) ? 'Đang theo dõi' : '+ Theo dõi'}
                  </button>
                </div>
                <div className="zalo-post-sub">
                  <span
                    className="zalo-post-tag"
                    style={{ background: post.tagColor + '20', color: post.tagColor }}
                  >
                    {post.tag}
                  </span>
                  <span className="zalo-post-time">{post.time}</span>
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
                <span className="zalo-stat-emoji">👍</span>
                {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
              </span>
              <span className="zalo-stat">
                <span className="zalo-stat-emoji">💬</span>
                {post.comments} bình luận
              </span>
            </div>

            {/* Actions */}
            <div className="zalo-post-actions">
              <button
                className={`zalo-action-btn${likedPosts.has(post.id) ? ' zalo-action-btn-liked' : ''}`}
                onClick={() => toggleLike(post.id)}
              >
                <span>👍</span>
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

      <BottomNav active="khampha" />
    </div>
  )
}

export default KhamPhaPage
