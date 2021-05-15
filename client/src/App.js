import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Container } from "@material-ui/core";
const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Home/>
    </Container>
  );
};

export default App;
