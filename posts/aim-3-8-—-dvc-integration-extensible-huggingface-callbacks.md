---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-04-04T20:27:53.206Z
title: Aim 3.8 — DVC integration & Extensible HuggingFace callbacks
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CIfbNRqB72W36j8gooKi4Q.png
description: "Aim 3.8 featuring extensible HuggingFace trainer callbacks is out
  ! We are on a mission to democratize AI dev tools. "
draft: false
---
Aim 3.8 featuring extensible HuggingFace trainer callbacks is out !

We are on a mission to[ democratize AI dev tools](https://aimstack.io/blog/tutorials/aim-from-zero-to-hero). Thanks to the awesome Aim community for the help and contributions.

Here is what’s new:

* Color scale of numeric values
* DVC integration
* Extensible HuggingFace and XGBoost callbacks

> Special thanks to osoblanco, ashutoshsaboo and mohamadelgaar for the help and feedback

\
Color scale of numeric values

Due to popular demand an Aim 2.x feature is back!

Now you can color-code the aggregated metric values on the Runs Explorer. The highest values will be in green and the lowest in yellow. The color changes from yellow to green at the median.

We are surely going to iterate over this feature. Further feedbacks are welcome!

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LOgBqVnIeq3fc_EduNAAfw.png "Aimstack: Color scale of numeric values")

## DVC integration

Now you can track the info about your DVC tracked files and datasets on Aim. With this we are iterating towards easy connection between Aim and DVC so you can connect your tracked artifacts with experiment tracking.

Share more feedback with us. How would you like to see this evolve?

The code looks as simple as this:

```
from aim.sdk import Run
from aim.sdk.objects.plugins.dvc_metadata import DvcData

run = Run(system_tracking_interval=None)

path_to_dvc_repo = '.'
run['dvc_info'] = DvcData(path_to_dvc_repo)
```

## Extensible HuggingFace and XGBoost callbacks

When using Aim with your favorite frameworks, the metadata is logged through `AimCallback` which is limited as it allows only specific group of logged metrics per framework.

Now you can extend the AimCallback and log any other metadata made available by the framework. [Detailed docs here.](https://aimstack.readthedocs.io/en/latest/using/integration_guides.html)

Here is an example on how to extend the HuggingFace callback to track texts with Aim:

```
from aim.hugging_face import AimCallback
from aim import Text


class CustomCallback(AimCallback):
    def on_log(self, args, state, control,
               model=None, logs=None, **kwargs):
        super().on_log(args, state, control, model, logs, **kwargs)

        context = {
            'subset': self._current_shift,
        }
        for log_name, log_value in logs.items():
            if isinstance(log_value, str):
                self.experiment.track(Text(log_value), name=log_name, context=context)
```

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](community.aimstack.io), share your feedback, open issues for new features, bugs.

And don’t forget to leave Aim a star on GitHub for support.