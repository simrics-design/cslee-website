import { CurrentYear } from "./current-year";

const experiences = [
  ["공장 설립과 가동 준비", "공장 구축, 장비 설치, 생산 준비와 현장 운영에 필요한 기본 체계를 마련했습니다."],
  ["현지 인력과 조직 운영", "현지 직원을 채용하고 교육하며, 역할과 책임이 명확한 업무 방식을 만들어 왔습니다."],
  ["운영 기준과 문제 해결", "생산, 품질, 자재와 관리 업무에서 반복되는 문제를 기준과 기록으로 정리했습니다."],
  ["해외영업과 시장 개척", "기존 해외 거래처를 관리하고 새로운 시장과 잠재 파트너를 조사하고 있습니다."],
];

const currentWork = [
  ["해외영업과 신규 시장 개척", "기존 거래처를 관리하고 새로운 국가와 잠재 파트너를 조사합니다."],
  ["인도 제조 현장 경험 정리", "공장 설립과 운영 과정에서 얻은 판단 기준을 글과 자료로 남깁니다."],
  ["경험을 운영 체계로 바꾸기", "개인의 노하우를 다른 사람도 실행할 수 있는 기준과 문서로 정리합니다."],
];

const notes = [
  ["공장 설립은 ‘가동 이후’부터 거꾸로 설계해야 한다", "건물과 설비보다 먼저, 누가 어떤 기준으로 매일 운영할지를 정해야 합니다.", "새 공장은 눈에 보이는 설비부터 시작하기 쉽습니다. 그러나 실제 가동을 좌우하는 것은 자재의 흐름, 작업 기준, 품질 확인, 교육과 보고 방식입니다. 설립 단계에서 운영의 하루를 미리 그려 보면 뒤늦은 수정과 혼선을 크게 줄일 수 있습니다."],
  ["운영 기준은 문서보다 반복 가능성에서 완성된다", "좋은 절차서는 같은 행동을 반복하고 문제의 원인을 찾을 수 있게 해야 합니다.", "문서가 많다고 시스템이 강한 것은 아닙니다. 담당자가 바뀌어도 같은 품질을 만들 수 있는지, 이상이 생겼을 때 기록을 따라 원인을 찾을 수 있는지가 더 중요합니다. 기준은 짧고 명확하게 만들고, 교육과 점검을 통해 현장의 습관으로 정착시켜야 합니다."],
  ["현지 조직은 본사 방식의 복사본이 아니다", "같은 목표를 공유하되 현지 문화 안에서 실행할 수 있는 방식을 함께 만들어야 합니다.", "기준은 분명해야 하지만 전달 방식까지 본사와 같을 필요는 없습니다. 무엇을 반드시 지켜야 하는지와 현지에서 판단할 수 있는 범위를 구분하면 책임과 자율성이 함께 생깁니다. 조직 운영은 통제보다 이해 가능한 기준을 만드는 일에 가깝습니다."],
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "이창섭",
    alternateName: "CS Lee",
    url: "https://www.cslee.net/",
    sameAs: ["https://www.linkedin.com/in/changsub-lee/"],
    knowsAbout: ["인도 제조공장 설립", "해외 법인 운영", "제조 조직 관리", "해외영업", "신규 시장 개척"],
    author: { "@type": "Book", name: "인도 공장 설립하고 운영하기", datePublished: "2024", inLanguage: "ko" },
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <a className="skip-link" href="#main">본문으로 건너뛰기</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="CS Lee 홈으로 이동">CS<span>.</span></a>
      <nav aria-label="주요 메뉴">
        <a href="#about">소개</a><a href="#experience">경험</a><a href="#now">지금</a><a href="#notes">현장 노트</a><a href="#book">책</a>
      </nav>
      <a className="header-link" href="#connect">상담 <span aria-hidden="true">↗</span></a>
    </header>
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> 이창섭 · CS Lee / INDIA MANUFACTURING &amp; FIELD NOTES</p>
          <h1 id="hero-title">현장에서 배운 것을<br /><em>기록하고</em><br />나눕니다.</h1>
          <p className="hero-description">인도에서 제조공장을 설립하고 조직을 운영한 경험을 바탕으로, 현장의 시행착오를 다음 실행에 도움이 되는 실용적인 지식으로 정리합니다.</p>
          <div className="hero-actions"><a className="button button-primary" href="#experience">나의 경험 보기 <span>↓</span></a><a className="text-link" href="#notes">현장 노트 읽기 <span>↗</span></a></div>
        </div>
        <div className="hero-visual reveal" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="globe"><div className="globe-lat lat-one" /><div className="globe-lat lat-two" /><div className="globe-lat lat-three" /><div className="globe-long long-one" /><div className="globe-long long-two" /><div className="globe-long long-three" /><span className="point point-seoul" /><span className="point point-delhi" /><span className="point point-singapore" /></div>
          <div className="visual-label label-a">OBSERVE<br />AND RECORD</div><div className="visual-label label-b">PRACTICAL<br />KNOWLEDGE</div><div className="visual-stamp">CS<br />LEE</div>
        </div>
      </section>

      <section className="intro section-pad" id="about" aria-labelledby="about-title">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="intro-grid"><h2 id="about-title">공장을 세우는 일부터<br /><strong>조직을 움직이는 일까지.</strong></h2><div className="intro-copy">
          <p>2016년부터 인도 현지에서 제조공장 설립 준비, 장비 설치, 인력 채용과 교육, 생산 및 조직 운영을 담당했습니다.</p>
          <p>서로 다른 문화와 업무 방식 속에서 본사의 기준을 현지에서 실행 가능한 방식으로 바꾸고, 사람의 경험에 머물던 업무를 반복 가능한 운영 체계로 정착시키는 일을 해 왔습니다.</p>
          <p>공장 설립과 운영, 그리고 운영을 마무리하는 과정에서 배운 내용을 바탕으로 2024년 『인도 공장 설립하고 운영하기』를 출간했습니다. 현재는 해외영업과 신규 시장 개척 업무를 수행하고 있습니다.</p>
          <div className="signature">CHANG SUB LEE · FIELD OPERATOR &amp; AUTHOR</div>
        </div></div>
      </section>

      <section className="experience section-pad" id="experience" aria-labelledby="experience-title">
        <div className="section-head"><div><div className="section-kicker">02 / EXPERIENCE</div><h2 id="experience-title">현장에서 맡아 온<br />네 가지 역할</h2></div><p>계획을 실제 현장에 옮기고, 사람이 바뀌어도 유지되는 기준을 만드는 일에 집중해 왔습니다.</p></div>
        <div className="card-grid">{experiences.map(([title, body], i) => <article className="info-card" key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="now section-pad" id="now" aria-labelledby="now-title">
        <div className="section-kicker">03 / NOW</div><div className="split-head"><h2 id="now-title">지금은 이 경험을<br /><strong>다음 일로 연결하고 있습니다.</strong></h2><p>현재의 업무와 기록은 다음 세 가지 방향에 초점을 두고 있습니다.</p></div>
        <ol className="now-list">{currentWork.map(([title, body], i) => <li key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
      </section>

      <section className="focus section-pad" id="notes" aria-labelledby="notes-title">
        <div className="section-head"><div><div className="section-kicker">04 / FIELD NOTES</div><h2 id="notes-title">현장에서 얻은 생각을<br />짧은 노트로 남깁니다.</h2></div><p>각 노트의 제목을 누르면 상세 내용이 펼쳐집니다.</p></div>
        <div className="focus-list">{notes.map(([title, summary, body], i) => <details className="focus-item" key={title}><summary><span className="focus-no">{String(i + 1).padStart(2, "0")}</span><span className="note-copy"><strong>{title}</strong><small>{summary}</small></span><span className="focus-arrow" aria-hidden="true">＋</span></summary><p className="note-body">{body}</p></details>)}</div>
      </section>

      <section className="book section-pad" id="book" aria-labelledby="book-title">
        <div className="section-kicker light">05 / BOOK</div><div className="book-heading"><span>BOOK · 2024</span><h2 id="book-title">현장에서 배운 경험을<br /><em>한 권의 책으로</em><br />정리했습니다.</h2></div>
        <div className="book-grid"><img className="book-cover" src="/book-cover.jpg" alt="『인도 공장 설립하고 운영하기』 실제 책 표지" width="769" height="1080" /><div className="book-copy"><h3>『인도 공장 설립하고 운영하기』</h3><p>인도에서 제조공장을 설립하고 운영하며 직접 겪은 시행착오와 실무 경험을 정리한 책입니다.</p><p>공장 설립 준비부터 현지 인력 채용과 교육, 생산과 품질 관리, 조직 운영까지 인도 제조 현장에서 실무자가 마주하게 되는 주요 과제와 판단 기준을 담았습니다.</p><p>인도 진출을 준비하는 기업과 현지 공장 또는 법인 운영을 맡은 실무자에게 실제 현장을 이해하는 데 도움이 되는 내용을 전하고자 했습니다.</p><aside><strong>책 안내</strong><p>책은 교보문고, YES24, 알라딘 등 주요 온라인 서점에서 제목으로 검색하실 수 있습니다.</p></aside></div></div>
      </section>

      <section className="connect section-pad" id="connect" aria-labelledby="connect-title">
        <div className="section-kicker">06 / CONNECT</div><div className="connect-row"><h2 id="connect-title">현장의 경험을<br /><em>좋은 대화로</em><br />이어갑니다.</h2><div className="connect-card"><p>인도 공장 설립과 현지 조직 운영, 해외시장 개척 또는 책과 이곳의 기록에 관해 이야기를 나누고 싶다면 이메일이나 LinkedIn으로 연락해 주세요.</p><div className="contact-links"><a className="button button-dark" href="mailto:simrics@gmail.com">simrics@gmail.com <span>↗</span></a><a className="button button-outline" href="https://www.linkedin.com/in/changsub-lee/" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a></div><small>연락은 이메일 또는 LinkedIn을 이용해 주세요.</small></div></div>
      </section>
    </main>
    <footer><span>© <CurrentYear /> 이창섭 · CS Lee</span><span>Built with clarity, for meaningful work.</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
