import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from 'react';

const Creation = () => {
  useEffect(() => {
    // let scrollContainer = document.querySelector('#Creation-div');
    let scrollContainer1 = document.getElementById('Creation-sub-div');
    let back_btn = document.getElementById('l_btn');
    let next_btn = document.getElementById('r_btn');

    scrollContainer1.addEventListener('mouseover', function () {
      scrollContainer1.style.animationPlayState = 'paused';
    });

    scrollContainer1.addEventListener('mouseout', function () {
      scrollContainer1.style.animationPlayState = 'running';
    });

    // run();
    // function run(){
    //   scrollContainer1.style.animationPlayState='running';
    //   setTimeout(pause,1004);
    // }
    // function pause(){
    //   scrollContainer1.style.animationPlayState='paused';
    //   setTimeout(run, 1004);
    // }

    // Onclicking next button
    back_btn.addEventListener('click', () => {
      scrollContainer1.style.animationName = 'autoScrollLeft';
    });

    // Onclicking back button
    next_btn.addEventListener('click', () => {
      scrollContainer1.style.animationName = 'autoScrollRight';
    });
  }, []);

  return (
    <div id="Creation-sec">
      <p id="Creation-banner">
        <i className="fa fa-cogs" style={{ margin: '0.3vh 0.6vh', padding: '0.2vh', color: '#074fe1', fontSize: '90%' }}></i>
      </p>
      <div id="Creation">
        <div>
          {/* {window.innerWidth > 900 ? (<button id="l_btn">&#60; Back /&#62;</button>) : ()} */}
          <button id="l_btn">&#60;</button>
        </div>
        <div id="Creation-div">
          <div id='Creation-sub-div'>
            <span>
              <a className="item" href="calculator.html">
                <img src="calculator_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Basic arithmetic operations</span>
                  <span>- User-friendly interface</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="tic_tac_toe.html">
                <img src="tic_tac_toe_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Win/lose/draw detection</span>
                  <span>- Defeat your opponent player</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="stone_paper_scissors.html">
                <img src="stone_paper_scissors_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Random computer choice</span>
                  <span>- Win against computer's luck</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="guess.html">
                <img src="guess_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Random number generation</span>
                  <span>- Hint system (too high/too low)</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="snake.html">
                <img src="snake_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Score tracking</span>
                  <span>- Simple graphics and sound</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="calculator.html">
                <img src="calculator_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Basic arithmetic operations</span>
                  <span>- User-friendly interface</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="tic_tac_toe.html">
                <img src="tic_tac_toe_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Win/lose/draw detection</span>
                  <span>- Defeat your opponent player</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="stone_paper_scissors.html">
                <img src="stone_paper_scissors_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Random computer choice</span>
                  <span>- Win against computer's luck</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="guess.html">
                <img src="guess_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Random number generation</span>
                  <span>- Hint system (too high/too low)</span>
                </span>
              </a>
            </span>
            <span>
              <a className="item" href="snake.html">
                <img src="snake_front.png" alt='' />
                <span className='item-desc'>
                  <span>- Score tracking</span>
                  <span>- Simple graphics and sound</span>
                </span>
              </a>
            </span>
          </div>
        </div>
        <div>
          {/* {window.innerWidth > 900 ? (<button id="r_btn">&#60; Front /&#62;</button>) : ()} */}
          <button id="r_btn">/&#62;</button>
        </div>
      </div>
    </div>
  );
};

export default Creation;


