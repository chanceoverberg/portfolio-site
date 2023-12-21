import { FC, useMemo, useState } from 'react';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import { Box } from '@chakra-ui/react';
import Links from './components/Links';
import ToggleColorMode from './components/ToggleColorMode';

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState("HOME");

  const changePage = (page: string): void => {
      setCurrentPage(page);
  }

  const page: JSX.Element = useMemo(() => {
      switch(currentPage) {
          case "HOME": {
            return <Home />;
          }
          case "WORK": {
              return <Work />;
          }
          case "PROJECTS": {
              return <Projects />;
          }
          default: return <Home />;
      }
  }, [currentPage]);
  
  return (
      <Box h='100vh'>
          <Links changePage={changePage}/>
          <ToggleColorMode />
          {page}
      </Box>
  )
};

export default App;
