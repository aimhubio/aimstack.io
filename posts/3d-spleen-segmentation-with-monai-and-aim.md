---
author: Gev Soghomonian
categories:
  - Tutorials
date: 2022-06-27T20:55:12.121Z
title: 3D Spleen Segmentation with MONAI and Aim
image: /images/dynamic/image-7-.jpeg
description: In this tutorial we will show how to use Aim and MONAI for 3d
  Spleen segmentation on a medical dataset from http://medicaldecathlon.com/.
  This is a
draft: false
---
In this tutorial we will show how to use Aim and MONAI for 3d Spleen segmentation on a medical dataset from [](http://medicaldecathlon.com/)<http://medicaldecathlon.com/>.

This is a longer form of the [3D spleen segmentation tutorial](https://github.com/Project-MONAI/tutorials/blob/main/3d_segmentation/spleen_segmentation_3d_visualization_basic.ipynb) on the MONAI tutorials repo.

For a complete in-depth overview of the code and the methodology please follow [this tutorial](https://github.com/osoblanco/tutorials/blob/master/3d_segmentation/spleen_segmentation_3d.ipynb) directly or our very own [Aim from Zero to Hero tutorial](https://aimstack.io/aim-from-zero-to-hero-track-machine-learning-experiments/).

## ***Tracking the basics***

As we are dealing with an application in a BioMedical domain, we would like to be able to track all possible transformations, hyperparameters and architectural metadata. We need the latter to analyze our model and results with a greater level of granularity.

### ***Transformations Matter***

The way we preprocess and augment the data has massive implications for the robustness of the eventual model. Thus carefully tracking and filtering through the transformations is obligatory. Aim helps us to seamlessly integrate this into the experiment through the`Single Run Page`.

![](/images/dynamic/image-10-.png)

You can further search/filter through the runs based on these transformations using Aims’ very own pythonic search language `AimQL`. An Advanced usage looks like this

![](/images/dynamic/image-11-.png)

### *Lets talk about models and optimizers*

Similar to the augmentations, tracking the architectural and optimization choices during model creation can be essential for analyzing further feasibility and the outcome of the experiment. It is seamless to track; as long the (hyper)parameters conform to a pythonic `dict`-like object, you can incorporate it within the trackables and enjoy the complete searchability functional from`AimQL`

```
aim_run  = aim.Run(experiment = 'some experiment name')

aim_run['hparams'] = tansformations_dict_train
...
UNet_meatdata = dict(spatial_dims=3,
    in_channels=1,
    out_channels=2,
    channels=(16, 32, 64, 128, 256),
    strides=(2, 2, 2, 2),
    num_res_units=2,
    norm=Norm.BATCH)

aim_run['UNet_meatdata'] = UNet_meatdata

...

aim_run['Optimizer_metadata'] = Optimizer_metadata
```

![](/images/dynamic/image-12-.png)

## What about Losses?

Majority of people working within the machine learning landscape have tried to optimize a certain type of metric/Loss w.r.t. the formulation of their task. Gone are the days when you need to simply look at the numbers within the logs or plot the losses post-training with matplotlib. Aim allows for simple tracking of such losses (The ease of integration and use is an inherent theme).

Furthermore, a natural question would be, what if we have numerous experiments with a variety of losses and metrics to track. Aim has you covered here with the ease of tracking and grouping. Tracking a set of varying losses can be completed in this fashion

```
aim_run  = aim.Run(experiment = 'some experiment name')

#Some Preprocessing
...

# Training Pipeline
for batch in batches:
    ...
    loss_1 = some_loss(...)
    loss_2 = some_loss(...)
    metric_1 = some_metric(...)

    aim_run.track(loss_1 , name = "Loss_name", context = {'type':'loss_type'})
    aim_run.track(loss_2 , name = "Loss_name", context = {'type':'loss_type'})
    aim_run.track(metric_1 , name = "Metric_name", context = {'type':'metric_type'}
```

After grouping, we end up with a visualization akin to this.

![](/images/dynamic/image-5-.jpeg)

Aggregating, grouping, decoupling and customizing the way you want to visualise your experimental metrics is rather intuitive. You can also view the [complete documentation](https://aimstack.readthedocs.io/en/latest/ui/pages/explorers.html) or simply play around in our [interactive Demo](http://play.aimstack.io:10005/metrics?grouping=sSkH8CfEjL2N2PMMpyeXDLXkKeqDKJ1MtZvyAT5wgZYPhmo7bFixi1ruiqmZtZGQHFR71J6X6pUtj28ZvTcDJ1NWH4geU9TQg2iR7zCqZjH8w7ibFZh7r9JQZmDzGAeEFJ2g3YuHhkdALqh5SyvBQkQ4C25K8gEeqAeyWUuGt8MvgMRwh3pnPLTUTKn9oTTPZpkPJy7zxorCDuDaxyTs5jEcYbf5FNyfebhPfqNSN1Xy7mEzCXFQ6jZwDna66mgMstQwsyJuzzcE23V3uDMcjgoxyc6nM8u9e6tKsSe6RoTthTb6EPtybXY7wkZK4FiKh3QUdG1RQfdYnEbMPmuTkpfT&chart=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&select=nRQXLnzJjzDBzMLB3gt1tALq8LJuSijBuau3LyWmSS6Vs1q1nAq4EnJj8B9RDW4NfkmHXeWB4bTG7j4V3cTmta8mai2rg8qPSakFJPPAv2P6E1x743h8tgv1w3jM6YezL5fxoFob5jRmZCny2eSx8zom9Qn4pzxghL3QhXKtoXP9rYkVZjAX4ygouGixW1zptzZL4sWJpB7XCm5T6iofmEa982TuLyChnTJEJVhSaYnpKPpJerJF9fzAPdpUgiGLGuw14fLfhd72ZbXjqMSvE2YG2YQc96yUMfo2YUtjfaAeez7D89DhqBRrCaK4Yj4Mr4TAxahAo7YT2j1cSU52L1h2KdaSDaXx5kWMFSPxWHLMswAdZUznB1nFx9YjLnsyZiqNDcE76zC9AZzfNYjfnnG2MLKHAKMQ7c4tbfXczLBWWVs3gPsz7wNzywaeQ4N1audqH4MGVKBUeeAFSiX2FbEXuzK57EkmaLg3rAC4WrDMi8WC6t3b75o3XkdkZrwoR6eDHVrhUaa4fr5CeMuFSSTzzPUm25gSUGwWHiXxV4So7FxJ8UDqCfm46DGDQLpKgAHAvRSFeHxT5bvCkXgpUJykrJLNmtsGxijMqi6Dgidd4VcUgkjd6iE8k7UzuHWCv4JSD6RyspgAei1p6YK5rdKdtQwhFm1YBRqSuaKBzn2GhRztAfC23jb).

## *A picture is worth a thousand words*

In the context of BioMedical Imaging, particularly 3D spleen segmentation, we would like to be able to view how does the model improve over the training iterations. Previously this would have been a challenging task, however, we came up with a rather neat solution at `Aim`. You can [track images](https://aimstack.io/aim-monai-tutorial/(%3Chttps://aimstack.readthedocs.io/en/latest/quick_start/supported_types.html#%3E)) as easily as losses using our framework, meaning the predictions masks on the validation set can be tracked per slice of the 3D segmentation task.

```
aim_run.track(aim.Image(val_inputs[0, 0, :, :, slice_to_track], \
                        caption=f'Input Image: {index}'), \
                name = 'Validation',  context = {'type':'Input'})

aim_run.track(aim.Image(val_labels[0, 0, :, :, slice_to_track], \
                        caption=f'Label Image: {index}'), \
                name = 'Validation',  context = {'type':'Label'})
aim_run.track(aim.Image(output,caption=f'Predicted Label: {index}'), \
                name = 'Predictions',  context = {'type':'labels'})
```

All the grouping/filtering/aggregation functional presented above are also available for Images.

![](/images/dynamic/image-6-.jpeg)

![](/images/dynamic/image-7-.jpeg)

## *A figure is worth a thousand pictures*

We decided to go beyond simply comparing images and try to incorporate the complete scale of 3D spleen segmentation. For this very purpose created an optimized animation with plotly. It showcases the complete (or sampled) slices from the 3d objects in succession. Thus, integrating any kind of Figure is simple as always

```
aim_run.track(
    aim.Figure(figure),
    name='some_name',
    context={'context_key':'context_value'}
)
```

Within *`Aim`* you can access all the tracked Figures from within the `Single Run Page`

``

![](/images/dynamic/image-2-.gif)

Another interesting thing that one can [track is distributions](https://aimstack.readthedocs.io/en/latest/ui/pages/run_management.html#id7). For example, there are cases where you need a complete hands-on dive into how the weights and gradients flow within your model across training iterations. Aim has integrated support for this.

```
from aim.pytorch import track_params_dists, track_gradients_dists

....

track_gradients_dists(model, aim_run)
```

Distributions can be accessed from the Single Run Page as well.

![](/images/dynamic/image-6-.png)

## ***The curtain falls***

In this blogpost we saw that it is possible to easily integrate Aim in both ever-day experiment tracking and highly advanced granular research with *`1-2`* lines of code. You can also play around with the completed MONAI integration results with our [interactive demo](http://play.aimstack.io:10005/).

If you have any bug reports please follow up on our [github repository](https://github.com/aimhubio/aim/issues/new/choose). Feel free to join our growing [Slack community](https://slack.aimstack.io/) and ask questions directly to the developers and seasoned users.

If you find Aim useful, [please stop by](https://github.com/aimhubio/aim) and drop us a star.