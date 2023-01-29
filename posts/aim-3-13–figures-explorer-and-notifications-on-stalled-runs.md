---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-04-24T21:08:50.210Z
title: Aim 3.13–Figures Explorer and notifications on stalled runs
image: https://miro.medium.com/max/1400/1*5hUcOciwufupoI4-nBbcyA.webp
description: "In this blogpost I will share the improvements Aim 3.13. We had
  released 2 more versions (Aim 3.11 and 3.12) that we haven’t had the chance to
  talk about much. "
draft: false
---
# Hey team, Aim 3.13 is now available!

In this blogpost I will share the improvements Aim 3.13. We had released 2 more versions (Aim 3.11 and 3.12) that we haven’t had the chance to talk about much. Stay tuned on the [AimStack](https://twitter.com/aimstackio) twitter where we will share them and more use-cases.

**Aim is evolving really quickly! 🚀**

> *We are on a mission to democratize AI dev tools. Thanks to the awesome Aim community for the help and contributions.*
>
> *Thanks to [Sharathmk99 and](https://github.com/Sharathmk99) [tmynn](https://github.com/tmynn) for their first contributions!! 🔥🔥🔥*

**TLDR;**

Aim 3.13 is full of impactful changes. Here are the main highlights!

* **Figures Explorer**\
  Explore and compare 100s of Plotly figures within a few clicks.
* **Notify about stalled runs**\
  Configure Aim to notify your team when the run is stalled (slack, email, workspace are available)
* **Stable Aim Remote Server**
* **KerasTuner integration**
* **Weights and Biases log converter**

Check out the Aim 3.13 release [milestone](https://github.com/aimhubio/aim/issues?q=is%3Aissue+milestone%3Av3.13.0+is%3Aopen) and the [GitHub Release Notes](https://github.com/aimhubio/aim/releases/tag/v3.13.0) for more information.

# Figures Explorer

Figures Explorer is a new addition to the mighty Aim explorers. With this feature now you can compare 1000s of Plotly figures within a few clicks.

This is just the first iteration 😊. Expect lots of improvements of the experience over time. This is how the figures explorer works:

![](https://miro.medium.com/max/1400/1*WKwbKRBJPK8fErSKVItf6Q.gif)

# Notify about stalled runs

One of the ways the precious training time is prolonged / wasted when for some reasons the runs stall. The training runs can stall in so many different ways:

* Hardware issues
* exception in the code
* driver issues

And many other things we never anticipate. This feature allows Aim users to configure notifications to their preferred channel (slack, workspace) when the run stalls.

Check out the [docs](https://aimstack.readthedocs.io/en/latest/using/run_status_notifications.html#) for more info. Here is how it looks on your slack:

![](https://miro.medium.com/max/1400/1*OFZh37yiEa_vo-14gv7UFw.webp)

# Stable Aim Remote Server

Aim Remote allows to set up a remote Aim tracking server so the tracked logs can be sent to a centralized location.

It’s been a while since Aim Remote Server was an experimental feature. We have been lucky as the users have started using it and shared lots of feedbacks, issues that we have fixed.

Now we are excited to announce that the Aim Remote Server is stable

![](https://miro.medium.com/max/1400/1*zC-crWCgWncraYJFQRAd3g.webp)

# KerasTuner integration

A highly requested integration with KerasTuner.

Here are the [docs](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-keras-tunerhttps://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-keras-tuner) and a short code snippet. Super-easy to integrate Aim with your KerasTuner project now.

```
from aim.keras_tuner import AimCallback

...

tuner = kt.Hyperband(
    build_model, objective="val_accuracy", max_epochs=30, hyperband_iterations=2
)
...
tuner.search(
    train_ds,
    validation_data=test_ds,
    callbacks=[AimCallback(tuner=tuner, repo='.', experiment='keras_tuner_test')],
)
```

# Weights and Biases log converter

The W&B users who also wanted to use Aim in their work, have been asking about this feature for a while now.

Excited to share that now you can easily convert your W&B logs to Aim.

Here is how it works:

```
cd project-directory
# Init the Aim repo
aim init 
# Run the converter to migrate logs from WandB to Aim
aim convert wandb --entity 'my_team' --project 'my_project'
```

# Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html) 🙌

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://slack.aimstack.io/), share your feedback, open issues for new features, bugs.

Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aim) if you think Aim is useful ⭐️