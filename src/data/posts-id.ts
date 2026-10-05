import type { Post } from './posts';

export const postsId: Post[] = [
  {
    title: "Soal Kompleksitas Komputasional Koreksi Error Kuantum",
    date: "2025-03-18",
    readTime: "12 min",
    slug: "quantum-error-correction-complexity",
    category: "Fisika · Teori CS",
    description: "Menjelajahi overhead komputasional koreksi error kuantum, problem decoding sebagai optimasi, dan kenapa kompleksitas decoder adalah bottleneck utama komputasi kuantum fault-tolerant.",
    content: `
      <p>Koreksi error kuantum tetap jadi salah satu problem paling menuntut secara teknis di perpotongan fisika dan ilmu komputer. Tantangan fundamentalnya bukan cuma fisik, tapi komputasional.</p>

      <h2>Teorema Threshold, Ditinjau Ulang</h2>
      <p>Teorema threshold menjamin komputasi kuantum sepanjang apa pun bisa berjalan reliabel, asal error rate per gate di bawah threshold tertentu. Yang jarang dibahas adalah overhead komputasional yang ditimbulkannya dan bagaimana ia scaling terhadap kedalaman sirkuit logis.</p>
      <p>Ambil surface code dengan distance <code>d</code>. Jumlah physical qubit yang dibutuhkan scaling sebagai <code>O(d²)</code>, dan problem decoding dalam menentukan error apa yang terjadi dari hasil pengukuran syndrome itu sendiri tugas komputasional yang non-trivial.</p>

      <h3>Decoding sebagai Problem Optimasi</h3>
      <p>Minimum-weight perfect matching (MWPM) di graf syndrome adalah pendekatan standar. Tapi MWPM mengasumsikan model error yang mungkin nggak mencerminkan karakteristik noise hardware sebenarnya. Gap antara model error asumsi dan aktual menimbulkan bias sistematis di performa decoder.</p>

      <blockquote>Decoder bukan sekadar post-processing klasik. Ia bagian integral dari komputasi kuantum, dan kompleksitasnya langsung menentukan fisibilitas komputasi kuantum fault-tolerant.</blockquote>

      <h2>Implikasi buat Skalabilitas</h2>
      <p>Kalau langkah decoding nggak bisa ngimbangin laju pengukuran syndrome, terbentuk backlog. Backlog ini ngegedein kebutuhan lifetime memori efektif, yang lalu menuntut code distance lebih tinggi, yang makin nambah beban decoding. Feedback loop-nya mengkhawatirkan.</p>
      <p>Riset terbaru soal decoder union-find nawarin kompleksitas waktu near-linear, tapi dengan harga koreksi suboptimal. Trade-off antara kecepatan decoder dan kualitas koreksi ini, menurut saya, adalah pertanyaan terbuka paling sentral di koreksi error kuantum praktis.</p>

      <hr />

      <p>Jalan menuju komputasi kuantum yang berguna lewat problem ini. Bukan lewat jumlah qubit, bukan lewat fidelitas gate doang, tapi lewat kompleksitas komputasional menjaga error tetap terkendali.</p>
    `,
  },
  {
    title: "Kenapa Kebanyakan Paper Distributed Systems Salah soal Konsistensi",
    date: "2025-02-04",
    readTime: "9 min",
    slug: "distributed-systems-consistency",
    category: "Rekayasa Sistem",
    description: "Tentang kebingungan persisten antara konsistensi sebagai safety property vs liveness property, dan kenapa kebanyakan sistem yang ngaku linearizable sebenarnya nggak mengimplementasikannya.",
    content: `
      <p>Ada kebingungan persisten di literatur distributed systems antara konsistensi sebagai safety property dan konsistensi sebagai liveness property. Kebingungan ini melahirkan sistem yang ngaku punya garansi kuat tapi diam-diam melanggarnya saat partisi.</p>

      <h2>Problem Linearizability</h2>
      <p>Linearizability adalah standar emas, tapi kebanyakan paper yang mengutipnya sebenarnya nggak mengimplementasikannya. Yang mereka implementasikan adalah sesuatu yang lebih lemah, seringnya sequential consistency atau bahkan causal consistency, dibungkus bahasa linearizable.</p>
      <p>Pembedanya penting. Sistem yang sequentially consistent bisa ngembaliin stale read yang nggak mungkin dikembalikan sistem linearizable. Di sistem finansial, ini bedanya saldo benar vs overdraft.</p>

      <h3>Di Mana Proof-nya Jebol</h3>
      <p>Kebanyakan proof kebenaran mengasumsikan model synchronous atau partially synchronous. Saat sistem masuk periode asynchronous, yang dialami setiap sistem nyata, proof-nya nggak berlaku lagi. Sistem tetap jalan, tapi tanpa garansi safety-nya.</p>

      <blockquote>Sistem yang benar "sebagian besar waktu" itu nggak benar. Itu sistem dengan failure mode yang nggak terdokumentasi.</blockquote>

      <h2>Pendekatan yang Lebih Jujur</h2>
      <p>Yang dibutuhin bidang ini bukan model konsistensi yang lebih kuat, tapi dokumentasi yang lebih jujur soal garansi apa yang beneran berlaku dan dalam kondisi apa ia degrade. Setiap sistem punya consistency envelope: himpunan kondisi di mana garansinya berlaku. Bikin envelope ini eksplisit bakal lebih berguna daripada impossibility result baru.</p>

      <hr />

      <p>Kebenaran bukan spektrum. Sistem itu benar di bawah asumsi yang dinyatakan, atau tidak. Tugasnya adalah menyatakan asumsinya dengan jujur.</p>
    `,
  },
  {
    title: "Geometri Gradient Descent",
    date: "2025-01-11",
    readTime: "15 min",
    slug: "geometry-gradient-descent",
    category: "Matematika · ML",
    description: "Gradient descent dipahami sebagai sistem dinamis di atas manifold. Bagaimana kurvatur loss landscape, saddle point, dan geometri noise SGD menentukan konvergensi dan generalisasi.",
    content: `
      <p>Gradient descent diajarkan sebagai algoritma optimasi. Ia lebih tepat dipahami sebagai sistem dinamis di atas manifold. Geometri loss landscape menentukan bukan cuma apakah algoritmanya konvergen, tapi konvergen ke apa dan bagaimana generalisasinya.</p>

      <h2>Kurvatur dan Konvergensi</h2>
      <p>Matriks Hessian di titik kritis ngasih tahu hampir segalanya soal perilaku lokal. Eigenvalue-nya menentukan bentuk landscape di tiap arah: eigenvalue positif artinya lembah, negatif artinya ridge, dan nol artinya arah flat.</p>
      <p>Di dimensi tinggi, saddle point jauh lebih banyak daripada minima lokal. Probabilitas semua eigenvalue positif turun eksponensial terhadap dimensi. Makanya gradient descent di deep network nggak nyangkut di minima lokal yang jelek. Ia nyangkut di saddle point, yang bisa di-escape.</p>

      <h3>Peran Noise</h3>
      <p>Stochastic gradient descent (SGD) masukin noise yang punya tujuan geometris. Magnitudo noise-nya anisotropik, lebih besar di arah dengan variansi gradien lebih tinggi. Ini secara natural ngebias algoritma ke minima yang lebih flat, yang cenderung generalisasinya lebih bagus.</p>

      <blockquote>SGD bukan versi berisik dari gradient descent. Ia algoritma berbeda dengan properti konvergensi berbeda, dan noise-nya adalah fitur, bukan bug.</blockquote>

      <h2>Flatness dan Generalisasi</h2>
      <p>Kaitan minima flat dan generalisasi udah lama diperdebatkan. Ketajaman sebuah minimum, diukur dari eigenvalue terbesar Hessian, berkorelasi dengan performa generalisasi, tapi hubungannya nggak kausal secara sederhana.</p>
      <p>Yang penting bukan ketajaman absolut, tapi ketajaman relatif terhadap skala parameter. Di sinilah framework PAC-Bayesian ngasih insight: ia membatasi generalization gap lewat KL divergence antara distribusi terpelajari dan prior, yang secara implisit memperhitungkan geometri loss landscape.</p>

      <hr />

      <p>Memahami gradient descent butuh memahami ruang tempat ia bergerak. Algoritmanya simpel. Landscape-nya tidak.</p>
    `,
  },
  {
    title: "Catatan soal Kebenaran Compiler",
    date: "2024-11-29",
    readTime: "7 min",
    slug: "compiler-correctness-notes",
    category: "Compiler",
    description: "Apa arti kebenaran compiler secara formal, pendekatan CompCert ke kompilasi terverifikasi lewat simulation relation, dan keekonomian verifikasi formal buat sistem safety-critical.",
    content: `
      <p>Compiler adalah fungsi dari program ke program. Kebenaran artinya program output punya observable behavior yang sama dengan program input, untuk semua input yang mungkin. Ini pernyataan yang menipu sederhananya dengan konsekuensi yang dalam.</p>

      <h2>Apa Arti "Behavior Sama"</h2>
      <p>Observable behavior didefinisikan oleh semantik bahasa sumber. Kalau bahasa sumber punya undefined behavior, compiler bebas ngapain aja ke program itu. Ini bukan bug. Ini fitur yang memungkinkan optimasi. Tapi artinya kebenaran itu relatif terhadap spesifikasi formal yang mungkin nggak cocok dengan ekspektasi programmer.</p>

      <h3>Pendekatan CompCert</h3>
      <p>CompCert membuktikan kebenaran dengan menegakkan simulation relation antara program sumber dan target. Setiap langkah program target berkorespondensi dengan nol atau lebih langkah program sumber, dan observable event-nya (I/O, akses memori) cocok.</p>

      <blockquote>Compiler terverifikasi nggak ngilangin bug. Ia ngilangin satu kelas bug, miscompilation, dengan kepastian matematis. Semua kelas lain tetap ada.</blockquote>

      <h2>Harga Verifikasi</h2>
      <p>Proof CompCert kira-kira 100.000 baris Coq. Compilernya sendiri jauh lebih kecil. Rasio ini, proof terhadap kode, tipikal di sistem terverifikasi dan memunculkan pertanyaan praktis: worth it nggak harganya?</p>
      <p>Buat kebanyakan software, mungkin nggak. Tapi buat sistem safety-critical (avionik, alat medis, kontrol nuklir), harga bug miscompilation melebihi harga verifikasi formal berkali-kali lipat.</p>

      <hr />

      <p>Kebenaran compiler adalah solved problem secara teori. Secara praktik, ia tetap soal keekonomian dan toleransi risiko.</p>
    `,
  },
  {
    title: "Batas Information-Theoretic Kompresi Lossless",
    date: "2024-10-03",
    readTime: "11 min",
    slug: "information-theory-compression",
    category: "Teori Informasi",
    description: "Teorema source coding Shannon sebagai batas keras, kaitannya dengan Kolmogorov, dan kenapa kompresi adalah dual dari prediksi: ekuivalensi matematis yang menggerakkan kompresi neural modern.",
    content: `
      <p>Teorema source coding Shannon menetapkan batas keras: nggak ada skema kompresi lossless yang bisa mencapai panjang kode rata-rata lebih pendek dari entropi source-nya. Teorema ini umurnya lebih dari tujuh puluh tahun, tapi implikasinya masih terus ditemukan.</p>

      <h2>Entropi sebagai Batas</h2>
      <p>Buat discrete memoryless source dengan distribusi probabilitas <code>P</code>, entropi <code>H(X) = -Σ P(x) log₂ P(x)</code> ngasih minimum rata-rata bit per simbol. Skema apa pun yang mencapai rate ini berarti optimal. Skema apa pun yang ngaku ngalahin rate ini berarti salah, atau beroperasi di bawah asumsi berbeda soal source-nya.</p>

      <h3>Kaitan Kolmogorov</h3>
      <p>Entropi Shannon mengukur kompleksitas rata-rata sebuah source. Kompleksitas Kolmogorov mengukur kompleksitas string individual. Keduanya berkaitan tapi beda: kompleksitas Kolmogorov uncomputable, sedangkan entropi Shannon tidak. Tapi ekspektasi kompleksitas Kolmogorov dari string yang diambil dari sebuah source konvergen ke entropi Shannon source itu.</p>

      <blockquote>Kompresi adalah dual dari prediksi. Kompresor yang bagus adalah prediktor yang bagus, dan sebaliknya. Dualitas ini bukan metafora. Ini ekuivalensi matematis.</blockquote>

      <h2>Melampaui Source Memoryless</h2>
      <p>Data nyata itu nggak memoryless. Context modeling, memprediksi simbol berikutnya dari simbol sebelumnya, adalah tempat kompresor modern ngambil keunggulannya. Entropy rate dari proses stasioner, didefinisikan sebagai limit entropi kondisional, menggeneralisasi bound Shannon ke source yang punya memori.</p>
      <p>Arithmetic coding mencapai rate ini secara asimtotik kalau dipasangkan model konteks yang bagus. Rasio kompresi sepenuhnya ditentukan kualitas modelnya, bukan skema coding-nya. Makanya metode kompresi neural, yang pakai sequence model yang powerful, bisa ngalahin kompresor tradisional di data terstruktur.</p>

      <hr />

      <p>Batasnya nyata dan nggak bisa diakalin pakai kepintaran. Yang bisa diperbaiki adalah model kita soal source-nya. Model lebih bagus artinya kode lebih pendek. Cuma itu gamenya.</p>
    `,
  },
];
