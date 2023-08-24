---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-05-25T20:49:49.499Z
title: Aim 3.10 — Visualize terminal logs, M1 support & better query autocomplete
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*z5HbX-z8qa0ORFDRKArmFw.png
description: Hey team, Aim 3.10 is now available! What's new? A lot! Visualize
  terminal logs, M1 support, better autocomplete experience, integration with
  CatBoost and LightGBM.
draft: false
---
Hey team, Aim 3.10 is now available!

We are on a mission to [democratize AI dev tools](https://aimstack.io/blog/new-releases/aims-foundations-why-were-building-a-tensorboard-alternative). Thanks to the awesome Aim community for the help and contributions.

Here is what’s new in Aim 3.10:

* Visualize terminal logs
* M1 support
* Better autocomplete experience
* Aim citation available
* CatBoost integration
* LightGBM integration

Check out the 3.10 release [milestone](https://github.com/aimhubio/aim/milestone/33) and the [GitHub Release Notes](https://github.com/aimhubio/aim/releases/tag/v3.10.0)

> *Shout out to Daniel Wessel, [arnauddhaene](https://github.com/arnauddhaene),[ uduse](https://github.com/uduse), [lukoucky](https://github.com/lukoucky), Armen Aghajanyan and others for contributions and feedback. We really appreciate it.*

## Visualize terminal logs

When it comes to automating training of multiple runs with job schedulers or workload managers on a cluster, it becomes hard to track the **terminal** **logs** of the runs.

Now Aim automatically streams the terminal logs to the UI. Near-real-time.

The terminal logs can be turned off if the run instance is created with the following flag in place:

```
aim_run = Run(capture_terminal_logs=False)
```

Check out more about this feature [in Aim docs](https://aimstack.readthedocs.io/en/latest/using/configure_runs.html?highlight=terminal%20logs#capturing-terminal-logs).

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*K60XrQq0iH6NlO0NFz44EQ.png)

## M1 support

[With the awesome work by the PyTorch team](https://twitter.com/PyTorch/status/1526944876478144512) on enabling support for GPU-accelerated PyTorch training on Mac, there has been a huge demand to enable aim on M1 as well.

Aim now supports M1 too. Now you can use Aim with [PyTorch](https://pytorch.org/blog/introducing-accelerated-pytorch-training-on-mac/) on Mac to track and deeply compare your experiments.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Mp5LKw55RgE4gnPXC1cWIg.png)

## Better autocomplete experience

We have integrated a rich code autocomplete system as the Aim community loves to deeply query their training runs. This has been a highly requested improvement and a huge productivity booster. Expect more improvements here.

![](https://miro.medium.com/v2/resize:fit:1400/1*vEQnAJSks5YGNCXHllDnNA.gif)

## Aim citation available

Now you can cite Aim from your paper if you are using Aim to compare your experiments. [The citation file](https://github.com/aimhubio/aim/blob/main/CITATION.cff).

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HLHweR2at8tbpHiTkelbfA.png)

[Thanks to the researchers from Meta AI Research for the incentive and initiative.](https://arxiv.org/abs/2205.10770)  🙌

## CatBoost integration

[CatBoost](https://catboost.ai/) is one of the fastest Gradient Boosting on Decision Trees library. Aim now supports CatBoost out of the box. Check out the[ Aim CatBoost docs here](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-catboost).

Here is a short [example](https://github.com/aimhubio/aim/blob/main/examples/catboost_track.py) that shows how to use AimLogger for CatBoost.

## LightGBM integration

[LightGBM](https://lightgbm.readthedocs.io/en/latest/) is one of the most widely-used and battle-tested gradient boosting frameworks. Due to high-demand we have also added an out-of-the-box Aim LightGBM integration.

[Here is a short code example](https://github.com/aimhubio/aim/blob/main/examples/lightgbm_track.py) and [the docs](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-lightgbm) on how to use the integration.

- - -

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.io/blog/new-releases/aims-foundations-why-were-building-a-tensorboard-alternative)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.

* [](https://twitter.com/share?url=https://aimstack.io/aim-3-10-release-catboost-integration/&text=Aim%203.10%20%E2%80%94%20Visualize%20terminal%20logs%2C%20M1%20support%20%26%23038%3B%20better%20query%20autocomplete)