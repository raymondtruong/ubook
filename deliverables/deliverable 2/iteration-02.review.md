# UBook

## Iteration 02 - Review & Retrospect

* When: November 1st 2018
* Where: Online via discord

## Process - Reflection

#### Decisions that turned out well

Our decision to separate the team into 2 subteams by placing each member as either a frontend developer or a backend developer. This decision allowed members to work with what they were most comfortable with. It also made it easy to assign specific tasks for members to work on rather than having each member work on multiple small tasks.

We appointed each subteam (frontend and backend) a designator coordinator who acts as the subteam’s leader and ensures each subteam had a clear goal, and stayed on track towards that goal. The tasks for each were divided amongst the members with the coordinator making sure the members did not have overlapping work when possible. In the end we were able to meet this deliverable with little to no friction within each group. See roles contract in repository to see assigned roles.

We mandated that every commit which caused changes in functionality or major appearance will be done through a pull request which allowed for easy correction of mistakes. From this we were able to catch a number of small errors that would have created bugs in the finished product.


#### Decisions that did not turn out as well as we hoped

We initially planned to push code to the main repository by creating a pull request from our individual forked repositories and merging those requests upon approval. However in a team environment such as ours, it made it much more difficult to deal with conflicting code, and approving pull requests if we each worked on our own segregated repositories.

The communication between the frontend group and the backend group was much more problematic than we anticipated. In some instances the backend had specific requirements of how the html documents were structured,  in order to use the desired framework, which required reorganization and restructuring of some files adding to the workload for the team. In addition, issues discussed in our facebook group chat were hard to communicate over instant messaging and only added confusion about the issue.

By the end of deliverable 2, we realized that we made the work of the front end developers much heavier in comparison to the backend developers. We were too ambitious and tried to complete too much of the front end work in this deliverable. 


#### Planned changes

We plan to use multiple branches (one of each in progress feature) to develop the features of our application rather than creating 6 individual forks and have each member working within their own forked repositories. Work becomes much more fluent if members are working on the same feature work on the same branch rather than a separate forked repository each. This makes our github structure much more organized and simpler to approve pull requests. For the next iteration we will be working on branches in the main repository rather in our own forked repositories.

In order to fix the issues we encountered with communication between the sub teams, we intend to have more frequent meetings rather than using the facebook group chat as our main source of dialogue. Having team meetings should allow us to clear any confusions we may have, and allow us to get a clearer picture of how the implementations on the two ends will come together and make sure that members are in agreeance with the work done and assigned.

## Product - Review

#### Goals and/or tasks that were met/completed:

We were able to complete a basic, and functional user authentication vertical. Users can now sign up by creating a account for our application as well as login with existing accounts. Users are denied access and are displayed an error message if they have entered incorrect credentials.

We have completed the html views for the following pages of our application:
> The launch page
> The listings search page
	> The login page
	> The registration page
	> Individual listing details sub window
	> Bundle listing details sub window

Evidence for completion of these goals will be displayed during the deliverable video

#### Goals and/or tasks that were planned but not met/completed:

We were not able to complete all of the desired views as previously stated in the plan document because we did not accurately anticipate the amount of work each view actually required as well as external factors such as work from other courses such as midterms and assignments. In particular we were not able to complete the listings page, which shows the current signed in users listings, and the user account information page, which displays information such as the users phone number, email and user name. For this iteration we placed too much work on our front end team and too little on the backend team. However as these pages were templates that will be needed when the backend team starts to implement having the listings and other information dynamically load into the pages, the work done for this iteration has set us up well for the next iteration.

## Meeting Highlights

For the next iteration we intend to assign a more balanced workload between the frontend and backend groups. This will ease the pressure that the frontend developers felt this past iteration and give the backend developers a more active role.

Taking into account the problems we encountered in this iteration, we intend to make our goals for next iteration while being mindful of the work members may have in other courses. With more evenly distributed workloads and more realistic goals, it will allow us to meet our goals in time for our next deadline with more time to perfect each goal.

We not only want to make our code functional, but we also want our code to be easily readable by other developers of our team. This iteration we intend to put more of an emphasis on code craftsmanship (e.g. adhere to PEP8 style guidelines for Python backend). Writing functional and readable code will help not only with debugging, but also help with our communication and approving pull requests because others will be able to clearly see what is trying to be done.



