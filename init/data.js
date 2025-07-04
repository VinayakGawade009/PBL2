const { urlencoded } = require("express");

const sampleListings = [
    {
      title: "JavaScript Course",
      description: "Detailed JavaScript course. All fundamentals are cleared.",
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIFW0QpEOYYUEPuPLcrzRA8flAPp0BLSLjg&s",
        filename: "listingimage",
      },
      tags: ["Frontend"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Python for Beginners",
      description: "Learn Python from scratch with hands-on projects.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3GUx04cN23RyAQGnnTbUAJaIB9VVMaKvfw&s",
        filename: "listingimage",
      } ,
      tags: ["Programming Language"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Full Stack Development",
      description: "Master the MERN stack with real-world projects.",
      image:{
        url: "https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg",
        filename: "listingimage",
      } ,
      tags: ["Full Stack"],
      state: "Live",
      language: "English",
    },
    {
      title: "Data Structures and Algorithms",
      description: "Strengthen your problem-solving skills with DSA.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-n25VjmJMj9UBFuR0r2xWW4OcEceDD7NGA&s",
        filename: "listingimage",
      } ,
      tags: ["Programming"],
      state: "Recorded",
      language: "Hindi",
    },
    {
      title: "UI/UX Design Basics",
      description: "Understand the principles of designing intuitive user interfaces.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxM5FokizcINMEKDwmx3woJMXBO8GmMhqm1Q&s",
        filename: "listingimage",
      } ,
      tags: ["Design"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Machine Learning Essentials",
      description: "Introduction to machine learning concepts and applications.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvoTWlXVn55W-st9TWcoCFpzqt_z-wpXqSw&s",
        filename: "listingimage",
      } ,
      tags: ["AI/ML"],
      state: "Live",
      language: "English",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn the basics of cybersecurity to protect online systems.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtDjEiP5gqW7zFklhn1bfQZ5oolkXf0dlcQ&s",
        filename: "listingimage",
      } ,
      tags: ["Cybersecurity"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "React for Beginners",
      description: "A complete guide to building web apps using React.",
      image:{
        url: "https://i.ytimg.com/vi/nTeuhbP7wdE/maxresdefault.jpg",
        filename: "listingimage",
      } ,
      tags: ["Frontend"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Cloud Computing Basics",
      description: "Understand cloud technologies and their applications.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsqa4eOfqWm0dClsDZF9QTb1UwanvxRwdZA&s",
        filename: "listingimage",
      } ,
      tags: ["Cloud"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Blockchain 101",
      description: "Learn the fundamentals of blockchain technology and its use cases.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSWlr4wgYL51N4FIuSNxcvvWtBaZIIJervA&s",
        filename: "listingimage",
      } ,
      tags: ["Blockchain"],
      state: "Live",
      language: "English",
    },
    {
      title: "Advanced Java Programming",
      description: "Master Java concepts like multithreading, collections, and JDBC.",
      image:{
        url: "https://media.geeksforgeeks.org/wp-content/uploads/20230823152056/What-is-Advance-JAVA.png",
        filename: "listingimage",
      } ,
      tags: ["Programming Language"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Introduction to DevOps",
      description: "Understand CI/CD pipelines, Docker, and infrastructure as code.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosyvojCCpEv6r5uvsMCKQou7ESdky-uvynA&s",
        filename: "listingimage",
      } ,
      tags: ["DevOps"],
      state: "Live",
      language: "English",
    },
    {
      title: "Artificial Intelligence with Python",
      description: "Build AI models using Python libraries like TensorFlow and PyTorch.",
      image:{
        url: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/06/Artificial-Intelligence-With-Python.jpg",
        filename: "listingimage",
      } ,
      tags: ["AI/ML"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Cloud Computing with AWS",
      description: "Master AWS services like EC2, S3, Lambda, and CloudFormation.",
      image:{
        url: "https://www.cromacampus.com/public/uploads/Blog/2024/02/week_1/Know-all-About-Amazon-Web-Services-in-Cloud-Computing.jpg",
        filename: "listingimage",
      } ,
      tags: ["Cloud"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Web Development with Django",
      description: "Build robust web applications using Django and Python.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLf6Cl5EyzpsxmEVSGiz_xai2b2fOzUSDf7w&s",
        filename: "listingimage",
      } ,
      tags: ["Backend"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Cybersecurity for Beginners",
      description: "Learn essential cybersecurity skills to protect networks and data.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStBZeUnKnfYWGcN_d1MMsw479KjQC8x3tYQ&s",
        filename: "listingimage",
      } ,
      tags: ["Cybersecurity"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Blockchain Development",
      description: "Understand blockchain fundamentals and build DApps using Ethereum.",
      image:{
        url: "https://i.ytimg.com/vi/DMMAiOlkyCc/maxresdefault.jpg",
        filename: "listingimage",
      } ,
      tags: ["Blockchain"],
      state: "Live",
      language: "English",
    },
    {
      title: "React Native for Mobile Apps",
      description: "Build cross-platform mobile applications with React Native.",
      image:{
        url: "https://ixorasolution.com/wp-content/uploads/Mobile-app-development-with-react-native.jpg",
        filename: "listingimage",
      } ,
      tags: ["App Development"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Game Development with Unreal Engine",
      description: "Create immersive 3D games using Unreal Engine.",
      image:{
        url: "https://i.ytimg.com/vi/6UlU_FsicK8/maxresdefault.jpg",
        filename: "listingimage",
      } ,
      tags: ["Game Development"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Networking Basics",
      description: "Learn the fundamentals of computer networks, protocols, and configurations.",
      image:{
        url: "https://i.ytimg.com/vi/J4Myf0UNkLI/sddefault.jpg",
        filename: "listingimage",
      } ,
      tags: ["Networking"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Data Science with R",
      description: "Analyze and visualize data using R programming.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkfFJWa_0VKg5NXQGdhHPIiylqBXfIL1tpA&s",
        filename: "listingimage",
      } ,
      tags: ["Data Science"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Mobile App Development with Flutter",
      description: "Develop stunning mobile apps using Flutter and Dart.",
      image:{
        url: "https://www.biztechcs.com/wp-content/uploads/2021/04/Why-Flutter-is-Better-for-App-Development-jpg-webp.webp",
        filename: "listingimage",
      } ,
      tags: ["App Development"],
      state: "Live",
      language: "English",
    },
    {
      title: "Big Data Analytics",
      description: "Learn tools like Hadoop and Spark to analyze large datasets.",
      image:{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJMPMcC9BwBnT0htykwRCoQImy0kXIAjfhA&s",
        filename: "listingimage",
      } ,
      tags: ["Data Science"],
      state: "Recorded",
      language: "English",
    },
    {
      title: "Introduction to Microservices",
      description: "Learn to build and deploy scalable microservices architecture.",
      image:{
        url: "https://media.licdn.com/dms/image/v2/C5612AQG_-kcA8sn0hA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1652366456134?e=2147483647&v=beta&t=VlkBkO9s--Fpiv4HoPQS6FLk_biOKRljmgoYg_B_yaM",
        filename: "listingimage",
      } ,
      tags: ["Backend"],
      state: "Recorded",
      language: "English",
    },
  ];
  
  module.exports = { data: sampleListings };
  