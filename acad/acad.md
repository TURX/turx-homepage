---
title: Ruixuan Tu
html:
  embed_local_images: false
  embed_svg: false
  offline: false
---

<div class="invisible">

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
@import "acad.css"
@import "acad.js"

</div><div id="header">

# Ruixuan Tu

<div id="profile">
  <img src="profile.jpg" alt="Ruixuan Tu at Darumayama Highland Observation Deck, Izu Peninsula, Shizuoka Prefecture, Japan">
</div>

University of Wisconsin--Madison
ruixuan@cs.wisc.edu

[[GitHub](https://github.com/TURX)] [[Google Scholar](https://scholar.google.com/citations?user=V6hzHoQAAAAJ)]

</div>

<div id="content">

## About Me

My name is Ruixuan Tu (zh_CN: 涂 睿轩, ja_JP: トゥ・ルイシュェン). I am a fourth year undergraduate majoring in Computer Sciences (Honors), Mathematics (Honors), Data Science, Statistics, and Japanese at the [University of Wisconsin--Madison](https://www.wisc.edu) (UW--Madison). I expect to graduate in May 2025 and am seeking Ph.D. opportunities in natural language processing (NLP) and large language models (LLMs).

I am fortunate to be advised by and work with Prof. [Forrest Sheng Bao](https://forrestbao.github.io/) @ Iowa State CS and (ML Head @) Vectara Inc, Prof. [Ramya Korlakai Vineyak](https://ramyakv.github.io/) @ UW--Madison ECE & CS & Stat, and Prof. [Junjie Hu](https://junjiehu.github.io/) @ UW--Madison BMI & CS. I have previously worked with Prof. [Jerry Zhu](https://pages.cs.wisc.edu/~jerryzhu/) @ UW--Madison CS.

## Research Interests

**Human-aligned LLMs:** Although LLMs have archived great improvements after 2018 and gained popularity among humans, it does not mean they always perform as good as humans, once we consider issues such as hallucination, bias, and factually incorrectness. I have been working on multiple projects to align LLMs with human expectations and behaviors, including:
- Evaluation of Summary: [[EMNLP'23](https://aclanthology.org/2023.findings-emnlp.87/)]
- Generalizability of In-Context Learning for Transformer Models: (WIP) ongoing honors thesis research with Prof. [Ramya Korlakai Vineyak](https://ramyakv.github.io/) and Ph.D. student [Daiwei Chen](https://chendaiwei-99.github.io/).
- Retrieval-Augmented Generation: (WIP) under review project with Prof. [Forrest Sheng Bao](https://forrestbao.github.io/) and [Renyi Qu](https://sites.google.com/view/renyiqu).
- LLM Agents for Opinion Dynamics: (WIP) ongoing independent study research with Prof. [Junjie Hu](https://junjiehu.github.io/) and Dr. [Yun-Shiuan (Sean) Chuang](https://yunshiuan.github.io/).

**Multilingual NLP and Computational Linguistics**: With Japanese as one of my majors, I connects my NLP knowledge with my Japanese linguistics and classical Japanese courses. I have applied multilinguial transfer learning from modern Japanese to classical Japanese in WakaGPT, and applied computational linguistics tools to analyze the morpheme origins in Japanese literature.

## Papers

### Peer-reviewed Publications

1. **DocAsRef: An Empirical Study on Repurposing Reference-based Summary Quality Metrics as Reference-free Metrics**
Forrest Bao\*, **Ruixuan Tu**\*, Ge Luo, Yinfei Yang, Hebi Li, Minghui Qiu, Youbiao He, and Cen Chen
*Findings of the Association for Computational Linguistics: EMNLP 2023*
(Presented the paper and the poster orally at 4th NewSumm Workshop in person as co-first-author)
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#docasref-abstract" aria-expanded="false" aria-controls="docasref-abstract">Abstract</button> [[ACL Anthology](https://aclanthology.org/2023.findings-emnlp.87/)] [[PDF](https://aclanthology.org/2023.findings-emnlp.87.pdf)]
[Video](https://aclanthology.org/2023.findings-emnlp.87.mp4)

  <div class="collapse" id="docasref-abstract">

  &emsp; Automated summary quality assessment falls into two categories: reference-based and reference-free. Reference-based metrics, historically deemed more accurate due to the additional information provided by human-written references, are limited by their reliance on human input. In this paper, we hypothesize that the comparison methodologies used by some reference-based metrics to evaluate a system summary against its corresponding reference can be effectively adapted to assess it against its source document, thereby transforming these metrics into reference-free ones. Experimental results support this hypothesis. After being repurposed reference-freely, the zero-shot BERTScore using the pretrained DeBERTa-large-MNLI model of <0.5B parameters consistently outperforms its original reference-based version across various aspects on the SummEval and Newsroom datasets. It also excels in comparison to most existing reference-free metrics and closely competes with zero-shot summary evaluators based on GPT-3.5.

  </div>

2. **Funix - The laziest way to build GUI apps in Python**
Forrest Sheng Bao, Mike Qi, **Ruixuan Tu**, Erana Wan
*Proceedings of the Python in Science Conference 2024*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#funix-abstract" aria-expanded="false" aria-controls="funix-abstract">Abstract</button> [[SciPy Proceedings](https://proceedings.scipy.org/articles/JFYN3740)] [[Project](https://github.com/TexteaInc/funix)]

  <div class="collapse" id="funix-abstract">

  &emsp; The rise of machine learning (ML) and artificial intelligence (AI), especially the generative AI (GenAI), has increased the need for wrapping models or algorithms into GUI apps. For example, a large language model (LLM) can be accessed through a string-to-string GUI app with a textbox as the primary input. Most of existing solutions require developers to manually create widgets and link them to arguments/returns of a function individually. This low-level process is laborious and usually intrusive. Funix automatically selects widgets based on the types of the arguments and returns of a function according to the type-to-widget mapping defined in a theme, e.g., bool to a checkbox. Consequently, an existing Python function can be turned into a GUI app without any code changes. As a transcompiler, Funix allows type-to-widget mappings to be defined between any Python type and any React component and its props, liberating Python developers to the frontend world without needing to know JavaScript/TypeScript. Funix further leverages features in Python or its ecosystem for building apps in a more Pythonic, intuitive, and effortless manner. With Funix, a developer can **make it (a functional app) before they (competitors) fake it (in Figma or on a napkin)**.

  **Keywords**: type hints, docstrings, transcompiler, frontend development

  </div>

3. **A review in the core technologies of 5G: device-to-device communication, multi-access edge computing and network function virtualization**
**Ruixuan Tu**\*, Ruxun Xiang\*, Yang Xu, Yihan Mei
*International Journal of Communications, Network and System Sciences, 2019*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#5g-abstract" aria-expanded="false" aria-controls="5g-abstract">Abstract</button> [[SCIRP](https://www.scirp.org/journal/paperinformation?paperid=95497)] [[PDF](https://www.scirp.org/pdf/IJCNS_2019092914040589.pdf)]

  <div class="collapse" id="5g-abstract">

  &emsp; 5G is a new generation of mobile networking that aims to achieve unparalleled speed and performance. To accomplish this, three technologies, Device-to-Device communication (D2D), multi-access edge computing (MEC) and network function virtualization (NFV) with ClickOS, have been a significant part of 5G, and this paper mainly discusses them. D2D enables direct communication between devices without the relay of base station. In 5G, a two-tier cellular network composed of traditional cellular network system and D2D is an efficient method for realizing high-speed communication. MEC unloads work from end devices and clouds platforms to widespread nodes, and connects the nodes together with outside devices and third-party providers, in order to diminish the overloading effect on any device caused by enormous applications and improve users’ quality of experience (QoE). There is also a NFV method in order to fulfill the 5G requirements. In this part, an optimized virtual machine for middle-boxes named ClickOS is introduced, and it is evaluated in several aspects. Some middle boxes are being implemented in the ClickOS and proved to have outstanding performances.

  </div>

### Course Papers

1. **WakaGPT: Classical Japanese Poem Generator**
**Ruixuan Tu**
*Full mark final paper for STAT 453 (Deep Learning) @ UW--Madison, Spring 2024*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#wakagpt-abstract" aria-expanded="false" aria-controls="wakagpt-abstract">Abstract</button> [[PDF](https://direct.turx.asia/wakagpt.pdf)] [[Slide](https://direct.turx.asia/wakagpt_slide.pdf)]

  <div class="collapse" id="wakagpt-abstract">

  &emsp; Waka is a traditional Japanese poem that is usually in a certain mora sequence format. However, generating waka is challenging for general-purpose LLMs like GPT-4 due to lack of data in classical Japanese and this kind of poetry, as well as the usual format restrictions. In this paper, we present WakaGPT, a waka composer based on Japanese GPT-2 and the base models it is fine-tuned on. By self-supervised and semi-supervised training, we are able to generate waka poems with correct grammar and format.

  </div>

2. **Analysis of Post-Meiji Word Origins in Japanese Literature: An approach in computational linguistics**
**Ruixuan Tu**
*A-mark final paper for ASIAN 434 (Japanese Linguistics) @ UW--Madison, Fall 2023*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#morpheme-summary" aria-expanded="false" aria-controls="morpheme-summary">Summary</button> [[PDF](https://direct.turx.asia/as434_paper.pdf)] [[Slide](https://direct.turx.asia/as434_slide.pdf)]

  <div class="collapse" id="morpheme-summary">

  &emsp; We have analyzed the distribution of origins of morphemes on Aozora Bunko dataset over all morphemes, parts of speech, and origins. For the analysis, we have used morpheme analysis tools MeCab and Juman++ by Kyoto University, and based on UniDic data, we fine-tuned DeBERTa-v2-base-Japanese to classify the origins of morphemes into three categories: native, Sino-Japanese (SJ), and mixed. The hypothesis was that the Japanese government advocates the usage of SJ and native words before/in WWII, and western culture becomes more popular after WWII, but as a result from this analysis, we can even see some preferences toward native words, contradicting the hypothesis.

  </div>

3. **Optimizing Bike-Sharing Systems: A Machine Learning Approach to Predict Station Imbalances**
**Ruixuan Tu**, Larissa Xia, Steven Haworth, Jackson Wegner
*1st Most Creative or Interesting Project and 2nd Best Visualizations for STAT 451 (Machine Learning) @ UW--Madison, Summer 2024*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#divvy-summary" aria-expanded="false" aria-controls="divvy-summary">Summary</button> [[PDF](https://direct.turx.asia/stat451_paper.pdf)] [[Slide](https://direct.turx.asia/stat451_slide.pdf)]

  <div class="collapse" id="divvy-summary">

  &emsp; This study analyzes Divvy Bike Station, Trip Data, and American Community Survey Data to predict bike station flow imbalances (overflow/underflow). The key questions are: How can demographic data and machine learning predict bike availability? Is the status of existing stations a reliable indicator for nearby stations? Using Logistic Regression, Decision Tree, SVM for demographic data, and kNN for geographic data, with Recursive Feature Elimination and Grid Search with Cross-Validation, SVM was the most effective. The status of existing Divvy stations reliably predicts the status of nearby stations.

  </div>

## Work Experience

**[Textea Inc](https://github.com/TexteaInc)**
Software Development Engineer Intern (May 2022 --- September 2022)
- Lead Developer of [Funix](https://funix.io/): NodeJS generator from Python functions to serverless web instances, helping ML researchers deploy their apps [[PyCon US 2024 Poster](https://us.pycon.org/2024/schedule/posters/list/)] [[SciPy Conference 2024](https://github.com/scipy-conference/scipy_proceedings/pull/948)]
- Lead Developer of Web Backend: APIs for user auth, permission, admin, RPC and HTTP remote call
- Developer of NLP Backend: classical natural language processing task implementation in Python, API migration

**UW--Madison**
- Peer Mentor (Undergraduate TA) of [COMP SCI 540 (Intro-Artificial Intelligence)](https://pages.cs.wisc.edu/~jphanna/teaching/2023spring_cs540/teaching_team.html): Helping students to learn machine learning, math, game, and search by answering questions during office hours (September 2022 --- May 2024)
  - Received [Golden Bricks Award (2023)](https://www.cs.wisc.edu/2023-cs-department-awards-and-thank-yous/#GOLDEN%20BRICK%20AWARDS) for excellent service to CS Department
- Tutor of Calculus @ University Housing: providing individual and group tutoring to residents taking math courses including multivariable calculus, linear algebra, and intro analysis (September 2022 --- Present)

## Projects

**[KDE Connect](https://kdeconnect.kde.org/)** ([Apple Continuity](https://www.apple.com/macos/continuity/)-like Experience) (November 2018 --- Present)
- Data: 284K normal App Store downloads, 10K active testers, and 1M impressions as of April 2024 App Store
- Lead Developer of [macOS version](https://github.com/TURX/kdeconnect-mac) (new UI, device list, secure connection, plugin ports; [GSoC'22 proposal](https://direct.turx.asia/gsoc-proposal-220418.pdf))
- Developer and Reviewer of [iOS version](https://github.com/KDE/kdeconnect-ios) (About view, background execution with location, trusted networks)
- Maintainer of App Store Connect for release and troubleshooting
- Contribution to Android and Linux versions (new conversation in Android SMS)

## Awards

- Undergraduate Scholarship for Summer Study, UW--Madison, 2023 and 2024
- Silver Medal, 2021 ACM-ICPC NCNA Regional, Team THREE_PUPILS

</div>
