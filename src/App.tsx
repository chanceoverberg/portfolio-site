import { FC, useEffect, useMemo, useState } from 'react';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import { Box } from '@chakra-ui/react';
import Links from './components/Links';
import ToggleColorMode from './components/ToggleColorMode';
import Education from './components/Education';
import Skills from './components/Skills';

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState("HOME");
  const [title, setTitle] = useState("Home | Chance Overberg");

  const changePage = (page: string): void => {
      setCurrentPage(page);
  }

  useEffect (() => {
    document.title = `${title} | Chance Overberg`;
  }, [title]);

  const page: JSX.Element = useMemo(() => {
      switch(currentPage) {
          case "HOME": {
            setTitle("Home");
            return <Home />;
          }
          case "WORK": {
            setTitle("Work");
            return <Work />;
          }
          case "SKILLS": {
            setTitle("Skills");
            return <Skills />;
          }
          case "PROJECTS": {
            setTitle("Projects");
            return <Projects />;
          }
          case "EDUCATION": {
            setTitle("Education");
            return <Education />;
          }
          default: {
            setTitle("Home");
            return <Home />
          }
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
