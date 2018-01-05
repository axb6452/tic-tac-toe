Techologies used:

1) HTML
2) css
3) Bootstrap-sass
4) Bootstrap HTML templates
5) JavaScript - jQuery
6) Atom.io framework

Planning:

Pre-project work:
Prior to writing code, I reviewed the game-project-scope study, particularly the user stories that I had crafted for the tic-tac-toe project, as follows:

As a user, I want to be able to view my overall score at any point when using the application
As a user, I want to be able to retrieve my incompleted games so that I can select the ones I want to complete
As a user, I want to be able to be able to quickly navigate to the game board when I click the game board link in the navigation panel
As a user, I want to be able to sign out, and sign in using authorization credentials so that nobody else can play my games

Based on my user stories, I created wireframes, for a user-login page and game-page, that I believed would enable me to achieve both the project requirements, and the individual functionality requirements of my user stories.

I discussed my wireframes with Danny and Maria. My wireframes were approved, and for the most part my objectives were too. The primary piece of advice I received was to concentrate on fully developing game functionality and satisfying core technical requirements before concentrating on layout, css and additional features.

Based on this, I religiously followed the Suggested schedule, and began working my way through technical aspects of the project after the planning and set up phase. I elaborately detailed my project commits while working through each section. Commit message history can be found below and included as part of project work documentation.

Project work:
As mentioned previously, my game plan was to address the core requirements by sticking to the schedule suggested. Before writing code, I would jot down, on a scrap book, pseudocode of what I expected to accomplish at the end of each section, together with samples of JavaScript programming concepts that I would need to achieve functionality.

I would also diagram game board functionality - such visual cues helped me develop programming logic, which in turn sharpened the flow of my program, when it came to implementation. Diagrams also gave me clues as to what the eventual layout should look like, thus enabling me to better structure my HTML and CSS layout.

In order to avoid repetition in code, I would create functions that performed routine tasks and invoke these functions at necessary points in the program, as taught in class.

To facilitate better logic and for easier access to code, I divided my JavaScript files into api, events and ui files and included them in separate folders for both user login and the game page.

During implementation, I would sometimes figure out a better approach than I had initially planned, with my draft wireframes, and for previous sections. For example, I noticed that it would be much more user friendly to have both the sign in and sign up features on one screen with success/error labels. This prompted me to deviate from my initial plan of having separate screens for sign in/ sign up.

A log of my planning/thought process during development is detailed in the commit message history below. Here, I have listed my accomplishment(s) during each commit, and future development plans. I have also explained the bugs I ran into during development and at what stage I was able to fix those bugs. The commit message history below is detailed in chronological order.

Thu Dec 21 09:40:40 2017 -0500
Changes to package-lock.json

Thu Dec 21 09:30:03 2017 -0500
Initial commit

Fri Dec 22 05:41:52 2017 -0500
- Completed Planning and Setup phase. Discussed wireframes and project
plan with Danny and Maria during the 1:1 meet. After a brief discussion
of plans, and some sound advice, I was ready to move forward.
- Developed the Game Engine and most of the Game UI code.
- Have to display additional messaging for turn changes and win/loss outcome.
- Today, I'll continue working on the Game UI and begin the Authentication phase.
- More updates to come...

Fri Dec 22 09:59:46 2017 -0500
-Enhanced Game UI. Messaging is now displayed for player turns, invalid
user clicks and win/loss outcomes.
-Next step is working on Authentication.

Sat Dec 23 17:04:30 2017 -0500
Completed User Authentication:
- A user can be created and credentials used to login to the game page.
- Advanced change password functionality enables the User to readily
change his/her password without navigating to a new screen.
- Change-password and Sign-out functionality developed
includes HTTP Authorization header, in order to ensure secure updates
are made to a given user's credentials and the user is safely logged out
when the sign out button is clicked.
- Minor CSS changes required for message labels and font styles,
including color and positioning.
- Next steps include development of the Game API and synchronizing API
calls with the Game UI and Game Engine updates.
- Further CSS will be incorporated as desired once all functionality is
implemented.

Sun Dec 24 15:52:01 2017 -0500
- Enhanced Game Engine Functionality. Now, appropriate messages are
displayed for invalid clicks during game play and after a result
has been achieved. Work has to be done on draw outcomes.
- Improved overall CSS layout. More work to be done...
- Set up buttons and inputs for the Game API. Ready for implementation..

Mon Dec 25 01:10:17 2017 -0500
- Developed and Tested Game Engine, Authentication and Game
UI components. Functionality of all three components is working as
desired and as specified by project reqs.
- Commenced working on Game API. Hoping to achieve full functionality
by the end of day tomorrow.
- Last part is to work on Final Touches and tackle the Bonus sections,
including the provided challenge.

Mon Dec 25 20:38:03 2017 -0500
- Developed and tested fully functional game API with
required calls to the server (curl and web app). A user can now create a
new game, retrieve a list of completed and incomplete games, and
specify a game to view the outcome of/continue playing.
- Next step is ensuring that a visual display of game statistics
including #of games won per player/number of draws is achieved for
each user.
- Final steps include tackling multiplayer mode and other bonus
requirements before moving on to CSS/ReadMe/Documentation.

Mon Dec 25 22:08:18 2017 -0500
- Developed Global Scoreboard that keeps track of and displays all
games won/drawn/lost from all users playing as either player x or player
o.
- Next step is to work on CSS layout and bonus features, including
multi player and multi device modes.
- Begin readMe and other necessary documentation.

Mon Dec 25 22:38:26 2017 -0500
Fixed minor bug in Game Engine movements.

Tue Dec 26 23:50:26 2017 -0500
- Developed CSS theme for single player, single device functionality.
- Utilized localStorage to store and retrieve the values of global
X wins, draws and O wins, of the score board counter even after browser
close/refresh.
- Next step is to make the game multi device by improving current
@media layout and multi-player.
- Documentation and wireframes links will also be worked on.
Hope to wrap up project within the next couple of days.

Wed Dec 27 12:20:00 2017 -0500
- Developed multi device functionality by using @media to style CSS
for elements at a max-width of 500px (cell phone screen). The goal is to
ensure that the game can be played on a web browser or a mobile device.
Testing pending.
- Multiplayer development pending.
- Documentation and wireframe work pending.

Wed Dec 27 12:56:52 2017 -0500
- Corrected minor bug in onLoad function, events file.
- Made minor adjustment to score board table.

Wed Dec 27 15:07:50 2017 -0500
- Minor update to index.scss for the game-page under @media. The update
prevents the user from scrolling beyond the boundaries of the game
page when viewed from a smaller screen/cell phone.
- Minor change to onLoad() function in puzzle events checks for
a blank td value on document ready.
- Next step is focusing exclusively on Multiplayer mode/documentation.

Wed Dec 27 16:08:35 2017 -0500
- Added code in auth ui to clear previous sign-in/sign-up messages on
successful sign out.

Wed Dec 27 17:35:23 2017 -0500
- Attempted to fix win counter local storage issue. Previously, NaN was
being set after wins/losses. Minor change to index.scss.
- Multiplayer mode/documentation to be worked on.

Wed Dec 27 18:08:14 2017 -0500
- Attempt at getting win counter to work in production.
- Modified events.js file

Wed Dec 27 20:10:51 2017 -0500
- Replaced html() with text() to get/set content for <td></td> in win counter
table as the former was not working as desired.
- Improved win counter css.

Wed Dec 27 21:55:37 2017 -0500
- Changed ternary operator conditions in onLoad() function in puzzle
event.js file to check for undefined and null values for
win counter td on page load.

Wed Dec 27 22:07:06 2017 -0500
- Final change to ternary condition of win counter to resolve
previous errors.

Wed Dec 27 22:11:18 2017 -0500
- Final change to ternary condition in onLoad function of Puzzle events.js
file. This change checks for NaNs as well when initializing/reassigning
values for the win/draw/lose counter.

Thu Jan 4 14:50:40 2018 -0500
- Developed multiplayer functionality to include a gameWatcher variable
that calls a resourceWatcher function and listens for a change to
the update of a game board in another player's browser (player o).
Changes made are updated dynamically to the game board of the player
creating the game (player x). However, as of now, the gameWatcher
connection to the API is not closing in a timely manner after game
completion, thus resulting in internal server errors (500). (When
I get time, I need to take a closer look into closing gameWatcher
connections to the API)
- Developed bootstrap modal popup to display (and enable retrieval) of
completed and incomplete games on button click.
- Improved navigation functionality to various sections of the game
page.
- Enhanced CSS to include box-shadow effects for the game table and
results table. Included borders around respective sections.
- Next step is to work on documentation and validation of text box
inputs.
- Also need to ensure that the game is multi device.

Problems to be fixed/Enhancements to be made:

- One major issue that I need to look closely into is Multiplayer functionality.
Specifically, I need to ensure that connections to the API are closed in a
timely manner, so as to prevent overloading of the backend server.
- Another technological enhancement that I could make is incorporating link
buttons to retrieve incomplete and complete games. This would prevent having to
enter the game id each time in order to retrieve a game.
- I would provide the option to play the game against Artifical
Intelligence (AI).
- I also need to properly resolve the win counter local storage issues and
ensure proper functionality under all circumstances. 
- Connect winning symbol combos with a straight line through their center points.
