import "./App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex-col items-center ">
      <Header />
      <BookList />
    </div>
  );
}

export default App;
