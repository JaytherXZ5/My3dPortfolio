import {
    linkedin,
    facebook,
    gmail,
    github,
    faceattend,
    hotelbook,
    vrgame,
    drs,
    backend,
    gamedeveloper,
    reactnative,
    mmsu,
    python,
    cplusplus,
    java,
    nextjs,
    vuejs,
    laravel,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id:"projects",
      title:"Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: reactnative,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: gamedeveloper,
    },
  ];
  
  const technologies = [

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "laravel",
      icon: laravel
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
    {
      name: "vuejs",
      icon: vuejs,
    },
    {
      name: "python",
      icon: python
    },
    {
      name: "threejs",
      icon: threejs
    }

  ];
  
  const experiences = [
    {
      title: "Intern Software Developer",
      company_name: "Mariano Marcos State University, Information Technology Center",
      icon: mmsu,
      iconBg: "#383E56",
      date: "September 2023 – January 2024",
      points: [
        "Developing and maintaining web applications using Vue.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing feedback to other developers.",
      ],
    },
    
  ];

  const socials = [
    {
      name: "gmail",
      icon: gmail,
    },
    {
      name: "facebook",
      icon: facebook,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "linkedin",
      icon: linkedin,
    },
  ]
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Document Repository System",
      description:
        "Document repository system designed for file management within a college setting. The system allows users to upload documents and categorize them by department, whether for teaching or administrative purposes. It also accredits the documents to specific areas within each department, making it easy to organize and retrieve files.",
      tags: [
        {
          name: "Vue.JS",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: drs,
      source_code_link: "https://github.com/JaytherXZ5/drs_mmsu-Document-Repository-MMSUSystem-",
    },
    {
      name: "Ilocos Norte Hotel Booking",
      description:
        "The Hotel Booking Web Application is designed to facilitate seamless and efficient hotel booking services across Ilocos Norte. It serves as a centralized platform that connects travelers with hotels, ensuring a convenient and reliable booking experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: hotelbook,
      source_code_link: "https://github.com/JaytherXZ5/IlocosNorteHotelBooking",
    },
    {
      name: "MMSU VR CHRONICLES",
      description:
        "MMSU VR Chronicles is an immersive Virtual Reality game that brings Mariano Marcos State University's history to life. The game takes players through the university's milestones, interactive gameplay, and detailed 3D environments.",
      tags: [
        {
          name: "unrealengine",
          color: "blue-text-gradient",
        },

      ],
      image: vrgame ,
      source_code_link: "https://github.com/JaytherXZ5/MMSU-VR-CHRONICLES",
    },
    {
      name: "Face Recognition System",
      description:
        "A Face Recognition Attendance System developed in Python Tkinter utilizing OpenCV libraries, programmed to detect and recognize faces from camera feed, creating a CSV file spreadsheet to save attendance.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "csv",
          color: "green-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
      ],
      image: faceattend ,
      source_code_link: "https://github.com/JaytherXZ5/FaceRecognitionAttendance",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };