---
title: "Matteo Campanelli's Home Page"
layout: archivehome
author_profile: true
/* classes: wide */
---


I'm a research scientist at [Protocol Labs](https://protocol.ai). 
I mostly work on efficient _zero-knowledge proof systems_, their building blocks, their foundations and their applications. My interest is in cryptography at large.

I previously worked as a post-doctoral researcher at [Aarhus University](https://www.au.dk/) with [Claudio Orlandi](https://cs.au.dk/~orlandi/) (2020-2021) and at the [IMDEA Software Institute](https://software.imdea.org/index.html) with [Dario Fiore](http://www.dariofiore.it/) (2018-2020).

While at the Graduate Center of the City University of New York (CUNY), I worked with [Rosario Gennaro](http://www-cs.ccny.cuny.edu/~rosario/); in 2018 both Rosario and CUNY made the careless blunder of giving me a PhD.

## Research
---
<sup>My work has appearead at top- and high-rank cryptographic conferences. For a full list of publications, see [my Google Scholar page](https://scholar.google.com/citations?user=8xba6isAAAAJ&hl=en&oi=ao). Below you can find my work organized by question/topic rather than year/conference.</sup>

_In some of my latest projects I worked on questions as:_

### SNARKs (and related primitives)
- How can we best combine techniques from fast proof schemes (e.g., Spartan) with those from extremely succinct proofs (e.g., Groth16) obtaining a small (_universal_) setup?  [[Testudo paper]](https://eprint.iacr.org/2023/961.pdf) [[Testudo blog post]](https://cryptonet.org/blog/testudo-efficient-snarks-with-smaller-setups)
- What are the efficiency tradeoffs of SNARKs with a single (universal) setup? [[Lunar paper]](https://eprint.iacr.org/2020/1069) [[Anaïs Querol's slides]](assets/misc/lunar-anais.pdf)
- Can we construct efficient commit-and-prove SNARKs (SNARKs over committed inputs) with a single (universal) setup? [[Lunar paper]](https://eprint.iacr.org/2020/1069) [[ECLIPSE  paper]](https://eprint.iacr.org/2021/934) [[Lunar&ECLIPSE slides]](assets/misc/LunarEclipse.pdf) 
- Can we design and compose specialized *SNARKs* efficiently and simply? [[LegoSNARK paper]](https://eprint.iacr.org/2019/142) [[slides]](assets/misc/legosnark-amsterdam19.pdf) [[LegoSNARK code]](https://github.com/imdea-software/legosnark)
- How much can we decentralize authenticated data structures? [[paper]](https://eprint.iacr.org/2020/149) 
- How can we prove set-membership efficiently and privately (applications to whitelisting, anonymous cryptocurrencies, etc.)? [[paper]](https://eprint.iacr.org/2019/1255) _(see also Veksel and Curve Trees below)_
- How can we prove _batch_ set-membership succinctly and efficiently compose it with other SNARKs? [[HARiSA paper]](https://eprint.iacr.org/2021/1672) [[Talk by Dario Fiore]](https://www.youtube.com/watch?v=Hr2S8TbrWck)
- Can we construct _linear-map_ vector commitments from already deployed setups? How to make them maintainable generically? How to use them? [[paper]](https://eprint.iacr.org/2022/705.pdf)
- Can we extend existing _lookup arguments_ so to apply them efficiently to zero-knowledge for machine learning? [[paper]](https://eprint.iacr.org/2023/1518)

### Witness-Encryption-like Primitives

- _Encryption to the Future_: How can we emulate WE to pass state long-term in decentralized networks? [[paper]](https://eprint.iacr.org/2021/1423)
- How to simply approximate witness encryption through witness-authenticated key exchange? [[paper]](https://eprint.iacr.org/2022/382)
- How to marry _witness encryption_ and _succinct functional commitments_ for fun and (theoretical&practical) profit? [[paper]](https://eprint.iacr.org/2022/1510) [[slides]](talks/sfc-iisc.pptx)

### On Theory for Cryptographic Proofs

- What are theoretical limits for extractable arguments with nice composability features? [[paper]](https://eprint.iacr.org/2022/638) [[slides]](talks/SNARGs-impossibilities-IMDEA.pptx)
- How much can we push designated-verifier primitives to achieve some level of public-verifiability? [[paper]](https://eprint.iacr.org/2021/1618)
- How to use obfuscation to compile designated-verifier primitives into publically verifiable ones? And can we compile other primitives in a similar manner? [[paper]](https://eprint.iacr.org/2022/732)

### Efficient Proofs in Cryptocurrencies

- Can we go beyond Merkle Trees for fast, transparent, succinct zero-knowledge proofs of set membership? [[Curve Trees paper]](https://eprint.iacr.org/2022/756) [[Slides USENIX talk]](https://www.usenix.org/system/files/sec23_slides_campanelli.pdf) [[Curve Trees code]](https://github.com/simonkamp/curve-trees)
- How can we obtain efficient anonymous payments from well-studied assumptions? [[Veksel paper]](https://eprint.iacr.org/2021/327) [[Veksel code]](https://github.com/matteocam/veksel)
- How (not) to pay for digital goods and services on *Bitcoin*? [[paper]](https://eprint.iacr.org/2017/566)
- How to construct Zero-Knowledge on Homomorphic commitments to KV maps (a _"Z-KeyWee"_, or Z&#129373;) and how to use them for anonymous cryptocurrencies?  [[paper]](https://eprint.iacr.org/2021/1678)

### Proofs of Space
- How to apply (non-trivially) polynomial evaluation techniques to make decentralized storage more scalable? [[paper]](https://eprint.iacr.org/2023/1569.pdf)

### Rationality and Fine-Grained Cryptography
- Is expressive, efficient "higher" crypto (e.g. MPC, FHE, VC) possible *without cryptographic assumptions* (at the cost of being secure against "weaker" adversaries)? [[paper]](https://eprint.iacr.org/2018/297)
- How to design protocols  for verifiable computation when a server is *economically incentivized* (and with no cryptographic assumptions)? [[thesis]](https://academicworks.cuny.edu/cgi/viewcontent.cgi?article=3823&context=gc_etds) [[Sequential composability paper]](assets/misc/Sequentially Composable Rational Proofs.pdf) [[Space bounded computation paper]](assets/misc/Efficient Rational Proofs for Space Bounded Computation - Official.pdf)

## ZK Standards
---

I was co-chair of the working group leading the effort to standardize [(commit/encrypt)-and-prove](https://hackmd.io/@dariofiore/rkXo8EBp8) in zero-knowledge proofs. Some resources:
- A [proposal](assets/misc/zkproof-cp-standards-4th.pdf) for the standardization of the notion of _commit-and-prove_ (as well as _encrypt-and-prove_) accepted at the [4th ZKProof Workshop](https://zkproof.org).
- [Slides](assets/misc/CP-standard-ZKProof-slides.pdf) on commit-and-prove used at the [2nd ZKProof Workshop](https://zkproof.org/workshop2/main.html). 

## Teaching 
---

- [Seminar @ AU: Techniques for Efficient ZK Arguments (Fall '21)](https://www.notion.so/binarywhales/ZK-Seminar-AU-Fall-21-c4db4f3064ff48ef8f0a5b7f2537f462)
- [Seminar @ Hanyang University, Seoul: Techniques for Efficient Non-Interactive Probabilist Proofs (February '20)](https://drive.google.com/file/d/1zIldgk2tWdyck_qF4W_2eTf27Lal_wZ_/view?usp=sharing) [[some of the  material]](https://drive.google.com/drive/folders/1lCSlrB8bFTXGfXUc4DizR6AscLgFg4jL?usp=sharing)

## Program Committees
---
- Asiacrypt 2023
- CCS 2023
- CIFRIS 2023
- ACNS 2023
- ACNS 2022
- ICPC 2021

