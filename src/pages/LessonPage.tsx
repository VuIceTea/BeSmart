import { useState } from 'react'
import './LessonPage.css'
import Header from '../components/Header'

const ANSWERS = [1, 2, 3]
const CORRECT_ANSWER = 3

const apple1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjrR9sCfsYUe3ZxXwLIvCvA5qVtDKsmtml9IWStkDr0fU6b7aVONi-A6He-Ltt4D4Azh5ZYSK1M3FYHCNTQazizLa4NBoaphKYwl7TgmvleEJng1aUJb6ZFeeuzPz9u_J-PtTyEcvikCV0dMvyJalrshZwOvAZUTdUaG5aTx4AUkJi32uQ_ePrWTgHLLEFNdVmoRAY0kwmB5MqYZVqdXJ2YNmq5QOGVgNZr3soPyiIll_6GRUMwGgN778wsgGyf-SF3gb2Wvtc4BDy'
const apple2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ-baGJY6EgCp3pLtD11_72JNYbv2ScWzh59VIXmAbWuMlByyTJb6fqLUwRlYG97JXN4FOWpXU0XUKxQmYtEJWc3fxi7g2fe8gKrrmgAaLwq7Qj8rq5aMqEE2cnl5lW1I08q-RXxCsqyXrfJowe6DMZal50snzZtP2piC3CtF5OR7ElEEFUxTe-0qLapQayfWE779MgV8nvjNu2EOa0Zn8UQNSsm5DTjAmdpuTpXdpBS-69WP2z7WbiVqwmvOL_RCoStOPP0DMiZuW'
const apple3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Sv_jemLQocoD8ljebtfTQVwRZm6PPiRtKFWXXGY8UJvcE4rrnDtcjRFlrlIn4eFb09uxgzfi49u6svS7XJGRDzB8coZpDrw_BBleyKXiykHr6cCJKFy0ANqRbKfBqGLGiBItZ-3PLDitwQC7QptYXTabmZpShl0jtHKhv6Fig0WeiLs3rMD9aGWR-nfLHzORL78bb-am80X3NFBlSOJiYLbXxDAso8js0d9TvQbH5M5PgUXyNMJYdt5cimL5hjGvdbUpzrYgWklu'

const LessonPage = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    if (selected !== null) setChecked(true)
  }

  const getAnswerClass = (ans: number) => {
    if (!checked) {
      return selected === ans ? 'answer-btn answer-btn-selected' : 'answer-btn'
    }
    if (ans === CORRECT_ANSWER) return 'answer-btn answer-btn-correct'
    if (selected === ans && ans !== CORRECT_ANSWER) return 'answer-btn answer-btn-wrong'
    return 'answer-btn'
  }

  return (
    <div className="lesson-page">
      <Header
        navItems={[
          { label: 'Trang chủ', to: '/home' },
          { label: 'Bài học', to: '/lesson' },
          { label: 'Thành tích', href: '#' },
          { label: 'Hồ sơ', href: '#' },
        ]}
        actions={
          <>
            <button className="lesson-logout-btn">
              <span className="material-symbols-outlined">logout</span>
              <span className="lesson-logout-text">Đăng xuất</span>
            </button>
            <div className="lesson-avatar"></div>
          </>
        }
      />

      {/* Main */}
      <main className="lesson-main">
        {/* Progress Section */}
        <section className="progress-section">
          <div className="progress-header">
            <div className="progress-title">
              <span className="material-symbols-outlined">flag</span>
              <h2>Tiến độ bài học</h2>
            </div>
            <span className="progress-percent">60%</span>
          </div>

          <div className="progress-bar-track">
            <div className="progress-bar-fill"></div>
          </div>

          <div className="progress-animation-row">
            <div className="progress-worm">
              <span className="material-symbols-outlined">bug_report</span>
            </div>
            <div className="progress-apple">
              <span className="material-symbols-outlined">nutrition</span>
            </div>
          </div>

          <p className="progress-hint">Cố lên! Chú sâu sắp ăn được quả táo rồi!</p>
        </section>

        {/* Lesson Content Grid */}
        <div className="lesson-grid">
          {/* Left: Video */}
          <div className="lesson-video-col">
            <div className="lesson-card">
              <div className="lesson-card-header">
                <span className="material-symbols-outlined">play_circle</span>
                <h3>Video Bài giảng</h3>
              </div>

              <div className="video-wrapper group">
                <div className="video-thumbnail"></div>
                <div className="video-overlay">
                  <div className="play-btn">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                </div>
                <div className="video-label">Giáo viên: Cô Hươu Cao Cổ</div>
              </div>

              <p className="video-desc">
                Cô giáo đang hướng dẫn cách đếm số lượng quả táo. Bé hãy lắng nghe thật kỹ nhé!
              </p>
            </div>
          </div>

          {/* Right: Question */}
          <div className="lesson-question-col">
            <div className="question-card">
              {/* Decorative bg icon */}
              <div className="question-bg-icon">
                <span className="material-symbols-outlined">calculate</span>
              </div>

              {/* Question Label */}
              <div className="question-top">
                <div className="question-badge">
                  <span className="material-symbols-outlined">help</span>
                  Câu hỏi số 3
                </div>
                <h2 className="question-title">Bé hãy đếm xem có bao nhiêu quả táo?</h2>
                <p className="question-subtitle">Chọn đáp án đúng ở bên dưới nhé.</p>
              </div>

              {/* Apples */}
              <div className="apples-area">
                <div className="apples-box">
                  <div className="apple" style={{ backgroundImage: `url('${apple1}')` }}></div>
                  <div className="apple apple-raised" style={{ backgroundImage: `url('${apple2}')` }}></div>
                  <div className="apple" style={{ backgroundImage: `url('${apple3}')` }}></div>
                </div>
              </div>

              {/* Answers */}
              <div className="answers-area">
                <div className="answers-grid">
                  {ANSWERS.map((ans) => (
                    <button
                      key={ans}
                      className={getAnswerClass(ans)}
                      onClick={() => !checked && setSelected(ans)}
                    >
                      <span className="answer-number">{ans}</span>
                      {checked && ans === CORRECT_ANSWER && (
                        <div className="correct-badge">
                          <span className="material-symbols-outlined">check</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="check-btn-wrapper">
                  <button
                    className={`check-btn${selected === null ? ' check-btn-disabled' : ''}`}
                    onClick={handleCheck}
                    disabled={selected === null}
                  >
                    <span>Kiểm tra đáp án</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer bar */}
      <div className="footer-bar"></div>
    </div>
  )
}

export default LessonPage
