---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-10-22T14:48:48.452Z
title: Aim’s foundations & why we’re building a Tensorboard alternative
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Bd5FbXnYnB3fbELmRLTPwA.png
description: The origins of Aim. In the fateful summer of 2020, our friend
  mahnerak – a researcher at a non-profit lab was hitting the limits of
  Tensorboard. He wasn’t
draft: false
---
## The origins of Aim

In the fateful summer of 2020, our friend [mahnerak](https://twitter.com/mahnerak) – a researcher at [a non-profit lab](https://yerevann.com/) was hitting the limits of Tensorboard. He wasn’t going to send the training logs to a third-party cloud. Meanwhile, spending hours on Tensorboard bothered to focus on his actual research. That’s how we decided to build a Tensorboard alternative.

[Gor](https://github.com/gorarakelyan) and I started hacking on an open-source library to store metrics and hyperparameters. In a month, mahnerak was using Aim 1.0 instead of Tensorboard to track, store, search and group his metrics.

By fall 2020, [Aim 2.0](https://aimstack.io/blog/new-releases/aim-v2-2-0-%E2%80%94-hugging-face-integration) launched as a free, open-source and self-hosted alternative to Weights and Biases, Tensorboard and MLflow. To our surprise even [r/MachineLearning loved it](https://www.reddit.com/r/MachineLearning/comments/jfgbij/project_aim_a_supereasy_way_to_record_search_and/).

 By spring 2021, mahnerak co-authoerd a paper [WARP](https://aclanthology.org/2021.acl-long.381/) ([code](https://github.com/yerevann/warp)): Word-level Adverserial ReProgramming on his ACL-published work. At that point Aim users had contributed over 100 feature requests already.

## A scale problem

But Aim’s power users — who often do 5K+ runs —were hitting issues.

After over 250 pull requests, 1.2K GitHub stars and 200 feature requests. *Live updates, image tracking, distribution tracking*… and Aim 2.0 was hitting the limits of Aim 1.0’s design.

In order to support the future, we had to make changes to the foundation now.

## Launching Aim 3.0.0

An additional [317 pull requests](https://github.com/aimhubio/aim/milestone/13?closed=1) later, we are excited to launch Aim v3.0.0 !!!

As a result, the most important changes include:

**A completely revamped UI**

* Home page and run detail page
* Runs, metrics and params explorers
* Bookmarks and Tags

**A completely revamped Aim Python SDK**

* New and much more intuitive (but still quite vanilla) API to track your training runs
* New and 10x faster embedded storage based on [Rocksdb](http://rocksdb.org/). This will allow us to store virtually any type of AI metadata. On the contrary, [AimRecords](https://github.com/aimhubio/aimrecords) was designed for metrics and hyperparams only.

Enjoy the changes!

![](https://miro.medium.com/v2/resize:fit:1400/1*xbg148dzileheVdOALBMBg.gif)

## Performance improvements

* Average run query execution time on ~2000 runs: 0.784s.
* Average metrics query execution time on ~2000 runs with 6000 metrics: 1.552s.
* New UI works smooth with ~500 metrics displayed at the same time with full Aim table interactions (*for comparison, v2 was performant with limitation for only 100 metrics*).

## Comparisons to familiar tools

### Tensorboard

**Training run comparison**

* The tracked params are first class citizens at Aim. So, you can search, group, and aggregate via params. Aim allows to deeply explore all the tracked data (metrics, params, images) on the UI.
* With Tensorboard alternative solution the users are forced to record those parameters in the training run name to be able to search and compare. This causes a super tedious comparison experience and usability issues on the UI when there are many experiments and params. After all, TensorBoard doesn’t have features to group, aggregate the metrics

**Scalability**

* Aim can handle 1000s of training runs both on the backend and on the UI.
* TensorBoard becomes really slow and hard to use when a few hundred training runs are queried / compared.

Aim will have the beloved TB visualizations

* Embedding projector.
* Neural network visualization.

### [](https://github.com/aimhubio/aim#mlflow)MLFlow

MLflow is an end-to-end ML Lifecycle tool. Aim is focused on training tracking. In general, the differences of Aim and MLflow are around the UI scalability and run comparison features.

**Run comparison**

* Aim treats tracked parameters as first-class citizens. Users can query runs, metrics and images. Also, they can filter using the params.
* MLflow does have a search by tracked config. However, there is no feature availability such as grouping, aggregation, subplotting by hyparparams .

**UI Scalability**

* Aim UI can handle several thousands of metrics at the same time smoothly with 1000s of steps. It may get shaky when you explore 1000s of metrics with 10000s of steps each. But we are constantly optimizing!
* MLflow UI becomes slow to use when there are a few hundreds of runs.

### [](https://github.com/aimhubio/aim#weights-and-biases)Weights and Biases

**Hosted vs self-hosted**

* Weights and Biases is a hosted closed-source MLOps platform.
* Aim is self-hosted, free and open-source experiment tracking tool.

## Aim Roadmap[](https://github.com/aimhubio/aim#tensorboard)

With this version we are also publishing the Aim [roadmap](https://github.com/aimhubio/aim#roadmap) for the next 3 months.

This is a living document and we hope that the community will help us shape it towards supporting the most important use-cases.

We are also [inviting community contributors](https://github.com/aimhubio/aim#community) to help us get there faster!

## Why are we building Aim?

We have started to work on Aim with strong belief that the open-source is in the DNA of AI software (2.0) development.

Existing open-source tools (TensorBoard, MLFlow) are super-inspiring for us.

However we see lots of improvements to be made. Especially around issues like:

* ability to handle 1000s of large-scale experiments
* actionable, beautiful and performant visualizations
* extensibility — how easy are the apis for extension/democratization?

With this in mind, we are inspired to build beautiful and performant AI dev tools with great APIs.

Our mission…

Aim’s mission is to democratize AI dev tools. We believe that the best AI tools need to be:

* open-source, open-data-format, community-driven
* have great UI/UX, CLI and other interfaces for automation
* performant both on UI and data
* extensible — enable ways to build around for so many use-cases

## Thanks to

[Ruben Karapetyan](https://twitter.com/roubkar) for being the first to believe in this project and spending lots of his time and setting the foundations for the beautiful UI.

[Mahnerak](https://twitter.com/mahnerak) for sharing his problems and continuously testing and coming up with better solutions on UX, features. Also for helping us build the next-gen storage for Aim.

Aim users Mohammad Elgaar, Vopani for continuous feedback on our work.

The contributors who have been relentlessly iterating over the course of the summer.

On to the next generation of ML tools!!

## Join Us!

Join the [Aim community](https://slack.aimstack.io/), test Aim out, ask questions, help us build the future of AI tooling!

If you find Aim useful, drop by and star the repo ⭐