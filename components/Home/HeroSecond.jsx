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
import { MONTSERRAT, OPEN_SANS, ROBOTO } from "@/constants/Fonts";
import { FaPlay } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/pagination";

const MARGIN_Y = [4];
const BOX_MARGIN_Y = [1];

export default function HeroSecondComp() {
  return (
    <>
      <Box my={[20, 28]}>
        <Flex justifyContent={"center"} mb={20}>
          <Box
            textAlign={"center"}
            fontSize={[40, 60]}
            fontWeight={["700"]}
            lineHeight={"1"}
          >
            <Text>Join the largest gathering of the world's top celebrity investors and entrepreneurs</Text>
            {/* <Text>New classes added every month.</Text> */}
          </Box>
        </Flex>
        <Grid
          // h="200px"
          //   templateRows="repeat(2, 1fr)"
          templateColumns="repeat(7, 1fr)"
          gap={4}
          // display={["none", "block"]}
        >
          <GridItem colSpan={7}>
            <Box position={"relative"} display={["flex", "block"]}>
              <Image
                borderRadius={8}
                height={[600, "100%"]}
                display={["block", "none"]}
                src={[
                  "https://www.masterclass.com/course-images/attachments/9tidfy6807o8us1jswo8yng4rnqj?width=640&quality=75&format=webp",
                ]}
              />
              <Image
                borderRadius={8}
                height={[600, "100%"]}
                display={["none", "block"]}
                src={[
                  "https://www.masterclass.com/course-images/attachments/h8x8e80nxdsimxfo6zztu9hmkxcc?width=3840&quality=75&format=webp",
                ]}
              />
              <Box
                width={["100%", "unset"]}
                position={"absolute"}
                top={0}
                right={0}
                display={"flex"}
                flexDirection={"column"}
                gap={5}
                height={"-webkit-fill-available"}
                alignItems={"center"}
                justifyContent={["end", "center"]}
                mb={[10]}
              >
                <Badge
                  paddingX={3}
                  paddingY={1}
                  backgroundColor={"#fff"}
                  borderRadius={20}
                  width={"fit-content"}
                >
                  New
                </Badge>
                <Image
                  src="https://www.masterclass.com/course-images/attachments/rg33somrap820ho0wbc0gpe14diu?width=3840&quality=75&format=webp"
                  height={10}
                />
                <Box height={1} backgroundColor={"saddlebrown"} w={10} />
                <Text fontFamily={ROBOTO} fontWeight={"700"}>
                  A Documentary by Andrea Nevins
                </Text>
                <Box>
                  <Button
                    variant={"outline"}
                    backgroundColor={"transparent"}
                    borderWidth={"2px"}
                    fontFamily={ROBOTO}
                    borderColor={"#545454"}
                    leftIcon={<FaPlay />}
                    paddingX={6}
                    color={"#fff"}
                    // paddingY={4}
                    height={"2.8rem"}
                    borderRadius={10}
                    _hover={{
                      backgroundColor: "transparent",
                    }}
                  >
                    Watch Trailer
                  </Button>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
