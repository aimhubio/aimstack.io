---
author: Gor Arakelyan
categories:
  - New Releases
date: 2023-01-20T06:16:21.056Z
title: Aim 2022; Product Recap
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mpgFSGReVaycf5644hM6xw.png
description: A retrospective look at the past year!
draft: false
---
# A retrospective look at the past year



Aim underwent significant improvements in the past year. Over the course of 50 releases, including 12 minor releases and 38 patch releases, Aim received contributions from 35 total contributors, including 18 new external contributors. These contributions included 769 merged pull requests and 487 submitted issues!

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xhiLjCXeyDNrMIuZU5_SXg.png "Aim contributions pulse")

There was a significant progress in various areas of the Aim, including adding more supported platforms, taking the UI to the whole new level, adding remote tracking capabilities, revamping the CLI, extending the QL and moving towards active monitoring for optimizing large-scale trainings.

In addition to adding new features and extending Aim, improvements in performance and usability were applied to enhance the overall user experience. Furthermore, new integrations with machine learning tools were implemented to make it easier to use Aim in a broader technology stack

Overall, these improvements greatly enhanced the functionality and usability of Aim for tracking machine learning experiments for both small and large scale projects.

# Aim Community

![](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*GitHotOjlY9WPsvQmWaqwQ.png "Aim contributors")



> We are on a mission to democratize AI dev tools!

Numerous external contributions were pushed to “main” in 2022. Without community support, Aim would not be where it is today.

Congratulations to [Sharathmk99](https://github.com/Sharathmk99), [YodaEmbedding](https://github.com/YodaEmbedding), [hjoonjang](https://github.com/hjoonjang), [jangop](https://github.com/jangop), [djwessel](https://github.com/djwessel), [GeeeekExplorer](https://github.com/GeeeekExplorer), [dsblank](https://github.com/dsblank), [timokau](https://github.com/timokau), [kumarshreshtha](https://github.com/kumarshreshtha), [kage08](https://github.com/kage08), [karan2801](https://github.com/karan2801), [hendriks73](https://github.com/hendriks73), [yeghiakoronian](https://github.com/yeghiakoronian), [uduse](https://github.com/uduse), [arnauddhaene](https://github.com/arnauddhaene), [lukoucky](https://github.com/lukoucky), [Arvind644](https://github.com/Arvind644), [shrinandj](https://github.com/shrinandj) for their first contributions over the past year! 🎉

These contributions have covered a range of areas, including documentation, user guides, the SDK and the UI!

# Highlights

* Supported platforms were expanded to include Docker, Apple M1, Conda, Google Colab and Jupyter Notebooks.
* The UI was given a makeover, with upgraded home and run single pages, as well as brand new experiment page. The new audio and figure explorers now allow for the exploration of more types of metadata.
* Aim remote tracking server was rolled out to enable tracking from multi-host environments.
* Active monitoring capabilities were enabled, such as notifications for stalled runs, and the ability to programmatically define training heuristics using callbacks and notifications.
* Aim was integrated with 9 different machine learning frameworks alongside with 3 convertors that help to migrate from other experiment trackers.
* Last but not least, the documentation was completely revamped, including almost 40 pages of guides towards helping in effectively using and understanding Aim.

# **Supported Platforms**



Improvements were made to ensure Aim works seamlessly with widely used environments and platforms in ML/MLOps field, including adding support for new platforms.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*aYG-SSawh8Q8jte6BjyNMQ.png)



* Support for running Aim on Apple M1 devices.
* Support for using Aim inside Google Colab and Jupyter notebooks.
* Docker images for Aim UI and server.
* Support for running Aim in Kubernetes clusters.
* Aim became available in Conda.

# User Interface



The UI is one of key interfaces to interact with the ML training runs tracked by Aim. It’s super-powerful for comparing large number of trainings. The UI was significantly improved in the past year with new pages and explorers to help to explore more metadata types.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*odqgX33xLVzYBI6sfRYRWQ.png "Home Page")



* Revamped home page to see project’s contributions and overall statistics.
* Revamped run page to deep-dive into an individual run.
* Brand new experiment page to view experiment’s details, attached runs, etc.
* New explorers, such as the “Figures Explorer” and “Audio Explorer”, to allow a cross-run comparison of Plotly figures and audio objects respectively.
* “Metrics Explorer” key enhancements, including displaying chart legends and the ability of exporting charts as images.



# Command Line Interface



Aim CLI offers a simple interface to easily manage tracked trainings. Two key groups of commands were added:

* **Runs management** to enable the base operations for managing trainings — list, copy, remove, move, upload, close.
* **Storage management** to help to manage Aim data storage, such as reindexing, pruning, managing data format versions (advanced usage).

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MZFkXFzmz5BxGYofUgWdTg.png)

# Query Language

Aim enables a powerful query language to filter through all the stored metadata using python expressions. A few additions were done providing a more friendly and pythonic interface for working with date-time expressions, as well as querying runs based on its metrics results.

![](https://miro.medium.com/v2/resize:fit:1284/format:webp/1*6J9gouDEt9Mkhv9Cds4dNw.png)

# Remote Tracking

The Aim remote tracking server, which allows running trainings in a multi-host environment and collect tracked data in a centralized location, used to be one of the most requested features.

It has been gradually rolled out from its experimental phase to a stable version that can scale up and handle an increasing number of parallel trainings.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CizfTBF8Nh4DZcun6TP8Pg.png)

Switching from a local environment to a centralized server is as easy as pie, as zero code changes are required.⚡\
This is because the interfaces are completely compatible!

# Active Monitoring

Aim made it first steps towards optimizing conducting long and large scale trainings, such as training or tuning GPT-like models. It reduces human-hours spent monitoring/restarting runs, improves reproducibility and ramps up time for people who need to train these models:

* Ability to notify on stalled/stuck runs.
* Callbacks and notifications to define training heuristics programmatically.

A quote from “Scaling Laws for Generative Mixed-Modal Language Models” (Aghajanyan et al., 2023, [arXiv:2301.03728](https://arxiv.org/abs/2301.03728)):

> We tracked all experiments using the Aim experiment tracker (Arakelyan et al., 2020). To ensure consistent training strategies across our experiments, we implemented a model restart policy using the Aim experiment tracker and callbacks. Specifically, if training perplexities do not decrease after 500 million tokens, the training run is restarted with a reduced learning rate with a factor of 0.8 of the current time step. This policy helps remove variance in the scaling laws due to differences in training procedures and allows us to scale up the number of asynchronous experiments significantly. All experiments were conducted in a two-month time frame with a cluster of 768 80GB A100 GPUs. The majority of experiments used 64 GPUs at a time.

# Key Performance and Usability Optimizations

* Storage: long metrics sampling and retrieval (>1M steps).
* Storage: robust locking mechanism and automatic background indexing.
* UI: The v3.12 milestone was released, addressing over 30 usability issues.
* UI: virtualizations in various places across the UI to improve responsiveness when displaying large amount of data.
* UI: optimizations in stream decoding and data encoding to enhance overall performance.
* UI: live update optimizations to effectively update and display real-time data.

# Integrations

Aim easily integrates with a large number of widely adopted machine learning frameworks and tools, reducing barriers to get started with Aim. During the past year, a number of integrations were added:

* **ML Frameworks** — Pytorch Ignite, CatBoost, LightGBM, KerasTuner, fastai, MXNet, Optuna, PaddlePaddle
* **Convertors** to easily migrate from other tools **—** TensorBoard to Aim, MLFlow to Aim, WandB to Aim.
* **Tools that integrated Aim** — Meta’s fairseq and metaseq frameworks, HuggingFace’s accelerate, Ludwig and Kedro.

![](https://miro.medium.com/v2/resize:fit:1358/format:webp/1*YT4Yf1sJUqQLWRtiF8fJgQ.png)

# Learn More



If you have any questions join [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features and bugs. 🙌

Show some love by dropping a ⭐️ on [GitHub](https://github.com/aimhubio/aim), if you find Aim useful.