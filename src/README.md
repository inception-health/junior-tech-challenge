# Welcome to Challenges

These challenges are designed for junior developers and are based on real scenarios you might encounter while working at Inception Health. There are no tricky assignments—just straightforward, hands-on tasks.

Some important things to note:
- You do not need to build an app to display your work (unless you want to). Your focus should be on writing code.
- You are not allowed to use ChatGPT or any other AI tools. However, you are free to use the internet.
- If React Native or React syntax is unfamiliar to you, feel free to use pseudocode. This will not affect your score as long as you demonstrate problem-solving skills.
- Be prepared to walk us through your code and explain your thought process.
- You can choose to complete any of the following tasks (1 or 2 for extra credit)

## Assignment 1 - Basic Screen and Components
This assignment will test your ability to pass props to reusable components, use loops, and write basic conditional statements.
For this assignment, you need to complete the BillingStatement.tsx component. This component is a card that displays basic billing information for a user. Additional details can be found within the component itself.
Once BillingStatement.tsx is complete, you need to display it inside the BillingHistory.tsx screen. Ensure that you render as many BillingStatement components as there are records in your data.

1. Open the following files: BillingHistory.tsx and BillingStatement.tsx inside src folder
2. Follow instructions inside these files.

## Assignment 2 - Handling logic for verifying dependents
This assignment evaluates your ability to implement business logic by validating and categorizing dependents according to specific rules. It tests your ability to apply conditional logic to verify eligibility based on enrollment status, association with the user in the EHR system, and age restrictions. Additionally, it tests your skills in filtering and categorizing data, requiring you to sort dependents into "verified" or "unverified" groups and store the results in the analyzedDependents variable. This exercise simulates real-world problem-solving in the context of a virtual care product.

1. Open the following file: functions.ts
2. Follow instructions to finish verifyDependents function

## Assignment 3 - Basic hooks
This assignment tests your ability to use basic React hooks like `useState` and `useEffect` to manage component state and side effects. You are tasked with creating an `Initialization` screen that displays an `ActivityIndicator` while fetching user details using the provided `getUserDetails` function. Once the function resolves, the screen should hide the `ActivityIndicator` and display the user's name and email address inside a `View`. The focus is on implementing the functionality rather than rendering the component's appearance in the app.

1. Open the following file: Initialization.tsx
2. Follow instructions inside the file