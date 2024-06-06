
import { Accordion } from "keep-react";



function QustionaboutMe() {
  return (
    <Accordion className="mb-10" flush={true}>
     
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>Q.  What services do you offer?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content>
       <h1 className=" text-xl font-poetsen"> I offer a range of web development services, including:</h1>
        <ul className=" list-style">
          <li > Custom website development</li>
          <li> Responsive design</li>
          <li> Web application development</li>
          <li> API integration</li>
          <li> Performance optimization</li>
          <li> Maintenance and support</li>
        </ul>

        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>Q. What technologies do you specialize in?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content>
          <h1 className="text-xl" >I specialize in a variety of technologies, including:</h1>
          <ul className=" list-style">
            <li> Front-end: HTML, CSS, JavaScript, React, Angular, Vue.js</li>
            <li> Back-end: Node.js, Express, Django, Ruby on Rails </li>
            <li> Databases: MySQL, PostgreSQL, MongoDB</li>
            <li> Other tools: Git, Docker, Webpack</li>
        </ul>
        </Accordion.Content>
      </Accordion.Panel>


      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>Q. Do you offer website maintenance after launch?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content>
        Yes, I offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and fully functional. This includes regular updates, bug fixes, and performance optimizations.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

export default QustionaboutMe












