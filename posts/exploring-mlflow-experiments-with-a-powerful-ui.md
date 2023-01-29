---
author: Gor Arakelyan
categories:
  - Tutorials
date: 2023-01-17T21:52:43.983Z
title: Exploring MLflow experiments with a powerful UI
image: https://miro.medium.com/max/1400/1*YMlI66d-QPxI3fcQCoPSlw.webp
description: We are excited to announce the release of aimlflow, an integration
  that helps to seamlessly run a powerful experiment tracking UI on MLflow logs!
  🎉
draft: false
---


We are excited to announce the release of [aimlflow](https://github.com/aimhubio/aimlflow), an integration that helps to seamlessly run a powerful experiment tracking UI on MLflow logs! 🎉

[MLflow](https://github.com/mlflow/mlflow) is an open source platform for managing the ML lifecycle, including experimentation, reproducibility, deployment, and a central model registry. While MLflow provides a great foundation for managing machine learning projects, it can be challenging to effectively explore and understand the results of tracked experiments. [Aim](https://github.com/aimhubio/aim) is a tool that addresses this challenge by providing a variety of features for deeply exploring and learning tracked experiments insights and understanding results via UI.

![](https://miro.medium.com/max/1400/1*WNn0RhcPt_UCDhwRUnNj4A.gif)

**With aimlflow, MLflow users can now seamlessly view and explore their MLflow experiments using Aim’s powerful features, leading to deeper understanding and more effective decision-making.**

![](https://miro.medium.com/max/1400/1*xXGWEV5bJFEOwpjtDZOoHw.webp)

In this article, we will guide you through the process of running a several CNN trainings, setting up aimlfow and exploring the results via UI. Let’s dive in and see how to make it happen.

> Aim is an easy-to-use open-source experiment tracking tool supercharged with abilities to compare 1000s of runs in a few clicks. Aim enables a beautiful UI to compare and explore them.
>
> View more on GitHub: <https://github.com/aimhubio/aim>

# Project overview

We use a simple project that trains a CNN using [PyTorch](https://github.com/pytorch/pytorch) and [Ray Tune](https://github.com/ray-project/ray/tree/master/python/ray/tune) on the [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html) dataset. We will train multiple CNNs by adjusting the learning rate and the number of neurons in two of the network layers using the following stack:

* **PyTorch** for building and training the model
* **Ray Tune** for hyper-parameters tuning
* **MLflow** for experiment tracking

Find the full project code on GitHub: <https://github.com/aimhubio/aimlflow/tree/main/examples/hparam-tuning>

![](https://miro.medium.com/max/1400/1*47TN9ur7psCbJZHslWNvFA.webp)

Run the trainings by downloading and executing `tune.py` python file:

```
python tune.py
```

You should see a similar output, meaning the trainings are successfully initiated:

![](https://miro.medium.com/max/1400/1*p8K-B7Cu-IT9D0dRUBnqfA.webp)

## Getting started with aimlflow

After the hyper-parameter tuning is ran, let’s see how aimlflow can help us to explore the tracked experiments via UI.

To be able to explore MLflow logs with Aim, we will need to convert MLflow experiments to Aim format. All the metrics, tags, config, artifacts, and experiment descriptions will be stored and live-synced in a `.aim` repo located on the file system.

**This means that you can run your training script, and without modifying a single line of code, live-time view the logs on the beautiful UI of Aim. Isn’t it amazing? 🤩**

## 1. Install aimlflow on your machine

It is super easy to install aimlflow, simply run the following command:

```
pip3 install aim-mlflow
```

## 2. Sync MLflow logs with Aim

Pick any directory on your file system and initialize a `.aim` repo:

```
aim init
```

Run the `aimlflow sync` command to sync MLflow experiments with the Aim repo:

```
aimlflow sync --mlflow-tracking-uri=MLFLOW_URI --aim-repo=AIM_REPO_PATH
```

## 3. Run Aim

Now that we have synced MLflow logs and we have some trainings logged, all we need to do is to run Aim:

```
aim up --repo=AIM_REPO_PATH
```

You will see the following message on the terminal output:

![](https://miro.medium.com/max/1400/1*H8dvLDWAF-EE-MgO2MjSWg.webp)

Congratulations! Now you can explore the training logs with Aim. 🎉

# Quick tour of Aim for MLflow users

In this section, we will take a quick tour of Aim’s features, including:

* Exploring hyper-parameters tuning results
* Comparing tracked metrics
* As well as, taking a look at the other capabilities Aim provides

## Exploring MLflow experiments

Now then Aim is set up and running, we navigate to the project overview page at `127.0.0.1:43800`, where the summary of the project is displayed:

* The number of tracked training runs and experiments
* Statistics on the amount of tracked metadata
* A list of experiments and tags, with the ability to quickly explore selected items
* A calendar and feed of contributions
* A table of in-progress trainings

![](https://miro.medium.com/max/1400/1*TjHqr4lK-aFPJPPh5rGAqQ.webp "Project overview")

\
To view the results of the trainings, let’s navigate to the runs dashboard at `127.0.0.1:43800/runs`. Here, you can see hyper-parameters and metrics results all of the trainings.

![](https://miro.medium.com/max/1400/1*hryGi06eJll6wy2L3zWzyg.webp " Runs dashboard")

We can deeply explore the results and tracked metadata for a specific run by clicking on its name on the dashboard.

![](https://miro.medium.com/max/1400/1*0IfU15byWb7Fx2kPf-d5Jg.webp "Run page")

On this page, we can view the tracked hparams, including the `mlflow_run_id` and the `mlflow_run_name` which are extracted from MLflow runs during the conversion process. Additionally, detailed information about the run can be found on each of the tabs, such as tracked hparams, metrics, notes, output logs, system resource usage, etc.

## Comparing metrics

Comparing metrics across several runs is super easy with Aim:

* Open the metrics page from the left sidebar
* Select desired metrics by clicking on `+ Metrics` button
* Pressing `Search` button on the top right corner

We will select losses and accuracies to compare them over all the trials. The following view of metrics will appear:

![](https://miro.medium.com/max/1400/1*aMzdqTNogK0dONh5nzb_LQ.webp)

Aim comes with powerful grouping capabilities. Grouping enables a way to divide metrics into subgroups based on some criteria and apply the corresponding style. Aim supports 3 grouping ways for metrics:

* **by color** — each group of metrics will be filled in with its unique color
* **by stroke style** — each group will have a unique stroke style (solid, dashed, etc)
* **by facet** — each group of metrics will be displayed in a separate subplot

To learn which set of trials performed the best, let’s apply several groupings:

* Group by `run.hparams.l1` hyper-parameter to color the picked metrics based on the number of outputs of the first fully connected layer
* Group by `metric.name` to divide losses and accuracies into separate subplots (this grouping is applied by default)

![](https://miro.medium.com/max/1400/1*TAOwGrp9b7X3eJgzsLE3tg.webp)

**Aim also provides a way to select runs programmatically. It enables applying a custom query instead of just picking metrics of all the runs. Aim query supports python syntax, allowing us to access the properties of objects by dot operation, make comparisons, and perform more advanced python operations.**

For example, in order to display only runs that were trained for more than one iteration, we will run the following query:

```
run.metrics['training_iteration'].last > 1
```



> Read more about Aim query language capabilities in the docs: <https://aimstack.readthedocs.io/en/latest/using/search.html>

This will result in querying and displaying 9 matched runs:

![](https://miro.medium.com/max/1400/1*Rcby1yyJPMzTdMgcNvaqlw.webp)

Let’s aggregate the groups to see which one performed the best:

![](https://miro.medium.com/max/1400/1*gh_Ep2PVX2WsQQbPL2NyhA.webp)

From the visualizations, it is obvious that the purple group achieved better performance compared to the rest. This means that the trials that had 64 outputs in the first fully connected layer achieved the best performance. 🎉

> For more please see Aim official docs here: <https://aimstack.readthedocs.io/en/latest/>

## Last, but not least: a closer look at Aim’s key features

* Use powerful pythonic search to select the runs you want to analyze:

![](https://miro.medium.com/max/1400/1*UnfUbRh5yLa5PceBi2a0HQ.webp)

Group metrics by hyperparameters to analyze hyperparameters’ influence on run performance:

![](https://miro.medium.com/max/1400/1*1M8Z_CS6j9_nBQXifp-JBw.webp)

Select multiple metrics and analyze them side by side:

![](https://miro.medium.com/max/1400/1*j6K9X_-LL4aHb9ZhCDxahQ.webp)

Aggregate metrics by std.dev, std.err, conf.interval:

* ![](https://miro.medium.com/max/1400/1*8hXsPXkgqiDm-GqM1PqJ_w.webp)

  Align x axis by any other metric:

  * ![](https://miro.medium.com/max/1400/1*ulpsYaFXGiTPSh5oM9XYwQ.webp)

  Scatter plots to learn correlations and trends:

  ![](https://miro.medium.com/max/1400/1*4uxIpoDd9r7DWa96lR-imw.webp)

  High dimensional data visualization via parallel coordinate plot:

  ![](https://miro.medium.com/max/1400/1*Z37L2fKGl0mA-x7tOdq9IA.webp)

  Explore media metadata, such as images and audio objects via Aim Explorers:

  * ![](https://miro.medium.com/max/1400/1*2E8ybu8TxejHzjgRT6sReg.webp "Audio Explorer")

  ![](https://miro.medium.com/max/1400/0*GdFVthJ1ee2AeinV.webp "Images Explorer")

  # Conclusion

  In conclusion, Aim enables a completely new level of open-source experiment tracking and aimlflow makes it available for MLflow users with just a few commands and zero code change!

  In this guide, we demonstrated how MLflow experiments can be explored with Aim. When it comes to exploring experiments, Aim augments MLflow capabilities by enabling rich visualizations and manipulations.

  We covered the basics of Aim, it has much more to offer, with super fast query systems and a nice visualization interface. For more please [read the docs](https://aimstack.readthedocs.io/en/latest/overview.html).

  # Learn more

  If you have any questions join [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features and bugs. 🙌

  Show some love by dropping a ⭐️ on [GitHub](https://github.com/aimhubio/aim), if you think Aim is useful.