// app/concept-9/packages/page.tsx
// app/concept-9/packages/page.tsx
import Link from "next/link";

type PackageItem = {
  category: string;
  titleKo: string;
  descKo: string;
  noteKo?: string;
  badge: string;
  fit: string[];
  outputs: string[];
  trust: string;
};

const packages: PackageItem[] = [
  {
    category: "Game",
    titleKo: "게임 IP 런칭 티저 패키지",
    descKo:
      "신작 공개, 사전예약, 출시 초반 캠페인에 필요한 핵심 티저 자산을 패키지 형태로 제공하는 상품입니다. Vision3의 AI-native 제작 파이프라인과 연출 디렉션을 결합하여 세계관 전달력과 집행 속도를 동시에 확보합니다.",
    badge: "Launch / Pre-register / Campaign",
    fit: ["신작 공개", "사전예약 캠페인", "초기 런칭 주목도 확보"],
    outputs: ["티저 필름", "사전예약 숏폼", "런칭 컷다운"],
    trust: "세계관 전달력과 런칭 모멘텀을 함께 확보하는 구조",
  },
  {
    category: "Game LiveOps",
    titleKo: "게임 라이브옵스 / 업데이트 패키지",
    descKo:
      "업데이트, 이벤트, 운영 공지성 영상 자산을 월 단위로 안정 공급하는 패키지입니다. 템플릿 기반 반복 제작 구조를 통해 운영팀의 콘텐츠 생산 부담과 납기 리스크를 줄입니다.",
    badge: "Monthly / Repeatable / Stable",
    fit: ["월간 운영", "업데이트 공지", "반복형 이벤트 자산"],
    outputs: ["업데이트 영상", "이벤트 숏폼", "운영형 모션 템플릿"],
    trust: "반복 제작과 일정 안정성을 우선으로 설계한 운영형 구조",
  },
  {
    category: "Beauty",
    titleKo: "뷰티 신제품 런칭 숏폼 패키지",
    descKo:
      "신제품 런칭 초기에 필요한 핵심 숏폼 자산을 빠르게 구성하는 패키지입니다. 브랜드 무드와 제품 USP를 균형 있게 반영하여 SNS 및 광고 집행 준비 시간을 줄입니다.",
    badge: "Shortform / SNS / Paid Ads",
    fit: ["신제품 공개", "광고 집행 준비", "브랜드 무드 전달"],
    outputs: ["런칭 숏폼", "USP 중심 컷", "SNS 광고형 클립"],
    trust: "감도와 제품 전달력을 동시에 잡는 숏폼 중심 구조",
  },
  {
    category: "Education",
    titleKo: "이러닝 · 에듀 관련 패키지",
    descKo:
      "교육 서비스 홍보와 실제 학습용 콘텐츠 제작을 목적별로 분리 설계한 패키지입니다. 수강자 유입용 홍보 자산부터 마이크로러닝 영상 모듈까지 단계적으로 구성할 수 있습니다.",
    noteKo:
      "※ 목적이 달라 홍보형(Type A)과 학습형(Type B)으로 구분 운영 권장\n※ Type B는 총 러닝타임이 길어도 템플릿 반복 구조를 반영한 환산 제작분 기준",
    badge: "Type A / Type B / Modular",
    fit: ["교육 서비스 홍보", "학습 모듈 제작", "반복형 콘텐츠 운영"],
    outputs: ["홍보형 영상", "학습 모듈", "마이크로러닝 클립"],
    trust: "목적에 맞게 정보 구조를 분리해 전달 효율을 높이는 설계",
  },
  {
    category: "Fashion",
    titleKo: "패션 시즌 룩북 필름 패키지",
    descKo:
      "시즌 컬렉션의 무드, 실루엣, 질감, 브랜드 스토리를 전달하는 룩북 영상 패키지입니다. 룩북, 캠페인, 소셜에서 함께 활용 가능한 파생 자산까지 포함할 수 있습니다.",
    badge: "Lookbook / Campaign / Social",
    fit: ["시즌 컬렉션 공개", "브랜드 무드 필름", "캠페인 전개"],
    outputs: ["룩북 필름", "캠페인 컷다운", "소셜 파생 자산"],
    trust: "브랜드 무드와 패션 비주얼 감도를 중심으로 구성한 패키지",
  },
  {
    category: "Entertainment",
    titleKo: "엔터 · 웹드라마 / 영화 패키지",
    descKo:
      "웹드라마 및 영화의 티저, 예고편, 프로모션 영상 자산을 패키지형으로 제공하는 상품입니다. 공개 일정에 맞춰 메인 예고 자산과 파생 프로모션 자산을 함께 구성하여 초기 노출 효율을 높입니다.",
    badge: "Teaser / Trailer / Promotion",
    fit: ["공개 전 화제성 확보", "예고편 집행", "파생 프로모션 운영"],
    outputs: ["티저", "메인 예고편", "프로모션 컷다운"],
    trust: "공개 타이밍과 노출 효율을 함께 고려하는 엔터형 구조",
  },
  {
    category: "Finance",
    titleKo: "금융 · 보험 패키지",
    descKo:
      "금융·보험사의 브랜딩, 상품 안내, 고객 커뮤니케이션 목적에 맞춰 설계된 패키지입니다. 표현 정확성과 준법 검토를 고려한 진행 구조로 실무 수정 부담을 줄입니다.",
    noteKo:
      "※ 준법/컴플라이언스 검토 추가 라운드, 문구 구조 변경은 추가금 별도",
    badge: "Compliance / Accuracy / Trust",
    fit: ["상품 설명", "브랜드 신뢰 구축", "고객 커뮤니케이션"],
    outputs: ["브랜딩 영상", "상품 안내 자산", "설명형 커뮤니케이션"],
    trust: "표현 정확성과 검토 안정성을 우선하는 high-trust production",
  },
  {
    category: "HR / Internal",
    titleKo: "인사 교육 영상 패키지",
    descKo:
      "인사 및 교육팀의 반복 제작 수요에 맞춘 내부 교육 영상 패키지입니다. 온보딩, 필수교육, 직무교육, 리더십 교육을 템플릿화하여 빠르고 일관성 있게 제작할 수 있습니다.",
    badge: "Onboarding / L&D / Internal",
    fit: ["온보딩", "필수 교육", "반복형 사내 콘텐츠"],
    outputs: ["온보딩 영상", "교육 템플릿", "직무교육 자산"],
    trust: "반복 수요와 일관성 중심으로 설계한 내부 운영형 구조",
  },
  {
    category: "Healthcare",
    titleKo: "헬스케어 관련 패키지",
    descKo:
      "헬스케어 서비스, 기관, 솔루션의 소개, 안내, 설명 목적에 맞춘 영상 패키지입니다. 정확성과 신뢰성을 우선으로 설계하여 의료 및 전문가 검토가 필요한 환경에서도 안정적인 제작 프로세스를 제공합니다.",
    noteKo:
      "※ 전문가/법무 검토 추가 라운드 및 규정 민감 문구 재편집은 추가금 별도",
    badge: "Reliable / Review-ready / Clear",
    fit: ["서비스 소개", "설명형 안내", "전문 검토가 필요한 환경"],
    outputs: ["소개 영상", "안내형 콘텐츠", "설명형 자산"],
    trust: "정확성과 전문가 검토 대응을 전제로 한 안정적 제작 프로세스",
  },
];

export default function Concept9PackagesPage() {
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
            href="/concept-9/support"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact
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
                  Package Lineup
                </p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
                  산업별 목적에 맞춘
                  <br />
                  Premium Production Packages
                </h1>
                <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600 md:text-base">
                  런칭, 업데이트, 브랜딩, 교육, 안내, 프로모션 등 실제 목적에
                  맞게 패키지 구조를 분리했습니다. 빠른 제작만이 아니라 연출
                  품질, 정보 전달력, 검토 안정성까지 함께 확보하는 방향으로
                  설계했습니다.
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
                  href="/concept-9/support"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  고객센터
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-2">
            {packages.map((item) => (
              <article
                key={item.titleKo}
                className="overflow-hidden rounded-[32px] border border-white/80 bg-white/82 shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-xl"
              >
                {/* Visual Placeholder */}
                <div className="relative h-64 w-full overflow-hidden border-b border-white/70 bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 md:h-72">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_28%)]" />

                  <div className="absolute left-5 top-5 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600 backdrop-blur">
                    Visual Area
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center px-6">
                    <div className="flex h-[78%] w-full max-w-[86%] items-center justify-center rounded-[28px] border-2 border-dashed border-zinc-300/80 bg-white/55 backdrop-blur-sm">
                      <div className="text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                          Cinematic Placeholder
                        </p>
                        <p className="mt-3 text-lg font-bold text-zinc-700 md:text-xl">
                          패키지 이미지 영역
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        {item.category}
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950 md:text-3xl">
                        {item.titleKo}
                      </h2>
                    </div>

                    <span className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-[11px] font-bold text-white md:inline-flex">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="mb-5 md:hidden">
                    <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-xs font-bold text-white">
                      {item.badge}
                    </span>
                  </div>

                  <div className="rounded-[24px] border border-white/80 bg-white/92 p-5">
                    <p className="text-sm leading-8 text-zinc-700">{item.descKo}</p>

                    {item.noteKo && (
                      <p className="mt-4 whitespace-pre-line text-xs leading-6 text-zinc-500">
                        {item.noteKo}
                      </p>
                    )}

                    <div className="mt-6 grid gap-5 lg:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                          Best Fit
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.fit.map((fitItem) => (
                            <span
                              key={fitItem}
                              className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700"
                            >
                              {fitItem}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                          Outputs
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.outputs.map((outputItem) => (
                            <span
                              key={outputItem}
                              className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700"
                            >
                              {outputItem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[18px] border border-zinc-200 bg-zinc-50/80 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Trust Layer
                      </p>
                      <p className="mt-2 text-sm leading-7 text-zinc-700">
                        {item.trust}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
// import Link from "next/link";

// const packages = [
//   {
//     category: "Game",
//     titleKo: "게임 IP 런칭 티저 패키지",
//     descKo:
//       "신작 공개, 사전예약, 출시 초반 캠페인에 필요한 핵심 티저 자산을 패키지 형태로 제공하는 상품입니다. Vision3의 AI-native 제작 파이프라인과 연출 디렉션을 결합하여 세계관 전달력과 집행 속도를 동시에 확보합니다.",
//     badge: "Launch / Pre-register / Campaign",
//   },
//   {
//     category: "Game LiveOps",
//     titleKo: "게임 라이브옵스 / 업데이트 패키지",
//     descKo:
//       "업데이트, 이벤트, 운영 공지성 영상 자산을 월 단위로 안정 공급하는 패키지입니다. 템플릿 기반 반복 제작 구조를 통해 운영팀의 콘텐츠 생산 부담과 납기 리스크를 줄입니다.",
//     badge: "Monthly / Repeatable / Stable",
//   },
//   {
//     category: "Beauty",
//     titleKo: "뷰티 신제품 런칭 숏폼 패키지",
//     descKo:
//       "신제품 런칭 초기에 필요한 핵심 숏폼 자산을 빠르게 구성하는 패키지입니다. 브랜드 무드와 제품 USP를 균형 있게 반영하여 SNS 및 광고 집행 준비 시간을 줄입니다.",
//     badge: "Shortform / SNS / Paid Ads",
//   },
//   {
//     category: "Education",
//     titleKo: "이러닝 · 에듀 관련 패키지",
//     descKo:
//       "교육 서비스 홍보와 실제 학습용 콘텐츠 제작을 목적별로 분리 설계한 패키지입니다. 수강자 유입용 홍보 자산부터 마이크로러닝 영상 모듈까지 단계적으로 구성할 수 있습니다.",
//     noteKo:
//       "※ 목적이 달라 홍보형(Type A)과 학습형(Type B)으로 구분 운영 권장\n※ Type B는 총 러닝타임이 길어도 템플릿 반복 구조를 반영한 환산 제작분 기준",
//     badge: "Type A / Type B / Modular",
//   },
//   {
//     category: "Fashion",
//     titleKo: "패션 시즌 룩북 필름 패키지",
//     descKo:
//       "시즌 컬렉션의 무드, 실루엣, 질감, 브랜드 스토리를 전달하는 룩북 영상 패키지입니다. 룩북, 캠페인, 소셜에서 함께 활용 가능한 파생 자산까지 포함할 수 있습니다.",
//     badge: "Lookbook / Campaign / Social",
//   },
//   {
//     category: "Entertainment",
//     titleKo: "엔터 · 웹드라마 / 영화 패키지",
//     descKo:
//       "웹드라마 및 영화의 티저, 예고편, 프로모션 영상 자산을 패키지형으로 제공하는 상품입니다. 공개 일정에 맞춰 메인 예고 자산과 파생 프로모션 자산을 함께 구성하여 초기 노출 효율을 높입니다.",
//     badge: "Teaser / Trailer / Promotion",
//   },
//   {
//     category: "Finance",
//     titleKo: "금융 · 보험 패키지",
//     descKo:
//       "금융·보험사의 브랜딩, 상품 안내, 고객 커뮤니케이션 목적에 맞춰 설계된 패키지입니다. 표현 정확성과 준법 검토를 고려한 진행 구조로 실무 수정 부담을 줄입니다.",
//     noteKo:
//       "※ 준법/컴플라이언스 검토 추가 라운드, 문구 구조 변경은 추가금 별도",
//     badge: "Compliance / Accuracy / Trust",
//   },
//   {
//     category: "HR / Internal",
//     titleKo: "인사 교육 영상 패키지",
//     descKo:
//       "인사 및 교육팀의 반복 제작 수요에 맞춘 내부 교육 영상 패키지입니다. 온보딩, 필수교육, 직무교육, 리더십 교육을 템플릿화하여 빠르고 일관성 있게 제작할 수 있습니다.",
//     badge: "Onboarding / L&D / Internal",
//   },
//   {
//     category: "Healthcare",
//     titleKo: "헬스케어 관련 패키지",
//     descKo:
//       "헬스케어 서비스, 기관, 솔루션의 소개, 안내, 설명 목적에 맞춘 영상 패키지입니다. 정확성과 신뢰성을 우선으로 설계하여 의료 및 전문가 검토가 필요한 환경에서도 안정적인 제작 프로세스를 제공합니다.",
//     noteKo:
//       "※ 전문가/법무 검토 추가 라운드 및 규정 민감 문구 재편집은 추가금 별도",
//     badge: "Reliable / Review-ready / Clear",
//   },
// ];

// export default function Concept9PackagesPage() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-white text-zinc-900">
//         <Link
//         href="/"
//         className="fixed left-6 top-6 z-50 inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950"
//         >
//         home
//         </Link>
//       {/* Background */}
//       <div className="pointer-events-none fixed inset-0 -z-10">
//         <div className="absolute left-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-300/30 blur-3xl" />
//         <div className="absolute right-[-120px] top-[60px] h-[380px] w-[380px] rounded-full bg-fuchsia-300/25 blur-3xl" />
//         <div className="absolute bottom-[-160px] left-[8%] h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />
//         <div className="absolute bottom-[8%] right-[8%] h-[260px] w-[260px] rounded-full bg-violet-300/20 blur-3xl" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.94),rgba(248,250,252,0.95),rgba(255,255,255,0.98))]" />
//       </div>

//       {/* Header */}
//       <header className="sticky top-0 z-40 border-b border-white/50 bg-white/75 backdrop-blur-xl">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
//           <Link href="/concept-9" className="flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-gradient-to-br from-white via-sky-50 to-fuchsia-50 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
//               <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 bg-clip-text text-sm font-black text-transparent">
//                 V3
//               </span>
//             </div>
//             <div>
//               <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
//                 Premium AI Production
//               </p>
//               <p className="text-lg font-semibold tracking-tight text-zinc-950">
//                 Vision3
//               </p>
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-600 md:flex">
//             <Link href="/concept-9" className="transition hover:text-zinc-950">
//               Home
//             </Link>
//             <Link
//               href="/concept-9/packages"
//               className="transition hover:text-zinc-950"
//             >
//               Packages
//             </Link>
//             <Link
//               href="/concept-9/support"
//               className="transition hover:text-zinc-950"
//             >
//               Support
//             </Link>
//           </nav>

//           <Link
//             href="/concept-9/support"
//             className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//           >
//             Contact
//           </Link>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="pb-10 pt-16 lg:pb-14 lg:pt-20">
//         <div className="mx-auto max-w-7xl px-6 lg:px-10">
//           <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/75 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-2xl md:p-10">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_right_bottom,rgba(217,70,239,0.16),transparent_26%)]" />
//             <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
//               <div className="max-w-4xl">
//                 <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
//                   Package Lineup
//                 </p>
//                 <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
//                   산업별 목적에 맞춘
//                   <br />
//                   Premium Production Packages
//                 </h1>
//                 <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-600 md:text-base">
//                   런칭, 업데이트, 브랜딩, 교육, 안내, 프로모션 등 실제 목적에
//                   맞게 패키지 구조를 분리했습니다. 빠른 제작만이 아니라, 연출
//                   품질과 집행 가능성을 함께 확보하는 방향으로 설계했습니다.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   href="/concept-9"
//                   className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   메인으로
//                 </Link>
//                 <Link
//                   href="/concept-9/support"
//                   className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   고객센터
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cards */}
//       <section className="pb-24">
//         <div className="mx-auto max-w-7xl px-6 lg:px-10">
//           <div className="grid gap-6 xl:grid-cols-2">
//             {packages.map((item) => (
//               <article
//                 key={item.titleKo}
//                 className="overflow-hidden rounded-[32px] border border-white/80 bg-white/82 shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-xl"
//               >
//                 {/* Visual Placeholder */}
//                 <div className="relative h-64 w-full overflow-hidden border-b border-white/70 bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 md:h-72">
//                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_28%)]" />

//                   <div className="absolute left-5 top-5 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600 backdrop-blur">
//                     Image Area
//                   </div>

//                   <div className="absolute inset-0 flex items-center justify-center px-6">
//                     <div className="flex h-[78%] w-full max-w-[86%] items-center justify-center rounded-[28px] border-2 border-dashed border-zinc-300/80 bg-white/55 backdrop-blur-sm">
//                       <div className="text-center">
//                         <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
//                           Visual Placeholder
//                         </p>
//                         <p className="mt-3 text-lg font-bold text-zinc-700 md:text-xl">
//                           패키지 이미지 영역
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
//                         {item.category}
//                       </p>
//                       <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950 md:text-3xl">
//                         {item.titleKo}
//                       </h2>
//                     </div>

//                     <span className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-[11px] font-bold text-white md:inline-flex">
//                       {item.badge}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 md:p-7">
//                   <div className="mb-5 md:hidden">
//                     <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-xs font-bold text-white">
//                       {item.badge}
//                     </span>
//                   </div>

//                   <div className="rounded-[24px] border border-white/80 bg-white/90 p-5">
//                     <p className="text-sm leading-8 text-zinc-700">{item.descKo}</p>

//                     {item.noteKo && (
//                       <p className="mt-4 whitespace-pre-line text-xs leading-6 text-zinc-500">
//                         {item.noteKo}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
