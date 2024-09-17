import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GiMaterialsScience } from "react-icons/gi";
import { FaArrowRightLong, FaPeopleGroup } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useCallback, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

const MARGIN_Y = [4];
const BOX_MARGIN_Y = [1];

export default function HeroFiveComp() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Box mt={[10, 60]}>
        <Flex justifyContent={"center"} mb={8}>
          <Box
            textAlign={"center"}
            fontSize={[40, 60]}
            fontWeight={["700"]}
            lineHeight={"1"}
          >
            <Text>See what our members are saying.</Text>
          </Box>
        </Flex>
        <Box my={[10, 36]} position={"relative"}>
          <Swiper
            ref={sliderRef}
            // slidesPerView={1}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.4,
                spaceBetween: 10,
                navigation: false,
              },
              "@0.75": {
                slidesPerView: 1,
                navigation: true,
                // spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 1,
                navigation: true,
                // spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 1,
                navigation: true,
                // spaceBetween: 50,
              },
            }}
            centeredSlides={true}
            style={{
              "--edge": "rgba(0,0,0,.2)",
              "--inner": "#000",
              "--feather": "20rem",
            }}
            spaceBetween={30}
            loop={true}
            // navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Flex
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                display={["none", "flex"]}
              >
                <Box
                  p={16}
                  backgroundColor={"#222326"}
                  // height={"330px"}
                  width={"612px"}
                  borderRadius={10}
                  zIndex={1}
                >
                  <Text fontSize={24} fontWeight={"600"}>
                    “I’ve learned a positively immeasurable amount of things
                    from Timbaland and Natalie Portman. It gave me this sense of
                    possibility. Like I can actually do it. I can get a
                    Billboard hit single, and it’s not that far away.”
                  </Text>
                  <Flex mt={2} gap={2} fontSize={12} fontWeight={"600"}>
                    <Text>Robert</Text>
                    <Text>Entertainer, USA</Text>
                  </Flex>
                </Box>
                <Image
                  height={[100, 420]}
                  borderRadius={12}
                  position={"relative"}
                  left={"-2rem"}
                  src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/studentStories-taylor-3x4.jpeg"
                />
              </Flex>
              <Box
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                display={["block", "none"]}
              >
                <Image
                  height={[240, 420]}
                  w={"100%"}
                  objectFit={"cover"}
                  // borderRadius={12}
                  borderTopEndRadius={12}
                  borderTopLeftRadius={12}
                  // position={"relative"}
                  // left={"-2rem"}
                  src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/studentStories-taylor-3x4.jpeg"
                />
                <Box
                  p={4}
                  backgroundColor={"#222326"}
                  // height={"330px"}
                  // width={"612px"}
                  borderBottomRadius={10}
                  // borderRadius={10}
                  zIndex={1}
                >
                  <Text fontSize={16} fontWeight={"600"}>
                    “I’ve learned a positively immeasurable amount of things
                    from Timbaland and Natalie Portman. It gave me this sense of
                    possibility. Like I can actually do it. I can get a
                    Billboard hit single, and it’s not that far away.”
                  </Text>
                  <Flex mt={2} gap={2} fontSize={12} fontWeight={"600"}>
                    <Text>Robert</Text>
                    <Text>Entertainer, USA</Text>
                  </Flex>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                display={["none", "flex"]}
              >
                <Box
                  p={16}
                  backgroundColor={"#222326"}
                  // height={"330px"}
                  width={"612px"}
                  borderRadius={10}
                  zIndex={1}
                >
                  <Text fontSize={24} fontWeight={"600"}>
                    “I’ve learned a positively immeasurable amount of things
                    from Timbaland and Natalie Portman. It gave me this sense of
                    possibility. Like I can actually do it. I can get a
                    Billboard hit single, and it’s not that far away.”
                  </Text>
                  <Flex mt={2} gap={2} fontSize={12} fontWeight={"600"}>
                    <Text>Robert</Text>
                    <Text>Entertainer, USA</Text>
                  </Flex>
                </Box>
                <Image
                  height={[100, 420]}
                  borderRadius={12}
                  position={"relative"}
                  left={"-2rem"}
                  src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/studentStories-taylor-3x4.jpeg"
                />
              </Flex>
              <Box
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                display={["block", "none"]}
              >
                <Image
                  height={[240, 420]}
                  w={"100%"}
                  objectFit={"cover"}
                  // borderRadius={12}
                  borderTopEndRadius={12}
                  borderTopLeftRadius={12}
                  // position={"relative"}
                  // left={"-2rem"}
                  src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/studentStories-taylor-3x4.jpeg"
                />
                <Box
                  p={4}
                  backgroundColor={"#222326"}
                  // height={"330px"}
                  // width={"612px"}
                  borderBottomRadius={10}
                  // borderRadius={10}
                  zIndex={1}
                >
                  <Text fontSize={16} fontWeight={"600"}>
                    “I’ve learned a positively immeasurable amount of things
                    from Timbaland and Natalie Portman. It gave me this sense of
                    possibility. Like I can actually do it. I can get a
                    Billboard hit single, and it’s not that far away.”
                  </Text>
                  <Flex mt={2} gap={2} fontSize={12} fontWeight={"600"}>
                    <Text>Robert</Text>
                    <Text>Entertainer, USA</Text>
                  </Flex>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                display={["none", "flex"]}
              >
                <Box
                  p={16}
                  backgroundColor={"#222326"}
                  // height={"330px"}
                  width={"612px"}
                  borderRadius={10}
                  zIndex={1}
                >
                  <Text fontSize={24} fontWeight={"600"}>
                    “I’ve learned a positively immeasurable amount of things
                    from Timbaland and Natalie Portman. It gave me this sense of
                    possibility. Like I can actually do it. I can get a
                    Billboard hit single, and it’s not that far away.”
                  </Text>
                  <Flex mt={2} gap={2} fontSize={12} fontWeight={"600"}>
                    <Text>Robert</Text>
                    <Text>Entertainer, USA</Text>
                  </Flex>
                </Box>
                <Image
                  height={[100, 420]}
                  borderRadius={12}
                  position={"relative"}
                  left={"-2rem"}
                  src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/studentStories-taylor-3x4.jpeg"
                />
              </Flex>
              <Box
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                display={["block", "none"]}
              >
                <Image
                  height={[240, 420]}
                  w={"100%"}
                  objectFit={"cover"}
                  // borderRadius={12}
                  borderTopEndRadius={12}
                  borderTopLeftRadius={12}
                  // position={"relative"}
                  // left={"-2rem"}
                  src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/studentStories-taylor-3x4.jpeg"
                />
                <Box
                  p={4}
                  backgroundColor={"#222326"}
                  // height={"330px"}
                  // width={"612px"}
                  borderBottomRadius={10}
                  // borderRadius={10}
                  zIndex={1}
                >
                  <Text fontSize={16} fontWeight={"600"}>
                    “I’ve learned a positively immeasurable amount of things
                    from Timbaland and Natalie Portman. It gave me this sense of
                    possibility. Like I can actually do it. I can get a
                    Billboard hit single, and it’s not that far away.”
                  </Text>
                  <Flex mt={2} gap={2} fontSize={12} fontWeight={"600"}>
                    <Text>Robert</Text>
                    <Text>Entertainer, USA</Text>
                  </Flex>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                display={["none", "flex"]}
              >
                <Box
                  p={16}
                  backgroundColor={"#222326"}
                  // height={"330px"}
                  width={"612px"}
                  borderRadius={10}
                  zIndex={1}
                >
                  <Text fontSize={24} fontWeight={"600"}>
                    “I’ve learned a positively immeasurable amount of things
                    from Timbaland and Natalie Portman. It gave me this sense of
                    possibility. Like I can actually do it. I can get a
                    Billboard hit single, and it’s not that far away.”
                  </Text>
                  <Flex mt={2} gap={2} fontSize={12} fontWeight={"600"}>
                    <Text>Robert</Text>
                    <Text>Entertainer, USA</Text>
                  </Flex>
                </Box>
                <Image
                  height={[100, 420]}
                  borderRadius={12}
                  position={"relative"}
                  left={"-2rem"}
                  src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/studentStories-taylor-3x4.jpeg"
                />
              </Flex>
              <Box
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                display={["block", "none"]}
              >
                <Image
                  height={[240, 420]}
                  w={"100%"}
                  objectFit={"cover"}
                  // borderRadius={12}
                  borderTopEndRadius={12}
                  borderTopLeftRadius={12}
                  // position={"relative"}
                  // left={"-2rem"}
                  src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/studentStories-taylor-3x4.jpeg"
                />
                <Box
                  p={4}
                  backgroundColor={"#222326"}
                  // height={"330px"}
                  // width={"612px"}
                  borderBottomRadius={10}
                  // borderRadius={10}
                  zIndex={1}
                >
                  <Text fontSize={16} fontWeight={"600"}>
                    “I’ve learned a positively immeasurable amount of things
                    from Timbaland and Natalie Portman. It gave me this sense of
                    possibility. Like I can actually do it. I can get a
                    Billboard hit single, and it’s not that far away.”
                  </Text>
                  <Flex mt={2} gap={2} fontSize={12} fontWeight={"600"}>
                    <Text>Robert</Text>
                    <Text>Entertainer, USA</Text>
                  </Flex>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
