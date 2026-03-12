// app/concept-5/page.tsx
import Link from "next/link";

const packages = [
  {
    category: "GAME",
    title: "게임 IP 런칭 티저 패키지",
    desc: "신작 공개, 사전예약, 출시 초반 캠페인에 필요한 핵심 티저 자산을 패키지 형태로 제공하는 상품입니다. Vision3의 AI-native 제작 파이프라인과 연출 디렉션을 결합하여, 세계관 전달력과 집행 속도를 동시에 확보합니다.",
    preview: "Launch Teaser Showcase",
  },
  {
    category: "GAME",
    title: "게임 라이브옵스 / 업데이트 패키지",
    desc: "업데이트·이벤트·운영 공지성 영상 자산을 월 단위로 안정 공급하는 패키지입니다. 템플릿 기반 반복 제작 구조를 통해 운영팀의 콘텐츠 생산 부담과 납기 리스크를 줄입니다.",
    preview: "LiveOps Update Showcase",
  },
  {
    category: "BEAUTY",
    title: "뷰티 신제품 런칭 숏폼 패키지",
    desc: "신제품 런칭 초기에 필요한 핵심 숏폼 자산을 빠르게 구성하는 패키지입니다. 브랜드 무드와 제품 USP를 균형 있게 반영하여 SNS 및 광고 집행 준비 시간을 줄입니다.",
    preview: "Beauty Shortform Showcase",
  },
  {
    category: "EDU",
    title: "이러닝 · 에듀 패키지",
    desc: "교육 서비스 홍보와 실제 학습용 콘텐츠 제작을 목적별로 분리 설계한 패키지입니다. 수강자 유입용 홍보 자산부터 마이크로러닝 영상 모듈까지 단계적으로 구성할 수 있습니다.",
    preview: "Education Content Showcase",
  },
  {
    category: "FASHION",
    title: "패션 시즌 룩북 필름 패키지",
    desc: "시즌 컬렉션의 무드, 실루엣, 질감, 브랜드 스토리를 전달하는 룩북 영상 패키지입니다. 룩북·캠페인·소셜에서 함께 활용 가능한 파생 자산까지 포함할 수 있습니다.",
    preview: "Fashion Lookbook Showcase",
  },
  {
    category: "ENT",
    title: "엔터 · 웹드라마 / 영화 패키지",
    desc: "웹드라마와 영화의 티저·예고편·프로모션 영상 자산을 패키지형으로 제공하는 상품입니다. 공개 일정에 맞춰 메인 예고 자산과 파생 프로모션 자산을 함께 구성합니다.",
    preview: "Entertainment Trailer Showcase",
  },
  {
    category: "FINANCE",
    title: "금융 · 보험 패키지",
    desc: "금융·보험사의 브랜딩, 상품안내, 고객 커뮤니케이션 목적에 맞춰 설계된 패키지입니다. 표현 정확성과 준법 검토를 고려한 진행 구조로 실무 수정 부담을 줄입니다.",
    preview: "Finance Communication Showcase",
  },
  {
    category: "HR",
    title: "인사 교육 영상 패키지",
    desc: "인사·교육팀의 반복 제작 수요에 맞춘 내부 교육 영상 패키지입니다. 온보딩·필수교육·직무교육·리더십 교육을 템플릿화하여 빠르고 일관성 있게 제작할 수 있습니다.",
    preview: "HR Training Showcase",
  },
  {
    category: "HEALTHCARE",
    title: "헬스케어 패키지",
    desc: "헬스케어 서비스·기관·솔루션의 소개·안내·설명 목적에 맞춘 영상 패키지입니다. 정확성과 신뢰성을 우선으로 설계하여 전문가 검토가 필요한 환경에서도 안정적인 제작 프로세스를 제공합니다.",
    preview: "Healthcare Content Showcase",
  },
];

export default function Concept5Page() {
  return (
    <main className="min-h-screen bg-[#06060b] text-white">
      <header className="sticky top-0 z-30 border-b border-fuchsia-400/10 bg-black/20 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">
          <div className="justify-self-start">
            <Link
              href="/"
              className="text-sm text-fuchsia-200/70 transition hover:text-fuchsia-100"
            >
              home
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <a
              href="#business"
              className="text-sm text-fuchsia-200/70 transition hover:text-fuchsia-100"
            >
              사업 소개
            </a>
            <a
              href="#packages"
              className="text-sm text-fuchsia-200/70 transition hover:text-fuchsia-100"
            >
              패키지 소개
            </a>
            <a
              href="#support"
              className="text-sm text-fuchsia-200/70 transition hover:text-fuchsia-100"
            >
              고객센터
            </a>
          </nav>

          <div className="justify-self-end">
            <span className="rounded-full border border-fuchsia-300/18 bg-fuchsia-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-fuchsia-200">
              concept 5
            </span>
          </div>
        </div>
      </header>

      <section
        id="business"
        className="border-b border-fuchsia-400/10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_22%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.16),transparent_24%),linear-gradient(180deg,#06060b_0%,#0c0914_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/70">
            Vision3 B2B
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            <span className="block text-fuchsia-300">business.vision3.ai</span>
          </h1>

          <div className="mt-10 overflow-hidden rounded-[34px] border border-white/10 bg-white/5">
            <video
              src="/videos/vid1.mp4"
              controls
              muted
              playsInline
              loop
              className="aspect-[16/8] w-full bg-black object-cover"
            />
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-10">
          {packages.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={item.title}
                className="rounded-[34px] border border-white/10 bg-white/5 p-5 md:p-6"
              >
                <div
                  className={`grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center ${
                    reverse
                      ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                      : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-[28px] border border-white/8 bg-black/30">
                    <div className="flex aspect-[16/9] items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.35))] text-center">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/50">
                          sample preview
                        </p>
                        <p className="mt-2 text-lg font-medium text-white/72">
                          {item.preview}
                        </p>
                        <p className="mt-2 text-sm text-white/38">
                          visual showcase slot
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-1 md:px-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-200/65">
                      {item.category}
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
                      {item.title}
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-8 text-white/72 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="support" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/60">
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