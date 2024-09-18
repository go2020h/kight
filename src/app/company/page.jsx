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
                      activePage === item.path || item.path === '/company' ? 'active' : ''
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
                      activePage === item.path || item.path === '/company' ? 'active bg-gray-200' : ''
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
          <h2 className="text-2xl md:text-3xl font-bold">会社概要</h2>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500"></div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-semibold bg-teal-800 text-white p-3 mb-4">会社概要</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="border-collapse w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">会社名</th>
                  <td className="px-4 py-5 text-sm text-gray-900">海斗株式会社</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">法人番号</th>
                  <td className="px-4 py-5 text-sm text-gray-900">4010801034076</td>
                </tr>
                <tr className="bg-gray-50">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">資本金</th>
                  <td className="px-4 py-5 text-sm text-gray-900">100,000円</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">代表取締役</th>
                  <td className="px-4 py-5 text-sm text-gray-900">谷利 爵公</td>
                </tr>
                <tr className="bg-gray-50">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">設立日</th>
                  <td className="px-4 py-5 text-sm text-gray-900">2023年6月16日</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">本社所在地</th>
                  <td className="px-4 py-5 text-sm text-gray-900">東京都北区赤羽１丁目２６番１１号４０２</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">事業内容</th>
                  <td className="px-4 py-5 text-sm text-gray-900">
                    インターネットを利用した広告業
                    <br />
                    SEO（検索エンジン最適化）に関する業務
                    <br />
                    SNS（ソーシャル・ネットワーキング・サービス）の企画及び運営
                    <br />
                    ウェブメディアの企画、運営及びコンサルティング
                    <br />
                    前各号に付帯又は関連する一切の事業
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">主要取引先</th>
                  <td className="px-4 py-5 text-sm text-gray-900">
                    グーグル合同会社
                    <br />
                    株式会社インタースペース
                    <br />
                    株式会社ファンコミュニケーションズ
                    <br />
                    株式会社東京コンシューマーシステム
                    <br />
                    株式会社レントラックス
                    <br />
                    株式会社フクロウラボ
                    <br />
                    株式会社フォーイット
                    <br />
                    株式会社ロンバード
                    <br />
                    GMO TECH株式会社
                    <br />
                    株式会社エムフロ
                    <br />
                    株式会社ネクスト
                    <br />
                    株式会社Noshift
                  </td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-5 text-left text-sm font-medium text-gray-500 w-[150px]">主要取引銀行</th>
                  <td className="px-4 py-5 text-sm text-gray-900">住信SBIネット銀行株式会社</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold bg-teal-800 text-white p-3 mb-4">企業理念</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="space-y-12">
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">
                  <span className="relative inline-block pb-2">
                    Vision - デジタルの力で、ビジネスと人をつなぎ、価値ある情報を発信する
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500"></span>
                  </span>
                </h3>
                <p className="mb-2">
                  私たちは、急速に進化するデジタル社会において、企業と人々を結びつける架け橋となることを目指します。
                </p>
                <p>
                  インターネット広告やSNS運営、そして自社のXアカウントとブログを通じて、意味のある関係性を創造し、価値ある情報を発信することで、新たな繋がりと知見を生み出します。
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">
                  <span className="relative inline-block pb-2">
                    Mission - 革新的なデジタルソリューションと質の高いコンテンツで、企業と社会の成長を加速する
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500"></span>
                  </span>
                </h3>
                <p className="mb-2">
                  最先端のデジタルマーケティング技術と戦略的なアプローチを駆使し、クライアント企業の成長と成功を全力でサポートします。
                </p>
                <p>
                  SEO対策やウェブメディアコンサルティングを提供するとともに、自社メディアを通じて業界トレンドや有益な情報を発信し、企業と社会全体の発展に貢献します。
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">
                  <span className="relative inline-block pb-2">
                    Value - 信頼と創造性で、デジタル時代をリードし、情報の価値を高める
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500"></span>
                  </span>
                </h3>
                <p className="mb-2">
                  私たちは、常に高い倫理観と専門性を持って事業に取り組み、クライアントや社会からの信頼を築きます。
                </p>
                <p className="mb-2">
                  同時に、創造性豊かなアイデアと革新的なソリューションで、デジタルマーケティング業界の最前線を走り続けます。
                </p>
                <p>自社メディアでは、正確で価値のある情報を提供し、オンライン空間の質の向上に努めます。</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-2">
              <a href="#" className="mr-4">
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
