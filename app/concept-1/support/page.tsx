// app/concept-1/support/page.tsx
import Link from "next/link";

export default function Concept1SupportPage() {
  return (
    <main className="min-h-screen bg-[#050403] text-[#f7f1e6]">
      <header className="sticky top-0 z-30 border-b border-[#8f6a2a]/20 bg-black/40 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">
          <div className="justify-self-start">
            <Link
              href="/"
              className="text-sm text-[#d8c29a]/75 transition hover:text-[#f2ddae]"
            >
              home
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <Link
              href="/concept-1"
              className="text-sm text-[#d8c29a]/75 transition hover:text-[#f2ddae]"
            >
              사업 소개
            </Link>
            <Link
              href="/concept-1/packages"
              className="text-sm text-[#d8c29a]/75 transition hover:text-[#f2ddae]"
            >
              패키지 소개
            </Link>
            <Link
              href="/concept-1/support"
              className="text-sm text-[#f2ddae] transition hover:text-white"
            >
              고객센터
            </Link>
          </nav>

          <div className="justify-self-end">
            <span className="rounded-full border border-[#b2873d]/30 bg-[linear-gradient(135deg,rgba(191,147,64,0.18),rgba(88,60,20,0.08))] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#f0d79e] shadow-[0_0_30px_rgba(191,147,64,0.12)]">
              concept 1
            </span>
          </div>
        </div>
      </header>

      <section className="bg-[radial-gradient(circle_at_top_right,rgba(219,168,73,0.18),transparent_20%),linear-gradient(180deg,#050403_0%,#0c0906_60%,#120d08_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#d8b26e]/70">
            Contact Vision3
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] text-[#fff7ea] md:text-7xl">
            고객센터
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#e8dcc7]/74 md:text-lg">
            프로젝트 문의, 패키지 상담, 협업 제안, 데모 요청 등
            Vision3 비즈니스 관련 문의를 위한 페이지입니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[30px] border border-[#8f6a2a]/18 bg-[linear-gradient(180deg,rgba(255,233,190,0.05),rgba(255,255,255,0.02))] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#d6ab61]/70">
              inquiry
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#fff8eb]">
              상담 문의
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#e7dac1]/72 md:text-base">
              패키지 구성, 제작 범위, 일정, 예산 등에 대해 상담할 수 있는 기본 문의 영역입니다.
            </p>
          </article>

          <article className="rounded-[30px] border border-[#8f6a2a]/18 bg-[linear-gradient(180deg,rgba(255,233,190,0.05),rgba(255,255,255,0.02))] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#d6ab61]/70">
              proposal
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#fff8eb]">
              제안 요청
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#e7dac1]/72 md:text-base">
              기업, 브랜드, 스튜디오, IP 보유사 등 다양한 파트너와의 제안 접점을 위한 안내 영역입니다.
            </p>
          </article>

          <article className="rounded-[30px] border border-[#8f6a2a]/18 bg-[linear-gradient(180deg,rgba(255,233,190,0.05),rgba(255,255,255,0.02))] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#d6ab61]/70">
              support
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#fff8eb]">
              운영 지원
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#e7dac1]/72 md:text-base">
              진행 중인 프로젝트 관련 커뮤니케이션, 수정 요청, 운영 지원 문의를 위한 페이지 구성입니다.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-[30px] border border-[#8f6a2a]/18 bg-[linear-gradient(180deg,rgba(255,233,190,0.05),rgba(255,255,255,0.02))] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d6ab61]/70">
            customer support
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#fff8eb] md:text-5xl">
            Vision3 Support Desk
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#e7dac1]/72 md:text-base">
            문의 폼, 이메일, 비즈니스 채널, 프로젝트별 응대 플로우가 들어갈 수 있는
            고객센터 메인 영역입니다.
          </p>
        </div>
      </section>
    </main>
  );
}