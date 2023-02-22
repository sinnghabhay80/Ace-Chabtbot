// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things", "how are u", "howdy", "how r u"],
  ["i am fine", "i m fine", "fine", "i am good", "i m good", "good"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself",
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  [
    "who is people business partner",
    "people business partner",
    "who is our people business partner",
  ],
  ["how many leaves", "number of leaves", "about leaves", "info about leaves", "leave policy", "leaves"],
  [
    "what is your life insurance policy",
    "life insurance policy",
    "death policy",
  ],
  [
    "what is the procedure for getting help from the it department in case of any technical help",
    "it team help",
    "technical help",
  ],
  [
    "tell me the core values of xebia",
    "core values",
    "values",
    "foundation values of xebia",
    "what are the core values"
  ],
  ["what help can you offer", "help", "help me", "guide me"],
  [
    "tell me something about your ceo",
    "who is our ceo",
    "who is ceo",
    "who is the ceo of xebia",
    "who heads the xebia globally",
  ],
  ["departments of xebia", "domains of xebia", "service lines of xebia", "coe of xebia"],
  ["what is the checkin and checkout process for employees", "how to check in and check out", "check in and check out", "check in procedure", "procedure of check in"],
  ["what are the usage and access policies in xebia"],
  ["what are the core bussiness working hours here", "business hours"],
  [
    "what are the transportation facilities provided for the employees",
    "transport facilities",
    "commute options",
  ],
  ["tell me about the company", "about xebia", "xebia", "company", "tell me about xebia"],
  [
    "working of xebia",
    "what is working roadmap of xebia",
    "working of xebia",
  ],
  [
    "what is the referral policy in xebia",
    "referral policy",
    "how to make a referral",
  ],
  [
    "what are the future scope and plans of the company",
    "future plans",
    "upcoming business strategy",
  ],
  ["what are some of the acquisitions made by xebia?", "acquisitions of xebia"],
  ["what are the principles of xebia", "principles of xebia", "what are principles of xebia", "what r principles of xebia", "principles", "principle"],
  ["can we bring our personal laptop in office", "personal laptop in office", "personal laptop", "owned laptop"],
  ["is there any option of work from home", 
   "work from home", "can we work from home", 
   "is work from home available", "hybrid work", 
   "do we have to stay in office at all times", 
   "hybrid work culture","hybrid work"],
   ["salary information", "ctc information", "what is my ctc", "what is my salary", "salary structure", "what is my salary structure", "explain salary structure", "salary", "ctc"],
   ["can you tell me the details for connecting to the hr department to get in depth information", "connect to hr department", "hr department connect", "talk to hr dept", "connect to hr dept", "hr dept connect", "hr dept", "hr department"],
   ["global presence of xebia", "tell me about the global presence of xebia", "geographic presence of xebia", "where is xebia globally present"],
   ["headquarters of xebia", "where is the headquarters of xebia", "our headquarter", "our headquarters", "location of our headquarters"],
   ["what is the role of hr in company", "role of hr in company", "role of hr", "job of hr"], 
   ["will the company shoulder relocation expenses", "relocation expenses","travelling expenses"], 
   ["i have doubts related onboarding process","onboarding problem", "onboarding process", "onboarding issue", "onboarding issues","onboarding related query"],
   ["what is the total headcount of employees present in xebia", "total headcount", "headcount of employees", "how many employees in xebia", "headcount of xebia", "total no of employees", "total employees"],
   ["what is the canteen service", "tell me about the canteen service", "canteen service", "canteen refreshments"],
   ["how to apply for leaves","how to apply for leave", "applying for leaves", "procedure to apply for leaves", "leave application"],
   ["who is my buddy", "buddy", "my buddy"],
   ["address of gurgaon office","office address","gurgaon office location","office location"],
   ["address of pune office","pune office location","pune office adress"],
   ["address of bengaluru office","bengaluru office location","bengaluru office adress"],
   ["address of hyderabad office","hyderabad office location","hyderabad office adress"],
];

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?",
  ],
  ["Good..", "Nice..", "Good to hear.."],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["We'll get back to you."],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  ["The People's experience team is headed globally by Glory Nelson"],

  ["An employee is applicable for pertaining a single leave per month"],

  [
    "There are 2 types of Life Insurance policies that we offer for our employees.\n \n1. Employee Insurance - covers employees and their spouse and child \n\n2. Family Insurance - covers parents of the employee but either their own or their in-laws and no combinations can be formed. ",
  ],
  [
    "Procedure for getting in touch with IT department if quite simple, in some few easy steps:\n \n1. Open the Xenie app for Android or the Xenie web portal in case IOS/Laptops/Workstations.\n\n2. Login with your Xebia Email address and OTP over email.\n\n3. Go to the ticket section and create a new ticket based on your issue or the help required.\n4. The call will be raised, and a technical expert will be assigned for the task, the expert will connect to you in solving the issue/help required.\n This whole procedure is normally completed in a single working day.",
  ],
  [
    "Xebia is built upon 4 core values: \n\nPeople First, Sharing Knowledge, Customer Intimacy, Quality Without Compromise",
  ],
  [
    "Hello! I can offer help in the following areas: policies, admin, IT, onboarding, payroll, project assignment, manager etc.",
  ],
  [
    "Our current global CEO is Mr. Anand Sahay.",
  ],
  [
    "Here at Xebia, we are organized as follows:\n\nTransformations\nData and AI\nCloud Solutions\nSoftware Technology\nLow Code\nMicrosoft Solutions ",
  ],
  [
    "Our employees are required to check-in every workday on the Zoho people portal for our employees.\n\nWe have 45 hours (about 2 days) per week policy, so you must work 9 hour per day in office  ",
  ],
  [
    "we have some restrictions here on use of the internet, you cant use xebia intranet or Wi-Fi on your phones.\n there are restrictions on using social media and unlicensed unauthorized software without due permission from the IT team. ",
  ],
  ["10 A.M. to 4 P.M"],
  [
    "Employees are provided with a transportation facility from the office building to the nearest rapid metro station I.e., Sector 55-56 rapid metro station.\n\nOther than that, if in case a female employee must stay in office for meeting project deadline or any other work-related issue, she can contact the admin office for arranging a form a transportation to safely reach their home. ",
  ],
  [
    "Founded in 2001, Xebia was the first organization to embrace the Agile way of working, with gurus like Jeff Sutherland. Since then, we have grown from a Java company into a full-service digital consulting company working on a worldwide ambition. ",
  ],
  [
    "We are organized in complementary chapters\n\n teams with a tremendous amount of knowledge and experience within a particular field, such as Agile, DevOps, Data and AI, Cloud, Software Technology, Low Code, and Microsoft.\n\n We help the world’s top 250 companies and category leaders overcome digital challenges, embrace innovation, adopt new technology, and implement new business models. In addition to high-quality consulting, we also provide offshoring and nearshoring services ",
  ],
  [
    " An Xebian can start referring talented individuals into Xebia as soon as the employee is at the position of a Junior Consultant and based on the position for which the referral was for the employee will be given a referral bonus between 10K to 75K in partly payments, first at the joining of the referred employee and secondly when the employee completes 6 months in the organization. ",
  ],
  [
    "To acquire more companies in the US, UK and Continental Europe. Expand our working expertise and domain knowledge by joining hands and opening offices in the middle East, Australia etc. To make the company a billion-dollar company in the upcoming years. ",
  ],
  [
    "Netlink Digital Solutions, 47 Degrees, Appcino Technologies, SwissQ Consulting AG, coMakeIT, GoData Driven ",
  ],
  [ "Xebia is built upon 4 principles : \n\nResponsibility, Entrepreneurship and Innovation, Sense of Urgency, Results",],
  ["No, you can't use your personal laptops in the office."],
  ["It usually depends on the client/project you are working on and/or your manager."],
  ["This is confidential information and cannot be shared with the people normally. Please contact your recruitment manager or you People Business Partner for extended information."],
  ["You can refer to the Zoho people portal and get information about connecting to the people of respective departments."],
  ["Our global presence is spread across but not limited to USA, Asia Pacific region, India, Middle East Region and we are continuously working towards increasing our global presence to an even more diverse region to increase our global standing point."],
  ["Our headquarters is now shifted from Hilversum (the Netherlands) to Atlanta(US), which is currently being built, as we look forward to getting NASDAQ listed."],
  ["The human resource includes the people who constitute the workplace of a company or organization. In the corporate world, the roles and responsibility of HR is recruitment, training, administering, and developing company policies. The department of human resources in a company focuses on the most crucial asset of the company- its employees and will manage and shadow the employee life-cycle."],
  ["Yes, Company will shoulder expenses as per the submitted bills"],
  ["I am sorry i don't have enough information related to onboarding process, but you can connect with following people for your queries \n XYZ@xebia.com \n ytt@xebia.com"],
  ["The present headcount of employees in Xebia is 5600+ and counting. We always aspire to recruit the most talented individuals to our large collective global team."],
  ["We provide snacks and refreshments for employees in canteen for free and people can also bring their own lunch and eat in the canteen space as well."],
  ["• Log in to the ZOHO portal\n• Navigate to the 'Apply Leave' section\n• Fill in the leave related details and submit\n\nYou should also inform your reporting manager in advance."],
  ["Suhani Sharma"],
  ["4th Floor, Capital Cyberscape, Golf Course Ext Rd, Sector 59, Gurugram, Haryana 122005, India"],
  ["Sky Belvedere, Ground floor, Mhada Colony, Viman Nagar, Pune, Maharashtra 411006, India"],
  ["6th Floor, The HIVE Workspaces, VR Bengaluru, ITPL Main Rd, Devasandra Industrial Estate, Bengaluru, Karnataka 560048"],
  ["Aurobindo Galaxy, 9th Floor (A - Wing), HiTech City Main Road TSIIC, Raidurg Panmaktha, Hyderabad, Telangana 500081"],
];

// Random for any other user input

const alternative = [
  "Try again",
  "I don't understand :/",
  "We'll get back to you.."
];

// Whatever else you want :)

const coronavirus = [
  "Please stay home",
  "Wear a mask",
  "Fortunately, I don't have COVID",
  "These are uncertain times",
];
