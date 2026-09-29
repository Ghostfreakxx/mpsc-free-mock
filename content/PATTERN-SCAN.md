# Exam pattern scan and triangulation

Scan date: 2026-09-29. This scan decides which topics get new questions. It does not certify exam content.

## Method

1. **Pattern first.** For each exam, record the paper structure: number of questions, time, marking and subject split.
2. **Triangulate weightage.** The exam bodies do not publish chapter weightage, so it is estimated from independent analyses of past papers by coaching and education sites. A topic counts as high-yield only when **at least three independent analyses** agree on it. Claims from a single source are ignored.
3. **Find gaps.** Compare the high-yield list with the published bank.
4. **Write, don't copy.** New questions are original and written in the exam's style. Each is checked against a named, stable source (OpenStax sections or the Constitution of India text) and cites that section. Past-year questions copied from third-party sites are not used, because their answer keys are unverified; see `REVIEW-POLICY.md`.

## Paper patterns

| Exam | Pattern (triangulated) | Agreement |
|---|---|---|
| JEE Main | 75 questions in 3 hours: 25 each in Physics, Chemistry and Mathematics; +4 correct, −1 wrong | Consistent across sources |
| NEET UG | 180 questions in 3 hours: Physics 45, Chemistry 45, Biology 90 (Botany 45, Zoology 45); +4 correct, −1 wrong | Consistent across sources |
| CUET PG | 75 domain-specific questions in 90 minutes; +4 correct, −1 wrong; one chosen subject per paper | Consistent across sources |
| MPSC (MCS prelims) | Two objective papers of 2 hours each: Paper I General Studies, Paper II General Aptitude (qualifying, 33%) | Sources conflict on marks per paper (150 or 200) and on negative marking (−¼ or −⅓). The official syllabus at mpsc.mizoram.gov.in could not be reached from the build environment, so check the current notification. The simulator lets students choose the penalty. |

## Triangulated high-yield topics

**JEE Main**
- *Physics:* modern physics, current electricity, electrostatics, optics, thermodynamics, magnetism and electromagnetic induction.
- *Chemistry:* coordination compounds, periodic table and p-block, thermodynamics, hydrocarbons.
- *Mathematics:* calculus (definite integration, differential equations), 3D geometry, vectors, matrices and determinants, sequences and series, binomial theorem.

**NEET UG**
- *Biology:* human physiology (the largest zoology block, about 13 of 45 questions), genetics and molecular biology (the largest botany block), ecology, reproduction, plant physiology, cell biology.
- *Physics:* current electricity, ray optics, electrostatics, modern physics.
- *Chemistry:* spread roughly evenly across organic, inorganic and physical, with reaction-based organic slightly ahead.

**MPSC Paper I**
- Current events, Indian history and national movement, Indian and world geography, Indian polity and governance, economic and social development, environment, and general science.
- Mizo heritage and Mizoram politics appear in the mains syllabus.

## Coverage after this batch

| Gap from the scan | Added (topic id) | Streams |
|---|---|---|
| Current electricity | `ohms-law`, `resistor-circuits` | JEE, NEET |
| Modern physics | `photoelectric-effect`, `matter-waves` | JEE, NEET |
| Coordination compounds | `coordination-compounds` | JEE, NEET |
| Matrices and determinants | `determinants` | JEE |
| Vectors | `vectors` | JEE |
| Binomial theorem | `binomial-theorem` | JEE |
| Human physiology | `digestion`, `gas-exchange`, `circulation` | NEET |
| Indian polity (Union executive, Parliament, emergencies) | `union-polity` | CUET PG (MPSC after Mizo translation) |

## Still open (next batches)

- **JEE/NEET Physics:** electrostatics, ray optics, thermodynamics, magnetism and EMI.
- **Chemistry:** periodic trends and p-block, thermodynamics, hydrocarbons and organic reactions.
- **JEE Maths:** definite integration, differential equations, 3D geometry.
- **NEET Biology:** ecology, human reproduction, plant physiology, evolution, excretion.
- **MPSC:** Mizo translations for `union-polity`, then modern Indian history and the national movement, Indian geography, economy, and general science.
- **CUET PG:** the real paper covers one domain. The bank mixes subjects, so per-subject depth is still thin.

## Analyses consulted

JEE Main weightage:
- [Vedantu](https://www.vedantu.com/jee-main/weightage)
- [PW](https://www.pw.live/iit-jee/exams/jee-main-chapter-wise-weightage)
- [Collegedunia](https://collegedunia.com/exams/jee-main/chapter-wise-weightage)
- [Shiksha](https://www.shiksha.com/engineering/articles/jee-main-chapter-wise-weightage-blogId-44841)
- [TestprepKart](https://www.testprepkart.com/jee/blog/jee-main-chapter-wise-weightage-for-the-last-10-years)

NEET UG weightage:
- [Vedantu](https://www.vedantu.com/neet/neet-weightage)
- [Allen](https://allen.in/neet/chapter-wise-weightage)
- [Careers360](https://medicine.careers360.com/articles/neet-chapter-wise-weightage-and-important-topics)
- [PW](https://www.pw.live/neet/exams/neet-chapter-wise-weightage)
- [Target Publications 2025 analysis](https://targetpublications.org/blog/neet-ug-2025-paper-analysis)

CUET PG pattern:
- [SATHEE (IIT Kanpur)](https://sathee.iitk.ac.in/sathee-cuet/exam-info/cuet-pg-exam-pattern/)
- [Toprankers](https://www.toprankers.com/cuet-pg-exam-pattern)
- [Getmyuni](https://www.getmyuni.com/exams/cuet-pg-exam-pattern)

MPSC pattern:
- [Official syllabus page](https://mpsc.mizoram.gov.in/page/syllabus) (not reachable from the build environment)
- [Chahal Academy](https://chahalacademy.com/pcs/mpsc-mizoram-exam-pattern-and-syllabus)
- [Oliveboard](https://www.oliveboard.in/blog/mizoram-psc-syllabus/)
- [SPM IAS Academy](https://spmiasacademy.com/mizoram-psc-selection-process/)
- [EduRev](https://edurev.in/t/340768/MPSC-MCS--Mizoram--Exam-Pattern)
