"use client";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";

const Header = () => {
  return (
    <div>
      <div className="bg-[#4A4C6C] h-10">
        <p className="text-white text-center pt-1.5">
          New here? Save 20% with code: YR24
        </p>
      </div>
      <div className="max-w-[1260px] mx-auto">
        <Navbar fluid={true}>
          <Navbar.Container className="flex items-center justify-between">
            <Navbar.Container className="flex items-center">
              <Navbar.Brand>
                <Image
                  src="/images/keep.svg"
                  alt="keep"
                  width="100"
                  height="40"
                />
              </Navbar.Brand>
              <Navbar.Divider></Navbar.Divider>
              <Navbar.Container
                tag="ul"
                className="lg:flex hidden items-center justify-between gap-8">
                <Navbar.Link linkName="hello" />
                <Navbar.Link linkName="Projects" />
                <Navbar.Link linkName="About" />
              </Navbar.Container>
              <Navbar.Collapse collapseType="sidebar">
                <Navbar.Container tag="ul" className="flex flex-col gap-5">
                  <Navbar.Link linkName="hello" />
                  <Navbar.Link linkName="Projects" />
                  <Navbar.Link linkName="Blogs" />
                  <Navbar.Link linkName="News" />
                  <Navbar.Link linkName="Resources" />
                </Navbar.Container>
              </Navbar.Collapse>
            </Navbar.Container>

            <Navbar.Container className="flex gap-2">
              <Button size="sm" type="link">
                <span>
                  <MagnifyingGlass size={20} color="#444" />
                </span>
                <span className="ml-2 text-metal-600">Search</span>
              </Button>
              <Button size="sm" type="primary">
                Contact
              </Button>
              <Navbar.Toggle />
            </Navbar.Container>
          </Navbar.Container>
        </Navbar>
      </div>
    </div>
  );
};
export default Header;
