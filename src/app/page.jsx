'use client'
import React, { useState } from 'react'

function MainComponent({ activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'ホーム', path: '/' },
    { name: '会社概要', path: '/company' },
    { name: '事業内容', path: '/business' },
    { name: 'お問い合わせ', path: '/contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
                      activePage === item.path || item.path === '/' ? 'active' : ''
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
                      activePage === item.path || item.path === '/' ? 'active bg-gray-200' : ''
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

      <main>
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
          <img src="/top.jpg" alt="都市の夜景" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 py-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-center leading-tight">
              デジタルの力で、
              <br className="sm:hidden" />
              ビジネスと人をつなぐ
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-center max-w-[90%] sm:max-w-3xl leading-snug">
              革新的なデジタルソリューションで、
              <br className="sm:hidden" />
              あなたのビジネスを次のステージへ
            </p>
            <a
              href="/contact"
              className="bg-white text-black py-3 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 text-base sm:text-lg font-semibold"
            >
              お問い合わせ
            </a>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 xl:px-32 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">企業概要</h2>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:w-2/3">
                <p className="text-lg mb-6">
                  海斗株式会社は、急速に進化するデジタル社会において、企業と人々を結びつける架け橋となることを目指しています。私たちは、インターネット広告、SEO対策、SNS運営、そして自社メディアを通じて、クライアント企業の成長と成功を全力でサポートします。
                </p>
                <p className="text-lg">
                  私たちの強みは、常に最新のデジタルトレンドを捉え、創造性豊かなアイデアと革新的なソリューションを提供することです。高い倫理観と専門性を持って、クライアントや社会からの信頼を築き上げています。
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src="/top2.jpg"
                  alt="デジタルビジネスの成長を象徴する画像"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">主要サービス/製品の紹介</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                <img src="/work1.jpg" alt="オウンドメディア事業のイメージ" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">1. オウンドメディア事業</h3>
                  <p className="text-base leading-relaxed">
                    実体験に基づく価値ある情報を発信し、読者の生活に真の変化をもたらします。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                <img src="/work2.jpg" alt="他社メディア運用代行のイメージ" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">2. 他社メディア運用代行</h3>
                  <p className="text-base leading-relaxed">
                    戦略立案から実務まで、クライアントのメディアを成功へと導きます。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                <img src="/work3.jpg" alt="SEOコンサルティングのイメージ" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">3. SEOコンサルティング</h3>
                  <p className="text-base leading-relaxed">
                    最新のSEO手法を駆使し、クライアントのウェブサイトの検索順位向上を実現します。
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="../business" className="text-blue-600 hover:underline">
                各サービスの詳細はこちら
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 xl:px-32 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center">ソーシャルメディアアカウント一覧</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">ブログ</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <i className="fab fa-facebook-square text-blue-600 text-2xl mr-3"></i>
                      <span className="text-gray-700">仮（フードデリバリー情報）</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fab fa-twitter-square text-blue-400 text-2xl mr-3"></i>
                      <span className="text-gray-700">仮（お小遣い稼ぎ情報、金融系）</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fab fa-youtube text-red-600 text-2xl mr-3"></i>
                      <span className="text-gray-700">仮（テクノロジー情報、暗号資産など）</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">X（旧Twitter）</h3>
                  <div className="flex items-center">
                    <img src="/x_icon.jpg" alt="プロフィール画像" className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <a
                        href="https://x.com/Kight_blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <i className="fab fa-twitter text-blue-400 text-2xl mr-2"></i>
                        @Kight_blog
                      </a>
                      <p className="text-gray-600 mt-1">海斗株式会社の公式アカウント</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">-お問い合わせ-</h2>
            <p className="mb-4">以下リンクよりお気軽にお問い合わせください。</p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              ご相談・お問い合わせはこちら
            </a>
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
    </div>
  )
}

export default MainComponent
