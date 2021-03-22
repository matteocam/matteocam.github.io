---
title: "Matteo Campanelli's Home Page"
layout: archivehome
author_profile: true
/* classes: wide */
---


I'm a post-doctoral researcher in cryptography at [Aarhus University](https://www.au.dk/). 

I previously worked at the 
[IMDEA Software Institute](https://software.imdea.org/index.html) with
[Dario Fiore](http://www.dariofiore.it/) on  efficient _Zero-Knowledge proof systems_ and  other cryptography-flavored topics.

While at the Graduate Center of the City University of New York (CUNY), I worked with [Rosario Gennaro](http://www-cs.ccny.cuny.edu/~rosario/); in 2018 both Rosario and CUNY made the careless blunder of giving me a PhD.

## Research
<sup>You can find a full list of publications on [my Google Scholar page](https://scholar.google.com/citations?user=8xba6isAAAAJ&hl=en&oi=ao).</sup>

In some of my latest projects I worked on questions as:

#### SNARKs and Such
- What are the efficiency tradeoffs of SNARKs with a single (universal) setup? [[Lunar paper]](https://eprint.iacr.org/2020/1069)
- Can we compose *SNARKs* in an efficient and general manner? [[LegoSNARK paper]](https://eprint.iacr.org/2019/142) [[slides]](assets/misc/legosnark-amsterdam19.pdf) [[LegoSNARK code]](https://github.com/imdea-software/legosnark)
- How much can we decentralize authenticated data structures? [[paper]](https://eprint.iacr.org/2020/149) 
- How can we prove set-membership efficiently and privately (applications to whitelisting, anonymous cryptocurrencies, etc.)? [[paper]](https://eprint.iacr.org/2019/1255) _(see also Veksel below)_

#### Efficient Proofs in Cryptocurrencies
- How can we obtain efficient anonymous payments from well-studied assumptions? [[Veksel paper]](https://eprint.iacr.org/2021/327) [[Veksel code]](https://github.com/matteocam/veksel)
- How (not) to pay for digital goods and services on *Bitcoin*? [[paper]](https://eprint.iacr.org/2017/566)

#### Rationality and Fine-Grained Cryptography
- Is expressive, efficient "higher" crypto (e.g. MPC, FHE, VC) possible *without cryptographic assumptions* (at the cost of being secure against "weaker" adversaries)? [[paper]](https://eprint.iacr.org/2018/297)
- How to design protocols  for verifiable computation when a server is *economically incentivized* (and with no cryptographic assumptions)? [[thesis]](https://academicworks.cuny.edu/cgi/viewcontent.cgi?article=3823&context=gc_etds) [[Sequential composability paper]](assets/misc/Sequentially Composable Rational Proofs.pdf) [[Space bounded computation paper]](assets/misc/Efficient Rational Proofs for Space Bounded Computation - Official.pdf)


## ZK Standards

I am co-chair of the working group leading the effort to standardize [[(commit/encrypt)-and-prove]](https://hackmd.io/@dariofiore/rkXo8EBp8) in zero-knowledge proofs. Some resources:
- A [proposal](assets/misc/zkproof-cp-standards-revised.pdf) for the standardization of the notion of _commit-and-prove_ accepted at the [3rd ZKProof Workshop](https://zkproof.org/workshop3/main.html).
- [Slides](assets/misc/CP-standard-ZKProof-slides.pdf) on commit-and-prove used at the [2nd ZKProof Workshop](https://zkproof.org/workshop2/main.html). 

## Teaching 

- [Seminar @ AU: Techniques for Efficient ZK Arguments (Spring '21)](efficient-zk-au-2021/) (postponed)
