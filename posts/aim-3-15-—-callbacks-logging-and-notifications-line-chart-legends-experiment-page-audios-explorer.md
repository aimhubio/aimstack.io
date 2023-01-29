---
author: Gor Arakelyan
categories:
  - New Releases
date: 2022-12-06T21:40:50.164Z
title: Aim 3.15 — Callbacks, logging and notifications, line chart legends,
  experiment page, Audios Explorer
image: https://miro.medium.com/max/1400/1*wQWwnwDeCSVQ-YbZapbHlQ.webp
description: Aim 3.15 is out!
draft: false
---
## Hey team, get ready for a major upgrade!

We are thrilled to announce the release of Aim v3.15, packed with new features and improvements.

> *We are on a mission to democratize AI dev tools and are incredibly lucky to have the support of the community. Without your help, Aim would not be where it is today.*
>
> *Congratulations to [jangop](https://github.com/jangop), [hjoonjang](https://github.com/hjoonjang) and [kumarshreshtha](https://github.com/kumarshreshtha)* *for their first contributions.*

**TL;DR** The new version includes lots of significant and highly requested enhancements, as well as key improvements. Here are the highlights:

* **Callbacks**
* **Logging and notifications**
* **Line chart legends**
* **Audios Explorer**
* **Experiment page**
* **Robust locking mechanism**
* **Integrations with PaddlePaddle and Optuna**

# Aim SDK

## **Callbacks**

Many things can go wrong during ML training that could result in wasted GPUs and time. The Aim callbacks API helps to define custom callbacks to be executed at any point during ML training.

Find API docs and examples [here](https://aimstack.readthedocs.io/en/latest/using/callbacks.html).

An end-to-end toy script below:

*Send a notification and exits the process, when the loss explodes.*

```
import random
import time

from aim import Run
from aim import TrainingFlow
from aim.sdk.callbacks import events


# Define the callbacks
class MyCallbacks:
    @events.on.training_metrics_collected
    def check_loss_explosion(self, metrics, run, **kwargs):
        if metrics.get('loss') > 1:
            # Log warning message and send the corresponding notification
            run.log_warning(f'loss exploded: {metrics["loss"]}')
            # Exit the process
            exit()


# Initialize Aim run and register callbacks
run = Run()
training_flow = TrainingFlow(run=run)
training_flow.register(MyCallbacks())


# Training simulation
for _ in range(100):
    loss = random.random() * 2
    print(loss)
    run.track(loss, name='loss', context={'subset': 'train'})
    training_flow.training_metrics_collected(
        metrics={'loss': loss},
        run=run
    )
    time.sleep(1)
```

## Logging and notifications

During the training many key events happen. Use new Aim logging API to log any text message and send the corresponding notification to slack or workplace. It is as easy as calling `aim_run.log_error(message)`.

It perfectly fits with callbacks API and enables programmatically defining training heuristics and including it as part of the code. A simple example is “let me know when the training run starts to overfit”.

Read more in the [docs](https://aimstack.readthedocs.io/en/latest/using/logging.html).

# Aim UI

## Chart legends

Since the early days of Aim’s launch, one of the most requested features has been displaying chart legends. And finally it is here! The legends section makes it easy to learn metrics corresponding fields and hyper-params at a glance.

![](https://miro.medium.com/max/1400/1*TFNCZjjwXFg7JZv1F1qSpg.webp)

## **Audios Explorer**

To track the performance of ML models that process speech data, it is important to track audio objects.

The new Audios Explorer makes it super easy to query and play tracked audio objects across the runs. Flexible grouping options enable arranging them into rows and columns to make exploration even easier.

![](https://miro.medium.com/max/1400/1*mnP4qbmlQuJE-nGqe-36lw.webp)



## Experiment page

The experiment page provides an holistic view of the results of the trainings in order to identify trends and patterns that can help inform further experimentation and optimization.

Experiment page consists from the following tabs:

* 🏠 **Overview** — Experiment overview, number of active/finished runs, timeline of the runs.
* 🏃 **Runs** —Holistic view of the experiment runs.
* 📓 **Notes** — Experiment notes and insights with notion-like rich editor.
* ⚙️ **Settings** — Experiment settings, such as name and description.

![](https://miro.medium.com/max/1400/1*h-DLE3XnBM5uGKBDRcu_iA.webp)

# Integrations

## Integration with PaddlePaddle

With Aim v3.15 it takes just two steps to integrate Aim into your PaddlePaddle training script.

```
# Step 1: Explicitly import the AimCallback for tracking training metadata
from aim.paddle import AimCallback

...

# Step 2: Pass the callback to callbacks list upon initiating your training
callback = AimCallback(repo='.', experiment='paddle_test')
model.fit(train_dataset, eval_dataset, batch_size=64, callbacks=callback)

```

See docs [here](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-paddlepaddle).

## Integration with Optuna

Smoothly integrate Aim into your Optuna project.

Here are the [docs](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-optuna) and a short code snippet.

```
from aim.optuna import AimCallback

...
aim_callback = AimCallback(experiment_name="optuna_single_run")
study.optimize(objective, n_trials=10, callbacks=[aim_callback])
```

# *Key optimizations and fixes*



## Runs locking mechanism and finished runs detection

Number of issues were reported w.r.t runs locking. More robust locking mechanism is applied starting from Aim v3.15.

## Remote server scaling

Now it is possible to spin up several workers to achieve higher processing speed for remote tracking server. Just run the server passing “workers” argument: `aim server --workers=N`

# Learn more

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html) 🙌

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://discord.gg/F5TpzUeY), share your feedback, open issues for new features, bugs.

Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aim) if you think Aim is useful ⭐️