import "./App.css";
import AppContent from "./components/AppContent";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
