
# Influence Maximization and Fairness in Social Networks at Scale

[Project Overview](#project-overview)  •  [Learn more](#learn-more)  •  [Contact Us](#contact-us)  •  [Who We Are](#who-we-are)



This README provides an overview of a project completed as part of UC Berkeley's Masters of Information and Data Science program (see "Who We Are" section below). You can find a more visual representation of our project on our [Github Page](https://autumninthecloud.github.io/IM_w_fairness/). You can also find an interactive visual built with GraphXR [here](https://graphxr.kineviz.com/share/62e06f09c19ffe005709709b/IM+F_mod/62e0703ac19ffe0057097418). Note: In some browsers, users encounter problems visualizing edges; if these are not showing up for you, please try Chrome or Chromium.

Continue reading below to understand the project itself, what our repo contains (and learn about how to use the code), ethical considerations, and how to contact us. Click the "details" buttons to show the text in each section below.

## Project Overview

<p align=center>
<img width=700 src="images/socialnetwork_starwarsgif.gif" />
</p>

<details>
 <summary>Click to expand details!</summary>

In 2009, Sina Weibo – a Twitter-like platform in China – had over a million users who retweeted over 20 million messages. Most of these originated with a few “influential” users, whose original messages were retweeted many times. In the Sina Weibo network, each **node** represents a user and each **edge** represents a retweet. 

 <p align=center>
<img width=350 src="images/test_influencers.gif" />
</p>
 
Some influencers start huge chains of retweeting, where their message is retweeted over an over. This is called a **cascade**. The largest cascade in this Sina Weibo network is over 50,000 retweets long. 

What if we have a message we want to share widely on Sina Weibo? How might we find the right influencers, who will be able to start these large cascades and share that message with the most people? This problem could apply to any kind of message, like an ad about a product we want to sell, a call for donations for a cause, or important information many people should know, like information about the COVID-19 vaccine.

**Influence maximization** algorithms solve this problem. More formally, an IM algorithm finds the set of *k* influencers that maximize information spread in the network. 

Some influencers share information with many different people, who might represent a diversity of genders, classes, races, ethnicities, et cetera. Others might share information just as widely, but only with a certain group. 

If the *cascade distribution* for a given attribute looks similar to that of the *broader network*, we might think of this as **"fair"** information spread. This concept of fairness is similar to what some might recognize as **"demographic parity"**.

**Our project updates influence maximization to find the most fair and impactful influencers.**
</details>
 
<details>
 <summary>Glossary</summary>

* **Cascade:** Large chain of retweeting. Users with greater influence are more likely to initiate a cascade.

* **Demographic parity:** According to [Google Developers' Machine Learning Glossary](https://developers.google.com/machine-learning/glossary/fairness), "A fairness metric that is satisfied if the results of a model's classification are not dependent on a given sensitive attribute."

* **Edge:** Connections between nodes (in this case, retweets).

* **Influence:** Capacity of an individual in a social network to spread information throughout that network.

* **Influence Maximization (IM) algorithm:** Algorithms that find the set of *k* influencers that maximize information spread in a network.

* **Node:** Entities we are evaluating in a graph (in this case, Sina Weibo users).

* **Retweet:**  When someone republishes or forwards a post from someone else to their own follower in a social media network (like Twitter or Sina Weibo).

</details>

### Influence Maximization

<details>

How can we maximize the reach of messaging campaigns on social media networks while operating on a limited budget? This is where influence maximization (IM) comes in. It aims to maximize information spread in a network under constraints, and in particular, by selecting the most influential users from which the transmission of a specific message should begin.

Formal definition: Given a network with n nodes and given a “spreading” or propagation process on that network, choose a “seed set” S of size k < n to maximize the number of nodes in the network that are ultimately influenced.

<p align=center>
<img width=500 src="images/im_cartoon.png" />
</p>

At a high level, there are four components of an IM algorithm:

1. Network graph
2. Budget
3. Influence model
4. Optimization framework

#### Network graph

Our social network is a set of retweet cascades. The original posts represent the start of a cascade, and any tweet with the same content, that is not an original post and takes place afterwards, is considered a retweet. 

_Weibo dataset summary statistics_

* User nodes: 1,170,689
* Retweet edges: 225,877,808
* Cascades (retweets grouped by post content): 115,686
* Average cascade size: 148 hops in the network

#### Budget

The number of influencer users we are searching for. This is a subset of users whose influence spreads retweet content to the maximum number of users in the network. 

#### Influence model

We are using deep learning methods to predict the probability of a user appearing in a diffusion cascade started by a seed (influencer), independently of the two users’ distance in the network.

#### Optimization framework

We’ll use a [greedy approach](https://en.wikipedia.org/wiki/Greedy_algorithm) to return the top scoring influencers based on their cumulative influence probabilities across the network. Once the top influencer is identified, we remove their target users from the network, and repeat this process until we have the number we set aside in our budget.

</details>

<details>
 <summary>Glossary</summary>

* **Diffusion:** The spread of information, idea, or product in social networks

* **Influence spread:** Number of users infected by a set of seed users

* **Seed users / Influencers:** The nodes that are the initial disseminators of information

</details>

### Fairness 

<details>

Any definition of fairness – including in the context of machine learning – is deeply contextual and will depend on the issue at hand. There are many ways to define fairness, both conceptually and mathematically. One definition - from the [Oxford dictionary](https://www.oxfordlearnersdictionaries.com/definition/english/fair_1) - defines fairness as "treating everyone equally and according to the rules or law".
 
These definitions can be mutually incompatible. Please see the [Fairness](https://github.com/autumninthecloud/IM_w_fairness/tree/main/Fairness) folder in this repo to learn more about fairness in machine learning generally. 

 <p align=center>
<img width=600 src="images/fairness_cartoon.png" />
</p>

In this project, we aimed to replicate the original author’s research using their definition of fairness, which is similar to the concept of [demographic parity](https://developers.google.com/machine-learning/glossary#demographic-parity
). 

Like other definitions of fairness, this definition hinges on treatment of individuals who identify in various ways with respect to sets of sensitive attributes. Sensitive attributes might include gender, race, ethnicity, country of origin, and many other ways individuals can identify themselves. 
 
The original authors considered several possible definitions of fairness, outlined in the table below. Within the context of maximizing the spread of information through a network, the **Equity** definition seemed most appropriate. One way to think about this concept of fairness within the IM context is to consider the distribution along a sensitive attribute (let's say gender) in the entire network versus that in the set of nodes that are influenced. If in the entire network 45% of users identify as male, 45% identify as female, 5% identify as transgender, 4% identify as non-binary, and 1% identify as one of a range of other genders, if information spread is fair we would expect a similar break-down along these categories amongst the people who retweeted our message (originally shared by our set of k influencers).
 
| Definition |     Description     |Outcome in IM Context|
| ----------- | ----------- | ----------- |
| Equality | Each group gets the same allocation (e.g., in this application, each group gets the same number of seed users or influencers). | Focuses on how information is initiated, rather than spread. This means that information may end up spreading unevenly even though the distribution among the influencers is "fair". |
| Maximin | Keep groups as similar as possible with respect to information spread within the group, relative to their size. | Since the information spread must be similar across groups, the overall spread might be limited by the least connected group. If any group is much less well-connected, this might introduce too much of a drop in overall information spread. |
| Diversity | Each group receives information at least equal to how information spreads within the graph initiated by that group. | Since groups that spread more information end up receiving more (and vice versa), information spread might be very uneven across groups (depending on how different they are with respect to spreading information). |
| Equity | Any node's probability of being influenced is as similar as possible, regardless of the node's group membership. | Information spread within a group should occur in proportion to its overall share of nodes in the graph. |
 
We employed the [deon command line checklist](https://deon.drivendata.org/) and a [Consequences Scanning](https://doteveryone.org.uk/project/consequence-scanning/) exercise to analyze fairness and other ethical considerations in the development of this algorithm. Our analysis is documented in our ethics checklist) [here](https://github.com/autumninthecloud/IM_w_fairness/blob/main/Ethics/ETHICS.md) (stored in our [Ethics folder](https://github.com/autumninthecloud/IM_w_fairness/tree/main/Ethics) in this repo), but we wanted to raise one major ethical concern here - namely, that groups who might use this algorithm could apply it to their dataset or deploy it and consider that enough when it comes to fairness. However, ensuring that a message is spread amongst a group in proportion to its share in the broader population does not ensure that this information spread is “fair”. We need to consider which attributes we are not measuring - for example, in this project we only looked at gender. We also only considered two categories of gender (male or female) and ignored information spread amongst people who identify in other ways. We should also consider intersectionality, or how these different attributes might combine - for example, we might spread information only amongst affluent females, but not females with low incomes – in the current application we would not have measured this but it would be unfair in most scenarios. We also might consider other definitions of fairness. Demographic parity might not be the best measurement in each context. We also cannot share information beyond the network, which could unfairly exclude groups that are not part of it. For example, in the Sina Weibo context this might especially harm people from rural communities. Finally, we cannot approach fairness from a purely technical perspective and in any application should be including social actors. For example, is it fair to only consider who the information spreads to (and not who we select as influencers) – especially in a context where being an influencer can be a very lucrative endeavor? This would require contextual knowledge that we can’t know through a purely technical approach. 
 
 </details>
 
<details>
 <summary>Glossary</summary>

* **Intersectionality:** According to the [Oxford Dictionary](https://www.cjr.org/language_corner/intersectionality.php), “the interconnected nature of social categorisations such as race, class, and gender, regarded as creating overlapping and interdependent systems of discrimination or disadvantage”.
 
* **Sensitive attributes:** According to [Google Developers' Machine Learning Glossary](https://developers.google.com/machine-learning/glossary/fairness#sensitive-attribute), “A human attribute that may be given special consideration for legal, ethical, social, or personal reasons.” 

</details>

### Approaches 

<details>
 
The research team applied deep learning to uncover representations about pairs of users based on their shared cascade context – influence spread magnitude and fairness scores – to predict diffusion probabilities. They incorporated fairness in two different ways and compared their performance with other algorithms. The resulting probabilities and influencer embeddings from the layers of both of these neural network architectures are used by a greedy algorithm in the final step to identify the set of fair influencers.

The codebase builds on top of [previous work](https://github.com/geopanag/IMINFECTOR) that utilizes representation learning for modeling influence.
 
 #### Fairness-Based Participant Sampling (FPS)

In both approaches, time-based sampling of the original influencer and target user pairs is applied to the input training data for the neural network. The main idea is that faster response times between the original post and the target user will represent a higher susceptibility of being influenced and will therefore lead to better diffusion probability predictions. To accomplish this, the input pairs, for a given cascade, are oversampled inversely proportional to the response time between retweets.

In FPS, another sampling scheme is then applied after this, whose goal is to downsample biased (or unfair) influencers in the training data. For any given influencer, if their historical cascades have lower fairness scores overall, their data will be penalized with less visibility. In practice, the researchers experimented with using logarithmic, exponential, and linear scaling in the penalty function.
 
#### Fairness As Context (FAC)

For FAC, instead of modifying the training data, fairness is incorporated by adding another layer in the neural network to predict the fairness score from the influencer embeddings in the previous layer. It will optimize the neural network’s weights and biases based on the mean squared error between the predicted influencer fairness scores and actual fairness scores, leading to influencer embeddings that incorporate fairness through learned representation rather than sampling.
 
#### Greedy Algorithm

In the final stage, the learned influencer embeddings and diffusion probabilities are used in an  optimization algorithm to select the top influencers with the highest influence magnitude. 

The researchers used a [greedy algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) for selecting the best influencer at each step. The influenced target users (“infected”) are then removed, and this process is repeated until the budgeted number of influencers is reached.

At a high level, this is how the algorithm is applied in each step:
 
1. For each influencer, an expected number of infected users is calculated based on the magnitude of its embedding from the neural network. The expected number of infected users is simply the proportion of this embedding magnitude over all influencers’ embedding magnitudes which is then multiplied by the number of users in the network. 
2. The diffusion probabilities, which are derived by multiplying the influencer and target embedding matrices (specifics can be found in the original research paper), are used to identify users with the highest probability of being infected by each influencer. 
3. The influencer with highest cumulative diffusion probabilities is selected, and its top infected set of users are removed before beginning this process again.


</details>

### Experiments

<details>

We divided our replication efforts into three phases: 

1. Initial replication
2. Code refactoring and data pipeline implementation
3. Repeat replication and results validation

In the first phase, we tried to run the process end-to-end while changing the code as minimally as possible. We downloaded the original dataset from Baidu and ran the entire process with the dataset. In certain instances, we needed to make edits to address bugs that we faced. In our second phase, we began to refactor and document the code to improve efficiency and readability where possible. We also implemented a data pipeline where we hosted the input data on Google Drive and then created scripts to ingest the data, uncompress the files, and run the process end-to-end. 

We hope that the creation of this pipeline will make it easier for others to experiment with this project. In the final phase, we repeated the replication process by running all of the Python scripts and then validated the results.

</details>

### Evaluation

<details>

The original research evaluated the performance of the FPS and FAC models by comparing it with two other algorithms in terms of their objective function scores, the number of influenced nodes, and execution time. 

Due to time constraints, we were unable to connect our results with the research team’s stated results. However, we can share the original aims of the research and report how well our data trends with their assumptions.

#### Influence Maximization with Fairness 🟡

To rank how well the algorithms scored in comparison with other methods, the researchers used an objective function to measure the tradeoffs between maximizing influence and fairness guarantees in the resulting population from their set of selected influencers. This equation takes the influence and fairness scores and normalizes them by their upper bounds, leading to an objective value between 0 and 1.

To utilize this in real world applications, a policy maker could select an importance factor between 0 (fairness) and 1 (influence) to rate influence or fairness more highly in evaluating the algorithm. The researchers used a value of 0.8 to reflect the priority of influence over fairness in most real world scenarios. 

In their work, they found that FPS resulted in higher scores for both the number of influenced users and in the overall objective function than FAC, and our data indicated the reverse relation when plotted across the same sets of users. Also of note, for each set of influences, our proportion of users influenced was at least 30% lower than what was given in the research results. 

Additionally, our data showed that FAC had lower fairness scores on average when compared to FPS, but when combined into their objective function, FAC still outperforms FPS due to the fact that they set the objective function to weight influence more heavily than fairness. 

Given that the initial aim of this research was to conduct comparative analysis with other algorithms, our results have limited application beyond the specific models, but it is our hope that our conclusions can benefit the researchers in making improvements in their future work.

#### At Scale 🟢

There are scalability gains in this deep learning approach over previous work in the influence maximization literature. They back this up with execution time plots between the FPS, FAC and the two other algorithms.

Because we were unable to gain access to the complete set of research code during the course of our project, we can only speak at the theoretical level about how these approaches make improvements, and we can also verify that our team successfully ran both models locally.

There are also gains in how the training data is constructed versus previous IM models. Rather than building the propagation network to model influence graphically (searching for nodes that are connected in a cascade via a directed edge), the research team modeled influence as the ability for an influencer to exert influence over other target users, which results in a reduction in time complexity in building the data. Creating the influencer target user pairs has a complexity of O(cn), where c is the number of cascades and n is the cascade size, and it is linear with the size of each cascade. This is an improvement over the aforementioned propagation network models that have a complexity of O(cn(n-1)/2).

Overall, we agree with the initial assumptions that a deep learning based approach for modeling influence is more scalable than previous efforts.

</details>

### Conclusion 

<details>
 
Targeting key influential people to spread information efficiently to a broader audience is a growing need for marketers advertising products or services as well as for policymakers looking to inform or educate the public. Machine learning techniques like Influence Maximization (IM) are a viable solution to these needs. Sensitive attributes like race or gender of users within a network are key variables to include when training machine learning models to reduce bias and unfair information spread. Our research used existing IM algorithms on a social network dataset from Sina Weibo, a social network in China, that was composed of tweets and retweets to study fair information spread. Profile information of users was utilized to classify users within one of two gender groups: male and female. From these aggregations, we trained and tested two IM models to study how information was spread and if fairness could be maintained.

From our research we have concluded that fairness can be introduced into influence maximization algorithms successfully. The two models studied in our research perform well compared to current cutting-edge IM models. We also incorporated ethical frameworks with our research in line with best practice to maintain privacy and fair use of user data. Future areas of work should focus on alternative definitions of fairness as well as continuing research of the ethical implications of utilizing user data for testing to protect privacy and minimize harm. We plan to incorporate additional sensitive attributes of user profiles such as location or topics of retweets to understand how the fair spread of information in social networks can be impacted.

</details>

## Learn more

Please feel free to use the information and resources in this repository (within the README and the [Ethics](https://github.com/autumninthecloud/IM_w_fairness/tree/main/Ethics), [Fairness](https://github.com/autumninthecloud/IM_w_fairness/tree/main/Fairness), and [Influence_Maximization](https://github.com/autumninthecloud/IM_w_fairness/tree/main/Influence_Maximization) folders in the repo). We plan to share the code once the original paper has been published.

We would like to highlight the following resources to learn more generally about graphs (and graph neural networks): 

[Stanford CS224W: Machine Learning with Graphs](https://web.stanford.edu/class/cs224w/)

* [This video](https://www.youtube.com/watch?v=hstYPmdW8PU) on Influence Maximization is especially helpful for understanding this project!

[A Gentle Introduction to Graph Neural Networks](https://distill.pub/2021/gnn-intro/)

* Check out these [explainer slides](https://docs.google.com/presentation/d/1u-3qp1-SgGTKL755a0ttuHSz1iVdEqCY1xG_Ub6201o/edit?usp=sharing) for the paper (from our team member Sophia S. and our classmate Spencer Song)

[Must-read papers on GNN](https://github.com/thunlp/GNNPapers)

[Open Graph Benchmark: Benchmark datasets, data loaders and evaluators for graph machine learning](https://ogb.stanford.edu/)

[NetworkX Tutorial](https://networkx.org/documentation/stable/tutorial.html)


## Contact Us

If you have any input on the content of this repo, please submit a pull request. 

For anything else, please send us an email at team-influencers@googlegroups.com! We are happy to communicate about anything about this project, including:

* Any questions about how we worked together, our code, the dataset, etc.
* Ethical considerations (also see our ethics checklist directly [here](https://github.com/autumninthecloud/IM_w_fairness/blob/main/Ethics/ETHICS.md) or in our Ethics folder in the repo). For example...
  * If you find your data in our dataset, and would like us to delete it
  * If you think we should delete the data we have posted publicly 

## Who we are

We are Team Influencers, a group of students in the University of California, Berkeley's Masters of Information and Data Science program. We completed this project for our program capstone during the 2022 summer semester. You can find our [project on the Berkeley website](https://www.ischool.berkeley.edu/projects/2022/team-influencers). Other capstone projects are listed on [this page](https://www.ischool.berkeley.edu/programs/mids/capstone). 

**Team Members (in alphabetical order)** 

David Peletz
<a href = "https://github.com/dpeletz">
<img src="https://github.com/autumninthecloud/IM_w_fairness/blob/main/images/github.svg" width="22">
</a>
<a href = "https://www.linkedin.com/in/david-peletz/">
<img src="https://github.com/autumninthecloud/IM_w_fairness/blob/main/images/iconmonstr-linkedin-3.svg" width="22">
</a>

Autumn Rains
<a href = "https://github.com/autumninthecloud">
<img src="https://github.com/autumninthecloud/IM_w_fairness/blob/main/images/github.svg" width="22">
</a>
<a href = "https://www.linkedin.com/in/autumninthecloud/">
<img src="https://github.com/autumninthecloud/IM_w_fairness/blob/main/images/iconmonstr-linkedin-3.svg" width="22">
</a>

Sophia Skowronski
<a href = "https://github.com/sophiaski">
<img src="https://github.com/autumninthecloud/IM_w_fairness/blob/main/images/github.svg" width="22">
</a> 
<a href = "https://www.linkedin.com/in/sophiaskowronski/">
<img src="https://github.com/autumninthecloud/IM_w_fairness/blob/main/images/iconmonstr-linkedin-3.svg" width="22">
</a>

Alissa Stover
<a href = "https://github.com/alisto92">
<img src="https://github.com/autumninthecloud/IM_w_fairness/blob/main/images/github.svg" width="22">
</a>
<a href = "https://www.linkedin.com/in/alissa-stover/">
<img src="https://github.com/autumninthecloud/IM_w_fairness/blob/main/images/iconmonstr-linkedin-3.svg" width="22">
</a>

**Advisors (in alphabetical order)**

[Prof. Alberto Todeschini](https://www.ischool.berkeley.edu/people/alberto-todeschini)

[Prof. Puya Vahabi](https://www.ischool.berkeley.edu/people/puya-h-vahabi)

**Additional thanks to everyone who gave us feedback along the way (in alphabetical order)**

Usability study participants

[Prof. Morgan Ames](https://www.ischool.berkeley.edu/about/profiles/morgan-ames)

[Alastair Dant](https://www.linkedin.com/in/alastairdant/)

[Joe Hoeller](https://medium.com/@joehoeller)

[Justin Jeng](https://www.linkedin.com/in/justinjeng/)

[Kineviz](https://www.kineviz.com/) Team:

* Sony Greene
* Weidong Yang
* Alex Law

[Leo Meyerovich](https://lmeyerov.github.io/) ([Graphistry](https://www.graphistry.com/))

Ankitkumar Patel

[Danie Theron](https://www.linkedin.com/in/danielptheron/) (Course TA)



