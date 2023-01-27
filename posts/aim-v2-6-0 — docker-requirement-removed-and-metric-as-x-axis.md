---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-06-24T14:25:34.071Z
title: Aim v2.6.0 — Docker requirement removed and Metric as x-axis
image: https://aimstack.io/wp-content/uploads/2021/06/2.6.0.png
description: Before and after Aim v2.5.0
draft: false
---
## Metric as an alternative x-axis

Sometimes when comparing the metrics, it’s not enough to just put them into perspective via subplots.

For instance in the quick demo below, we are looking at a Neural Machine Translation (NMT) problem where two metrics are being compared — `loss` and`bleu`. One of the main indicators of a performant model in NMT, is when higher values of `bleu` correlates with the lower values of `loss`.

Just plotting them besides each other sometimes isn’t enough to see how they correlate. In this case we use `loss` as the x-axis to directly see the correlation between the `loss`and the`bleu` metrics for two groups of runs ( `max_k==3`and `max_k == 1`).

![](https://aimstack.io/wp-content/uploads/2022/02/1_Y0wAL9nZ7IhgLOUr-cCRRQ.gif "Demo for metric as alternative x-axis")

Using a different metric as the x-axis helps to see the correlation between two metrics of training runs better.

> **Note**: if the metric is not increasing monotonously, its values re-order. Then they set as the x-axis (see in case of the loss).

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://github.com/aimhubio/aim#democratizing-ai-dev-tools)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://join.slack.com/t/aimstack/shared_invite/zt-193hk43nr-vmi7zQkLwoxQXn8LW9CQWQ), share your feedback, open issues for new features, bugs.

And don’t forget to leave [Aim](https://github.com/aimhubio/aim) a star on GitHub for support.