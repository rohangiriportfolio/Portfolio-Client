import React, { useState } from 'react';
import './style.css';
// import typed from 'typed.js';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../hello1.json';
import 'font-awesome/css/font-awesome.min.css';
import 'react-loading-skeleton/dist/skeleton.css'


const Home = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {

        document.querySelector('#Cookie-policy p').addEventListener('click', () => {
            document.getElementById('Cookie-policy').style.display = 'none';
            document.getElementById('Visitors').style.display = 'flex';

        });


        // Show Cookie Policy when the visitor p is clicked
        document.querySelector('#Visitors p').addEventListener('click', () => {
            document.getElementById('Cookie-policy').style.display = 'flex';
            document.getElementById('Visitors').style.display = 'none';
        });

        // Hide Cookie Policy when clicking outside of it
        document.addEventListener('click', (event) => {
            const cookieElement = document.getElementById('Cookie-policy');
            const visitorsElement = document.getElementById('Visitors');

            // Check if the clicked element is not the Cookie-policy or a descendant of it
            if (cookieElement && !cookieElement.contains(event.target) && !event.target.closest('#Visitors p')) {
                cookieElement.style.display = 'none';
                visitorsElement.style.display = 'flex';
            }
        });



        let visits = localStorage.getItem("visitorCount") || 0;
        visits = parseInt(visits) + 1;
        setCount(visits);
        localStorage.setItem("visitorCount", visits);


        // Create the glow element only once
        let glow = document.querySelector('.grid-glow');
        if (!glow) {
            glow = document.createElement('div');
            glow.classList.add('grid-glow');
            document.body.appendChild(glow);
        }

        // Function to update glow position and ensure it's centered
        function updateGlowPosition(e) {
            const x = e.clientX;
            const y = e.clientY;
            glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        }

        // Function to control glow visibility
        function showGlow() {
            glow.style.opacity = '0.9'; // Brighter for better visibility
        }

        function hideGlow() {
            glow.style.opacity = '0';
        }

        // Apply glow effect only when moving inside the document
        document.addEventListener('mousemove', updateGlowPosition);
        document.addEventListener('mouseenter', showGlow);
        document.addEventListener('mouseleave', hideGlow);



        // Continuous Animated Square Filling Effect for Home Section (with 3vh left margin and different tones)
        const homeSection = document.querySelector('#Home');

        // Function to create a block with animation and different tones
        function createAnimatedBlock(x, y, tone) {
            const block = document.createElement('div');
            block.classList.add('grid-block');
            block.style.left = `${x + window.innerHeight * 0.03}px`; // Leave 3vh on the left
            block.style.top = `${y + window.innerHeight * 0.1}px`; // Start after 10vh
            block.style.setProperty('--tone', `${tone}%`);
            homeSection.appendChild(block);

            setTimeout(() => {
                block.classList.add('filled');
            }, Math.random() * 500);
        }

        // Function to continuously fill grid squares with different tones
        // function continuouslyFillSquares(count) {
        //   setInterval(() => {
        // document.querySelectorAll('.grid-block').forEach(block => block.remove());
        // for (let i = 0; i < 15; i++) {
        //   const x = Math.floor(Math.random() * (homeSection.offsetWidth * 0.34 / 60)) * 60;
        //   const y = Math.floor(Math.random() * ((homeSection.offsetHeight - window.innerHeight * 0.1) / 60)) * 60;
        //   const tone = Math.floor(Math.random() * 50) + 30; // Random tone value
        //   createAnimatedBlock(x, y, tone);
        // }
        //   }, 2000);
        // }

        // continuouslyFillSquares(15);





        const scrollContainer1 = document.getElementById('Home-welcome-sub-sub-text');
        const back_btn = document.getElementById('left_btn');
        const next_btn = document.getElementById('right_btn');
        let scrollAmount = 0;
        scrollContainer1.style.scrollBehavior = "smooth";

        const calcAmount = () =>
            (window.innerWidth <= 1000 ? 57.1 : 39.1) * window.innerWidth / 100;

        next_btn.addEventListener('click', () => {
            scrollAmount += calcAmount();
            scrollContainer1.scrollLeft = scrollAmount;
        });

        back_btn.addEventListener('click', () => {
            scrollAmount -= calcAmount();
            scrollContainer1.scrollLeft = scrollAmount;
        });


        let scrollInterval;
        const startInterval = () => {
            scrollInterval = setInterval(() => {
                scrollAmount += calcAmount();
                if (scrollAmount >= scrollContainer1.scrollWidth) scrollAmount = 0;
                scrollContainer1.scrollLeft = scrollAmount;
            }, 3000);
        };

        scrollContainer1.addEventListener('mouseenter', () => clearInterval(scrollInterval));
        scrollContainer1.addEventListener('mouseleave', startInterval);

        startInterval();


        // Typing Animation
        const typingElement = document.getElementById('Home-welcome-text-typing');
        const strings = ["Rohan Giri.", "a Technical Enthusiast.", "a Developer."];
        let currentStringIndex = 0;
        let currentCharacterIndex = 0;
        let isTyping = true;

        function formatText(text) {
            // Spliting the String by BlankSpace and checking for upper case to change its color to blue & not changing the color of '.'
            return text.split('').map(char => char === char.toUpperCase() && char !== '.' ? `<span style="color: rgb(7, 79, 225)">${char}</span>` : char).join('');
        }

        setInterval(() => {
            const currentString = strings[currentStringIndex];
            const text = currentString.substring(0, currentCharacterIndex);
            typingElement.innerHTML = formatText(text);

            if (isTyping) {
                currentCharacterIndex++;
                if (currentCharacterIndex > currentString.length) {
                    isTyping = false;
                }
            } else {
                currentCharacterIndex--;
                if (currentCharacterIndex === 0) {
                    setTimeout(() => {
                        currentStringIndex = (currentStringIndex + 1) % strings.length;
                        currentCharacterIndex = 0;
                        isTyping = true;
                        typingElement.innerHTML = '';
                    }, 180);
                }
            }
        }, 180);
    }, []);

    return (
        <div id='Home-sec'>
            <p id='Home-banner'><i className="fa fa-home"></i></p>
            <span id='Home-banner-text'>∼ Home.</span>
            <div id='Home'>
                <div id='Home-img'>
                    <img src="p-img.png" alt="Profile_Img" />
                </div>
                <div id='Home-welcome'>
                    <h2>
                        <span>
                            <Lottie id='Hi'
                                animationData={animationData}
                                loop={true}
                                autoplay={true}
                            />
                        </span>
                        <span><span style={{ fontFamily: "Righteous" }}>Hello/Bonjour/Holla</span> Coders</span>
                    </h2>
                    <span id='Home-welcome-text'>
                        <span className='Home-welcome-text-fixed'>I'm &#60;&nbsp;</span><span id='Home-welcome-text-typing'></span><span className='Home-welcome-text-fixed'>&nbsp;/&#62;</span>
                    </span>
                    <div id='Home-welcome-sub-text'>
                        <span id='left_btn' className='Home-welcome-sub-sub-text-bracket'>&#60;</span>
                        {window.innerWidth > 1000 ? (
                            <div id='Home-welcome-sub-sub-text'>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>I'm from <span className='Home-welcome-sub-sub-text-blue'>Narayan Chak</span>, Purba Medinipur, West Bengal. Have </span>
                                    <span>completed <span className='Home-welcome-sub-sub-text-blue'>Secondary</span> Examination with <span className='Home-welcome-sub-sub-text-blue'>87%</span> marks and <span className='Home-welcome-sub-sub-text-blue'>Higher Secondary</span></span>
                                    <span>Examination with <span className='Home-welcome-sub-sub-text-blue'>93%</span> marks from <span className='Home-welcome-sub-sub-text-blue'>Poura Pathabhaban</span> school.</span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span> Student at <span className='Home-welcome-sub-sub-text-blue'>Haldia Institute of Technology</span>, Haldia. Pursuing </span>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>B.Tech.</span> degree in the field of <span className='Home-welcome-sub-sub-text-blue'>Computer of Science and Engineering</span>. </span>
                                    <span>Have coding <span className='Home-welcome-sub-sub-text-blue'>skills</span> in language like <span className='Home-welcome-sub-sub-text-blue'>C</span>, <span className='Home-welcome-sub-sub-text-blue'>C++</span>, <span className='Home-welcome-sub-sub-text-blue'>Java</span>, <span className='Home-welcome-sub-sub-text-blue'>Python</span>, <span className='Home-welcome-sub-sub-text-blue'>JS</span>.</span>

                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>Have gained intermediate knowledge in <span className='Home-welcome-sub-sub-text-blue'>MERN Stack</span> and <span className='Home-welcome-sub-sub-text-blue'>App</span></span>
                                    <span> Development. Goal is to become a <span className='Home-welcome-sub-sub-text-blue'>Professional Developer</span> and get a </span>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>well paying job</span>. Spend free time with <span className='Home-welcome-sub-sub-text-blue'>Drawing</span> and <span className='Home-welcome-sub-sub-text-blue'>Craft</span>.</span>
                                </div>
                            </div>
                        ) : (
                            <div id='Home-welcome-sub-sub-text'>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>I'm from <span className='Home-welcome-sub-sub-text-blue'>Narayan Chak</span>, Purba</span>
                                    <span>Medinipur, West Bengal. Have completed</span>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>Secondary</span> Examination with <span className='Home-welcome-sub-sub-text-blue'>87%</span></span>
                                </div>

                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>marks and <span className='Home-welcome-sub-sub-text-blue'>Higher Secondary </span></span>
                                    <span>Examination with <span className='Home-welcome-sub-sub-text-blue'>93%</span> marks from <span className='Home-welcome-sub-sub-text-blue'>Poura</span></span>
                                    <span><span>Pathabhaban</span> school.Student at</span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>Haldia Institute of Technology</span>,</span>
                                    <span>Haldia. Pursuing <span className='Home-welcome-sub-sub-text-blue'>B.Tech.</span> degree in the</span>
                                    <span>field of <span className='Home-welcome-sub-sub-text-blue'>Computer of Science</span></span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>and Engineering</span>. Have programming</span>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>skills</span> in language like <span className='Home-welcome-sub-sub-text-blue'>C</span>, <span className='Home-welcome-sub-sub-text-blue'>C++</span>, <span className='Home-welcome-sub-sub-text-blue'>Java</span>,</span>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>Python</span>, <span className='Home-welcome-sub-sub-text-blue'>JavaScript</span>. Have gained </span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>intermediate knowledge in <span className='Home-welcome-sub-sub-text-blue'>MERN </span></span>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>Stack</span> and <span className='Home-welcome-sub-sub-text-blue'>App</span> Development. Goal is to</span>
                                    <span>become a <span className='Home-welcome-sub-sub-text-blue'>Professional Developer</span></span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>and get a <span className='Home-welcome-sub-sub-text-blue'>well paying job</span>.</span>
                                    <span>Spend free time with <span className='Home-welcome-sub-sub-text-blue'>Drawing</span> and</span>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>Craft</span>.</span>
                                </div>
                            </div>
                        )}
                        <span id='right_btn' className='Home-welcome-sub-sub-text-bracket'>/&#62;</span>
                    </div>
                    <div id='Home-conn'>
                        <i className="fa fa-github"></i>
                        <i className='fa fa-linkedin-square'></i>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <a href="/path/to/file.pdf" download="filename.pdf">
                            <button>Get CV</button>
                        </a>
                    </div>
                    <div id='Visitors'>
                        {/* <p>Visitors</p>
                        <p>{count}</p> */}
                        <p><img src="cookie.png" alt="" /></p>
                    </div>
                    <div id='Cookie-policy'>
                        <p><img src="cookieBlue.png" alt="" /></p>
                        <p>My website uses cookies to improve your experience and provide personalized features. We collect your email address, profile details, through cookies to customize your interactions with the site. By using the site, you consent to our use of cookies. You can manage or disable cookies through your browser settings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
