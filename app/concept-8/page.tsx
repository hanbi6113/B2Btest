// app/concept-8/page.tsx
import Link from "next/link";

const coreValues = [
  {
    title: "Story to Screen",
    desc: "웹툰과 소설 같은 원작 서사를 실사형 영상 기획 언어로 전환하는 Vision3의 핵심 방향",
  },
  {
    title: "AI-native Production",
    desc: "빠른 시각화와 반복 제작 효율을 기반으로 실제 비즈니스 일정에 맞는 제작 구조를 제공",
  },
  {
    title: "High-end Direction",
    desc: "툴처럼 보이되 결과물은 제작사처럼 보이게 만드는 고급스러운 연출 감도와 브랜드 완성도",
  },
];

const workflow = [
  "원작 분위기 분석",
  "실사형 톤 재구성",
  "영상 콘셉트 설계",
  "프로모션 자산 확장",
];

export default function Concept8BusinessPage() {
  return (
    <main className="min-h-screen bg-[#06070d] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06070d]/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">
          <div className="justify-self-start">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78 transition hover:border-white/20 hover:bg-white/8 hover:text-white"
            >
              home
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <Link
              href="/concept-8"
              className="text-sm text-white transition hover:text-white"
            >
              사업 소개
            </Link>
            <Link
              href="/concept-8/packages"
              className="text-sm text-white/62 transition hover:text-white"
            >
              패키지 소개
            </Link>
            <Link
              href="/concept-8/support"
              className="text-sm text-white/62 transition hover:text-white"
            >
              고객센터
            </Link>
          </nav>

          <div className="justify-self-end">
            <span className="rounded-full border border-[#9fb8ff]/20 bg-[linear-gradient(135deg,rgba(125,160,255,0.12),rgba(255,255,255,0.04))] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#d7e2ff]">
              concept 8
            </span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(130,150,255,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(89,182,255,0.14),transparent_26%),linear-gradient(180deg,#06070d_0%,#0a0d16_58%,#0d111b_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.00))]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8cbff]/68">
              Vision3
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.08em] text-white md:text-7xl xl:text-[5.3rem] xl:leading-[0.94]">
              원작의 분위기를
              <span className="block bg-gradient-to-r from-[#f4f7ff] via-[#a9c1ff] to-[#79baff] bg-clip-text text-transparent">
                실사형 영상 경험으로
              </span>
              확장하는 AI 제작 플랫폼
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Vision3는 웹툰과 소설 같은 스토리 원작을 바탕으로
              실사형 영상 콘셉트, 티저, 프로모션, 파생 자산까지 연결하는
              하이엔드 AI 제작 파트너입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["story IP", "live-action vision", "premium production", "AI-native workflow"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/82"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(132,157,255,0.16),transparent_60%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.46)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_34%)]" />
              <video
                src="/videos/vid1.mp4"
                controls
                muted
                playsInline
                loop
                className="relative aspect-[16/9] w-full rounded-[28px] bg-black object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#b8cbff]/64">
              business introduction
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              사업 소개
            </h2>
            <p className="mt-6 text-sm leading-8 text-white/72 md:text-base">
              Vision3는 원작 IP를 단순히 영상화하는 것이 아니라, 실사형 결과물에
              적합한 분위기와 감정선, 화면 언어를 다시 설계하는 데 초점을 둡니다.
              웹툰·웹소설이 가진 팬덤과 세계관을 존중하면서도, 실제 영상 프로모션과
              캠페인에 활용할 수 있는 비즈니스 친화적 결과물로 확장합니다.
            </p>
            <p className="mt-5 text-sm leading-8 text-white/72 md:text-base">
              특히 공개 전 티저, 런칭 캠페인, 숏폼 광고, 브랜드 협업, 파생 자산처럼
              속도와 일관성이 모두 중요한 환경에서 Vision3의 AI-native 제작 구조는
              강한 효율을 제공합니다.
            </p>
          </div>

          <div className="grid gap-6">
            {coreValues.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[28px] border p-6 ${
                  index === 0
                    ? "border-[#90aaff]/16 bg-[linear-gradient(180deg,rgba(127,152,255,0.10),rgba(255,255,255,0.03))]"
                    : index === 1
                    ? "border-[#7ec9ff]/16 bg-[linear-gradient(180deg,rgba(86,177,255,0.10),rgba(255,255,255,0.03))]"
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#b8cbff]/64">
                workflow
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Vision3 Flow
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/72 md:text-base">
                원작의 정체성을 유지하면서도 실사형 결과물에 맞게 재구성하는 Vision3의
                기본 흐름입니다.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-base font-medium text-white/84">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}