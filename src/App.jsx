import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#1A202C',
        color: 'white',
      }
    }
  },
  colors: {
    brand: {
      primary: '#2D3748',
      secondary: '#4A5568',
      accent: '#48BB78'
    }
  }
});
import Home from './pages/Home';
import CreateCrewmate from './pages/CreateCrewmate';
import Gallery from './pages/Gallery';
import CrewmateDetails from './pages/CrewmateDetails';
import EditCrewmate from './pages/EditCrewmate';
import Navigation from './components/Navigation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box display="flex" minH="100vh">
          <Navigation />
          <Box flex="1" ml="200px">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateCrewmate />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/crewmate/:id" element={<CrewmateDetails />} />
              <Route path="/edit/:id" element={<EditCrewmate />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;