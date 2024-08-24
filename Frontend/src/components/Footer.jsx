import React, { useState } from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/images/Logo/logo.png";

// SocialButton Component
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="transparent"
      borderRadius="md"
      _hover={{
        bg: useColorModeValue("pink.300", "pink.700"),
      }}
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </chakra.button>
  );
};

// Footer Component
export default function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "Bot", text: "Welcome! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = async () => {
    if (userInput.trim()) {
      // Add the user's message to the chat
      const newMessages = [...messages, { sender: "You", text: userInput }];
      setMessages(newMessages);
      setUserInput("");

      try {
        console.log("Sending message:", userInput); // Debugging log

        // Send the message to Flask backend
        const response = await fetch("http://43.204.217.48:5000/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userInput }), // Ensure JSON.stringify
        });

        // Handle the response
        if (response.ok) {
          const data = await response.json();
          // Add the bot's response to the chat
          const botResponse = data.response;
          setMessages([...newMessages, { sender: "Bot", text: botResponse }]);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };

  const checkEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
      py={10}
      mt={10}
    >
      <Container maxW="6xl">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={10}
          textAlign="left"
        >
          <Stack spacing={4}>
            <a href="/">
              <img
                src={logo}
                alt="Talent Connect Logo"
                style={{ height: "60px", width: "70px" }}
              />
            </a>
            <Text fontSize="sm" color="black">
              © 2023 Talent Connect. All rights reserved
            </Text>
            <Text fontWeight="bold">Follow Us</Text>
            <Stack direction="row" spacing={4}>
              <SocialButton label="Follow us on Instagram" href="#">
                <FaInstagram />
              </SocialButton>
              <SocialButton label="Follow us on LinkedIn" href="#">
                <BsLinkedin />
              </SocialButton>
              <SocialButton label="Follow us on Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="Subscribe to us on YouTube" href="#">
                <FaYoutube />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Text fontWeight="bold" as="a" href="/">
              Home
            </Text>
            <Text fontWeight="bold" as={Link} to="/#our-services">
              Services
            </Text>
            <Stack spacing={1}>
              <Text as={Link} to="/oncampus">
                OnCampus
              </Text>
              <Text as={Link} to="/offcampus">
                OffCampus
              </Text>
              <Text as={Link} to="/seminar">
                Seminar
              </Text>
              <Text as={Link} to="/counselling">
                Counselling
              </Text>
              <Text as={Link} to="/careercraft">
                CareerCraft
              </Text>
              <Text as={Link} to="/workforce">
                Workforce Provider [Staffing Solution]
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Text fontWeight="bold" as={Link} to="/#ready-to-transform">
              Jobs
            </Text>
            <Stack spacing={1}>
              <Text as={Link} to="/jobs/current-opening">
                Current Openings
              </Text>
              <Text as={Link} to="/jobs/post-resume">
                Post Your Resume
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Text fontWeight="bold" as={Link} to="/employer">
                Employer
              </Text>
              <Text fontWeight="bold" as={Link} to="/college">
                College
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Text fontWeight="bold" as={Link} to="/campus-to-cubicle">
              Campus to Cubicle
            </Text>
            <Stack spacing={4}>
              <Text fontWeight="bold" as={Link} to="/affiliate">
                Affiliate
              </Text>
              <Text fontWeight="bold" as={Link} to="/contact">
                Contact Us
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Chatbot Integration */}
      <div
        id="chat-icon"
        onClick={toggleChat}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
          textAlign: "center",
          lineHeight: "60px",
          fontSize: "28px",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s",
        }}
      >
        💬
      </div>
      {isChatOpen && (
        <div
          id="chat-container"
          style={{
            width: "350px",
            height: "500px",
            border: "1px solid #ccc",
            padding: "10px",
            position: "fixed",
            bottom: "80px",
            right: "20px",
            background: "linear-gradient(to bottom right, #ffffff, #f0f0f0)",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            id="chat-box"
            style={{
              height: "360px",
              overflowY: "auto",
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#fafafa",
              borderRadius: "5px",
            }}
          >
            {messages.map((message, index) => (
              <p key={index}>
                <strong>{message.sender}:</strong> {message.text}
              </p>
            ))}
          </div>
          <input
            type="text"
            id="user-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={checkEnter}
            placeholder="Type your question..."
            style={{
              width: "calc(100% - 70px)",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Send
          </button>
        </div>
      )}
    </Box>
  );
}
