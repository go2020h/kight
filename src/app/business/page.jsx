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
                      activePage === item.path || item.path === '/business' ? 'active' : ''
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
                      activePage === item.path || item.path === '/business' ? 'active bg-gray-200' : ''
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

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative pb-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">事業内容</h2>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500"></div>
        </div>

        <section className="mb-12">
          <p className="text-gray-700 mb-6">株式会社S.E.ネットワークは以下の3事業を展開しています。</p>

          <ul className="mb-8 text-gray-700">
            <li className="flex items-center mb-4 pb-4 border-b border-dotted border-gray-300">
              <span className="bg-teal-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                1
              </span>
              <span className="text-lg font-semibold">オウンドメディア事業</span>
            </li>
            <li className="flex items-center mb-4 pb-4 border-b border-dotted border-gray-300">
              <span className="bg-teal-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                2
              </span>
              <span className="text-lg font-semibold">他社メディア運用代行</span>
            </li>
            <li className="flex items-center mb-4 pb-4 border-b border-dotted border-gray-300">
              <span className="bg-teal-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                3
              </span>
              <span className="text-lg font-semibold">SEOコンサルティング</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold bg-teal-800 text-white p-3 mb-4">オウンドメディア事業</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <p className="mb-4">
              海斗株式会社は、デジタル時代の情報ニーズに応える自社メディアを運営しています。私たちは、単なる情報の提供にとどまらず、読者の生活に真の価値をもたらすことを目指しています。
            </p>

            <p className="mb-8">弊社は以下のオウンドメディアを運営しています。</p>

            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>仮（フードデリバリー情報）</li>
              <li>仮（お小遣い稼ぎ情報、金融系）</li>
              <li>仮（テクノロジー情報、暗号資産など）</li>
            </ul>

            <h3 className="text-2xl font-bold mb-6 text-center text-teal-800">メディア運営の4つの柱</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3 text-teal-800">
                  <i className="fas fa-bullseye mr-2"></i>
                  1. 真実性と共感性の追求
                </h4>
                <p className="text-gray-700">
                  実際の経験に基づいた情報提供。編集チームが商品やサービスを自ら体験し、読者との強い共感関係を築きます。
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3 text-teal-800">
                  <i className="fas fa-sitemap mr-2"></i>
                  2. クリアで魅力的な情報設計
                </h4>
                <p className="text-gray-700">
                  専門知識を持つ編集者が複雑な情報を分かりやすく整理。ビジュアル要素も効果的に活用し、直感的な理解を促進します。
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3 text-teal-800">
                  <i className="fas fa-clock mr-2"></i>
                  3. 先見性のある情報更新
                </h4>
                <p className="text-gray-700">
                  業界動向を予測し、読者が「次に必要となる情報」を先回りして提供。常に最新かつ最も関連性の高い情報源であり続けます。
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3 text-teal-800">
                  <i className="fas fa-star mr-2"></i>
                  4. 読者の期待を超える価値創造
                </h4>
                <p className="text-gray-700">
                  潜在的なニーズも掘り起こし、予想外の価値を提供。読者の視野を広げ、新たな可能性を示唆する情報を発信します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold bg-teal-800 text-white p-3 mb-4">他社メディア運用代行</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <p className="mb-4">
              クライアント企業のオウンドメディア運用を、戦略立案から実務まで一貫してサポートします。私たちのサービスには以下が含まれます：
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                コンテンツ戦略の策定:
                クライアントの目標とターゲットオーディエンスに合わせた、効果的なコンテンツ戦略を立案します。
              </li>
              <li>記事の企画と制作: SEOを考慮したキーワード選定から、魅力的な記事の執筆まで、一貫して対応します。</li>
              <li>既存コンテンツの最適化: パフォーマンスの低い記事を分析し、リライトや構成の見直しを行います。</li>
              <li>運用管理とレポーティング: メディアのパフォーマンスを継続的にモニタリングし、改善策を提案します。</li>
            </ul>
            <p className="mb-4">当社の豊富な経験と専門知識を活かし、クライアントのメディアを成功に導きます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold bg-teal-800 text-white p-3 mb-4">SEOコンサルティング</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <p className="mb-4">
              変化し続けるSEO環境に適応し、クライアントのウェブサイトの検索エンジン順位向上を支援します：
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>詳細な現状分析: サイトの技術的問題、コンテンツ品質、競合状況を徹底的に分析します。</li>
              <li>
                カスタマイズされたSEO戦略: クライアントの業界とターゲットに特化した、効果的なSEO戦略を策定します。
              </li>
              <li>
                最新のSEOテクニック: 常に進化するSearch
                Consoleのアップデートやアルゴリズムの変更に対応した最新のテクニックを提案します。
              </li>
              <li>定期的な効果測定と改善: 実施した施策の効果を定期的に測定し、継続的な改善を行います。</li>
            </ul>
            <p className="mb-4">
              私たちは単なるアドバイスにとどまらず、クライアントと共に歩み、持続可能なオーガニック成長を実現します。
            </p>
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
