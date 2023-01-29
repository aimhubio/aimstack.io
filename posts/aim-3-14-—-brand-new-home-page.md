---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-11-03T21:31:15.756Z
title: Aim 3.14 — Brand new Home Page!
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*GEJ0_GtGyXC4sv2sZrSCRA.png
description: "Hey team, Aim 3.14 is now available! "
draft: false
---
# Hey team, Aim 3.14 is now available!

We are releasing a new Aim version every 4–5 weeks with community-contributed features and fixes.

**A brand new Aim release every few weeks**. With new features and fixes! 🚀

> We are on a mission to democratize AI dev tools. Thanks to the awesome Aim community for the help and contributions.
>
> Thanks to [djwessel](https://github.com/djwessel) and [Vahram-aimhub](https://github.com/Vahram-aimhub) for their first contributions🔥🔥🔥

# Aim 3.14 Overview

Here is what’s new in the latest release:

* **Brand new Home Page**
* **MXNet and FastAI loggers**
* **New tooltip positioning modes**
* **Ability to edit tags on the runs table**

Check out the [Aim 3.14 release milestone](https://github.com/aimhubio/aim/milestone/41) and the [GitHub Release Notes](https://github.com/aimhubio/aim/releases/tag/v3.14.0) for more information.

> Note: at the time of writing this, Aim is at [3.14.3](https://github.com/aimhubio/aim/releases) — check those intermediate versions too.

# Brand new Home Page

After months of requests from the community to build a quick access page, improve the onboarding, we are excited to introduce new Home page.

The home page is pretty self-descriptive. It’s an overview of whatever actions have been taken using Aim.

This is in no way the final version, we continue to iterate on it. Would love to hear your feedbacks.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qhWVuIETasWSsUc3oEYdfQ.png)

# MXNet and fastai loggers

Now there are loggers available both for MxNet and FastAI.

It takes only a few lines to incorporate Aim to your code.

Here is how it looks for MXNet in your code. More [MXNet integration details here](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-mxnet)



```
from aim.mxnet import AimLoggingHandler

aim_log_handler = AimLoggingHandler(repo='.', experiment_name='mxnet_example',
                                    log_interval=1, metrics=[train_acc, train_loss, val_acc])

est.fit(train_data=train_data_loader, val_data=val_data_loader,
        epochs=num_epochs, event_handlers=[aim_log_handler])
```

This is the code for fastai Aim integrations. [More details here.](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-fastai)

```
from aim.fastai import AimCallback

learn = cnn_learner(dls, resnet18, pretrained=True,
                    loss_func=CrossEntropyLossFlat(),
                    metrics=accuracy, model_dir="/tmp/model/",
                    cbs=AimCallback(repo='.', experiment='fastai_example'))
```

## New tooltip positioning modes

We have added three buttons to the Explorers tooltip on click.

These buttons allow to fix where you’d want to see these tooltips appear when hovering over the metrics.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*71V5hEnGIOg2-QIi01ok1A.png)

In this case we have chosen to place the tooltip at the top of the page.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2vDsrHdRa42jxpTcG66nkg.png)

# Ability to edit tags on the runs table

Tags have become one of the widely used features lately and we are iterating so you can make the best out of them.

Now you can add tags to your runs from within the Runs Explorer.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*vk0DJyFCGdw9A_TPzGDMRg.png)

# Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html) 🙌

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://slack.aimstack.io/), share your feedback, open issues for new features, bugs.

Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aim) if you think Aim is useful ⭐️.