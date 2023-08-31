import { FC, useMemo } from "react";
            import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
            import Header from "./common/Header/Header.tsx";
            import Home from "./pages/Home/Home.tsx";
            import "./App.css";
            import About from "./pages/About/About.tsx";
            import { HomeData } from "./common/types/HomeData.tsx";
            import { AboutData } from "./common/types/AboutData.tsx";
            import Contact from "./pages/Contact/Contact.tsx";
            import ContactData from "./common/types/ContactData.tsx";
            import Projects from "./pages/Projects/Projects.tsx";
            import NotFound from "./NotFound.tsx";
            import Project from "./pages/Project/Project.tsx";
                        
            const App: FC = () => {
              const ProjectOr404 = () => {
                const { slug } = useParams();
                  if (slug && userData.slugs.length > 0 && userData.slugs.some((s: { slug: string }) => s.slug === slug)) {
                      return <Project userData={userData} />;
                  } else {
                      return <NotFound />;
                  }
              };
                        
              const userData = useMemo(() => ({
                name: "Balach Subra",
                email: "balachsubra@gmail.com",
                phone: "coming soon",
                company: "test",
                location: "UK",
                about: "testing this out",
                skills: ["JavaScript","HTML","CSS","NodeJs","Python"],
                projects: [{"name":"Royal Pharmaceutical Society","description":"Professional membership body for pharmacists and pharmacy students.","roles":["Leade Qa Specialist, Qa Manager"],"updatedAt":"current","image":"./src/assets/img/rps.jpeg","id":"268","slug":"test"},{"name":"LexisNexis","description":"LexisNexis legal & professional solutions, products, technology, & services","roles":["Qa Consultant, Quality Engineer Lvl 1-3"],"updatedAt":"2023-08-28T10:04:30.597Z","image":"./src/assets/img/ln.jpeg","id":"269","slug":"title"}, {"name":"Sparta Global","description":"Providing cross-functional teams to power short-term and long-term projects.","roles":["SDET"],"updatedAt":"2023-08-28T10:04:30.597Z","image":"./src/assets/img/sg.png","id":"269","slug":"title"}], 
                work: [{"id":84,"company":"Coventry University","position":"Electrical Systems Engineering BEng (Hons)","startDate":"09/2010","endDate":"04/2015","description":"","orderId":1,"image":"./src/assets/img/cov.jpg"}],
                role: "USER",
                profession: "SDET/ QA",
                services: ["QUALITY_ASSURANCE","DEVOPS","CLOUD_COMPUTING","IT_CONSULTATION"],
                slugs: [{"slug":"test","header":"test","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"title","header":"Title","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"}]
              }),
              []
            );
            
            const homeData = useMemo(
                    () => ({
                      headerOne: "Balach Subra,",
                      headerTwo:" QA expert",
                      descriptionOne: "Making sure you delivering the best quality product for your end user!",
                      profileImage: "./src/assets/img/me.png",
                      sections: [                        {
                          type: "SKILL",
                          details: {
                            headerOne: "My broad set of services and skills",
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const aboutData = useMemo(
                    () => ({
                      headerOne: "Hello, I'm Balach Subra",
                      iconOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b443e2bb8e12b5faf51a7_about-hero-rigth-image-paperfolio-webflow-template.png",
                      iconTwo: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b440128f648585c383865_about-hero-left-image-paperfolio-webflow-template.png",
                      iconThree: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b52d3639fb5250039e574_my-story-image-paperfolio-webflow-template.png",
                      headerTwo: "My story as a Qualitiy ",
                      descriptionOne: "testing this out",
                      descriptionTwo: "Embarking on a journey fueled by curiosity and passion, I found solace in the world of code. From solving complex problems to creating user-friendly interfaces, every project has been a stepping stone in my development career. Continually learning and adapting, I've embraced new technologies and methodologies to build robust and efficient solutions. My path as a developer is more than a career; it's a lifelong pursuit of innovation, creativity, and technological advancement.",
                      sections: [
                        {
                          type: "STORY",
                          details: {
                            headerOne: "Breaking things since a child",
                            descriptionOne: "As far back as I can remember I've always had a knack at breaking things, both unintentionally and intentionally. I was always curious to how things worked and how it was built. This curiousocity was a what lead me down the path of engineering. I studied electrical systems for 5 years in university and have been working as a Qa for 6 years.",
                            bulletOne: "Passionate about testing.",
                            bulletTwo: "Keen eye for Quality.",
                            bulletThree: "Strong advocate of best design practices.",
                            imageOne: "https://gifdb.com/images/thumbnail/office-space-film-workers-kicking-printer-to-destroy-v16rlu070kpzk5gq.gif",
                            order: 1
                          }
                        },
                        {
                          type: "EDUCATION",
                          details: {
                            headerOne: "Education",
                            order: 2
                          }
                        },
                        {
                          type: "VALUE",
                          details: {
                            headerOne: "the core values that drive my work.",
                            descriptionOne: "Steering the helm of my career is a deeply ingrained set of core values. These principles not only guide my work ethic but also shape the way I view and approach design. Let's delve into the convictions that drive my professional journey.",
                            values: [{"value":"HARD_WORK"},{"value":"TRANSPARENCY"},{"value":"INNOVATION"},{"value":"GROWTH"}],
                            order: 3
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const projectsPageData = useMemo(
                    () => ({
                      headerOne: "Employment History",
                      descriptionOne: "Here are some of my recent Employers. I've worked on a wide range of projects, from website and app design to branding and graphic design. Each employer had its own unique challenges and opportunities."
                    }),
                    []
                  );
            
            const contactData = useMemo(
                    () => ({
                      headerOne: "Contact Me",
                      descriptionOne: "Don't hesitate to get in touch! Whether you're looking for a design consult, interested in a collaboration, or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
                      sections: [
                        // {
                        //   type: "FAQ",
                        //   details: {
                        //     headerOne: "Frequently Asked Questions",
                        //     descriptionOne: "From understanding my design process to discussing project timelines, I've gathered responses to questions often asked by clients and collaborators. If you can't find your answer here, feel free to reach out!",
                        //     faq: [{"question":"What is your Qa process?","answer":"My Qa process starts with understanding the client's needs, then moving onto research, requirement gathering, prototyping, and finally, implementation.","id":"158"},{"question":"How long does a project usually take?","answer":"The duration of a project varies depending on its complexity and scope, but typically it ranges from a few weeks to a few months.","id":"159"},{"question":"Do you collaborate with other Qa's?","answer":"Yes, I often collaborate with other various Qa's and believe that teamwork can lead to more innovative and comprehensive solutions.","id":"160"},{"question":"What types of projects do you work on?","answer":"I work on a wide range of projects, from website and apps to APIS and cloud infrastructures. Each project brings its own unique challenges and opportunities.","id":"161"},{"question":"How can I contact you for a project?","answer":"You can reach out to me via the contact form on this website, or directly through email. I look forward to discussing how we can work together.","id":"162"}],
                        //     order: 1
                        //   }
                        // },
                      ],
                    }),
                    []
                  );
            
            return (
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={<Home userData={userData} pageData={homeData as HomeData} />}
                  />
                  <Route
                    path="/contact"
                    element={
                      <Contact
                        pageData={contactData as ContactData}
                        userData={userData}
                      />
                    }
                  />
                  <Route
                    path="/projects"
                    element={<Projects pageData={projectsPageData} userData={userData} />}
                  />
                  <Route
                    path="/about"
                    element={
                      <About pageData={aboutData as AboutData} userData={userData} />
                    }
                  />
                  <Route path="/:slug" element={<ProjectOr404 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            );
          };
                    
          export default App;