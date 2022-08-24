import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  boxStyle,
  hoverStyle,
  iconStyle,
  textStyle,
} from "../../utils/LeftBoxSTyle";

const FollowESPN = () => {
  return (
    <Box
      boxShadow="md"
      rounded="xl"
      bg="white"
      width="95%"
      height="auto"
      margin="auto"
      mt="2rem"
      p="0.5rem"
    >
      <Box h="40px" w="100%" borderBottom="1px solid gray" p="1rem" mb="0.5rem">
        <Text mt="-5px" fontSize="12px" fontWeight="500">
          ESPNcricinfo Apps
        </Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>Android App</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>iOS App</Text>
      </Box>
    </Box>
  )
}

export default FollowESPN