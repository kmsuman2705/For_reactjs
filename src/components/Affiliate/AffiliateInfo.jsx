import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AffiliateInfo() {
  return (
    <Box id="affiliate" p={4} bg={useColorModeValue("white", "gray.800")} mt={10}>
      {/* Introduction Section */}
      <Container maxW={"5xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          color="blue.400"
        >
          Affiliate Program
        </Heading>
        <Text mt={4} fontSize={{ base: "md", sm: "lg" }} color={"gray.600"}>
          Join our affiliate program and become a part of the TalentConnect network. As an affiliate, you can help us reach more job seekers and employers, expanding our impact and creating more opportunities for success.
        </Text>
      </Container>

      {/* Experience Program Section */}
      <Container maxW={"5xl"} mt={12}>
        <VStack spacing={4} align="start">
          <Heading size="md" color="blue.400">
            Experience Program
          </Heading>
          <Text fontSize={"md"} color={"gray.600"}>
            Become an affiliate of TalentConnect and earn commissions for every job seeker you refer that gets hired through our platform. Our Experience Program rewards your efforts in connecting talented individuals with top employers.
          </Text>
          {/* Add testimonials or success stories here if available */}
        </VStack>
      </Container>

      {/* Job Seekers Program Section */}
      <Container maxW={"5xl"} mt={12}>
        <VStack spacing={4} align="start">
          <Heading size="md" color="blue.400">
            Job Seekers Program
          </Heading>
          <Text fontSize={"md"} color={"gray.600"}>
            Earn up to 20% commission on every successful job placement facilitated through your affiliate link. Our Job Seekers Program is designed to reward you for your role in helping job seekers find their dream jobs.
          </Text>
          {/* Add details on commission structure and tools/resources provided */}
        </VStack>
      </Container>

      {/* How to Join Section */}
      <Container maxW={"5xl"} mt={12}>
        <VStack spacing={4} align="start">
          <Heading size="md" color="blue.400">
            How to Join
          </Heading>
          <Text fontSize={"md"} color={"gray.600"}>
            Joining the TalentConnect Affiliate Program is easy! Follow these steps to get started:
          </Text>
          <Text fontSize={"md"} color={"gray.600"}>
            1. Sign up on our affiliate portal.<br/>
            2. Share your unique affiliate link.<br/>
            3. Earn commissions for every successful referral.
          </Text>
          <Button colorScheme="blue" size="lg">
            Join Now
          </Button>
          {/* Mention support or onboarding process */}
        </VStack>
      </Container>
    </Box>
  );
}
