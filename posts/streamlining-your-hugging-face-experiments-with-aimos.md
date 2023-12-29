---
author: Hovhannes Tamoyan
categories:
  - Integrations
date: 2023-12-29T13:33:30.989Z
title: Streamlining your Hugging Face Experiments with AimOS
image: /images/dynamic/hugging-face-1-.png
description: AimCallback for Hugging Face is designed to enhance your experiment
  logging and monitoring. It thoroughly records essential information, including
  hyperparameters, training, validation, and test time metrics like loss and
  accuracy.
draft: false
---
AimCallback for [Hugging Face](https://huggingface.co/) is designed to enhance your experiment logging and monitoring. It thoroughly records essential information, including hyperparameters, training, validation, and test time metrics like loss and accuracy. Moreover, it offers comprehensive system usage tracking, keeping an eye on CPU and GPU memory utilization.

## Introduction

Discover how [AimOS](https://aimstack.io/blog/new-releases/aim-4-0-open-source-modular-observability-for-ai-systems) effortlessly monitors your Hugging Face experiments, capturing every detail of hyperparameters and metrics. We'll dive into a sample script to demonstrate the powerful integration between AimOS and Hugging Face.

## Running a Sample Training with Hugging Face: A Step-by-Step Guide

Explore a hands-on example using the `yelp_review_full` dataset consisting of Yelp reviews, with the review scores ranging from 1 to 5 to full-tune a BERT base model for sequence classification.



## Setting the Stage

Before diving into the script, ensure that AimOS is installed. If not, simply run “pip install aimos”, and head over to the [GitHub page](https://github.com/aimhubio/aimos) for more.

## Sample Script



### 1. Importing Required Modules

Begin by importing the necessary modules.

```
import evaluate
import numpy as np
from aimstack.experiment_tracker.hugging_face import Callback as AimCallback
from datasets import load_dataset
from transformers import (
    AutoModelForSequenceClassification,
    AutoTokenizer,
    Trainer,
    TrainingArguments,
)
```

### 2. Preparing the Dataset and the Tokenizer

Define a function for tokenization.

```
def tokenize_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True)
```

Tokenize the dataset using the BERT base-cased tokenizer.

```
dataset = load_dataset("yelp_review_full")
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

tokenized_datasets = dataset.map(tokenize_function, batched=True)
```

Select a small subset of the dataset for training and evaluation.

```
small_train_dataset = tokenized_datasets["train"].shuffle(seed=42).select(range(1000))
small_eval_dataset = tokenized_datasets["test"].shuffle(seed=42).select(range(1000))
```

Define the metrics for evaluation.

```
def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)

metric = evaluate.load("accuracy")
```

### 3. Instantiate the Model

Instantiate the BERT base-cased model for sequence classification.

```
model = AutoModelForSequenceClassification.from_pretrained(
    "bert-base-cased", num_labels=5
)
```

### 4. Initialize AimOS Callback

Initialize the AimOS callback by providing the repository address and experiment name. Here the `aim://0.0.0.0:53800` is the default address of your aimos server if it’s running on your local machine:

```
aim_callback = AimCallback(
    repo="aim://0.0.0.0:53800", experiment_name="yelp_classification"
)
```

Ensure that your AimOS server is active on the default `53800` port. Start the AimOS server with the following command:

```
aimos server
```

### 5. Training

Set the training arguments, specifying the output directory, number of epochs, and learning rate. Train the model by providing the AimOS callback in the Trainer arguments.

```
training_args = TrainingArguments(output_dir="test_trainer", num_train_epochs=10, learning_rate=5e-7)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=small_train_dataset,
    eval_dataset=small_eval_dataset,
    compute_metrics=compute_metrics,
    callbacks=[aim_callback],
)

trainer.train()
```

After completing these steps, you will successfully log all actions on AimOS. Now, run the AimOS UI to observe the tracked metadata. Navigate to the folder where the .aim repository is initialized and execute:

```
aimos ui
```

This is the view you'll see after opening the provided URL: 

![AimOS Apps](/images/dynamic/seamless-experimentation-screenshot-dec-13.png "AimOS Apps")

## Interpreting Experiment Results

Explore the wealth of information provided by AimOS to gain insights into your Hugging Face experiment. We'll guide you through the key aspects to understand experiment's effectiveness.



## AimOS Overview Page

Head over to the AimOS Overview page to witness the containers and sequences overview tables of your Hugging Face experiment. This page offers an abstract overview of the number of experiments, sequences, metrics, and system metrics tracked within your experiment.

![Overview](/images/dynamic/seam.png "Overview")

## AimOS Runs Page

Visit the AimOS Runs page to view the table of all runs, containing basic information about the experiment. This includes hash system parameters, hyperparameters, and model configurations/information.

![Runs page](/images/dynamic/seamless-experimentation-screenshot-dec-13-1-.png "Runs page")

By navigating to each run’s individual page, you'll have a detailed view of the activities within that run.

## Run Overview



Navigate through the Overview tab to grasp essential information such as Run Parameters, Metrics (last metrics scores), CLI Arguments used to execute the experiment, Environment Variables, Packages, and their versions.

![Run overview](/images/dynamic/seamless-experimentation-screenshot-dec-13-2-.png "Run overview")

## Params Tab

For a more detailed view of all parameters, navigate to the Params tab.

![Params tab](/images/dynamic/seamless-experimentation-screenshot-dec-13-3-.png "Params tab")

## Metrics Tab

In the Metrics tab, explore all the tracked metrics graphs, including the change of learning_rate, loss, samples_per_second, steps_per_second, total_flos, and steps.

![Metrics tab](/images/dynamic/seamless-experimentation-screenshot-dec-13-4-.png "Metrics tab ")

In the remaining tabs, discover corresponding types of tracked objects, such as Figures, Text, and Audios.

## Wrapping up

AimOS provides a comprehensive suite of tools to analyze and understand your Hugging Face experiment thoroughly. By leveraging these insights, you can elevate your experimentation process and make data-driven decisions. 

For further insights into AI system monitoring and observability of software lifecycle, check out our latest article on [AimStack blog.](https://aimstack.io/blog/new-releases/aim-4-0-open-source-modular-observability-for-ai-systems)

## Learn more

[](https://aimstack.io/blog/new-releases/aim-4-0-open-source-modular-observability-for-ai-systems)

[AimOS is on a mission to democratize AI Systems logging tools. 🙌](https://aimos.readthedocs.io/en/latest/apps/overview.html)[](https://aimstack.io/blog/new-releases/aim-4-0-open-source-modular-observability-for-ai-systems)

Try out [AimOS](https://github.com/aimhubio/aimos), join the [Aim community](https://community.aimstack.io/) and contribute by sharing your thoughts, suggesting new features, or reporting bugs.

Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aimos) if you think AimOS is useful, and here is the repository of [Aim](https://github.com/aimhubio/aim), an easy-to-use & supercharged open-source experiment tracker.⭐️