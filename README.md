# FLGF24-W7D1

# FLGF24-W7D1: React Hooks Movie Night Planner

## Assignment Overview

Implement a simple Movie Night Planner application using React Hooks. This app allows users to add movies to a watchlist and randomly select a movie for movie night.

## Time Allocation (30 minutes total)

- Reading and understanding the assignment: 2 minutes
- Implementing MovieNightPlanner component (src/MovieNightPlanner.js): 15 minutes
- Running tests and debugging (src/MovieNightPlanner.test.js): 10 minutes
- Final review and submission: 3 minutes

## Learning Objectives

By completing this assignment, you will:
1. Implement and use React Hooks (useState, useEffect)
2. Create a functional React component
3. Manage state and side effects in a React application
4. Implement local storage for data persistence

## Why This Matters

React Hooks are fundamental to modern React development. This assignment provides hands-on experience with:

- Managing component state in functional components
- Handling side effects
- Implementing basic CRUD operations
- Working with browser local storage

These skills are essential for developing efficient, maintainable React applications in professional settings.

## Project Structure

```
react-hooks-movie-night-planner/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── MovieNightPlanner.js       # Main component
│   ├── MovieNightPlanner.test.js  # Test file for the component
│   ├── index.js                   # Entry point
│   └── setupTests.js              # Test setup file
├── package.json                   # Project dependencies and scripts
├── package-lock.json              # Locked versions of dependencies
└── README.md                      # This file
```

## Setup and Installation

1. Clone your assignment repository:
   ```
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:
   ```
   cd <file folder>
   ```

3. Install the project dependencies:
   ```
   npm install
   ```

4. Install additional development dependency:
   ```
   npm install --save-dev @babel/plugin-proposal-private-property-in-object
   ```

## Implementation Tasks

1. In `src/MovieNightPlanner.js`:
   - Import necessary hooks from React
   - Implement the MovieNightPlanner component
   - Use useState to manage the list of movies, input field, and selected movie
   - Use useEffect to handle localStorage operations
   - Implement addMovie and pickMovie functions
   - Render the component with necessary UI elements

2. In `src/MovieNightPlanner.test.js`:
   - Implement tests for rendering, adding movies, picking a movie, and localStorage persistence

## Testing Your Implementation

Run the tests using:
```
npm test
```

## Submission Instructions

1. Ensure all your changes are in the `src` directory files.
2. Commit and push your changes:
   ```
   git add .
   git commit -m "Complete React Hooks Movie Night Planner assignment"
   git push origin main
   ```
3. Verify that all tests pass in GitHub Actions.
4. Submit the URL of your GitHub repository in Canvas.
5. Submit a screenshot of the passing terminal unittest.
6. Verify comments have been added explaining your work, just as you would do in a real-world scenario.  Cite usage of outside tools or help from others.

## Grading Criteria

Grades are on a scale of 0-10, with 10 representing truly exceptional work that goes above and beyond expectations.

- Correct implementation of MovieNightPlanner component (55%)
- Proper use of React Hooks (useState, useEffect) (20%)
- Passing all provided tests in both remote terminal and GitHub classrooms (20%)
- Exceptional effort and creativity (5%)

Grade descriptions:

- 10: Outstanding work that demonstrates mastery of the subject matter and includes innovative approaches or extra features beyond the basic requirements.
- 8-9: Excellent work that fully meets all requirements with high quality implementation.
- 6-7: Good work that meets most requirements with some minor issues.
- 4-5: Adequate work that meets basic requirements but has notable room for improvement.
- 2-3: Work that partially meets requirements but has significant issues or missing elements.
- 0-1: Work that fails to meet most requirements or is incomplete.

Note: A score of 10 is reserved for truly exceptional submissions that showcase a deep understanding of React concepts and go above and beyond in terms of code quality, creativity, or additional features.
