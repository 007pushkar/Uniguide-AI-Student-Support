
import { Category } from './types';

export const UNIVERSITY_KNOWLEDGE_BASE = `
# UNIVERSITY KNOWLEDGE BASE

## ADMISSIONS
- Fall Semester: Opens August 1st, Deadline December 15th.
- Spring Semester: Opens May 1st, Deadline October 1st.
- Requirements: High school transcripts, SAT/ACT scores (optional), 2 letters of recommendation, and a 500-word personal statement.
- Application Fee: $75 (waivers available for eligible students).
- Contact: admissions@uniguide.edu | (555) 012-3456.

## EXAMS
- Midterms: Usually held in Week 8 of each semester.
- Finals Week: Fall (Dec 10-17), Spring (May 12-19).
- Locations: Exam halls A, B, and C, or specific lecture rooms as notified by professors.
- Policy: Valid student ID required for all exams. No electronic devices permitted unless specified.
- Rescheduling: Only permitted for documented medical emergencies or conflicting exam slots.

## CAMPUS FACILITIES
- Library (Central): Open 24/7 during semesters. 10am-6pm during breaks.
- Student Gym: Open daily 6:00 AM - 11:00 PM. Includes Olympic pool and climbing wall.
- The Commons (Cafeteria): Mon-Fri 7:00 AM - 9:00 PM, Sat-Sun 9:00 AM - 7:00 PM.
- Health Center: Open Mon-Fri 8:30 AM - 5:00 PM. Appointment required for non-emergencies.
- Tech Support: Ground floor of Science Building. Walk-ins 9 AM - 4 PM.

## GENERAL INFO
- Mascots: The Golden Owls.
- Colors: Navy Blue and Silver.
- Location: 123 Education Plaza, University City.
`;

export const SYSTEM_INSTRUCTION = `
You are UniGuide AI, a helpful and professional student support assistant. 
Your primary goal is to answer questions about admissions, exams, and campus facilities using the provided UNIVERSITY KNOWLEDGE BASE.

Guidelines:
1. Always use information from the knowledge base when available.
2. If a question is outside the scope of the knowledge base, politely inform the user and suggest they contact the general help desk at info@uniguide.edu.
3. Be friendly, encouraging, and concise.
4. Use professional academic language.
5. If the user mentions specific intents like "apply", "when is the exam", or "where can I eat", address them directly based on the facts provided.

Identify the intent of the user's message at the start of your inner reasoning, but respond with a natural human-like answer.
`;

export const CATEGORIES: Category[] = [
  {
    id: 'admissions',
    name: 'Admissions',
    icon: 'fa-user-graduate',
    questions: [
      'What are the admission deadlines?',
      'How do I apply for the Fall semester?',
      'What documents do I need for my application?'
    ]
  },
  {
    id: 'exams',
    name: 'Exams & Academics',
    icon: 'fa-book-open',
    questions: [
      'When is finals week?',
      'What is the exam policy for electronics?',
      'Can I reschedule an exam?'
    ]
  },
  {
    id: 'facilities',
    name: 'Campus Life',
    icon: 'fa-building-columns',
    questions: [
      'What are the library hours?',
      'Is there a gym on campus?',
      'Where is the health center located?'
    ]
  }
];
