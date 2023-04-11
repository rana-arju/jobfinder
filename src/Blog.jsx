import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto my-20">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            1. when should we use context api on react js?
          </h2>
          <p className="text-gray-500">
            Context API is used in React.js when you want to share state/data
            across multiple components without having to pass props down through
            each level of the component tree. It allows you to create a global
            store of data that can be accessed and updated by any component
            within the context. This is particularly useful for complex
            applications where there are many nested components that need to
            access the same data. By using Context API, you can avoid "prop
            drilling" and make your code more maintainable and easier to read.
          </p>
        </div>{" "}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            2. What is custom hook in react js?
          </h2>
          <p className="text-gray-500">
            Custom hooks in React.js are functions that allow you to reuse
            stateful logic across multiple components. They enable you to
            extract common logic from components and encapsulate it into a
            single, reusable function. Custom hooks follow the naming convention
            "useSomething" and can be shared across your application or even
            across multiple applications. They offer a way to simplify and
            abstract complex logic and provide a cleaner and more reusable
            codebase.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">
            3. What is useRef and useMeno in react js?
          </h2>
          <p className="text-gray-500">
            <b>useRef</b> and <b>useMemo </b> are two hooks in React.js that
            serve different purposes. useRef is used to create a mutable
            reference to a DOM element or to persist a value between component
            renders without triggering a re-render. It can be useful for
            accessing the properties or methods of a DOM element, setting focus
            on an input, or for storing a value that should not trigger a
            re-render when updated. useMemo is used to memoize the result of a
            function so that it is only re-computed when the input values have
            changed. This can help improve the performance of your application
            by avoiding unnecessary re-computations. It takes a function and an
            array of dependencies as arguments and returns a memoized value that
            is re-computed only when one or more of the dependencies have
            changed. It is commonly used for expensive computations, such as
            sorting or filtering large datasets.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
