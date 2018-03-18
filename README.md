# Tic-Tac-Toe

## Technologies used

1) HTML
2) css
3) sass - Bootstrap
5) JavaScript - jQuery
6) Atom IDE

## Planning, Process, Problem Solving

### Pre-project work

Prior to writing code, I reviewed the game-project-scope study, particularly the user stories that I had crafted for the tic-tac-toe project, as follows:

As a user, I want to be able to view my overall score at any point when using the application
As a user, I want to be able to retrieve my incompleted games so that I can select the ones I want to complete
As a user, I want to be able to be able to quickly navigate to the game board when I click the game board link in the navigation panel
As a user, I want to be able to sign out, and sign in using authorization credentials so that nobody else can play my games

Based on my user stories, I created wireframes, for a user-login page and game-page, that I believed would enable me to achieve both the project requirements, and the individual functionality requirements of my user stories.

I discussed my wireframes with consultants. My wireframes were approved, and for the most part my objectives were too. The primary piece of advice I received was to concentrate on fully developing game functionality and satisfying core technical requirements before concentrating on layout, css and additional features.

Based on this, I religiously followed the Suggested schedule, and began working my way through technical aspects of the project after the planning and set up phase. I elaborately detailed my project commits while working through each section.

### Project work

As mentioned previously, my game plan was to address the core requirements by sticking to the schedule suggested. Before writing code, I would jot down, on a scrap book, pseudocode of what I expected to accomplish at the end of each section, together with samples of JavaScript programming concepts that I would need to achieve functionality.

I would also diagram game board functionality - such visual cues helped me develop programming logic, which in turn sharpened the flow of my program, when it came to implementation. Diagrams also gave me clues as to what the eventual layout should look like, thus enabling me to better structure my HTML and CSS layout.

In order to avoid repetition in code, I would create functions that performed routine tasks and invoke these functions at necessary points in the program, as taught in class.

To facilitate better logic and for easier access to code, I divided my JavaScript files into api, events and ui files and included them in separate folders for both user login and the game page.

During implementation, I would sometimes figure out a better approach than I had initially planned, with my draft wireframes, and for previous sections. For example, I noticed that it would be much more user friendly to have both the sign in and sign up features on one screen with success/error labels. This prompted me to deviate from my initial plan of having separate screens for sign in/ sign up.

### Unsolved Problems

- One major issue that I need to look closely into is Multiplayer functionality.
Specifically, I need to ensure that connections to the API are closed in a
timely manner, so as to prevent overloading of the backend server.
- Another technological enhancement that I could make is incorporating link
buttons to retrieve incomplete and complete games. This would prevent having to
enter the game id each time in order to retrieve a game.
- Connect winning symbol combos with a straight line through their center points
or adding animation to symbols for win/loss outcomes.

### Wireframe and user stories
https://drive.google.com/open?id=1TLrmlNbaQwNedbvfTX9GRvXcKj10shRa
