// app/concept-7/support/page.tsx
import Link from "next/link";

const supportItems = [
  {
    title: "프로젝트 문의",
    value: "vision3@company.com",
    desc: "게임, 뷰티, 교육, 패션, 엔터, 금융, HR, 헬스케어 등 산업별 패키지 문의를 받을 수 있는 기본 채널입니다.",
    accent: "border-violet-300/16 bg-violet-300/10 text-violet-200",
  },
  {
    title: "운영 시간",
    value: "Mon - Fri / 10:00 - 18:00",
    desc: "프로젝트 범위 확인, 일정 조율, 산출물 논의, 패키지 추천 응대를 위한 기본 운영 시간입니다.",
    accent: "border-cyan-300/16 bg-cyan-300/10 text-cyan-200",
  },
  {
    title: "파트너십 / 제휴",
    value: "business@company.com",
    desc: "IP 사업, 브랜드 협업, 기업 패키지 공급, 장기 운영형 프로젝트 등 파트너십 제안에 적합한 채널입니다.",
    accent: "border-emerald-300/16 bg-emerald-300/10 text-emerald-200",
  },
  {
    title: "우선 검토 요청",
    value: "Priority Response Available",
    desc: "런칭 일정이 촉박하거나 공개일이 정해진 프로젝트는 우선 검토 흐름으로 빠르게 응대할 수 있습니다.",
    accent: "border-amber-300/16 bg-amber-300/10 text-amber-200",
  },
];

const process = [
  {
    step: "01",
    title: "문의 접수",
    desc: "산업군, 일정, 원하는 결과물 유형, 필요한 산출물 범위를 먼저 받습니다.",
  },
  {
    step: "02",
    title: "패키지 제안",
    desc: "프로젝트 목적에 맞는 패키지와 적합한 구성 방향을 제안합니다.",
  },
  {
    step: "03",
    title: "제작 설계",
    desc: "원작 분석, 톤 설계, 연출 방향 정리, 제작 흐름 구성을 진행합니다.",
  },
  {
    step: "04",
    title: "납품 및 확장",
    desc: "핵심 결과물과 파생 자산까지 실제 집행 가능한 구조로 전달합니다.",
  },
];

const faqItems = [
  {
    q: "어떤 프로젝트에 적합한가요?",
    a: "웹툰·웹소설 기반 실사형 티저, 게임 런칭/업데이트, 뷰티 숏폼, 교육 콘텐츠, 금융·헬스케어 설명형 자산, 사내 교육형 콘텐츠 등 목적형 프로젝트에 적합합니다.",
  },
  {
    q: "영상 한 편만 제작하는 것도 가능한가요?",
    a: "가능하지만 Vision3는 보통 티저, 컷다운, 숏폼, 운영형 파생 자산까지 함께 고려한 패키지형 구조에서 더 강점을 가집니다.",
  },
  {
    q: "산업군마다 표현 톤이 달라지나요?",
    a: "달라집니다. 게임과 엔터는 몰입도와 임팩트를, 금융과 헬스케어는 정확성과 신뢰를, 교육과 HR은 구조화와 반복 효율을 더 우선합니다.",
  },
  {
    q: "수정 라운드는 어떻게 보나요?",
    a: "기본 수정 범위는 프로젝트와 패키지 구조에 따라 다르며, 준법·법무·전문가 검토가 필요한 경우 별도 검토 라운드로 운영할 수 있습니다.",
  },
];

export default function Concept7SupportPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_20%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_20%),linear-gradient(180deg,#05070d_0%,#0a0f18_100%)] text-white">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-full border border-white/12 bg-[#0b1120]/78 px-4 py-2 text-sm text-white/78 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:-translate-y-0.5 hover:text-white"
      >
        home
      </Link>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070d]/72 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/concept-7" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <span className="bg-gradient-to-r from-violet-200 via-cyan-200 to-blue-200 bg-clip-text text-sm font-black text-transparent">
                V3
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                premium ai production
              </p>
              <p className="text-base font-semibold tracking-[-0.03em] text-white">
                Vision3
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/concept-7"
              className="text-sm text-white/62 transition hover:text-white"
            >
              사업 소개
            </Link>
            <Link
              href="/concept-7/packages"
              className="text-sm text-white/62 transition hover:text-white"
            >
              패키지 소개
            </Link>
            <Link
              href="/concept-7/support"
              className="text-sm text-white transition hover:text-white"  
            >
              고객센터
            </Link>
          </nav>

          <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
            concept 7
          </span>
        </div>
      </header>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-200/72">
              support center
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.08em] text-white md:text-7xl xl:text-[5.2rem] xl:leading-[0.95]">
              package inquiry를
              <span className="block bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                premium flow로 연결하는
              </span>
              customer support
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
              Vision3 고객센터는 단순 문의 창구가 아니라, 프로젝트 목적과 일정,
              산출물 구조를 빠르게 정리해 가장 적합한 패키지 방향으로 연결하는
              지원 페이지입니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/concept-7/packages"
                className="inline-flex items-center justify-center rounded-full border border-violet-300/16 bg-violet-300/10 px-6 py-3 text-sm font-medium text-violet-200 transition hover:-translate-y-0.5"
              >
                패키지 보기
              </Link>
              <Link
                href="/concept-7"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/84 transition hover:-translate-y-0.5 hover:bg-white/8"
              >
                사업 소개 보기
              </Link>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-violet-200/64">
              quick summary
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["대상", "B2B 패키지 문의 / 산업별 제작 상담"],
                ["응대 방식", "패키지 추천 + 일정 / 범위 검토"],
                ["적합 프로젝트", "런칭 / 홍보 / 교육 / 설명 / 운영형"],
                ["강점", "빠른 판단 + 구조화된 제작 제안"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-[22px] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/82">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.28em] text-violet-200/64">
            contact points
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            주요 문의 채널
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7"
            >
              <span className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] ${item.accent}`}>
                support
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-lg font-medium text-white/88">{item.value}</p>
              <p className="mt-4 text-sm leading-8 text-white/72">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 md:p-10">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-violet-200/64">
              inquiry process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              문의부터 전달까지의 흐름
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-violet-200/64">
                  {item.step}
                </p>
                <p className="mt-3 text-base font-medium text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.28em] text-violet-200/64">
            faq
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            자주 묻는 질문
          </h2>
        </div>

        <div className="grid gap-5">
          {faqItems.map((item) => (
            <div
              key={item.q}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                {item.q}
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/72">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}