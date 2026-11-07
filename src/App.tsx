import { useEffect, useState } from "react"
import katex from "katex"
import "katex/dist/katex.min.css"

const engines = [
  {
    number: "01",
    title: "Quimera Core",
    subtitle: "Cybernetic Immune System",
    description:
      "Automated mutation testing framework computing discrete Ollivier–Ricci curvature over control-flow graphs to trace failure propagation, paired with synthetic mRNA messaging and kernel telemetry.",
    stack: ["Rust", "JVM / Python / .NET", "io_uring", "Ollivier–Ricci"],
    tone: "cyan",
    metric: "CFG curvature analysis",
    featured: true,
  },
  {
    number: "02",
    title: "KineQuet / KineSQL",
    subtitle: "Distributed Storage Engine",
    description:
      "An append-only event sourcing engine running SQLite as an immutable commit log over a custom io_uring VFS with leaderless UDP gossip and Reed–Solomon FEC.",
    stack: ["C++23", "Rust", "SQLite VFS", "AVX2", "L-CRDTs"],
    tone: "violet",
    metric: "Zero-lost commit log",
    featured: true,
  },
  {
    number: "03",
    title: "Kineplex",
    subtitle: "Kinetic Stream Multiplexer",
    description:
      "Real-time telemetry and stream multiplexing on 64-byte cache-aligned lock-free ring buffers with diffeomorphism-based time synchronization.",
    stack: ["Rust", "LMAX Disruptor", "AVX-512", "Zero-Copy"],
    tone: "green",
    metric: "0.38 ms jitter",
  },
  {
    number: "04",
    title: "Synapse Protocol",
    subtitle: "Topological Routing",
    description:
      "High-frequency reconciliation with partition sharding parameterized by Fisher information metrics and game-theoretic equilibria.",
    stack: ["Rust", "Arrow IPC", "FlatBuffers", "Fisher Metric"],
    tone: "amber",
    metric: "Zero-copy transfer",
  },
  {
    number: "05",
    title: "Ephemeral Kinetic Cells",
    subtitle: "Transient Execution",
    description:
      "Isolated serverless micro-sandboxes with deterministic lineage, backed by Firecracker microVMs and bumpalo arena allocation.",
    stack: ["Rust", "Firecracker", "Bumpalo Arena"],
    tone: "violet",
    metric: "Sub-1 ms boot",
  },
  {
    number: "06",
    title: "Quimera Labs Anatomy",
    subtitle: "WebGPU Procedural Engine",
    description:
      "Interactive medical visualization and digital histopathology supporting 1,000+ clinical models and 5,000+ slides through direct WebGPU compute pipelines.",
    stack: ["WebGPU", "WGSL", "WebAssembly", "Three.js"],
    tone: "rose",
    metric: "5,000+ digital slides",
    wide: true,
  },
  {
    number: "07",
    title: "COBOL-Flow V5",
    subtitle: "AOT Compilers & bare-sql-engine",
    description:
      "Legacy COBOL to OpenAPI 3.0 and executable BDD via Keith Cooper SSA, alongside ahead-of-time in-memory SQL through Project Panama FFM.",
    stack: ["Java 21+", "Panama FFM", "Keith Cooper SSA", "OpenAPI 3.0"],
    tone: "blue",
    metric: "Zero JNI overhead",
    wide: true,
  },
  {
    number: "08",
    title: "Quimera Q128 Financial & Spark",
    subtitle: "Algebraic-Categorical Core & Catalyst UDT",
    description:
      "Exact 128-bit decimal arithmetic (QuimeraCategoricalDecimal & QDec128) in the D₁₆ Schreier fiber (q · 10¹⁶ + r) without IEEE 754 binary drift, paired with 64/128-bit fixed-point transcendentals (exp128, expFactor64, log1pFactor64, powFactor64) and 16-byte zero-heap columnar vectors (QDec128ColumnarVector, 5× more compact than BigDecimal) for massive B3/BACEN Spark processing.",
    stack: [
      "Scala 2.12",
      "Apache Spark 3.5",
      "QDec128 (RDX:RAX)",
      "Catalyst UDT",
      "Maven 2.0.0-RELEASE",
    ],
    tone: "cyan",
    metric: "5× compact · Zero-Heap O(1)",
    wide: true,
    repoUrl: "https://github.com/Quimera-Laboratory/quimera-q128-financial",
  },
  {
    number: "09",
    title: "Quimera SAC Pricing & Zero-Rounding",
    subtitle: "Tier-1 Core Banking & COSIF Accrual Engine",
    description:
      "Formal LaTeX-specified daily interest appropriation (ZeroRoundingDailyAccrualEngine) in Java 17 guaranteeing 0.00-cent divergence (ABNT NBR 5891 ℛ₂) against closed-period compounding across 252, 360, and 365 bases with 6 COSIF invariants (I₁…I₆). Validated over 35-year worst-case horizons (N = 420 months / 12,600 days) with 14.15×–363.50× JMH speedup and 811×–1,682× lower GC memory pressure.",
    stack: [
      "Java 17",
      "ZeroRoundingDailyAccrualEngine",
      "BACEN / COSIF / B3",
      "ABNT NBR 5891",
      "OpenJDK JMH 1.37",
    ],
    tone: "amber",
    metric: "0.00 cent error · 363.5× faster",
    wide: true,
    repoUrl: "https://github.com/Quimera-Laboratory/quimera-sac-pricing-calculator",
  },
]

const publications = [
  {
    field: "q-fin.CP / math.NA",
    venue: "Quimera Quantitative Monograph · Nov 2026",
    title:
      "Accrual Functors, Grothendieck Fibrations, and Schreier 128-Bit Decimal Extensions (QDec128): An O(1) Algebraic Architecture for Massive Indexer Valuation under BACEN and B3 Standards",
    authors: "Gemirson dos Santos Silva · Quimera Labs",
    abstract:
      "Unified O(1) valuation architecture for portfolios of N = 4 × 10⁷ active contracts under BACEN and B3/Cetip 16-decimal step-truncation axioms. Formalizes the financial calendar as a free category Free(G_D) evaluated via division-free Disjoint Sparse Tables (hardware LZCNT), 4th-order nilpotent Taylor jet homomorphisms in ℝ[ε]/(ε⁵) with Kahan–Babuška–Neumaier compensation (ℰ_total < 3.98 × 10⁻¹⁴), Grothendieck fibrations (ℛ_tail ∘ 𝒞_macro ∘ ℒ_head) eliminating 100% of runtime pow() calls, and QDec128—a register-resident 128-bit radix-10¹⁶ central Schreier extension operating in 28–45 ms with zero heap allocation.",
    formula: String.raw`0 \longrightarrow \mathbb{Z}_{64} \xrightarrow{\;\iota\;} \mathbb{D}_{16}^{(128)} \xrightarrow{\pi_{\mathrm{mod}}} \mathbb{Z}/10^{16}\mathbb{Z} \longrightarrow 0
      \qquad
      \Phi_{[a,b)}^{(d^*)} = \mathcal{T}_8\!\left(\mathcal{L}_{\mathrm{head}}^{(d^*)}(a)\cdot\mathcal{C}_{\mathrm{macro}}^{(d^*)}(m_a\!+\!1,m_b)\cdot\mathcal{R}_{\mathrm{tail}}^{(d^*)}(b)\right)`,
    pdfUrl:
      "/papers/Accrual-Functors-Temporal-Fibrations-and-Schreier-128-Bit-Decimal-Extensions.pdf",
    repoUrl:
      "https://github.com/Quimera-Laboratory/quimera-q128-financial",
  },
  {
    field: "q-fin.CP / cs.PF",
    venue: "Core Banking & COSIF Specification · Oct 2026",
    title:
      "Modelagem Matemática para Eliminação de Erros de Arredondamento na Apropriação Diária de Juros (Zero-Rounding Daily Accrual & SAC Pricing)",
    authors: "Gemirson dos Santos Silva · Quimera Quantitative Systems Group",
    abstract:
      "Formal mathematical specification and Java 17 + Q128 implementation (ZeroRoundingDailyAccrualEngine & BigDecimalSacReferenceEngine) proving the exact equivalence between Dual-State Telescopic Differential and Financial Kahan–Bresenham Sub-Cent Residue Accumulation under ABNT NBR 5891 (ℛ₂) and BACEN/COSIF rules. Enforces 6 formal invariants (I₁…I₆) with 0.00-cent divergence across 252, 360, and 365 bases over worst-case 35-year SAC schedules (N = 420 months / 12,600 days, R$ 1,000,000.00/420), achieving 14.15×–363.50× JMH 1.37 speedup and 811×–1,682× heap allocation reduction.",
    formula: String.raw`P_0 + \sum_{k=1}^{t}\left(L_k + \Delta E_k\right) = S_t^{\mathrm{cont}} = \mathcal{R}_2\!\left(S_t^*\right),
      \qquad |R_t| \le 0.005,
      \qquad \Delta_{\mathrm{COSIF}}\!\left(N=420\right) = 0.00\,\mathrm{cent}`,
    pdfUrl:
      "/papers/Modelagem-Matematica-de-Apropriacao-Diaria-de-Juros-sem-Erro-de-Arredondamento.pdf",
    repoUrl:
      "https://github.com/Quimera-Laboratory/quimera-sac-pricing-calculator",
  },
  {
    field: "cs.DC / cs.PF",
    venue: "WJAIRR / SSRN · 2026",
    title:
      "Decentralized Topological Routing for High-Frequency Data Reconciliation: An Approach via Mechanical Sympathy",
    authors: "Gemirson dos Santos Silva",
    abstract:
      "Design, empirical benchmark, and formal verification of the KineQuet architecture. Deterministic Jump Consistent Hash partitioning and zero-copy Apache Arrow layouts reconcile 200 million transactional records in 11.08 seconds with 161 MB RAM per process.",
    formula: String.raw`T_{\mathrm{reconcile}}\!\left(2 \times 10^8\right) = 11.08\,\mathrm{s}
      \qquad \mathrm{RAM} \leq 161\,\mathrm{MB}`,
  },
  {
    field: "q-fin.CP / math.NA",
    venue: "SSRN Research Monograph · 2026",
    title:
      "Arithmetic Gradient Model for Approximating Seasonal/Irregular Cash Flows",
    authors: "Gemirson dos Santos Silva",
    abstract:
      "A generalized mathematical model adapting classical arithmetic gradient formulations to irregular and seasonal multi-period cash-flow dynamics, establishing sub-centile numerical bounds and uniform convergence.",
    formula: String.raw`P = A\!\left[\frac{(1+i)^n-1}{i(1+i)^n}\right]
      + \frac{G}{i}\!\left[\frac{(1+i)^n-1}{i(1+i)^n}-\frac{n}{(1+i)^n}\right]`,
  },
  {
    field: "math.DS / physics.soc-ph",
    venue: "SIAM MMS · Submitted 2026",
    title:
      "Urban Population Dynamics via Elastic Carrying Capacity and Saturable Social Friction",
    authors: "Gemirson dos Santos Silva · João Frederico Meyer",
    abstract:
      "A multiscale continuous-discrete framework replacing classical logistic carrying capacity with an elastic formulation coupled to Holling Type II responses and weighted graph-Laplacian diffusion.",
    formula: String.raw`\frac{\partial u_i}{\partial t}
      = r_i u_i\!\left(1-\frac{u_i}{K_i(u,t)}\right)
      - \sum_{j\in\mathcal{N}(i)} L_{ij}\,
      \frac{\alpha_{ij}u_j}{1+\beta_{ij}\tau_{ij}u_j}`,
  },
  {
    field: "cs.DC / cs.DS",
    venue: "ACM TOCS Preprint · QL-2026-DC02",
    title:
      "Lock-Free Invariant Enforcement and Sub-Millisecond Event Sourcing over io_uring VFS",
    authors: "Gemirson dos Santos Silva · Quimera Distributed Systems Group",
    abstract:
      "Formal verification and empirical benchmarking of an append-only storage engine coupled to Linux io_uring and L-CRDT state primitives, converging under 35% packet loss.",
    formula: String.raw`\sum_{k=1}^{M}\Delta b_k(s)\equiv 0
      \qquad\land\qquad
      \operatorname{rank}\!\left(G_{\mathrm{FEC}}\mathbf{m}_p\right)=k_{\mathrm{sym}}`,
  },
  {
    field: "math.DG / cs.NI",
    venue: "Differential Geometry & Network Topology · 2026",
    title:
      "Synaptic Topological Routing under Riemannian Metric and Fisher Information Invariants",
    authors: "Gemirson dos Santos Silva · Quimera Cybernetic Research Lab",
    abstract:
      "Self-balancing network topologies based on discrete Ollivier–Ricci curvature bounds and Fisher information metric tensors with Pareto-optimal message flow.",
    formula: String.raw`\kappa(x,y)
      = 1-\frac{W_1(m_x,m_y)}{d(x,y)}
      \geq \kappa_0 > 0`,
  },
  {
    field: "q-fin.CP / cs.PF",
    venue: "SIAM Financial Mathematics · QL-2026-QF04",
    title:
      "Sub-Centile Financial Accounting and Deterministic Floating-Point Drift Elimination",
    authors: "Gemirson dos Santos Silva · Quimera Quantitative Systems Group",
    abstract:
      "Axiomatic formalization of continuous financial reconciliation eliminating rounding residuals with scaled arbitrary-precision integers and idempotent event algebras.",
    formula: String.raw`\lim_{N\to\infty}\sum_{n=1}^{N}
      \left(\mathcal{Q}(x_n)-\pi_0(x_n)\right)=0
      \qquad \delta_{\mathrm{drift}}<10^{-18}`,
  },
]

const pillars = [
  [
    "01",
    "Cybernetic Immune Systems",
    "Automated fault injection, kernel event interception, and adaptive mutation over JVM bytecode, Python internals, and .NET.",
  ],
  [
    "02",
    "Distributed Consensus & Storage",
    "Append-only commit logs, custom SQLite VFS over io_uring, L-CRDTs, UDP gossip, and Reed–Solomon FEC.",
  ],
  [
    "03",
    "Topological Routing",
    "Zero-copy Arrow IPC and FlatBuffers, Fisher information sharding, and transient Firecracker micro-runtimes.",
  ],
  [
    "04",
    "AOT Transpilation",
    "Mainframe modernization through Keith Cooper SSA and in-memory SQLite execution via Java 21+ Project Panama.",
  ],
  [
    "05",
    "Procedural Simulation",
    "Interactive clinical 3D visualization, digital histopathology, and biomechanical simulation with WebGPU and WGSL.",
  ],
  [
    "06",
    "Bio-Inspired Computing",
    "Multiscale stochastic modeling, synthetic mRNA signaling, stigmergy, and decentralized swarm coordination.",
  ],
]

const stack = [
  [
    "Systems & low-level",
    "Rust · C++20/23 · Linux Kernel · io_uring · eBPF · AVX2 / AVX-512",
  ],
  [
    "Managed runtimes",
    "Java 17/21+ · Scala 2.12 · Apache Spark 3.5 (Catalyst) · Panama FFM · Disruptor · .NET 8/9",
  ],
  [
    "Quantitative & Core Banking",
    "QDec128 (D₁₆ Schreier Fiber) · ZeroRoundingDailyAccrualEngine · B3 / BACEN COSIF · ABNT NBR 5891",
  ],
  [
    "Storage & databases",
    "In-memory SQLite VFS · DuckDB · PostgreSQL / Citus · Apache Parquet",
  ],
  [
    "IPC & serialization",
    "Apache Arrow IPC · FlatBuffers · Protocol Buffers · zero-copy shared memory",
  ],
  [
    "Graphics & simulation",
    "WebGPU · WebAssembly · Three.js · GLSL / WGSL compute shaders",
  ],
  [
    "Infrastructure",
    "Firecracker microVMs · Docker · LocalStack · bare-metal Linux / RHEL",
  ],
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-icon">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.84a9.5 9.5 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function MathFormula({
  formula,
  displayMode = true,
}: {
  formula: string
  displayMode?: boolean
}) {
  const html = katex.renderToString(formula, {
    displayMode,
    throwOnError: false,
    strict: false,
    output: "html",
  })

  return (
    <span
      className={`math-render ${displayMode ? "is-display" : "is-inline"}`}
      aria-label={formula}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

function EngineIcon({ engine }: { engine: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  return (
    <span className="engine-icon" aria-hidden="true">
      <svg viewBox="0 0 32 32">
        {engine === "01" && (
          <>
            <path {...common} d="M16 3.5 26 7v7.4c0 6.4-4.2 11.3-10 14.1C10.2 25.7 6 20.8 6 14.4V7l10-3.5Z" />
            <circle {...common} cx="16" cy="12" r="2.2" />
            <circle {...common} cx="11.2" cy="18.6" r="1.5" />
            <circle {...common} cx="20.8" cy="18.6" r="1.5" />
            <path {...common} d="m14.7 13.8-2.5 3.5m5.1-3.5 2.5 3.5m-7.1 1.3h6.6" />
          </>
        )}
        {engine === "02" && (
          <>
            <ellipse {...common} cx="16" cy="7" rx="9.5" ry="3.5" />
            <path {...common} d="M6.5 7v7c0 1.9 4.3 3.5 9.5 3.5s9.5-1.6 9.5-3.5V7m-19 7v7c0 1.9 4.3 3.5 9.5 3.5s9.5-1.6 9.5-3.5v-7" />
            <path {...common} d="M11.5 12.2h.1m-.1 7h.1" />
          </>
        )}
        {engine === "03" && (
          <>
            <path {...common} d="M3.5 16h4l2.5-7 4.1 14 3.8-18 3.6 11h7" />
            <path {...common} d="M5 26.5h22M5 5.5h22" opacity=".35" />
          </>
        )}
        {engine === "04" && (
          <>
            <circle {...common} cx="16" cy="6" r="2.7" />
            <circle {...common} cx="7" cy="22.5" r="2.7" />
            <circle {...common} cx="25" cy="22.5" r="2.7" />
            <circle {...common} cx="16" cy="17" r="3.2" />
            <path {...common} d="m14.5 8.4-5.9 11.7m8.9-11.7 5.9 11.7M9.7 22h12.6M16 9v4.8" />
          </>
        )}
        {engine === "05" && (
          <>
            <path {...common} d="m16 3.8 10.5 6v12L16 28.2l-10.5-6.4v-12L16 3.8Z" />
            <path {...common} d="m5.8 10 10.2 6 10.2-6M16 16v12" />
            <path {...common} d="m11.5 7 10.2 6" opacity=".45" />
          </>
        )}
        {engine === "06" && (
          <>
            <path {...common} d="M16 4c-5.8 0-10.5 5-10.5 11.2 0 7.2 5.2 11.9 10.5 13.3 5.3-1.4 10.5-6.1 10.5-13.3C26.5 9 21.8 4 16 4Z" />
            <path {...common} d="M11 10.5c3 2.2 7 2.2 10 0M10.2 17c3.7-1.8 7.9-1.8 11.6 0M12.5 23c2.3-.8 4.7-.8 7 0" />
            <path {...common} d="M16 6.5v19" opacity=".5" />
          </>
        )}
        {engine === "07" && (
          <>
            <path {...common} d="m11.5 8-7 8 7 8m9-16 7 8-7 8M18.5 5l-5 22" />
            <path {...common} d="M8 4h16M8 28h16" opacity=".35" />
          </>
        )}
        {engine === "08" && (
          <>
            <rect {...common} x="5" y="5" width="22" height="22" rx="2" />
            <path {...common} d="M10 11h12M10 16h12M10 21h8" />
            <circle {...common} cx="21.5" cy="21" r="1.5" />
          </>
        )}
        {engine === "09" && (
          <>
            <path {...common} d="M5 25.5h22M7.5 21l5-5.5 4 3.5 7.5-9.5" />
            <circle {...common} cx="24" cy="9.5" r="2" />
            <path {...common} d="M7.5 9.5h6M7.5 13h4" opacity=".45" />
          </>
        )}
      </svg>
    </span>
  )
}

function RiemannManifold() {
  return (
    <svg
      className="riemann-manifold"
      viewBox="0 0 620 540"
      role="img"
      aria-labelledby="riemann-title riemann-description"
    >
      <title id="riemann-title">Riemannian manifold</title>
      <desc id="riemann-description">
        A curved mathematical surface represented by intersecting geodesic
        lines.
      </desc>
      <defs>
        <radialGradient id="manifold-field" cx="50%" cy="48%" r="52%">
          <stop offset="0" stopColor="#c8f65b" stopOpacity=".12" />
          <stop offset=".72" stopColor="#c8f65b" stopOpacity=".025" />
          <stop offset="1" stopColor="#c8f65b" stopOpacity="0" />
        </radialGradient>
        <filter id="geodesic-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="312" cy="273" rx="286" ry="232" fill="url(#manifold-field)" />

      <g className="manifold-grid manifold-latitudes">
        <path d="M42 194C128 112 220 116 306 202C393 288 483 314 578 250" />
        <path d="M35 226C126 147 218 151 305 229C393 308 487 337 588 282" />
        <path d="M32 260C126 184 216 185 304 257C394 330 489 358 592 315" />
        <path d="M34 295C124 226 216 222 303 285C395 352 491 376 590 347" />
        <path d="M43 331C128 270 217 263 304 314C397 369 488 390 580 377" />
        <path d="M60 367C136 316 222 305 307 344C397 386 480 401 562 403" />
      </g>

      <g className="manifold-grid manifold-longitudes">
        <path d="M89 144C140 190 148 248 128 320C114 372 137 407 196 428" />
        <path d="M148 116C203 174 209 239 181 315C161 369 183 414 239 443" />
        <path d="M217 105C261 169 263 237 235 311C212 370 231 421 276 453" />
        <path d="M292 113C317 176 319 241 302 306C286 371 298 423 310 459" />
        <path d="M368 137C367 191 375 246 368 305C362 367 362 415 346 455" />
        <path d="M437 172C414 211 426 260 433 315C439 365 418 408 383 442" />
        <path d="M497 211C457 239 472 281 491 329C508 370 483 401 425 424" />
        <path d="M545 251C501 267 515 301 542 341C560 368 532 390 473 403" />
      </g>

      <path
        className="manifold-boundary"
        d="M42 194C120 102 230 78 330 119C431 160 483 223 578 250C614 261 603 331 562 403C480 436 394 470 310 459C220 459 129 430 60 367C28 319 18 243 42 194Z"
      />
      <path
        className="manifold-geodesic"
        filter="url(#geodesic-glow)"
        d="M65 353C151 312 211 235 287 246C370 258 411 354 558 307"
      />
      <g className="manifold-points">
        <circle cx="65" cy="353" r="4" />
        <circle cx="287" cy="246" r="5" />
        <circle cx="558" cy="307" r="4" />
      </g>
    </svg>
  )
}

function Mark() {
  return (
    <div className="mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="section-heading">
      <div className="section-index">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-description">{description}</p>
      </div>
    </header>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [paperFilter, setPaperFilter] = useState("all")
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener("resize", close)
    return () => window.removeEventListener("resize", close)
  }, [])

  const fields = [
    "all",
    "q-fin.CP / math.NA",
    "q-fin.CP / cs.PF",
    "cs.DC / cs.PF",
    "math.DS / physics.soc-ph",
    "math.DG / cs.NI",
  ]
  const visiblePapers =
    paperFilter === "all"
      ? publications
      : publications.filter((paper) => paper.field === paperFilter)

  const copyCitation = async (title: string, authors: string) => {
    await navigator.clipboard?.writeText(
      `${authors}. “${title}.” Quimera Laboratory, 2026.`,
    )
    setCopied(title)
    window.setTimeout(() => setCopied(null), 1800)
  }

  return (
    <div className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Quimera Laboratory home">
          <Mark />
          <span className="brand-copy">
            <strong>QUIMERA</strong>
            <small>LABORATORY</small>
          </span>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#engines">Engines</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#people">People</a>
          <a href="#architecture">Architecture</a>
        </div>
        <div className="nav-actions">
          <span className="status">
            <i /> Systems online
          </span>
          <a
            className="github-link"
            href="https://github.com/Quimera-Laboratory"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-grid" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span /> Applied mathematics & systems R&amp;D
            </p>
            <h1>
              Where differential geometry meets <em>mechanical sympathy.</em>
            </h1>
            <p className="hero-intro">
              We design deterministic consensus engines, topological routing
              primitives, formal compilers, and high-throughput systems at the
              intersection of rigorous mathematics and low-level engineering.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#engines">
                Explore the engines <ArrowIcon />
              </a>
              <a className="button secondary" href="#publications">
                Read our publications
              </a>
            </div>
          </div>

          <div className="manifold-visual">
            <RiemannManifold />
            <div className="manifold-caption" aria-hidden="true">
              <span>Riemannian manifold</span>
              <i />
              <MathFormula
                formula={String.raw`\kappa(x,y)\geq\kappa_0`}
                displayMode={false}
              />
            </div>
          </div>

          <div className="metrics" aria-label="Core system metrics">
            <div>
              <small>IPC serialization</small>
              <strong>Zero-copy</strong>
              <span>Arrow / FlatBuffers</span>
            </div>
            <div>
              <small>I/O engine</small>
              <strong>Kernel-native</strong>
              <span>io_uring + eBPF</span>
            </div>
            <div>
              <small>Vectorization</small>
              <strong>512-bit</strong>
              <span>AVX2 / AVX-512</span>
            </div>
            <div>
              <small>Rounding drift</small>
              <strong>0.0000</strong>
              <span>Sub-centile invariant</span>
            </div>
          </div>
        </section>

        <section className="mission-section" id="mission">
          <div className="mission-label">
            <span>00</span>
            <p>Institutional mission</p>
          </div>
          <div className="mission-statement">
            <h2>
              Mathematics is our
              <em> engineering language.</em>
            </h2>
            <div className="mission-copy">
              <p>
                Quimera Laboratory exists to use mathematics to solve software
                engineering problems. We approach every branch of mathematics
                as a practical instrument for designing systems that are more
                correct, efficient, predictable, and resilient.
              </p>
              <p>
                From abstract structures to numerical methods, we translate
                mathematical ideas into algorithms, runtime architectures,
                formal invariants, and measurable software behavior. Theory is
                not separate from engineering here—it is how engineering
                decisions are made.
              </p>
            </div>
          </div>
          <div className="math-spectrum" aria-label="Mathematical disciplines">
            {[
              ["∇", "Geometry & Topology"],
              ["∑", "Analysis & Differential Equations"],
              ["ℙ", "Probability & Statistics"],
              ["⊢", "Logic & Foundations"],
              ["ℤ", "Algebra & Number Theory"],
              ["⌘", "Combinatorics & Discrete Mathematics"],
              ["arg min", "Optimization & Operations Research"],
              ["∂/∂t", "Dynamical Systems & Information Theory"],
            ].map(([symbol, discipline]) => (
              <div className="math-discipline" key={discipline}>
                <span>{symbol}</span>
                <p>{discipline}</p>
              </div>
            ))}
          </div>
          <div className="mission-principle">
            <span>MATHEMATICAL MODEL</span>
            <i />
            <span>SOFTWARE ARCHITECTURE</span>
            <i />
            <span>EMPIRICAL VALIDATION</span>
          </div>
        </section>

        <section className="content-section" id="engines">
          <SectionHeading
            index="01"
            eyebrow="Core ecosystem"
            title="Built close to the metal."
            description="Nine focused engines spanning institutional core banking & clearing (Q128 / SAC COSIF), distributed storage, kinetic streaming, topological networking, procedural simulation, and formal compilation."
          />
          <div className="engine-grid">
            {engines.map((engine) => (
              <article
                className={`engine-card tone-${engine.tone} ${
                  engine.featured ? "featured" : ""
                } ${engine.wide ? "wide" : ""}`}
                key={engine.number}
              >
                <div className="card-topline">
                  <span>ENGINE / {engine.number}</span>
                  <i />
                </div>
                <div>
                  <EngineIcon engine={engine.number} />
                  <p className="card-kicker">{engine.subtitle}</p>
                  <h3>{engine.title}</h3>
                  <p>{engine.description}</p>
                </div>
                <div>
                  <div className="stack-list">
                    {engine.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <footer>
                    <span>{engine.metric}</span>
                    {engine.repoUrl ? (
                      <a
                        className="engine-repo-link"
                        href={engine.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Repo <ArrowIcon />
                      </a>
                    ) : (
                      <ArrowIcon />
                    )}
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="research">
          <SectionHeading
            index="02"
            eyebrow="Research divisions"
            title="Six pillars. One research continuum."
            description="From foundational mathematical models to hardware-aware implementations, each division connects formal proof with measurable systems behavior."
          />
          <div className="pillar-grid">
            {pillars.map(([number, title, description]) => (
              <article className="pillar-card" key={number}>
                <span className="pillar-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="content-section publications-section"
          id="publications"
        >
          <SectionHeading
            index="03"
            eyebrow="Publications & preprints"
            title="Theory, tested in practice."
            description="Peer-reviewed papers, technical monographs, and formal proofs in applied mathematics, distributed computing, and quantitative systems."
          />
          <div className="filter-row" aria-label="Filter publications">
            {fields.map((field) => (
              <button
                className={paperFilter === field ? "active" : ""}
                onClick={() => setPaperFilter(field)}
                key={field}
              >
                {field === "all" ? "All fields" : field}
              </button>
            ))}
          </div>
          <div className="publication-list">
            {visiblePapers.map((paper, index) => (
              <article className="paper-card" key={paper.title}>
                <div className="paper-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="paper-content">
                  <div className="paper-meta">
                    <span>{paper.field}</span>
                    <span>{paper.venue}</span>
                  </div>
                  <h3>{paper.title}</h3>
                  <p className="authors">{paper.authors}</p>
                  <p className="abstract">{paper.abstract}</p>
                  <div className="formula equation-card">
                    <div className="equation-heading">
                      <small>Governing invariant</small>
                      <span>EQ. {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <MathFormula formula={paper.formula} />
                  </div>
                </div>
                <div className="paper-actions">
                  {paper.pdfUrl && (
                    <a
                      className="copy-button primary-action"
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read PDF
                    </a>
                  )}
                  {paper.repoUrl && (
                    <a
                      className="copy-button"
                      href={paper.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repository
                    </a>
                  )}
                  <button
                    className="copy-button"
                    onClick={() => copyCitation(paper.title, paper.authors)}
                  >
                    {copied === paper.title ? "Copied" : "Copy citation"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="people">
          <SectionHeading
            index="04"
            eyebrow="Scientific faculty"
            title="Researchers & working groups."
            description="Principal investigators and specialized engineering collectives directing the laboratory’s research program."
          />
          <div className="people-grid">
            <article className="person-card lead">
              <div className="person-monogram">GS</div>
              <div className="person-heading">
                <span>Principal investigator</span>
                <h3>Gemirson dos Santos Silva</h3>
                <p>Chief Systems Architect · Quimera Laboratory</p>
              </div>
              <p className="person-bio">
                Software engineer, solutions architect, and principal researcher
                investigating mechanical sympathy, discrete differential
                geometry, kernel-bypass asynchronous I/O, and deterministic
                high-frequency financial reconciliation.
              </p>
              <div className="benchmark">
                <small>Empirical benchmark</small>
                <strong>200M records in 11.08s</strong>
                <span>161 MB RAM · zero locks · deterministic routing</span>
              </div>
              <div className="discipline-list">
                <span>Distributed systems</span>
                <span>Differential geometry</span>
                <span>io_uring VFS</span>
                <span>Financial invariants</span>
              </div>
              <footer>
                <a
                  href="https://orcid.org/0009-0004-6491-3818"
                  target="_blank"
                  rel="noreferrer"
                >
                  ORCID 0009-0004-6491-3818 <ArrowIcon />
                </a>
                <a
                  href="https://scholar.google.com/citations?view_op=search_authors&mauthors=Gemirson+dos+Santos+Silva"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar <ArrowIcon />
                </a>
              </footer>
            </article>
          </div>
          <div className="collective-grid">
            {[
              [
                "QL–DSG",
                "Distributed Systems & Storage",
                "KineQuet · KineSQL · kineplex",
                "x86_64 AVX-512 · Linux io_uring · NVMe DMA",
              ],
              [
                "QL–CAR",
                "Cybernetic Architecture & Routing",
                "Synapse · Cytokine · Kinetic Cells",
                "Rust no_std · Arrow buffers · KVM · eBPF",
              ],
              [
                "QL–QSE",
                "Quantitative Systems & Invariants",
                "quimera-q128-financial · quimera-sac-pricing-calculator · Sub-centile Ledger · COBOL-Flow",
                "Scala 2.12 / Spark 3.5 · Java 17/21+ · QDec128 (RDX:RAX) · B3/BACEN COSIF",
              ],
            ].map(([code, name, projects, hardware]) => (
              <article key={code}>
                <div>
                  <span>{code}</span>
                  <i>Active R&amp;D</i>
                </div>
                <h3>{name}</h3>
                <p>{projects}</p>
                <small>{hardware}</small>
              </article>
            ))}
          </div>
        </section>

        <section
          className="content-section architecture-section"
          id="architecture"
        >
          <SectionHeading
            index="05"
            eyebrow="Systems architecture"
            title="A deliberately low-level stack."
            description="A runtime matrix chosen for predictable latency, explicit memory ownership, deterministic state, and direct hardware access."
          />
          <div className="architecture-layout">
            <div className="stack-table">
              {stack.map(([layer, technologies], index) => (
                <div className="stack-row" key={layer}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{layer}</strong>
                  <p>{technologies}</p>
                </div>
              ))}
            </div>
            <aside className="axioms">
              <p className="eyebrow">Three inviolable principles</p>
              <h3>Engineering philosophy</h3>
              <div>
                <span>01</span>
                <strong>Mechanical sympathy</strong>
                <p>
                  Align software with CPU architecture: cache-line padding,
                  predictable branches, arena allocation, and zero-copy kernel
                  bypass.
                </p>
              </div>
              <div>
                <span>02</span>
                <strong>Mathematical rigor</strong>
                <p>
                  Model consistency, partition balance, and failure domains
                  using differential geometry and real analysis before
                  implementation.
                </p>
              </div>
              <div>
                <span>03</span>
                <strong>Immutability & determinism</strong>
                <p>
                  Treat historical state and event lineage as immutable facts;
                  projections remain pure functions of ordered event logs.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-mark">
            <Mark />
          </div>
          <p className="eyebrow">Open research initiative</p>
          <h2>
            Build systems that make the mathematics <em>visible.</em>
          </h2>
          <p>
            Review our monographs, contribute to low-latency Rust and C++
            engines, or collaborate on the next formal systems problem.
          </p>
          <a
            className="button primary"
            href="https://github.com/Quimera-Laboratory"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> View GitHub organization <ArrowIcon />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top">
          <Mark />
          <span className="brand-copy">
            <strong>QUIMERA</strong>
            <small>LABORATORY</small>
          </span>
        </a>
        <p>Applied mathematics · cybernetic systems · mechanical sympathy</p>
        <div>
          <span>São Paulo, Brazil</span>
          <span>© 2026 Quimera Laboratory</span>
        </div>
      </footer>
    </div>
  )
}
