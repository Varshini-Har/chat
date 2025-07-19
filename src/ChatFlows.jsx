// ChatFlows.js
export const roles = [
  '👨‍💼 Manager',
  '🧑‍🎨 Designer',
  '🧪 Tester',
  '🧑‍💼 HR',
  '🎯 Career Guidance',
  '📊 Data Scientist'
];

export const chatFlows = {
  '👨‍💼 Manager': [
    'Hi, I’m your project manager. Can you list the current projects you’re working on?',
    'What’s the current status of each project?',
    'Do you need help or resources to complete your tasks?',
    'I’ll now assign some new tasks based on your bandwidth.',
    'Please confirm once you receive the task details.'
  ],
  '🧑‍🎨 Designer': [
    'Hey there! What design task are you currently working on?',
    'Do you need wireframes, UI/UX, or branding materials?',
    'What tools do you prefer — Figma, Adobe XD, Sketch?',
    'Once done, share the design files with the dev team.'
  ],
  '🧪 Tester': [
    'Hi! Are you doing manual or automation testing today?',
    'Which module are you testing right now?',
    'Please report any bugs or issues you find.',
    'Don’t forget to update the test case execution status.'
  ],
  '🧑‍💼 HR': [
    'Hello! We currently have job openings across departments.',
    '__OPTIONS__', // this triggers the option list
    'Please upload your resume.',
    'Thanks. We’ll contact you soon after screening your profile.',
    'Meanwhile, if you have questions, reach out to careers@connecta.ai.'
  ],
  '🎯 Career Guidance': [
    'Hi! Are you a student or a working professional?',
    'What are your career goals or fields of interest?',
    'Would you prefer personalized job suggestions or learning paths?',
    'Based on your input, here are some recommendations for your growth.'
  ],
  '📊 Data Scientist': [
    'Hello! What’s your experience with data — analysis or modeling?',
    'Which tools/languages do you use — Python, R, SQL?',
    'Are you looking for a role in research, product, or business analytics?',
    'Let’s explore some trending datasets you could practice on.'
  ]
};
