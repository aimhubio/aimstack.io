---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-03-16T16:59:53.238Z
title: Aim 3.7 — Revamped Run Single Page and Aim Docker Image
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*INjZ3YZMiIgIc3EhLos_sw.png
description: Hey team, Aim 3.7 featuring Aim Docker Image is now available! We
  are on a mission to democratize MLOps tools.
draft: false
---
Hey team, Aim 3.7 featuring Aim Docker Image is now available!

We are on a mission to democratize MLOps tools. Thanks to the awesome Aim community for the help and contributions.

[Aim](https://github.com/aimhubio/aim) is an open-source, self-hosted ML experiment tracking tool. It’s good at tracking lots (1000s) of training runs and it allows you to compare them with a performant and beautiful UI.

You can use not only the great Aim UI but also its SDK to query your runs’ metadata programmatically. That’s especially useful for automations and additional analysis on a Jupyter Notebook.

Here is what’s new in the V3.7 release:

* Completely revamped Run Single Page
* TF/Keras adaptors refactoring
* Aim Docker Image

> Special thanks to osoblanco for the help, insights and feedback.

## **Run Single Page Overview**

We have created an overview section on the Run Single page to quickly observe the relevant info about your before getting deep into it.

* The last values of metrics
* Flattened list of key params
* Overview information about your run
* Tracked reproducibility fields (env and git info, etc)

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VsQXh2J_Clq2SE1EDq_ooQ.png)

Aim Docker Image

Now you can pull the Aim docker image from the [docker hub](https://hub.docker.com/r/aimstack/aim)!

For the users who are trying to set up Aim on their clusters or server infrastructure via docker, now you can use the native container — released with each release.

The Aim docker container is pre-packaged Aim that can be mounted on `.aim` directory and UI could be ran.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cjSOM1o9Dk4WNHgDEcE64w.png "Aimstack docker image")

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](community.aimstack.io), share your feedback, open issues for new features, bugs.

Also check the recent blog post on [Aim 3.6](https://aimstack.io/blog/new-releases/aim-3-6-%E2%80%94-chart-export-pytorch-ignite-activeloop-hub-integrations) release featuring Mlflow logs converter & more!