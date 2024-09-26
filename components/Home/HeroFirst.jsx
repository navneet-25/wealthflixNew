import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MONTSERRAT, OPEN_SANS } from "@/constants/Fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// import "swiper/css";
// import "swiper/css/pagination";

const MARGIN_Y = [4];
const BOX_MARGIN_Y = [1];

export default function HeroFirstComp() {
  return (
    <>
      <SimpleGrid columns={[1, 2]}>
        <Box>
          <Text
            textTransform={"uppercase"}
            fontWeight={"800"}
            fontSize={["3rem", "5rem"]}
            lineHeight={"0.85"}
            letterSpacing={"0.01em"}
          >
           Building The Next Generation of Entrepreneurs
          </Text>
          <Box my={5}>
            <Text fontSize={18}>
              Get unlimited access to thousands of bite-sized lessons.
            </Text>
          </Box>
          {/*  */}
          <Box height={1} backgroundColor={"palegreen"}></Box>
          {/*  */}
          <Box w={["100%", "80%"]}>
            <Box my={MARGIN_Y} fontSize={24} fontWeight={"600"}>
              <Text>Learn to build generational wealth
              </Text>
            </Box>
            {/*  */}
            <Box my={MARGIN_Y} fontFamily={MONTSERRAT}>
              <Box
                paddingX={7}
                paddingY={3}
                backgroundColor={"#222326"}
                fontSize={[14, 16]}
                fontWeight={"600"}
                marginY={BOX_MARGIN_Y}
                borderRadius={4}
              >
                <Text>Develop my career or leadership skills</Text>
              </Box>
              <Box
                paddingX={7}
                paddingY={3}
                backgroundColor={"#222326"}
                fontSize={[14, 16]}
                fontWeight={"600"}
                marginY={BOX_MARGIN_Y}
                borderRadius={4}
              >
                <Text>Develop my career or leadership skills</Text>
              </Box>
              <Box
                paddingX={7}
                paddingY={3}
                backgroundColor={"#222326"}
                fontSize={[14, 16]}
                fontWeight={"600"}
                marginY={BOX_MARGIN_Y}
                borderRadius={4}
              >
                <Text>Develop my career or leadership skills</Text>
              </Box>
            
            </Box>
            <Button>Continue</Button>
          </Box>
        </Box>
        <Box>
          {/* <Box className="container">
            <Box className="loop-text">
              <Image
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
              />
            </Box>
          </Box> */}
          {/* <marquee behavior="scroll" direction="up">
            <Image
              borderRadius={8}
              objectFit={"cover"}
              height={"inherit"}
              src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
            />
          </marquee> */}
          {/* <Swiper
            slidesPerView={1.6}
            spaceBetween={30}
            direction={"vertical"}
            // pagination={{
            //   clickable: true,
            // }}
            autoplay={{
              delay: 1,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_04.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_02.png"
              />
            </SwiperSlide>
          </Swiper> */}
          <Box
            height={["500px", "800px"]}
            overflow={"hidden"}
            // className="boxes"
            // animation={"scrolling 50s linear infinite"}
            // style={{
            //   animationPlayState: "running",
            // }}
            as="marquee"
            direction="up"
            transform={"translateY(50px)"}
          >
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                objectFit={"cover"}
                height={"inherit"}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_06.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_08.png"
              />
            </Box>
            <Box
              className="box"
              mb={5}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                display={"block"}
                borderRadius={8}
                src="https://www.masterclass.com/cdn-cgi/image/width=384,quality=75,format=webp/https://static.masterclass.com/vertical_scroll_hero_image_cropped_01.png"
              />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
}
