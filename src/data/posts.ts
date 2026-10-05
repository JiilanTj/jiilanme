export interface Post {
  title: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  description: string;
  content: string;
}

export const posts: Post[] = [
  {
    title: "On the Computational Complexity of Quantum Error Correction",
    date: "2025-03-18",
    readTime: "12 min",
    slug: "quantum-error-correction-complexity",
    category: "Physics · CS Theory",
    description: "Exploring the computational overhead of quantum error correction, the decoding problem as optimization, and why decoder complexity is the central bottleneck for fault-tolerant quantum computing.",
    content: `
      <p>Quantum error correction remains one of the most technically demanding problems at the intersection of physics and computer science. The fundamental challenge is not merely physical. It is computational.</p>

      <h2>The Threshold Theorem Revisited</h2>
      <p>The threshold theorem guarantees that arbitrarily long quantum computations can be performed reliably, provided the error rate per gate is below a certain threshold. What is less discussed is the computational overhead this imposes and how it scales with the logical circuit depth.</p>
      <p>Consider a surface code with distance <code>d</code>. The number of physical qubits required scales as <code>O(d²)</code>, and the decoding problem of determining which errors occurred from the syndrome measurements is itself a non-trivial computational task.</p>

      <h3>Decoding as an Optimization Problem</h3>
      <p>Minimum-weight perfect matching (MWPM) on the syndrome graph is the standard approach. But MWPM assumes an error model that may not reflect the actual noise characteristics of the hardware. The gap between the assumed and actual error models introduces a systematic bias in the decoder's performance.</p>

      <blockquote>The decoder is not merely a classical post-processing step. It is an integral part of the quantum computation, and its complexity directly impacts the feasibility of fault-tolerant quantum computing.</blockquote>

      <h2>Implications for Scalability</h2>
      <p>If the decoding step cannot keep pace with the syndrome measurement rate, a backlog forms. This backlog grows the effective memory lifetime requirements, which in turn demands higher code distances, which further increases the decoding load. The feedback loop is concerning.</p>
      <p>Recent work on union-find decoders offers near-linear time complexity, but at the cost of suboptimal correction. The trade-off between decoder speed and correction quality is, I believe, the central open question in practical quantum error correction.</p>

      <hr />

      <p>The path to useful quantum computation runs through this problem. Not through qubit counts, not through gate fidelities alone, but through the computational complexity of keeping errors in check.</p>
    `,
  },
  {
    title: "Why Most Distributed Systems Papers Get Consistency Wrong",
    date: "2025-02-04",
    readTime: "9 min",
    slug: "distributed-systems-consistency",
    category: "Systems Engineering",
    description: "On the persistent confusion between consistency as a safety property and consistency as a liveness property, and why most systems that claim linearizability don't actually implement it.",
    content: `
      <p>There is a persistent confusion in the distributed systems literature between consistency as a safety property and consistency as a liveness property. This confusion leads to systems that claim strong guarantees while silently violating them under partition.</p>

      <h2>The Linearizability Problem</h2>
      <p>Linearizability is the gold standard, but most papers that cite it do not actually implement it. What they implement is something weaker, often sequential consistency or even causal consistency, dressed up in linearizable language.</p>
      <p>The distinction matters. A sequentially consistent system can return stale reads that a linearizable system cannot. In a financial system, this is the difference between a correct balance and an overdraft.</p>

      <h3>Where the Proofs Break Down</h3>
      <p>Most correctness proofs assume a synchronous or partially synchronous model. When the system enters an asynchronous period, which every real system does, the proof no longer applies. The system continues to operate, but without its safety guarantee.</p>

      <blockquote>A system that is correct "most of the time" is not correct. It is a system with undocumented failure modes.</blockquote>

      <h2>A More Honest Approach</h2>
      <p>What the field needs is not stronger consistency models, but more honest documentation of what guarantees actually hold and under what conditions they degrade. Every system has a consistency envelope: the set of conditions under which its guarantees hold. Making this envelope explicit would be more useful than another impossibility result.</p>

      <hr />

      <p>Correctness is not a spectrum. A system is either correct under its stated assumptions or it is not. The task is to state the assumptions honestly.</p>
    `,
  },
  {
    title: "The Geometry of Gradient Descent",
    date: "2025-01-11",
    readTime: "15 min",
    slug: "geometry-gradient-descent",
    category: "Math · ML",
    description: "Gradient descent understood as a dynamical system on a manifold. How loss landscape curvature, saddle points, and SGD noise geometry determine convergence and generalization.",
    content: `
      <p>Gradient descent is taught as an optimization algorithm. It is better understood as a dynamical system on a manifold. The geometry of the loss landscape determines not just whether the algorithm converges, but what it converges to and how it generalizes.</p>

      <h2>Curvature and Convergence</h2>
      <p>The Hessian matrix at a critical point tells you almost everything about local behavior. Its eigenvalues determine the shape of the landscape in each direction: positive eigenvalues indicate a valley, negative eigenvalues indicate a ridge, and zero eigenvalues indicate a flat direction.</p>
      <p>In high dimensions, saddle points vastly outnumber local minima. The probability of all eigenvalues being positive decreases exponentially with dimension. This is why gradient descent in deep networks does not get stuck at bad local minima. It gets stuck at saddle points, which are escapable.</p>

      <h3>The Role of Noise</h3>
      <p>Stochastic gradient descent (SGD) introduces noise that serves a geometric purpose. The noise magnitude is anisotropic, larger in directions with higher gradient variance. This naturally biases the algorithm toward flatter minima, which tend to generalize better.</p>

      <blockquote>SGD is not a noisy version of gradient descent. It is a different algorithm with different convergence properties, and the noise is a feature, not a bug.</blockquote>

      <h2>Flatness and Generalization</h2>
      <p>The connection between flat minima and generalization has been debated extensively. The sharpness of a minimum, measured by the largest eigenvalue of the Hessian, correlates with generalization performance, but the relationship is not causal in any simple sense.</p>
      <p>What matters is not the absolute sharpness, but the sharpness relative to the scale of the parameters. This is where the PAC-Bayesian framework provides insight: it bounds the generalization gap in terms of the KL divergence between the learned distribution and a prior, which implicitly accounts for the geometry of the loss landscape.</p>

      <hr />

      <p>Understanding gradient descent requires understanding the space it moves through. The algorithm is simple. The landscape is not.</p>
    `,
  },
  {
    title: "Notes on Compiler Correctness",
    date: "2024-11-29",
    readTime: "7 min",
    slug: "compiler-correctness-notes",
    category: "Compilers",
    description: "What compiler correctness means formally, the CompCert approach to verified compilation via simulation relations, and the economics of formal verification for safety-critical systems.",
    content: `
      <p>A compiler is a function from programs to programs. Correctness means the output program has the same observable behavior as the input program, for all possible inputs. This is a deceptively simple statement with deep consequences.</p>

      <h2>What "Same Behavior" Means</h2>
      <p>Observable behavior is defined by the source language semantics. If the source language has undefined behavior, the compiler is free to do anything with those programs. This is not a bug. It is a feature that enables optimization. But it means correctness is relative to a formal specification that may not match the programmer's expectations.</p>

      <h3>The CompCert Approach</h3>
      <p>CompCert proves correctness by establishing a simulation relation between the source and target programs. Each step of the target program corresponds to zero or more steps of the source program, and the observable events (I/O, memory accesses) match.</p>

      <blockquote>A verified compiler does not eliminate bugs. It eliminates one class of bugs, miscompilation, with mathematical certainty. Every other class remains.</blockquote>

      <h2>The Cost of Verification</h2>
      <p>CompCert's proof is approximately 100,000 lines of Coq. The compiler itself is far smaller. This ratio, proof to code, is typical of verified systems and raises a practical question: is the cost justified?</p>
      <p>For most software, probably not. But for safety-critical systems (avionics, medical devices, nuclear control), the cost of a miscompilation bug exceeds the cost of formal verification by orders of magnitude.</p>

      <hr />

      <p>Compiler correctness is a solved problem in theory. In practice, it remains a matter of economics and risk tolerance.</p>
    `,
  },
  {
    title: "Information-Theoretic Limits of Lossless Compression",
    date: "2024-10-03",
    readTime: "11 min",
    slug: "information-theory-compression",
    category: "Information Theory",
    description: "Shannon's source coding theorem as a hard boundary, the Kolmogorov connection, and why compression is the dual of prediction: a mathematical equivalence that drives modern neural compression.",
    content: `
      <p>Shannon's source coding theorem establishes a hard boundary: no lossless compression scheme can achieve an average code length shorter than the entropy of the source. This theorem is over seventy years old, and yet its implications are still being discovered.</p>

      <h2>Entropy as a Limit</h2>
      <p>For a discrete memoryless source with probability distribution <code>P</code>, the entropy <code>H(X) = -Σ P(x) log₂ P(x)</code> gives the minimum average bits per symbol. Any scheme achieving this rate is optimal. Any scheme claiming to beat it is either wrong or operating under different assumptions about the source.</p>

      <h3>The Kolmogorov Connection</h3>
      <p>Shannon entropy measures the average complexity of a source. Kolmogorov complexity measures the complexity of individual strings. The two are related but distinct: Kolmogorov complexity is uncomputable, while Shannon entropy is not. However, the expected Kolmogorov complexity of strings drawn from a source converges to the Shannon entropy of that source.</p>

      <blockquote>Compression is the dual of prediction. A good compressor is a good predictor, and vice versa. This duality is not metaphorical. It is a mathematical equivalence.</blockquote>

      <h2>Beyond Memoryless Sources</h2>
      <p>Real data is not memoryless. Context modeling, predicting the next symbol based on previous symbols, is where modern compressors gain their advantage. The entropy rate of a stationary process, defined as the limit of conditional entropies, generalizes Shannon's bound to sources with memory.</p>
      <p>Arithmetic coding achieves this rate asymptotically when paired with a good context model. The compression ratio is entirely determined by the quality of the model, not the coding scheme. This is why neural compression methods, which use powerful sequence models, can outperform traditional compressors on structured data.</p>

      <hr />

      <p>The limit is real and cannot be circumvented by cleverness. What can be improved is our model of the source. Better models mean shorter codes. That is the only game in town.</p>
    `,
  },
];
