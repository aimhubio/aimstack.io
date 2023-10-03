---
author: Davit Grigoryan
categories:
  - Tutorials
date: 2023-03-14T07:19:42.802Z
title: Reproducible forecasting with Prophet and Aim
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZaIDQvLbqy0KyVG22D0epw.png
description: "You can now track your Prophet experiments with Aim! The recent
  Aim v3.16 release includes a built-in logger object for Prophet runs. "
draft: false
---
You can now track your Prophet experiments with Aim! The recent Aim v3.16 release includes a built-in logger object for Prophet runs. It tracks Prophet hyperparameters, arbitrary user-defined metrics, extra feature variables, and system metrics. These features, along with the intuitive Aim UI and its pythonic search functionality can significantly improve your Prophet workflow and accelerate the model training and evaluation process.

# What is Aim?

[Aim](https://aimstack.io/) is the fastest open-source tool for AI experiment comparison. With more resources and complex models, more experiments are ran than ever. Aim is used to deeply inspect thousands of hyperparameter-sensitive training runs.

# What is Prophet?

[Prophet](https://research.facebook.com/blog/2017/2/prophet-forecasting-at-scale/) is a time series forecasting algorithm developed by Meta. Its official implementation is open-sourced, with libraries for Python and R.

A key benefit of Prophet is that it does not assume stationarity and can automatically find trend changepoints and seasonality. This makes it easy to apply to arbitrary forecasting problems without many assumptions about the data.

# Tracking Prophet experiments with Aim

Prophet isn’t trained like neural networks, so you can’t track per-epoch metrics or anything of the sort. However, Aim allows the user to track Prophet hyperparameters and arbitrary user-defined metrics to compare performance across models, as well as system-level metrics like CPU usage. In this blogpost we’re going to see how to integrate Aim with your Prophet experiments with minimal effort. For many more end-to-end examples of usage with other frameworks, check out [the repo](https://github.com/aimhubio/aim/tree/main/examples).

In the simple example below, we generate synthetic time series data in the format required by Prophet, then train and test a single model with default hyperparameters, tracking said hyperparameters using an AimLogger object. Then, we calculate MSE and MAE and add those metrics to the AimLogger. As you can see, this snippet can easily be extended to work with hyperparameter search workflows.

```
from aim.from aim.prophet import AimLogger
...

model = Prophet()
logger = AimLogger(prophet_model=model, repo=".", experiment="prophet_test")
...

metrics = {
    "mse": mean_squared_error(test["y"], preds.iloc[4000:]["yhat"]),
    "mae": mean_absolute_error(test["y"], preds.iloc[4000:]["yhat"]),
}
logger.track_metrics(metrics)
```

Additionally, if you’re working with multivariate time series data, you can use Aim to track different dependent variable configurations to see which combination results in the best performance (however, be mindful of the fact that you need to know the future values of your features to forecast your target variable). Here’s a simple code snippet doing just that:

```
# Here, we add an extra variable to our dataset
data = pd.DataFrame(
    {
   "y": np.random.rand(num_days, 1),
   "ds": rng,
   "some_feature": np.random.randint(10, 20, num_days),
  }
)

model = Prophet()
# Prophet won't use the "some_feature" variable without the following line
model.add_regressor("some_feature")
logger = AimLogger(prophet_model=model, repo=".", experiment="prophet_with_some_feature")
```

Now, the extra feature(s) will be tracked as a hyperparameter called **extra_regressors**.

Take a look at a simple, end-to-end example [here](https://github.com/aimhubio/aim/blob/main/examples/prophet_track.py).

# Viewing experiment logs

After running the experiment, we can view the logs by executing `aim up` from the command line in the aim_logs directory. When the UI is opened, we can see the logs of all the experiments with their corresponding metrics and hyperparameters by navigating to prophet_test/runs and selecting the desired run.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Aw3FjV81meA0C_UbMG7bnQ.png)

Additionally, we can monitor system metrics, environment variables, and packages installed in the virtual environment, among other things.

![](https://miro.medium.com/v2/resize:fit:1400/1*Syw9V1IQLf78fAqp-HYXRA.gif)

These features make it easy to track and compare different Prophet experiments on an arbitrary number of metrics, both accuracy and performance-related.

# Using Aim’s Pythonic search to filter metrics and hyperparameters



Given the same dataset and the same hyperparameters, Prophet is guaranteed to produce the same exact model, which means the metrics will be the same. However, if we’re working with several time series (e.g. forecasting demand using different factors), we might want to fit many different Prophet models to see which factors have a bigger effect on the target variable. Similarly, we might want to filter experiments by hyperparameter values. In cases like these, Aim’s *pythonic search* functionality can be super useful. Say we only want to see the models with MAE ≤ 0.25. We can go to the metrics section and search exactly like we would in Python, say `((metric.name == "mae") and (metric.last <= 0.25))` (the **last** part is meant for neural networks, where you might want to see the metric at the last epoch). Here’s a visual demonstration of this feature:

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*w6tJtlwtY4v7RHXf5E_mBg.png)

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*PhsN41wOUX-giiwhJXg6NA.png)

As you can see, filtering based on the metrics is super easy and convenient. The pythonic search functionality can also be used to filter based on other parameters.

# Conclusion



To sum up, Aim’s integration with Prophet allows one to easily track an arbitrary amount of Prophet runs with different hyperparameters and feature variable configurations, as well as arbitrary user-defined metrics, while also allowing one to monitor system performance and see how much resources model training consumes. Aim UI also makes it easy to filter runs based on hyperparameter and metric values with its *pythonic search* functionality. All these features can make forecasting with Prophet a breeze!

# Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring 🙌

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features and bugs.