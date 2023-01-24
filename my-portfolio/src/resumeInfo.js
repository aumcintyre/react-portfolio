const resumeInfo = {
    "name": "Austin McIntyre",

    "role": "Full-Stack Web Developer",

    "linkedIn": "aumcintyre",

    "roleDescription": "I am excited to be working my way towards a career in web development. I love challenging myself and learning new technologies.",

    "aboutMe1": "    I am currently participating in the Northwestern Coding Bootcamp to supplement my own learning as I pursue my end goal of becoming a full-stack web developer. For the time being, I work as a high school teacher in Chicago, IL. I've been lucky enough to work in the field of education for nearly a decade, but I've decided it's time to make a change. Hopefully, that's where this portfolio comes in.",

    "aboutMe2": "Outside of work, I enjoy most things sports or technology related. I'm a season-ticket holder for the Chicago Cubs, so during the summer if I'm not working or coding, you will typically find me at Wrigley Field. I'm recently married to my college sweetheart, and this career change is another step towards building the life we want. If there is anything else you'd like to know, please don't hesitate to ask!",

    "location": "Chicago, IL",
    // "portfolio": Will use this once the github pages are set

    "education": [
        {
            "school": "Indiana University",
            "major": "Communications (Sports Broadcasting)",
            "gradMonth": "May",
            "gradYear": "2010"
        },
        {
            "school": "Northwestern University",
            "major": "Full-Stack Web Development Boot Camp",
            "gradMonth": "January",
            "gradYear": "2023"
        }
    ],

    "experience": [
        {
            "company": "Intrinsic Schools",
            "role": "Health & PE Teacher",
            "description": "Created and implemented daily games, distributed tests and homework, and gave weekly updates on grades. Worked with students and parents to ensure the highest level of success for each individual.",
            "endMonth": "Current",
            "endYear": "Current",
        },
        {
            "company": "Next College Student Athlete",
            "role": "Recruiting Coordinator",
            "description": "Worked with families to understand their student-athletes strengths and preferences. From there, helped them navigate the college recruiting process, both in terms of academics and athletics.",
            "endMonth": "December",
            "endYear": "2017",
        },
        {
            "company": "Schneider National (STM)",
            "role": "Logistics Sales Account Executive",
            "description": "Make initial contact with customers, introducing Schneider Logistics and our services, while building and maintaining ongoing relationships, increasing business with customers over time.",
            "endMonth": "June",
            "endYear": "2016",
        }
    ],

    "languages": [
        {
            "name": "JavaScript ES6+"
        },
        {
            "name": "CSS3"
        },
        {
            "name": "HTML5"
        },
        {
            "name": "SQL"
        },
        {
            "name": "NoSQL"
        },
    ],

    "applications": [
        {
            "name": "GitHub"
        },
        {
            "name": "MongoDB"
        },
        {
            "name": "MySQL"
        },
    ],

    "projects": [
        {
            "name": "GiftHub",
            "url": "https://p3-gift-hub.herokuapp.com/",
            "image": "images/gifthub.png",
            "description": "GiftHub is an exchange web application with a MongoDB back-end and ReactJS front-end that allows an authenticated user to create “exchanges” and invite others to that exchange. Separately, users can edit their wish lists, adding and deleting which gifts they would like to receive. In an exchange users can see others' wish lists."
        },
        {
            "name": "Virtual Bartender",
            "url": "https://virtual-bartender-1.herokuapp.com/",
            "image": "images/best-men-screenshot.png",
            "description": "The Virtual Bartender is a place where users can come to find their favorite drinks, or try new ones based on their liquor of choice. It allows users to create or save recipes, as well as connect with other users to see their favorites too."
        },
        {
            "name": "Varistas Cafe",
            "url": "https://project1team1.github.io/varistascafe/",
            "image": "images/varistas.png",
            "description": "With the Varistas Cafe app, you will never need help finding a cup of coffee again. Users can explore coffee recipes to make at home, or find a map of their current location with all cafes marked for them. Enjoy the subtle tones of 'cafe music' while you browse!"
        },
        {
            "name": "Note Taker",
            "url": "https://am-note-taker.herokuapp.com/",
            "image": "images/note-taker.png",
            "description": "This application is titled 'Note Taker' and it can be used to write, save, or delete notes. The application is routed on the backend using Express.js. It allows the user to create a list of notes or reminders, and delete those notes once they are complete or no longer useful."
        },
        {
            "name": "Weather Dashboard",
            "url": "https://aumcintyre.github.io/Weather-Dashboard/",
            "image": "images/weather-dashboard-screenshot.png",
            "description": "The weather dashboard allows a user to input any city and receive current and forecasted weather conditions. This could be useful in planning a normal week at home, or a vaction to a new location."
        },
        {
            "name": "Coding Quiz",
            "url": "https://aumcintyre.github.io/Code-Quiz",
            "image": "images/code-quiz-screenshot.png",
            "description": "This coding quiz is designed to new developers easily learn coding terminology. It will prompt users with a start page, a show highscores button, and a timer. Once the start button is clicked, the first question will appear and the timer will add 15 seconds per question and begin counting down. Users must quickly answer questions before the time runs out, but they must also choose carefully. Every incorrect answer given will result in 30 seconds being removed from the timer. For each correct answer, no time is subtracted, and one point is added to the final total. Once the quiz is complete or the timer runs out, the user is presented with a form showing their total score and a box for the user to enter initials. Once intials have been entered, the score + initials will be recorded in local storage and will display on the leaderboard, in descending order."
        },
        {
            "name": "Work Day Scheduler",
            "url": "https://aumcintyre.github.io/Work-Day-Scheduler",
            "image": "images/workday-screenshot.jpg",
            "description": "This page will present the user with the current day and time, and an agenda-view of the working hours in the day. These hour blocks will be presented differently to the user, depending on what time of day the user is interacting with the page. The user will see an editable text box for each hour where they can enter tasks that they would like to complete within that hour of the day. There is a save button to the right of each hour block, and when that is clicked, the user's input will be stored in local storage. This will allow the user to refresh the page without losing their hourly tasks. Hopefully, this allows employees to be more efficient with their time!"
        },
    ],


    "contactLinks": [
        {
            "name": 'linkedin',
            "url": 'https://www.linkedin.com/in/aumcintyre/',
            "className": "fa fa-linkedin fa-2x"

        },
        {
            "name": 'github',
            "url": 'https://www.github.com/aumcintyre/',
            "className": "fa fa-github fa-2x"
        },
    ]
}

export default resumeInfo;