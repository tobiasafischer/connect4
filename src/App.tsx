import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import { Home } from './components/routes'
import { AboutMe } from './components/routes/AboutMe'
import { TopBar } from './components/routing/components/TopBar'
import GlobalStyle from './global'

const InnerContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   position: relative;
   height: 100vh;
   width: 100vw;
   @media screen and (min-width: 768px) {
      align-items: center;
   }
`
const Container = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   width: 100%;
   height: 100%;
`
function App() {
   return (
      <ReactFullpage
         licenseKey=""
         scrollingSpeed={400}
         scrollOverflow={true}
         sectionsColor={[]}
         cards={false}
         cardsOptions={{ perspective: 1, fadeContent: false, fadeBackground: false }}
         render={({ state, fullpageApi }) => (
            <Container>
               <TopBar />
               <div className="section">
                  <InnerContainer>
                     <Home />
                  </InnerContainer>
               </div>
               <div className="section">
                  <InnerContainer>
                     <AboutMe />
                  </InnerContainer>
               </div>
               <GlobalStyle />
            </Container>
         )}
      />
   )
}

export default App
