```javascript
// pages/index.js

export default function Home() {
  const showProp = true; // Example conditional logic
  const myProp = showProp ? "Hello from Prop!" : null; 

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>This is a Next.js application.</p>
      {/* Using optional chaining */}      <p>{myProp?.toString()}</p> 
      {/* Using nullish coalescing */}      <p>{myProp ?? 'Prop is not defined'}</p>
    </div>
  );
}
```