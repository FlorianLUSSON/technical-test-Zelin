import "./App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Header />
      <BookList />
    </div>
  );
}

export default App;
