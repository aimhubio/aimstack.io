---
author: Tatyana Manaseryan
categories:
  - Tutorials
date: 2024-04-02T07:02:11.308Z
title: Reproducibility in ML
image: /images/dynamic/medium-2-.png
description: "What is Reproducibility in ML? What makes it challenging? Tools
  and platforms to address different aspects of reproducibility: Data
  Management, Experiment Tracking, Version Control."
draft: false
---
Imagine spending hours looking over a machine learning paper. Fascinated by its approach and promising results, you want to replicate the study, and possibly build upon its findings. Yet, despite your efforts, the results you achieve fall significantly short of those documented in the publication.



Alternatively, consider a scenario where, upon reviewing your colleague's code on GitHub, you notice that the performance metrics of your model do not match with the results reported. Even after double-checking your work, the inconsistency remains.



These challenges show how hard it is to replicate ML research and is known as reproducibility challenge.

## What is Reproducibility in the context of ML?



Let’s start from understanding the problem. Reproducibility in machine learning (ML) refers to the ability to obtain the same results using the same dataset and algorithm as in the original work.

![](/images/dynamic/page-1.png)

### Why reproduce and get the same results as the original research?



From the standpoint of large-scale deployments, reproducibility is essential. It also plays a key role in confirming the validity of research findings and conclusions.

Reproducibility is important not only for verifying the accuracy but also for transparency as other researchers may want to run the same ML models. This could become a great opportunity for new experiments and collaborations. 

Data, code and environment are core elements of any model but often the published research misses the original data and code. Changes in data and source code will affect the outcome significantly. Often, because of data privacy issues, researchers keep the data private. Another important aspect is the environment, it’s important to know which frameworks have been used to avoid problems such as different versions of the library, it can simply break the code.

## Barriers of reproducibility in ML

What makes the reproducibility challenging or even impossible? 

* **No proper record tracking**

While training the models, new experiments are happening and while experimenting it’s important to keep track of changes in parameters, inputs and decisions. 

Additionally, the lack of standardized practices for documenting experiments and results, further complicates the problem. Without clear, comprehensive documentation, replicating and validating findings become more challenging.

* **Changes in datasets**

Frequently, the dataset undergoes random shuffling, leading to variations in the composition of training, testing, and validation sets with each execution. If the sets are predetermined, shuffling within the training set can alter the sequence of sample iteration, impacting the model's learning process.

* **Hyperparameter inconsistency**

Each model trained has its set of hyperparameters and changes in hyperparameters will lead to different results. It’s important to specify the range of the hyperparameters considered and the method employed to select the best hyperparameters.

* **Non-deterministic GPU floating-point calculations**

Floating point numbers have to deal with some odd scenarios such as infinities, different types of zeros, what happens when rounding things which can lead to different results. Changes in GPU and different results from floating-point makes the reproducibility hard.

* **Changes in ML frameworks**



This can result in different behaviors between versions and inconsistencies across different frameworks.

* **Noisy hidden layers**

Numerous neural network architectures incorporate layers that exhibit random behavior. For instance, the dropout layer randomly eliminates neurons based on a probability (p), resulting in a unique architecture in each instance.

## How to address the reproducibility challenge



On the brighter side, the ML community has recognized these challenges and is actively working towards solutions. Various tools and platforms have emerged to address different aspects of reproducibility.

### Data Management



To enhance reproducibility, researchers are encouraged to share their datasets, code, and the specifics of their computational environments. Moreover, using the values to control randomness and maintaining version control of the datasets and ML models can help.

![Data management](/images/dynamic/data-management-diagram.svg "Data management")

For instance, [Docker](https://www.docker.com/) and other containerization technologies allow researchers to package their software with all its dependencies, ensuring that it runs consistently across different computing environments. [Jupyter Notebook](https://jupyter.org/) provides a means for sharing code alongside its output, blending code, visualization, and documentation in a single, interactive environment.

### Experiment Tracking



Another solution of the problem is the usage of ML experiment tracking tools like [MLflow](https://mlflow.org/), [TensorBoard](https://www.tensorflow.org/tensorboard), [Weghts & Biases](https://wandb.ai/site), [Aim](https://aimstack.io/). These tools help researchers log experiments, track metrics, and compare different runs, providing a structured way to manage and analyze the bunch of experiments that typify ML research. It’s possible to track every change that happens through experiment tracking. 

During the research there is always a need to query and compare the metadata. Aim is an open-source tool. It logs all the AI metadata (experiments, prompts, etc) enables a UI to compare & observe them and SDK to query them programmatically.

Exploring the metrics of a run: 

![Aim: Metrics explorer](/images/dynamic/select_form_dropdown.png "Aim: Metrics explorer")

Exploring the parameters of run:

![Aim UI: Run Params](/images/dynamic/screen-shot-2024-03-22-at-16.28.34.png "Aim UI: Run Params")

Aim also supports artifacts logging which makes the models easy to be reproduced. Examples of such artifacts are the model checkpoints, training run configuration files, etc. Aim provides the logging API for artifacts, and the UI for showing artifact's metadata.

![Artifacts logging](/images/dynamic/run-overview-artifacts.png "Artifacts logging")

### Version Control

Version control systems like [Git](https://git-scm.com/), coupled with platforms such as [GitHub](https://github.com/) and [GitLab](https://about.gitlab.com/), enable the tracking of changes in code and documentation, facilitating collaboration and ensuring transparency.

![Version control](/images/dynamic/page-8.png "Version control")

For controlling randomness in experiments, setting and sharing seed values for random number generators is a simple yet effective practice. This ensures that the random elements of ML processes, such as data shuffling and initialization of weights, are consistent across runs.



## To wrap up



While challenges to reproducibility in ML are significant, the community's concerted efforts towards developing tools and practices are in the right direction. By embracing these solutions, researchers and practitioners can enhance the reliability and validity of their work, fostering an environment of trasparency and collaboration in the ML field. The journey towards fully reproducible ML is ongoing, but with these tools and practices, we are well on our way.

## Learn More



Join the [Aim Community](community.aimstack.io) for more AI/ML discussions, share your knowledge, and learn from other ML folks.