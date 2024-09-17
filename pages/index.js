import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Box, Text } from "@chakra-ui/react";
import { HeroFirst, HomeComp } from "@/components/Home";

export default function Home() {
  return (
    <>
      <HomeComp />
    </>
  );
}
