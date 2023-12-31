"use client";
import Image from "next/image";
import { Navbar, Button, Typography } from "keep-react";
import logo from "../../../assets/logo.svg";
import { GoHeart } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className="bg-[#4A4C6C] h-10">
        <Typography variant="body-5" className="text-white text-center pt-1.5">
          New here? Save 20% with code: YR24
        </Typography>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <Navbar fluid={true}>
          <Navbar.Container className="flex items-center justify-between">
            <Navbar.Container className="flex items-center">
              <Navbar.Brand className="flex justify-normal items-center">
                <Image src={logo} alt="logo" width="30" height="30" />
                <h1 className="font-[900] tracking-widest mt-2 text-[22px]">
                  STICKYSTEPS
                </h1>
              </Navbar.Brand>
              <Navbar.Divider></Navbar.Divider>
              <Navbar.Container
                tag="ul"
                className="lg:flex hidden items-center justify-between gap-8">
                <Navbar.Link linkName="Women" />
                <Navbar.Link linkName="Men" />
                <Navbar.Link linkName="Kids" />
                <Navbar.Link linkName="Classics" />
                <Navbar.Link linkName="Sport" />
                <Navbar.Link linkName="Sale" />
              </Navbar.Container>
              <Navbar.Collapse collapseType="sidebar">
                <Navbar.Container tag="ul" className="flex flex-col gap-5">
                  <Navbar.Link linkName="Women" />
                  <Navbar.Link linkName="Men" />
                  <Navbar.Link linkName="Kids" />
                  <Navbar.Link linkName="Classics" />
                  <Navbar.Link linkName="Sport" />
                  <Navbar.Link linkName="Sale" />
                </Navbar.Container>
              </Navbar.Collapse>
            </Navbar.Container>

            <Navbar.Container className="flex gap-2">
              <Button size="sm" type="link" circle={true}>
                <GoHeart size={20} color="#181818" />
              </Button>
              <Button size="sm" type="link" circle={true}>
                <BsCart3 size={20} color="#181818" />
              </Button>
              <Button size="sm" type="link" circle={true}>
                <HiOutlineUser size={20} color="#181818" />
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
