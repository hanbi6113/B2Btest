import Link from "next/link";

const coreValues = [
  {
    title: "Story to Screen",
    desc: "웹툰과 소설 같은 원작 서사를 실사형 영상 기획 언어로 전환하는 Vision3의 핵심 방향입니다.",
  },
  {
    title: "AI-native Production",
    desc: "빠른 시각화와 반복 제작 효율을 기반으로 실제 비즈니스 일정에 맞는 제작 구조를 제공합니다.",
  },
  {
    title: "High-end Direction",
    desc: "툴처럼 보이되 결과물은 제작사처럼 보이게 만드는 고급스러운 연출 감도와 브랜드 완성도를 지향합니다.",
  },
];

const workflow = [
  {
    step: "01",
    title: "원작 분위기 분석",
    desc: "세계관, 캐릭터 감정선, 브랜드 포인트를 먼저 정리해 실사형 전환의 기준을 설계합니다.",
  },
  {
    step: "02",
    title: "실사형 톤 재구성",
    desc: "원작의 결을 유지하면서도 실제 캠페인과 영상 언어에 맞는 톤으로 재구성합니다.",
  },
  {
    step: "03",
    title: "영상 콘셉트 설계",
    desc: "티저, 숏폼, 트레일러, 설명형 자산 등 목적에 맞는 구조로 기획합니다.",
  },
  {
    step: "04",
    title: "프로모션 자산 확장",
    desc: "핵심 영상만이 아니라 파생 컷다운과 운영형 콘텐츠까지 연결합니다.",
  },
];

const sectors = [
  "GAME",
  "BEAUTY",
  "EDU",
  "FASHION",
  "ENT",
  "FINANCE",
  "HR",
  "HEALTHCARE",
];

export default function Concept7BusinessPage() {
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
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
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
              className="text-sm text-white transition hover:text-white"
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
              className="text-sm text-white/62 transition hover:text-white"
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-200/72">
              Vision3 B2B
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.08em] text-white md:text-7xl xl:text-[5.2rem] xl:leading-[0.95]">
              story IP를
              <span className="block bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                high-end visual asset로
              </span>
              확장하는 제작
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
              Vision3는 웹툰과 소설 같은 스토리 원작을 바탕으로 실사형 영상
              콘셉트, 티저, 숏폼, 프로모션, 운영형 파생 자산까지 연결하는
              하이엔드 AI 제작 파트너입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "story IP",
                "live-action direction",
                "AI-native workflow",
                "premium production",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/82"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/concept-7/packages"
                className="inline-flex items-center justify-center rounded-full border border-violet-300/16 bg-violet-300/10 px-6 py-3 text-sm font-medium text-violet-200 transition hover:-translate-y-0.5"
              >
                패키지 보기
              </Link>
              <Link
                href="/concept-7/support"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/84 transition hover:-translate-y-0.5 hover:bg-white/8"
              >
                고객센터
              </Link>
            </div>
          </div>

          {/* Video Hero */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_58%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.46)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%)]" />

             <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#05070d]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.16))]" />

              <video
                src="/videos/vid1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="relative aspect-[16/10] w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_top,rgba(3,6,12,0.28),rgba(3,6,12,0.06),rgba(255,255,255,0.02))]" />

              <div className="absolute left-5 top-5 z-30 flex items-center gap-2">
                <span className="rounded-full border border-violet-300/16 bg-violet-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-violet-200">
                  featured reel
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/68 backdrop-blur">
                  live-action preview
                </span>
              </div>
            </div>

            {/* 영상 아래로 내린 설명 박스 */}
            <div className="mt-4">
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.24em] text-violet-200/70">
                  cinematic production system
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                  Original Story
                  <span className="block text-cyan-200">
                    reimagined for premium rollout
                  </span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
                  실사형 결과물, 티저 자산, 캠페인 확장, 파생 운영형
                  콘텐츠까지 연결되는 Vision3의 creative production preview
                </p>
              </div>
            </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["IP Analysis", "원작 감도 정리"],
                  ["Direction Build", "실사형 톤 재구성"],
                  ["Campaign Delivery", "집행형 자산 확장"],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                      {title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/82">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-violet-200/64">
              business introduction
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              사업 소개
            </h2>
            <p className="mt-6 text-sm leading-8 text-white/72 md:text-base">
              Vision3는 원작 IP를 단순히 영상화하는 것이 아니라, 실사형
              결과물에 적합한 분위기와 감정선, 화면 언어를 다시 설계하는 데
              초점을 둡니다. 웹툰·웹소설이 가진 팬덤과 세계관을 존중하면서도,
              실제 영상 프로모션과 캠페인에 활용할 수 있는 비즈니스 친화적
              결과물로 확장합니다.
            </p>
            <p className="mt-5 text-sm leading-8 text-white/72 md:text-base">
              특히 공개 전 티저, 런칭 캠페인, 숏폼 광고, 브랜드 협업, 파생
              자산처럼 속도와 일관성이 모두 중요한 환경에서 Vision3의
              AI-native 제작 구조는 강한 효율을 제공합니다.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Original IP", "웹툰 · 소설 · 브랜드 스토리"],
                ["Output Format", "티저 · 숏폼 · 안내형 · 운영형"],
                ["Production Logic", "반복 제작 최적화 + 연출 디렉션"],
                ["Business Goal", "런칭 효율 · 전달력 · 납기 안정성"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-[22px] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    {title}
                  </p>
                  <p className="mt-3 text-sm text-white/84">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {coreValues.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[28px] border p-6 ${
                  index === 0
                    ? "border-violet-300/16 bg-[linear-gradient(180deg,rgba(127,152,255,0.10),rgba(255,255,255,0.03))]"
                    : index === 1
                    ? "border-cyan-300/16 bg-[linear-gradient(180deg,rgba(86,177,255,0.10),rgba(255,255,255,0.03))]"
                    : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-violet-200/64">
                workflow
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Vision3 Flow
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/72 md:text-base">
                원작의 정체성을 유지하면서도 실사형 결과물과 실제 집행 환경에
                맞게 재구성하는 Vision3의 기본 흐름입니다.
              </p>
            </div>

            <Link
              href="/concept-7/packages"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-medium text-white/84 transition hover:-translate-y-0.5 hover:bg-white/8"
            >
              패키지 전체 보기
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
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
        <div className="rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-violet-200/64">
                coverage
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
                산업군에 맞춰 같은 구조가
                <br className="hidden md:block" />
                다른 무드로 전환됩니다
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/72 md:text-base">
                게임, 뷰티, 에듀, 패션, 엔터, 금융, HR, 헬스케어 등 목적과
                산업군에 맞춰 표현의 강도와 정보 구조를 다르게 설계합니다.
              </p>
            </div>

            <Link
              href="/concept-7/support"
              className="inline-flex items-center justify-center rounded-full border border-violet-300/16 bg-violet-300/10 px-5 py-3 text-sm font-medium text-violet-200 transition hover:-translate-y-0.5"
            >
              문의하러 가기
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {sectors.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}