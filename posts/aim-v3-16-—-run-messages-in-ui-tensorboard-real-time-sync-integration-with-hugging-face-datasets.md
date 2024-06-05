---
author: Gor Arakelyan
categories:
  - New Releases
date: 2023-02-15T06:56:43.141Z
title: Aim 3.16 — Run messages in UI, TensorBoard real-time sync, integration
  with Hugging Face Datasets
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*G-AzW2_QT8nvsgLUQH9JeA.png
description: "🚀 Aim v3.16 is out! Users will be able to view all Run messages
  right in the UI. Integration of Aim with TensorBoard, Hugging Face Datasets,
  Acme, Stable-Baselines3. "
draft: false
---
Hey community, excited to announce Aim v3.16 is out! 🚀 It is packed with new integrations and key enhancements.

> *We are on a mission to democratize AI dev tools and are incredibly lucky to have the support of the community. Every question and every issue makes Aim better!*
>
> *Congratulations to [timokau,](https://github.com/timokau) [dsblank](https://github.com/dsblank) and [grigoryan-davit](https://github.com/grigoryan-davit) for their first contributions. 🙌*

# Key highlights

## **Run messages tab in UI**

Starting from version 3.15, Aim has enabled an ability to [log training messages](https://aimstack.readthedocs.io/en/latest/using/logging.html) and even [send notifications](https://aimstack.readthedocs.io/en/latest/using/notifications.html) to Slack or Workplace.

With the version 3.16, you’ll be able to view all your [run messages](https://aimstack.readthedocs.io/en/latest/using/logging.html) right in the UI. All the information you need is just a click away! 💫

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*PxqbmJJcqYaH1tLmcg59Xw.png)

## **Real-time sync with TensorBoard logs**



Aim smoothly integrates with experiment tracking tools. If you’re part of a team that’s already deeply integrated TensorBoard into your projects and pipelines, you will love this enhancement.

With just one simple line of code, you can integrate Aim with your existing TensorBoard projects. This means that all your logs will be automatically converted to Aim format in real-time. 🔥🔥🔥

```
from aim.ext.tensorboard_tracker import Run

aim_run = Run(
    sync_tensorboard_log_dir='TB_LOG_DIR_TO_SYNC_RUNS'
)

```

## **Support for Python 3.11**

The Python community has received fantastic news towards the end of 2022. The stable Python 3.11 has been officially released!

With Aim 3.16 release, you can install and use Aim in your python 3.11 projects. 🎉

```
pip3.11 install aim
```

## **Dropped support for Python 3.6**

Time to say goodbye: Python 3.6 has reached the end-of-life. 💀

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WpHtGUIfWc5RXtDk0TNKTQ.png)

This change allows us to take advantage of the latest advancements in the Python language and provide you with a more robust and reliable library.

Please note that if you have been using Aim in your Python 3.6 projects, you will need to upgrade to newer Python versions in order to continue using Aim.

**We apologize for any inconvenience this may cause, but rest assured that the improved stability of Aim will make it worth the transition.**

# New integrations

Aim 3.16 is packed with new integrations with favorite ML tools!

## **Aim + Hugging Face Datasets = ❤**

Happy to share now you can easily track and store dataset metadata in Aim run and explore it on the UI.

```
from datasets import load_dataset

from aim import Run
from aim.hf_dataset import HFDataset

# Load the dataset
dataset = load_dataset('rotten_tomatoes')

# Store the dataset metadata
run = Run()
run['datasets_info'] = HFDataset(dataset)
```

See the docs [here](https://aimstack.readthedocs.io/en/latest/quick_start/supported_types.html#logging-huggingface-datasets-dataset-info-with-aim).

## **Aim + Acme = ❤**

Aim’s been added a built-in support for tracking [Acme](https://dm-acme.readthedocs.io/en/latest/) trainings. It takes few simple steps to integrate Aim into your training script.

1. Explicitly import the `AimCallback` and `AimWriter` for tracking training metadata:

```
from aim.sdk.acme import AimCallback, AimWriter
```

2. Initialize an Aim Run via `AimCallback`, and create a log factory:

```
aim_run = AimCallback(repo=".", experiment_name="acme_test")

def logger_factory(
    name: str,
    steps_key: Optional[str] = None,
    task_id: Optional[int] = None,
) -> loggers.Logger:
    return AimWriter(aim_run, name, steps_key, task_id)
```

3. Pass the logger factory to `logger_factory` upon initiating your training:

```
experiment_config = experiments.ExperimentConfig(
    builder=d4pg_builder,
    environment_factory=make_environment,
    network_factory=network_factory,
    logger_factory=logger_factory,
    seed=0,
    max_num_actor_steps=5000)
```



See the docs [here](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-acme).

## **Aim + Stable-Baselines3 = ❤**

Now you can easily track [Stable-Baselines3](https://stable-baselines3.readthedocs.io/en/master/) trainings with Aim. It takes two steps to integrate Aim into your training script.

1. Explicitly import the `AimCallback` for tracking training metadata

   ```
   from aim.sb3 import AimCallback
   ```

   2. Pass the callback to `callback` upon initiating your training:

   ```
   model.learn(total_timesteps=10_000, callback=AimCallback(repo='.', experiment_name='sb3_test'))
   ```

   See the docs [here](https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-stable-baselines3).

   # Learn more

   [Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html) 🙌

   Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.

   Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aim) if you think Aim is useful. ⭐️