## Iteration 03 - Review & Retrospect
Start date: Tuesday, Nov 20th
End date: Thursday, Nov 29th

#### Changes from previous iteration

We decided not to change anything significant in our process from the last iteration to this iteration. Below are the process decisions that we’ve made that we consider to be successful:

Dividing our team into a 3-person front-end and a 3-person back-end has been our most significant and successful process decision. Since the front-end and back-end are so fundamentally different (in terms of languages and frameworks), having our team members each excel in one domain rather than just be competent in both domains has lead to greater efficiency and higher quality code. Creating a separate group chat for both sub-teams has also worked well, as team members are only notified of issues that concern them, leaving the main group chat an uncluttered area for high-level discussion about our product/process rather than a constant barrage of small technical questions. Designating a separate coordinator for both the front-end and back-end has focused the efforts of each sub-team and optimized communication between the teams. Our success metrics for this decision are efficiency, code quality, and ease of communication.

Prescribing branches and pull requests for features has been another significant and successful decision. The review of pull requests has lead to a lot of constructive feedback and ultimately cleaner, more readable, and more efficient code. Our approach to features means that our master branch is always the “source of truth”: as bug-free, complete, and deployable as possible at all times. This has lead to fewer bugs and cleaner merges. Our success metrics for this decision are code quality, code cleanliness, code readability, and deployability.

#### Roles & responsibilities

Front-End (Brennan (coordinator), Thomas, Jacob):
- Our front-end developers will be responsible for the operation and implementation of the user interface of our application.
- They will be responsible for producing the views and designing them accordingly to fit our target users needs while remaining simple enough for ease of learning by novice users

Back-End (Raymond (coordinator), Kory, Chris):
- Our back-end developers will be responsible for storing the data of our application
- They will also be responsible for implementing methods to return appropriate (dependent on the request) data upon user request

Scrum Master (Kory):
- Responsible for the removal and reduction of impediments and blockers of productivity
- Facilitator of meetings
- Ensures the team is adhering to the sprint plan and backlog

Product Owner (everyone!):
- Responsible for maintaining the product backlog
- Responsible for prioritizing features list for our application
- To act as our lead user of our application in order to help translate a understanding of users and their needs to the development teams
- Motivate team with a clear and elevating goal

#### Events

As our team is constructed of both people who live close to campus as well as commuters, we will have our meetings online via a voice chat app called Discord. We will also have a Facebook group chat for day to day communications and announcements.

Our planning meeting will be held on Nov. 20, around 6pm, via Discord. Our review meeting will be on Nov. 29 around 8pm (subject to change given team members’ availabilities), also via Discord.

The purpose of our sprint planning meetings is to layout a sprint plan as well as to construct our sprint backlog from our product backlog. We will choose what tasks will be completed based upon our estimations on how much work we can complete during that sprint. Our sprint planning meetings will also include some backlog grooming if necessary. We will also bring up any concerns for the future sprint such as if a team member is unable to take a certain amount of work due to other commitments such as upcoming exams, etc.

The purpose of our sprint retrospective meetings are to evaluate the amount and quality of work done in the recent sprint. From this evaluation we can make conclusions and observations about the amount of work put into our future sprint backlogs if for instance we were unable to complete the amount planned previously. We will also discuss the processes we are using for collaboration and implementation of work, so that we can expand on processes that work and re-evaluate those which did not. We will also go over our corresponding sprint plan to see if we were able to meet the goals set.

We will also use our tutorials as a quick weekly catch up where everyone will discuss their work done, their plans for the upcoming week and any concerns if anyone were to have them about their work.

Code reviews are performed in the hours following a pull request and are carried out by a member of the same sub-team as the member who submitted the request. Feedback is often given through GitHub, but if the feedback is too complicated, there will be a Discord meeting between the submitter, the reviewer, and perhaps the third member of the sub-team if the pull request is of significance to all of them.


#### Artifacts

The artifact which we will keep and maintain in order to keep track of tasks will be a product backlog which will be a Google Docs spreadsheet with each task and their respective priority. Tasks will be prioritized by order of importance and each tasks dependency on others, so for example if a task depends on another being implemented prior, we will prioritize the task being depended on over the task which is dependent. The priority of each task is assigned as part of the planning meeting.

Tasks will be split up and assigned based on the nature of the tasks. So front-end tasks will be given to front-end devs and back-end tasks to back-end devs. For the most part it is first-come-first-serve for the distribution of tasks, but the coordinator for each sub-team has the authority to assign tasks to specific members if needed.

We will also keep a schedule of our planned meetings in a accessible location in order for ease of access for all team members. We will also take attendance at each meeting whether in person or online in order to ensure all members are contributing. During each meeting a summary will be produced for future record of what was discussed.

#### Git / GitHub workflow

Our Git workflow centers around branches and pull requests. When working on a new feature, a developer creates a branch and only commits to that branch. When the feature is complete, the developer creates a pull request for his branch to be merged into the master branch. At least one other person from his sub-team (front-end or back-end) will review the pull request and give feedback through GitHub or via a short Discord meeting. If the code is clean, readable, efficient, and tested, it will be merged by the reviewer.

If a developer needs to push a small change that he is confident won’t break anything in the master branch, he is allowed to push it directly, as long as he sends a message to the main group chat detailing exactly what he did. The vast majority of the work, however, is done using branches and pull requests.

We use branches and pull requests to ensure that all the non-trivial code present in our master branch is reviewed. This ensures that our master branch contains only code that is readable, efficient, and maintainable. It also ensures that we have consistent style and design across all our modules, regardless of who writes them.  


## Product

#### Goals and tasks

- (back-end) implement search functionality on the search page
- (back-end) implement the search criteria functionality on the search page
- (front-end) create the form for creating a new listing, which includes support for bundles (i.e. multiple textbooks)
- (back-end) implement listing creation and editing
- (front-end) create the active listings page, where a user can view his/her “active” listing (i.e. listings currently on the marketplace), mark them as sold (hence removing them from the marketplace), edit them, or delete them
- (back-end) implement listing deletion
- (front-end) create the profile page, where users can view and edit their information (email, phone number, etc.)
- (front-end) create the inactive listings page, where a user can view their sold listings,  “reactivate” a sold listing (hence placing it back on the marketplace) or delete a sold listing



#### Artifacts

- Static web pages (a create-a-listing page, an active listings page, an inactive listings page, a profile page), so the user has a clean, easy-to-use UI for accomplishing their goals on the website
- Full integration of the database with the website, so users are able to view, interact with, and change the data (and have those changes persist)
- Full vertical implementation of key features of our website like searching and filtering, so users are able to find the textbooks they need
- Video displaying our web application, to demonstrate that our application works and meets the requirements of our users
- Updated scrum artifacts (product backlog, sprint backlog, meeting schedule): https://docs.google.com/spreadsheets/d/1kHT57hwY_5hdanTw9rLCbr0QdopAXCnvRaVo4S0Ht8E/edit?usp=sharing
