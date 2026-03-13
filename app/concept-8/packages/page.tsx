// app/concept-8/packages/page.tsx
import Link from "next/link";

const packages = [
  {
    category: "GAME",
    title: "게임 IP 런칭 티저 패키지",
    desc: "신작 공개, 사전예약, 출시 초반 캠페인에 필요한 핵심 티저 영상 자산을 구성하는 패키지입니다.",
  },
  {
    category: "GAME",
    title: "게임 라이브옵스 / 업데이트 패키지",
    desc: "업데이트, 이벤트, 운영형 영상 자산을 반복 제작 구조로 안정 공급하는 패키지입니다.",
  },
  {
    category: "BEAUTY",
    title: "뷰티 신제품 런칭 숏폼 패키지",
    desc: "SNS 광고와 브랜드 캠페인에 활용되는 런칭 숏폼 자산을 빠르게 구성하는 패키지입니다.",
  },
  {
    category: "EDU",
    title: "이러닝 · 에듀 패키지",
    desc: "교육 서비스 홍보 영상과 학습 콘텐츠 모듈 제작을 위한 영상 패키지입니다.",
  },
  {
    category: "FASHION",
    title: "패션 시즌 룩북 필름 패키지",
    desc: "시즌 컬렉션의 무드와 브랜드 스토리를 전달하는 룩북 필름 중심 패키지입니다.",
  },
  {
    category: "ENT",
    title: "엔터 · 웹드라마 / 영화 패키지",
    desc: "웹드라마와 영화의 티저, 예고편, 프로모션 영상을 구성하는 패키지입니다.",
  },
  {
    category: "FINANCE",
    title: "금융 · 보험 패키지",
    desc: "금융 서비스 소개, 브랜드 영상, 고객 안내 영상 제작 패키지입니다.",
  },
  {
    category: "HR",
    title: "인사 교육 영상 패키지",
    desc: "기업 내부 교육과 온보딩 영상 제작을 위한 반복 제작 패키지입니다.",
  },
  {
    category: "HEALTHCARE",
    title: "헬스케어 패키지",
    desc: "헬스케어 서비스 설명, 소개, 안내 영상 제작을 위한 패키지입니다.",
  },
];

export default function Concept8PackagesPage() {
  return (
    <main className="min-h-screen bg-[#06070d] text-white">

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06070d]/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">

          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78 hover:border-white/20"
          >
            home
          </Link>

          <nav className="hidden justify-center gap-8 md:flex">
            <Link href="/concept-8" className="text-white/60 hover:text-white">
              사업 소개
            </Link>
            <Link href="/concept-8/packages" className="text-white">
              패키지 소개
            </Link>
            <Link href="/concept-8/support" className="text-white/60 hover:text-white">
              고객센터
            </Link>
          </nav>

          <span className="text-xs tracking-[0.25em] text-[#c6d4ff]">
            packages
          </span>
        </div>
      </header>


      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(140,160,255,0.14),transparent_28%),linear-gradient(180deg,#06070d_0%,#0b0e17_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-xs tracking-[0.3em] text-[#b9c7ff] uppercase">
            Vision3
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Production Packages
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 leading-8">
            Vision3는 다양한 산업과 콘텐츠 환경에 맞는 영상 제작 패키지를 제공합니다.
          </p>

        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-20 space-y-20">

        {packages.map((item, index) => (
          <div
            key={item.title}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >

            <div>
              <p className="text-xs tracking-[0.25em] text-[#a9bbff] uppercase">
                {item.category}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                {item.title}
              </h2>

              <p className="mt-5 text-white/70 leading-8 max-w-xl">
                {item.desc}
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm text-[#c9d6ff]">
                <span className="h-2 w-2 rounded-full bg-[#7da1ff]" />
                영상 패키지
              </div>
            </div>


            <div className="relative">

              <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(122,155,255,0.18),transparent_60%)] blur-xl" />

              <div className="relative aspect-video rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] flex items-center justify-center">

                <p className="text-white/40 text-sm tracking-[0.2em] uppercase">
                  sample frame
                </p>

              </div>

            </div>
          </div>
        ))}

      </section>
    </main>
  );
}