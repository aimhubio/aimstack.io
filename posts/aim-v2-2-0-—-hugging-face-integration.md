---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-03-24T13:20:24.937Z
title: Aim v2.2.0 — Hugging Face integration
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MqbllMOE307ZvLLuH0MhvA.png
description: Aim 2.2.0 featuring Hugging Face integration is out! Thanks to the
  incredible Aim community for the feedback and support on building democratized
  open-source AI dev tools.
draft: false
---
[Aim](https://github.com/aimhubio/aim) 2.2.0 featuring Hugging Face integration is out! Thanks to the incredible Aim community for the feedback and support on building democratized open-source AI dev tools.

Thanks to [siddk](https://github.com/siddk), [TommasoBendinelli](https://github.com/TommasoBendinelli) and [Khazhak](https://github.com/Khazhak) for their contribution to this release.

> **Note on the Aim versioning:** The previous two release posts: [Aim 1.3.5](https://aimstack.io/blog/new-releases/mlops-tools-aim-1-3-5-activity-view-and-x-axis-alignment/) and [Aim 1.3.8](https://aimstack.io/blog/new-releases/aim-1-3-8-enhanced-context-table-and-advanced-group-coloring/) had used the version number of [AimUI](https://aimstack.readthedocs.io/en/latest/ui/overview.html) as those contained only UI changes. From now on we are going to stick to the Aim versions only regardless of the type of changes to avoid any confusion. [Check out the Aim CHANGELOG](https://github.com/aimhubio/aim/blob/main/CHANGELOG.md).

We have also added [milestones](https://github.com/aimhubio/aim/milestones) for each version. As well as the [Roadmap](https://github.com/aimhubio/aim#roadmap).

Check out the new features at [play.aimstack.io](http://play.aimstack.io:43900/dashboard).

## Hugging Face integration

Hugging Face integration has been one of the most requested features so far and we are excited to finally ship it. Here is a code snippet of easy it is to integrate Aim and Hugging Face.

```
from aim.hugging_face import AimCallback
from transformers import Trainer

aim_callback = AimCallback(repo='/log/dir/path', experiment='your_experiment_name')

trainer = Trainer(
       model=model,
       args=training_args,
       callbacks=[aim_callback]
    )
```

Here is how it works: `aim_callback` will automatically open an Aim `Session` and close it when the trainer is done. When `trainer.train()`, `trainer.evaluate()` or `trainer.predict()` is called, `aim_callback` will automatically log the hyper-params and respective metrics.

Find a full example [here](https://github.com/aimhubio/aim/blob/main/examples/hugging_face_track.py).

## Metric Visibility Control

When dealing with lots of experiments some metrics may need hide (while still being in the Search) to allow better visibility of the overall picture.

A toggle is now available both for each metric/row as well as for global on/off. Check out the demo below:

![](https://miro.medium.com/v2/resize:fit:1400/1*yZAWw55lUWVCa35zptdCrA.gif "Hide individual metrics as well as collectively")

## Column resize

With lots of params tracked, some of them are too wide for table and take over the whole screen real estate. Column resize will allow to fully control data width on the table. Resize is available both on Explore and Dashboard tables.Here is a quick demo:

![](https://miro.medium.com/v2/resize:fit:1400/1*KFUs6pmpqOCVhfdWMO6CVg.gif "Drag column edges back-and-forth to resize")

## Hide columns with similar values

More often than not params have lots of repetition. Especially when tracking 100s of them. In that case the explore table becomes super-noisy.

This feature allows showing only the relevant info. This has been certainly the missing piece of the column management that many had requested. Here is a quick demo:

![](https://miro.medium.com/v2/resize:fit:1400/1*klN4dR6T8nSHLqyvqIUjOg.gif "Leave only different columns with a button click, if needed customize afterwards")

## Logscale

One of the must-have features that we hadn’t had a chance to work on. Finally it’s available!!

![](https://miro.medium.com/v2/resize:fit:1400/1*cin-2u7a14bj9fB46WmZJw.gif "log-scale on Aim")

## New methods for aggregation

Now you can select different types of aggregations as well as whether to see the whole area or just the aggregated lines.

![](https://miro.medium.com/v2/resize:fit:1400/1*xfp0OtVsz6s4vhIdQ1nLIw.gif)

## Learn More

[Aim is on the mission to democratize AI dev tools.](https://github.com/aimhubio/aim#democratizing-ai-dev-tools)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://slack.aimstack.io/), share your feedback.

And don’t forget to leave [Aim](https://github.com/aimhubio/aim) a star on GitHub for support 🙌.