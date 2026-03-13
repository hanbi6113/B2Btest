// app/concept-9/support/page.tsx
import Link from "next/link";

const supportItems = [
  {
    title: "프로젝트 문의",
    value: "vision3@yourcompany.com",
    desc: "브랜드 캠페인, 런칭 티저, 운영형 영상, 교육 콘텐츠 등 패키지 문의를 받을 수 있는 메인 채널입니다.",
  },
  {
    title: "운영 시간",
    value: "Mon - Fri / 10:00 - 18:00",
    desc: "상담, 일정 확인, 제작 범위 검토, 견적 관련 응대를 위한 기본 운영 시간입니다.",
  },
  {
    title: "파트너십 / 제휴",
    value: "business@yourcompany.com",
    desc: "게임사, 뷰티 브랜드, 패션, 교육, 엔터, 금융, 헬스케어 등 산업별 협업 제안용 채널입니다.",
  },
  {
    title: "빠른 응대",
    value: "Priority Response Available",
    desc: "런칭 일정이 촉박한 프로젝트를 위해 우선 검토 및 빠른 피드백 프로세스를 적용할 수 있습니다.",
  },
];

const faqItems = [
  {
    q: "어떤 프로젝트에 적합한가요?",
    a: "소설·웹툰 IP 실사화, 게임 런칭 티저, 라이브옵스 업데이트, 뷰티 신제품 숏폼, 교육 콘텐츠, 금융·헬스케어 안내 영상 등 목적형 프로젝트에 적합합니다.",
  },
  {
    q: "제작 방식은 어떻게 진행되나요?",
    a: "IP 또는 브랜드 분석 후 콘셉트 정리, AI-native 제작, 연출 디렉션 반영, 최종 집행용 자산 구성 순서로 진행됩니다.",
  },
  {
    q: "패키지 커스터마이징이 가능한가요?",
    a: "가능합니다. 기본 패키지 구조를 기준으로 하되, 산업과 목적에 따라 자산 범위와 구성 단위를 조정할 수 있습니다.",
  },
  {
    q: "수정 라운드는 어떻게 되나요?",
    a: "기본 수정 범위는 패키지마다 다르며, 준법·법무·전문가 검토가 필요한 금융·헬스케어 유형은 추가 검토 라운드가 별도 적용될 수 있습니다.",
  },
];

const inquiryFlow = [
  {
    step: "01",
    title: "Inquiry",
    desc: "필요한 산업군, 목적, 일정, 원하는 결과물 유형을 전달합니다.",
  },
  {
    step: "02",
    title: "Package Suggestion",
    desc: "적합한 패키지 구조와 예상 산출물 방향을 제안합니다.",
  },
  {
    step: "03",
    title: "Production",
    desc: "AI-native 제작 파이프라인과 연출 디렉션 기반으로 자산을 제작합니다.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "집행 가능한 파일 구조와 파생 자산까지 정리해 전달합니다.",
  },
];

const trustFramework = [
  {
    title: "Structured Communication",
    desc: "문의 단계에서부터 목적, 범위, 일정, 산출물 구조를 정리해 의사결정 부담을 줄입니다.",
  },
  {
    title: "Production Logic",
    desc: "빠른 생성이 아니라 실제 배포와 집행에 맞는 production-ready asset structure를 전제로 합니다.",
  },
  {
    title: "Review-ready Workflow",
    desc: "금융, 헬스케어 등 신뢰도가 중요한 프로젝트도 검토 구조를 고려해 안정적으로 운영할 수 있습니다.",
  },
];

export default function Concept9SupportPage() {
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
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(248,250,252,0.96),rgba(255,255,255,0.99))]" />
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
            href="/concept-9/packages"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Packages
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pb-10 pt-16 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/78 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-2xl md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_right_bottom,rgba(217,70,239,0.16),transparent_26%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Customer Center
                </p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
                  Premium Support
                  <br />
                  for Creative Production
                </h1>
                <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600 md:text-base">
                  프로젝트 문의, 패키지 제안, 일정 검토, 파트너십, 빠른 응대
                  요청까지 Vision3 고객센터에서 한 번에 확인할 수 있도록
                  구성했습니다. 단순 문의가 아니라 production decision을 빠르게
                  돕는 support structure를 지향합니다.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/concept-9"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  메인으로
                </Link>
                <Link
                  href="/concept-9/packages"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  패키지 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {supportItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/80 bg-white/82 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.05)] backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Support
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-zinc-950">
                  {item.title}
                </h2>
                <p className="mt-4 text-lg font-semibold text-zinc-900">
                  {item.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Framework */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Support Framework
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
              High-Trust support,
              <br className="hidden md:block" />
              built for production decisions
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {trustFramework.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/80 bg-white/82 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.05)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Trust Layer
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

      {/* Inquiry Flow */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Inquiry Flow
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
              문의부터 납품까지의 기본 흐름
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {inquiryFlow.map((item) => (
              <div
                key={item.step}
                className="rounded-[30px] border border-white/80 bg-white/82 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.05)]"
              >
                <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-xs font-bold text-white">
                  STEP {item.step}
                </span>
                <h3 className="mt-5 text-xl font-black tracking-tight text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
              자주 묻는 질문
            </h2>
          </div>

          <div className="grid gap-5">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-[28px] border border-white/80 bg-white/82 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.05)]"
              >
                <h3 className="text-lg font-black tracking-tight text-zinc-950">
                  {item.q}
                </h3>
                <p className="mt-4 text-sm leading-8 text-zinc-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}