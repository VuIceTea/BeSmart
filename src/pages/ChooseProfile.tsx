import React, { useState } from 'react'
import './ChooseProfile.css'
import bearImg from '../assets/images/bear.png'
import catImg from '../assets/images/cat.png'
import rabbitImg from '../assets/images/rabbit.png'
import { DotsThreeIcon, PlusCircleIcon } from '@phosphor-icons/react'


interface Profile {
  id: string
  name: string
  grade: string
  image: string
}

const ChooseProfile = () => {
  const profiles: Profile[] = [
    {
      id: '1',
      name: 'Bé Gấu',
      grade: 'Lớp 1',
      image: bearImg
    },
    {
      id: '2',
      name: 'Bé Thỏ',
      grade: 'Lớp 2',
      image: rabbitImg
    },
    {
      id: '3',
      name: 'Bé Mèo',
      grade: 'Mẫu giáo',
      image: catImg
    }
  ]

  const recentProfiles = profiles.slice(0, 2)

  const handleProfileClick = (profile: Profile) => {
    console.log('Selected profile:', profile)
  }

  const handleAddNew = () => {
    console.log('Add new profile')
  }

  return (
    <div className="choose-profile-container">
      {/* Decorative Background Clouds */}
      <div className="cloud-shape cloud-1"></div>
      <div className="cloud-shape cloud-2"></div>
      <div className="cloud-shape cloud-3"></div>
      <div className="cloud-shape cloud-4"></div>

      <div className="layout-container">
        {/* Main Content Wrapper */}
        <div className="layout-content-container">
          {/* Header Section */}
          <div className="header-section">
            <h1 className="main-title">
              Chào con! Hôm nay ai sẽ cùng học nào?
            </h1>
            <p className="subtitle">
              Chọn nhân vật của con để bắt đầu hành trình nhé!
            </p>
          </div>

          {/* Profiles Grid */}
          <div className="profiles-grid">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="profile-card"
                onClick={() => handleProfileClick(profile)}
              >
                <div className="profile-avatar">
                  <div className="profile-image-wrapper">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="profile-image"
                    />
                  </div>
                  <div className="profile-overlay"></div>
                </div>
                <div className="profile-info">
                  <h2 className="profile-name">{profile.name}</h2>
                  <span className="profile-grade">{profile.grade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Area */}
          <div className="action-area">
            <button className="add-profile-btn" onClick={handleAddNew}>
              <PlusCircleIcon size={32} />
              <span className="add-text">Thêm bạn mới</span>
            </button>

            {/* Quick Switch Users */}
            <div className="recent-users">
              <span className="recent-label">Đã đăng nhập gần đây:</span>
              <div className="recent-avatars">
                {recentProfiles.map((profile) => (
                  <div
                    key={profile.id}
                    className="recent-avatar"
                    title={profile.name}
                  >
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="recent-avatar-img"
                    />
                  </div>
                ))}
                <div className="recent-avatar more-avatar">
                  <DotsThreeIcon size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseProfile