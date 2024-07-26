import React, { useState } from 'react';
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
  Select,
} from '@chakra-ui/react';

const AffiliateForm = () => {
  const theme = useTheme();
  const [role, setRole] = useState('');

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
          <Heading textColor={"blue.400"} fontFamily={"ClashDisplay"} as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)">
            Join the TalentConnect Affiliate Program
          </Heading>
          <Text fontSize="xl" mb={6} textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
            Partner with us to earn rewards by referring candidates for top job opportunities. Sign up now and start earning!
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
          color="blue.400"
        >
          Apply to Become an Affiliate
        </Text>

        <Stack spacing={4}>
          {/* Who Are You */}
          <FormControl>
            <FormLabel>Who Are You?</FormLabel>
            <Select placeholder="Select your role" onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
              <option value="Employer">Employer</option>
            </Select>
          </FormControl>

          {/* Full Name */}
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="Enter your full name" />
          </FormControl>

          {/* Email Address */}
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Enter your email address" />
          </FormControl>

          {/* Phone Number */}
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" placeholder="Enter your phone number" />
          </FormControl>

                    {/* Role-Specific Fields */}
          {role === 'Student' && (
            <>
              <FormControl>
                <FormLabel>College Name</FormLabel>
                <Input placeholder="Enter your college's name" />
              </FormControl>

              <FormControl>
                <FormLabel>Course Details</FormLabel>
                <Input placeholder="Enter your course details" />
              </FormControl>

            </>
          )}

          {/* Role-Specific Fields */}
          {role === 'Employer' && (
            <>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input placeholder="Enter your company's name" />
              </FormControl>

              <FormControl>
                <FormLabel>Company Email Address</FormLabel>
                <Input placeholder="Enter your company Email Id" />
              </FormControl>

              <FormControl>
                <FormLabel>Company Size</FormLabel>
                <Input placeholder="Enter number of employees" />
              </FormControl>
            </>
          )}

         
          
          {/* Why Join Us */}
          <FormControl>
            <FormLabel>Why do you want to join the TalentConnect Affiliate Program?</FormLabel>
            <Textarea placeholder="Share your motivation and any relevant experience" />
          </FormControl>

          {/* Additional Comments */}
          <FormControl>
            <FormLabel>Additional Comments</FormLabel>
            <Textarea placeholder="Provide any additional comments or questions" />
          </FormControl>

          {/* Consent Notice */}
          <Text mt={4} fontSize="sm" color="gray.600">
            Note: By submitting this form, you consent to share your personal data with TalentConnect. Your data will be processed in accordance with our Privacy Policy and Terms of Service.
          </Text>

          {/* Submit Button */}
          <Button mt={6} colorScheme="blue" size="lg" width="full" _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}>
            Become an Affiliate
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AffiliateForm;
