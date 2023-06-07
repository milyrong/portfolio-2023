# Nom Notes food adventure tracker

Application Configuration: 
    Below are the screen sizes for best experience: 
    Minimum width for desktop: 1400px; 
    Minimum height for desktop: 700px; 
    Minimum width for phone: 300px;
    Minimum height for phone: 500px;

Deployment procedures: 
    It is using Parcel for development, but can be run and deployed on a Node server as well using Express. 
    To run this web page, users would clone the files from github onto their preferred coding app. Next, users would navigate to the project directory and install the required dependencies via typing "npm install" in their terminal. 

    As this webpage uses a backend server, users will also need to install : 
    1. npm install express

    When everything required is installed, users are able to type in "npm run dev" into their terminal. They would then be able to run the webpage on the server link : http://localhost:1234 locally. 

    When arriving at the home page, users would see a "add a new note" button where they are able to input their most recent food adventure memory and add it to what is previously listed already. Users would also be able to add and remove accordingly. 

    To push further changes into github, users would go through a few steps in their terminal : 
    1. git add . 
    2. git commit -m "Add in description of changes made so others are able to easily understand and work from there "
    3. git push

Development Process: 
    The development process began with : 
        Project Setup: 
            - Setting up the scss, parcel, and other deployment features. (following week 3 lecture)
            - Creating a header for the page 
        Javascript functionality: 
            - Creating an input form (Via script.js and following the week 6 scrimba)
        HTML: 
            - Creating the structure of the web page and elements including header, footer, nav bars, forms etc. 
            - Created other functions like deleting element, trying to incorporate the image into the page, toggling the form 
        SCSS:   
            - Began to format the elements on the page (scss,css, html)
            - Ensuring the web page is responsive for phone and web
    
        Testing and Debugging:
            - This includes user testing the web page via inputting different data and 
            - Adding in prompts in the script.js file for the webpage to automatically have the data 
            - Debugging was a long process and included a lot of trial and error. In certain scenarios, a restart had to be performed as well. 


Iterations: 
        - When designing this webpage, the first wireframes and mockups were made on figma. 
        - After receiving marks back for A2, Web App Design, a few iterations were made including : 
            - The navigation between each section of the webpage. Intended incorporating a "back to top" button for users to easily navigate back to the top of their page. 
            - Changed font and altered colour scheme a bit. Initially, the font used was hard to read for users, hence it was changed to a much more simpler and bolder font. Colours were darkened slightly, but not too much difference. 
            - The form was changed from being a pop up to a slide out under the button so that it does not block off any of the background information for users that would normally be in a pop up. 

Further improvements / recommendations : 

    When designing the mockup of this prototype, there were many features i intended on having on the site including: categories for users to browse through / ways for them to search and scroll efficiently on the page. However, when actually coding it, i came across a few issues including but not limited to unable to accurately access the right id for the variables of the objet. 

    The most 3 recent adventures is currently static. Due to time and technical problems that came across, i was unable to make sure the code and display the most recent 3, however, this is something i intend on doing in the future. 

    The "All memories section" currently does not display the user inputted data as they are already split into the different categories like picnic, breakfast, lunch etc. I would love to be able to further alter the code so that they are able to view it all at once as well. 

    Would love to have different filters, e.g. "show Vietnamese / Japanese restaurants and have a list of them. 
    
    The image function currently does not display the image. I am unsure why, i did try to search for a function to change the format of the iamge, however that did not work as well. This would be a priority in future improvements. 



Lessons Learnt / Best practices: 

    The first lesson learnt is definitely to have better time management and be patient when coding. Especially when the smallest little unintended changes / mistakes can cause the whole code to not function. 
    However, aside from that, i had developed and enhanced my personal coding skills. Firstly, is using scss. Initially i began coding with css and i remembered learning about scss, when i began using it, i noticed that it would make the code a lot neater, easier and more efficient. It was like iterating through loops / if statements in python/java but for scss. That was very interesting. 
    Working with forms and accessing the backend java server to obtain user input data. I would love to further learn about how i can access this data and certain categories more specifically in the future. 
    Using buttons to show / hide information. I learnt how to use functions to create a button that will show / hide information when clicked. Following the week 3 tutorials, i also felt more confident in coding different functions and even for deleting items in the array. 
    Alongside coding the backend, i learnt a lot more new techniques when coding the css/scss including adding background shadows, background radius, background inset creating depth and how to align things a lot better. 


