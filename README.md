This is a connect4 https://tobias-fischer-connect4.netlify.app/

to run:
-yarn
-yarn start

futher additions:
-build an additional page for choosing whether to use ai vs player 2
-enable socket.io with a custom uuid for cross device player (need to deploy w/ heroku and build a BE)
-there is enviromental variables for changing the width and height # of cells, could be an additional input page, would have to update some sizing though (maybe slider?), also would only support non-ai
-on top of doing my hover on row, i could loop through and find the last cell not taken and hover a blinking red/blue outline on it to indicate where the space would be dropped
-for creating more pages, it is worthwhile to create layout components and use react-router's <Outlet /> but for this case it seemed unnesessary
