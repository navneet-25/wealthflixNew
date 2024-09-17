import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
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
import { FaPeopleGroup } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useCallback, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/pagination";

const MARGIN_Y = [4];
const BOX_MARGIN_Y = [1];

export default function HeroThreeComp() {
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
      <Box mb={[20, 20]}>
        <Flex justifyContent={"center"} mb={20}>
          <Box
            textAlign={"center"}
            fontSize={[40, 60]}
            fontWeight={["700"]}
            lineHeight={"1"}
          >
            <Text>A dose of inspiration,</Text>
            <Text>whenever you need it.</Text>
          </Box>
        </Flex>
        <Flex
          gap={[2]}
          wrap={["nowrap", "wrap"]}
          overflow={["auto", "unset"]}
          justifyContent={["unset", "center"]}
          className="hide-scrollbar"
        >
          <Button variant={"customOne"} leftIcon={<GiMaterialsScience />}>
            Custom
          </Button>
          <Button variant={"customOne"} leftIcon={<FaPeopleGroup />}>
            Acting & Performing Arts
          </Button>
          <Button variant={"customOne"} leftIcon={<FaPeopleGroup />}>
            Acting & Performing Arts
          </Button>
          <Button variant={"customOne"} leftIcon={<FaPeopleGroup />}>
            Acting & Performing Arts
          </Button>
          <Button variant={"customOne"} leftIcon={<FaPeopleGroup />}>
            Acting & Performing Arts
          </Button>
          <Button variant={"customOne"} leftIcon={<FaPeopleGroup />}>
            Acting & Performing Arts
          </Button>
        </Flex>
        <Box>
          <HStack justifyContent={"space-between"} my={5}>
            <Flex gap={4} alignItems={"baseline"}>
              <Box>
                <Text fontSize={20} fontWeight={"700"}>
                  Popular now
                </Text>
              </Box>
              <Box>
                <Text color={"grey"} fontWeight={"600"}>
                  See all
                </Text>
              </Box>
            </Flex>
            <Flex gap={4}>
              <Box
                padding={2}
                backgroundColor={"#6a6a6a"}
                borderRadius={"50%"}
                cursor={"pointer"}
                className="prev-arrow"
                onClick={handlePrev}
              >
                <FaAngleLeft />
              </Box>
              <Box
                padding={2}
                backgroundColor={"#6a6a6a"}
                borderRadius={"50%"}
                cursor={"pointer"}
                className="next-arrow"
                onClick={handleNext}
              >
                <FaAngleRight />
              </Box>
            </Flex>
          </HStack>
          <Swiper
            ref={sliderRef}
            // slidesPerView={4.5}
            centeredSlides={true}
            style={{
              "--edge": "rgba(0,0,0,.2)",
              "--inner": "#000",
              "--feather": "20rem",
            }}
            spaceBetween={30}
            // freeMode={true}
            // autoplay={true}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.4,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            loop={true}
            // modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box position={"relative"}>
                <Box
                  position={"absolute"}
                  borderRadius={12}
                  width={"100%"}
                  height={"100%"}
                  top={0}
                  left={0}
                  background={
                    "linear-gradient(0deg,#191c21 0,rgba(25,28,33,.5) 50%,rgba(25,28,33,0) 90%) 50% no-repeat"
                  }
                  textAlign={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                >
                  <Text
                    textAlign={"center"}
                    lineHeight={"0.80"}
                    fontSize={50}
                    fontWeight={"600"}
                  >
                    Anna Ford Willims
                  </Text>
                  <Box
                    height={1}
                    backgroundColor={"#fff"}
                    margin={"auto"}
                    mt={6}
                    mb={2}
                    w={4}
                  ></Box>
                  <Text fontWeight={"600"}>
                    Teaches Creativity and Leadership
                  </Text>
                  <Text fontSize={10} mb={6}>
                    2 hours 36 minutes
                  </Text>
                </Box>
                <Image
                  borderRadius={12}
                  src="https://www.masterclass.com/course-images/attachments/j33vns82wjlfl0qsk2zxt1atbhkd?width=395&height=702&quality=75&dpr=1"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box position={"relative"}>
                <Box
                  position={"absolute"}
                  borderRadius={12}
                  width={"100%"}
                  height={"100%"}
                  top={0}
                  left={0}
                  background={
                    "linear-gradient(0deg,#191c21 0,rgba(25,28,33,.5) 50%,rgba(25,28,33,0) 90%) 50% no-repeat"
                  }
                  textAlign={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                >
                  <Text
                    textAlign={"center"}
                    lineHeight={"0.80"}
                    fontSize={50}
                    fontWeight={"600"}
                  >
                    Anna Ford Willims
                  </Text>
                  <Box
                    height={1}
                    backgroundColor={"#fff"}
                    margin={"auto"}
                    mt={6}
                    mb={2}
                    w={4}
                  ></Box>
                  <Text fontWeight={"600"}>
                    Teaches Creativity and Leadership
                  </Text>
                  <Text fontSize={10} mb={6}>
                    2 hours 36 minutes
                  </Text>
                </Box>
                <Image
                  borderRadius={12}
                  src="https://www.masterclass.com/course-images/attachments/j33vns82wjlfl0qsk2zxt1atbhkd?width=395&height=702&quality=75&dpr=1"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box position={"relative"}>
                <Box
                  position={"absolute"}
                  borderRadius={12}
                  width={"100%"}
                  height={"100%"}
                  top={0}
                  left={0}
                  background={
                    "linear-gradient(0deg,#191c21 0,rgba(25,28,33,.5) 50%,rgba(25,28,33,0) 90%) 50% no-repeat"
                  }
                  textAlign={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                >
                  <Text
                    textAlign={"center"}
                    lineHeight={"0.80"}
                    fontSize={50}
                    fontWeight={"600"}
                  >
                    Anna Ford Willims
                  </Text>
                  <Box
                    height={1}
                    backgroundColor={"#fff"}
                    margin={"auto"}
                    mt={6}
                    mb={2}
                    w={4}
                  ></Box>
                  <Text fontWeight={"600"}>
                    Teaches Creativity and Leadership
                  </Text>
                  <Text fontSize={10} mb={6}>
                    2 hours 36 minutes
                  </Text>
                </Box>
                <Image
                  borderRadius={12}
                  src="https://www.masterclass.com/course-images/attachments/j33vns82wjlfl0qsk2zxt1atbhkd?width=395&height=702&quality=75&dpr=1"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box position={"relative"}>
                <Box
                  position={"absolute"}
                  borderRadius={12}
                  width={"100%"}
                  height={"100%"}
                  top={0}
                  left={0}
                  background={
                    "linear-gradient(0deg,#191c21 0,rgba(25,28,33,.5) 50%,rgba(25,28,33,0) 90%) 50% no-repeat"
                  }
                  textAlign={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                >
                  <Text
                    textAlign={"center"}
                    lineHeight={"0.80"}
                    fontSize={50}
                    fontWeight={"600"}
                  >
                    Anna Ford Willims
                  </Text>
                  <Box
                    height={1}
                    backgroundColor={"#fff"}
                    margin={"auto"}
                    mt={6}
                    mb={2}
                    w={4}
                  ></Box>
                  <Text fontWeight={"600"}>
                    Teaches Creativity and Leadership
                  </Text>
                  <Text fontSize={10} mb={6}>
                    2 hours 36 minutes
                  </Text>
                </Box>
                <Image
                  borderRadius={12}
                  src="https://www.masterclass.com/course-images/attachments/j33vns82wjlfl0qsk2zxt1atbhkd?width=395&height=702&quality=75&dpr=1"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box position={"relative"}>
                <Box
                  position={"absolute"}
                  borderRadius={12}
                  width={"100%"}
                  height={"100%"}
                  top={0}
                  left={0}
                  background={
                    "linear-gradient(0deg,#191c21 0,rgba(25,28,33,.5) 50%,rgba(25,28,33,0) 90%) 50% no-repeat"
                  }
                  textAlign={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                >
                  <Text
                    textAlign={"center"}
                    lineHeight={"0.80"}
                    fontSize={50}
                    fontWeight={"600"}
                  >
                    Anna Ford Willims
                  </Text>
                  <Box
                    height={1}
                    backgroundColor={"#fff"}
                    margin={"auto"}
                    mt={6}
                    mb={2}
                    w={4}
                  ></Box>
                  <Text fontWeight={"600"}>
                    Teaches Creativity and Leadership
                  </Text>
                  <Text fontSize={10} mb={6}>
                    2 hours 36 minutes
                  </Text>
                </Box>
                <Image
                  borderRadius={12}
                  src="https://www.masterclass.com/course-images/attachments/j33vns82wjlfl0qsk2zxt1atbhkd?width=395&height=702&quality=75&dpr=1"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box position={"relative"}>
                <Box
                  position={"absolute"}
                  borderRadius={12}
                  width={"100%"}
                  height={"100%"}
                  top={0}
                  left={0}
                  background={
                    "linear-gradient(0deg,#191c21 0,rgba(25,28,33,.5) 50%,rgba(25,28,33,0) 90%) 50% no-repeat"
                  }
                  textAlign={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                >
                  <Text
                    textAlign={"center"}
                    lineHeight={"0.80"}
                    fontSize={50}
                    fontWeight={"600"}
                  >
                    Anna Ford Willims
                  </Text>
                  <Box
                    height={1}
                    backgroundColor={"#fff"}
                    margin={"auto"}
                    mt={6}
                    mb={2}
                    w={4}
                  ></Box>
                  <Text fontWeight={"600"}>
                    Teaches Creativity and Leadership
                  </Text>
                  <Text fontSize={10} mb={6}>
                    2 hours 36 minutes
                  </Text>
                </Box>
                <Image
                  borderRadius={12}
                  src="https://www.masterclass.com/course-images/attachments/j33vns82wjlfl0qsk2zxt1atbhkd?width=395&height=702&quality=75&dpr=1"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box position={"relative"}>
                <Box
                  position={"absolute"}
                  borderRadius={12}
                  width={"100%"}
                  height={"100%"}
                  top={0}
                  left={0}
                  background={
                    "linear-gradient(0deg,#191c21 0,rgba(25,28,33,.5) 50%,rgba(25,28,33,0) 90%) 50% no-repeat"
                  }
                  textAlign={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                >
                  <Text
                    textAlign={"center"}
                    lineHeight={"0.80"}
                    fontSize={50}
                    fontWeight={"600"}
                  >
                    Anna Ford Willims
                  </Text>
                  <Box
                    height={1}
                    backgroundColor={"#fff"}
                    margin={"auto"}
                    mt={6}
                    mb={2}
                    w={4}
                  ></Box>
                  <Text fontWeight={"600"}>
                    Teaches Creativity and Leadership
                  </Text>
                  <Text fontSize={10} mb={6}>
                    2 hours 36 minutes
                  </Text>
                </Box>
                <Image
                  borderRadius={12}
                  src="https://www.masterclass.com/course-images/attachments/j33vns82wjlfl0qsk2zxt1atbhkd?width=395&height=702&quality=75&dpr=1"
                />
              </Box>
            </SwiperSlide>
          </Swiper>
          <Flex justifyContent={"center"} my={16}>
            <Button variant={"offWhite"} borderRadius={10}>
              Explore Classes
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
