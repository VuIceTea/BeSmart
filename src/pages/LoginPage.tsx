import { useState, FormEvent } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import './LoginPage.css'
import logo from '../assets/images/logo/besmart_logo.png'

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      navigate('/choose-profile')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Đã xảy ra lỗi. Vui lòng thử lại.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="cloud-shape cloud-1"></div>
      <div className="cloud-shape cloud-2"></div>
      <div className="cloud-shape cloud-3"></div>

      <div className="login-card">
        <div className="login-logo">
          <img src={logo} alt="BeSmart Logo" className="login-logo-img" />
        </div>

        <h1 className="login-title">
          {isRegister ? 'Tạo tài khoản mới' : 'Chào mừng trở lại!'}
        </h1>
        <p className="login-subtitle">
          {isRegister
            ? 'Đăng ký để bắt đầu hành trình học tập!'
            : 'Đăng nhập để tiếp tục hành trình nhé!'}
        </p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Mật khẩu</label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Đang xử lý...' : isRegister ? 'Đăng ký' : 'Đăng nhập'}
          </button>
        </form>

        <button
          className="toggle-auth-btn"
          onClick={() => {
            setIsRegister(!isRegister)
            setError('')
          }}
        >
          {isRegister
            ? 'Đã có tài khoản? Đăng nhập'
            : 'Chưa có tài khoản? Đăng ký'}
        </button>
      </div>
    </div>
  )
}

export default LoginPage
