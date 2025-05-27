
import { Assignment, Question } from '@/types';

// Sample assessment questions
export const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2
  },
  {
    id: 2,
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "What is 9 × 7?",
    options: ["56", "63", "72", "81"],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    correctAnswer: 1
  },
  {
    id: 5,
    text: "Which famous scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
    correctAnswer: 2
  },
  {
    id: 6,
    text: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: 1
  },
  {
    id: 7,
    text: "Which of these countries is NOT in Africa?",
    options: ["Nigeria", "Bhutan", "Kenya", "Morocco"],
    correctAnswer: 1
  },
  {
    id: 8,
    text: "What is the square root of 144?",
    options: ["12", "14", "16", "18"],
    correctAnswer: 0
  },
  {
    id: 9,
    text: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "Which planet is closest to the sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: 2
  }
];

// Sample data with 5 demo assessments
export const sampleAssignments: Assignment[] = [
  {
    id: "1",
    subject: "Mathematics",
    description: "Algebra and Calculus fundamentals assessment. Covers linear equations, differentiation, and integration basics.",
    class: "Grade 10-A",
    timeToSpend: "60 mins",
    startDate: "2025-05-01",
    endDate: "2025-05-10",
    markContained: "20",
    status: "active",
    questions: sampleQuestions
  },
  {
    id: "2",
    subject: "Physics",
    description: "Mechanics and Wave motion assessment. Covers Newton's laws, kinematics, and wave properties.",
    class: "Grade 10-A",
    timeToSpend: "60 mins",
    startDate: "2025-05-02",
    endDate: "2025-05-11",
    markContained: "20",
    status: "active",
    questions: sampleQuestions
  },
  {
    id: "3",
    subject: "Chemistry",
    description: "Organic Chemistry assessment. Covers hydrocarbons, functional groups, and reaction mechanisms.",
    class: "Grade 10-A",
    timeToSpend: "60 mins",
    startDate: "2025-05-03",
    endDate: "2025-05-12",
    markContained: "20",
    status: "active",
    questions: sampleQuestions
  },
  {
    id: "4",
    subject: "Biology",
    description: "Cell Biology and Genetics assessment. Covers cell structure, mitosis, meiosis, and Mendelian genetics.",
    class: "Grade 10-A",
    timeToSpend: "60 mins",
    startDate: "2025-05-04",
    endDate: "2025-05-13",
    markContained: "20",
    status: "active",
    questions: sampleQuestions
  },
  {
    id: "5",
    subject: "Computer Science",
    description: "Programming Fundamentals assessment. Covers algorithms, data structures, and basic programming concepts.",
    class: "Grade 10-A",
    timeToSpend: "60 mins",
    startDate: "2025-05-05",
    endDate: "2025-05-14",
    markContained: "20",
    status: "active",
    questions: sampleQuestions
  }
];
