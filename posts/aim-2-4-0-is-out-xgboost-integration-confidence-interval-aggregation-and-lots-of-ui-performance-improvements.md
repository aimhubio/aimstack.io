---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-05-18T13:58:29.035Z
title: Aim 2.4.0 is out! XGBoost integration, Confidence interval aggregation
  and lots of UI performance improvements!
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*R0oLJAp9haSFzb92CSSyAg.png
description: Aim 2.4.0 is out! XGBoost integration, Confidence interval
  aggregation and lots of UI performance improvements!
draft: false
---
[Aim](https://github.com/aimhubio/aim) 2.4.0 featuring XGBoost Integration is out ! Thanks to the community for feedback and support on our journey towards democratizing MLOps tools.

Check out the updated Aim at [play.aimstack.io](http://play.aimstack.io:10001/).

For this release, there have been lots of performance updates and small tweaks to the UI. Above all, this post highlights the two features of Aim 2.4.0. Please see the full list of changes [here](https://github.com/aimhubio/aim/milestone/6?closed=1).

## XGBoost Inegration

To begin with,  `aim.callback` is now available that exports `AimCallback` to be passed to the `xgb.train` as a callback to log the experiments.

Check out this [blogpost](https://aimstack.io/blog/tutorials/an-end-to-end-example-of-aim-logger-used-with-xgboost-library) for additional details on how to integrate Aim to your XGBoost code.

## Confidence Interval as the aggregation method

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LyjcE9k4-cZGl5g03F3Mjg.png)

Now you can use confidence intervals for aggregation. The community has been requesting this feature, since it completes the list of necessary aggregation methods. As a result, if you have outlier metrics in your group, confidence interval will show logical aggregation and get better comparison of the groups. 

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://github.com/aimhubio/aim#democratizing-ai-dev-tools)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Check out the latest [Aim integration](https://aimstack.io/blog/new-releases/aim-v2-2-0-%E2%80%94-hugging-face-integration)!

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.

And don’t forget to leave [Aim](https://github.com/aimhubio/aim) a star on GitHub for support.