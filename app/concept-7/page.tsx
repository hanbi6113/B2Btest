// app/concept-7/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PackageItem = {
  id: string;
  category: string;
  title: string;
  desc: string;
  preview: string;
  mood: string;
  deliverables: string[];
  keywords: string[];
  accent: string;
  accentSoft: string;
  accentBorder: string;
  accentBg: string;
  panelBg: string;
  pageGlow: string;
};

const packages: PackageItem[] = [
  {
    id: "game-launch",
    category: "GAME",
    title: "게임 IP 런칭 티저 패키지",
    desc: "신작 공개, 사전예약, 출시 초반 캠페인에 필요한 핵심 티저 자산을 패키지 형태로 제공하는 상품입니다. Vision3의 AI-native 제작 파이프라인과 연출 디렉션을 결합하여, 세계관 전달력과 집행 속도를 동시에 확보합니다.",
    preview: "Launch Teaser Preview",
    mood: "세계관 · 임팩트 · 런칭 모멘텀",
    deliverables: ["메인 티저 필름", "사전예약 숏폼", "런칭 컷다운", "키 비주얼 모션"],
    keywords: ["impact", "launch", "worldbuilding"],
    accent: "text-violet-200",
    accentSoft: "text-violet-200/70",
    accentBorder: "border-violet-300/20",
    accentBg: "bg-violet-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.32),transparent_34%),linear-gradient(180deg,#0b1020_0%,#0a1120_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_20%),linear-gradient(180deg,#05070d_0%,#0a0f18_100%)]",
  },
  {
    id: "game-liveops",
    category: "GAME",
    title: "게임 라이브옵스 / 업데이트 패키지",
    desc: "업데이트·이벤트·운영 공지성 영상 자산을 월 단위로 안정 공급하는 패키지입니다. 템플릿 기반 반복 제작 구조를 통해 운영팀의 콘텐츠 생산 부담과 납기 리스크를 줄입니다.",
    preview: "LiveOps Update Preview",
    mood: "반복 운영 · 빠른 납기 · 안정 공급",
    deliverables: ["업데이트 공지 영상", "이벤트 예고 숏폼", "운영형 모션 템플릿", "월간 반복 자산"],
    keywords: ["repeatable", "update", "template"],
    accent: "text-cyan-200",
    accentSoft: "text-cyan-200/70",
    accentBorder: "border-cyan-300/20",
    accentBg: "bg-cyan-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.28),transparent_34%),linear-gradient(180deg,#07131d_0%,#0a1720_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_20%),linear-gradient(180deg,#05070d_0%,#0a1018_100%)]",
  },
  {
    id: "beauty",
    category: "BEAUTY",
    title: "뷰티 신제품 런칭 숏폼 패키지",
    desc: "신제품 런칭 초기에 필요한 핵심 숏폼 자산을 빠르게 구성하는 패키지입니다. 브랜드 무드와 제품 USP를 균형 있게 반영하여 SNS 및 광고 집행 준비 시간을 줄입니다.",
    preview: "Beauty Launch Preview",
    mood: "제품 무드 · 감도 · 숏폼 전개",
    deliverables: ["런칭 숏폼", "제품 USP 컷", "SNS 광고형 영상", "브랜드 무드 클립"],
    keywords: ["beauty", "mood", "shortform"],
    accent: "text-pink-200",
    accentSoft: "text-pink-200/70",
    accentBorder: "border-pink-300/20",
    accentBg: "bg-pink-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.30),transparent_34%),linear-gradient(180deg,#170a14_0%,#1b0d18_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_20%),linear-gradient(180deg,#05070d_0%,#0c0b14_100%)]",
  },
  {
    id: "edu",
    category: "EDU",
    title: "이러닝 · 에듀 관련 패키지",
    desc: "교육 서비스 홍보와 실제 학습용 콘텐츠 제작을 목적별로 분리 설계한 패키지입니다. 수강자 유입용 홍보 자산부터 마이크로러닝 영상 모듈까지 단계적으로 구성할 수 있습니다.",
    preview: "Education Content Preview",
    mood: "명확한 전달 · 구조화 · 학습 효율",
    deliverables: ["홍보형 영상", "학습 모듈 영상", "강의형 반복 템플릿", "마이크로러닝 클립"],
    keywords: ["clarity", "learning", "module"],
    accent: "text-sky-200",
    accentSoft: "text-sky-200/70",
    accentBorder: "border-sky-300/20",
    accentBg: "bg-sky-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.30),transparent_34%),linear-gradient(180deg,#08131d_0%,#091821_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_22%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_20%),linear-gradient(180deg,#05070d_0%,#091019_100%)]",
  },
  {
    id: "fashion",
    category: "FASHION",
    title: "패션 시즌 룩북 필름 패키지",
    desc: "시즌 컬렉션의 무드, 실루엣, 질감, 브랜드 스토리를 전달하는 룩북 영상 패키지입니다. 룩북·캠페인·소셜에서 함께 활용 가능한 파생 자산까지 포함할 수 있습니다.",
    preview: "Lookbook Film Preview",
    mood: "실루엣 · 질감 · 시즌 무드",
    deliverables: ["룩북 필름", "캠페인 컷다운", "소셜 클립", "브랜드 스토리 무드컷"],
    keywords: ["lookbook", "texture", "season"],
    accent: "text-amber-200",
    accentSoft: "text-amber-200/70",
    accentBorder: "border-amber-300/20",
    accentBg: "bg-amber-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.28),transparent_34%),linear-gradient(180deg,#171107_0%,#1b1408_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_22%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.08),transparent_20%),linear-gradient(180deg,#05070d_0%,#100d0b_100%)]",
  },
  {
    id: "ent",
    category: "ENT",
    title: "엔터 · 웹드라마 / 영화 패키지",
    desc: "웹드라마와 영화의 티저·예고편·프로모션 영상 자산을 패키지형으로 제공하는 상품입니다. 공개 일정에 맞춰 메인 예고 자산과 파생 프로모션 자산을 함께 구성합니다.",
    preview: "Entertainment Trailer Preview",
    mood: "서사 · 예고 · 공개 전 집중도",
    deliverables: ["티저", "메인 예고편", "프로모션 컷다운", "공개 일정형 자산"],
    keywords: ["trailer", "narrative", "promotion"],
    accent: "text-rose-200",
    accentSoft: "text-rose-200/70",
    accentBorder: "border-rose-300/20",
    accentBg: "bg-rose-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(251,113,133,0.28),transparent_34%),linear-gradient(180deg,#15090d_0%,#190c11_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(251,113,133,0.14),transparent_22%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_20%),linear-gradient(180deg,#05070d_0%,#100a12_100%)]",
  },
  {
    id: "finance",
    category: "FINANCE",
    title: "금융 · 보험 패키지",
    desc: "금융·보험사의 브랜딩, 상품안내, 고객 커뮤니케이션 목적에 맞춰 설계된 패키지입니다. 표현 정확성과 준법 검토를 고려한 진행 구조로 실무 수정 부담을 줄입니다.",
    preview: "Finance Communication Preview",
    mood: "정확성 · 신뢰 · 안정적인 전달",
    deliverables: ["브랜딩 영상", "상품 안내 영상", "고객 커뮤니케이션 영상", "설명형 자산"],
    keywords: ["trust", "accuracy", "compliance"],
    accent: "text-emerald-200",
    accentSoft: "text-emerald-200/70",
    accentBorder: "border-emerald-300/20",
    accentBg: "bg-emerald-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.26),transparent_34%),linear-gradient(180deg,#071710_0%,#0a1a15_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_22%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_20%),linear-gradient(180deg,#05070d_0%,#09110f_100%)]",
  },
  {
    id: "hr",
    category: "HR",
    title: "인사 교육 영상 패키지",
    desc: "인사·교육팀의 반복 제작 수요에 맞춘 내부 교육 영상 패키지입니다. 온보딩·필수교육·직무교육·리더십 교육을 템플릿화하여 빠르고 일관성 있게 제작할 수 있습니다.",
    preview: "HR Training Preview",
    mood: "반복 교육 · 일관성 · 내부 운영",
    deliverables: ["온보딩 영상", "필수 교육 템플릿", "직무교육 영상", "리더십 교육 자산"],
    keywords: ["internal", "training", "consistency"],
    accent: "text-teal-200",
    accentSoft: "text-teal-200/70",
    accentBorder: "border-teal-300/20",
    accentBg: "bg-teal-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.28),transparent_34%),linear-gradient(180deg,#071514_0%,#0a1818_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.14),transparent_22%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_20%),linear-gradient(180deg,#05070d_0%,#091012_100%)]",
  },
  {
    id: "healthcare",
    category: "HEALTHCARE",
    title: "헬스케어 관련 패키지",
    desc: "헬스케어 서비스·기관·솔루션의 소개·안내·설명 목적에 맞춘 영상 패키지입니다. 정확성과 신뢰성을 우선으로 설계하여 전문가 검토가 필요한 환경에서도 안정적인 제작 프로세스를 제공합니다.",
    preview: "Healthcare Content Preview",
    mood: "정확성 · 설명력 · 전문 검토 대응",
    deliverables: ["소개 영상", "안내형 영상", "설명형 콘텐츠", "전문 검토 대응 자산"],
    keywords: ["care", "precision", "expert review"],
    accent: "text-blue-200",
    accentSoft: "text-blue-200/70",
    accentBorder: "border-blue-300/20",
    accentBg: "bg-blue-300/10",
    panelBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.28),transparent_34%),linear-gradient(180deg,#08111e_0%,#091421_100%)]",
    pageGlow:
      "bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.14),transparent_22%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_20%),linear-gradient(180deg,#05070d_0%,#091019_100%)]",
  },
];

export default function Concept7Page() {
  const [selectedId, setSelectedId] = useState(packages[0].id);

  const selected = useMemo(
    () => packages.find((item) => item.id === selectedId) ?? packages[0],
    [selectedId]
  );

  return (
    <main className={`min-h-screen text-white ${selected.pageGlow}`}>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070d]/72 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">
          <div className="justify-self-start">
            <Link
              href="/"
              className="text-sm text-white/65 transition hover:text-white"
            >
              home
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <a
              href="#business"
              className="text-sm text-white/65 transition hover:text-white"
            >
              사업 소개
            </a>
            <a
              href="#packages"
              className="text-sm text-white/65 transition hover:text-white"
            >
              패키지 소개
            </a>
            <a
              href="#support"
              className="text-sm text-white/65 transition hover:text-white"
            >
              고객센터
            </a>
          </nav>

          <div className="justify-self-end">
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
              concept 7
            </span>
          </div>
        </div>
      </header>

      <section id="business" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className={`text-xs uppercase tracking-[0.28em] ${selected.accentSoft}`}>
            Vision3 B2B
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.08em] text-white md:text-7xl">
            business.vision3.ai
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
            하나의 레이아웃 안에서 산업군별 패키지에 맞춰 무드와 정보 구조가 전환되는
            인터랙티브 비즈니스 시안입니다.
          </p>

          <div id="packages" className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => {
              const active = item.id === selectedId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`rounded-[14px] border px-3 py-2 text-left transition ${
                    active
                      ? `${selected.accentBorder} ${selected.accentBg}`
                      : "border-white/10 bg-white/5 hover:border-white/18 hover:bg-white/8"
                  }`}
                >
                  <p
                    className={`text-[9px] uppercase tracking-[0.16em] ${
                      active ? selected.accentSoft : "text-white/38"
                    }`}
                  >
                    {item.category}
                  </p>

                  <p
                    className={`mt-1 text-[12px] font-medium leading-4 ${
                      active ? "text-white" : "text-white/76"
                    }`}
                  >
                    {item.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white/6 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
              <div
                className={`relative overflow-hidden rounded-[28px] border border-white/10 ${selected.panelBg}`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.20))]" />
                <div className="relative flex aspect-[16/10] flex-col justify-between p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] ${selected.accent}`}>
                      {selected.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-px w-12 bg-white/18" />
                      <p className={`text-xs uppercase tracking-[0.26em] ${selected.accentSoft}`}>
                        preview mood
                      </p>
                    </div>

                    <p className={`text-2xl font-semibold tracking-[-0.04em] md:text-3xl ${selected.accent}`}>
                      {selected.preview}
                    </p>

                    <p className="max-w-md text-sm leading-7 text-white/68">
                      {selected.mood}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap gap-3">
                {selected.keywords.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-4 py-2 text-sm ${selected.accentBorder} ${selected.accentBg} ${selected.accent}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 md:p-8">
            <p className={`text-xs uppercase tracking-[0.24em] ${selected.accentSoft}`}>
              selected package
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
              {selected.title}
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/72 md:text-base">
              {selected.desc}
            </p>

            <div className="mt-8 h-px w-full bg-white/10" />

            <div className="mt-8 grid gap-3">
              {selected.deliverables.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/6 px-5 py-4"
                >
                  <span className={`text-sm font-semibold ${selected.accent}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/84">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="support" className="mt-8 rounded-[30px] border border-white/10 bg-white/5 px-6 py-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className={`text-xs uppercase tracking-[0.22em] ${selected.accentSoft}`}>
                current selection
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {selected.title}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/72">
                {selected.category}
              </span>
              <span className={`rounded-full border px-4 py-2 text-sm ${selected.accentBorder} ${selected.accentBg} ${selected.accent}`}>
                {selected.mood}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}