---
author: Gev Sogomonian, Gor Arakelyan, Ben Lorica
categories:
  - New Releases
date: 2023-10-03T20:09:25.239Z
title: "Aim 4.0: Open-source modular observability for AI Systems"
image: /images/dynamic/medium-5-1-.png
description: We're excited to announce Aim 4.0's release! 🚀 Originating as a
  single-node experiment tracker, now it's an Operating system for logging
  anything, anywhere!!
draft: false
---
## The software lifecycle is broken

AI is changing how software is built and deployed. AI Systems are not deterministic, so observability is a key layer in the AI Systems development stack.

Changing the code is no longer enough to change the behavior of the AI system - a kind of systems that are inherently unreliable and hard to iterate on.

With the rise of the LLMs and Generative AI, there are many more use-cases that are built with AI. This means more software needs to be monitored and observed.

> The mainstream ideas of software logging and observability may not work anymore as the use-cases and needs have increased dramatically.

## Software systems need to be logged

Logging is inseparable from software all along - from code versioning to production monitoring to AI experiment tracking to agent tracing to full observability.

![](/images/dynamic/1111-1.png)

**With AI systems, we now have to deal with many more dimensions. Developing an AI System is as demanding as deploying it to production and integrating it with other software components.**

We are now faced with problems of AI alignment and safety. AI regulation conversations are moving at full speed. The AI system governance and lineage are key when tackling any of these problems.

For this, teams are trying to log as much as they can at every possible dimension.

To satisfy these needs, we must be able to:

* Log anything from every part of the AI Infra
* Observe and interpret the logged data at scale in a flexible fashion
* Add layers and layers of automations around the logged data

Altogether these form the observability and logging layer for AI Systems.

> The observability layer for AI Systems is inherently complex and needs to encompass end-to-end development + production and beyond to allow to fully connect the dots.

## What do developers need from the AI Systems observability layer?

We need to log and observe at every step of building AI Systems.

![Basic AI system observability](/images/dynamic/222-1.png "Basic AI system observability")

Over the last three years, we have collaborated with hundreds of teams to enhance our understanding of observability requirements in AI systems. The capability to track diverse data sources stands out, given that logs are invaluable for discerning system health and facilitating infrastructure evolution.

In addition, the ability to customize log visualizations increases the depth of analysis, enabling teams to discern intricate relationships within their setups. The use of automation ensures not only optimal performance but also increased reliability for AI systems.

The lineage of an AI System is also vitally important, covering a wide range of considerations from governance to regulatory to best practices. The need for robust governance over AI Systems grows as compliance needs increase. In the end, we aim for an integrated approach to governance that provides detailed lineage insights and unwavering traceability.

![Key requirements: AI Observability Layer](/images/dynamic/444-1.png "Key requirements: AI Observability Layer")

### We need well-developed open-source tools for observability use-cases

Logs are now essential for overcoming the fundamental challenges of AI adoption. It is crucial for organizations to maintain ownership of their logs and ensure that they remain in an open format without third-party control. As AI systems evolve, the tools used for observability must also mature.

> Ideally, these tools should be easy to use but powerful enough to meet next-stage infrastructure needs.

Unfortunately, current mainstream observability tools are centralized, lack interoperability, and mostly run on closed-source platforms. These tools are not inherently scalable and often only address a fraction of the overall observability requirements.

## Introducing Aim 4.0 - Operating system for logs

Aim began as a tool for tracking experiments, and it ran on a single node

* Aim 2.0 - AI experiment logger for metrics and hyperparameters.
* Aim 3.0 - AI experiment logger for any kind of Python objects.
* **Aim 4.0 - Operating system for logs.** 💫

Aim runs logging applications that can easily be composed and extended to larger ones encompassing both the main and long-tail use-cases.

![Modular observability for AI Systems](/images/dynamic/333-1.png "Modular observability for AI Systems")

Within the context of Aim, logging applications are Python packages that Aim can run.

## There are many logging apps that need to exist

![Aim logging app structure](/images/dynamic/555-1.png "Aim logging app structure")

There are many logging uses-cases for AI systems, which necessitates collaboration across the community. Many of these use-cases are at the intersection of different tools and frameworks used in development and production.

Here are some examples of apps that need to be built:

* data visualization apps (+ automations)
* model performance apps (+ automations),
* model explainability apps + automations,
* workflow visualization apps + automations,
* model monitoring apps + automations,
* specific regulation-apps + automations,
* connector and integration apps + automations,
* lineage apps + automations.

## Aim is simple first, then powerful

Users don’t have to know Aim in-depth to be able to use it. You don’t even need to know if it’s an operating system - it takes a few commands and built-in packages to start with.

![Aim default apps](/images/dynamic/666-1-.png "Aim default apps")

Using Aim means installing Aim and running an Aim logging app. Aim comes with a number of built- apps that can go a long way:

* Base app,
* Experiment tracking app,
* AI Systems tracing app.

It takes only a couple of commands to start with Aim.

We have published high-level roadmap about the next steps. 

> Checkout the Aim 4.0 documentation [here](https://aimstack.readthedocs.io/en/latest/).

The contributors to core Aim and package creators are very welcome to help us build out the future of logging infrastructure for AI Systems and beyond.

## **Learn more**

[Aim is on a mission to democratize AI Systems logging tools.](https://aimstack.readthedocs.io/en/latest/overview.html) 🙌

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.

Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aim) if you think Aim is useful. ⭐️