"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  {
    category: "ICT",
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Print Unit",
      "Control Program Unit",
    ],
    answer: "Central Processing Unit",
    explanation:
      "CPU means Central Processing Unit. It is called the brain of the computer because it processes instructions and controls the main operations of the system.",
    wrongExplanations: {
      "Computer Power Unit":
        "Wrong. CPU is not related to power supply. Power is supplied by SMPS or battery, not CPU.",
      "Central Print Unit":
        "Wrong. Printing is related to printer devices, not the CPU.",
      "Control Program Unit":
        "Wrong. It sounds technical, but it is not the correct expansion of CPU.",
    },
    hint: "Use elimination. Remove options that sound unrelated to computer processing.",
  },
  {
  category: "ICT",
  question: "What does RAM stand for?",
  options: [
    "Random Access Memory",
    "Read Access Memory",
    "Rapid Access Machine",
    "Random Application Memory"
  ],
  answer: "Random Access Memory",
  explanation:
    "RAM stands for Random Access Memory and is used for temporary storage while a computer is running.",
  wrongExplanations: {
    "Read Access Memory": "This is not the correct expansion of RAM.",
    "Rapid Access Machine": "This is not a computer term.",
    "Random Application Memory": "This is an incorrect expansion."
  },
  hint:
    "RAM is the main temporary memory of a computer."
},

{
  category: "ICT",
  question: "Which of the following is an operating system?",
  options: [
    "Windows",
    "Google",
    "Intel",
    "Oracle"
  ],
  answer: "Windows",
  explanation:
    "Windows is an operating system developed by Microsoft.",
  wrongExplanations: {
    "Google": "Google is primarily a technology company and search engine.",
    "Intel": "Intel manufactures processors and chips.",
    "Oracle": "Oracle is mainly known for database software."
  },
  hint:
    "Think of software that manages a computer."
},

{
  category: "ICT",
  question: "What does URL stand for?",
  options: [
    "Uniform Resource Locator",
    "Universal Resource Link",
    "Uniform Record Locator",
    "Universal Record Link"
  ],
  answer: "Uniform Resource Locator",
  explanation:
    "A URL is the address used to locate a resource on the internet.",
  wrongExplanations: {
    "Universal Resource Link": "Incorrect expansion.",
    "Uniform Record Locator": "Incorrect expansion.",
    "Universal Record Link": "Incorrect expansion."
  },
  hint:
    "It is the web address of a page."
},

{
  category: "ICT",
  question: "Which device is used to print documents on paper?",
  options: [
    "Monitor",
    "Scanner",
    "Printer",
    "Keyboard"
  ],
  answer: "Printer",
  explanation:
    "A printer produces a hard copy of digital documents.",
  wrongExplanations: {
    "Monitor": "A monitor displays information on screen.",
    "Scanner": "A scanner converts physical documents into digital form.",
    "Keyboard": "A keyboard is used for input."
  },
  hint:
    "Think of hard copy output."
},

{
  category: "ICT",
  question: "Which company developed the Android operating system?",
  options: [
    "Apple",
    "Google",
    "Microsoft",
    "IBM"
  ],
  answer: "Google",
  explanation:
    "Android is developed and maintained by Google.",
  wrongExplanations: {
    "Apple": "Apple develops iOS, not Android.",
    "Microsoft": "Microsoft developed Windows Phone.",
    "IBM": "IBM is not the developer of Android."
  },
  hint:
    "Think of the company behind Gmail and YouTube."
},
  {
  category: "ICT",
  question: "What does RAM stand for?",
  options: [
    "Random Access Memory",
    "Read Access Memory",
    "Rapid Access Memory",
    "Run Access Memory"
  ],
  answer: "Random Access Memory",
  explanation:
    "RAM is the temporary memory used by a computer to store data and programs currently in use.",
  wrongExplanations: {
    "Read Access Memory": "Incorrect expansion.",
    "Rapid Access Memory": "Incorrect expansion.",
    "Run Access Memory": "Incorrect expansion."
  },
  hint:
    "Temporary working memory."
},

{
  category: "ICT",
  question: "Which of the following is an operating system?",
  options: [
    "Microsoft Word",
    "Windows 11",
    "Google Chrome",
    "Adobe Photoshop"
  ],
  answer: "Windows 11",
  explanation:
    "Windows 11 is an operating system that manages computer hardware and software resources.",
  wrongExplanations: {
    "Microsoft Word": "Word processing software.",
    "Google Chrome": "Web browser.",
    "Adobe Photoshop": "Image editing software."
  },
  hint:
    "Runs the computer."
},

{
  category: "ICT",
  question: "Which protocol is primarily used for browsing websites?",
  options: [
    "FTP",
    "HTTP",
    "SMTP",
    "POP3"
  ],
  answer: "HTTP",
  explanation:
    "HTTP (HyperText Transfer Protocol) is used to transfer web pages between browsers and web servers.",
  wrongExplanations: {
    "FTP": "Used for file transfer.",
    "SMTP": "Used for sending emails.",
    "POP3": "Used for receiving emails."
  },
  hint:
    "Begins most website addresses."
},

{
  category: "ICT",
  question: "What is the full form of URL?",
  options: [
    "Uniform Resource Locator",
    "Universal Resource Link",
    "Uniform Reference Link",
    "Universal Reference Locator"
  ],
  answer: "Uniform Resource Locator",
  explanation:
    "A URL is the address used to locate resources on the internet.",
  wrongExplanations: {
    "Universal Resource Link": "Incorrect expansion.",
    "Uniform Reference Link": "Incorrect expansion.",
    "Universal Reference Locator": "Incorrect expansion."
  },
  hint:
    "Website address."
},

{
  category: "ICT",
  question: "Which of the following storage devices generally has the largest capacity?",
  options: [
    "CD",
    "DVD",
    "Blu-ray Disc",
    "Floppy Disk"
  ],
  answer: "Blu-ray Disc",
  explanation:
    "Blu-ray discs can store significantly more data than CDs and DVDs.",
  wrongExplanations: {
    "CD": "Stores about 700 MB.",
    "DVD": "Stores about 4.7 GB.",
    "Floppy Disk": "Very small storage capacity."
  },
  hint:
    "Often used for HD video storage."
},
{
  category: "ICT",
  question: "What does ROM stand for?",
  options: [
    "Read Only Memory",
    "Random Only Memory",
    "Read Open Memory",
    "Run Only Memory"
  ],
  answer: "Read Only Memory",
  explanation:
    "ROM is non-volatile memory that stores permanent instructions used by a computer.",
  wrongExplanations: {
    "Random Only Memory": "Incorrect expansion.",
    "Read Open Memory": "Incorrect expansion.",
    "Run Only Memory": "Incorrect expansion."
  },
  hint:
    "Permanent memory."
},

{
  category: "ICT",
  question: "Which of the following is an example of application software?",
  options: [
    "Windows",
    "Linux",
    "Microsoft Excel",
    "Android"
  ],
  answer: "Microsoft Excel",
  explanation:
    "Microsoft Excel is application software used for spreadsheets and data analysis.",
  wrongExplanations: {
    "Windows": "Operating system.",
    "Linux": "Operating system.",
    "Android": "Mobile operating system."
  },
  hint:
    "Spreadsheet software."
},

{
  category: "ICT",
  question: "Which key combination is commonly used to copy selected text?",
  options: [
    "Ctrl + X",
    "Ctrl + C",
    "Ctrl + V",
    "Ctrl + Z"
  ],
  answer: "Ctrl + C",
  explanation:
    "Ctrl + C is the standard keyboard shortcut for copying selected content.",
  wrongExplanations: {
    "Ctrl + X": "Cuts selected content.",
    "Ctrl + V": "Pastes content.",
    "Ctrl + Z": "Undo command."
  },
  hint:
    "Copy command."
},

{
  category: "ICT",
  question: "What is the primary function of a web browser?",
  options: [
    "Create documents",
    "Browse websites",
    "Edit images",
    "Manage hardware"
  ],
  answer: "Browse websites",
  explanation:
    "A web browser allows users to access and view websites on the internet.",
  wrongExplanations: {
    "Create documents": "Done by word processors.",
    "Edit images": "Done by graphics software.",
    "Manage hardware": "Done by operating systems."
  },
  hint:
    "Chrome, Firefox and Safari."
},

{
  category: "ICT",
  question: "Which of the following is a search engine?",
  options: [
    "Google",
    "Windows",
    "Excel",
    "WhatsApp"
  ],
  answer: "Google",
  explanation:
    "Google is a search engine used to find information on the internet.",
  wrongExplanations: {
    "Windows": "Operating system.",
    "Excel": "Spreadsheet software.",
    "WhatsApp": "Messaging application."
  },
  hint:
    "Most used search engine in the world."
},
{
  category: "ICT",
  question: "Which of the following is an example of cloud storage?",
  options: [
    "Google Drive",
    "Microsoft Word",
    "Paint",
    "Notepad"
  ],
  answer: "Google Drive",
  explanation:
    "Google Drive is a cloud storage service that allows users to store files online.",
  wrongExplanations: {
    "Microsoft Word": "Word processing software.",
    "Paint": "Drawing application.",
    "Notepad": "Text editor."
  },
  hint:
    "Stores files online."
},

{
  category: "ICT",
  question: "What does PDF stand for?",
  options: [
    "Portable Document Format",
    "Personal Document File",
    "Printable Data Format",
    "Program Document Format"
  ],
  answer: "Portable Document Format",
  explanation:
    "PDF is a file format developed for sharing documents across different systems.",
  wrongExplanations: {
    "Personal Document File": "Incorrect expansion.",
    "Printable Data Format": "Incorrect expansion.",
    "Program Document Format": "Incorrect expansion."
  },
  hint:
    "Common document-sharing format."
},

{
  category: "ICT",
  question: "Which of the following is used to protect a computer from malicious software?",
  options: [
    "Antivirus",
    "Calculator",
    "Media Player",
    "Paint"
  ],
  answer: "Antivirus",
  explanation:
    "Antivirus software helps detect, prevent and remove malware.",
  wrongExplanations: {
    "Calculator": "Performs calculations.",
    "Media Player": "Plays media files.",
    "Paint": "Used for drawing."
  },
  hint:
    "Cybersecurity software."
},

{
  category: "ICT",
  question: "What is phishing?",
  options: [
    "A fishing technique",
    "A cyber attack to steal information",
    "A type of computer hardware",
    "A programming language"
  ],
  answer: "A cyber attack to steal information",
  explanation:
    "Phishing tricks users into revealing passwords, OTPs and sensitive information.",
  wrongExplanations: {
    "A fishing technique": "Not related to cybersecurity.",
    "A type of computer hardware": "Incorrect.",
    "A programming language": "Incorrect."
  },
  hint:
    "Fake emails and fake websites."
},

{
  category: "ICT",
  question: "Which keyboard shortcut is commonly used to undo an action?",
  options: [
    "Ctrl + C",
    "Ctrl + V",
    "Ctrl + Z",
    "Ctrl + X"
  ],
  answer: "Ctrl + Z",
  explanation:
    "Ctrl + Z reverses the most recent action in most software applications.",
  wrongExplanations: {
    "Ctrl + C": "Copy.",
    "Ctrl + V": "Paste.",
    "Ctrl + X": "Cut."
  },
  hint:
    "Mistake recovery shortcut."
},
{
  category: "Reasoning",
  question: "If A = 1, B = 2, C = 3, then CAT = ?",
  options: [
    "24",
    "26",
    "23",
    "22"
  ],
  answer: "24",
  explanation:
    "C = 3, A = 1 and T = 20. Therefore 3 + 1 + 20 = 24.",
  wrongExplanations: {
    "26": "Incorrect addition.",
    "23": "One of the letter values has been counted incorrectly.",
    "22": "The total is too low."
  },
  hint:
    "Replace each letter with its alphabetical position."
},
{
  category: "ICT",
  question: "Which file extension is commonly used for Microsoft Word documents?",
  options: ["PDF", "DOCX", "JPG", "MP3"],
  answer: "DOCX",
  explanation:
    "DOCX is the common file extension for modern Microsoft Word documents.",
  wrongExplanations: {
    PDF: "PDF is used for portable document files.",
    JPG: "JPG is an image file format.",
    MP3: "MP3 is an audio file format."
  },
  hint: "Think of Word documents."
},

{
  category: "ICT",
  question: "Which of the following is an example of an email service?",
  options: ["Gmail", "Photoshop", "Excel", "VLC Player"],
  answer: "Gmail",
  explanation:
    "Gmail is an email service provided by Google.",
  wrongExplanations: {
    Photoshop: "Photoshop is image editing software.",
    Excel: "Excel is spreadsheet software.",
    "VLC Player": "VLC is a media player."
  },
  hint: "Used to send and receive emails."
},

{
  category: "ICT",
  question: "What does OTP stand for?",
  options: [
    "One Time Password",
    "Online Transfer Process",
    "Open Text Program",
    "Official Transaction Page"
  ],
  answer: "One Time Password",
  explanation:
    "OTP stands for One Time Password and is used for authentication and security verification.",
  wrongExplanations: {
    "Online Transfer Process": "Incorrect expansion.",
    "Open Text Program": "Incorrect expansion.",
    "Official Transaction Page": "Incorrect expansion."
  },
  hint: "Used during login or payment verification."
},

{
  category: "ICT",
  question: "Which of the following is a strong password?",
  options: [
    "123456",
    "password",
    "Alex1994",
    "Mizo@2026#Safe"
  ],
  answer: "Mizo@2026#Safe",
  explanation:
    "A strong password uses a mix of uppercase letters, lowercase letters, numbers and special characters.",
  wrongExplanations: {
    "123456": "Very weak and easy to guess.",
    password: "Very common and unsafe.",
    Alex1994: "Contains a name and year, making it easier to guess."
  },
  hint: "Look for length and mixed characters."
},

{
  category: "ICT",
  question: "Which technology is commonly used for short-range wireless connection between devices?",
  options: ["Bluetooth", "HTML", "HTTP", "PDF"],
  answer: "Bluetooth",
  explanation:
    "Bluetooth is used for short-range wireless communication between devices such as phones, speakers and headphones.",
  wrongExplanations: {
    HTML: "HTML is used to create web pages.",
    HTTP: "HTTP is used for web communication.",
    PDF: "PDF is a document format."
  },
  hint: "Used with wireless earphones."
},
{
  category: "Reasoning",
  question: "Find the odd one out.",
  options: [
    "Apple",
    "Mango",
    "Banana",
    "Carrot"
  ],
  answer: "Carrot",
  explanation:
    "Apple, Mango and Banana are fruits, while Carrot is a vegetable.",
  wrongExplanations: {
    "Apple": "Apple belongs to the fruit group.",
    "Mango": "Mango belongs to the fruit group.",
    "Banana": "Banana belongs to the fruit group."
  },
  hint:
    "Look for the item that belongs to a different category."
},

{
  category: "Reasoning",
  question: "Complete the series: 2, 4, 8, 16, ?",
  options: [
    "20",
    "24",
    "32",
    "36"
  ],
  answer: "32",
  explanation:
    "Each number is multiplied by 2. Therefore 16 × 2 = 32.",
  wrongExplanations: {
    "20": "The pattern is doubling, not adding.",
    "24": "The sequence does not increase by a fixed difference.",
    "36": "This does not follow the doubling pattern."
  },
  hint:
    "Check whether the numbers are being multiplied."
},

{
  category: "Reasoning",
  question: "If SOUTH is written as HTUOS, then EAST is written as:",
  options: [
    "TSAE",
    "SAET",
    "EAST",
    "AEST"
  ],
  answer: "TSAE",
  explanation:
    "The word is written in reverse order.",
  wrongExplanations: {
    "SAET": "The order is incorrect.",
    "EAST": "The word has not been reversed.",
    "AEST": "Letters are not fully reversed."
  },
  hint:
    "Look at the position of the first and last letters."
},

{
  category: "Reasoning",
  question: "A clock shows 3:00. What is the angle between the hour hand and minute hand?",
  options: [
    "90°",
    "60°",
    "45°",
    "120°"
  ],
  answer: "90°",
  explanation:
    "At 3:00 the minute hand is at 12 and the hour hand is at 3, forming a right angle.",
  wrongExplanations: {
    "60°": "Too small.",
    "45°": "This is not the angle at 3:00.",
    "120°": "Too large."
  },
  hint:
    "Think of a right angle."
},
{
  category: "Reasoning",
  question: "Find the next number: 3, 6, 12, 24, ?",
  options: [
    "36",
    "42",
    "48",
    "54"
  ],
  answer: "48",
  explanation:
    "Each number is multiplied by 2. Therefore 24 × 2 = 48.",
  wrongExplanations: {
    "36": "Pattern is doubling.",
    "42": "Pattern is doubling.",
    "54": "Pattern is doubling."
  },
  hint:
    "Multiply by 2."
},

{
  category: "Reasoning",
  question: "If BOOK is coded as CPPL, then PEN is coded as:",
  options: [
    "QFO",
    "QEN",
    "PEO",
    "RFO"
  ],
  answer: "QFO",
  explanation:
    "Each letter is shifted one step forward: P→Q, E→F, N→O.",
  wrongExplanations: {
    "QEN": "E was not shifted.",
    "PEO": "Incorrect pattern.",
    "RFO": "P was shifted twice."
  },
  hint:
    "Move every letter +1."
},

{
  category: "Reasoning",
  question: "Odd one out:",
  options: [
    "Triangle",
    "Square",
    "Rectangle",
    "Circle"
  ],
  answer: "Circle",
  explanation:
    "Triangle, square and rectangle have sides and angles, while a circle does not.",
  wrongExplanations: {
    "Triangle": "Polygon.",
    "Square": "Polygon.",
    "Rectangle": "Polygon."
  },
  hint:
    "One shape has no sides."
},

{
  category: "Reasoning",
  question: "If all Roses are Flowers and some Flowers are Red, then:",
  options: [
    "All Roses are Red",
    "Some Roses are Red",
    "No Rose is Red",
    "Cannot be determined"
  ],
  answer: "Cannot be determined",
  explanation:
    "The statement does not provide enough information to conclude whether any roses are red.",
  wrongExplanations: {
    "All Roses are Red": "Not supported.",
    "Some Roses are Red": "Not guaranteed.",
    "No Rose is Red": "Not supported."
  },
  hint:
    "Beware of assumptions."
},

{
  category: "Reasoning",
  question: "Find the missing number: 2, 5, 10, 17, 26, ?",
  options: [
    "35",
    "37",
    "40",
    "45"
  ],
  answer: "37",
  explanation:
    "Pattern: +3, +5, +7, +9, +11. Therefore 26 + 11 = 37.",
  wrongExplanations: {
    "35": "Pattern does not fit.",
    "40": "Too large.",
    "45": "Incorrect sequence."
  },
  hint:
    "Consecutive odd-number additions."
},
{
  category: "Reasoning",
  question: "Find the next number: 5, 10, 20, 40, ?",
  options: [
    "60",
    "70",
    "80",
    "90"
  ],
  answer: "80",
  explanation:
    "Each number is multiplied by 2. Therefore 40 × 2 = 80.",
  wrongExplanations: {
    "60": "The pattern is not adding 20.",
    "70": "Does not follow the doubling pattern.",
    "90": "Too high for the pattern."
  },
  hint:
    "Check multiplication, not addition."
},

{
  category: "Reasoning",
  question: "If A = 1, B = 2, C = 3, then DOG = ?",
  options: [
    "24",
    "26",
    "28",
    "30"
  ],
  answer: "26",
  explanation:
    "D = 4, O = 15 and G = 7. Therefore 4 + 15 + 7 = 26.",
  wrongExplanations: {
    "24": "Incorrect addition.",
    "28": "Too high.",
    "30": "Does not match the letter values."
  },
  hint:
    "Use alphabetical positions."
},

{
  category: "Reasoning",
  question: "Complete the analogy: Hand : Glove :: Foot : ?",
  options: [
    "Cap",
    "Sock",
    "Shirt",
    "Belt"
  ],
  answer: "Sock",
  explanation:
    "A glove is worn on the hand, and a sock is worn on the foot.",
  wrongExplanations: {
    "Cap": "Worn on the head.",
    "Shirt": "Worn on the body.",
    "Belt": "Worn around the waist."
  },
  hint:
    "Think clothing worn on the body part."
},

{
  category: "Reasoning",
  question: "Find the odd one out.",
  options: [
    "January",
    "March",
    "May",
    "Monday"
  ],
  answer: "Monday",
  explanation:
    "January, March and May are months, while Monday is a day of the week.",
  wrongExplanations: {
    "January": "A month.",
    "March": "A month.",
    "May": "A month."
  },
  hint:
    "Three belong to the same time category."
},

{
  category: "Reasoning",
  question: "If 12 + 8 = 20, 15 + 5 = 20, then 9 + 11 = ?",
  options: [
    "18",
    "19",
    "20",
    "21"
  ],
  answer: "20",
  explanation:
    "This is simple addition. 9 + 11 = 20.",
  wrongExplanations: {
    "18": "Incorrect addition.",
    "19": "Incorrect addition.",
    "21": "Incorrect addition."
  },
  hint:
    "Do not overthink the pattern."
},
{
  category: "Public Administration",
  question: "Who is known as the Father of Public Administration?",
  options: [
    "Woodrow Wilson",
    "Max Weber",
    "Herbert Simon",
    "Luther Gulick"
  ],
  answer: "Woodrow Wilson",
  explanation:
    "Woodrow Wilson is regarded as the Father of Public Administration because of his 1887 essay 'The Study of Administration'.",
  wrongExplanations: {
    "Max Weber": "Weber is famous for Bureaucratic Theory.",
    "Herbert Simon": "Simon is known for Decision-Making Theory.",
    "Luther Gulick": "Gulick is known for POSDCORB."
  },
  hint:
    "Think of the 1887 administration essay."
},

{
  category: "Public Administration",
  question: "Who proposed the concept of POSDCORB?",
  options: [
    "Max Weber",
    "Luther Gulick",
    "Woodrow Wilson",
    "Elton Mayo"
  ],
  answer: "Luther Gulick",
  explanation:
    "Luther Gulick developed POSDCORB to describe the functions of administration.",
  wrongExplanations: {
    "Max Weber": "Weber is associated with bureaucracy.",
    "Woodrow Wilson": "Wilson founded the discipline but not POSDCORB.",
    "Elton Mayo": "Mayo is known for the Hawthorne Studies."
  },
  hint:
    "POSDCORB = Gulick."
},

{
  category: "Public Administration",
  question: "What does the letter 'P' in POSDCORB stand for?",
  options: [
    "Planning",
    "Policy",
    "Personnel",
    "Procedure"
  ],
  answer: "Planning",
  explanation:
    "Planning is the first administrative function in POSDCORB.",
  wrongExplanations: {
    "Policy": "Policy is important but not part of POSDCORB.",
    "Personnel": "Personnel is not represented by P.",
    "Procedure": "Procedure is not the correct answer."
  },
  hint:
    "The first step in administration."
},
{
  category: "Public Administration",
  question: "Who is regarded as the Father of Public Administration?",
  options: [
    "Woodrow Wilson",
    "Max Weber",
    "Herbert Simon",
    "Luther Gulick"
  ],
  answer: "Woodrow Wilson",
  explanation:
    "Woodrow Wilson is regarded as the Father of Public Administration due to his 1887 essay on administration.",
  wrongExplanations: {
    "Max Weber": "Known for Bureaucratic Theory.",
    "Herbert Simon": "Known for Decision-Making Theory.",
    "Luther Gulick": "Known for POSDCORB."
  },
  hint:
    "1887 essay."
},

{
  category: "Public Administration",
  question: "What does the 'P' in POSDCORB stand for?",
  options: [
    "Personnel",
    "Planning",
    "Policy",
    "Procedure"
  ],
  answer: "Planning",
  explanation:
    "POSDCORB begins with Planning, followed by Organizing and Staffing.",
  wrongExplanations: {
    "Personnel": "Not part of the acronym.",
    "Policy": "Not part of the acronym.",
    "Procedure": "Not part of the acronym."
  },
  hint:
    "First managerial function."
},

{
  category: "Public Administration",
  question: "Which theory emphasizes hierarchy and formal rules?",
  options: [
    "Human Relations Theory",
    "Bureaucratic Theory",
    "Systems Theory",
    "Decision Theory"
  ],
  answer: "Bureaucratic Theory",
  explanation:
    "Max Weber's Bureaucratic Theory emphasizes hierarchy, rules and specialization.",
  wrongExplanations: {
    "Human Relations Theory": "Focuses on people and motivation.",
    "Systems Theory": "Focuses on interrelated parts.",
    "Decision Theory": "Focuses on administrative decisions."
  },
  hint:
    "Max Weber."
},

{
  category: "Public Administration",
  question: "Which concept is associated with Herbert Simon?",
  options: [
    "POSDCORB",
    "Scientific Management",
    "Bounded Rationality",
    "Bureaucracy"
  ],
  answer: "Bounded Rationality",
  explanation:
    "Herbert Simon argued that decision-makers operate under conditions of bounded rationality.",
  wrongExplanations: {
    "POSDCORB": "Associated with Gulick.",
    "Scientific Management": "Associated with Taylor.",
    "Bureaucracy": "Associated with Weber."
  },
  hint:
    "Decision-making limitations."
},

{
  category: "Public Administration",
  question: "E-Governance primarily aims to:",
  options: [
    "Increase paperwork",
    "Reduce transparency",
    "Improve public service delivery",
    "Reduce technology use"
  ],
  answer: "Improve public service delivery",
  explanation:
    "E-Governance uses ICT to improve efficiency, transparency and citizen services.",
  wrongExplanations: {
    "Increase paperwork": "It reduces paperwork.",
    "Reduce transparency": "It increases transparency.",
    "Reduce technology use": "It promotes technology use."
  },
  hint:
    "Digital administration."
},
{
  category: "Political Science",
  question: "Who wrote the book 'The Republic'?",
  options: [
    "Aristotle",
    "Plato",
    "Socrates",
    "Rousseau"
  ],
  answer: "Plato",
  explanation:
    "Plato wrote The Republic, one of the most influential works in political philosophy.",
  wrongExplanations: {
    "Aristotle": "Aristotle wrote Politics.",
    "Socrates": "Socrates did not write books.",
    "Rousseau": "Rousseau wrote The Social Contract."
  },
  hint:
    "Think of Plato's ideal state."
},

{
  category: "Political Science",
  question: "Who is known as the Father of Political Science?",
  options: [
    "Plato",
    "Aristotle",
    "Machiavelli",
    "Locke"
  ],
  answer: "Aristotle",
  explanation:
    "Aristotle is known as the Father of Political Science because of his systematic study of politics and government.",
  wrongExplanations: {
    "Plato": "Plato was Aristotle's teacher.",
    "Machiavelli": "Machiavelli is associated with modern political thought.",
    "Locke": "Locke is known for liberalism."
  },
  hint:
    "Think of the scholar who classified constitutions."
},

{
  category: "Political Science",
  question: "Who wrote 'The Social Contract'?",
  options: [
    "John Locke",
    "Thomas Hobbes",
    "Jean-Jacques Rousseau",
    "Karl Marx"
  ],
  answer: "Jean-Jacques Rousseau",
  explanation:
    "Rousseau wrote The Social Contract in 1762 and introduced the concept of the General Will.",
  wrongExplanations: {
    "John Locke": "Locke wrote Two Treatises of Government.",
    "Thomas Hobbes": "Hobbes wrote Leviathan.",
    "Karl Marx": "Marx wrote The Communist Manifesto with Engels."
  },
  hint:
    "General Will = Rousseau."
},

{
  category: "Political Science",
  question: "Who wrote 'Leviathan'?",
  options: [
    "Thomas Hobbes",
    "John Locke",
    "Rousseau",
    "Bentham"
  ],
  answer: "Thomas Hobbes",
  explanation:
    "Thomas Hobbes wrote Leviathan in 1651 and argued for a strong sovereign authority.",
  wrongExplanations: {
    "John Locke": "Locke advocated limited government.",
    "Rousseau": "Rousseau wrote The Social Contract.",
    "Bentham": "Bentham is associated with Utilitarianism."
  },
  hint:
    "State of Nature and absolute sovereign."
},

{
  category: "Political Science",
  question: "Who developed the theory of Utilitarianism?",
  options: [
    "Karl Marx",
    "Jeremy Bentham",
    "Hegel",
    "Locke"
  ],
  answer: "Jeremy Bentham",
  explanation:
    "Jeremy Bentham developed Utilitarianism based on the principle of the greatest happiness of the greatest number.",
  wrongExplanations: {
    "Karl Marx": "Marx developed historical materialism.",
    "Hegel": "Hegel is associated with dialectics.",
    "Locke": "Locke is associated with liberalism and natural rights."
  },
  hint:
    "Greatest happiness principle."
},
{
  category: "Economics",
  question: "Which bank is known as the Central Bank of India?",
  options: [
    "State Bank of India",
    "Punjab National Bank",
    "Reserve Bank of India",
    "Bank of Baroda"
  ],
  answer: "Reserve Bank of India",
  explanation:
    "The Reserve Bank of India (RBI) is India's central banking institution.",
  wrongExplanations: {
    "State Bank of India": "SBI is the largest commercial bank, not the central bank.",
    "Punjab National Bank": "PNB is a public sector bank.",
    "Bank of Baroda": "Bank of Baroda is a commercial bank."
  },
  hint:
    "Issues currency and controls monetary policy."
},

{
  category: "Economics",
  question: "What does GST stand for?",
  options: [
    "General Sales Tax",
    "Goods and Services Tax",
    "Government Service Tax",
    "Goods Supply Tax"
  ],
  answer: "Goods and Services Tax",
  explanation:
    "GST is a unified indirect tax system introduced in India in 2017.",
  wrongExplanations: {
    "General Sales Tax": "Incorrect expansion.",
    "Government Service Tax": "Incorrect expansion.",
    "Goods Supply Tax": "Incorrect expansion."
  },
  hint:
    "A major tax reform in India."
},

{
  category: "Economics",
  question: "Which factor of production receives wages?",
  options: [
    "Land",
    "Labour",
    "Capital",
    "Entrepreneur"
  ],
  answer: "Labour",
  explanation:
    "Labour receives wages as a reward for its contribution to production.",
  wrongExplanations: {
    "Land": "Land receives rent.",
    "Capital": "Capital receives interest.",
    "Entrepreneur": "Entrepreneur receives profit."
  },
  hint:
    "Human effort in production."
},

{
  category: "Economics",
  question: "What is the basic economic problem faced by all societies?",
  options: [
    "Inflation",
    "Scarcity",
    "Taxation",
    "Population"
  ],
  answer: "Scarcity",
  explanation:
    "Resources are limited while human wants are unlimited, creating scarcity.",
  wrongExplanations: {
    "Inflation": "Not every society constantly faces inflation.",
    "Taxation": "Taxation is a policy issue.",
    "Population": "Population itself is not the basic economic problem."
  },
  hint:
    "Unlimited wants, limited resources."
},

{
  category: "Economics",
  question: "Which economic sector includes banking, education and healthcare?",
  options: [
    "Primary Sector",
    "Secondary Sector",
    "Tertiary Sector",
    "Agricultural Sector"
  ],
  answer: "Tertiary Sector",
  explanation:
    "The tertiary sector consists of services such as banking, education, transport and healthcare.",
  wrongExplanations: {
    "Primary Sector": "Primary sector involves extraction of natural resources.",
    "Secondary Sector": "Secondary sector involves manufacturing.",
    "Agricultural Sector": "Agriculture belongs to the primary sector."
  },
  hint:
    "Service sector."
},
{
  category: "Education",
  question: "Who is known as the Father of Modern Education?",
  options: [
    "John Dewey",
    "Jean-Jacques Rousseau",
    "Johann Heinrich Pestalozzi",
    "Plato"
  ],
  answer: "Johann Heinrich Pestalozzi",
  explanation:
    "Pestalozzi is often regarded as the Father of Modern Education due to his child-centered approach.",
  wrongExplanations: {
    "John Dewey": "Dewey is associated with Pragmatism.",
    "Jean-Jacques Rousseau": "Rousseau influenced educational thought but is not given this title.",
    "Plato": "Plato discussed education in The Republic."
  },
  hint:
    "Think of child-centered education."
},

{
  category: "Education",
  question: "Who is associated with the philosophy of Pragmatism?",
  options: [
    "Plato",
    "John Dewey",
    "Aristotle",
    "Rousseau"
  ],
  answer: "John Dewey",
  explanation:
    "John Dewey is the leading advocate of Pragmatism in education.",
  wrongExplanations: {
    "Plato": "Plato is associated with Idealism.",
    "Aristotle": "Aristotle emphasized observation and logic.",
    "Rousseau": "Rousseau emphasized natural education."
  },
  hint:
    "Learning by doing."
},

{
  category: "Education",
  question: "Which philosophy emphasizes 'Learning by Doing'?",
  options: [
    "Idealism",
    "Realism",
    "Pragmatism",
    "Naturalism"
  ],
  answer: "Pragmatism",
  explanation:
    "Pragmatism emphasizes practical experience and learning through activity.",
  wrongExplanations: {
    "Idealism": "Idealism focuses on ideas and values.",
    "Realism": "Realism focuses on the external world.",
    "Naturalism": "Naturalism emphasizes natural development."
  },
  hint:
    "John Dewey's philosophy."
},

{
  category: "Education",
  question: "Who wrote the book 'Emile'?",
  options: [
    "Rousseau",
    "Dewey",
    "Pestalozzi",
    "Plato"
  ],
  answer: "Rousseau",
  explanation:
    "Rousseau's Emile is a classic work on natural education.",
  wrongExplanations: {
    "Dewey": "Dewey wrote Democracy and Education.",
    "Pestalozzi": "Pestalozzi was influenced by Rousseau.",
    "Plato": "Plato wrote The Republic."
  },
  hint:
    "Natural education."
},

{
  category: "Education",
  question: "Which educational philosophy is most closely associated with Plato?",
  options: [
    "Idealism",
    "Pragmatism",
    "Naturalism",
    "Realism"
  ],
  answer: "Idealism",
  explanation:
    "Plato is considered one of the major proponents of Idealism.",
  wrongExplanations: {
    "Pragmatism": "Associated with Dewey.",
    "Naturalism": "Associated with Rousseau.",
    "Realism": "Associated more closely with Aristotle."
  },
  hint:
    "Think of the world of ideas."
},
{
  category: "Public Administration",
  question: "Which theory is associated with Max Weber?",
  options: [
    "Human Relations Theory",
    "Scientific Management",
    "Bureaucratic Theory",
    "Systems Theory"
  ],
  answer: "Bureaucratic Theory",
  explanation:
    "Max Weber developed the ideal type model of bureaucracy.",
  wrongExplanations: {
    "Human Relations Theory": "Associated with Elton Mayo.",
    "Scientific Management": "Associated with F.W. Taylor.",
    "Systems Theory": "Developed later by other scholars."
  },
  hint:
    "Think hierarchy, rules and offices."
},

{
  category: "Public Administration",
  question: "Who is known for the Hawthorne Experiments?",
  options: [
    "Elton Mayo",
    "Woodrow Wilson",
    "Max Weber",
    "Chester Barnard"
  ],
  answer: "Elton Mayo",
  explanation:
    "Elton Mayo conducted the Hawthorne Studies and emphasized human relations in organizations.",
  wrongExplanations: {
    "Woodrow Wilson": "Wilson is linked to Public Administration.",
    "Max Weber": "Weber focused on bureaucracy.",
    "Chester Barnard": "Barnard emphasized cooperation in organizations."
  },
  hint:
    "Human Relations School."
},
{
  category: "Public Administration",
  question: "Who is known as the Father of Scientific Management?",
  options: [
    "Max Weber",
    "F.W. Taylor",
    "Elton Mayo",
    "Herbert Simon"
  ],
  answer: "F.W. Taylor",
  explanation:
    "Frederick Winslow Taylor developed Scientific Management to improve efficiency in organizations.",
  wrongExplanations: {
    "Max Weber": "Known for Bureaucratic Theory.",
    "Elton Mayo": "Known for Human Relations Theory.",
    "Herbert Simon": "Known for Decision-Making Theory."
  },
  hint:
    "Scientific Management."
},

{
  category: "Public Administration",
  question: "Which thinker is associated with the Human Relations Approach?",
  options: [
    "Elton Mayo",
    "Max Weber",
    "Woodrow Wilson",
    "Luther Gulick"
  ],
  answer: "Elton Mayo",
  explanation:
    "Elton Mayo emphasized human behavior and workplace relationships through the Hawthorne Studies.",
  wrongExplanations: {
    "Max Weber": "Associated with bureaucracy.",
    "Woodrow Wilson": "Father of Public Administration.",
    "Luther Gulick": "Associated with POSDCORB."
  },
  hint:
    "Hawthorne Experiments."
},

{
  category: "Public Administration",
  question: "What does the letter 'D' in POSDCORB stand for?",
  options: [
    "Development",
    "Direction",
    "Directing",
    "Decision"
  ],
  answer: "Directing",
  explanation:
    "POSDCORB stands for Planning, Organizing, Staffing, Directing, Coordinating, Reporting and Budgeting.",
  wrongExplanations: {
    "Development": "Not part of POSDCORB.",
    "Direction": "Close, but the accepted term is Directing.",
    "Decision": "Not part of POSDCORB."
  },
  hint:
    "A managerial function."
},

{
  category: "Public Administration",
  question: "Who introduced the concept of Decision-Making Theory?",
  options: [
    "Herbert Simon",
    "Woodrow Wilson",
    "Elton Mayo",
    "F.W. Taylor"
  ],
  answer: "Herbert Simon",
  explanation:
    "Herbert Simon emphasized decision-making as the core of administration.",
  wrongExplanations: {
    "Woodrow Wilson": "Founder of the discipline.",
    "Elton Mayo": "Human Relations School.",
    "F.W. Taylor": "Scientific Management."
  },
  hint:
    "Bounded Rationality."
},

{
  category: "Public Administration",
  question: "Which approach views administration as a system of interrelated parts?",
  options: [
    "Classical Approach",
    "Systems Approach",
    "Scientific Management",
    "Human Relations Approach"
  ],
  answer: "Systems Approach",
  explanation:
    "The Systems Approach studies administration as a set of interconnected elements working together.",
  wrongExplanations: {
    "Classical Approach": "Focuses on structure and hierarchy.",
    "Scientific Management": "Focuses on efficiency.",
    "Human Relations Approach": "Focuses on people and relationships."
  },
  hint:
    "Think of inputs, processes and outputs."
},
{
    category: "History",
    question: "In which year was the Indian National Congress founded?",
    options: ["1885", "1905", "1947", "1857"],
    answer: "1885",
    explanation:
      "The Indian National Congress was founded in 1885. It later became the leading organisation of the Indian freedom movement.",
    wrongExplanations: {
      "1905": "1905 is associated with the Partition of Bengal.",
      "1947": "1947 is the year India became independent.",
      "1857": "1857 refers to the Revolt of 1857.",
    },
    hint: "Remember the late nineteenth century.",
  },
  {
  category: "History",
  question: "Who established the Delhi Sultanate in India?",
  options: [
    "Qutb-ud-din Aibak",
    "Iltutmish",
    "Balban",
    "Alauddin Khalji"
  ],
  answer: "Qutb-ud-din Aibak",
  explanation:
    "Qutb-ud-din Aibak founded the Delhi Sultanate in 1206 and established the Mamluk (Slave) Dynasty.",
  wrongExplanations: {
    "Iltutmish": "Consolidated the Sultanate but did not found it.",
    "Balban": "A later ruler of the Slave Dynasty.",
    "Alauddin Khalji": "Belonged to the Khalji Dynasty."
  },
  hint:
    "Founder of the Slave Dynasty."
},

{
  category: "History",
  question: "Who was the first woman ruler of the Delhi Sultanate?",
  options: [
    "Nur Jahan",
    "Razia Sultan",
    "Jahanara",
    "Mumtaz Mahal"
  ],
  answer: "Razia Sultan",
  explanation:
    "Razia Sultan was the first and only woman to sit on the throne of the Delhi Sultanate.",
  wrongExplanations: {
    "Nur Jahan": "Influential Mughal empress.",
    "Jahanara": "Daughter of Shah Jahan.",
    "Mumtaz Mahal": "Wife of Shah Jahan."
  },
  hint:
    "Daughter of Iltutmish."
},

{
  category: "History",
  question: "Which movement was launched by Mahatma Gandhi in 1942?",
  options: [
    "Non-Cooperation Movement",
    "Civil Disobedience Movement",
    "Quit India Movement",
    "Khilafat Movement"
  ],
  answer: "Quit India Movement",
  explanation:
    "The Quit India Movement was launched in August 1942 demanding an end to British rule.",
  wrongExplanations: {
    "Non-Cooperation Movement": "Launched in 1920.",
    "Civil Disobedience Movement": "Associated with the Salt March in 1930.",
    "Khilafat Movement": "Started earlier and focused on the Ottoman Caliphate."
  },
  hint:
    "Do or Die."
},

{
  category: "History",
  question: "Who founded the Indian National Congress in 1885?",
  options: [
    "Dadabhai Naoroji",
    "A.O. Hume",
    "Bal Gangadhar Tilak",
    "Gopal Krishna Gokhale"
  ],
  answer: "A.O. Hume",
  explanation:
    "Allan Octavian Hume played a key role in establishing the Indian National Congress in 1885.",
  wrongExplanations: {
    "Dadabhai Naoroji": "Early Congress leader but not founder.",
    "Bal Gangadhar Tilak": "Extremist leader of the Congress.",
    "Gopal Krishna Gokhale": "Moderate leader."
  },
  hint:
    "A retired British civil servant."
},

{
  category: "History",
  question: "Who gave the slogan 'Give me blood, and I shall give you freedom'?",
  options: [
    "Mahatma Gandhi",
    "Jawaharlal Nehru",
    "Subhas Chandra Bose",
    "Bhagat Singh"
  ],
  answer: "Subhas Chandra Bose",
  explanation:
    "Netaji Subhas Chandra Bose used this slogan to inspire Indians to join the struggle for independence.",
  wrongExplanations: {
    "Mahatma Gandhi": "Advocated non-violence.",
    "Jawaharlal Nehru": "First Prime Minister of India.",
    "Bhagat Singh": "Revolutionary freedom fighter but not associated with this slogan."
  },
  hint:
    "Leader of the INA."
},
  {
  category: "Geography",
  question: "Which is the largest state of India by area?",
  options: [
    "Maharashtra",
    "Rajasthan",
    "Madhya Pradesh",
    "Uttar Pradesh"
  ],
  answer: "Rajasthan",
  explanation:
    "Rajasthan is the largest state in India by area, covering more than 340,000 square kilometres.",
  wrongExplanations: {
    "Maharashtra":
      "Maharashtra is large but smaller than Rajasthan.",
    "Madhya Pradesh":
      "Madhya Pradesh is the second-largest state by area.",
    "Uttar Pradesh":
      "Uttar Pradesh is the most populous state, not the largest by area."
  },
  hint:
    "Think of the state that contains the Thar Desert."
},
  {
    category: "Mizoram GK",
    question: "What is the capital of Mizoram?",
    options: ["Silchar", "Aizawl", "Shillong", "Imphal"],
    answer: "Aizawl",
    explanation:
      "Aizawl is the capital city of Mizoram. It is the political, administrative and educational centre of the state.",
    wrongExplanations: {
      Silchar: "Wrong. Silchar is in Assam.",
      Shillong: "Wrong. Shillong is the capital of Meghalaya.",
      Imphal: "Wrong. Imphal is the capital of Manipur.",
    },
    hint: "Remember Mizoram’s capital is located in the central part of the state.",
  },
  {
  category: "Mizoram GK",
  question: "Which district is known as the Rice Bowl of Mizoram?",
  options: [
    "Champhai",
    "Aizawl",
    "Mamit",
    "Kolasib"
  ],
  answer: "Champhai",
  explanation:
    "Champhai is often called the Rice Bowl of Mizoram because of its fertile plains and paddy cultivation.",
  wrongExplanations: {
    "Aizawl": "Aizawl is the capital city.",
    "Mamit": "Mamit is an important western district.",
    "Kolasib": "Kolasib is not known by this title."
  },
  hint:
    "Famous eastern district."
},

{
  category: "Mizoram GK",
  question: "Which year was Mizoram granted full statehood?",
  options: [
    "1985",
    "1986",
    "1987",
    "1988"
  ],
  answer: "1987",
  explanation:
    "Mizoram became a full-fledged state of India on 20 February 1987.",
  wrongExplanations: {
    "1985": "Before the Peace Accord.",
    "1986": "Year of the Peace Accord.",
    "1988": "Statehood came earlier."
  },
  hint:
    "One year after the Peace Accord."
},

{
  category: "Mizoram GK",
  question: "Which language is primarily spoken in Mizoram?",
  options: [
    "Hindi",
    "Mizo",
    "Assamese",
    "Bengali"
  ],
  answer: "Mizo",
  explanation:
    "Mizo is the most widely spoken language in Mizoram.",
  wrongExplanations: {
    "Hindi": "Used as a link language by some people.",
    "Assamese": "Primarily spoken in Assam.",
    "Bengali": "Primarily spoken in West Bengal and Bangladesh."
  },
  hint:
    "Official state language."
},

{
  category: "Mizoram GK",
  question: "Which district headquarters is closest to the Myanmar border?",
  options: [
    "Champhai",
    "Kolasib",
    "Mamit",
    "Aizawl"
  ],
  answer: "Champhai",
  explanation:
    "Champhai town lies near the India–Myanmar border.",
  wrongExplanations: {
    "Kolasib": "Closer to Assam.",
    "Mamit": "Borders Bangladesh.",
    "Aizawl": "Located centrally."
  },
  hint:
    "Border trade town."
},

{
  category: "Mizoram GK",
  question: "What is the official state bird of Mizoram?",
  options: [
    "Peacock",
    "Mrs. Hume's Pheasant",
    "Hornbill",
    "Parrot"
  ],
  answer: "Mrs. Hume's Pheasant",
  explanation:
    "Mrs. Hume's Pheasant is the official state bird of Mizoram.",
  wrongExplanations: {
    "Peacock": "National bird of India.",
    "Hornbill": "State bird of some northeastern states.",
    "Parrot": "Not the state bird."
  },
  hint:
    "A rare pheasant species."
},
  {
    category: "Indian Polity",
    question: "Who is known as the Father of the Indian Constitution?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Dr. B. R. Ambedkar",
      "Sardar Patel",
    ],
    answer: "Dr. B. R. Ambedkar",
    explanation:
      "Dr. B. R. Ambedkar is known as the Father of the Indian Constitution because he served as the Chairman of the Drafting Committee.",
    wrongExplanations: {
      "Mahatma Gandhi":
        "Wrong. Gandhi led the freedom movement but did not draft the Constitution.",
      "Jawaharlal Nehru":
        "Wrong. Nehru was important in national politics but was not Chairman of the Drafting Committee.",
      "Sardar Patel":
        "Wrong. Patel helped integrate princely states but is not called Father of the Constitution.",
    },
    hint: "Look for the person connected with the Drafting Committee.",
  },
  {
  category: "Indian Polity",
  question: "Which Article of the Constitution guarantees Equality before Law?",
  options: [
    "Article 14",
    "Article 19",
    "Article 21",
    "Article 32"
  ],
  answer: "Article 14",
  explanation:
    "Article 14 guarantees Equality before Law and Equal Protection of Laws to all persons within India.",
  wrongExplanations: {
    "Article 19":
      "Article 19 deals with freedoms such as speech and expression.",
    "Article 21":
      "Article 21 deals with Protection of Life and Personal Liberty.",
    "Article 32":
      "Article 32 provides the Right to Constitutional Remedies."
  },
  hint:
    "The equality chapter starts with Article 14."
},
 {
  category: "Indian Polity",
  question: "Who administers the oath of office to the President of India?",
  options: [
    "Prime Minister",
    "Vice-President",
    "Chief Justice of India",
    "Speaker of Lok Sabha"
  ],
  answer: "Chief Justice of India",
  explanation:
    "The Chief Justice of India administers the oath of office to the President.",
  wrongExplanations: {
    "Prime Minister": "The PM does not administer the President's oath.",
    "Vice-President": "The Vice-President has no such constitutional role.",
    "Speaker of Lok Sabha": "The Speaker does not administer the oath."
  },
  hint:
    "Head of the Indian Judiciary."
},

{
  category: "Indian Polity",
  question: "Which House of Parliament can never be dissolved?",
  options: [
    "Lok Sabha",
    "Rajya Sabha",
    "Both Houses",
    "Neither House"
  ],
  answer: "Rajya Sabha",
  explanation:
    "Rajya Sabha is a permanent House and cannot be dissolved.",
  wrongExplanations: {
    "Lok Sabha": "Lok Sabha can be dissolved.",
    "Both Houses": "Only Rajya Sabha is permanent.",
    "Neither House": "Lok Sabha can be dissolved."
  },
  hint:
    "Permanent House of Parliament."
},

{
  category: "Indian Polity",
  question: "Which Article of the Constitution deals with Equality before Law?",
  options: [
    "Article 14",
    "Article 19",
    "Article 21",
    "Article 32"
  ],
  answer: "Article 14",
  explanation:
    "Article 14 guarantees Equality before Law and Equal Protection of Laws.",
  wrongExplanations: {
    "Article 19": "Deals with freedoms.",
    "Article 21": "Deals with Right to Life and Personal Liberty.",
    "Article 32": "Deals with Constitutional Remedies."
  },
  hint:
    "First Fundamental Right."
},

{
  category: "Indian Polity",
  question: "The tenure of a member of the Rajya Sabha is:",
  options: [
    "4 Years",
    "5 Years",
    "6 Years",
    "7 Years"
  ],
  answer: "6 Years",
  explanation:
    "A Rajya Sabha member serves a six-year term, with one-third retiring every two years.",
  wrongExplanations: {
    "4 Years": "Too short.",
    "5 Years": "This is associated with Lok Sabha.",
    "7 Years": "Incorrect constitutional provision."
  },
  hint:
    "One-third retire every two years."
},

{
  category: "Indian Polity",
  question: "Which Constitutional Amendment is associated with Panchayati Raj Institutions?",
  options: [
    "52nd Amendment",
    "61st Amendment",
    "73rd Amendment",
    "86th Amendment"
  ],
  answer: "73rd Amendment",
  explanation:
    "The 73rd Constitutional Amendment Act, 1992 strengthened Panchayati Raj Institutions.",
  wrongExplanations: {
    "52nd Amendment": "Anti-defection law.",
    "61st Amendment": "Voting age reduced to 18.",
    "86th Amendment": "Right to Education."
  },
  hint:
    "Rural local self-government."
},
{
    category: "History",
    question: "The Mizoram Peace Accord was signed in which year?",
    options: ["1972", "1986", "1987", "1991"],
    answer: "1986",
    explanation:
      "The Mizoram Peace Accord was signed on 30 June 1986 between the Government of India and the Mizo National Front.",
    wrongExplanations: {
      "1972": "Wrong. Mizoram became a Union Territory in 1972.",
      "1987": "Wrong. Mizoram became a full state in 1987.",
      "1991": "Wrong. This is not related to the Peace Accord.",
    },
    hint: "Peace Accord first, statehood after that.",
  },
  {
  category: "History",
  question: "Who founded the Indian National Congress in 1885?",
  options: [
    "A.O. Hume",
    "Mahatma Gandhi",
    "Jawaharlal Nehru",
    "Subhas Chandra Bose"
  ],
  answer: "A.O. Hume",
  explanation:
    "A.O. Hume, a retired British civil servant, played a key role in founding the Indian National Congress in 1885.",
  wrongExplanations: {
    "Mahatma Gandhi": "Gandhi joined Congress later.",
    "Jawaharlal Nehru": "Nehru was a later Congress leader.",
    "Subhas Chandra Bose": "Bose was not the founder."
  },
  hint:
    "Think of the retired British civil servant."
},

{
  category: "History",
  question: "The Revolt of 1857 started at:",
  options: [
    "Delhi",
    "Meerut",
    "Kanpur",
    "Lucknow"
  ],
  answer: "Meerut",
  explanation:
    "The Revolt of 1857 began at Meerut before spreading across North India.",
  wrongExplanations: {
    "Delhi": "Delhi became a major centre later.",
    "Kanpur": "Kanpur was important but not the starting point.",
    "Lucknow": "Lucknow became a major battlefield later."
  },
  hint:
    "Think of the cantonment where sepoys first revolted."
},

{
  category: "History",
  question: "Who was known as the 'Iron Man of India'?",
  options: [
    "Jawaharlal Nehru",
    "Subhas Chandra Bose",
    "Sardar Vallabhbhai Patel",
    "Rajendra Prasad"
  ],
  answer: "Sardar Vallabhbhai Patel",
  explanation:
    "Patel earned the title Iron Man of India for integrating princely states into the Indian Union.",
  wrongExplanations: {
    "Jawaharlal Nehru": "Nehru was India's first Prime Minister.",
    "Subhas Chandra Bose": "Bose led the INA.",
    "Rajendra Prasad": "Prasad was India's first President."
  },
  hint:
    "Think of national integration after independence."
},

{
  category: "History",
  question: "Who gave the slogan 'Give me blood, and I will give you freedom'?",
  options: [
    "Bhagat Singh",
    "Subhas Chandra Bose",
    "Mahatma Gandhi",
    "Bal Gangadhar Tilak"
  ],
  answer: "Subhas Chandra Bose",
  explanation:
    "Subhas Chandra Bose used this slogan to inspire support for the Indian National Army.",
  wrongExplanations: {
    "Bhagat Singh": "Bhagat Singh was a revolutionary but did not use this slogan.",
    "Mahatma Gandhi": "Gandhi promoted non-violence.",
    "Bal Gangadhar Tilak": "Tilak's famous slogan was different."
  },
  hint:
    "Think of the INA leader."
},

{
  category: "History",
  question: "India became independent on:",
  options: [
    "26 January 1950",
    "15 August 1947",
    "26 November 1949",
    "2 October 1947"
  ],
  answer: "15 August 1947",
  explanation:
    "India achieved independence from British rule on 15 August 1947.",
  wrongExplanations: {
    "26 January 1950": "India became a Republic on this date.",
    "26 November 1949": "The Constitution was adopted on this date.",
    "2 October 1947": "This is not India's Independence Day."
  },
  hint:
    "Think of Independence Day."
},
 {
  category: "History",
  question: "Who founded the Maurya Empire?",
  options: [
    "Ashoka",
    "Bindusara",
    "Chandragupta Maurya",
    "Harsha"
  ],
  answer: "Chandragupta Maurya",
  explanation:
    "Chandragupta Maurya founded the Maurya Empire around 322 BCE with the guidance of Chanakya.",
  wrongExplanations: {
    "Ashoka": "Ashoka was the most famous Mauryan ruler but not the founder.",
    "Bindusara": "Bindusara was Chandragupta's son.",
    "Harsha": "Harsha ruled much later."
  },
  hint:
    "Chanakya's student."
},

{
  category: "History",
  question: "Who wrote the book 'Arthashastra'?",
  options: [
    "Kalidasa",
    "Chanakya",
    "Megasthenes",
    "Banabhatta"
  ],
  answer: "Chanakya",
  explanation:
    "Chanakya, also known as Kautilya, wrote Arthashastra, an important work on statecraft and administration.",
  wrongExplanations: {
    "Kalidasa": "Kalidasa was a classical poet.",
    "Megasthenes": "Megasthenes wrote Indica.",
    "Banabhatta": "Banabhatta was the court poet of Harsha."
  },
  hint:
    "Advisor of Chandragupta Maurya."
},

{
  category: "History",
  question: "Which Mughal emperor built the Taj Mahal?",
  options: [
    "Akbar",
    "Humayun",
    "Shah Jahan",
    "Aurangzeb"
  ],
  answer: "Shah Jahan",
  explanation:
    "Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal.",
  wrongExplanations: {
    "Akbar": "Akbar built Fatehpur Sikri.",
    "Humayun": "Humayun did not build the Taj Mahal.",
    "Aurangzeb": "Aurangzeb ruled later."
  },
  hint:
    "Mumtaz Mahal."
},

{
  category: "History",
  question: "Who was the first Governor-General of independent India?",
  options: [
    "C. Rajagopalachari",
    "Lord Mountbatten",
    "Jawaharlal Nehru",
    "Rajendra Prasad"
  ],
  answer: "Lord Mountbatten",
  explanation:
    "Lord Mountbatten served as the first Governor-General of independent India from 1947 to 1948.",
  wrongExplanations: {
    "C. Rajagopalachari": "He was the first Indian Governor-General.",
    "Jawaharlal Nehru": "He was the first Prime Minister.",
    "Rajendra Prasad": "He was the first President."
  },
  hint:
    "Last Viceroy of British India."
},

{
  category: "History",
  question: "Who gave the slogan 'Swaraj is my birthright and I shall have it'?",
  options: [
    "Mahatma Gandhi",
    "Subhas Chandra Bose",
    "Bal Gangadhar Tilak",
    "Lala Lajpat Rai"
  ],
  answer: "Bal Gangadhar Tilak",
  explanation:
    "Bal Gangadhar Tilak popularized the slogan and became a major nationalist leader.",
  wrongExplanations: {
    "Mahatma Gandhi": "Gandhi is associated with Satyagraha.",
    "Subhas Chandra Bose": "Bose led the INA.",
    "Lala Lajpat Rai": "A prominent nationalist but not associated with this slogan."
  },
  hint:
    "Known as Lokmanya Tilak."
},
{
  category: "History",
  question: "Who was the founder of the Gupta Empire?",
  options: [
    "Samudragupta",
    "Chandragupta I",
    "Skandagupta",
    "Harshavardhana"
  ],
  answer: "Chandragupta I",
  explanation:
    "Chandragupta I is regarded as the founder of the Gupta Empire.",
  wrongExplanations: {
    "Samudragupta": "He greatly expanded the empire but was not the founder.",
    "Skandagupta": "A later Gupta ruler.",
    "Harshavardhana": "Belonged to a different dynasty."
  },
  hint:
    "The first major Gupta ruler."
},

{
  category: "History",
  question: "Who is known as the 'Napoleon of India'?",
  options: [
    "Ashoka",
    "Samudragupta",
    "Chandragupta Maurya",
    "Harsha"
  ],
  answer: "Samudragupta",
  explanation:
    "Historian V.A. Smith called Samudragupta the 'Napoleon of India' because of his military conquests.",
  wrongExplanations: {
    "Ashoka": "Known for Dhamma and Buddhism.",
    "Chandragupta Maurya": "Founder of the Maurya Empire.",
    "Harsha": "Ruled much later."
  },
  hint:
    "A famous Gupta emperor."
},

{
  category: "History",
  question: "Who founded the Mughal Empire in India?",
  options: [
    "Akbar",
    "Babur",
    "Humayun",
    "Shah Jahan"
  ],
  answer: "Babur",
  explanation:
    "Babur founded the Mughal Empire after the First Battle of Panipat in 1526.",
  wrongExplanations: {
    "Akbar": "Expanded and consolidated the empire.",
    "Humayun": "Babur's son.",
    "Shah Jahan": "Built the Taj Mahal."
  },
  hint:
    "First Battle of Panipat."
},

{
  category: "History",
  question: "The Jallianwala Bagh massacre took place in which year?",
  options: [
    "1915",
    "1917",
    "1919",
    "1921"
  ],
  answer: "1919",
  explanation:
    "The Jallianwala Bagh massacre occurred on 13 April 1919 in Amritsar.",
  wrongExplanations: {
    "1915": "Too early.",
    "1917": "Before the event.",
    "1921": "After the event."
  },
  hint:
    "Same year as the Rowlatt Act protests."
},

{
  category: "History",
  question: "Who became the first President of independent India?",
  options: [
    "Jawaharlal Nehru",
    "Rajendra Prasad",
    "Sardar Patel",
    "C. Rajagopalachari"
  ],
  answer: "Rajendra Prasad",
  explanation:
    "Dr. Rajendra Prasad became the first President of India in 1950.",
  wrongExplanations: {
    "Jawaharlal Nehru": "First Prime Minister.",
    "Sardar Patel": "First Deputy Prime Minister.",
    "C. Rajagopalachari": "First Indian Governor-General."
  },
  hint:
    "India's first President."
},
{
    category: "Geography",
    question: "Mizoram is mainly known for which type of terrain?",
    options: ["Desert", "Coastal plain", "Hilly terrain", "Large plateau"],
    answer: "Hilly terrain",
    explanation:
      "Mizoram is a hilly state. Its physical geography is dominated by hills, valleys, forests and rivers.",
    wrongExplanations: {
      Desert: "Wrong. Mizoram is not a desert region.",
      "Coastal plain": "Wrong. Mizoram has no sea coast.",
      "Large plateau": "Wrong. Mizoram is mainly hilly, not a large plateau.",
    },
    hint: "Think of Mizoram’s roads, slopes and mountains.",
  },
  {
  category: "Geography",
  question: "Which is the largest ocean in the world?",
  options: [
    "Atlantic Ocean",
    "Indian Ocean",
    "Pacific Ocean",
    "Arctic Ocean"
  ],
  answer: "Pacific Ocean",
  explanation:
    "The Pacific Ocean is the largest and deepest ocean on Earth.",
  wrongExplanations: {
    "Atlantic Ocean": "Atlantic is the second largest ocean.",
    "Indian Ocean": "Indian Ocean is smaller than the Pacific.",
    "Arctic Ocean": "Arctic is the smallest ocean."
  },
  hint:
    "Think of the ocean between Asia and the Americas."
},

{
  category: "Geography",
  question: "Which is the highest mountain peak in the world?",
  options: [
    "Kanchenjunga",
    "Mount Everest",
    "K2",
    "Nanga Parbat"
  ],
  answer: "Mount Everest",
  explanation:
    "Mount Everest is the highest mountain peak above sea level at 8,848.86 metres.",
  wrongExplanations: {
    "Kanchenjunga": "Kanchenjunga is the third highest mountain.",
    "K2": "K2 is the second highest mountain.",
    "Nanga Parbat": "Nanga Parbat is much lower than Everest."
  },
  hint:
    "Think of Nepal and Tibet."
},

{
  category: "Geography",
  question: "Which river is known as the 'Sorrow of Bihar'?",
  options: [
    "Ganga",
    "Kosi",
    "Yamuna",
    "Godavari"
  ],
  answer: "Kosi",
  explanation:
    "The Kosi River frequently changes course and causes devastating floods in Bihar.",
  wrongExplanations: {
    "Ganga": "The Ganga is important but not known by this title.",
    "Yamuna": "Yamuna is mainly associated with North India.",
    "Godavari": "Godavari flows through Peninsular India."
  },
  hint:
    "Think of a flood-prone river."
},

{
  category: "Geography",
  question: "Which Indian state has the longest coastline?",
  options: [
    "Tamil Nadu",
    "Gujarat",
    "Maharashtra",
    "Andhra Pradesh"
  ],
  answer: "Gujarat",
  explanation:
    "Gujarat has the longest coastline among Indian states.",
  wrongExplanations: {
    "Tamil Nadu": "Tamil Nadu has a long coastline but not the longest.",
    "Maharashtra": "Maharashtra's coastline is shorter.",
    "Andhra Pradesh": "Andhra Pradesh ranks below Gujarat."
  },
  hint:
    "Think of India's western coast."
},

{
  category: "Geography",
  question: "Which layer of the atmosphere contains the ozone layer?",
  options: [
    "Troposphere",
    "Stratosphere",
    "Mesosphere",
    "Thermosphere"
  ],
  answer: "Stratosphere",
  explanation:
    "The ozone layer is located mainly in the stratosphere and protects Earth from harmful ultraviolet radiation.",
  wrongExplanations: {
    "Troposphere": "Weather occurs mainly in the troposphere.",
    "Mesosphere": "The mesosphere lies above the stratosphere.",
    "Thermosphere": "The thermosphere is much higher."
  },
  hint:
    "One layer above the troposphere."
},
  {
  category: "Geography",
  question: "Which is the largest continent in the world?",
  options: [
    "Africa",
    "Europe",
    "Asia",
    "North America"
  ],
  answer: "Asia",
  explanation:
    "Asia is the largest continent in terms of both area and population.",
  wrongExplanations: {
    "Africa": "Africa is the second largest continent.",
    "Europe": "Europe is much smaller than Asia.",
    "North America": "North America is smaller than Asia."
  },
  hint:
    "India and China are located here."
},

{
  category: "Geography",
  question: "Which is the longest river in the world?",
  options: [
    "Amazon",
    "Nile",
    "Mississippi",
    "Yangtze"
  ],
  answer: "Nile",
  explanation:
    "The Nile River in Africa is traditionally regarded as the longest river in the world.",
  wrongExplanations: {
    "Amazon": "Amazon has the largest discharge volume.",
    "Mississippi": "Located in North America.",
    "Yangtze": "Longest river in Asia."
  },
  hint:
    "Flows through Egypt."
},

{
  category: "Geography",
  question: "Which planet is known as the Red Planet?",
  options: [
    "Venus",
    "Mars",
    "Jupiter",
    "Mercury"
  ],
  answer: "Mars",
  explanation:
    "Mars appears reddish due to iron oxide on its surface.",
  wrongExplanations: {
    "Venus": "Known for its thick atmosphere.",
    "Jupiter": "Largest planet in the Solar System.",
    "Mercury": "Closest planet to the Sun."
  },
  hint:
    "Named after the Roman god of war."
},

{
  category: "Geography",
  question: "Which latitude is known as the Tropic of Cancer?",
  options: [
    "23.5° North",
    "23.5° South",
    "66.5° North",
    "0°"
  ],
  answer: "23.5° North",
  explanation:
    "The Tropic of Cancer lies at approximately 23.5 degrees north latitude.",
  wrongExplanations: {
    "23.5° South": "This is the Tropic of Capricorn.",
    "66.5° North": "This is the Arctic Circle.",
    "0°": "This is the Equator."
  },
  hint:
    "Passes through India."
},

{
  category: "Geography",
  question: "Which is the largest desert in the world?",
  options: [
    "Sahara Desert",
    "Gobi Desert",
    "Kalahari Desert",
    "Thar Desert"
  ],
  answer: "Sahara Desert",
  explanation:
    "The Sahara is the world's largest hot desert, covering much of North Africa.",
  wrongExplanations: {
    "Gobi Desert": "Located in Mongolia and China.",
    "Kalahari Desert": "Located in Southern Africa.",
    "Thar Desert": "Located in India and Pakistan."
  },
  hint:
    "Located in North Africa."
},
{
    category: "Economics",
    question: "Inflation means:",
    options: [
      "Fall in prices",
      "Rise in general price level",
      "Increase in rainfall",
      "Decrease in population",
    ],
    answer: "Rise in general price level",
    explanation:
      "Inflation means a continuous rise in the general price level. It reduces the purchasing power of money.",
    wrongExplanations: {
      "Fall in prices": "Wrong. Fall in prices is called deflation.",
      "Increase in rainfall": "Wrong. Rainfall is a geographical concept.",
      "Decrease in population": "Wrong. This is demographic change, not inflation.",
    },
    hint: "Think of market prices becoming expensive.",
  },
  {
  category: "Economics",
  question: "Which factor of production receives rent as its reward?",
  options: [
    "Labour",
    "Land",
    "Capital",
    "Entrepreneur"
  ],
  answer: "Land",
  explanation:
    "Land receives rent as its reward in the production process.",
  wrongExplanations: {
    "Labour": "Labour receives wages.",
    "Capital": "Capital receives interest.",
    "Entrepreneur": "Entrepreneur receives profit."
  },
  hint:
    "Natural resources."
},

{
  category: "Economics",
  question: "What is the full form of RBI?",
  options: [
    "Reserve Bank of India",
    "Regional Bank of India",
    "Rural Bank of India",
    "Revenue Bank of India"
  ],
  answer: "Reserve Bank of India",
  explanation:
    "RBI stands for Reserve Bank of India, the country's central bank.",
  wrongExplanations: {
    "Regional Bank of India": "Incorrect expansion.",
    "Rural Bank of India": "Incorrect expansion.",
    "Revenue Bank of India": "Incorrect expansion."
  },
  hint:
    "India's central bank."
},

{
  category: "Economics",
  question: "Which of the following is an example of indirect tax?",
  options: [
    "Income Tax",
    "Corporate Tax",
    "GST",
    "Wealth Tax"
  ],
  answer: "GST",
  explanation:
    "GST is an indirect tax collected on goods and services.",
  wrongExplanations: {
    "Income Tax": "A direct tax.",
    "Corporate Tax": "A direct tax.",
    "Wealth Tax": "A direct tax."
  },
  hint:
    "Introduced in 2017."
},

{
  category: "Economics",
  question: "Who is known as the Father of Economics?",
  options: [
    "John Maynard Keynes",
    "Adam Smith",
    "Karl Marx",
    "David Ricardo"
  ],
  answer: "Adam Smith",
  explanation:
    "Adam Smith is known as the Father of Economics and wrote The Wealth of Nations.",
  wrongExplanations: {
    "John Maynard Keynes": "Known for Keynesian Economics.",
    "Karl Marx": "Known for Marxist Economics.",
    "David Ricardo": "Known for Comparative Advantage."
  },
  hint:
    "The Wealth of Nations."
},

{
  category: "Economics",
  question: "What is meant by per capita income?",
  options: [
    "Income of the government",
    "Income per family",
    "Average income per person",
    "Income from exports"
  ],
  answer: "Average income per person",
  explanation:
    "Per capita income is calculated by dividing national income by population.",
  wrongExplanations: {
    "Income of the government": "Government revenue is different.",
    "Income per family": "This is household income.",
    "Income from exports": "Export earnings are different."
  },
  hint:
    "National income ÷ population."
},
  {
  category: "Economics",
  question: "What does GDP stand for?",
  options: [
    "General Domestic Product",
    "Gross Domestic Product",
    "Gross Development Product",
    "General Development Product"
  ],
  answer: "Gross Domestic Product",
  explanation:
    "GDP measures the total value of final goods and services produced within a country during a specific period.",
  wrongExplanations: {
    "General Domestic Product": "Incorrect expansion.",
    "Gross Development Product": "Incorrect expansion.",
    "General Development Product": "Incorrect expansion."
  },
  hint:
    "Most commonly used measure of economic output."
},

{
  category: "Economics",
  question: "Which institution publishes India's Monetary Policy?",
  options: [
    "NITI Aayog",
    "Finance Commission",
    "Reserve Bank of India",
    "SEBI"
  ],
  answer: "Reserve Bank of India",
  explanation:
    "The RBI formulates and announces India's monetary policy.",
  wrongExplanations: {
    "NITI Aayog": "Policy think tank.",
    "Finance Commission": "Deals with fiscal distribution.",
    "SEBI": "Regulates securities markets."
  },
  hint:
    "India's central bank."
},

{
  category: "Economics",
  question: "Inflation refers to:",
  options: [
    "Decrease in prices",
    "Increase in employment",
    "General rise in prices",
    "Increase in exports"
  ],
  answer: "General rise in prices",
  explanation:
    "Inflation means a sustained increase in the general price level of goods and services.",
  wrongExplanations: {
    "Decrease in prices": "This is deflation.",
    "Increase in employment": "Not inflation.",
    "Increase in exports": "Not the definition of inflation."
  },
  hint:
    "Purchasing power falls."
},

{
  category: "Economics",
  question: "Which sector is directly related to agriculture, forestry and fishing?",
  options: [
    "Primary Sector",
    "Secondary Sector",
    "Tertiary Sector",
    "Service Sector"
  ],
  answer: "Primary Sector",
  explanation:
    "The primary sector involves extraction and use of natural resources.",
  wrongExplanations: {
    "Secondary Sector": "Manufacturing sector.",
    "Tertiary Sector": "Service sector.",
    "Service Sector": "Another name for tertiary sector."
  },
  hint:
    "Natural resource-based activities."
},

{
  category: "Economics",
  question: "Who receives profit as a reward in production?",
  options: [
    "Labour",
    "Landlord",
    "Entrepreneur",
    "Bank"
  ],
  answer: "Entrepreneur",
  explanation:
    "Entrepreneurs organize production and receive profit for taking risks.",
  wrongExplanations: {
    "Labour": "Receives wages.",
    "Landlord": "Receives rent.",
    "Bank": "Receives interest on lending."
  },
  hint:
    "Takes business risks."
},
{
    category: "Polity",
    question: "Who appoints the Prime Minister of India?",
    options: [
      "President",
      "Governor",
      "Chief Justice",
      "Parliament"
    ],
    answer: "President",
    explanation:
      "The President appoints the Prime Minister under the Constitution.",
    wrongExplanations: {
      "Governor": "Governor only appoints Chief Ministers in states.",
      "Chief Justice": "The judiciary does not appoint the Prime Minister.",
      "Parliament": "Parliament supports the PM but does not officially appoint.",
    },
    hint: "Think about the constitutional head of India.",
  },
{
  category: "Indian Polity",
  question: "Who appoints the Governor of a State in India?",
  options: [
    "Prime Minister",
    "President",
    "Chief Minister",
    "Parliament"
  ],
  answer: "President",
  explanation:
    "The Governor of a State is appointed by the President of India under Article 155 of the Constitution.",
  wrongExplanations: {
    "Prime Minister": "The Prime Minister may advise, but the appointment is made by the President.",
    "Chief Minister": "The Chief Minister is not the appointing authority.",
    "Parliament": "Parliament does not appoint Governors."
  },
  hint:
    "Think of the constitutional head of the Union."
},

{
  category: "Indian Polity",
  question: "How many Houses are there in the Indian Parliament?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  answer: "Two",
  explanation:
    "The Indian Parliament consists of Lok Sabha and Rajya Sabha.",
  wrongExplanations: {
    "One": "India has a bicameral Parliament.",
    "Three": "There are only two Houses.",
    "Four": "This is incorrect."
  },
  hint:
    "Lok Sabha + Rajya Sabha."
},

{
  category: "Indian Polity",
  question: "What is the minimum voting age in India?",
  options: [
    "16",
    "18",
    "21",
    "25"
  ],
  answer: "18",
  explanation:
    "The voting age was reduced from 21 to 18 years by the 61st Constitutional Amendment Act, 1988.",
  wrongExplanations: {
    "16": "India does not permit voting at 16.",
    "21": "This was the previous voting age.",
    "25": "This is the minimum age for contesting some elections, not voting."
  },
  hint:
    "61st Constitutional Amendment."
},

{
  category: "Indian Polity",
  question: "Which Fundamental Right is known as the 'Heart and Soul' of the Constitution?",
  options: [
    "Right to Equality",
    "Right to Freedom",
    "Right to Constitutional Remedies",
    "Right against Exploitation"
  ],
  answer: "Right to Constitutional Remedies",
  explanation:
    "Dr. B.R. Ambedkar called the Right to Constitutional Remedies the Heart and Soul of the Constitution.",
  wrongExplanations: {
    "Right to Equality": "Important, but not described by Ambedkar with this phrase.",
    "Right to Freedom": "A key right, but not the Heart and Soul.",
    "Right against Exploitation": "Protects against forced labour and trafficking."
  },
  hint:
    "Think of Article 32."
},

{
  category: "Indian Polity",
  question: "Which constitutional office is known as the 'First Citizen of India'?",
  options: [
    "Prime Minister",
    "President",
    "Chief Justice of India",
    "Vice-President"
  ],
  answer: "President",
  explanation:
    "The President is the constitutional head of the Indian Republic and is known as the First Citizen of India.",
  wrongExplanations: {
    "Prime Minister": "The PM is the head of government.",
    "Chief Justice of India": "The CJI heads the judiciary.",
    "Vice-President": "The Vice-President is the second highest constitutional office."
  },
  hint:
    "Constitutional head of the Republic."
},
  {
    category: "History",
    question: "Who was the first Prime Minister of independent India?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Sardar Patel",
      "Rajendra Prasad"
    ],
    answer: "Jawaharlal Nehru",
    explanation:
      "Jawaharlal Nehru became the first Prime Minister in 1947.",
    wrongExplanations: {
      "Mahatma Gandhi": "Gandhi never became Prime Minister.",
      "Sardar Patel": "Patel was the first Deputy Prime Minister.",
      "Rajendra Prasad": "He became the first President of India.",
    },
    hint: "He delivered the 'Tryst with Destiny' speech.",
  },

  {
    category: "Science",
    question: "Which planet is known as the Blue Planet?",
    options: [
      "Earth",
      "Mars",
      "Venus",
      "Jupiter"
    ],
    answer: "Earth",
    explanation:
      "Earth is called the Blue Planet because most of its surface is covered by water.",
    wrongExplanations: {
      "Mars": "Mars is known as the Red Planet.",
      "Venus": "Venus is the hottest planet.",
      "Jupiter": "Jupiter is the largest planet.",
    },
    hint: "Think about oceans.",
  },
  {
  category: "Science",
  question: "Which organ pumps blood throughout the human body?",
  options: [
    "Liver",
    "Heart",
    "Kidney",
    "Lungs"
  ],
  answer: "Heart",
  explanation:
    "The heart pumps blood throughout the body through the circulatory system.",
  wrongExplanations: {
    "Liver": "The liver helps in metabolism and detoxification.",
    "Kidney": "The kidney filters waste from blood.",
    "Lungs": "The lungs help in breathing and gas exchange."
  },
  hint:
    "Think of the central organ of the circulatory system."
},

{
  category: "Science",
  question: "What is the chemical symbol for Gold?",
  options: [
    "Ag",
    "Au",
    "Gd",
    "Go"
  ],
  answer: "Au",
  explanation:
    "The chemical symbol Au comes from the Latin word Aurum, meaning gold.",
  wrongExplanations: {
    "Ag": "Ag is the symbol for Silver.",
    "Gd": "Gd is the symbol for Gadolinium.",
    "Go": "Go is not a valid chemical symbol."
  },
  hint:
    "Gold's symbol comes from a Latin word."
},

{
  category: "Science",
  question: "Which planet is known as the Red Planet?",
  options: [
    "Venus",
    "Mars",
    "Jupiter",
    "Mercury"
  ],
  answer: "Mars",
  explanation:
    "Mars appears red because of iron oxide (rust) on its surface.",
  wrongExplanations: {
    "Venus": "Venus is known for its thick atmosphere.",
    "Jupiter": "Jupiter is the largest planet.",
    "Mercury": "Mercury is the closest planet to the Sun."
  },
  hint:
    "The planet associated with war in Roman mythology."
},

{
  category: "Science",
  question: "Water boils at what temperature at sea level?",
  options: [
    "90°C",
    "95°C",
    "100°C",
    "110°C"
  ],
  answer: "100°C",
  explanation:
    "Pure water boils at 100°C at standard atmospheric pressure.",
  wrongExplanations: {
    "90°C": "Below the normal boiling point.",
    "95°C": "Still below the standard boiling point.",
    "110°C": "Above the standard boiling point."
  },
  hint:
    "This is one of the most commonly tested science facts."
},

{
  category: "Science",
  question: "Which gas is most abundant in Earth's atmosphere?",
  options: [
    "Oxygen",
    "Carbon Dioxide",
    "Nitrogen",
    "Hydrogen"
  ],
  answer: "Nitrogen",
  explanation:
    "Nitrogen makes up about 78% of Earth's atmosphere.",
  wrongExplanations: {
    "Oxygen": "Oxygen is about 21% of the atmosphere.",
    "Carbon Dioxide": "Carbon dioxide exists in much smaller quantities.",
    "Hydrogen": "Hydrogen is not the dominant atmospheric gas."
  },
  hint:
    "Think of the largest percentage in the atmosphere."
},
  {
  category: "Science",
  question: "Which vitamin is mainly produced when the skin is exposed to sunlight?",
  options: [
    "Vitamin A",
    "Vitamin B12",
    "Vitamin C",
    "Vitamin D"
  ],
  answer: "Vitamin D",
  explanation:
    "Vitamin D is produced in the skin when it is exposed to ultraviolet rays from sunlight.",
  wrongExplanations: {
    "Vitamin A":
      "Vitamin A is mainly obtained through food sources.",
    "Vitamin B12":
      "Vitamin B12 is mainly obtained from animal-based foods.",
    "Vitamin C":
      "Vitamin C is commonly obtained from fruits and vegetables."
  },
  hint:
    "Think of the vitamin associated with bones and sunlight."
},
 {
  category: "Science",
  question: "Which blood group is known as the universal donor?",
  options: [
    "A",
    "B",
    "AB",
    "O Negative"
  ],
  answer: "O Negative",
  explanation:
    "O Negative blood can generally be transfused to patients of any blood group in emergencies.",
  wrongExplanations: {
    "A": "A blood group is not a universal donor.",
    "B": "B blood group is not a universal donor.",
    "AB": "AB is known as the universal recipient."
  },
  hint:
    "Think of emergency blood transfusions."
},

{
  category: "Science",
  question: "What is the SI unit of force?",
  options: [
    "Joule",
    "Newton",
    "Watt",
    "Pascal"
  ],
  answer: "Newton",
  explanation:
    "The SI unit of force is the Newton, named after Sir Isaac Newton.",
  wrongExplanations: {
    "Joule": "Joule is the unit of energy.",
    "Watt": "Watt is the unit of power.",
    "Pascal": "Pascal is the unit of pressure."
  },
  hint:
    "Think of Newton's Laws of Motion."
},

{
  category: "Science",
  question: "Which part of the plant conducts photosynthesis?",
  options: [
    "Root",
    "Stem",
    "Leaf",
    "Flower"
  ],
  answer: "Leaf",
  explanation:
    "Leaves contain chlorophyll and are the primary site of photosynthesis.",
  wrongExplanations: {
    "Root": "Roots absorb water and minerals.",
    "Stem": "Stems support the plant and transport materials.",
    "Flower": "Flowers are mainly reproductive structures."
  },
  hint:
    "Think green."
},

{
  category: "Science",
  question: "Which scientist proposed the Law of Gravitation?",
  options: [
    "Albert Einstein",
    "Isaac Newton",
    "Galileo",
    "Nikola Tesla"
  ],
  answer: "Isaac Newton",
  explanation:
    "Sir Isaac Newton formulated the Universal Law of Gravitation.",
  wrongExplanations: {
    "Albert Einstein": "Einstein developed the Theory of Relativity.",
    "Galileo": "Galileo contributed to motion and astronomy.",
    "Nikola Tesla": "Tesla is known for electrical innovations."
  },
  hint:
    "The falling apple story."
},

{
  category: "Science",
  question: "Which vitamin deficiency causes scurvy?",
  options: [
    "Vitamin A",
    "Vitamin B",
    "Vitamin C",
    "Vitamin D"
  ],
  answer: "Vitamin C",
  explanation:
    "Scurvy is caused by a deficiency of Vitamin C.",
  wrongExplanations: {
    "Vitamin A": "Vitamin A deficiency affects vision.",
    "Vitamin B": "Vitamin B deficiencies cause other disorders.",
    "Vitamin D": "Vitamin D deficiency is linked to rickets."
  },
  hint:
    "Think citrus fruits."
},
{
  category: "Science",
  question: "Which gas is most abundant in the Earth's atmosphere?",
  options: [
    "Oxygen",
    "Carbon Dioxide",
    "Nitrogen",
    "Hydrogen"
  ],
  answer: "Nitrogen",
  explanation:
    "Nitrogen makes up about 78% of the Earth's atmosphere.",
  wrongExplanations: {
    "Oxygen": "Oxygen makes up about 21% of the atmosphere.",
    "Carbon Dioxide": "CO₂ is present in a very small amount.",
    "Hydrogen": "Hydrogen is not a major atmospheric gas."
  },
  hint:
    "Nearly four-fifths of the atmosphere."
},

{
  category: "Science",
  question: "What is the chemical formula of water?",
  options: [
    "CO2",
    "H2O",
    "O2",
    "NaCl"
  ],
  answer: "H2O",
  explanation:
    "A water molecule contains two hydrogen atoms and one oxygen atom.",
  wrongExplanations: {
    "CO2": "Carbon dioxide.",
    "O2": "Oxygen gas.",
    "NaCl": "Common salt."
  },
  hint:
    "Two hydrogen atoms and one oxygen atom."
},

{
  category: "Science",
  question: "Which organ pumps blood throughout the human body?",
  options: [
    "Liver",
    "Lungs",
    "Heart",
    "Kidney"
  ],
  answer: "Heart",
  explanation:
    "The heart is a muscular organ responsible for pumping blood throughout the body.",
  wrongExplanations: {
    "Liver": "The liver helps in metabolism and detoxification.",
    "Lungs": "Lungs exchange oxygen and carbon dioxide.",
    "Kidney": "Kidneys filter blood and produce urine."
  },
  hint:
    "Central organ of the circulatory system."
},

{
  category: "Science",
  question: "Which vitamin is produced in the skin when exposed to sunlight?",
  options: [
    "Vitamin A",
    "Vitamin B12",
    "Vitamin C",
    "Vitamin D"
  ],
  answer: "Vitamin D",
  explanation:
    "The human body produces Vitamin D when skin is exposed to sunlight.",
  wrongExplanations: {
    "Vitamin A": "Important for vision.",
    "Vitamin B12": "Important for nerves and blood cells.",
    "Vitamin C": "Important for immunity and connective tissue."
  },
  hint:
    "Known as the sunshine vitamin."
},

{
  category: "Science",
  question: "Which metal is liquid at room temperature?",
  options: [
    "Iron",
    "Mercury",
    "Copper",
    "Aluminium"
  ],
  answer: "Mercury",
  explanation:
    "Mercury is the only common metal that remains liquid at room temperature.",
  wrongExplanations: {
    "Iron": "Iron is solid at room temperature.",
    "Copper": "Copper is solid at room temperature.",
    "Aluminium": "Aluminium is solid at room temperature."
  },
  hint:
    "Used in traditional thermometers."
},
{
  category: "Science",
  question: "Which part of the human body is known as the 'control centre'?",
  options: [
    "Heart",
    "Brain",
    "Lungs",
    "Kidney"
  ],
  answer: "Brain",
  explanation:
    "The brain controls and coordinates the activities of the body and nervous system.",
  wrongExplanations: {
    "Heart": "The heart pumps blood.",
    "Lungs": "The lungs help in respiration.",
    "Kidney": "The kidneys filter waste from blood."
  },
  hint:
    "Part of the nervous system."
},

{
  category: "Science",
  question: "Which gas do plants absorb during photosynthesis?",
  options: [
    "Oxygen",
    "Nitrogen",
    "Carbon Dioxide",
    "Hydrogen"
  ],
  answer: "Carbon Dioxide",
  explanation:
    "Plants absorb carbon dioxide and release oxygen during photosynthesis.",
  wrongExplanations: {
    "Oxygen": "Plants mainly release oxygen during photosynthesis.",
    "Nitrogen": "Nitrogen is not used directly in photosynthesis.",
    "Hydrogen": "Hydrogen gas is not absorbed from the atmosphere."
  },
  hint:
    "A greenhouse gas."
},

{
  category: "Science",
  question: "What is the SI unit of electric current?",
  options: [
    "Volt",
    "Ampere",
    "Ohm",
    "Watt"
  ],
  answer: "Ampere",
  explanation:
    "Ampere is the SI unit used to measure electric current.",
  wrongExplanations: {
    "Volt": "Measures electrical potential difference.",
    "Ohm": "Measures resistance.",
    "Watt": "Measures power."
  },
  hint:
    "Named after André-Marie Ampère."
},

{
  category: "Science",
  question: "Which planet is known for its prominent ring system?",
  options: [
    "Mars",
    "Jupiter",
    "Saturn",
    "Venus"
  ],
  answer: "Saturn",
  explanation:
    "Saturn is famous for its extensive and visible ring system.",
  wrongExplanations: {
    "Mars": "Mars has no ring system.",
    "Jupiter": "Jupiter has faint rings but is not famous for them.",
    "Venus": "Venus has no rings."
  },
  hint:
    "The sixth planet from the Sun."
},

{
  category: "Science",
  question: "Which disease is caused by the bite of an infected female Anopheles mosquito?",
  options: [
    "Dengue",
    "Malaria",
    "Typhoid",
    "Tuberculosis"
  ],
  answer: "Malaria",
  explanation:
    "Malaria is caused by Plasmodium parasites transmitted by infected female Anopheles mosquitoes.",
  wrongExplanations: {
    "Dengue": "Spread by Aedes mosquitoes.",
    "Typhoid": "Usually spread through contaminated food and water.",
    "Tuberculosis": "Spread through airborne bacteria."
  },
  hint:
    "A mosquito-borne parasitic disease."
},
{
  category: "Science",
  question: "Which blood group is known as the universal donor?",
  options: [
    "A",
    "B",
    "AB",
    "O Negative"
  ],
  answer: "O Negative",
  explanation:
    "O Negative blood can be given to people of all blood groups in emergencies.",
  wrongExplanations: {
    "A": "Can only donate to compatible groups.",
    "B": "Not a universal donor.",
    "AB": "AB Positive is the universal recipient, not donor."
  },
  hint:
    "Emergency blood type."
},

{
  category: "Science",
  question: "What is the speed of light in vacuum?",
  options: [
    "3 × 10^8 m/s",
    "3 × 10^6 m/s",
    "3 × 10^5 km/s",
    "3000 km/s"
  ],
  answer: "3 × 10^8 m/s",
  explanation:
    "The speed of light in vacuum is approximately 300 million meters per second.",
  wrongExplanations: {
    "3 × 10^6 m/s": "Too slow.",
    "3 × 10^5 km/s": "Equivalent form but not the standard SI answer here.",
    "3000 km/s": "Far too slow."
  },
  hint:
    "One of the most famous constants in physics."
},

{
  category: "Science",
  question: "Which vitamin deficiency causes scurvy?",
  options: [
    "Vitamin A",
    "Vitamin B",
    "Vitamin C",
    "Vitamin D"
  ],
  answer: "Vitamin C",
  explanation:
    "Scurvy is caused by a deficiency of Vitamin C.",
  wrongExplanations: {
    "Vitamin A": "Deficiency affects vision.",
    "Vitamin B": "Associated with several disorders.",
    "Vitamin D": "Deficiency causes rickets."
  },
  hint:
    "Found in citrus fruits."
},

{
  category: "Science",
  question: "Which scientist proposed the three laws of motion?",
  options: [
    "Albert Einstein",
    "Galileo Galilei",
    "Isaac Newton",
    "Nikola Tesla"
  ],
  answer: "Isaac Newton",
  explanation:
    "Sir Isaac Newton formulated the three laws of motion and the law of gravitation.",
  wrongExplanations: {
    "Albert Einstein": "Known for relativity.",
    "Galileo Galilei": "Made important discoveries but not the three laws.",
    "Nikola Tesla": "Known for electrical engineering."
  },
  hint:
    "Gravity and the apple story."
},

{
  category: "Science",
  question: "Which part of the plant conducts photosynthesis?",
  options: [
    "Root",
    "Stem",
    "Leaf",
    "Flower"
  ],
  answer: "Leaf",
  explanation:
    "Leaves contain chlorophyll and are the main site of photosynthesis.",
  wrongExplanations: {
    "Root": "Absorbs water and minerals.",
    "Stem": "Supports the plant.",
    "Flower": "Reproductive part of the plant."
  },
  hint:
    "Green part of the plant."
},
{
  category: "Science",
  question: "Which organ in the human body produces insulin?",
  options: [
    "Liver",
    "Pancreas",
    "Kidney",
    "Heart"
  ],
  answer: "Pancreas",
  explanation:
    "The pancreas produces insulin, which helps regulate blood sugar levels.",
  wrongExplanations: {
    "Liver": "The liver stores glycogen but does not produce insulin.",
    "Kidney": "The kidneys filter blood and produce urine.",
    "Heart": "The heart pumps blood."
  },
  hint:
    "Important for diabetes."
},

{
  category: "Science",
  question: "What is the chemical symbol for gold?",
  options: [
    "Go",
    "Ag",
    "Au",
    "Gd"
  ],
  answer: "Au",
  explanation:
    "Au is the chemical symbol for gold, derived from the Latin word Aurum.",
  wrongExplanations: {
    "Go": "Not a valid chemical symbol.",
    "Ag": "Silver.",
    "Gd": "Gadolinium."
  },
  hint:
    "Aurum."
},

{
  category: "Science",
  question: "Which planet is the largest in the Solar System?",
  options: [
    "Earth",
    "Saturn",
    "Jupiter",
    "Neptune"
  ],
  answer: "Jupiter",
  explanation:
    "Jupiter is the largest planet in the Solar System.",
  wrongExplanations: {
    "Earth": "Much smaller.",
    "Saturn": "Second largest planet.",
    "Neptune": "A giant planet but smaller than Jupiter."
  },
  hint:
    "The Gas Giant King."
},

{
  category: "Science",
  question: "Which instrument is used to measure atmospheric pressure?",
  options: [
    "Thermometer",
    "Barometer",
    "Hygrometer",
    "Altimeter"
  ],
  answer: "Barometer",
  explanation:
    "A barometer measures atmospheric pressure.",
  wrongExplanations: {
    "Thermometer": "Measures temperature.",
    "Hygrometer": "Measures humidity.",
    "Altimeter": "Measures altitude."
  },
  hint:
    "Used in weather forecasting."
},

{
  category: "Science",
  question: "Which vitamin deficiency causes rickets?",
  options: [
    "Vitamin A",
    "Vitamin B12",
    "Vitamin C",
    "Vitamin D"
  ],
  answer: "Vitamin D",
  explanation:
    "Vitamin D deficiency causes rickets, especially in children.",
  wrongExplanations: {
    "Vitamin A": "Related to vision problems.",
    "Vitamin B12": "Related to anemia and nerve issues.",
    "Vitamin C": "Deficiency causes scurvy."
  },
  hint:
    "The sunshine vitamin."
},
{
    category: "Economics",
    question: "Which institution issues currency notes in India?",
    options: [
      "Reserve Bank of India",
      "State Bank of India",
      "Finance Commission",
      "NITI Aayog"
    ],
    answer: "Reserve Bank of India",
    explanation:
      "The RBI is responsible for issuing currency notes in India.",
    wrongExplanations: {
      "State Bank of India": "SBI is a commercial bank.",
      "Finance Commission": "It deals with financial distribution.",
      "NITI Aayog": "NITI Aayog is a policy think tank.",
    },
    hint: "It is India's central bank.",
  },
{
  category: "Economics",
  question: "Which institution issues currency notes in India?",
  options: [
    "Ministry of Finance",
    "Reserve Bank of India",
    "NITI Aayog",
    "State Bank of India"
  ],
  answer: "Reserve Bank of India",
  explanation:
    "The Reserve Bank of India is responsible for issuing currency notes in India except the one-rupee note.",
  wrongExplanations: {
    "Ministry of Finance": "The Ministry manages finances but does not issue most currency notes.",
    "NITI Aayog": "NITI Aayog is a policy think tank.",
    "State Bank of India": "SBI is a commercial bank."
  },
  hint:
    "Think of India's central bank."
},

{
  category: "Economics",
  question: "Inflation means:",
  options: [
    "Fall in prices",
    "Rise in general price level",
    "Increase in exports",
    "Decrease in population"
  ],
  answer: "Rise in general price level",
  explanation:
    "Inflation refers to a sustained increase in the general price level of goods and services.",
  wrongExplanations: {
    "Fall in prices": "This is called deflation.",
    "Increase in exports": "Exports may affect the economy but are not inflation.",
    "Decrease in population": "Population change is unrelated."
  },
  hint:
    "Think about what happens when everything becomes more expensive."
},

{
  category: "Economics",
  question: "GDP stands for:",
  options: [
    "Gross Domestic Product",
    "General Development Plan",
    "Global Domestic Product",
    "Gross Development Policy"
  ],
  answer: "Gross Domestic Product",
  explanation:
    "GDP measures the total value of goods and services produced within a country.",
  wrongExplanations: {
    "General Development Plan": "Not a standard economic term.",
    "Global Domestic Product": "Incorrect expansion.",
    "Gross Development Policy": "Incorrect expansion."
  },
  hint:
    "One of the most common economics abbreviations."
},

{
  category: "Economics",
  question: "Which of the following is a direct tax?",
  options: [
    "GST",
    "Customs Duty",
    "Income Tax",
    "Excise Duty"
  ],
  answer: "Income Tax",
  explanation:
    "Income Tax is paid directly by individuals and organizations to the government.",
  wrongExplanations: {
    "GST": "GST is an indirect tax.",
    "Customs Duty": "Customs Duty is an indirect tax.",
    "Excise Duty": "Excise Duty is an indirect tax."
  },
  hint:
    "Think of the tax deducted from earnings."
},

{
  category: "Economics",
  question: "Which sector is known as the primary sector?",
  options: [
    "Agriculture",
    "Manufacturing",
    "Banking",
    "IT Services"
  ],
  answer: "Agriculture",
  explanation:
    "The primary sector includes activities involving natural resources such as farming, fishing and forestry.",
  wrongExplanations: {
    "Manufacturing": "This belongs to the secondary sector.",
    "Banking": "Banking belongs to the tertiary sector.",
    "IT Services": "IT belongs to the tertiary sector."
  },
  hint:
    "Think of activities directly connected with nature."
},
  {
  category: "Economics",
  question: "Which bank is known as the Central Bank of India?",
  options: [
    "State Bank of India",
    "Punjab National Bank",
    "Reserve Bank of India",
    "Bank of Baroda"
  ],
  answer: "Reserve Bank of India",
  explanation:
    "The Reserve Bank of India (RBI) is India's central banking institution.",
  wrongExplanations: {
    "State Bank of India": "SBI is the largest commercial bank, not the central bank.",
    "Punjab National Bank": "PNB is a public sector bank.",
    "Bank of Baroda": "Bank of Baroda is a commercial bank."
  },
  hint:
    "Issues currency and controls monetary policy."
},

{
  category: "Economics",
  question: "What does GST stand for?",
  options: [
    "General Sales Tax",
    "Goods and Services Tax",
    "Government Service Tax",
    "Goods Supply Tax"
  ],
  answer: "Goods and Services Tax",
  explanation:
    "GST is a unified indirect tax system introduced in India in 2017.",
  wrongExplanations: {
    "General Sales Tax": "Incorrect expansion.",
    "Government Service Tax": "Incorrect expansion.",
    "Goods Supply Tax": "Incorrect expansion."
  },
  hint:
    "A major tax reform in India."
},

{
  category: "Economics",
  question: "Which factor of production receives wages?",
  options: [
    "Land",
    "Labour",
    "Capital",
    "Entrepreneur"
  ],
  answer: "Labour",
  explanation:
    "Labour receives wages as a reward for its contribution to production.",
  wrongExplanations: {
    "Land": "Land receives rent.",
    "Capital": "Capital receives interest.",
    "Entrepreneur": "Entrepreneur receives profit."
  },
  hint:
    "Human effort in production."
},

{
  category: "Economics",
  question: "What is the basic economic problem faced by all societies?",
  options: [
    "Inflation",
    "Scarcity",
    "Taxation",
    "Population"
  ],
  answer: "Scarcity",
  explanation:
    "Resources are limited while human wants are unlimited, creating scarcity.",
  wrongExplanations: {
    "Inflation": "Not every society constantly faces inflation.",
    "Taxation": "Taxation is a policy issue.",
    "Population": "Population itself is not the basic economic problem."
  },
  hint:
    "Unlimited wants, limited resources."
},

{
  category: "Economics",
  question: "Which economic sector includes banking, education and healthcare?",
  options: [
    "Primary Sector",
    "Secondary Sector",
    "Tertiary Sector",
    "Agricultural Sector"
  ],
  answer: "Tertiary Sector",
  explanation:
    "The tertiary sector consists of services such as banking, education, transport and healthcare.",
  wrongExplanations: {
    "Primary Sector": "Primary sector involves extraction of natural resources.",
    "Secondary Sector": "Secondary sector involves manufacturing.",
    "Agricultural Sector": "Agriculture belongs to the primary sector."
  },
  hint:
    "Service sector."
},
{
    category: "ICT",
    question: "Which of the following is an operating system?",
    options: [
      "Windows",
      "Google",
      "Intel",
      "Python"
    ],
    answer: "Windows",
    explanation:
      "Windows is an operating system developed by Microsoft.",
    wrongExplanations: {
      "Google": "Google is a company and search engine.",
      "Intel": "Intel manufactures processors.",
      "Python": "Python is a programming language.",
    },
    hint: "It manages computer hardware and software.",
  },

  {
    category: "Geography",
    question: "Which is the highest mountain peak in the world?",
    options: [
      "Mount Everest",
      "Kanchenjunga",
      "K2",
      "Nanga Parbat"
    ],
    answer: "Mount Everest",
    explanation:
      "Mount Everest is the highest mountain peak above sea level.",
    wrongExplanations: {
      "Kanchenjunga": "It is the third highest peak.",
      "K2": "K2 is the second highest mountain.",
      "Nanga Parbat": "It is a major Himalayan peak but not the highest.",
    },
    hint: "Located in the Himalayas.",
  },
 {
  category: "Geography",
  question: "Which is the smallest continent in the world?",
  options: [
    "Europe",
    "Australia",
    "South America",
    "Antarctica"
  ],
  answer: "Australia",
  explanation:
    "Australia is the smallest continent by land area.",
  wrongExplanations: {
    "Europe": "Europe is larger than Australia.",
    "South America": "South America is much larger.",
    "Antarctica": "Antarctica is larger than Australia."
  },
  hint:
    "Also a country and a continent."
},

{
  category: "Geography",
  question: "Which is the largest island in the world?",
  options: [
    "Madagascar",
    "Greenland",
    "Sri Lanka",
    "Borneo"
  ],
  answer: "Greenland",
  explanation:
    "Greenland is the world's largest island that is not considered a continent.",
  wrongExplanations: {
    "Madagascar": "Madagascar is much smaller.",
    "Sri Lanka": "Sri Lanka is a relatively small island.",
    "Borneo": "Borneo is large but smaller than Greenland."
  },
  hint:
    "Located between the Arctic and Atlantic Oceans."
},

{
  category: "Geography",
  question: "Which Indian state has the largest area?",
  options: [
    "Madhya Pradesh",
    "Rajasthan",
    "Maharashtra",
    "Uttar Pradesh"
  ],
  answer: "Rajasthan",
  explanation:
    "Rajasthan is the largest Indian state by area.",
  wrongExplanations: {
    "Madhya Pradesh": "Second largest state by area.",
    "Maharashtra": "Smaller than Rajasthan.",
    "Uttar Pradesh": "Largest by population, not area."
  },
  hint:
    "Known for the Thar Desert."
},

{
  category: "Geography",
  question: "Which line divides the Earth into Northern and Southern Hemispheres?",
  options: [
    "Prime Meridian",
    "Tropic of Cancer",
    "Equator",
    "Arctic Circle"
  ],
  answer: "Equator",
  explanation:
    "The Equator is an imaginary line at 0° latitude dividing the Earth into two hemispheres.",
  wrongExplanations: {
    "Prime Meridian": "Divides East and West hemispheres.",
    "Tropic of Cancer": "Located at 23.5° North.",
    "Arctic Circle": "Located at 66.5° North."
  },
  hint:
    "0° latitude."
},

{
  category: "Geography",
  question: "Which is the highest plateau in the world?",
  options: [
    "Deccan Plateau",
    "Tibetan Plateau",
    "Colorado Plateau",
    "Iranian Plateau"
  ],
  answer: "Tibetan Plateau",
  explanation:
    "The Tibetan Plateau is the highest and largest plateau in the world.",
  wrongExplanations: {
    "Deccan Plateau": "Located in India.",
    "Colorado Plateau": "Located in the USA.",
    "Iranian Plateau": "Lower than the Tibetan Plateau."
  },
  hint:
    "Known as the Roof of the World."
},
  {
  category: "Geography",
  question: "Which is the largest ocean on Earth?",
  options: [
    "Indian Ocean",
    "Atlantic Ocean",
    "Pacific Ocean",
    "Arctic Ocean"
  ],
  answer: "Pacific Ocean",
  explanation:
    "The Pacific Ocean is the largest and deepest ocean on Earth.",
  wrongExplanations: {
    "Indian Ocean": "Third largest ocean.",
    "Atlantic Ocean": "Second largest ocean.",
    "Arctic Ocean": "Smallest ocean."
  },
  hint:
    "Located between Asia and the Americas."
},

{
  category: "Geography",
  question: "Which Indian river is known as the 'Ganga of the South'?",
  options: [
    "Krishna",
    "Kaveri",
    "Godavari",
    "Mahanadi"
  ],
  answer: "Godavari",
  explanation:
    "The Godavari is often called the Ganga of South India because of its length and importance.",
  wrongExplanations: {
    "Krishna": "Important river but not known by this title.",
    "Kaveri": "Known for irrigation in South India.",
    "Mahanadi": "Flows mainly through Odisha."
  },
  hint:
    "Longest river of Peninsular India."
},

{
  category: "Geography",
  question: "Which layer of the Earth lies between the crust and the core?",
  options: [
    "Mantle",
    "Lithosphere",
    "Hydrosphere",
    "Atmosphere"
  ],
  answer: "Mantle",
  explanation:
    "The mantle lies beneath the crust and above the core.",
  wrongExplanations: {
    "Lithosphere": "Includes the crust and upper mantle.",
    "Hydrosphere": "Refers to Earth's water.",
    "Atmosphere": "The gaseous layer surrounding Earth."
  },
  hint:
    "The thickest layer of Earth."
},

{
  category: "Geography",
  question: "Which state of India is known as the 'Land of Five Rivers'?",
  options: [
    "Haryana",
    "Punjab",
    "Rajasthan",
    "Uttar Pradesh"
  ],
  answer: "Punjab",
  explanation:
    "Punjab derives its name from the Persian words for 'five waters' or rivers.",
  wrongExplanations: {
    "Haryana": "Neighboring state.",
    "Rajasthan": "Known for deserts.",
    "Uttar Pradesh": "Most populous state."
  },
  hint:
    "Home of the Sikh heartland."
},

{
  category: "Geography",
  question: "What is the imaginary line passing through the North and South Poles called?",
  options: [
    "Latitude",
    "Equator",
    "Longitude",
    "Tropic of Cancer"
  ],
  answer: "Longitude",
  explanation:
    "Lines of longitude run from the North Pole to the South Pole.",
  wrongExplanations: {
    "Latitude": "Runs east-west.",
    "Equator": "A specific latitude at 0°.",
    "Tropic of Cancer": "Located at 23.5° North."
  },
  hint:
    "Meridians."
},
{
  category: "Geography",
  question: "Which is the largest freshwater lake in India?",
  options: [
    "Dal Lake",
    "Wular Lake",
    "Loktak Lake",
    "Chilika Lake"
  ],
  answer: "Wular Lake",
  explanation:
    "Wular Lake in Jammu and Kashmir is the largest freshwater lake in India.",
  wrongExplanations: {
    "Dal Lake": "A famous lake in Srinagar.",
    "Loktak Lake": "Largest freshwater lake in Northeast India.",
    "Chilika Lake": "Largest brackish water lagoon in India."
  },
  hint:
    "Located in Jammu and Kashmir."
},

{
  category: "Geography",
  question: "Which is the longest mountain range in the world?",
  options: [
    "Himalayas",
    "Andes",
    "Rockies",
    "Alps"
  ],
  answer: "Andes",
  explanation:
    "The Andes Mountains in South America form the longest continental mountain range in the world.",
  wrongExplanations: {
    "Himalayas": "Highest mountain range, not the longest.",
    "Rockies": "Located in North America.",
    "Alps": "Located in Europe."
  },
  hint:
    "Runs along western South America."
},

{
  category: "Geography",
  question: "Which Indian state has the longest coastline?",
  options: [
    "Tamil Nadu",
    "Andhra Pradesh",
    "Gujarat",
    "Maharashtra"
  ],
  answer: "Gujarat",
  explanation:
    "Gujarat has the longest coastline among Indian states.",
  wrongExplanations: {
    "Tamil Nadu": "Long coastline but shorter than Gujarat.",
    "Andhra Pradesh": "Second longest coastline.",
    "Maharashtra": "Important coastline but shorter."
  },
  hint:
    "Home of Kutch."
},

{
  category: "Geography",
  question: "Which river is known as the 'Sorrow of Bihar'?",
  options: [
    "Ganga",
    "Kosi",
    "Yamuna",
    "Son"
  ],
  answer: "Kosi",
  explanation:
    "The Kosi River frequently changes course and causes devastating floods in Bihar.",
  wrongExplanations: {
    "Ganga": "Major river but not known by this title.",
    "Yamuna": "Flows through northern India.",
    "Son": "Important tributary but not called the Sorrow of Bihar."
  },
  hint:
    "A flood-prone Himalayan river."
},

{
  category: "Geography",
  question: "What is the capital city of Australia?",
  options: [
    "Sydney",
    "Melbourne",
    "Canberra",
    "Perth"
  ],
  answer: "Canberra",
  explanation:
    "Canberra is the capital city of Australia.",
  wrongExplanations: {
    "Sydney": "Largest city but not the capital.",
    "Melbourne": "Major city but not the capital.",
    "Perth": "Located in Western Australia."
  },
  hint:
    "Built between Sydney and Melbourne."
},
{
    category: "English",
    question: "Choose the correct plural form of 'Child'.",
    options: ["Children", "Child"],
    answer: "Children",
    explanation: "The correct plural of 'child' is 'children'.",
    wrongExplanations: {
      Child: "'Child' is singular; plural is 'children'.",
    },
    hint: "Irregular plural form.",
  },
{
  category: "English",
  question: "Choose the correct synonym of 'Liberty'.",
  options: [
    "Freedom",
    "Punishment",
    "Fear",
    "Control"
  ],
  answer: "Freedom",
  explanation:
    "Liberty means freedom or the state of being free from unnecessary restrictions.",
  wrongExplanations: {
    "Punishment":
      "Punishment is the opposite of liberty.",
    "Fear":
      "Fear is an emotion and not a synonym of liberty.",
    "Control":
      "Control implies restriction rather than freedom."
  },
  hint:
    "Liberty is a key concept in political science and democracy."
},
  {
  category: "English",
  question: "Choose the synonym of 'Brave'.",
  options: [
    "Cowardly",
    "Fearless",
    "Weak",
    "Lazy"
  ],
  answer: "Fearless",
  explanation:
    "Brave means fearless, courageous or willing to face danger.",
  wrongExplanations: {
    "Cowardly": "Cowardly is the opposite of brave.",
    "Weak": "Weak refers to lack of strength, not courage.",
    "Lazy": "Lazy means unwilling to work."
  },
  hint:
    "Look for the word closest to courage."
},

{
  category: "English",
  question: "Choose the antonym of 'Victory'.",
  options: [
    "Success",
    "Triumph",
    "Defeat",
    "Achievement"
  ],
  answer: "Defeat",
  explanation:
    "Defeat is the opposite of victory.",
  wrongExplanations: {
    "Success": "Success is similar to victory.",
    "Triumph": "Triumph means victory.",
    "Achievement": "Achievement is generally a positive accomplishment."
  },
  hint:
    "Find the opposite meaning."
},

{
  category: "English",
  question: "Identify the correct sentence.",
  options: [
    "She go to school every day.",
    "She goes to school every day.",
    "She going to school every day.",
    "She gone to school every day."
  ],
  answer: "She goes to school every day.",
  explanation:
    "A singular subject in the present tense takes 'goes'.",
  wrongExplanations: {
    "She go to school every day.": "Verb agreement is incorrect.",
    "She going to school every day.": "The sentence is grammatically incomplete.",
    "She gone to school every day.": "Wrong verb form."
  },
  hint:
    "Check subject-verb agreement."
},

{
  category: "English",
  question: "What is the plural form of 'Child'?",
  options: [
    "Childs",
    "Children",
    "Childes",
    "Childrens"
  ],
  answer: "Children",
  explanation:
    "Children is the irregular plural form of child.",
  wrongExplanations: {
    "Childs": "Incorrect plural form.",
    "Childes": "Not an accepted English word.",
    "Childrens": "Double plural error."
  },
  hint:
    "This is an irregular noun."
},

{
  category: "English",
  question: "Choose the correctly spelled word.",
  options: [
    "Recieve",
    "Receive",
    "Receeve",
    "Receve"
  ],
  answer: "Receive",
  explanation:
    "Receive follows the rule 'i before e except after c'.",
  wrongExplanations: {
    "Recieve": "Common spelling mistake.",
    "Receeve": "Incorrect spelling.",
    "Receve": "Missing letter."
  },
  hint:
    "Remember the spelling rule involving 'c'."
},
{
  category: "English",
  question: "Choose the correct antonym of 'Ancient'.",
  options: [
    "Old",
    "Modern",
    "Historic",
    "Traditional"
  ],
  answer: "Modern",
  explanation:
    "Modern refers to the present or recent times, which is the opposite of ancient.",
  wrongExplanations: {
    "Old": "Old is similar in meaning to ancient.",
    "Historic": "Historic refers to something important in history.",
    "Traditional": "Traditional refers to customs and practices."
  },
  hint:
    "Look for the opposite of very old."
},

{
  category: "English",
  question: "Identify the noun in the sentence: 'The boy kicked the ball.'",
  options: [
    "kicked",
    "boy",
    "the",
    "ball"
  ],
  answer: "boy",
  explanation:
    "A noun names a person, place, thing or idea. 'Boy' is a noun.",
  wrongExplanations: {
    "kicked": "Kicked is a verb.",
    "the": "The is an article.",
    "ball": "Ball is also a noun, but the question asks for a noun and 'boy' is the expected answer."
  },
  hint:
    "A noun names a person, place or thing."
},

{
  category: "English",
  question: "Choose the correctly punctuated sentence.",
  options: [
    "Lets go home.",
    "Let's go home.",
    "Lets' go home.",
    "Lets go home's."
  ],
  answer: "Let's go home.",
  explanation:
    "Let's is the contraction of 'Let us'.",
  wrongExplanations: {
    "Lets go home.": "Missing apostrophe.",
    "Lets' go home.": "Incorrect apostrophe placement.",
    "Lets go home's.": "Incorrect grammar and punctuation."
  },
  hint:
    "Think of the contraction for 'Let us'."
},

{
  category: "English",
  question: "What is the past tense of 'write'?",
  options: [
    "Written",
    "Wrote",
    "Writing",
    "Writes"
  ],
  answer: "Wrote",
  explanation:
    "Wrote is the simple past tense of write.",
  wrongExplanations: {
    "Written": "Written is the past participle.",
    "Writing": "Writing is the present participle.",
    "Writes": "Writes is present tense."
  },
  hint:
    "Simple past tense."
},

{
  category: "English",
  question: "Choose the synonym of 'Rapid'.",
  options: [
    "Slow",
    "Fast",
    "Weak",
    "Quiet"
  ],
  answer: "Fast",
  explanation:
    "Rapid means fast or quick.",
  wrongExplanations: {
    "Slow": "Slow is the opposite of rapid.",
    "Weak": "Weak relates to strength, not speed.",
    "Quiet": "Quiet relates to sound."
  },
  hint:
    "Think speed."
},
{
  category: "English",
  question: "Choose the correct synonym of 'Brave'.",
  options: [
    "Cowardly",
    "Fearless",
    "Weak",
    "Timid"
  ],
  answer: "Fearless",
  explanation:
    "Fearless means showing courage and confidence in difficult situations.",
  wrongExplanations: {
    "Cowardly": "This is the opposite of brave.",
    "Weak": "Weak refers to strength, not courage.",
    "Timid": "Timid means lacking confidence."
  },
  hint:
    "A person who is not afraid."
},

{
  category: "English",
  question: "Choose the correct antonym of 'Victory'.",
  options: [
    "Success",
    "Achievement",
    "Defeat",
    "Triumph"
  ],
  answer: "Defeat",
  explanation:
    "Defeat is the opposite of victory.",
  wrongExplanations: {
    "Success": "Success is similar to victory.",
    "Achievement": "Achievement is a positive outcome.",
    "Triumph": "Triumph is another word for victory."
  },
  hint:
    "Losing instead of winning."
},

{
  category: "English",
  question: "Identify the adjective in the sentence: 'She bought a beautiful dress.'",
  options: [
    "She",
    "Bought",
    "Beautiful",
    "Dress"
  ],
  answer: "Beautiful",
  explanation:
    "An adjective describes a noun. Here, 'beautiful' describes the dress.",
  wrongExplanations: {
    "She": "She is a pronoun.",
    "Bought": "Bought is a verb.",
    "Dress": "Dress is a noun."
  },
  hint:
    "Which word describes the dress?"
},

{
  category: "English",
  question: "Choose the correctly spelled word.",
  options: [
    "Accomodation",
    "Acommodation",
    "Accommodation",
    "Accommadation"
  ],
  answer: "Accommodation",
  explanation:
    "Accommodation is the correct spelling.",
  wrongExplanations: {
    "Accomodation": "Missing a 'm'.",
    "Acommodation": "Missing a 'c' and 'm'.",
    "Accommadation": "Incorrect spelling."
  },
  hint:
    "Double c, double m."
},

{
  category: "English",
  question: "What is the plural form of 'Child'?",
  options: [
    "Childs",
    "Children",
    "Childes",
    "Childrens"
  ],
  answer: "Children",
  explanation:
    "Children is the irregular plural form of child.",
  wrongExplanations: {
    "Childs": "Incorrect plural form.",
    "Childes": "Not a valid English word.",
    "Childrens": "Incorrect plural form."
  },
  hint:
    "An irregular plural noun."
},
{
  category: "English",
  question: "Choose the correct synonym of 'Ancient'.",
  options: [
    "Modern",
    "Old",
    "Future",
    "Young"
  ],
  answer: "Old",
  explanation:
    "Ancient means very old or belonging to a time long ago.",
  wrongExplanations: {
    "Modern": "Opposite of ancient.",
    "Future": "Refers to time yet to come.",
    "Young": "Opposite meaning."
  },
  hint:
    "Something from long ago."
},

{
  category: "English",
  question: "Choose the correct antonym of 'Expand'.",
  options: [
    "Increase",
    "Enlarge",
    "Contract",
    "Extend"
  ],
  answer: "Contract",
  explanation:
    "Contract means to become smaller, which is the opposite of expand.",
  wrongExplanations: {
    "Increase": "Similar to expand.",
    "Enlarge": "Similar to expand.",
    "Extend": "Similar to expand."
  },
  hint:
    "To become smaller."
},

{
  category: "English",
  question: "Identify the noun in the sentence: 'The boy kicked the ball.'",
  options: [
    "Kicked",
    "The",
    "Boy",
    "The"
  ],
  answer: "Boy",
  explanation:
    "A noun names a person, place, thing or idea. 'Boy' is a noun.",
  wrongExplanations: {
    "Kicked": "This is a verb.",
    "The": "This is an article."
  },
  hint:
    "A person is involved."
},

{
  category: "English",
  question: "Choose the correctly spelled word.",
  options: [
    "Definately",
    "Definetely",
    "Definitely",
    "Definatly"
  ],
  answer: "Definitely",
  explanation:
    "Definitely is the correct spelling.",
  wrongExplanations: {
    "Definately": "Common misspelling.",
    "Definetely": "Incorrect spelling.",
    "Definatly": "Incorrect spelling."
  },
  hint:
    "Frequently misspelled word."
},

{
  category: "English",
  question: "Fill in the blank: She _____ to school every day.",
  options: [
    "go",
    "goes",
    "going",
    "gone"
  ],
  answer: "goes",
  explanation:
    "For third-person singular subjects in the present tense, we use 'goes'.",
  wrongExplanations: {
    "go": "Incorrect subject-verb agreement.",
    "going": "Present participle.",
    "gone": "Past participle."
  },
  hint:
    "Third-person singular."
},
{
    category: "Mizoram GK",
    question: "Which language is primarily spoken in Mizoram?",
    options: [
      "Mizo",
      "Hindi",
      "Bengali",
      "Nepali"
    ],
    answer: "Mizo",
    explanation:
      "Mizo is the primary language spoken in Mizoram.",
    wrongExplanations: {
      "Hindi": "Hindi is widely understood but not the primary language.",
      "Bengali": "Bengali is mainly spoken in West Bengal.",
      "Nepali": "Nepali is not the primary language of Mizoram.",
    },
    hint: "It is also called Lusei language.",
  },
{
  category: "Mizoram GK",
  question: "In which year did Mizoram become a full-fledged state of India?",
  options: [
    "1972",
    "1986",
    "1987",
    "1990"
  ],
  answer: "1987",
  explanation:
    "Mizoram became the 23rd state of India on 20 February 1987.",
  wrongExplanations: {
    "1972": "Mizoram became a Union Territory in 1972, not a state.",
    "1986": "1986 was the year of the Mizoram Peace Accord.",
    "1990": "Mizoram had already become a state by then."
  },
  hint:
    "Think: Peace Accord first, statehood next."
},

{
  category: "Mizoram GK",
  question: "What is the official language of Mizoram?",
  options: [
    "Hindi",
    "English",
    "Mizo",
    "Bengali"
  ],
  answer: "Mizo",
  explanation:
    "Mizo is the principal official language of Mizoram and is widely spoken throughout the state.",
  wrongExplanations: {
    "Hindi": "Hindi is widely understood but not the principal official language.",
    "English": "English is used in administration and education but is not the primary language.",
    "Bengali": "Bengali is not the official language of Mizoram."
  },
  hint:
    "Think of the language spoken by the majority community."
},

{
  category: "Mizoram GK",
  question: "Which district is known as the 'Rice Bowl of Mizoram'?",
  options: [
    "Aizawl",
    "Champhai",
    "Kolasib",
    "Mamit"
  ],
  answer: "Champhai",
  explanation:
    "Champhai is often called the Rice Bowl of Mizoram because of its extensive paddy cultivation.",
  wrongExplanations: {
    "Aizawl": "Aizawl is the capital district.",
    "Kolasib": "Kolasib is agriculturally important but not known by this title.",
    "Mamit": "Mamit is known for forests and agriculture but not as the Rice Bowl."
  },
  hint:
    "Think of the district bordering Myanmar with large plains."
},

{
  category: "Mizoram GK",
  question: "Who was the first Chief Minister of Mizoram after it became a state?",
  options: [
    "Laldenga",
    "Ch. Chhunga",
    "Zoramthanga",
    "Lal Thanhawla"
  ],
  answer: "Laldenga",
  explanation:
    "Laldenga became the first Chief Minister of Mizoram after statehood in 1987.",
  wrongExplanations: {
    "Ch. Chhunga": "He was an important leader but not the first CM after statehood.",
    "Zoramthanga": "He became Chief Minister later.",
    "Lal Thanhawla": "He served as Chief Minister later."
  },
  hint:
    "Think of the leader associated with the Peace Accord."
},

{
  category: "Mizoram GK",
  question: "Which international country shares the longest border with Mizoram?",
  options: [
    "Bangladesh",
    "Bhutan",
    "Nepal",
    "China"
  ],
  answer: "Bangladesh",
  explanation:
    "Mizoram shares a longer international border with Bangladesh than with Myanmar.",
  wrongExplanations: {
    "Bhutan": "Bhutan does not border Mizoram.",
    "Nepal": "Nepal does not border Mizoram.",
    "China": "China does not border Mizoram."
  },
  hint:
    "Think west of Mizoram."
},
  {
  category: "Mizoram GK",
  question: "What is the capital of Mizoram?",
  options: [
    "Lunglei",
    "Champhai",
    "Aizawl",
    "Kolasib"
  ],
  answer: "Aizawl",
  explanation:
    "Aizawl is the capital city and administrative headquarters of Mizoram.",
  wrongExplanations: {
    "Lunglei": "Lunglei is an important district headquarters but not the capital.",
    "Champhai": "Champhai is a border district.",
    "Kolasib": "Kolasib is a district but not the capital."
  },
  hint:
    "Largest city in Mizoram."
},

{
  category: "Mizoram GK",
  question: "On which date did Mizoram attain statehood?",
  options: [
    "20 February 1987",
    "30 June 1986",
    "15 August 1987",
    "26 January 1987"
  ],
  answer: "20 February 1987",
  explanation:
    "Mizoram officially became the 23rd state of India on 20 February 1987.",
  wrongExplanations: {
    "30 June 1986": "This is associated with the Mizoram Peace Accord.",
    "15 August 1987": "Incorrect date.",
    "26 January 1987": "Incorrect date."
  },
  hint:
    "Statehood came after the Peace Accord."
},

{
  category: "Mizoram GK",
  question: "Which district shares an international border with Bangladesh?",
  options: [
    "Champhai",
    "Aizawl",
    "Mamit",
    "Saitual"
  ],
  answer: "Mamit",
  explanation:
    "Mamit district shares part of Mizoram's international border with Bangladesh.",
  wrongExplanations: {
    "Champhai": "Champhai borders Myanmar.",
    "Aizawl": "Aizawl is an inland district.",
    "Saitual": "Saitual does not border Bangladesh."
  },
  hint:
    "Think western Mizoram."
},

{
  category: "Mizoram GK",
  question: "Which festival is celebrated after the completion of harvesting in Mizoram?",
  options: [
    "Chapchar Kut",
    "Mim Kut",
    "Pawl Kut",
    "Thalfavang Kut"
  ],
  answer: "Pawl Kut",
  explanation:
    "Pawl Kut is traditionally celebrated after the harvest season and is associated with thanksgiving.",
  wrongExplanations: {
    "Chapchar Kut": "Celebrated after jungle clearing.",
    "Mim Kut": "Associated with maize harvest and remembrance.",
    "Thalfavang Kut": "Associated with agricultural activities before harvest."
  },
  hint:
    "Harvest festival."
},

{
  category: "Mizoram GK",
  question: "The Mizoram Legislative Assembly currently has how many elected members?",
  options: [
    "30",
    "35",
    "40",
    "60"
  ],
  answer: "40",
  explanation:
    "The Mizoram Legislative Assembly consists of 40 elected members.",
  wrongExplanations: {
    "30": "Too few.",
    "35": "Incorrect number.",
    "60": "Several larger states have around this size, not Mizoram."
  },
  hint:
    "Think of the current Assembly strength."
},
{
  category: "Mizoram GK",
  question: "Which district headquarters is known as the second largest town in Mizoram?",
  options: [
    "Champhai",
    "Serchhip",
    "Lunglei",
    "Kolasib"
  ],
  answer: "Lunglei",
  explanation:
    "Lunglei is widely recognized as the second largest town in Mizoram after Aizawl.",
  wrongExplanations: {
    "Champhai": "Champhai is an important border town but not the second largest.",
    "Serchhip": "Serchhip is smaller than Lunglei.",
    "Kolasib": "Kolasib is not the second largest town."
  },
  hint:
    "A major town in southern Mizoram."
},

{
  category: "Mizoram GK",
  question: "Mizoram shares an international border with which two countries?",
  options: [
    "Bangladesh and Nepal",
    "Myanmar and Nepal",
    "Bangladesh and Myanmar",
    "China and Myanmar"
  ],
  answer: "Bangladesh and Myanmar",
  explanation:
    "Mizoram shares international borders with Bangladesh to the west and Myanmar to the east and south.",
  wrongExplanations: {
    "Bangladesh and Nepal": "Nepal does not border Mizoram.",
    "Myanmar and Nepal": "Nepal does not border Mizoram.",
    "China and Myanmar": "China does not border Mizoram."
  },
  hint:
    "One country west, one country east."
},

{
  category: "Mizoram GK",
  question: "Which river is one of the longest and most important rivers in Mizoram?",
  options: [
    "Tlawng",
    "Yamuna",
    "Teesta",
    "Narmada"
  ],
  answer: "Tlawng",
  explanation:
    "The Tlawng River is one of the major rivers of Mizoram and flows through important regions of the state.",
  wrongExplanations: {
    "Yamuna": "Yamuna flows in northern India.",
    "Teesta": "Teesta flows mainly through Sikkim and West Bengal.",
    "Narmada": "Narmada flows in central India."
  },
  hint:
    "A major river near Aizawl region."
},

{
  category: "Mizoram GK",
  question: "What is the official state animal of Mizoram?",
  options: [
    "Clouded Leopard",
    "Tiger",
    "Elephant",
    "Red Panda"
  ],
  answer: "Clouded Leopard",
  explanation:
    "The Clouded Leopard is the state animal of Mizoram.",
  wrongExplanations: {
    "Tiger": "Tiger is not the state animal of Mizoram.",
    "Elephant": "Elephant is not the official state animal.",
    "Red Panda": "Red Panda is associated with Himalayan regions."
  },
  hint:
    "A rare wild cat."
},

{
  category: "Mizoram GK",
  question: "Which city is known as the gateway to Mizoram from Assam?",
  options: [
    "Champhai",
    "Kolasib",
    "Vairengte",
    "Siaha"
  ],
  answer: "Vairengte",
  explanation:
    "Vairengte serves as the main entry point into Mizoram from Assam via National Highway routes.",
  wrongExplanations: {
    "Champhai": "Champhai is a border town with Myanmar.",
    "Kolasib": "Kolasib is a district headquarters.",
    "Siaha": "Siaha is located in southern Mizoram."
  },
  hint:
    "Think of the Assam-Mizoram road entry."
},
{
    category: "Current Affairs",
    question: "What is the minimum voting age in India?",
    options: [
      "18 years",
      "21 years",
      "16 years",
      "25 years"
    ],
    answer: "18 years",
    explanation:
      "The voting age in India was reduced from 21 to 18 by the 61st Constitutional Amendment.",
    wrongExplanations: {
      "21 years": "This was the old voting age.",
      "16 years": "Too young under Indian law.",
      "25 years": "This is the minimum age for some elections, not voting.",
    },
    hint: "Young adults can vote after school age.",
  },
  {
  category: "Current Affairs",
  question: "Who is the constitutional head of India?",
  options: [
    "Prime Minister",
    "President",
    "Vice-President",
    "Chief Justice of India"
  ],
  answer: "President",
  explanation:
    "The President is the constitutional head of the Republic of India.",
  wrongExplanations: {
    "Prime Minister": "Head of Government, not Head of State.",
    "Vice-President": "Second highest constitutional office.",
    "Chief Justice of India": "Head of the Judiciary."
  },
  hint:
    "Head of State."
},

{
  category: "Current Affairs",
  question: "Which institution conducts the Civil Services Examination in India?",
  options: [
    "SSC",
    "NTA",
    "UPSC",
    "UGC"
  ],
  answer: "UPSC",
  explanation:
    "The Union Public Service Commission conducts the Civil Services Examination.",
  wrongExplanations: {
    "SSC": "Conducts various central government recruitment exams.",
    "NTA": "Conducts entrance examinations.",
    "UGC": "Regulates higher education."
  },
  hint:
    "IAS, IPS and IFS recruitment."
},

{
  category: "Current Affairs",
  question: "How many Houses are there in the Parliament of India?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  answer: "Two",
  explanation:
    "The Indian Parliament consists of Lok Sabha and Rajya Sabha.",
  wrongExplanations: {
    "One": "India has a bicameral Parliament.",
    "Three": "Incorrect.",
    "Four": "Incorrect."
  },
  hint:
    "Bicameral legislature."
},

{
  category: "Current Affairs",
  question: "Which day is celebrated as National Voters' Day in India?",
  options: [
    "25 January",
    "26 January",
    "15 August",
    "2 October"
  ],
  answer: "25 January",
  explanation:
    "National Voters' Day is celebrated on 25 January every year.",
  wrongExplanations: {
    "26 January": "Republic Day.",
    "15 August": "Independence Day.",
    "2 October": "Gandhi Jayanti."
  },
  hint:
    "One day before Republic Day."
},

{
  category: "Current Affairs",
  question: "Which ministry is primarily responsible for conducting the Census of India?",
  options: [
    "Ministry of Finance",
    "Ministry of Home Affairs",
    "Ministry of Education",
    "Ministry of External Affairs"
  ],
  answer: "Ministry of Home Affairs",
  explanation:
    "The Office of the Registrar General and Census Commissioner functions under the Ministry of Home Affairs.",
  wrongExplanations: {
    "Ministry of Finance": "Handles financial matters.",
    "Ministry of Education": "Handles education policy.",
    "Ministry of External Affairs": "Handles foreign affairs."
  },
  hint:
    "Internal administration ministry."
},
  {
  category: "Mizoram GK",
  question: "Which district of Mizoram is famous for the Blue Mountain (Phawngpui)?",
  options: [
    "Champhai",
    "Siaha",
    "Lawngtlai",
    "Mamit"
  ],
  answer: "Siaha",
  explanation:
    "Phawngpui, the highest peak in Mizoram, is located in Siaha district.",
  wrongExplanations: {
    "Champhai": "Known for rice cultivation and Myanmar border trade.",
    "Lawngtlai": "Located in southern Mizoram but not home to Phawngpui.",
    "Mamit": "Western district bordering Bangladesh."
  },
  hint:
    "Home of Mizoram's highest peak."
},

{
  category: "Mizoram GK",
  question: "What is the highest peak in Mizoram?",
  options: [
    "Reiek Tlang",
    "Lengteng",
    "Phawngpui",
    "Hmuifang"
  ],
  answer: "Phawngpui",
  explanation:
    "Phawngpui, also known as Blue Mountain, is the highest peak in Mizoram.",
  wrongExplanations: {
    "Reiek Tlang": "Popular tourist destination.",
    "Lengteng": "A major mountain but not the highest.",
    "Hmuifang": "Known for tourism and scenic beauty."
  },
  hint:
    "Blue Mountain."
},

{
  category: "Mizoram GK",
  question: "Which Mizoram festival is celebrated after jungle clearing for jhum cultivation?",
  options: [
    "Pawl Kut",
    "Chapchar Kut",
    "Mim Kut",
    "Thalfavang Kut"
  ],
  answer: "Chapchar Kut",
  explanation:
    "Chapchar Kut is celebrated after the completion of jungle clearing before burning for jhum cultivation.",
  wrongExplanations: {
    "Pawl Kut": "Harvest festival.",
    "Mim Kut": "Associated with maize harvest.",
    "Thalfavang Kut": "Linked with agricultural activities later in the season."
  },
  hint:
    "The most famous Kut festival."
},

{
  category: "Mizoram GK",
  question: "Which neighboring Indian state shares the longest border with Mizoram?",
  options: [
    "Tripura",
    "Assam",
    "Manipur",
    "Nagaland"
  ],
  answer: "Assam",
  explanation:
    "Assam shares the longest interstate border with Mizoram.",
  wrongExplanations: {
    "Tripura": "Shares a border but shorter.",
    "Manipur": "Shares an eastern border.",
    "Nagaland": "Does not directly share a border with Mizoram."
  },
  hint:
    "Mizoram's main northern neighbor."
},

{
  category: "Mizoram GK",
  question: "The Mizoram Peace Accord was signed in which year?",
  options: [
    "1984",
    "1985",
    "1986",
    "1987"
  ],
  answer: "1986",
  explanation:
    "The Mizoram Peace Accord was signed on 30 June 1986 between the Government of India and the MNF.",
  wrongExplanations: {
    "1984": "Before negotiations concluded.",
    "1985": "Before the Accord.",
    "1987": "Year of statehood, not the Accord."
  },
  hint:
    "One year before statehood."
},
 {
  category: "Mizoram GK",
  question: "Which national highway connects Mizoram with Assam through Vairengte?",
  options: [
    "NH-6",
    "NH-27",
    "NH-44A",
    "NH-54"
  ],
  answer: "NH-54",
  explanation:
    "NH-54 has historically served as the main road link connecting Mizoram with Assam.",
  wrongExplanations: {
    "NH-6": "Passes through other northeastern states.",
    "NH-27": "Major East-West Corridor route.",
    "NH-44A": "Different highway designation."
  },
  hint:
    "The traditional lifeline road to Aizawl."
},

{
  category: "Mizoram GK",
  question: "Which district headquarters is known for its proximity to the Indo-Myanmar trade route?",
  options: [
    "Champhai",
    "Kolasib",
    "Mamit",
    "Saitual"
  ],
  answer: "Champhai",
  explanation:
    "Champhai is an important border trade center near the India-Myanmar border.",
  wrongExplanations: {
    "Kolasib": "Closer to Assam.",
    "Mamit": "Borders Bangladesh.",
    "Saitual": "Located in central Mizoram."
  },
  hint:
    "Border trade town."
},

{
  category: "Mizoram GK",
  question: "What is the official state flower of Mizoram?",
  options: [
    "Red Vanda",
    "Anthurium",
    "Sunflower",
    "Lotus"
  ],
  answer: "Red Vanda",
  explanation:
    "Red Vanda (Renanthera imschootiana) is the state flower of Mizoram.",
  wrongExplanations: {
    "Anthurium": "Popular ornamental flower.",
    "Sunflower": "Not the state flower.",
    "Lotus": "National flower of India."
  },
  hint:
    "A rare orchid species."
},

{
  category: "Mizoram GK",
  question: "Which neighboring country lies to the west of Mizoram?",
  options: [
    "Myanmar",
    "China",
    "Bangladesh",
    "Bhutan"
  ],
  answer: "Bangladesh",
  explanation:
    "Bangladesh lies to the west of Mizoram.",
  wrongExplanations: {
    "Myanmar": "Located to the east and south.",
    "China": "Does not border Mizoram.",
    "Bhutan": "Does not border Mizoram."
  },
  hint:
    "Former East Pakistan."
},

{
  category: "Mizoram GK",
  question: "Which year was the Mizoram University established?",
  options: [
    "1995",
    "2000",
    "2001",
    "2005"
  ],
  answer: "2001",
  explanation:
    "Mizoram University was established in 2001 by an Act of Parliament.",
  wrongExplanations: {
    "1995": "Before the university was created.",
    "2000": "Incorrect year.",
    "2005": "The university already existed."
  },
  hint:
    "Early 21st century."
},
{
  category: "Current Affairs",
  question: "Which organization conducts the Civil Services Examination in India?",
  options: [
    "UPSC",
    "SSC",
    "UGC",
    "Election Commission of India"
  ],
  answer: "UPSC",
  explanation:
    "The Union Public Service Commission conducts the Civil Services Examination for recruitment to services such as IAS, IPS and IFS.",
  wrongExplanations: {
    "SSC": "SSC conducts exams for various central government posts, but not the Civil Services Examination.",
    "UGC": "UGC deals mainly with higher education regulation and grants.",
    "Election Commission of India": "The Election Commission conducts and supervises elections, not civil service recruitment."
  },
  hint: "Think of the constitutional body connected with IAS and IPS recruitment."
},

{
  category: "Current Affairs",
  question: "Which body is responsible for conducting elections in India?",
  options: [
    "Election Commission of India",
    "Supreme Court of India",
    "NITI Aayog",
    "Finance Commission"
  ],
  answer: "Election Commission of India",
  explanation:
    "The Election Commission of India is responsible for supervising, directing and controlling elections to Parliament, State Legislatures and the offices of President and Vice-President.",
  wrongExplanations: {
    "Supreme Court of India": "The Supreme Court interprets the Constitution and decides legal disputes.",
    "NITI Aayog": "NITI Aayog is a policy think tank, not an election body.",
    "Finance Commission": "The Finance Commission deals with financial distribution between the Union and States."
  },
  hint: "The keyword is election."
},

{
  category: "Current Affairs",
  question: "Which institution prepares India’s Union Budget?",
  options: [
    "Ministry of Finance",
    "Ministry of Home Affairs",
    "Election Commission",
    "Supreme Court"
  ],
  answer: "Ministry of Finance",
  explanation:
    "India’s Union Budget is prepared by the Ministry of Finance and presented in Parliament by the Finance Minister.",
  wrongExplanations: {
    "Ministry of Home Affairs": "The Home Ministry deals mainly with internal security and administration.",
    "Election Commission": "The Election Commission conducts elections.",
    "Supreme Court": "The Supreme Court is the highest judicial body, not a budget-making institution."
  },
  hint: "Budget is directly connected with finance."
},

{
  category: "Current Affairs",
  question: "Which Indian body replaced the Planning Commission in 2015?",
  options: [
    "NITI Aayog",
    "Finance Commission",
    "UPSC",
    "Lok Sabha Secretariat"
  ],
  answer: "NITI Aayog",
  explanation:
    "NITI Aayog replaced the Planning Commission in 2015 as the Government of India’s policy think tank.",
  wrongExplanations: {
    "Finance Commission": "The Finance Commission recommends financial distribution between Centre and States.",
    "UPSC": "UPSC conducts recruitment examinations.",
    "Lok Sabha Secretariat": "It provides administrative support to the Lok Sabha."
  },
  hint: "Think of the policy think tank created after the Planning Commission."
},

{
  category: "Current Affairs",
  question: "Which ministry mainly handles disaster management in India?",
  options: [
    "Ministry of Home Affairs",
    "Ministry of External Affairs",
    "Ministry of Education",
    "Ministry of Railways"
  ],
  answer: "Ministry of Home Affairs",
  explanation:
    "Disaster management in India is mainly handled by the Ministry of Home Affairs, along with bodies such as the National Disaster Management Authority.",
  wrongExplanations: {
    "Ministry of External Affairs": "This ministry handles foreign relations.",
    "Ministry of Education": "This ministry handles education-related policies.",
    "Ministry of Railways": "This ministry handles railway transport."
  },
  hint: "Disaster management is linked with internal administration and security."
},
 {
  category: "Current Affairs",
  question: "Who is known as the Father of the Indian Constitution?",
  options: [
    "Mahatma Gandhi",
    "Jawaharlal Nehru",
    "Dr. B.R. Ambedkar",
    "Rajendra Prasad"
  ],
  answer: "Dr. B.R. Ambedkar",
  explanation:
    "Dr. B.R. Ambedkar chaired the Drafting Committee of the Constitution.",
  wrongExplanations: {
    "Mahatma Gandhi": "Known as the Father of the Nation.",
    "Jawaharlal Nehru": "India's first Prime Minister.",
    "Rajendra Prasad": "First President of India."
  },
  hint:
    "Chairman of the Drafting Committee."
},

{
  category: "Current Affairs",
  question: "How many members are elected to the Lok Sabha from Mizoram?",
  options: [
    "1",
    "2",
    "3",
    "4"
  ],
  answer: "1",
  explanation:
    "Mizoram elects one member to the Lok Sabha.",
  wrongExplanations: {
    "2": "Incorrect.",
    "3": "Incorrect.",
    "4": "Incorrect."
  },
  hint:
    "A small northeastern state."
},

{
  category: "Current Affairs",
  question: "What is the currency of India?",
  options: [
    "Dollar",
    "Taka",
    "Rupee",
    "Yuan"
  ],
  answer: "Rupee",
  explanation:
    "The official currency of India is the Indian Rupee.",
  wrongExplanations: {
    "Dollar": "Used by the USA.",
    "Taka": "Used by Bangladesh.",
    "Yuan": "Used by China."
  },
  hint:
    "₹"
},

{
  category: "Current Affairs",
  question: "Which constitutional body conducts elections in India?",
  options: [
    "UPSC",
    "Election Commission of India",
    "Finance Commission",
    "NITI Aayog"
  ],
  answer: "Election Commission of India",
  explanation:
    "The Election Commission supervises elections to Parliament, State Legislatures and constitutional offices.",
  wrongExplanations: {
    "UPSC": "Conducts recruitment examinations.",
    "Finance Commission": "Deals with financial distribution.",
    "NITI Aayog": "Policy think tank."
  },
  hint:
    "Guardian of elections."
},

{
  category: "Current Affairs",
  question: "Which day is celebrated as Constitution Day in India?",
  options: [
    "15 August",
    "26 January",
    "26 November",
    "2 October"
  ],
  answer: "26 November",
  explanation:
    "Constitution Day marks the adoption of the Constitution in 1949.",
  wrongExplanations: {
    "15 August": "Independence Day.",
    "26 January": "Republic Day.",
    "2 October": "Gandhi Jayanti."
  },
  hint:
    "The Constitution was adopted before it came into force."
},
{
    category: "Polity",
    question: "Which article of the Indian Constitution deals with equality before law?",

    explanation: "Article 14 provides equality before law and equal protection of laws.",
    wrongExplanations: {
      "Article 19": "Article 19 deals with freedoms.",
      "Article 21": "Article 21 deals with life and personal liberty.",
      "Article 32": "Article 32 deals with constitutional remedies.",
    },
    hint: "Think about equality.",
  },
{
  category: "Indian Polity",
  question: "Which Article of the Constitution deals with the Right to Constitutional Remedies?",
  options: [
    "Article 14",
    "Article 19",
    "Article 21",
    "Article 32"
  ],
  answer: "Article 32",
  explanation:
    "Article 32 allows citizens to move the Supreme Court for enforcement of Fundamental Rights.",
  wrongExplanations: {
    "Article 14": "Article 14 deals with Equality before Law.",
    "Article 19": "Article 19 deals with freedoms.",
    "Article 21": "Article 21 deals with Right to Life and Personal Liberty."
  },
  hint: "Dr. Ambedkar called it the Heart and Soul of the Constitution."
},

{
  category: "Indian Polity",
  question: "Who is the head of the State Government?",
  options: [
    "Governor",
    "Chief Minister",
    "Chief Secretary",
    "Speaker"
  ],
  answer: "Chief Minister",
  explanation:
    "The Chief Minister is the real executive head of the State Government.",
  wrongExplanations: {
    "Governor": "Governor is the constitutional head.",
    "Chief Secretary": "Chief Secretary is a senior civil servant.",
    "Speaker": "Speaker presides over the Legislative Assembly."
  },
  hint: "Real executive authority."
},

{
  category: "Indian Polity",
  question: "How many Fundamental Rights are currently guaranteed by the Constitution of India?",
  options: [
    "5",
    "6",
    "7",
    "8"
  ],
  answer: "6",
  explanation:
    "There are currently six Fundamental Rights after the Right to Property ceased to be a Fundamental Right.",
  wrongExplanations: {
    "5": "Too few.",
    "7": "This was the older count including Right to Property.",
    "8": "Incorrect."
  },
  hint: "44th Constitutional Amendment."
},

{
  category: "Indian Polity",
  question: "Who presides over the Rajya Sabha?",
  options: [
    "President",
    "Prime Minister",
    "Vice-President",
    "Speaker"
  ],
  answer: "Vice-President",
  explanation:
    "The Vice-President of India is the ex-officio Chairman of the Rajya Sabha.",
  wrongExplanations: {
    "President": "The President is not the presiding officer.",
    "Prime Minister": "The PM is head of government.",
    "Speaker": "The Speaker presides over Lok Sabha."
  },
  hint: "Ex-officio Chairman."
},

{
  category: "Indian Polity",
  question: "Which Constitutional Amendment lowered the voting age from 21 to 18 years?",
  options: [
    "42nd",
    "44th",
    "52nd",
    "61st"
  ],
  answer: "61st",
  explanation:
    "The 61st Constitutional Amendment Act, 1988 reduced the voting age to 18.",
  wrongExplanations: {
    "42nd": "Known as the Mini Constitution.",
    "44th": "Reversed several Emergency provisions.",
    "52nd": "Anti-defection Amendment."
  },
  hint: "1988 amendment."
},
  {
  category: "Indian Polity",
  question: "Which part of the Constitution contains Fundamental Rights?",
  options: [
    "Part II",
    "Part III",
    "Part IV",
    "Part V"
  ],
  answer: "Part III",
  explanation:
    "Fundamental Rights are contained in Part III of the Constitution of India.",
  wrongExplanations: {
    "Part II": "Part II deals with Citizenship.",
    "Part IV": "Part IV deals with Directive Principles of State Policy.",
    "Part V": "Part V deals with the Union Government."
  },
  hint: "Articles 12 to 35."
},

{
  category: "Indian Polity",
  question: "Who appoints the Prime Minister of India?",
  options: [
    "Lok Sabha",
    "Chief Justice of India",
    "President",
    "Rajya Sabha"
  ],
  answer: "President",
  explanation:
    "The President appoints the Prime Minister, usually the leader of the majority party in Lok Sabha.",
  wrongExplanations: {
    "Lok Sabha": "Lok Sabha elects members, not the PM directly.",
    "Chief Justice of India": "The CJI has no such role.",
    "Rajya Sabha": "Rajya Sabha does not appoint the PM."
  },
  hint: "Constitutional Head of India."
},

{
  category: "Indian Polity",
  question: "How many members can be nominated by the President to the Rajya Sabha?",
  options: [
    "10",
    "12",
    "14",
    "15"
  ],
  answer: "12",
  explanation:
    "The President can nominate 12 members to the Rajya Sabha for their contributions to art, literature, science and social service.",
  wrongExplanations: {
    "10": "Incorrect constitutional provision.",
    "14": "Too many.",
    "15": "Incorrect."
  },
  hint: "A famous constitutional number."
},

{
  category: "Indian Polity",
  question: "Which Constitutional Amendment is known as the Anti-Defection Amendment?",
  options: [
    "42nd",
    "44th",
    "52nd",
    "73rd"
  ],
  answer: "52nd",
  explanation:
    "The 52nd Constitutional Amendment Act, 1985 introduced the Anti-Defection Law.",
  wrongExplanations: {
    "42nd": "Known as the Mini Constitution.",
    "44th": "Related to post-Emergency reforms.",
    "73rd": "Related to Panchayati Raj."
  },
  hint: "1985 Amendment."
},

{
  category: "Indian Polity",
  question: "The Directive Principles of State Policy are borrowed from the Constitution of:",
  options: [
    "USA",
    "Ireland",
    "Canada",
    "Australia"
  ],
  answer: "Ireland",
  explanation:
    "India borrowed the Directive Principles of State Policy from the Irish Constitution.",
  wrongExplanations: {
    "USA": "USA inspired Fundamental Rights and judicial review.",
    "Canada": "Canada influenced federal features.",
    "Australia": "Australia influenced concurrent powers."
  },
  hint: "A European country."
},
{
  category: "Indian Polity",
  question: "Which Schedule of the Constitution contains the list of States and Union Territories?",
  options: [
    "First Schedule",
    "Second Schedule",
    "Third Schedule",
    "Fourth Schedule"
  ],
  answer: "First Schedule",
  explanation:
    "The First Schedule contains the names of States and Union Territories along with their territorial extent.",
  wrongExplanations: {
    "Second Schedule": "Deals with salaries and allowances of constitutional authorities.",
    "Third Schedule": "Contains forms of oath and affirmation.",
    "Fourth Schedule": "Deals with allocation of seats in the Rajya Sabha."
  },
  hint: "Think of the very first schedule."
},

{
  category: "Indian Polity",
  question: "Who is known as the Chief Legal Advisor to the Government of India?",
  options: [
    "Solicitor General",
    "Attorney General",
    "Chief Justice of India",
    "Law Minister"
  ],
  answer: "Attorney General",
  explanation:
    "The Attorney General of India is the highest law officer and chief legal advisor to the Government of India.",
  wrongExplanations: {
    "Solicitor General": "Assists the Attorney General.",
    "Chief Justice of India": "Heads the judiciary.",
    "Law Minister": "A political executive, not the chief legal advisor."
  },
  hint: "Highest law officer of India."
},

{
  category: "Indian Polity",
  question: "Which Article provides for the establishment of the Election Commission of India?",
  options: [
    "Article 280",
    "Article 324",
    "Article 356",
    "Article 368"
  ],
  answer: "Article 324",
  explanation:
    "Article 324 vests the superintendence, direction and control of elections in the Election Commission.",
  wrongExplanations: {
    "Article 280": "Deals with the Finance Commission.",
    "Article 356": "Deals with President's Rule.",
    "Article 368": "Deals with Constitutional Amendments."
  },
  hint: "Election Commission Article."
},

{
  category: "Indian Polity",
  question: "The Finance Commission is constituted every:",
  options: [
    "3 Years",
    "4 Years",
    "5 Years",
    "6 Years"
  ],
  answer: "5 Years",
  explanation:
    "Under Article 280, the President constitutes a Finance Commission every five years.",
  wrongExplanations: {
    "3 Years": "Incorrect constitutional provision.",
    "4 Years": "Incorrect.",
    "6 Years": "Longer than the constitutional interval."
  },
  hint: "Same as a normal Lok Sabha term."
},

{
  category: "Indian Polity",
  question: "Which Constitutional Amendment added Fundamental Duties?",
  options: [
    "42nd Amendment",
    "44th Amendment",
    "52nd Amendment",
    "61st Amendment"
  ],
  answer: "42nd Amendment",
  explanation:
    "The 42nd Constitutional Amendment Act, 1976 added Fundamental Duties to the Constitution.",
  wrongExplanations: {
    "44th Amendment": "Focused on post-Emergency reforms.",
    "52nd Amendment": "Anti-defection law.",
    "61st Amendment": "Reduced voting age to 18."
  },
  hint: "The Mini Constitution."
},
{
  category: "Indian Polity",
  question: "Who appoints the Governor of a State in India?",
  options: [
    "Prime Minister",
    "Chief Minister",
    "President",
    "Parliament"
  ],
  answer: "President",
  explanation:
    "The Governor of a State is appointed by the President of India.",
  wrongExplanations: {
    "Prime Minister": "The PM advises but does not formally appoint.",
    "Chief Minister": "The CM is not involved in appointment.",
    "Parliament": "Parliament does not appoint Governors."
  },
  hint:
    "Constitutional Head of the Union."
},

{
  category: "Indian Polity",
  question: "How many schedules are currently in the Constitution of India?",
  options: [
    "10",
    "11",
    "12",
    "13"
  ],
  answer: "12",
  explanation:
    "The Constitution currently contains 12 Schedules.",
  wrongExplanations: {
    "10": "The Constitution has expanded beyond this number.",
    "11": "Incorrect current number.",
    "13": "One more than the actual number."
  },
  hint:
    "Added through Constitutional Amendments."
},

{
  category: "Indian Polity",
  question: "Who is the ex-officio Chairman of the Rajya Sabha?",
  options: [
    "President",
    "Prime Minister",
    "Vice-President",
    "Speaker"
  ],
  answer: "Vice-President",
  explanation:
    "The Vice-President of India serves as the ex-officio Chairman of the Rajya Sabha.",
  wrongExplanations: {
    "President": "Not the presiding officer of Rajya Sabha.",
    "Prime Minister": "Head of Government.",
    "Speaker": "Presides over Lok Sabha."
  },
  hint:
    "Second highest constitutional office."
},

{
  category: "Indian Polity",
  question: "Which Article deals with the amendment of the Constitution?",
  options: [
    "Article 356",
    "Article 324",
    "Article 368",
    "Article 280"
  ],
  answer: "Article 368",
  explanation:
    "Article 368 lays down the procedure for Constitutional Amendment.",
  wrongExplanations: {
    "Article 356": "President's Rule.",
    "Article 324": "Election Commission.",
    "Article 280": "Finance Commission."
  },
  hint:
    "Amending the Constitution."
},

{
  category: "Indian Polity",
  question: "Which Constitutional Amendment introduced the Right to Education as a Fundamental Right?",
  options: [
    "73rd Amendment",
    "86th Amendment",
    "91st Amendment",
    "97th Amendment"
  ],
  answer: "86th Amendment",
  explanation:
    "The 86th Constitutional Amendment inserted Article 21A, making education a Fundamental Right.",
  wrongExplanations: {
    "73rd Amendment": "Panchayati Raj.",
    "91st Amendment": "Council of Ministers reforms.",
    "97th Amendment": "Co-operative societies."
  },
  hint:
    "Article 21A."
},
{
  category: "Current Affairs",
  question: "Who is the constitutional head of India?",
  options: [
    "Prime Minister",
    "President",
    "Chief Justice of India",
    "Vice-President"
  ],
  answer: "President",
  explanation:
    "The President is the constitutional head of the Republic of India.",
  wrongExplanations: {
    "Prime Minister": "The Prime Minister is the head of government.",
    "Chief Justice of India": "The CJI heads the judiciary.",
    "Vice-President": "The Vice-President is not the constitutional head."
  },
  hint:
    "Think constitutional head, not executive head."
},

{
  category: "Current Affairs",
  question: "Which institution is known as the lower house of Parliament?",
  options: [
    "Rajya Sabha",
    "Lok Sabha",
    "Supreme Court",
    "Legislative Council"
  ],
  answer: "Lok Sabha",
  explanation:
    "Lok Sabha is the directly elected lower house of the Indian Parliament.",
  wrongExplanations: {
    "Rajya Sabha": "Rajya Sabha is the upper house.",
    "Supreme Court": "The Supreme Court is part of the judiciary.",
    "Legislative Council": "This exists only in some states."
  },
  hint:
    "Direct election by the people."
},

{
  category: "Current Affairs",
  question: "Which body conducts elections to Parliament and State Legislatures in India?",
  options: [
    "UPSC",
    "Election Commission of India",
    "NITI Aayog",
    "Finance Commission"
  ],
  answer: "Election Commission of India",
  explanation:
    "The Election Commission supervises and conducts elections across India.",
  wrongExplanations: {
    "UPSC": "UPSC conducts recruitment examinations.",
    "NITI Aayog": "NITI Aayog is a policy think tank.",
    "Finance Commission": "Finance Commission deals with financial distribution."
  },
  hint:
    "Think elections."
},

{
  category: "Current Affairs",
  question: "What is the term of office of the President of India?",
  options: [
    "4 years",
    "5 years",
    "6 years",
    "7 years"
  ],
  answer: "5 years",
  explanation:
    "The President of India holds office for a term of five years.",
  wrongExplanations: {
    "4 years": "Incorrect constitutional term.",
    "6 years": "This is not the President's tenure.",
    "7 years": "Incorrect."
  },
  hint:
    "Same duration as a full Lok Sabha term."
},
{
  category: "Public Administration",
  question: "Who is known as the Father of Scientific Management?",
  options: [
    "Max Weber",
    "F.W. Taylor",
    "Elton Mayo",
    "Herbert Simon"
  ],
  answer: "F.W. Taylor",
  explanation:
    "Frederick Winslow Taylor developed Scientific Management to improve efficiency in organizations.",
  wrongExplanations: {
    "Max Weber": "Known for Bureaucratic Theory.",
    "Elton Mayo": "Known for Human Relations Theory.",
    "Herbert Simon": "Known for Decision-Making Theory."
  },
  hint:
    "Scientific Management."
},

{
  category: "Public Administration",
  question: "Which thinker is associated with the Human Relations Approach?",
  options: [
    "Elton Mayo",
    "Max Weber",
    "Woodrow Wilson",
    "Luther Gulick"
  ],
  answer: "Elton Mayo",
  explanation:
    "Elton Mayo emphasized human behavior and workplace relationships through the Hawthorne Studies.",
  wrongExplanations: {
    "Max Weber": "Associated with bureaucracy.",
    "Woodrow Wilson": "Father of Public Administration.",
    "Luther Gulick": "Associated with POSDCORB."
  },
  hint:
    "Hawthorne Experiments."
},

{
  category: "Public Administration",
  question: "What does the letter 'D' in POSDCORB stand for?",
  options: [
    "Development",
    "Direction",
    "Directing",
    "Decision"
  ],
  answer: "Directing",
  explanation:
    "POSDCORB stands for Planning, Organizing, Staffing, Directing, Coordinating, Reporting and Budgeting.",
  wrongExplanations: {
    "Development": "Not part of POSDCORB.",
    "Direction": "Close, but the accepted term is Directing.",
    "Decision": "Not part of POSDCORB."
  },
  hint:
    "A managerial function."
},

{
  category: "Public Administration",
  question: "Who introduced the concept of Decision-Making Theory?",
  options: [
    "Herbert Simon",
    "Woodrow Wilson",
    "Elton Mayo",
    "F.W. Taylor"
  ],
  answer: "Herbert Simon",
  explanation:
    "Herbert Simon emphasized decision-making as the core of administration.",
  wrongExplanations: {
    "Woodrow Wilson": "Founder of the discipline.",
    "Elton Mayo": "Human Relations School.",
    "F.W. Taylor": "Scientific Management."
  },
  hint:
    "Bounded Rationality."
},

{
  category: "Public Administration",
  question: "Which approach views administration as a system of interrelated parts?",
  options: [
    "Classical Approach",
    "Systems Approach",
    "Scientific Management",
    "Human Relations Approach"
  ],
  answer: "Systems Approach",
  explanation:
    "The Systems Approach studies administration as a set of interconnected elements working together.",
  wrongExplanations: {
    "Classical Approach": "Focuses on structure and hierarchy.",
    "Scientific Management": "Focuses on efficiency.",
    "Human Relations Approach": "Focuses on people and relationships."
  },
  hint:
    "Think of inputs, processes and outputs."
},
{
  category: "Teaching Aptitude",
  question: "Which method is best for encouraging active participation in the classroom?",
  options: [
    "Lecture only",
    "Discussion method",
    "Silent reading only",
    "Punishment method"
  ],
  answer: "Discussion method",
  explanation:
    "The discussion method encourages students to think, speak, question and participate actively in learning.",
  wrongExplanations: {
    "Lecture only": "Lecture can be useful but often keeps students passive.",
    "Silent reading only": "This does not encourage active classroom interaction.",
    "Punishment method": "Punishment discourages learning and participation."
  },
  hint:
    "Think of two-way classroom communication."
},

{
  category: "Teaching Aptitude",
  question: "A good teacher should first try to understand:",
  options: [
    "Only the syllabus",
    "Only examination marks",
    "Students' learning needs",
    "Only school rules"
  ],
  answer: "Students' learning needs",
  explanation:
    "A good teacher understands the learning level, needs and background of students before teaching effectively.",
  wrongExplanations: {
    "Only the syllabus": "The syllabus is important but not enough.",
    "Only examination marks": "Marks do not show the full learning needs of students.",
    "Only school rules": "Rules matter, but teaching must focus on learners."
  },
  hint:
    "Teaching is learner-centered."
},

{
  category: "Teaching Aptitude",
  question: "Which teaching aid is most suitable for showing the location of countries?",
  options: [
    "Map",
    "Dictionary",
    "Calculator",
    "Attendance register"
  ],
  answer: "Map",
  explanation:
    "A map is a visual teaching aid used to show places, countries, states, rivers and other geographical features.",
  wrongExplanations: {
    "Dictionary": "Used for word meanings.",
    "Calculator": "Used for mathematical calculations.",
    "Attendance register": "Used for recording attendance."
  },
  hint:
    "Geography teaching aid."
},

{
  category: "Teaching Aptitude",
  question: "Continuous and Comprehensive Evaluation mainly focuses on:",
  options: [
    "Only final examination",
    "Only punishment",
    "All-round development of students",
    "Only handwriting"
  ],
  answer: "All-round development of students",
  explanation:
    "CCE evaluates both scholastic and co-scholastic aspects of students throughout the learning process.",
  wrongExplanations: {
    "Only final examination": "CCE is continuous, not only final exam based.",
    "Only punishment": "Evaluation is not punishment.",
    "Only handwriting": "Handwriting is only a small part of learning."
  },
  hint:
    "Continuous means throughout the year."
},

{
  category: "Teaching Aptitude",
  question: "The main purpose of classroom questioning is to:",
  options: [
    "Insult weak students",
    "Check understanding",
    "Waste time",
    "Avoid teaching"
  ],
  answer: "Check understanding",
  explanation:
    "Questioning helps the teacher know whether students have understood the lesson and encourages thinking.",
  wrongExplanations: {
    "Insult weak students": "Good teaching never aims to insult students.",
    "Waste time": "Questioning is a useful teaching technique.",
    "Avoid teaching": "Questioning supports teaching, not avoids it."
  },
  hint:
    "Assessment during teaching."
},
{
  category: "Teaching Aptitude",
  question: "Which of the following is a characteristic of effective teaching?",
  options: [
    "Memorization only",
    "Student engagement",
    "Punishment",
    "Ignoring feedback"
  ],
  answer: "Student engagement",
  explanation:
    "Effective teaching actively involves students in the learning process through participation and interaction.",
  wrongExplanations: {
    "Memorization only": "Learning involves more than memorization.",
    "Punishment": "Punishment does not improve learning effectiveness.",
    "Ignoring feedback": "Feedback is essential for improvement."
  },
  hint:
    "Students should actively participate."
},

{
  category: "Teaching Aptitude",
  question: "The most important quality of a teacher is:",
  options: [
    "Patience",
    "Strictness",
    "Popularity",
    "Fashion sense"
  ],
  answer: "Patience",
  explanation:
    "Patience helps teachers understand different learning speeds and support students effectively.",
  wrongExplanations: {
    "Strictness": "Discipline is important but not the most important quality.",
    "Popularity": "Teaching effectiveness matters more.",
    "Fashion sense": "Not related to educational quality."
  },
  hint:
    "Needed when students learn slowly."
},

{
  category: "Teaching Aptitude",
  question: "Which teaching method focuses on learning through experience?",
  options: [
    "Lecture Method",
    "Project Method",
    "Dictation Method",
    "Memorization Method"
  ],
  answer: "Project Method",
  explanation:
    "The Project Method encourages learning by doing and practical experience.",
  wrongExplanations: {
    "Lecture Method": "Mostly teacher-centered.",
    "Dictation Method": "Focuses on writing and listening.",
    "Memorization Method": "Focuses on recall rather than experience."
  },
  hint:
    "Learning by doing."
},

{
  category: "Teaching Aptitude",
  question: "Which of the following best promotes critical thinking?",
  options: [
    "Asking open-ended questions",
    "Rote memorization",
    "Copying notes",
    "Repeating definitions"
  ],
  answer: "Asking open-ended questions",
  explanation:
    "Open-ended questions encourage analysis, reasoning and independent thinking.",
  wrongExplanations: {
    "Rote memorization": "Focuses on recall rather than thinking.",
    "Copying notes": "Does not promote analysis.",
    "Repeating definitions": "Tests memory rather than reasoning."
  },
  hint:
    "Questions with more than one possible answer."
},

{
  category: "Teaching Aptitude",
  question: "Assessment is mainly used to:",
  options: [
    "Threaten students",
    "Measure learning progress",
    "Increase homework",
    "Reduce classroom interaction"
  ],
  answer: "Measure learning progress",
  explanation:
    "Assessment helps determine what students have learned and where improvement is needed.",
  wrongExplanations: {
    "Threaten students": "Assessment is not a punishment tool.",
    "Increase homework": "Homework is not the main purpose.",
    "Reduce classroom interaction": "Assessment can improve interaction."
  },
  hint:
    "Evaluating student learning."
},
];

const categories = ["All", ...Array.from(new Set(questions.map((q) => q.category)))];

export default function HomePage() {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const filteredQuestions = useMemo(() => {
    if (category === "All") return questions;
    return questions.filter((q) => q.category === category);
  }, [category]);

  const currentQuestion = filteredQuestions[index % filteredQuestions.length];

  function nextQuestion() {
    setSelectedAnswer("");
    setIndex((prev) => (prev + 1) % filteredQuestions.length);
  }

  function changeCategory(cat: string) {
    setCategory(cat);
    setIndex(0);
    setSelectedAnswer("");
  }

  const isCorrect = selectedAnswer === currentQuestion.answer;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Mizoram Exam Practice
          </p>

          <h1 className="mt-3 text-4xl font-bold text-cyan-300 md:text-6xl">
            MPSC FREE MOCK
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            MCQ-style practice questions with correct explanation, wrong answer
            explanation, elimination method and hints for Mizoram students.
          </p>

          <div className="mt-6">
            <Link
              href="/college-notes"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Open Arts College Notes
            </Link>
          </div>
        </section>

        <section className="mb-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => changeCategory(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                category === cat
                  ? "bg-cyan-400 text-slate-950"
                  : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <p className="text-sm text-cyan-300">
              Question {index + 1} of {filteredQuestions.length} |{" "}
              {currentQuestion.category}
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white">
              {currentQuestion.question}
            </h2>

            <div className="mt-6 grid gap-4">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedAnswer(option)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedAnswer === option
                      ? option === currentQuestion?.answer
                        ? "border-green-400 bg-green-400/15"
                        : "border-red-400 bg-red-400/15"
                      : "border-cyan-400/70 hover:bg-cyan-400/10"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={nextQuestion}
              className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Next Question
            </button>
          </div>

          <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <h2 className="text-3xl font-bold text-cyan-300">Explanation</h2>

            {!selectedAnswer ? (
              <p className="mt-6 text-slate-300">
                Select an answer to view the explanation.
              </p>
            ) : (
              <div className="mt-6 space-y-5">
                <div
                  className={`rounded-2xl border p-4 ${
                    isCorrect
                      ? "border-green-400 bg-green-400/10"
                      : "border-red-400 bg-red-400/10"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold ${
                      isCorrect ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isCorrect ? "Correct Answer" : "Wrong Answer"}
                  </h3>

                  <p className="mt-3 text-slate-300">
                    {isCorrect
                      ? currentQuestion.explanation
                      : currentQuestion.wrongExplanations[
                          selectedAnswer as keyof typeof currentQuestion.wrongExplanations
                        ]}
                  </p>
                </div>

                {!isCorrect && (
                  <div className="rounded-2xl border border-cyan-400/50 p-4">
                    <p className="text-cyan-300">Correct Answer:</p>
                    <p className="mt-2 text-xl font-bold text-white">
                      {currentQuestion.answer}
                    </p>

                    <p className="mt-4 text-slate-300">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                <div className="rounded-2xl border border-yellow-400/50 bg-yellow-400/10 p-4">
                  <h3 className="font-bold text-yellow-300">
                    Elimination Method / Hint
                  </h3>
                  <p className="mt-2 text-slate-300">{currentQuestion.hint}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}