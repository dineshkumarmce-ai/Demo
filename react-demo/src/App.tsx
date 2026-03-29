import { useState } from "react";
import "./App.css";

// ==============================================
// 1. SIMPLE COMPONENT (no props, no state)
// A component is just a function that returns JSX.
// ==============================================
function Header() {
  return (
    <header className="bg-blue-600 text-white py-6 px-8 shadow-md">
      <h1 className="text-3xl font-bold">Learn React Basics</h1>
      <p className="text-blue-200 mt-1">
        A simple project to understand core React concepts
      </p>
    </header>
  );
}

// ==============================================
// 2. COMPONENT WITH PROPS
// Props let you pass data from a parent to a child.
// ==============================================
interface GreetingProps {
  name: string;
  emoji?: string; // optional prop with "?"
}

function Greeting({ name, emoji = "👋" }: GreetingProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-green-800">
        {emoji} Hello, {name}!
      </h3>
      <p className="text-green-600 text-sm mt-1">
        This component receives <code className="bg-green-100 px-1 rounded">name</code> and{" "}
        <code className="bg-green-100 px-1 rounded">emoji</code> as props.
      </p>
    </div>
  );
}

// ==============================================
// 3. COMPONENT WITH STATE (useState)
// State lets a component "remember" things.
// When state changes, the component re-renders.
// ==============================================
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-purple-800">Counter</h3>
      <p className="text-4xl font-bold text-purple-600 my-4">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
        >
          - Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
        >
          + Increase
        </button>
      </div>
      <p className="text-purple-600 text-sm mt-3">
        Uses <code className="bg-purple-100 px-1 rounded">useState</code> to track the count.
        Clicking buttons calls <code className="bg-purple-100 px-1 rounded">setCount</code> which
        re-renders the component.
      </p>
    </div>
  );
}

// ==============================================
// 4. EVENT HANDLING + STATE
// Handling user input with onChange events.
// ==============================================
function TextInput() {
  const [text, setText] = useState("");

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-orange-800">Text Input</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="border border-orange-300 rounded px-3 py-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <p className="text-orange-700 mt-2">
        You typed: <strong>{text || "(nothing yet)"}</strong>
      </p>
      <p className="text-orange-500 text-sm mt-1">
        Character count: {text.length}
      </p>
      <p className="text-orange-600 text-sm mt-2">
        The <code className="bg-orange-100 px-1 rounded">onChange</code> event updates state on
        every keystroke. The input value is controlled by React state.
      </p>
    </div>
  );
}

// ==============================================
// 5. CONDITIONAL RENDERING
// Show different UI based on state.
// ==============================================
function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-teal-800">Toggle Message</h3>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition mt-2"
      >
        {isVisible ? "Hide" : "Show"} Secret Message
      </button>
      {isVisible && (
        <div className="mt-3 bg-teal-100 p-3 rounded border border-teal-300">
          <p className="text-teal-800 font-medium">
            You found the secret message! React is awesome!
          </p>
        </div>
      )}
      <p className="text-teal-600 text-sm mt-2">
        Uses <code className="bg-teal-100 px-1 rounded">{`{isVisible && <div>...</div>}`}</code>{" "}
        for conditional rendering. The message only appears when{" "}
        <code className="bg-teal-100 px-1 rounded">isVisible</code> is true.
      </p>
    </div>
  );
}

// ==============================================
// 6. RENDERING A LIST
// Use .map() to render arrays of data.
// ==============================================
function FruitList() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry", "Date"]);
  const [newFruit, setNewFruit] = useState("");

  const addFruit = () => {
    if (newFruit.trim()) {
      setFruits([...fruits, newFruit.trim()]);
      setNewFruit("");
    }
  };

  const removeFruit = (index: number) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-rose-800">Fruit List</h3>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addFruit()}
          placeholder="Add a fruit..."
          className="border border-rose-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <button
          onClick={addFruit}
          className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
        >
          Add
        </button>
      </div>
      <ul className="mt-3 space-y-1">
        {fruits.map((fruit, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white px-3 py-2 rounded border border-rose-100"
          >
            <span>{fruit}</span>
            <button
              onClick={() => removeFruit(index)}
              className="text-rose-400 hover:text-rose-600 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="text-rose-600 text-sm mt-2">
        Uses <code className="bg-rose-100 px-1 rounded">.map()</code> to render each fruit.
        Each item needs a unique <code className="bg-rose-100 px-1 rounded">key</code> prop.
      </p>
    </div>
  );
}

// ==============================================
// MAIN APP COMPONENT
// Composes all the above components together.
// ==============================================
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-3xl mx-auto py-8 px-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-2 border-b pb-1">
            1. Props - Passing Data to Components
          </h2>
          <div className="space-y-3">
            <Greeting name="Dinesh" emoji="🎉" />
            <Greeting name="React Learner" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-2 border-b pb-1">
            2. State - Remembering Values with useState
          </h2>
          <Counter />
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-2 border-b pb-1">
            3. Event Handling - Responding to User Input
          </h2>
          <TextInput />
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-2 border-b pb-1">
            4. Conditional Rendering - Show/Hide UI
          </h2>
          <ToggleMessage />
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-2 border-b pb-1">
            5. Lists - Rendering Arrays with .map()
          </h2>
          <FruitList />
        </section>

        <footer className="text-center text-gray-400 text-sm pt-8 pb-4">
          Built with React + TypeScript + Vite + Tailwind CSS
        </footer>
      </main>
    </div>
  );
}

export default App;
