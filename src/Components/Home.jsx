import React from 'react';
import './style.css';
// import typed from 'typed.js';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../hello.json';
import 'font-awesome/css/font-awesome.min.css';
import 'react-loading-skeleton/dist/skeleton.css'


const Home = () => {
    useEffect(() => {
        let scrollContainer = document.getElementById('Home-welcome-sub-sub-text');
        let back_btn = document.getElementById('left_btn');
        let next_btn = document.getElementById('right_btn');
        // scrollContainer.addEventListener('wheel', function(e) {
        //     e.preventDefault(); // prevent default scrolling
        //     // let deltaY = -Math.sign(e.deltaX);
        //     scrollContainer.scrollLeft += e.deltaY;
        //     scrollContainer.style.scrollBehavior = "auto";
        // });

        next_btn.addEventListener('click', () => {
            scrollContainer.style.scrollBehavior = "smooth";
            if(scrollContainer.style.width <= '700px'){
                scrollContainer.scrollLeft += 64 * window.innerWidth / 100;
            }
            else{
                scrollContainer.scrollLeft += 43 * window.innerWidth / 100;
            }
        })

        back_btn.addEventListener('click', () => {
            scrollContainer.style.scrollBehavior = "smooth";
            if(scrollContainer.style.width <= '700px'){
                scrollContainer.scrollLeft -= 64 * window.innerWidth / 100;
            }
            else{
                scrollContainer.scrollLeft -= 43 * window.innerWidth / 100;
            }
        })

        let scrollContainer1 = document.getElementById('Home-welcome-sub-sub-text');
        let scrollAmount = 0;
        scrollContainer1.style.scrollBehavior = "smooth";
        setInterval(() => {
            if(window.innerWidth <= 700){
                scrollAmount += 64 * window.innerWidth / 100; // adjust the speed as needed
            }
            else{
                scrollAmount += 43 * window.innerWidth / 100; // adjust the speed as needed
            }
            if (scrollAmount >= scrollContainer1.scrollWidth) {
                scrollAmount = 0; // reset to extreme left
            }
            scrollContainer1.scrollLeft = scrollAmount;
        }, 3000); // adjust the interval time as needed

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
            <p id='Home-banner'><i className="fa fa-home" style={{ margin: '0.3vh 0.6vh', padding: '0.2vh', color: '#074fe1' }}></i></p>
            <div id='Home'>
                <div id='Home-img'>
                    <img src="p-img.png" alt="Profile_Img" />
                </div>
                <div id='Home-welcome'>
                    <h2>
                        <span>
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                autoplay={true}
                                style={{
                                    height: 70,
                                    width: 70
                                }} />
                        </span>
                        <span><span style={{fontFamily: "Righteous"}}>Hello/Bonjour/Holla</span> Coders</span>
                    </h2>
                    <span>
                        <span className='Home-welcome-text-fixed'>I'm &#60;&nbsp;</span><span id='Home-welcome-text-typing'></span><span className='Home-welcome-text-fixed'>&nbsp;/&#62;</span>
                    </span>
                    <div id='Home-welcome-sub-text'>
                        <span id='left_btn' className='Home-welcome-sub-sub-text-bracket'>&#60;</span>
                        {window.innerWidth > 900 ? (
                            <div id='Home-welcome-sub-sub-text'>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>I'm from <span className='Home-welcome-sub-sub-text-blue'>Narayan Chak</span>, Purba Medinipur, West Bengal. Have completed </span>

                                    <span><span className='Home-welcome-sub-sub-text-blue'>Secondary</span> Examination with <span className='Home-welcome-sub-sub-text-blue'>87%</span> marks and <span className='Home-welcome-sub-sub-text-blue'>Higher Secondary</span> Examination with </span>

                                    <span><span className='Home-welcome-sub-sub-text-blue'>93%</span> marks from <span className='Home-welcome-sub-sub-text-blue'>Poura Pathabhaban</span> school. Student at <span className='Home-welcome-sub-sub-text-blue'>Haldia Institute</span></span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>of Technology</span>, Haldia. Pursuing <span className='Home-welcome-sub-sub-text-blue'>B.Tech.</span> degree in the field of <span className='Home-welcome-sub-sub-text-blue'>Computer</span></span>

                                    <span><span className='Home-welcome-sub-sub-text-blue'>of Science and Engineering</span>.
                                        Have programming <span className='Home-welcome-sub-sub-text-blue'>skills</span> in language like <span className='Home-welcome-sub-sub-text-blue'>C</span>, <span className='Home-welcome-sub-sub-text-blue'>C++</span>, <span className='Home-welcome-sub-sub-text-blue'>Java</span>,</span>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>Python</span>, <span className='Home-welcome-sub-sub-text-blue'>JavaScript</span>. Have gained intermediate knowledge in <span className='Home-welcome-sub-sub-text-blue'>MERN Stack</span></span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span> and <span className='Home-welcome-sub-sub-text-blue'>Android</span> Development. Goal is to become a <span className='Home-welcome-sub-sub-text-blue'>Professional Developer</span></span>


                                    <span> and get a <span className='Home-welcome-sub-sub-text-blue'>well paying job</span>. Also interested in <span className='Home-welcome-sub-sub-text-blue'>Creative Project Building</span> with <span className='Home-welcome-sub-sub-text-blue'>team</span></span>
                                    <span> at different levels, topics. Spend free time with <span className='Home-welcome-sub-sub-text-blue'>Drawing</span> and <span className='Home-welcome-sub-sub-text-blue'>Craft</span> work.</span>
                                </div>
                            </div>
                        ) : (
                            <div id='Home-welcome-sub-sub-text'>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>I'm from <span className='Home-welcome-sub-sub-text-blue'>Narayan Chak</span>, Purba Medinipur, West Bengal. Have completed <span className='Home-welcome-sub-sub-text-blue'>Secondary</span> Examination with <span className='Home-welcome-sub-sub-text-blue'>87%</span> marks and <span className='Home-welcome-sub-sub-text-blue'>Higher </span> </span>
                                </div>

                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span>Secondary Examination with <span className='Home-welcome-sub-sub-text-blue'>93%</span> marks from <span className='Home-welcome-sub-sub-text-blue'>Poura Pathabhaban</span> school.Student at <span className='Home-welcome-sub-sub-text-blue'>Haldia Institute of Technology</span>, Haldia.</span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span> Pursuing <span className='Home-welcome-sub-sub-text-blue'>B.Tech.</span> degree in the field of <span className='Home-welcome-sub-sub-text-blue'>Computer of Science and Engineering</span>.
                                        Have programming <span className='Home-welcome-sub-sub-text-blue'>skills</span> in language like</span>
                                </div>
                                <div className='Home-welcome-sub-sub-text-item'>
                                    <span><span className='Home-welcome-sub-sub-text-blue'>C</span>, <span className='Home-welcome-sub-sub-text-blue'>C++</span>, <span className='Home-welcome-sub-sub-text-blue'>Java</span>, <span className='Home-welcome-sub-sub-text-blue'>Python</span>, <span className='Home-welcome-sub-sub-text-blue'>JavaScript</span>. Have gained intermediate knowledge in <span className='Home-welcome-sub-sub-text-blue'>MERN Stack</span> and <span className='Home-welcome-sub-sub-text-blue'>Android</span> Development. </span>

                                </div>
                            </div>
                        )}
                        <span id='right_btn' className='Home-welcome-sub-sub-text-bracket'>/&#62;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;