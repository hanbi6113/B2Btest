// app/concept-6/page.tsx
import Link from "next/link";

const packages = [
  {
    category: "GAME",
    title: "게임 IP 런칭 티저 패키지",
    desc: "신작 공개, 사전예약, 출시 초반 캠페인에 필요한 핵심 티저 자산을 패키지 형태로 제공하는 상품입니다. Vision3의 AI-native 제작 파이프라인과 연출 디렉션을 결합하여, 세계관 전달력과 집행 속도를 동시에 확보합니다.",
    tone: "launch campaign",
  },
  {
    category: "GAME",
    title: "게임 라이브옵스 / 업데이트 패키지",
    desc: "업데이트·이벤트·운영 공지성 영상 자산을 월 단위로 안정 공급하는 패키지입니다. 템플릿 기반 반복 제작 구조를 통해 운영팀의 콘텐츠 생산 부담과 납기 리스크를 줄입니다.",
    tone: "live update",
  },
  {
    category: "BEAUTY",
    title: "뷰티 신제품 런칭 숏폼 패키지",
    desc: "신제품 런칭 초기에 필요한 핵심 숏폼 자산을 빠르게 구성하는 패키지입니다. 브랜드 무드와 제품 USP를 균형 있게 반영하여 SNS 및 광고 집행 준비 시간을 줄입니다.",
    tone: "shortform campaign",
  },
  {
    category: "EDU",
    title: "이러닝 · 에듀 관련 패키지",
    desc: "교육 서비스 홍보와 실제 학습용 콘텐츠 제작을 목적별로 분리 설계한 패키지입니다. 수강자 유입용 홍보 자산부터 마이크로러닝 영상 모듈까지 단계적으로 구성할 수 있습니다.",
    tone: "education module",
  },
  {
    category: "FASHION",
    title: "패션 시즌 룩북 필름 패키지",
    desc: "시즌 컬렉션의 무드, 실루엣, 질감, 브랜드 스토리를 전달하는 룩북 영상 패키지입니다. 룩북·캠페인·소셜에서 함께 활용 가능한 파생 자산까지 포함할 수 있습니다.",
    tone: "lookbook film",
  },
  {
    category: "ENT",
    title: "엔터 · 웹드라마 / 영화 패키지",
    desc: "웹드라마와 영화의 티저·예고편·프로모션 영상 자산을 패키지형으로 제공하는 상품입니다. 공개 일정에 맞춰 메인 예고 자산과 파생 프로모션 자산을 함께 구성합니다.",
    tone: "trailer package",
  },
  {
    category: "FINANCE",
    title: "금융 · 보험 패키지",
    desc: "금융·보험사의 브랜딩, 상품안내, 고객 커뮤니케이션 목적에 맞춰 설계된 패키지입니다. 표현 정확성과 준법 검토를 고려한 진행 구조로 실무 수정 부담을 줄입니다.",
    tone: "trust communication",
  },
  {
    category: "HR",
    title: "인사 교육 영상 패키지",
    desc: "인사·교육팀의 반복 제작 수요에 맞춘 내부 교육 영상 패키지입니다. 온보딩·필수교육·직무교육·리더십 교육을 템플릿화하여 빠르고 일관성 있게 제작할 수 있습니다.",
    tone: "training system",
  },
  {
    category: "HEALTHCARE",
    title: "헬스케어 관련 패키지",
    desc: "헬스케어 서비스·기관·솔루션의 소개·안내·설명 목적에 맞춘 영상 패키지입니다. 정확성과 신뢰성을 우선으로 설계하여 전문가 검토가 필요한 환경에서도 안정적인 제작 프로세스를 제공합니다.",
    tone: "care content",
  },
];

export default function Concept6Page() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070d]/75 backdrop-blur">
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
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
              concept 6
            </span>
          </div>
        </div>
      </header>

      <section
        id="business"
        className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_18%),linear-gradient(180deg,#05070d_0%,#0a0f18_100%)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
              Vision3 B2B
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] md:text-7xl">
              business.vision3.ai
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              프리미엄 제작사와 차세대 AI 콘텐츠 제작 플랫폼의 인상을 동시에 담는
              Vision3 대표 시안입니다.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/6 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
            <video
              src="/videos/vid1.mp4"
              controls
              muted
              playsInline
              loop
              className="relative aspect-[16/10] w-full rounded-[26px] bg-black object-cover"
            />
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/60">
            package lineup
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            Vision3 Packages
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {packages.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] transition hover:-translate-y-1 hover:border-white/18"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div
                  className={`relative min-h-[220px] border-b border-white/8 lg:min-h-full lg:border-b-0 lg:border-r ${
                    index % 3 === 0
                      ? "border-indigo-300/12 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.28),transparent_30%),linear-gradient(180deg,#0b1020_0%,#0a1222_100%)]"
                      : index % 3 === 1
                      ? "border-cyan-300/12 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),linear-gradient(180deg,#07131d_0%,#0a1720_100%)]"
                      : "border-emerald-300/12 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_30%),linear-gradient(180deg,#071710_0%,#0a1a15_100%)]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.16))]" />
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <div className="h-10 w-10 rounded-full border border-white/12 bg-white/8" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                        {item.category}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white/72">
                        {item.tone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-white/72 md:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white/45" />
                    <span className="text-xs uppercase tracking-[0.22em] text-white/42">
                      package detail
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="support" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">
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