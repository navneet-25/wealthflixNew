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
  return (
    <>
      <Box mt={[10, 40]} mb={[20, 20]}>
        <Flex justifyContent={"center"} mb={8}>
          <Box
            textAlign={"center"}
            fontSize={[40, 60]}
            fontWeight={["700"]}
            lineHeight={"1"}
          >
            <Text>Start your journey today.</Text>
          </Box>
        </Flex>
        <Box textAlign={"center"}>
          <Text color={"#d6d6d6"}>
            Choose from 3 plans. Starting at ₹999/month, billed annually.
          </Text>
        </Box>
        <Box my={10}>
          <HStack justifyContent={"center"}>
            <Button paddingY={6}>Sign Up</Button>
            <Button variant={"offWhite"}>Explore Classes</Button>
          </HStack>
        </Box>
        <Box my={["160px", 36]} mb={[24, 36]} position={"relative"}>
          <SimpleGrid
            borderRadius={12}
            backgroundColor={"#222326"}
            padding={["200px 8px 50px", 20]}
            columns={[1, 2]}
          >
            <Flex justifyContent={["center", "end"]}>
              <Image
                position={"absolute"}
                top={"-16%"}
                height={[260, 500]}
                boxShadow={
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
                }
                src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/maw_banner_image.png"
              />
            </Flex>
            <Box paddingX={10}>
              <Image
                height={42}
                src="https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://static.masterclass.com/maw-logo.png"
              />
              <Text
                textTransform={"uppercase"}
                fontSize={52}
                // letterSpacing={".85"}
                fontWeight={"800"}
                lineHeight={"0.85"}
              >
                Level Up Your Team
              </Text>
              <Box my={[6, 18]}>
                <Text color={"darkgrey"} fontWeight={"600"}>
                  See why leading organizations rely on <br />
                  MasterClass for learning & development.
                </Text>
              </Box>
              <Flex gap={4}>
                <Button>Contact Sales</Button>
                <Button variant={"ghost"} color={"themeColor"} gap={2}>
                  Learn More <FaArrowRightLong />{" "}
                </Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
