import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Creation from './Components/Creation';
import Terminal from './Components/Terminal';
import SkeletonMain from './Components/SkeletonMain';
import SkeletonMainSmall from './Components/SkeletonMainSmall';
import Footer from './Components/Footer';
import Comments from './Components/Comments';



function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000); // Delay loading by 3 seconds
  }, []);

  return (
    <div className="App">
      {loaded ? (
        <>
          <Navbar />
          <Home />
          <Creation />
          <Terminal />
          <Comments />
          <Footer />
          
        </>
      ) : (
        <>
          {window.innerWidth > 1000 ?
            (
              <SkeletonMain />
            )
            :
            (
              <SkeletonMainSmall />
            )}
        </>
      )}
    </div>
  );
}

export default App;
