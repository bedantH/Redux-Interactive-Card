import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

interface IProps {
  title: String;
  children: React.ReactNode;
}

const Page = ({ title, children }: IProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Box as="section" pos={{ base: "absolute" }} zIndex="-1">
        <Box
          w="32vw"
          as="img"
          h="100vh"
          src="/bg-main-desktop.png"
          alt="main-bg"
        />
      </Box>
      {children}
    </React.Fragment>
  );
};

export default Page;
