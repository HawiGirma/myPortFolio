import emailjs from "emailjs-com";
import dividor from "./assets/dividor.svg";
import my from "./assets/myPhoto.png";
import upper from "./assets/Group 3.svg";
import lower from "./assets/Vector 2.png";
import quote from "./assets/Vector.svg";
import star from "./assets/star.svg";
import grid from "./assets/logo2.png";
import ser from "./assets/service.png";
import ser1 from "./assets/service1.png";
import ser2 from "./assets/service2.png";
import main from "./assets/profile.png";
import church from "./assets/Church.png";
import dynamic from "./assets/Dynamic.png";
import kefita from "./assets/Kefita.png";
import mind from "./assets/MindHub.png";
import ethio from "./assets/Ethio.png";
import amba from "./assets/Amba.png";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <nav className="bg-slate-900 px-8 my-4 p-1 justify-self-center rounded-full w-fit">
      <div className="flex items-center justify-center gap-6 font-Poppins">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-white bg-orange-500 px-4 py-2 rounded-full"
        >
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="text-white">
          About
        </Link>
        <Link to="services" smooth={true} duration={500} className="text-white">
          Services
        </Link>
        <Link to="contact" smooth={true} duration={500} className="text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
}

// function NavBar() {
//   return (
//     <nav className="bg-slate-900 px-8 my-4  p-1 justify-self-center rounded-full w-fit ">
//       <div className="flex items-center  justify-center gap-6 font-Poppins">
//         <a href="#" className="text-white bg-orange-500 px-4 py-2 rounded-full">
//           Home
//         </a>
//         <a href="#about" className="text-white">
//           About
//         </a>
//         <a href="#services" target="blank" className="text-white">
//           Services
//         </a>
//         <a href="#contact" className="text-white">
//           Contact
//         </a>
//         <img src={grid} className="text-white h-16 mx-16" href="#" />
//         <a href="#projects" className="text-white">
//           Projects
//         </a>
//         <a
//           href="https://drive.google.com/file/d/1qG1DOCHNRI0OxdPpBSX8e_F2kGGVgVXh/view?usp=sharing"
//           className="text-white"
//         >
//           Resume
//         </a>
//         <img
//           src={git}
//           className="text-white h-8 mx-16"
//           href="https://github.com/HawiGirma"
//         />
//       </div>
//     </nav>
//   );
// }

function Intro() {
  return (
    <div className="px-0 font-Poppins ">
      <img
        src={upper}
        className="rounded-full w-32 h-32 mx-auto my-30"
        alt="Upper"
      />
      <h1 className="align-center font-Poppins text-6xl text-center my-0">
        I'm <span className="text-orange-500 text-8xl">Hawi Girma</span>, <br />
        UI/UX Designer, Frontend Developer
      </h1>
      <img
        src={lower}
        className="rounded-full w-32 h-32 mx-auto my-0 align-left float-left"
        alt="Lower"
      />
      <div className="items-center flex justify-between gap-4 bg-hero">
        <div>
          <img src={quote} className="" alt="Quote" />
          <p>
            Hawi's Exceptional UI design
            <br />
            ensured our website’s success.
            <br />
            Highly Recommended
          </p>
        </div>
        <img src={main} className="w-7/12" alt="Profile" />
        <div className="flex flex-col justify-end items-start">
          <img src={star} className="" alt="Star" />
          <h2>3 Years</h2>
          <p>Experience</p>
        </div>
      </div>
      <div className="flex px-4 py-2 justify-self-center border-2 border-gray-300 justify-center bg-white-200 items-center space-x-4 mt-4 w-fit rounded-full ">
        <a
          href="#"
          className="bg-orange-500 text-white px-6 py-2 rounded-full flex items-center shadow-lg"
        >
          <span className="text-xl">Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>

        <a href="#" className="text-gray-800  px-6 py-2 ">
          Hire me
        </a>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div id="services" className="w-full bg-slate-950  my-8  py-16 ">
      <h1 className="text-orange-500 text-3xl font-bold align-center my-8 mx-16">
        My Service
      </h1>
      <div className=" grid grid-rows-1 grid-flow-col gap-10 gap-y-10 justify-evenly  font-Poppins ">
        <img src={ser} className="w-80 h-96 grid-9/12" />
        <img src={ser1} className="w-80 h-96" />
        <img src={ser2} className="w-80 h-96" />
      </div>
    </div>
  );
}

function Work() {
  const workExperience = [
    {
      title: "UI/UX Designer at Kefita Technology",
      dates: "October 2024 - Present",
    },
    {
      title: "UI/UX Designer at AmbaLay Co",
      dates: "January 2025 - Present",
    },
    {
      title: "Intern at Dynamic Technology",
      dates: "August 2024 - October 2024",
    },
    {
      title: "Intern at Kefita Technology",
      dates: "August 2024 - October 2024",
    },
  ];

  const internships = [
    {
      title: "Internship at Kefita Technology",
      description:
        "During my internship at Kefita Technology, I gained valuable hands-on experience in UI/UX design and software development. I contributed to real projects like website redesigns and application interfaces, working alongside a talented team to create intuitive and responsive digital solutions. This experience strengthened my problem-solving and communication skills while deepening my passion for user-centered design.",
    },
    {
      title: "Internship Program at AmbaLay Co",
      description:
        "As an intern at AmbaLay Co, I contributed to design and development projects, focusing on creating engaging user experiences and optimizing digital solutions. My role involved collaborating with cross-functional teams and enhancing my technical and creative skills.",
    },
    {
      title: "Internship Program at Dynamic Technology",
      description:
        "At Dynamic Technology, I worked on UI/UX design projects, learning to integrate user feedback into design iterations and improving overall usability. I gained experience in both web and mobile app design, developing skills that are essential for creating impactful digital products.",
    },
    {
      title: "Internship Program at AmbaLay Co",
      description:
        "During my internship at AmbaLay Co, I assisted with website design and development, focusing on user interface enhancements and ensuring a seamless experience across multiple platforms. I gained practical experience in design tools and collaborated closely with senior designers to deliver high-quality results.",
    },
  ];

  return (
    <div className="my-16 p-16">
      <h1 className="text-orange-500 text-3xl font-bold align-center m-16">
        My Work Experience
      </h1>
      <div className="flex gap-32 items-start justify-center">
        <div className="flex flex-col gap-32">
          {workExperience.map((work, index) => (
            <div className="w-96" key={index}>
              <h3 className="text-2xl font-bold font-Poppins">{work.title}</h3>
              <p className="text-slate-700 text-1xl font-Poppins">
                {work.dates}
              </p>
            </div>
          ))}
        </div>
        {dividor && <img src={dividor} alt="Divider" />}
        <div className="flex flex-col gap-16">
          {internships.map((internship, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold font-Poppins">
                {internship.title}
              </h3>
              <p className="text-slate-700 text-1xl font-Poppins h-1/4">
                {internship.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div
      id="about"
      className="grid grid-rows-1 grid-flow-col gap-10 justify-evenly items-start p-16 my-16"
    >
      <img src={my} alt="Profile" />
      <div>
        <h1 className="text-orange-500 text-3xl font-bold text-center m-4">
          About Me
        </h1>
        <p className="text-slate-700 text-lg font-Poppins">
          I'm Hawi Girma, a UI/UX Designer at Kefita Technology with a
          background in Software Engineering and Marketing Management from Addis
          Ababa Science and Technology University (AASTU). Passionate about
          crafting intuitive and engaging digital experiences, I recently
          collaborated with my colleagues to design a fully responsive website.
          Beyond design, I have a keen interest in AI, machine learning, and
          data structures, constantly expanding my knowledge in system analysis,
          computer architecture, and algorithms. <br /> <br /> In addition to my
          professional work, I manage the Codemile Telegram channel, where I
          share insights and resources on coding, UI/UX, and technology trends.
          My enthusiasm for problem-solving and innovation drives me to explore
          new technologies like React and Google Apps Script, integrating them
          into real-world projects. Whether working on front-end design, AI
          applications, or software development, I strive to bridge creativity
          with functionality to create meaningful digital solutions.{" "}
        </p>
        <div className="flex justify-between mt-6">
          {[
            { count: "100+", label: "Pages" },
            { count: "10+", label: "Projects" },
            { count: "50+", label: "Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center px-4 py-2">
              <h1 className="text-3xl font-bold">{stat.count}</h1>
              <p className="text-gray-600 font-Poppins">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="flex px-4 py-2 justify-center items-center border-2 border-gray-300 mt-4 w-fit rounded-full hover:bg-orange-500 hover:text-white cursor-pointer">
          <a href="#" className="text-gray-800 font-600 font-Poppins px-6 py-2">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ title, description, image, liveLink }) => (
  <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-700 border-orange-600 rounded-lg p-8">
    <img src={image} alt={title} className="w-64 rounded-lg object-cover" />
    <div className="flex flex-col gap-4 md:ml-6">
      <h3 className="text-xl font-semibold font-Poppins text-white mb-2">
        {title}
      </h3>
      <p className="text-white font-Poppins mb-4">{description}</p>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 w-32 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
      >
        View Design
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      title: "MindHub",
      description:
        "MindHub is an innovative project aimed at bridging the gap between technology and mental well-being by providing a seamless digital platform for mindfulness, productivity, and self-improvement. Designed with a user-centric approach, MindHub integrates AI-driven insights, habit tracking, and personalized recommendations to help users cultivate healthier routines and enhance their mental resilience. With an intuitive UI/UX, the platform ensures a smooth and engaging experience, making self-care more accessible and effective. Whether it's guided meditation, goal setting, or community support, MindHub empowers individuals to take charge of their mental wellness through technology-driven solutions.",
      image: mind,
      liveLink: "#",
    },
    {
      title: "School Management System",
      description:
        "The School Management System I worked on was designed to streamline administrative tasks, enhance communication, and improve overall efficiency within educational institutions. With an intuitive UI/UX, the system provided features like student enrollment, attendance tracking, grade management, and teacher-student interactions, ensuring a seamless experience for both educators and learners. By integrating modern technologies, the platform simplified complex school operations, reducing manual workload and enabling real-time data access. My role in the project focused on crafting a user-friendly interface that optimized navigation and usability, making school administration more efficient and accessible.",
      image: dynamic,
      liveLink: "#",
    },
    {
      title: "Church App",
      description:
        "I worked on was designed to enhance community engagement and streamline church activities through a seamless digital experience. It featured tools for event scheduling, sermon streaming, donation management, and member communication, allowing churches to connect with their congregation effortlessly. With a focus on user-friendly UI/UX, I ensured that the app was intuitive and accessible for all users, from pastors to church members. By integrating modern technology, the app helped churches strengthen their outreach, improve organization, and create a more connected faith community.",
      image: church,
      liveLink: "#",
    },
    {
      title: "Kefita Technology Website",
      description:
        " The Kefita Technology Website was designed to showcase the company's innovative digital solutions and services with a modern, fully responsive interface. Collaborating with my colleagues, we focused on creating a visually appealing and user-friendly platform that highlights Kefita Technology’s expertise in software development, UI/UX design, and emerging technologies. The website features intuitive navigation, engaging content, and seamless performance across devices, ensuring an optimal user experience. By blending creativity with functionality, we delivered a digital presence that effectively represents Kefita Technology’s vision and commitment to technological excellence.",
      image: kefita,
      liveLink: "#",
    },
    {
      title: "AmbaCo Map",
      description:
        " The Amba Co Map project was developed to provide an interactive and user-friendly mapping solution for businesses and individuals. Designed with a clean and intuitive UI/UX, the platform allows users to easily navigate locations, access business listings, and find essential services with real-time updates. My role in the project focused on optimizing the visual design and user experience, ensuring seamless interaction and accessibility across devices. By integrating modern mapping technologies, Amba Co Map enhances location-based services, making navigation and local business discovery more efficient and engaging.",
      image: amba,
      liveLink: "#",
    },
    {
      title: "Ethio telecom website redesign",
      description:
        "The EthioTelecom Website Redesign project aimed to enhance user experience, modernize the interface, and improve accessibility for millions of customers. Focusing on a clean, intuitive, and responsive design, we restructured the navigation, optimized service accessibility, and incorporated a visually engaging layout. My role involved crafting a seamless UI/UX that simplifies browsing, making it easier for users to explore services, manage accounts, and access support. By integrating modern design principles and user feedback, the new website ensures a smoother digital experience, reflecting EthioTelecom’s commitment to innovation and customer satisfaction.",
      image: ethio,
      liveLink: "#",
    },
  ];

  return (
    <div id="projects" className="w-full mx-auto p-16 bg-slate-950">
      <h2 className="text-3xl text-orange-600 font-bold text-center mb-6">
        My Projects
      </h2>
      <div className="gap-8 flex flex-col">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

// const Footer = () => {
//   const socialMedia = [
//     {
//       platform: "LinkedIn",
//       link: "https://www.linkedin.com/in/hawigirma/",
//     },
//     { platform: "Telegram", link: "https://t.me/CodeMile" },
//     { platform: "Behance", link: "#" },
//   ];

//   return (
//     <footer id="contact" className="bg-black text-white font-Poppins py-10">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Logo and About */}
//         <div>
//           <img src={grid} alt="Logo" />
//           <p className="text-gray-400 text-sm mb-6">
//             "Crafting seamless digital experiences with a passion for design,
//             innovation, and user-centered solutions."
//           </p>
//           <div className="flex space-x-4">
//             {socialMedia.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.link}
//                 className="text-gray-400 hover:text-white hover:text-orange-600"
//                 target="blank"
//               >
//                 {item.platform}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Navigation</h3>
//           <ul className="text-gray-400 text-sm space-y-2">
//             <li>Phone: +251 99 698 1777</li>
//             <li>Email: hawigirmamegersag@gmail.com</li>
//             <li>Telegram: hawigirmamegersag@gmail.com</li>
//           </ul>
//         </div>

//         {/* Contact Form */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-orange-500 px-4 py-2 rounded-md text-sm hover:bg-orange-600"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
//         <p>Copyright © 2025 Hawi Girma. All Rights Reserved.</p>
//         <p className="mt-2">
//           <a href="#" className="hover:text-white">
//             User Terms & Conditions
//           </a>{" "}
//           |{" "}
//           <a href="#" className="hover:text-white">
//             Privacy Policy
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_noyeb0j",
      "template_xq5hscn",
      e.target,
      "JG1qPNWrJa-tLnTd3"
    )
    .then(
      (result) => {
        console.log("Message Sent:", result.text);
      },
      (error) => {
        console.log("Error:", error.text);
      }
    );
};

function Footer() {
  const socialMedia = [
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/hawigirma/",
    },
    { platform: "Telegram", link: "https://t.me/CodeMile" },
    { platform: "Behance", link: "#" },
  ];

  return (
    <footer id="contact" className="bg-black text-white font-Poppins py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <img src={grid} alt="Logo" />
          <p className="text-gray-400 text-sm mb-6">
            "Crafting seamless digital experiences with a passion for design,
            innovation, and user-centered solutions."
          </p>
          <div className="flex space-x-4">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-400 hover:text-white hover:text-orange-600"
                target="blank"
              >
                {item.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Phone: +251 99 698 1777</li>
            <li>Email: hawigirmamegersag@gmail.com</li>
            <li>Telegram: hawigirmamegersag@gmail.com</li>
          </ul>
        </div>
        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 px-4 py-2 rounded-md text-sm hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Copyright Section */}

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <p>Copyright © 2025 Hawi Girma. All Rights Reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white">
            User Terms & Conditions{" "}
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-white">
            Privacy Policy{" "}
          </a>
        </p>{" "}
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Grid />
      <About />
      <Projects />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
