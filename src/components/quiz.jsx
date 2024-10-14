// src/App.jsx

import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Radio, RadioGroup, Stack, Text, useToast } from '@chakra-ui/react';

export const Quiz = () => {
  const questions = [
    {
      question: 'What is the Capital of India',
      options: ['Mumbai', 'Kolkata', 'Delhi', 'Hyderabad'],
      answer: 2,
    },
    {
      question: 'What is the National Flower of India',
      options: ['Rose', 'Lotus', 'Lily', 'Sunflower'],
      answer: 1,
    },
    {
      question: 'Which of these is the National Bird of India',
      options: ['Parrot', 'Hen', 'Pegion', 'Peacock'],
      answer: 3,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(['']);
  const [score, setScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(300); // 5 minutes in seconds
  const toast = useToast();

  // Timer countdown
  useEffect(() => {
    if (remainingTime > 0 && !quizSubmitted) {
      const timerId = setInterval(() => {
        setRemainingTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(timerId); // Cleanup timer on unmount or reset
    } else if (remainingTime === 0 && !quizSubmitted) {
      handleSubmit();
      toast({
        title: 'Time’s up!',
        description: 'Your quiz has been automatically submitted.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [remainingTime, quizSubmitted, toast]);

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (quesIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[quesIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((ele, index) => {
      if (selectedAnswers[index] === ele.answer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  const handleRestart = () => {
    setSelectedAnswers(['']);
    setScore(0);
    setQuizSubmitted(false);
    setRemainingTime(300); // Reset timer to 5 minutes
  };

  return (
    <Box maxW="500px" mx="auto" textAlign="center" p={5}>
      <Heading mb={5}>Solve The Quiz</Heading>
      <Text fontSize="lg" color={remainingTime <= 30 ? 'red.500' : 'green'}>
        Time Remaining: {formatTime(remainingTime)}
      </Text>

      {!quizSubmitted ? (
        <Box mt={5}>
          {questions.map((ques, quesIndex) => (
            <Box key={quesIndex} mb={5}>
              <Heading size="md" mb={3}>{ques.question}</Heading>
              <RadioGroup onChange={(value) => handleAnswerSelect(quesIndex, parseInt(value))} value={selectedAnswers[quesIndex]}>
                <Stack direction="column">
                  {ques.options.map((option, optionIndex) => (
                    <Radio key={optionIndex} value={optionIndex}>{option}</Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </Box>
          ))}
          <Button
            onClick={handleSubmit}
            colorScheme="teal"
            size="lg"
            mt={5}
          >
            Submit
          </Button>
        </Box>
      ) : (
        <Box mt={5}>
          <Heading size="lg" mb={3}>Your Score: {score} / {questions.length}</Heading>
          <Button onClick={handleRestart} colorScheme="teal" size="lg">
            Restart Quiz
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Quiz;
