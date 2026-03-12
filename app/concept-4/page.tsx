// app/concept-4/page.tsx
import Link from "next/link";

const packages = [
  {
    category: "GAME",
    title: "게임 IP 런칭 티저 패키지",
    desc: "신작 공개, 사전예약, 출시 초반 캠페인에 필요한 핵심 티저 자산을 패키지 형태로 제공하는 상품입니다. Vision3의 AI-native 제작 파이프라인과 연출 디렉션을 결합하여, 세계관 전달력과 집행 속도를 동시에 확보합니다.",
    preview: "Game Launch Teaser Sample",
  },
  {
    category: "GAME",
    title: "게임 라이브옵스 / 업데이트 패키지",
    desc: "업데이트·이벤트·운영 공지성 영상 자산을 월 단위로 안정 공급하는 패키지입니다. 템플릿 기반 반복 제작 구조를 통해 운영팀의 콘텐츠 생산 부담과 납기 리스크를 줄입니다.",
    preview: "LiveOps Update Sample",
  },
  {
    category: "BEAUTY",
    title: "뷰티 신제품 런칭 숏폼 패키지",
    desc: "신제품 런칭 초기에 필요한 핵심 숏폼 자산을 빠르게 구성하는 패키지입니다. 브랜드 무드와 제품 USP를 균형 있게 반영하여 SNS 및 광고 집행 준비 시간을 줄입니다.",
    preview: "Beauty Shortform Sample",
  },
  {
    category: "EDU",
    title: "이러닝 · 에듀 패키지",
    desc: "교육 서비스 홍보와 실제 학습용 콘텐츠 제작을 목적별로 분리 설계한 패키지입니다. 수강자 유입용 홍보 자산부터 마이크로러닝 영상 모듈까지 단계적으로 구성할 수 있습니다.",
    preview: "Education Content Sample",
  },
  {
    category: "FASHION",
    title: "패션 시즌 룩북 필름 패키지",
    desc: "시즌 컬렉션의 무드, 실루엣, 질감, 브랜드 스토리를 전달하는 룩북 영상 패키지입니다. 룩북·캠페인·소셜에서 함께 활용 가능한 파생 자산까지 포함할 수 있습니다.",
    preview: "Fashion Lookbook Sample",
  },
  {
    category: "ENT",
    title: "엔터 · 웹드라마 / 영화 패키지",
    desc: "웹드라마와 영화의 티저·예고편·프로모션 영상 자산을 패키지형으로 제공하는 상품입니다. 공개 일정에 맞춰 메인 예고 자산과 파생 프로모션 자산을 함께 구성합니다.",
    preview: "Entertainment Trailer Sample",
  },
  {
    category: "FINANCE",
    title: "금융 · 보험 패키지",
    desc: "금융·보험사의 브랜딩, 상품안내, 고객 커뮤니케이션 목적에 맞춰 설계된 패키지입니다. 표현 정확성과 준법 검토를 고려한 진행 구조로 실무 수정 부담을 줄입니다.",
    preview: "Finance Explainer Sample",
  },
  {
    category: "HR",
    title: "인사 교육 영상 패키지",
    desc: "인사·교육팀의 반복 제작 수요에 맞춘 내부 교육 영상 패키지입니다. 온보딩·필수교육·직무교육·리더십 교육을 템플릿화하여 빠르고 일관성 있게 제작할 수 있습니다.",
    preview: "HR Training Sample",
  },
  {
    category: "HEALTHCARE",
    title: "헬스케어 패키지",
    desc: "헬스케어 서비스·기관·솔루션의 소개·안내·설명 목적에 맞춘 영상 패키지입니다. 정확성과 신뢰성을 우선으로 설계하여 전문가 검토가 필요한 환경에서도 안정적인 제작 프로세스를 제공합니다.",
    preview: "Healthcare Content Sample",
  },
];

export default function Concept4Page() {
  return (
    <main className="min-h-screen bg-[#f6f7f8] text-[#14181d]">
      <header className="sticky top-0 z-30 border-b border-black/8 bg-white/80 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">
          <div className="justify-self-start">
            <Link
              href="/"
              className="text-sm text-black/60 transition hover:text-black"
            >
              home
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <a
              href="#business"
              className="text-sm text-black/60 transition hover:text-black"
            >
              사업 소개
            </a>
            <a
              href="#packages"
              className="text-sm text-black/60 transition hover:text-black"
            >
              패키지 소개
            </a>
            <a
              href="#support"
              className="text-sm text-black/60 transition hover:text-black"
            >
              고객센터
            </a>
          </nav>

          <div className="justify-self-end">
            <span className="rounded-full border border-[#6f8f88]/18 bg-[#eef5f3] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#4e6b64]">
              concept 4
            </span>
          </div>
        </div>
      </header>

      <section
        id="business"
        className="border-b border-black/6 bg-[radial-gradient(circle_at_top_left,rgba(110,181,164,0.12),transparent_22%),linear-gradient(180deg,#fbfcfc_0%,#f2f5f4_100%)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#6c8982]/70">
              Vision3 B2B
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[#11161a] md:text-7xl">
              Bright Business
              <span className="block text-[#64867f]">business.vision3.ai</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#56616a] md:text-lg">
              각 패키지별 예시 영상이 크게 들어가는 구조로 구성한 밝은 톤의 비즈니스 페이지 시안입니다.
            </p>
          </div>

          <div className="rounded-[32px] border border-black/8 bg-white p-4 shadow-[0_18px_50px_rgba(20,24,29,0.08)]">
            <video
              src="/videos/vid1.mp4"
              controls
              muted
              playsInline
              loop
              className="aspect-[16/10] w-full rounded-[24px] bg-black object-cover"
            />
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-8">
          {packages.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-[32px] border shadow-[0_10px_30px_rgba(20,24,29,0.04)] ${
                index % 2 === 0
                  ? "border-[#d7e5e1] bg-white"
                  : "border-[#e1e7e5] bg-[#fbfcfc]"
              }`}
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="p-8 md:p-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b8b83]/70">
                    {item.category}
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#11161a] md:text-4xl">
                    {item.title}
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#5f6971]">
                    {item.desc}
                  </p>
                </div>

                <div className="border-t border-black/6 p-5 lg:border-l lg:border-t-0">
                  <div className="flex aspect-video items-center justify-center rounded-[24px] border border-black/8 bg-[linear-gradient(180deg,#dfe9e6_0%,#f7faf9_100%)]">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#6b8b83]/60">
                        example video
                      </p>
                      <p className="mt-2 text-base font-medium text-[#4f6360]">
                        {item.preview}
                      </p>
                      <p className="mt-2 text-sm text-[#80908d]">
                        sample slot
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="support" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[30px] border border-black/8 bg-white p-8 shadow-[0_10px_30px_rgba(20,24,29,0.04)] md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#6b8b83]/65">
            customer support
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#11161a] md:text-5xl">
            고객센터
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#5f6971] md:text-base">
            패키지 문의, 제작 상담, 제안 요청, 일정 협의 등 비즈니스 관련 문의를 위한
            고객 응대 영역입니다.
          </p>
        </div>
      </section>
    </main>
  );
}