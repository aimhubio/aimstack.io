---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-04-20T13:39:39.516Z
title: Aim v2.3.0 — System Resource Usage and Reverse Grouping
image: https://miro.medium.com/v2/resize:fit:1400/1*txmn1LOXJ7nGift0T82lng.gif
description: "Aim 2.3.0 allowing System Resource Usage optimization is out! Some
  highlights: Reverse grouping, Line Chart Smoothing, New aggregation modes.
  Check out! "
draft: false
---
[Aim](https://github.com/aimhubio/aim) 2.3.0 is out! Thanks to the community for feedback and support on our journey towards democratizing AI dev tools.

Check out the updated Aim at [play.aimstack.io](http://play.aimstack.io:10001/).

Below are the highlight features of the update. Find the full list of changes [here](https://github.com/aimhubio/aim/milestone/3?closed=1).

## System Resource Usage

Now you can use automatic tracking of your system resources (GPU, CPU, Memory, etc). In order to disable system tracking, just initialize the session with `system_tracking_interval==0`.

Once you run the training, you will see the following. Here is a demo:

![](https://miro.medium.com/v2/resize:fit:1400/1*pOMxDdOpUDIOedrNIM53pQ.gif "Aim automatic system resource tracking demo")

Of course you can also query all those new metrics in the Explore page and compare, group, aggregate with the rest of the metrics!

## Reverse grouping (“against” the param)

As much as grouping is needed to divide pile of metrics by param values into manageable clusters for comparison, there are cases when the metrics need to be divided by everything BUT one param (yes, I am looking at you seed!). We have called it a Reverse Grouping. Here is how it works:

![](https://miro.medium.com/v2/resize:fit:1400/1*txmn1LOXJ7nGift0T82lng.gif "Aim Reverse grouping demo")

Use the toggle next to switch between grouping modes.

## Line Chart Smoothing

Now you can apply smoothing on metrics. Here is how it works:

![](https://miro.medium.com/v2/resize:fit:1400/1*MgNuAaH6gzm7u-H2QUh15g.gif "Aim metric smoothing")

There are two type of smoothing options available: `Exponential Moving Average` and `Central Moving Average`. Further info of [how](https://en.wikipedia.org/wiki/Moving_average) it’s calculated.

## New aggregation modes

We have additionally added two more aggregation modes: `standard error` and `standard deviation` . Here is how it works:

![](https://miro.medium.com/v2/resize:fit:1400/1*LS17WlLey5aJfMyJbtgtBg.gif)

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://github.com/aimhubio/aim#democratizing-ai-dev-tools)

We have been incredibly lucky to get help and contributions from the amazing Aim community. In fact, It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.

And don’t forget to leave [Aim](https://github.com/aimhubio/aim) a star on GitHub for support.