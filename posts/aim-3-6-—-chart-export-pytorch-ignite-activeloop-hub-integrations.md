---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-02-24T16:27:07.254Z
title: Aim 3.6 — Chart export, PyTorch Ignite & Activeloop Hub integrations
image: https://aimstack.io/wp-content/uploads/2022/02/3.6.0-banner.png
description: Hey team, Aim 3.6 featuring Mlflow logs converter, Chart export,
  PyTorch Ignite & Activeloop Hub integrations is now available!
draft: false
---
Hey team, Aim 3.6 featuring Mlflow logs converter, Chart export, PyTorch Ignite & Activeloop Hub integrations is now available!

We are on a mission to democratize MLOps tools. Thanks to the awesome Aim community for the help and contributions.

Here is what’s new in addition to [Aim 3.5](https://aimstack.io/aim-3-5-tensorboard-logs-support-matplotlib-integration-system-params-logging/).

* Export chart as image
* MLflow to Aim logs converter
* Pytorch Ignite integration
* Activeloop Hub integration
* Wildcard support for *aim runs* subcommands

*Special thanks to [krstp](https://github.com/krstp), [ptaejoon](https://github.com/ptaejoon), [farizrahman4u](https://github.com/farizrahman4u) from Activeloop, [vfdev-5](https://github.com/vfdev-5) from PyTorch Ignite, [hughperkins](https://github.com/hughperkins), [Ssamdav](https://github.com/ssamdav) and [mahnerak](https://github.com/mahnerak) for feedback, reviews and help.*

## Export chart as image

Hey awesome Aim community, sorry for shipping [this feature](https://github.com/aimhubio/aim/issues/339) so late. We know it has been so highly requested, just couldn’t get our hands on it over and over again.

Now the images export is here! You can export charts as JPEG, PNG and SVG so you can include the awesome Aim visuals in your reports and research papers.

![](https://aimstack.io/wp-content/uploads/2022/02/3.6.png)

You can control the width, height, the format of the downloadable image.

> The ability to add / edit legends will be added in the coming versions.

Would still love to hear feedback on how would you like us to tune this feature.

## MLflow to Aim logs converter



Its been also [requested](https://github.com/aimhubio/aim/issues/409) across the board by many users. Now you can convert your MLflow logs to Aim so you can compare all of them regardless on where it was tracked.

Here is how it works:

```
$ aim init
$ aim convert mlflow --tracking_uri 'file:///Users/aim_user/mlruns'
```

Besides the metrics, You can convert Images, Texts and Sound/Audios. More on that in [here](https://aimstack.readthedocs.io/en/latest/quick_start/convert_data.html#show-mlflow-logs-in-aim).

![](https://aimstack.io/wp-content/uploads/2022/02/mlflow.png)

## Pytorch Ignite integration

For all the Aim users who use PyTorch Ignite, there is now a native PI callback available so you can track your basic metrics automatically!

Here is a code snippet on how to use the PI integration:

```
# call aim sdk designed for pytorch ignite
from aim.pytorch_ignite import AimLogger

# track experimential data by using Aim
aim_logger = AimLogger(
    experiment='aim_on_pt_ignite',
    train_metric_prefix='train_',
    val_metric_prefix='val_',
    test_metric_prefix='test_',
)

# track experimential data by using Aim
aim_logger.attach_output_handler(
    train_evaluator,
    event_name=Events.EPOCH_COMPLETED,
    tag="train",
    metric_names=["nll", "accuracy"],
    global_step_transform=global_step_from_engine(trainer),
)
```

![](https://aimstack.io/wp-content/uploads/2022/02/pytorch.png)

## Activeloop Hub integration



Excited to share that thanks to [an integration with Activeloop](https://activeloop.ai/), starting Aim 3.6 you can add your [Hub dataset](https://github.com/activeloopai/Hub) info as a run param and use them to search and compare your runs across all Explorers.

Here is a code snippet to demonstrate the usage:

```
import hub

from aim.sdk.objects.plugins.hub_dataset import HubDataset
from aim.sdk import Run

# create dataset object
ds = hub.dataset('hub://activeloop/cifar100-test')

# log dataset metadata
run = Run(system_tracking_interval=None)
run['hub_ds'] = HubDataset(ds)
```

The following information becomes available among others:

```
run.hub_ds.version
run.hub_ds.num_samples
run.hub_ds.tensors.name
run.hub_ds.tensors.compression_type
```

Hub is an awesome tool to build, manage, query & visualize datasets for deep learning, as well as stream data real-time to PyTorch/TensorFlow & version-control it. Check out the [Hub docs](https://docs.activeloop.ai/).

![](https://aimstack.io/wp-content/uploads/2022/02/hub.png)

Wildcard support for the \`aim runs\` command

On [Aim 3.5](https://aimstack.io/blog/new-releases/aim-3-5-tensorboard-logs-support-matplotlib-integration-system-params-logging/) we made available the `run mv` command which allows to move single runs between folders.

Now we have also added the wildcard to move the whole folder altogether

Here is the CLI interface:

```
$ aim runs --repo <source_repo/.aim> mv * --destination <dest_repo/.aim>
```

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://join.slack.com/t/aimstack/shared_invite/zt-193hk43nr-vmi7zQkLwoxQXn8LW9CQWQ), share your feedback, open issues for new features, bugs.

And don’t forget to leave [Aim](http://github.com/aimhubio/aim) a star on GitHub for support.