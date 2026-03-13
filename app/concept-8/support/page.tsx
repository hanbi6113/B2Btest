// app/concept-8/support/page.tsx
import Link from "next/link";

const faqs = [
  {
    q: "Vision3는 어떤 콘텐츠를 제작할 수 있나요?",
    a: "웹툰, 웹소설, 게임 IP 등 다양한 원작을 기반으로 티저 영상, 프로모션 영상, 숏폼 콘텐츠 등을 제작할 수 있습니다.",
  },
  {
    q: "프로젝트 제작 기간은 얼마나 걸리나요?",
    a: "프로젝트 규모와 패키지 구성에 따라 다르지만 일반적으로 1주~4주 정도의 제작 기간이 소요됩니다.",
  },
  {
    q: "맞춤 제작도 가능한가요?",
    a: "네. 패키지 기반 제작 외에도 브랜드 맞춤형 프로젝트 제작 상담이 가능합니다.",
  },
];

export default function Concept8SupportPage() {
  return (
    <main className="min-h-screen bg-[#06070d] text-white">

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06070d]/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">

          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:border-white/20"
          >
            home
          </Link>

          <nav className="hidden justify-center gap-8 md:flex">
            <Link href="/concept-8" className="text-white/60 hover:text-white">
              사업 소개
            </Link>
            <Link href="/concept-8/packages" className="text-white/60 hover:text-white">
              패키지 소개
            </Link>
            <Link href="/concept-8/support" className="text-white">
              고객센터
            </Link>
          </nav>

          <span className="text-xs tracking-[0.25em] text-[#c6d4ff]">
            support
          </span>
        </div>
      </header>


      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(130,150,255,0.18),transparent_28%),linear-gradient(180deg,#06070d_0%,#0a0d16_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <p className="text-xs tracking-[0.3em] text-[#b8c9ff] uppercase">
            Vision3
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            새로운 프로젝트를
            <span className="block bg-gradient-to-r from-[#f4f7ff] via-[#a9c1ff] to-[#79baff] bg-clip-text text-transparent">
              시작해보세요
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70 leading-8">
            Vision3는 원작 IP와 브랜드 프로젝트를 위한 영상 제작 상담을 제공합니다.
          </p>

        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-semibold">
              프로젝트 상담
            </h2>

            <p className="mt-4 text-white/70 leading-8">
              제작 문의, 패키지 상담, 프로젝트 제안 등 다양한 협업 문의를 환영합니다.
            </p>

            <div className="mt-6 space-y-4 text-white/70">

              <div>
                <p className="text-sm text-white/50">email</p>
                <p className="text-lg">contact@vision3.ai</p>
              </div>

              <div>
                <p className="text-sm text-white/50">project inquiry</p>
                <p className="text-lg">vision3.ai/project</p>
              </div>

            </div>

          </div>


          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-semibold">
              문의 보내기
            </h2>

            <div className="mt-6 space-y-4">

              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none"
                placeholder="이름"
              />

              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none"
                placeholder="이메일"
              />

              <textarea
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 h-32 outline-none"
                placeholder="문의 내용"
              />

              <button className="w-full rounded-lg bg-[#6f8fff] py-3 text-white font-medium">
                문의 보내기
              </button>

            </div>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="text-3xl font-semibold mb-10">
          FAQ
        </h2>

        <div className="space-y-6">

          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >

              <h3 className="font-medium text-lg">
                {item.q}
              </h3>

              <p className="mt-3 text-white/70 leading-7">
                {item.a}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}