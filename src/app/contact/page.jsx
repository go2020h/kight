'use client'
import React, { useState } from 'react'
import axios from 'axios'

function MainComponent({ activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const navItems = [
    { name: 'ホーム', path: '/' },
    { name: '会社概要', path: '/company' },
    { name: '事業内容', path: '/business' },
    { name: 'お問い合わせ', path: '/contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // ここで実際のAPIエンドポイントを使用してください
      const response = await axios.post('/api/contact', formData)
      setSubmitMessage('お問い合わせを受け付けました。ありがとうございます。')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitMessage('エラーが発生しました。もう一度お試しください。')
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="font-sans">
      <header className="bg-gray-100 relative z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="inline-block">
                <img
                  src="/logo.png"
                  alt="海斗株式会社"
                  className="h-8 w-auto hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            </div>

            {/* ハンバーガーメニューボタン */}
            <button className="sm:hidden p-2 z-50" onClick={toggleMenu} aria-label="メニューを開く">
              <div className="w-6 h-5 relative">
                <span className={`hamburger-line top-0 ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line top-2 ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line top-4 ${isMenuOpen ? 'open' : ''}`}></span>
              </div>
            </button>

            {/* デスクトップメニュー */}
            <ul className="hidden sm:flex space-x-4">
              {navItems.map((item) => (
                <li key={item.path} className="group">
                  <a
                    href={item.path}
                    className={`relative px-1 nav-link ${
                      activePage === item.path || item.path === '/contact' ? 'active' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* モバイルメニュー（オーバーレイ） */}
          <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed right-0 top-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ul className="pt-16 px-4">
              {navItems.map((item) => (
                <li key={item.path} className="mb-4">
                  <a
                    href={item.path}
                    className={`block py-2 px-4 nav-link ${
                      activePage === item.path || item.path === '/contact' ? 'active bg-gray-200' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative pb-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">お問い合わせ</h2>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500"></div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
              <div className="max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      氏名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      題名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      メッセージ本文 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {isSubmitting ? '送信中...' : '送信'}
                    </button>
                  </div>
                  {submitMessage && (
                    <div
                      className={`mt-4 text-sm ${submitMessage.includes('エラー') ? 'text-red-600' : 'text-green-600'}`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-2">
              <a href="/company" className="mr-4">
                会社概要
              </a>
              <a href="/contact">お問い合わせ</a>
            </div>
            <p>&copy; 海斗株式会社</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .nav-link {
          display: inline-block;
          position: relative;
          color: #000;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #000;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: center;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }

        .hamburger-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000;
          transition: all 0.3s;
        }

        .hamburger-line.open:nth-child(1) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          top: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }

        @media (max-width: 640px) {
          .nav-link::after {
            bottom: -2px;
          }
        }
      `}</style>
    </div>
  )
}

export default MainComponent
