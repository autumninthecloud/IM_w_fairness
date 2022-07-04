# Data Science Ethics Checklist

[![Deon badge](https://img.shields.io/badge/ethics%20checklist-deon-brightgreen.svg?style=popout-square)](http://deon.drivendata.org/)

In an effort to improve understanding of the ethical considerations of this project, we are going beyond the typical use of this data science checklist and are including explanations under each item, rather than simply checking the box. We have not been able to complete every item for this project. However, future projects can build on our work here by completing these. We believe that this would be especially necessary if the model is being deployed.

PDFs of the literature we cite in our References section can be found [here](https://github.com/autumninthecloud/IM_w_fairness/tree/main/Ethics/Literature).

## A. Data Collection

 - [X] **A.1 Informed consent**: If there are human subjects, have they given informed consent, where subjects affirmatively opt-in and have a clear understanding of the data uses to which they consent?
       
    *Weibo users have consented to third-party statistical analysis of their data by agreeing to Sina Weibo's [Privacy Policy](https://weibo.com/signup/v5/privacy). Many have raised doubts that obtaining this type of consent via a Privacy Policy is truly "informed" and is deeply dependent on context (Nissenbaum, 2011). A recent article quoting Sina Weibo users' views on archiving their data for additional uses reveal some discomfort with the idea (Mengzhen, 2019). Use of Sina Weibo data is increasing, in part due to the establishment of an API in 2014 (Hu, 2020). For our analyses, we focus on data from 2009-2010, before the creation of the Sina Weibo API. The broader context of data privacy in China has changed vastly since that time and China has recently passed new laws that offer protections to users that are similar to GDPR (Pernot-Leplay, 2020). Users who posted on Sina Weibo at that time may have even less of an expectation and understanding of additional third-party data analysis than users today. However, we consider our analyses (centered on how users share information in the network and how to maximize their influence fairly) to be closely related to the administration of Sina Weibo's services themselves and likely aligned to user expectations around data use.*
    
 - [X] **A.2 Collection bias**: Have we considered sources of bias that could be introduced during data collection and survey design and taken steps to mitigate those?
  
    *Sina Weibo's sampling methods for the API and China's censorship practices may have removed data in ways that we cannot measure. It is possible that certain types of posts -- for example, those related to political uprisings -- may be missing at higher rates. The extent of this bias is unknown to us. Certain types of users -- such as those from rural areas or older individuals who are less likely to use social media -- may appear less in our dataset. We are concerned with the behavior of active Sina Weibo users and bias related to who is likely to use social media is outside of the scope of this project. Although we are concerned with fairness, we can only address fairness along measurable dimensions in our dataset and only in terms of the distributions of these among active users. Gender is captured in a limited way in our dataset (as only male or female). Users who identify in other ways are misrepresented in the data.*
    
 - [X] **A.3 Limit PII exposure**: Have we considered ways to minimize exposure of personally identifiable information (PII) for example through anonymization or not collecting information that isn't relevant for analysis?
    
    *We have analyzed minimal amount of data about users: only their gender; when they post; and who they re-post from are included in our main dataset. The dataset we are using has been preprocessing so that the original Sina Weibo usernames are hashed user IDs. We are releasing the preprocessed data and code so that future researchers can replicate the entire pipeline. Despite this effort to de-identify the data, users could be identified by looking at Sina Weibo posts that match a given timestamp and volume of reshares. Given that this information is public, we are not revealing any additional PII that is not already available. However, we are increasing the accessibility of the information, which could increase the risk that users might be identified. In this context - where we are identifying users with a great deal of influence - this may cause harm to users who could be identified as potentially dangerous and candidates for censorship if their posts are political in nature. The original documentation for the data can be found [here](https://www.aminer.org/influencelocality).*
    
 - [X] **A.4 Downstream bias mitigation**: Have we considered ways to enable testing downstream results for biased outcomes (e.g., collecting data on protected group status like race or gender)?

    *Our analysis is focused on testing downstream results for biased outcomes.*

## B. Data Storage

 - [X] **B.1 Data security**: Do we have a plan to protect and secure data (e.g., encryption at rest and in transit, access controls on internal users and third parties, access logs, and up-to-date software)?

     _The data are publicly available, so we do not have a plan to protect and secure data._
     
 - [X] **B.2 Right to be forgotten**: Do we have a mechanism through which an individual can request their personal information be removed?

    *Anyone who finds themselves in the dataset can request that we remove their data by emailing us at team-influencers@googlegroups.com. We can only delete the data for the dataset we manage, specifically **X and X, found here***
    
    **LINK TO DATASETS**
    
 - [X] **B.3 Data retention plan**: Is there a schedule or plan to delete the data after it is no longer needed?

   *We are keeping a version of the data we used available indefinitely, for the purposes of replication (see below). Since these data are available via an API and have been used in other research (e.g., [here](https://www.aminer.org/influencelocality)), we assume that they will be available online outside of our activity. So, the possibility for use for replication purposes outweighs the costs of keeping them available to others (even if our activities may have increased the accessibility of these data). However, we are open to considering deleting our version the data. Please email us if you think these data should be deleted: team-influencers@googlegroups.com.*

## C. Analysis

 - [x] **C.1 Missing perspectives**: Have we sought to address blindspots in the analysis through engagement with relevant stakeholders (e.g., checking assumptions and discussing implications with affected communities and subject matter experts)?

    *We have discussed our research with subject matter experts at the University of California, Berkeley I School. We do not have connections to Sina Weibo users and were not able to speak with affected communities, which is a major blindspot in our research. We do not -- for example -- understand their perspective on our definition of fairness and any harms associated with the way we conducted our research.*
    
 - [X] **C.2 Dataset bias**: Have we examined the data for possible sources of bias and taken steps to mitigate or address these biases (e.g., stereotype perpetuation, confirmation bias, imbalanced classes, or omitted confounding variables)?

    *The balance of our demographic variable of interest (gender) is approximately 50/50 male/female, which seems like a reasonably unbiased distribution. However, it is biased in the sense that other genders are not measured.*
    
 - [X] **C.3 Honest representation**: Are our visualizations, summary statistics, and reports designed to honestly represent the underlying data?

    _We have designed these honestly to the best of our ability. We also conducted user testing on our visualizations to understand how people might interpret our visuals. The process and outcome for these tests can be found **HERE -- LINK**. However, this does not mean that all of our research output is well represented. If you think that we can improve, email us at team-influencers@googlegroups.com._
    
 - [X] **C.4 Privacy in analysis**: Have we ensured that data with PII are not used or displayed unless necessary for the analysis?

    _We are not using variables that might be considered PII in our main analyses. However, we are re-releasing the raw data, which contain user IDs. We have decided to release this version of the data for the purpose of full replication, however are considering releasing a new version of the data at a later date with the raw user IDs masked (but in a way that maintains the underlying structure of the data). See limit PII exposure section above for further discussion of PII in this project._
    
 - [X] **C.5 Auditability**: Is the process of generating the analysis well documented and reproducible if we discover issues in the future?

   _We are making our source data and code base available via a Github repository. Our first task in this project was to improve the readability and doucmentation of the code we are building from (available **HERE**; a prior version of the code is available [here](https://github.com/geopanag/IMINFECTOR))._
   
   **LINK TO OTHER CODE BASES IF POSSIBLE-- **

## D. Modeling
 - [X] **D.1 Proxy discrimination**: Have we ensured that the model does not rely on variables or proxies for variables that are unfairly discriminatory?

    _We are explicitly using a variable to measure gender in our modeling. As mentioned above, other sources of discrimination (like individuals who are less likely to use social media not appearing in the dataset) may exist but are not measurable in our dataset. The broader issue of bias in social media networks is something we have discussed but are not able to mitigate over the course of this project (see Unintended use section below)._
    
 - [X] **D.2 Fairness across groups**: Have we tested model results for fairness with respect to different affected groups (e.g., tested for disparate error rates)?
 
    *Our analysis is focused on improving fairness in IM algorithms. We optimize for fairness with respect to gender (categorized as males and females). Further iterations on this project could optimize for fairness with respect to other categories (like whether people reside in urban or rural parts of China). An important future step would be to optimize for fairness with respect to intersectional identities (Crenshaw, 1989; Hoffman, 2019).*
    
 - [ ] **D.3 Metric selection**: Have we considered the effects of optimizing for our defined metrics and considered additional metrics?

     _This project is focused on improving current metrics for selecting influencers in a network based on influence alone. Here, we are incorporating an additional measure of fairness. We have not considered additional metrics for this project. Future work might want to consider other ways of measuring fairness, which is an active area of research (e.g., as explained in [this YouTube video](https://www.youtube.com/watch?v=g-z84_nRQhw))._
     
 - [ ] **D.4 Explainability**: Can we explain in understandable terms a decision the model made in cases where a justification is needed?

    *Although not as interpretable as models based on logistic regression or random forest, graph neural networks (GNNs) are considered by some to be more interpretable compared to traditional deep models like convolutional neural networks (Liu et al., 2022) due to their reliance on a graph data format. However, post-hoc explanation methods are still typically needed for understanding their output. Different explanations may be needed for different types of GNNs, such as the type built to solve the Influence Maximization (IM) problem with fairness, here. Explaining IM algorithms is a field of research in and of itself and outside of the scope of our project. In future iterations on this IM algorithm, we could consider methods like interpretable decision trees, which have been shown to be effective methods for IM algorithms more generally (Yadav et al., 2017).*

 - [ ] **D.5 Communicate bias**: Have we communicated the shortcomings, limitations, and biases of the model to relevant stakeholders in ways that can be generally understood?

## E. Deployment
 - [X] **E.1 Redress**: Have we discussed with our organization a plan for response if users are harmed by the results (e.g., how does the data science team evaluate these cases and update analysis and models to prevent future harm)?

    *Since we are not deploying the model, this item does not apply.*
 - [X] **E.2 Roll back**: Is there a way to turn off or roll back the model in production if necessary?
 
    *Since we are not deploying the model, this item does not apply.*
 - [X] **E.3 Concept drift**: Do we test and monitor for concept drift to ensure the model remains fair over time?

    *Since we are not deploying the model, this item does not apply.*
 - [x] **E.4 Unintended use**: Have we taken steps to identify and prevent unintended uses and abuse of the model and do we have a plan to monitor these once the model is deployed?

    *Since we are not deploying the model, this item does not apply. However, we are sensitive to the unintended consequences of this project more generally, which we have discussed via a [Consequences Scanning exercise](https://doteveryone.org.uk/project/consequence-scanning/).* 
    
    _One set of unintended consequences relates to increased access of the Sina Weibo dataset. Although we are working with a deidentified dataset that has be released on the internet elsewhere, we are hosting the data on a platform that is more accessible to users in the West (Google Drive, as opposed to being hosted on Baidu where we downloaded the data from originally). Although we reside in the U.S. and were able to access the Baidu data, our re-release means that other data users could have access with fewer - or simply different - barriers. This increases the risk that individuals in the dataset could be reidentified, especially if the data are combined with other information (Narayanan and Felten, 2014).  _
    
    _Another group of unintended consequences stem from poor explanation or documentation of our project. For example,_ 
    
    *The algorithm could be used to spread information more fairly across groups in social media networks, such that messages reach a variety of users in proportion to their share on the population. On the flip side, the algorithm might be used in ways we did not intend. For example, could it be modified to identify individuals who would only share information with a specific group? Perhaps a nefarious actor - an individual who only wants members of a specific racial group to buy houses in a neighborhood - could bring redlining to a new level and share housing ads through influencers that trigger cascades only within that group. It could be used more directly by organizations to label their activities as "fair", even if they have only considered hte issue on a surface level (see Selbst and colleagues' (2019) discussion of the traps of considering sociotechnical problems - like fairness - from only a technical perspective). They could use the algorithm to share informaiton in a "fair" way on only a surface level - for example, considering only specific sensitive attributes and/or ignoring intersectionality (e.g., considering only gender, which was the only attribute considered in this project) or narrow categories within an attribute (e.g., only across those who identify as male or female andomitting other genders, as we did in this project). When we measure fairness only across individuals who identify as male or female, we might consider our information spread to be fair if it’s shared with males and females in proportion to their share of the population, but overlook that our message might only be shared with – for example - wealthy women and not women with low incomes (Crenshaw, 1989). When we only consider these two categories, we are not measuring whether the information is also spread to people who identify as transgender or other genders (Bowker and Starr, 1999).*

*Data Science Ethics Checklist generated with [deon](http://deon.drivendata.org).*

## References

Bowker, G.C. and Star, S.L. (1999). What a Difference a Name Makes - The Classification of Nursing Work. Chapter 7 of Sorting Things Out: Classification and its Consequences. MIT Press, 1999.

Crenshaw, K. (1989). Demarginalizing the Intersection of Race and Sex: A Black Feminist Critique of Antidiscrimination Doctrine, Feminist Theory and Antiracist Politics. The University of Chicago Legal Forum 139 (1989), 139–168. https://chicagounbound.uchicago.edu/uclf/vol1989/iss1/8

Hoffmann, A.L. (2019). Where fairness fails: data, algorithms, and the
limits of antidiscrimination discourse. _Information, Communication & Society, 22_:7, 900-915, DOI:
10.1080/1369118X.2019.1573912

Hu, S. (2020, March 26). *Weibo – How is China’s second largest social media platform being used for social research?*. The London School of Economics and Political Science Blog. https://blogs.lse.ac.uk/impactofsocialsciences/2020/03/26/weibo-how-is-chinas-second-largest-social-media-platform-being-used-for-social-research/ 

Liu, N., Feng, Q. and Hu, X. (2022). Chapter 7: Interpretability in Graph Neural Networks. In Wu, L., Cui, P., Pei, J., and Zhao, L. (Eds.), *Graph Neural Networks: Foundations, Fronteirs, and Applications*, pp. 121-147. https://graph-neural-networks.github.io/static/file/chapter7.pdf 

Mengzhen, W. (2019, May 19). *China's national library to archive 200 billion Sina Weibo posts*. CGTN. https://news.cgtn.com/news/3d3d674d79677a4e34457a6333566d54/index.html 

Narayanan, A. and Felten, E.W. (2014). No silver bullet: De-identification still doesn't work. https://www.cs.princeton.edu/~arvindn/publications/no-silver-bullet-de-identification.pdf

Nissenbaum, H. (2011). A Contextual Approach to Privacy Online. *Daedalus, 140* (4): 32–48. doi: https://doi.org/10.1162/DAED_a_00113

Pernot-Leplay, E. (2020). China’s Approach on Data Privacy Law: A Third Way Between the U.S. and the EU?. *Penn State Journal of Law & International Affairs, Vol. 8*, No. 1. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3542820

Satariano, A. (2022, April 22). _E.U. Takes Aim at Social Media’s Harms With Landmark New Law._ The New York Times. https://www.nytimes.com/2022/04/22/technology/european-union-social-media-law.html

Selbst, A.D., boyd, d., Friedler, S., Venkatasubramanian, S., and Vertesi, J. (2019). Fairness and Abstraction in Sociotechnical Systems. FAT* 2019, 59-68. https://dl.acm.org/doi/10.1145/3287560.3287598

Yadav, A., Rahmattalabi, A., Kamar, E., Vayanos, P., Tambe, M. and Norohnha, V.L. (2017). Explanation Systems for Influence Maximization Algorithms. _Proceedings of the 3rd International Workshop on Social Influence Analysis (Socinf 2017) August 19th 2017 - Melbourne Australia_. http://ceur-ws.org/Vol-1893/Paper2.pdf

Zeng, J., Burgess, J., & Bruns, A. (2015) The challenges of Weibo for data-driven digital media research. In IR16: Phoenix 2015, 2015-10-21 - 2015-10-24. Retrieved from: https://eprints.qut.edu.au/90266/ 
