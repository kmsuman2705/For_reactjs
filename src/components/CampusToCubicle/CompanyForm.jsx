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

const CompanyForm = () => {
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
            Enhance your hiring potential with top talent. Connect with us and transform your recruitment today!
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
          Submit Your Company Details
        </Text>

        <Stack spacing={4}>
          {/* Company Name */}
          <FormControl>
            <FormLabel>Company Name</FormLabel>
            <Input placeholder="Enter company name" />
          </FormControl>

          {/* Industry */}
          <FormControl>
            <FormLabel>Industry</FormLabel>
            <Input placeholder="Enter industry" />
          </FormControl>

          {/* Location */}
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input placeholder="Enter location" />
          </FormControl>

          {/* Company Size */}
          <FormControl>
            <FormLabel>Company Size</FormLabel>
            <Input placeholder="Enter number of employees" />
          </FormControl>

          {/* Contact Person */}
          <FormControl>
            <FormLabel>Contact Person</FormLabel>
            <Input placeholder="Enter contact person's name" />
          </FormControl>

          {/* Contact Email */}
          <FormControl>
            <FormLabel>Contact Email Address</FormLabel>
            <Input type="email" placeholder="Enter email" />
          </FormControl>

          {/* Contact Phone */}
          <FormControl>
            <FormLabel>Contact Phone Number</FormLabel>
            <Input type="tel" placeholder="Enter phone number" />
          </FormControl>

          {/* Partnership Interests */}
          <FormControl>
            <FormLabel>Partnership Interests (Select all that apply)</FormLabel>
            <CheckboxGroup>
              <Stack spacing={2}>
                <Checkbox value="Recruitment Drives">Recruitment Drives</Checkbox>
                <Checkbox value="Internship Programs">Internship Programs</Checkbox>
                <Checkbox value="Job Fairs">Job Fairs</Checkbox>
                <Checkbox value="Networking Events">Networking Events</Checkbox>
                <Checkbox value="Employee Training Programs">Employee Training Programs</Checkbox>
                <Checkbox value="Campus Branding">Campus Branding</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          {/* Additional Information */}
          <FormControl>
            <FormLabel>Additional Information</FormLabel>
            <Textarea placeholder="Provide any additional information or specific requirements" />
          </FormControl>

          {/* Consent Notice */}
          <Text mt={4} fontSize="sm" color="gray.600">
            Note: By applying here you provide consent to share your personal data with TalentConnect. The personal data would be processed for partnership purposes and would be within TalentConnect data protection notice. Read our Privacy Statement and Website Terms and Conditions for more information.
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

export default CompanyForm;
