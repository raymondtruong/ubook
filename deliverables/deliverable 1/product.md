# UBook

#### Q1: What are you planning to build?

We are planning to build UBook, a textbook marketplace website where University of Toronto students can buy and sell used textbooks quickly, easily, and effectively.

Hunting for textbooks is something that every university student dreads. Buying brand new textbooks from the UofT bookstore or from an online retailer like Amazon is prohibitively expensive, costing students hundreds or thousands of dollars a year. This forces students to buy used textbooks from other students, and especially at the beginning of the school year, this a tedious process that costs students precious time, energy, and money. To make matters worse, the services that students currently use for this, such as Kijiji and Facebook Marketplace, are general-purpose exchange websites for any goods or services and are therefore not well-suited to the exchange of textbooks specifically. Attached is an artifact explaining the shortcomings of Facebook Marketplace, our main competitor.

UBook, a service catered specifically towards textbooks for UofT students, aims to solve all the issues faced when using its competitors by removing the hassle from buying and selling textbooks. It has three specific goals:

* Ensure both buyers and sellers get the best possible deal
* Ensure that postings contain all the useful and relevant pieces of information needed for a deal to be made
* Make textbook exchange as easy and fast as possible

In order to achieve this, we plan on implementing features that give UBook the advantage over its competitors, such as textbook lookup by UofT course code, advanced sort by textbook condition and price, special listings for textbook bundles, direct links to Amazon and the university bookstore for comparison, and price analysis based on the average market price.

#### Q2: Who are your target users?

Our target audience is University of Toronto students who are looking to purchase second-hand textbooks at the best price possible, in the best condition possible, as easily as possible.

Let's imagine some typical users of UBook:

* Alice is a 1st year computer science student who is overwhelmed by her transition to university, and doesn't know what textbooks she needs. Kijiji isn't very useful, because people only list their textbooks by title or author. She can’t seem to find the difference between two similar-looking listings because the sellers weren’t specific enough with which edition they were selling. Once she finally finds the answer, she doesn’t realize that she might as well buy a brand new copy from the bookstore because neither her nor the buyer did any research into the market for this book.

* Jean, a 2nd year economics student, is very careful with his money, knowing that his student loans are creeping into 6 figures. He wants to ensure that he is getting the best deal possible on his textbooks. He wants to know how much money he’s saving by purchasing textbooks used rather than new. However, Facebook and Kijiji don’t offer any mechanism to easily compare postings of the same textbook, or compare a textbook’s used price to its brand new price. Jean also wants to sell his old textbooks to make some money, but he keeps finding himself selling his textbooks for too low of a price due to his lack of knowledge about the market for his textbooks.

* Georgio, a 3rd year architecture student, is very nitpicky about his school supplies. He wants all of his textbooks in perfect condition, with no highlighted parts or water damage. However, nobody on Facebook or Kijiji seems to include information about condition in their textbook postings. Even if they do, it is impossible to group ads based on their textbook condition.

* Rachel, a 4th year engineering science student who also works a part-time job, has very little free time. She wants to devote as little time as possible to finding textbooks, so she can do things she actually enjoys. However, Facebook and Kijiji’s search functionality is clumsy, especially for textbooks. Moreover, Rachel has a class that requires three textbooks, but she can only find ads for individual textbooks on Facebook and Kijiji, which makes the textbook exchange process even longer for her. Rachel also wants to sell her old textbooks, but people take forever to respond to her ads due to the lack of information Rachel put in them.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Internet users are very familiar with online marketplace websites. There are plenty of sites which fundamentally offer the exact same thing: Kijiji, Craigslist, Letgo, and Facebook Marketplace. However, many of these are too general-purpose, so they value simplicity over functionality. As a result, although a wide range of products and services can be posted, it can be hard to find exactly what you're looking for because their search and sort criteria are lacklustre at best.

UBook, on the other hand, is specifically designed to do one thing and to do it well: facilitate the exchange of textbooks in a way that can be easily accessible to any UofT student. We can now see why UBook is superior:

* Alice can simply search UBook by course code and see a set of listings for each and every textbook that she may need. She can see the condition of each textbook and its average market value. If she doesn’t think she’s getting a good deal, then she knows immediately and she can look for another listing. Or, if she doesn't like what she sees altogether, then there is a direct link to the university bookstore so that she can buy a brand new copy instead.

* Jean uses UBook because it makes it easy to compare prices of the same second-hand textbook on the marketplace. He can simply sort the textbooks he needs by price, or do an advanced search that only shows textbooks that are within his budget. UBook displays the price of the brand new textbook on stores like Amazon, so Jean knows how much money he’s saving. When he’s selling a textbook, UBook shows the average price of the textbook on the UBook marketplace as well as the brand new price, so Jean can gauge the market and make sure he gets the most money out of the sale.

* Georgio uses UBook because UBook ads force the seller to list all pertinent information regarding the textbooks, including its condition. UBook’s advanced search allows Georgio to sort the textbook he needs by condition, or omit textbooks that are in bad condition. UBook’s notification system also has the capability of notifying Georgio via email when the textbook with the exact specifications he is looking for is posted.

* Rachel uses UBook for its search functionality, which is optimized for textbooks. Rachel often searches for textbook by course code, so she doesn’t have to check her syllabus or remember that super long textbook name and edition number. UBook’s “bundle” feature, where sellers can bundle multiple textbooks for the same course into one ad, makes buying those three textbooks for that one class easy for Rachel. Rachel’s UBook ads are more complete and are responded to way faster than her messy Facebook or Kijiji ads, because they encourage her to add all the necessary information, in an easy and intuitive way.

### Highlights

What type of application do we want to make?

Initially, we were leaning towards an installable application for Windows. However, there were many problems with this. First of all, a considerable percentage of students use MacOS. Since we want our application to be as accessible as possible, we would need to support both Windows and MacOS. This would make the product more difficult for our team to construct and add potential for bugs. Also, installable applications are inconvenient, since they must be downloaded and installed. This directly conflicted with one of our main aims, which is to make textbook exchange as quick and easy as possible. So, we decided to make a web application, since supporting different browsers is easier than supporting different operating systems and web applications are more easily accessible. We also considered adding mobile support for our application, since students are often on the move and using their phones as their primary devices. We decided against it due to the added complexity of mobile software development and because we felt it’s not necessary for our minimally viable product, as textbook exchange is not that time-sensitive and rarely requires immediate action.

Should our application be for all universities or just the University of Toronto?

We first planned to make our application available to all universities, where each university would get a separate environment to buy and sell textbooks. This would make our application versatile and widen its scope from a single university to the entire world. However, this idea raised a lot of difficult questions: Would data be stored by university or all together? How would we deal with how different universities implement course codes? How could we accommodate a student transferring universities? Making our application available to all universities would mean adding a huge amount of corner cases that would inevitably lead to bugs. Also, our target audience for our application has always been ourselves, along with our peers: UofT students. So we decided that   for our minimally viable product, we would focus completely on getting UofT textbook exchange as optimized as possible, rather than on getting textbook exchange for all universities working, but not optimally.

How much should we enforce the “completeness” of ads?

This was a particularly difficult question, because it represented two of our main goals for UBook conflicting: access to information vs. ease of use. If we didn’t enforce that students put certain information in their postings, many postings would be incomplete. Buyers would be frustrated, but selling would be quick and easy, as is our goal. If we did enforce posting “completeness”, selling would become more arduous, but buyers would then have all the information needed to make their purchase. We decided to lean towards the latter, for two specific reasons. Firstly, we believe that part of the reason UBook will stand out from its competitors is its textbook-optimized advanced search capability. However, this functionality only works when postings contain the relevant information to search or filter by. Secondly, we believe that most of our users will buy and sell textbooks on our marketplace, since all students have to do both at some point. Thus, the ease of use one loses as the seller of a textbook will be balanced by the ease of use gained as the buyer of a textbook.

Which features should be included in our minimally viable product?

When brainstorming UBook, we came up with many ideas for features that would make our application stand out among competitors: textbook “bundles” that exist so multiple textbooks needed for a single course could be compiled into a single posting, links to the UofT bookstore and Amazon price for any textbook one is buying/selling, a simple instant messaging system where buyers and sellers can talk in real time, etc. Whether we decided to implement a feature as part of our minimally viable product depended on two variables. Firstly, is this feature necessary to achieve one of our three main goals? Secondly, how complex will this feature be for our team to implement? We decided to keep textbook “bundles” since it is relatively simple and we felt it was necessary for our application to be quick and easy to use. We decided to keep the links for the brand new textbook prices since it is also simple and necessary to ensure that users get the best possible deal. However, we decided to scrap the instant messaging idea because it's not necessary to any goal, as textbook exchange doesn’t have to happen in real time and texting/emailing are viable alternatives, but it would add a lot of complexity to the project.
