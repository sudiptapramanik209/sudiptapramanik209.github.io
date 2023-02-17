// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Sudipta Pramanik",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    `Motivated and innovative aspiring full-stack web developer with hands-on experience in building websites with MERN stack and various web technologies including.`
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React Js",
    // svg: '',
    faClass: "fab fa-react",
  }
  ,
  {
    name: "Redux",
    svg: "M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z",
    // faClass: "fas fa-database",
  },
  {
    name: "npm",
    // svg:"",
    faClass: "fab fa-npm",
  },
  {
    name: "Git",
    faClass:"fa fa-git"
  },
  {
    name: "Github",
    faClass: "fa fa-github"
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  }
];
const projectDepolyBar=
    {
      github:"fab fa-github" ,
      deploy: "fas fa-globe"
    }



// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Ayoa Clone",
    skills: [<i className={'fab fa-html5'}></i>, <i className={'fab fa-js'}></i>, <i className={'fab fa-css3'}></i>],
    url: "https://github.com/Srahul2244/grouchy-dinner-9447",
    deployurl: "https://funny-buttercream-0aca42.netlify.app/",
    descriptions:`Use one of the largest deep learning networks ever created to generate unique and innovative ideas for anything you can think of. Ask the right questions. Breeze past blocks.this is ayoya where you can map your task to present.`,
    github:"fab fa-github" ,
    deploy: "fas fa-globe"
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Jcrew Clone",
    skills: [<i className={'fab fa-html5'}></i>, <i className={'fab fa-js'}></i>, <i className={'fab fa-css3'}></i>],
    url: "https://github.com/sudiptapramanik209/Jcrew-website-clone",
    deployurl: "https://calm-florentine-38a27c.netlify.app/",
    descriptions:`JCREW - an international clothing brand. This project uses HTML, CSS, and Javascript to showcase the functioning of an E-Commerce website. The project's main objective was to give the user a more effortless shopping experience and maintain a clean design.`,
    github:"fab fa-github" ,
    deploy: "fas fa-globe"
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project4",
    name: "GadgetRambo.com",
    skills: [<i className={'fab fa-html5'}></i>, <i className={'fab fa-react'}></i>, <i className={'fab fa-css3'}></i>],
    url: "https://github.com/Atanu8250/separate-grass-3333",
    deployurl: "https://gadget-rambo.netlify.app/",
    descriptions:`It is a leading technology, news, reviews and ecommerce plateform which selles Tech-Gadgets of various types (Phones, Laptops, Televisions, etc.). `,
    github:"fab fa-github" ,
    deploy: "fas fa-globe"
  }

  ,

  ,{
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Myntra",
    skills: [<i className={'fab fa-html5'}></i>, <i className={'fab fa-js'}></i>, <i className={'fab fa-css3'}></i>],
    url: "https://github.com/sudiptapramanik209/annoying-library-8134",
    deployurl: "https://timely-tiramisu-c3b5fe.netlify.app/",
    descriptions:`Get The Best Of Fashion From Your Favourite Brands On Myntra At Great Deals & Discounts. Shoppable Looks From India's Top Influencers At Myntra Studio. Hurry Up And Shop Now. Prices Are Melting Down. Shopping Paradise Found. Types: Heels, Shoes, Flats.`,
    github:"fab fa-github" ,
      deploy: "fas fa-globe"
  },
  


];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "hey, if you have any suggestions or queries feel free to contact me, please visit my social profiles below links. If You want to get my resume, you can download it from the below button.",
  copyright: "Sudipta Pramanik",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/sudiptapramanik209",
  facebook: "https://www.facebook.com/sudipta.pramanik.1806?mibextid=ZbWKwL",
  // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/sudipta-pramanik-497b031b5/",
  resume:"https://drive.google.com/drive/folders/1sgvIGtmO4ewQtE3sCmYEN4S3yClySmE9?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projectDepolyBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
