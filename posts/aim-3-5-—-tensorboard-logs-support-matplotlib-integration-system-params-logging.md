---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-02-10T16:15:32.942Z
title: Aim 3.5 — TensorBoard logs support, Matplotlib integration & System
  Params logging
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8xQnlTBk3BmsoMgsaE_0oQ.png
description: "Hey team, Aim 3.5 featuring TensorBoard logs support is now
  available!! We are on a mission to democratize MLOps tools. "
draft: false
---
Hey team, Aim 3.5 featuring TensorBoard logs support is now available!! We are on a mission to democratize MLOps tools. Thanks to the awesome Aim community for the help and contributions.

Here is what’s new:

* Aim supports TensorBoard logs
* Track system params, CLI ,Env, Executable, Git, Installed packages
* Matplotlib figure tracking and visualization
* Ability move runs between Aim repos

> Special thanks to [gloryVine](https://github.com/gloryVine), [hughperkins](https://github.com/hughperkins), [Ssamdav](https://github.com/SSamDav), [ptaejoon](https://github.com/ptaejoon), mahnerak, gormat and [Mike](https://github.com/mikel-brostrom)l for feedback, issues and help.

## TensorBoard logs support



It’s been one of the most highly requested features by the Aim community. This feature was available for Aim 2.x and folks used to love this it. However, we had to drop it due to the backend changes.

Now its back! Better than it was before and this is how it works:

```
$ cd /path/to/.aim
$ aim convert tf --logdir ~/tensorflow/logdir
```

This command will  scan then convert the `scalar` and `image` type logs from your directory into Aim runs.

Read more about how it works [here](https://aimstack.readthedocs.io/en/latest/guides/integrations/basic_aim_tensorflow_event_conversion.html).

## Tracking Env info, git info with Aim

Tracking your ENV variables, CLI argument, git info, etc could be a lot of details to care about.

Now there is a way to enable Aim to track the environment info automatically and they will be available as params.

It takes a small tweak to enable that:

```
run = Run(log_system_params=True)
```

Then once tracked, you can search experiments based on these values too:

```
run.__system_params.git_info.branch == 'feature/testing'
```

More on this feature find out [here](https://aimstack.readthedocs.io/en/latest/guides/training_reproducibility.html).

> A special UI for these tracked data is to be shipped with the next version.

## Tracking Matplotlib figures



Starting Aim 3.5 you can also track [Matplotlib](https://matplotlib.org/) figures with Aim. During research (especially with Jupyter Notebooks) Matplotlib is very helpful in rendering intermediate images for analysis.

Now you can track all such figures on Aim (both as Matplotlib figure and as an image). When tracking as an image, you can query and compare them too at scale on the [Images Explorer.](https://aimstack.io/blog/new-releases/aim3-1-images-tracker-and-images-explorer/)

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*zYdPka8XdPLAOxLdITESAw.png)

[Here are the docs for more details](https://aimstack.readthedocs.io/en/latest/guides/basic_aim_matplotlib.html).

## Moving Runs between Aim repos

We have added a CLI command to move runs between folders.

This will allow to easily move your best runs from a draft scratch project to your main one with one command. Here is how it works:

```
im mv --destination /new/path/to/.aim <my_run_hash_1> ...
```

\
For more info, check the runs subcommand docs [here](https://aimstack.readthedocs.io/en/latest/refs/cli.html#runs).

## Learn more

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling  and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://join.slack.com/t/aimstack/shared_invite/zt-193hk43nr-vmi7zQkLwoxQXn8LW9CQWQ), share your feedback, open issues for new features, bugs.

And don’t forget to leave [Aim](https://github.com/aimhubio/aim) a star on GitHub for support.