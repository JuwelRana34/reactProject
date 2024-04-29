// import React from 'react'
import { Navbar} from "keep-react";
import Image from "./Image/developer.png"

export const NavbarComponent = () => {
  return (
    <Navbar className=" shadow-lg shadow-sky-100" fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <a className="flex items-center text-xl  ml-4 " href="/">   <img  className=" w-10 h-10 " src={Image} alt="Logo"  /> Juwel Rana</a>
           
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link href="/" linkName="Home" />
            <Navbar.Link  href="/Project" linkName="Projects" />
            <Navbar.Link href="/About"  linkName="About" />
            <Navbar.Link href="/Contact"  linkName="Contact" />
          </Navbar.Container>
          <Navbar.Collapse className="shadow-lg shadow-sky-100" collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5  ">
              <Navbar.Link href="/"  linkName="Home" />
              <Navbar.Link href="/Project"  linkName="Projects" />
              <Navbar.Link href="/About" linkName="About" />
              <Navbar.Link href="/Contact"  linkName="Contact" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
        <Navbar.Toggle />
      </Navbar.Container>
    </Navbar>
  );
}
