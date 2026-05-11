import profile from "../assets/photo.jpg";
import certificate1 from "../assets/certificate1.pdf";
import certificate2 from "../assets/certificate2.pdf";
import certificate3 from "../assets/certificate3.pdf";
import certificate4 from "../assets/certificate4.pdf";
import resume from "../assets/NidhiResume.pdf";

export default {
  basics: {
    name: "Nidhi patel",
    title: "Data Analyst",
    email: "patelnidhi1628@gmail.com",
    phone: "+91 87348 38561",
    location: "Mehsana",
    summary:
      "I’m a passionate Data Analyst with a strong interest in exploring data and transforming raw information into meaningful insights for better decision-making. I work with tools like Microsoft Excel, Python, MySQL, and Power BI to analyze, clean, and visualize datasets effectively. As a fresher, I focus on building practical projects and continuously improving my analytical and problem-solving skills.",
    avatar: profile,
    Resume: resume,
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/nidhi-patel-8947592b1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        icon: "linkedin",
      },
      {
        platform: "GitHub",
        url: "https://github.com/Nidhi-0110",
        icon: "github",
      },
      // {
      //   platform: "tiwtter",
      //   url: "url",
      //   icon: "tiwtter",
      // },
    ],
  },

  skills: [
    {
      category: "Data Science (Data Analysis, ML, DL)",
      items: [
        { name: "Python(NumPy & Pandas)", level: 85 },
        { name: "Data Cleaning & Preprocessing", level: 85 },
        { name: "Exploratory Data Analysis (EDA)", level: 85 },
        { name: "Statistical Analysis & Probability", level: 70 },
        {
          name: "Machine Learning (Regression, Classification, etc)",
          level: 75,
        },
        { name: "Basic Deep Learning Concepts", level: 75 },
      ],
    },
    {
      category: "Soft / Professional Skills",
      items: [
        { name: "Problem Solving", level: 85 },
        { name: "Analytical Thinking", level: 85 },
        { name: "Communication Skills", level: 80 },
        { name: "Team Collaboration", level: 80 },
        { name: "Adaptability", level: 85 },
        { name: "Continuous Learning", level: 85 },
      ],
    },
    {
      category: "Web Development / Tools",
      items: [
        { name: "HTML5 & CSS3(Tailwind CSS)", level: 90 },
        { name: "React.js", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "Git & GitHub", level: 80 },
      ],
    },
    {
      category: "Database & Data Visualization",
      items: [
        { name: "SQL / PostgreSQL", level: 80 },
        { name: "Power BI (Dashboards, DAX Basics)", level: 80 },
        { name: "Data Visualization(Matplotlib, Seaborn)", level: 75 },
        { name: "Microsoft Excel (Pivot Tables, Data Analysis)", level: 85 },
      ],
    },
  ],

  experience: [
    {
      role: "Data Analyst Internship",
      company: "Elevate Labs",
      location: "Rempote",
      start: "Feb 2026",
      end: "April 2026",
      bullets: [
        "During this journey, I worked on real-world datasets and gained hands-on experience in data cleaning, data analysis, and reporting using Excel, SQL, and Power BI.",
        "This experience strengthened my ability to transform raw data into meaningful insights that support better decision-making. I’m also honored to be recognized as a Best Performer, which motivates me to keep learning and growing in the field of Data Analytics.",
      ],
      certificate: certificate2,
    },
    {
      role: "Frontend Developer Internship",
      company: "Techmicra It Solutions",
      location: "Ahmedabad",
      start: "Jan 2025",
      end: "April 2025",
      bullets: [
        "Developed UI components using modern frontend technologies.Built interactive features including Gym Membership Plans and Diet Plan modules.",
        "Designed product and fitness management pages to improve user experience. Focused on creating clean, user-friendly interfaces for seamless online fitness management.",
      ],
      certificate: certificate1,
    },
  ],

  projects: [
    {
      title: "Heart-stroke-Prediction",
      description:
        "Built a machine learning model to predict the risk of heart stroke using patient health data such as age, BMI, glucose level, and lifestyle factors. Performed data preprocessing and feature engineering, including handling missing values and encoding categorical variables to improve model accuracy. Implemented and evaluated classification algorithms using Python and Scikit-learn to identify patterns and generate stroke risk predictions.",
      image:
        "https://github.com/Nidhi-0110/Heart-stroke-Prediction/blob/main/image.jpg?raw=true",
      tags: [
        "Python (Pandas, NumPy)",
        "Scikit-learn",
        "Data Visualization (Matplotlib, Seaborn)",
      ],
      liveUrl: "#SPOTIFY_DASHBOARD_LIVE_URL",
      sourceUrl: "https://github.com/Nidhi-0110/Heart-stroke-Prediction",
    },
    {
      title: "Movie Recommender system",
      description:
        "Developed a Movie Recommender System using Python, Pandas, NumPy, and Scikit-learn to generate personalized movie recommendations based on user rating patterns. Implemented Collaborative Filtering and Cosine Similarity algorithms on the MovieLens dataset to analyze user–item relationships and improve recommendation accuracy. Built an interactive recommendation interface using Dash/Plotly, enabling users to search movies and receive real-time recommendations.",
      image:
        "https://github.com/Nidhi-0110/Movie-Recommender-System/blob/main/image.jpg?raw=true",
      tags: [
        "Python (Pandas, NumPy)",
        "Scikit-learn",
        "Collaborative Filtering",
      ],
      liveUrl: "#SPOTIFY_DASHBOARD_LIVE_URL",
      sourceUrl: "https://github.com/Nidhi-0110/Movie-Recommender-System",
    },
    {
      title: "Spotify Music Analytics Dashboard",
      description:
        "Built an interactive Power BI dashboard to analyze Spotify streaming data, highlighting top songs, artists, and music streaming trends. Performed data cleaning and transformation on Spotify datasets using Excel and Power BI to ensure accurate analysis and reporting. Designed dynamic visualizations and slicers to explore metrics such as stream counts, track popularity, and temporal listening patterns.",
      image:
        "https://github.com/Nidhi-0110/Spotify_dashboard/blob/main/index.png?raw=true",
      tags: ["Power BI", "Power Query", "Data Cleaning", "Data Visualization"],
      liveUrl: "#SPOTIFY_DASHBOARD_LIVE_URL",
      sourceUrl: "https://github.com/Nidhi-0110/Spotify_dashboard",
    },
    {
      title: "Customer Behavior Analysis Dashboard",
      description:
        "Built a Customer Behavior Analysis Dashboard to analyze customer purchasing patterns and engagement trends using Exploratory Data Analysis (EDA) and statistical insights for data-driven decision making. Utilized Python, Pandas, NumPy, Matplotlib, and Seaborn to clean, preprocess, and visualize customer data, generating actionable insights on customer segmentation and transaction behavior.",
      image:
        "https://github.com/Nidhi-0110/Customer_behavior__analysis_dashboard/blob/main/image.png?raw=true",
      tags: ["Python", "SQL", "Data Visualization", "Power BI", "DAX", "EDA"],
      liveUrl: "#CUSTOMER_DASHBOARD_LIVE_URL",
      sourceUrl:
        "https://github.com/Nidhi-0110/Customer_behavior__analysis_dashboard",
    },
    {
      title: "Avido Fitness",
      description:
        "Developed a comprehensive fitness management platform that enables users to register, track workouts, calculate BMI, access diet plans, and purchase fitness products online. Implemented modules for membership management, trainer interaction, attendance tracking, and secure authentication to streamline gym operations and enhance user engagement through a centralized digital fitness system.",
      image:
        "https://github.com/Nidhi-0110/Avido-Fitness-Project-/blob/main/Avido-Fitness/image.jpg?raw=true",
      tags: ["React.js", "Boostrap", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://avido-fitnesss.netlify.app/",
      sourceUrl:
        "https://github.com/Nidhi-0110/Avido-Fitness-Project-/tree/main/Avido-Fitness",
    },
  ],

  education: [
    {
      degree: "B.Tech Computer Engineering",
      institution: "Ganpat University",
      location: "Mehsana",
      start: "2022",
      end: "2025",
      description:
        "Focused on Human-Computer Interaction and Database Systems. Thesis on adaptive user interfaces.",
    },
    {
      degree: "Diploma Computer Engineering",
      institution: "Ganpat University",
      location: "Mehsana",
      start: "2019",
      end: "2022",
      description:
        "Minor in Mathematics. Dean's List all semesters. Participated in Hackathon team.",
    },
  ],

  certifications: [
    {
      name: "Data Analytics",
      issuer: "NoviTech R&D Private Limited",
      date: "December 29th to January 29th 2025-2026",
      url: certificate3,
    },
    {
      name: "Power BI Micro Course",
      issuer: "SkillCourse",
      date: "2026",
      url: certificate4,
    },
  ],

  meta: {
    title: "Resume - Nidhi Patel",
    description:
      "Portfolio and resume of Nidhi, Data Analyst skilled in Python, SQL, and data visualization.",
    twitterHandle: "@janedoe",
    language: "en",
    themeColor: "#2563eb",
  },
};
