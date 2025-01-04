# Next.js 15 Runtime Error with Conditionally Rendered Props

This repository demonstrates a runtime error in Next.js 15 that occurs when accessing a prop that is conditionally rendered.  The issue stems from how Next.js handles rendering and prop propagation with conditional rendering, especially when dealing with dynamic components or server-side rendering.

## Bug

The bug is in `pages/index.js`. It causes a runtime error if certain conditions are not met when accessing the `myProp` property, which is conditionally rendered.  The error message may vary depending on the specifics of the conditional logic but typically indicates the prop is undefined.

## Solution

The solution involves using optional chaining (`?.`) or nullish coalescing (`??`) operators to safely handle the potentially undefined prop, preventing the runtime error.  This ensures that the code gracefully handles cases where `myProp` is not available.  Furthermore, the solution revisits the conditional rendering logic to ensure predictable and consistent prop availability.
