// app/concept-9/page.tsx
import Link from "next/link";

const capabilities = [
  {
    title: "Novel / Webtoon to Live Action",
    desc: "소설과 웹툰 IP를 실사형 비주얼, 티저, 캠페인 자산으로 빠르게 확장하는 AI-native 제작 구조",
  },
  {
    title: "Direction-led Production",
    desc: "단순 생성이 아니라 연출 디렉션과 브랜드 문맥을 반영해 완성도 높은 결과물로 정리하는 방식",
  },
  {
    title: "Campaign-ready Assets",
    desc: "티저, 숏폼, 예고편, 운영형 영상, 파생 자산까지 실제 집행 가능한 포맷 중심으로 설계",
  },
];

const workflow = [
  {
    step: "01",
    title: "IP / Brand Analysis",
    desc: "세계관, 캐릭터, 무드, 제품 USP, 캠페인 목적을 먼저 정리해 방향부터 설계합니다.",
  },
  {
    step: "02",
    title: "AI-native Production",
    desc: "실사형 비주얼, 티저 컷, 숏폼 구조, 파생 포맷을 빠른 제작 파이프라인으로 구성합니다.",
  },
  {
    step: "03",
    title: "Rollout-ready Delivery",
    desc: "런칭, 광고, 교육, 운영 등 실제 집행 일정에 맞춘 자산 묶음 형태로 전달합니다.",
  },
];

const industries = [
  "Game IP",
  "Beauty",
  "Fashion",
  "Entertainment",
  "Education",
  "Finance",
  "Healthcare",
  "HR Training",
];

export default function Concept9Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-900">
        <Link
        href="/"
        className="fixed left-6 top-6 z-50 inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950"
        >
        home
        </Link>
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute right-[-120px] top-[60px] h-[380px] w-[380px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[8%] h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] h-[260px] w-[260px] rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.94),rgba(248,250,252,0.95),rgba(255,255,255,0.98))]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/50 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/concept-9" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-gradient-to-br from-white via-sky-50 to-fuchsia-50 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 bg-clip-text text-sm font-black text-transparent">
                V3
              </span>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Premium AI Production
              </p>
              <p className="text-lg font-semibold tracking-tight text-zinc-950">
                Vision3
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-600 md:flex">
            <Link href="/concept-9" className="transition hover:text-zinc-950">
              Home
            </Link>
            <Link
              href="/concept-9/packages"
              className="transition hover:text-zinc-950"
            >
              Packages
            </Link>
            <Link
              href="/concept-9/support"
              className="transition hover:text-zinc-950"
            >
              Support
            </Link>
          </nav>

          <Link
            href="/concept-9/support"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Bright Premium Concept / 09
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-zinc-950 md:text-6xl lg:text-7xl">
              AI-Native
              <br />
              Live-Action
              <br />
              Production for
              <br />
              Modern IP
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
              Vision3는 소설과 웹툰 IP를 실사형 비주얼, 티저, 숏폼,
              프로모션 자산으로 확장하는 하이엔드 AI 제작 도구이자 프로덕션
              구조입니다. 빠르게 만들기만 하는 것이 아니라, 연출과 브랜드
              무드까지 설계해 실제 집행 가능한 결과물로 정리합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/concept-9/packages"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                패키지 보기
              </Link>
              <Link
                href="/concept-9/support"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/90 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                고객센터
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {industries.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600 shadow-[0_10px_25px_rgba(0,0,0,0.04)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Video Area */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/75 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_30%)]" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-black shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
                <div className="relative aspect-[4/5] w-full md:aspect-[16/15]">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/vid1.mp4" type="video/mp4" />
                  </video>

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.52),rgba(0,0,0,0.08),rgba(0,0,0,0.12))]" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    Featured Reel
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="rounded-[24px] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                        Vision3 Showcase
                      </p>
                      <p className="mt-2 text-xl font-black tracking-tight text-white md:text-2xl">
                        Novel & Webtoon IP
                        <br />
                        Reimagined as Cinematic Assets
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[26px] border border-white/80 bg-white/85 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Input
                  </p>
                  <p className="mt-2 text-lg font-bold text-zinc-950">
                    Novel / Webtoon / Brand IP
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    원작 세계관과 브랜드 맥락을 분석해 실사형 전환에 필요한
                    무드와 방향을 먼저 설계합니다.
                  </p>
                </div>

                <div className="rounded-[26px] border border-white/80 bg-white/85 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Output
                  </p>
                  <p className="mt-2 text-lg font-bold text-zinc-950">
                    Teaser / Shortform / Campaign
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    런칭, 광고, 운영, 교육 등 목적에 맞는 자산을 집행 가능한
                    묶음으로 제작합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              About Vision3
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
              소설과 웹툰을 실사형 캠페인 자산으로 확장하는
              <br className="hidden md:block" />
              하이엔드 AI 제작 구조
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/80 bg-white/80 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.05)] backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Capability
                </p>
                <h3 className="mt-3 text-xl font-black tracking-tight text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
                High-Speed, High-End Workflow
              </h2>
            </div>

            <Link
              href="/concept-9/packages"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              전체 패키지 보기
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-[32px] border border-white/80 bg-white/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.05)]"
              >
                <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-xs font-bold text-white">
                  STEP {item.step}
                </span>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/75 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-2xl md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_right_bottom,rgba(217,70,239,0.16),transparent_26%)]" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Ready to Launch
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
                  브랜드와 IP에 맞는 패키지로
                  <br className="hidden md:block" />
                  더 빠르고 더 고급스럽게 시작하세요
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
                  게임, 뷰티, 패션, 엔터, 교육, 금융, 헬스케어까지 산업별 목적에
                  맞는 패키지를 구성할 수 있습니다.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/concept-9/packages"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Packages
                </Link>
                <Link
                  href="/concept-9/support"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}