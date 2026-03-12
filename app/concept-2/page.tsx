// app/concept-2/page.tsx
import Link from "next/link";

const packages = [
  {
    category: "GAME",
    title: "게임 IP 런칭 티저",
    desc: "신작 공개, 사전예약, 출시 초반 캠페인에 필요한 핵심 티저 자산을 패키지 형태로 제공하는 상품입니다. Vision3의 AI-native 제작 파이프라인과 연출 디렉션을 결합하여, 세계관 전달력과 집행 속도를 동시에 확보합니다.",
    preview: "Launch Teaser Preview",
  },
  {
    category: "GAME",
    title: "게임 라이브옵스 / 업데이트",
    desc: "업데이트·이벤트·운영 공지성 영상 자산을 월 단위로 안정 공급하는 패키지입니다. 템플릿 기반 반복 제작 구조를 통해 운영팀의 콘텐츠 생산 부담과 납기 리스크를 줄입니다.",
    preview: "LiveOps Update Preview",
  },
  {
    category: "BEAUTY",
    title: "뷰티 신제품 런칭 숏폼",
    desc: "신제품 런칭 초기에 필요한 핵심 숏폼 자산을 빠르게 구성하는 패키지입니다. 브랜드 무드와 제품 USP를 균형 있게 반영하여 SNS 및 광고 집행 준비 시간을 줄입니다.",
    preview: "Beauty Shortform Preview",
  },
  {
    category: "EDU",
    title: "이러닝 · 에듀",
    desc: "교육 서비스 홍보와 실제 학습용 콘텐츠 제작을 목적별로 분리 설계한 패키지입니다. 수강자 유입용 홍보 자산부터 마이크로러닝 영상 모듈까지 단계적으로 구성할 수 있습니다.",
    preview: "Education Content Preview",
  },
  {
    category: "FASHION",
    title: "패션 시즌 룩북 필름",
    desc: "시즌 컬렉션의 무드, 실루엣, 질감, 브랜드 스토리를 전달하는 룩북 영상 패키지입니다. 룩북·캠페인·소셜에서 함께 활용 가능한 파생 자산까지 포함할 수 있습니다.",
    preview: "Lookbook Film Preview",
  },
  {
    category: "ENT",
    title: "엔터 · 웹드라마 / 영화",
    desc: "웹드라마와 영화의 티저·예고편·프로모션 영상 자산을 패키지형으로 제공하는 상품입니다. 공개 일정에 맞춰 메인 예고 자산과 파생 프로모션 자산을 함께 구성합니다.",
    preview: "Entertainment Trailer Preview",
  },
  {
    category: "FINANCE",
    title: "금융 · 보험",
    desc: "금융·보험사의 브랜딩, 상품안내, 고객 커뮤니케이션 목적에 맞춰 설계된 패키지입니다. 표현 정확성과 준법 검토를 고려한 진행 구조로 실무 수정 부담을 줄입니다.",
    preview: "Finance Explainer Preview",
  },
  {
    category: "HR",
    title: "인사 교육 영상",
    desc: "인사·교육팀의 반복 제작 수요에 맞춘 내부 교육 영상 패키지입니다. 온보딩·필수교육·직무교육·리더십 교육을 템플릿화하여 빠르고 일관성 있게 제작할 수 있습니다.",
    preview: "HR Training Preview",
  },
  {
    category: "HEALTHCARE",
    title: "헬스케어",
    desc: "헬스케어 서비스·기관·솔루션의 소개·안내·설명 목적에 맞춘 영상 패키지입니다. 정확성과 신뢰성을 우선으로 설계하여 전문가 검토가 필요한 환경에서도 안정적인 제작 프로세스를 제공합니다.",
    preview: "Healthcare Content Preview",
  },
];

const features = [
  {
    title: "AI-native Production",
    desc: "기획부터 제작 확장까지 빠르게 연결되는 AI 기반 파이프라인",
  },
  {
    title: "Repeatable System",
    desc: "반복 제작과 운영형 콘텐츠 공급에 맞는 구조 설계",
  },
  {
    title: "B2B-ready Workflow",
    desc: "실무 검토와 납기 대응을 고려한 안정적인 진행 방식",
  },
];

export default function Concept2Page() {
  return (
    <main className="min-h-screen bg-[#040916] text-white">
      <header className="sticky top-0 z-30 border-b border-cyan-400/10 bg-[#040916]/80 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">
          <div className="justify-self-start">
            <Link
              href="/"
              className="text-sm text-cyan-200/70 transition hover:text-cyan-100"
            >
              home
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <a
              href="#business"
              className="text-sm text-cyan-200/70 transition hover:text-cyan-100"
            >
              사업 소개
            </a>
            <a
              href="#packages"
              className="text-sm text-cyan-200/70 transition hover:text-cyan-100"
            >
              패키지 소개
            </a>
            <a
              href="#support"
              className="text-sm text-cyan-200/70 transition hover:text-cyan-100"
            >
              고객센터
            </a>
          </nav>

          <div className="justify-self-end">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
              concept 2
            </span>
          </div>
        </div>
      </header>

      <section
        id="business"
        className="border-b border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%),linear-gradient(180deg,#040916_0%,#07101f_100%)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">
              Vision3 B2B
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.07em] md:text-7xl">
              AI 제작 플랫폼형
              <span className="block text-cyan-300">
                business.vision3.ai
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              프리미엄 제작사 감성보다 AI 기반 제작 시스템, 반복 공급 구조,
              안정적인 납기 대응을 더 강하게 보여주는 Vision3 B2B 페이지 시안입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["AI-native", "pipeline", "future-ready", "scalable"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/15 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-cyan-400/12 bg-white/5 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <video
              src="/videos/vid1.mp4"
              controls
              muted
              playsInline
              loop
              className="aspect-[16/10] w-full rounded-[24px] border border-cyan-400/10 bg-black object-cover"
            />

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-cyan-400/12 bg-cyan-300/6 p-4"
                >
                  <h2 className="text-sm font-semibold tracking-[-0.02em] text-cyan-100">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-xs leading-6 text-white/65">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-cyan-300/60">
              production packages
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Vision3 Packages
            </h2>
          </div>

          <p className="hidden max-w-md text-sm leading-7 text-white/48 md:block">
            각 패키지는 실제 영상/이미지 자산이 들어갈 수 있도록 프리뷰 슬롯 중심으로 구성됩니다.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-[30px] border transition hover:-translate-y-1 ${
                index % 2 === 0
                  ? "border-cyan-400/12 bg-cyan-300/6 hover:border-cyan-300/24"
                  : "border-blue-400/12 bg-blue-300/6 hover:border-blue-300/24"
              }`}
            >
              <div className="border-b border-white/8 p-4">
                <div className="flex aspect-video items-center justify-center rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(255,255,255,0.02))] text-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/55">
                      sample preview
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/60">
                      {item.preview}
                    </p>
                    <p className="mt-1 text-xs text-white/35">
                      coming soon
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/65">
                  {item.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/72">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="support" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[30px] border border-cyan-400/12 bg-cyan-300/6 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/65">
            customer support
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            고객센터
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/72 md:text-base">
            패키지 문의, 제작 상담, 제안 요청, 일정 협의 등 비즈니스 관련 문의를 위한
            고객 응대 영역입니다.
          </p>
        </div>
      </section>
    </main>
  );
}