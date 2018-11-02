# UBook

## Iteration 02

* Start date: October 16th 2018
* End date: November 1st 2018

## Process (Same as first iteration except Git/GitHub workflow)

#### Roles & responsibilities

Front End:
* Our Front End devs will be responsible for the operation and implementation of the user interface of our application.
* They will be responsible for producing the views and designing them accordingly to fit our target users needs while remaining simple enough for ease of learning by novice users

Back End:
* Our Back End devs will be responsible for storing the data of our application
* They will also be responsible for implementing methods to return appropriate (dependent on the request) data upon user request.

Product Owner:
* Responsible for maintaining the product backlog
* Responsible for prioritizing features list for our application
* To act as our lead user of our application in order to help translate a understanding of users and their needs to the development teams.
* Motivate team with a clear and elevating goal

Scrum Master:
* Responsible for the removal and reduction of impediments and blockers of productivity
* Facilitator of meetings
* Ensures the team is adhering to the sprint plan and backlog


#### Events

As our team is constructed of both people who live close to campus as well as commuters, we will have our meetings online via a voice chat app called Discord. We will also have a Facebook group chat for day to day communications and announcements.

We will hold two primary meetings, a sprint planning and a sprint retrospective meeting.

The purpose of our sprint planning meetings is to layout a sprint plan as well as to construct our sprint backlog from our product backlog. We will choose what tasks will be completed based upon our estimations on how much work we can complete during that sprint. Our sprint planning meetings will also include some backlog grooming if necessary. We will also bring up any concerns for the future sprint such as if a team member is unable to take a certain amount of work due to other commitments such as upcoming exams, etc.

The purpose of our sprint retrospective meetings are to evaluate the amount and quality of work done in the recent
sprint. From this evaluation we can make conclusions and observations about the amount of work put into our future
sprint backlogs if for instance we were unable to complete the amount planned previously. We will also discuss the processes we are using for collaboration and implementation of work, so that we can expand on processes that work and re-evaluate those which did not. We will also go over our corresponding sprint plan to see if we were able to meet the goals set.

We will also use our tutorials as a quick weekly catch up where everyone will discuss their work done, their plans for the upcoming week and any concerns if anyone were to have them about their work.


#### Artifacts

The artifact which we will keep and maintain in order to keep track of tasks will be a product backlog which will be a Google Docs spreadsheet with each task and their respective priority. Tasks will be prioritized by order of importance and each tasks dependency on others, so for example if a task depends on another being implemented prior, we will prioritize the task being depended on over the task which is dependent.

Tasks will be split up and assigned based on the nature of the tasks. So front end tasks will be given to front end devs and back end tasks to back end devs.

We will also keep a schedule of our planned meetings in a accessible location in order for ease of access for all team members. We will also take attendance at each meeting whether in person or online in order to ensure all members are contributing. During each meeting a summary will be produced for future record of what was discussed.



#### Git / GitHub workflow

For our Git workflow we will be using pull requests for merges which cause or change logical implementation to our code base. This means that code/files such as view templates or starter code required for frameworks (django) can be merged directly to our code base master branch. Though this may not be ideal, as the code we are pushing initially won't change the current working system (we do not have one as of yet) then we have decided that this will actually be beneficial to getting our foundation set up and distributable as fast as possible. All code changes which may result in a change in functionality or appearance will have a pull request submitted. The pull request will go from a team members locally forked repos into our project team’s master branch. Ideally we will have the other members of our back end and front end subteams review their team's respective pull requests, however in the event that a subteam member is not able to we will allow other team members to approve them as well. Once the pull request has been reviewed, the reviewer is responsible for closing the pull request and merging the branch into master. Files such as iteration plans and reviews will be pushed directly to master as they do not change the code base.

## Product

#### Goals and tasks

For this deliverable we are aiming to have a full implementation of authentication and user sign in, as well as have the front end views completed with hard coded listings and no functionality.

The user story for our authentication implementation states : As Jean/Rachel I want to be able to create a account and/or log into my pre existing account so that I am able to sell and buy textbooks.

We will give the users an option of logging in or signing up.  When logging in our full vertical user authentication will consist of a front end login form and backend implementation to ensure that the entered credentials of the user are correct and the user is existent. When signing up in our full vertical user authentication will consist of a sign up form and a backend implementation in order to create a new user account with the entered credentials.

For our completed front end views we will complete a listing search page, a login page, a sign up page, a user listings page and a user information page. All besides our login and sign up pages will have no functionality. This is because we believe trying to implement functionality in all our views is too much to take on during this busy time in the semester. Instead our front end team will be working on creating the views without the need of worrying on allowing them to be compatible with the back end implementation. This will allow them to have the aesthetics and visual presentation sorted out leaving only simple changes to allow for information to be passed to and from our back end implementation. Our login and sign up forms will have the
functionality described above.

#### Artifacts

-  Static pages (a listing search page, a user listings page and a user info page)

-  Full Vertical implementation of user authentication with login and sign up front end views and backend implementation to enable logins and sign ups

-  Video displaying the static pages as well as demonstrating our working vertical authentication implementation.

-  Updated scrum artifacts (product backlog, sprint backlog, meeting schedule): https://docs.google.com/spreadsheets/d/1kHT57hwY_5hdanTw9rLCbr0QdopAXCnvRaVo4S0Ht8E/edit?usp=sharing
