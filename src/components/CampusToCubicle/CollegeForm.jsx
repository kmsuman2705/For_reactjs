import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useTheme,
} from '@chakra-ui/react';

const CollegeForm = () => {
  const theme = useTheme();

  return (
    <Box>
    {/* Hero Section with Background Animation */}
      <Box
        position="relative"
        overflow="hidden"
        py={24}
        textAlign="center"
        color="white"
       bgGradient="linear(to-r, #008080, #0083B0)"


      >
        <Container maxW="container.lg" position="relative" zIndex={1}>
          <Heading textColor={"blue.400"}  fontFamily={"ClashDisplay"} as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)">
            Partner with TalentConnect
          </Heading>
          <Text fontSize="xl" mb={6} textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
            Empower your students with the best career opportunities. Join our network today!
          </Text>
          
        </Container>
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
          _before={{
            content: '""',
            position: 'absolute',
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 20%)',
            backgroundSize: '20px 20px',
            animation: 'moveBg 20s linear infinite',
          }}
        />
        <style>
          {`
            @keyframes moveBg {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(50%, 50%);
              }
            }
          `}
        </style>
      </Box>

      {/* Form Section */}
      <Box
        p={8}
        maxW="lg"
        mx="auto"
        borderWidth={1}
        borderRadius="lg"
        borderColor={theme.colors.blue[400]}
        boxShadow="2xl"
        bgGradient="linear(to-r, white, blue.50)"
        mt={-10}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url('https://www.transparenttextures.com/patterns/white-diamond.png')`,
          opacity: 0.2,
          zIndex: -1,
        }}
      >
        <Text
          fontSize="2xl"
          mb={6}
          fontWeight="bold"
          textAlign="center"
          color="blue.600"
          bgGradient="linear(to-r, blue.400, blue.600)"
          bgClip="text"
        >
          Submit Your College Details
        </Text>

        <Stack spacing={4}>
          {/* UG Courses Multi-Select */}
          <FormControl>
            <FormLabel fontWeight="bold">UG Courses Offered (Select all that apply)</FormLabel>
            <CheckboxGroup>
              <Stack spacing={2}>
                <Checkbox value="B.Tech">B.Tech</Checkbox>
                <Checkbox value="BBA">BBA</Checkbox>
                <Checkbox value="BSc">BSc</Checkbox>
                <Checkbox value="BCA">BCA</Checkbox>
                <Checkbox value="BE">BE</Checkbox>
                <Checkbox value="BA">BA</Checkbox>
                <Checkbox value="BBM">BBM</Checkbox>
                <Checkbox value="PUC Science Combinations">PUC Science Combinations</Checkbox>
                <Checkbox value="PUC Humanities Combinations">PUC Humanities Combinations</Checkbox>
                <Checkbox value="PUC Commerce combinations">PUC Commerce combinations</Checkbox>
                <Checkbox value="B.Pharma">B.Pharma</Checkbox>
                <Checkbox value="D.Pharma">D.Pharma</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          {/* PG Courses Multi-Select */}
          <FormControl>
            <FormLabel fontWeight="bold">PG Courses Offered (Select all that apply)</FormLabel>
            <CheckboxGroup>
              <Stack spacing={2}>
                <Checkbox value="M.Tech">M.Tech</Checkbox>
                <Checkbox value="MBA">MBA</Checkbox>
                <Checkbox value="MA">MA</Checkbox>
                <Checkbox value="MCA">MCA</Checkbox>
                <Checkbox value="ME">ME</Checkbox>
                <Checkbox value="MSc">MSc</Checkbox>
                <Checkbox value="MCom">MCom</Checkbox>
                <Checkbox value="M.Pharma">M.Pharma</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          {/* College/Institution Name */}
          <FormControl>
            <FormLabel fontWeight="bold">College/Institution Name</FormLabel>
            <Input placeholder="Enter name" />
          </FormControl>

          {/* Location */}
          <FormControl>
            <FormLabel fontWeight="bold">Location</FormLabel>
            <Input placeholder="Enter location" />
          </FormControl>

          {/* Students Strength */}
          <FormControl>
            <FormLabel fontWeight="bold">Students Strength (Final year batch of UG courses)</FormLabel>
            <Input type="number" placeholder="E.g: 800" />
          </FormControl>
          
          <FormControl>
            <FormLabel fontWeight="bold">Students Strength (Final year batch of PG courses)</FormLabel>
            <Input type="number" placeholder="E.g: 300" />
          </FormControl>

          {/* College TPO/SPOC Email address */}
          <FormControl>
            <FormLabel fontWeight="bold">College TPO/SPOC Email Address</FormLabel>
            <Input type="email" placeholder="Enter email" />
          </FormControl>

          {/* Mobile number */}
          <FormControl>
            <FormLabel fontWeight="bold">Mobile Number</FormLabel>
            <Input type="tel" placeholder="Enter mobile number" />
          </FormControl>

          {/* Placement Season Duration */}
          <FormControl>
            <FormLabel fontWeight="bold">Placement Season Duration (Month and Year)</FormLabel>
            <Input placeholder="E.g: Feb 2024" />
          </FormControl>

          {/* Upcoming Student Engagements */}
          <FormControl>
            <FormLabel fontWeight="bold">Upcoming Student Engagements</FormLabel>
            <Textarea placeholder="E.g: Job Fairs, Recruiter Sessions, Networking Events etc" />
          </FormControl>

          {/* Willing to Join TalentConnect Partnership Programme */}
          <FormControl>
            <FormLabel fontWeight="bold">Willing to Join TalentConnect Partnership Programme?</FormLabel>
            <Input placeholder="Please Select" />
          </FormControl>

          {/* Consent Notice */}
          <Text mt={4} fontSize="sm" color="gray.600">
            Note: By applying here you provide consent to share your personal data with TalentConnect. The personal data would be processed for employment purposes and would be within TalentConnect data protection notice. Read our Privacy Statement and Website Terms and Conditions for more information.
          </Text>

          {/* Submit Button */}
          <Button mt={6} colorScheme="blue" size="lg" width="full" _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CollegeForm;
