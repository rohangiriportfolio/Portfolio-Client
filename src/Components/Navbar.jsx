import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Navbar = () => {



    const mouse_over = (id) => {
        document.getElementById(id).style.color = '#074fe1';
        document.getElementById(id).style.transition = 'color 300ms';
    };
    const mouse_out = (id) => {
        document.getElementById(id).style.color = 'rgba(255, 255, 255, 0.697)';
    };

    const scroll_into = (id) => {
        const section = document.getElementById(id);
      const offset = window.innerHeight * (window.innerWidth <= 1000 ? 0.1 : 0.12); // 10vh offset
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionPosition - offset, behavior: 'smooth' });
    };

    const [showSidebar, setShowSidebar] = useState(0);
    const [userdata, setUserdata] = useState({});

    const getUser = async () => {
        try {
            const response = await axios.get("https://portfolio-server-ashy-kappa.vercel.app/login/success", { withCredentials: true });
            const user = JSON.parse(response.data.user);
            setUserdata(user)
        } catch (error) {
            console.log("error", error);
        }
    }
    

    // logoout

    let isClicked = false;

    const logout = () => {
        window.open("https://portfolio-server-ashy-kappa.vercel.app/logout", "_self");
    }

    const showLogout = () => {
        document.getElementById('Profile-info').style.display = 'flex';
    };

    const hideLogout = () => {
        if (!isClicked) {
            document.getElementById('Profile-info').style.display = 'none';
        }
    };

    const showLogoutPopup = () => {
        isClicked = true;
        document.getElementById('Profile-info').style.display = 'flex';
    };

    document.addEventListener('click', (event) => {
        const profileElement = document.getElementById('Profile');
        if (profileElement && !profileElement.contains(event.target)) {
            isClicked = false;
            document.getElementById('Profile-info').style.display = 'none';
        }
    });
    useEffect(() => {
        getUser();
    }, [])




    return (
        <nav id="Navbar">
            <ul id="Nav-title">
                <li>
                    <h3>
                        <span style={{ color: 'rgba(255, 255, 255, 0.697)' }} className='Nav-title-span'>&#60;</span> <span id='Nav-title-letter1'>R</span>ohan's &nbsp;<span id='Nav-title-letter2'>P</span>ortfolio / <span className='Nav-title-span' style={{ color: 'rgba(255, 255, 255, 0.697)' }}>&#62;</span>
                    </h3>
                </li>
            </ul>

            {window.innerWidth > 1000 ? (
                <ul id="Nav-content">
                    <li className='Nav-content-li' onMouseOver={() => mouse_over('home')} onMouseOut={() => mouse_out('home')} onClick={() => scroll_into('Home-sec')}>&#60;<span id="home"><i className="fa fa-home"></i>H</span>ome/&#62;</li>
                    <li className='Nav-content-li' onMouseOver={() => mouse_over('creation')} onMouseOut={() => mouse_out('creation')} onClick={() => scroll_into('Creation-sec')}>&#60;<span id="creation"><i className="fa fa-cogs" style={{ fontSize: '90%' }}></i>C</span>reation/&#62;</li>
                    <li className='Nav-content-li' onMouseOver={() => mouse_over('comment')} onMouseOut={() => mouse_out('comment')} onClick={() => scroll_into('Comments-sec')}>&#60;<span id="comment"><i className="fa fa-commenting"></i>C</span>omment/&#62;</li>
                    <li className='Nav-content-li' onMouseOver={() => mouse_over('terminal')} onMouseOut={() => mouse_out('terminal')} onClick={() => scroll_into('Terminal-sec')}>&#60;<span id="terminal"><i className="fa fa-terminal" style={{ fontSize: '120%' }}></i>T</span>erminal/&#62;</li>
                    {/* <li className='Nav-content-li' onMouseOver={() => mouse_over('contact')} onMouseOut={() => mouse_out('contact')}>&#60;<span id="contact"><i className="fa fa-link"></i>C</span>ontact /&#62;</li> */}
                    <span id="Nav-content-span" style={{ color: 'rgba(255, 255, 255, 0.697)', fontSize: '1.1vw', paddingBottom: '0.2vw', cursor: 'default' }}> | </span>
                    <span style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "3vw", height: "5vw", margin: "1.5vw", color: "rgba(255, 255, 255, 0.697)" }}>
                        {
                            Object?.keys(userdata)?.length > 0 ? (
                                <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '3vw', width: '3vw', boxShadow: "0px 0px 10px 0px #094acd", borderRadius: "50%" }}>
                                    <img id='Profile' onMouseOver={showLogout} onMouseOut={hideLogout} onClick={showLogoutPopup} src={userdata?.image} style={{ width: "100%", height: '100%', borderRadius: "50%" }} alt="" />
                                    <span id='Profile-info' style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '14vw', position: 'absolute', fontSize: '0.8vw', marginTop: '10.5vw', marginRight: '10vw', boxShadow: "0px 0px 10px 0px #094acd", padding: '0.05vw 0.3vw 0.4vw 0.3vw', borderRadius: '0.7vw', background: '#01102d' }}>
                                        <li style={{ fontSize: '1vw' }}>
                                            <i className="fa fa-user"></i>
                                            <span style={{ color: '#074fe1' }}>{userdata?.displayName.split(' ')[0][0]}</span>
                                            {userdata?.displayName.split(' ')[0].slice(1,)}
                                            {
                                                userdata?.displayName.split(' ').length > 1 ?
                                                    (
                                                        <>
                                                            &nbsp;
                                                            <span style={{ color: '#074fe1' }}>{userdata?.displayName.split(' ')[1][0]}</span>
                                                            {userdata?.displayName.split(' ')[1].slice(1,)}
                                                        </>
                                                    ) : (<></>)
                                            }
                                        </li>
                                        <li style={{ fontSize: '0.9vw' }}><i className="fa fa-envelope"></i> {userdata?.email}</li>
                                        <li onMouseOver={() => mouse_over('Logout')} onMouseOut={() => mouse_out('Logout')} onClick={logout} style={{ fontSize: '0.9vw' }}>
                                            <span id='Logout'><i className="fa fa-sign-out"></i> L</span>
                                            ogout
                                        </li>
                                    </span>
                                </span>
                            )
                                :
                                (
                                    <>
                                        <span id='Profile' onMouseOver={showLogout} onMouseOut={hideLogout} onClick={showLogoutPopup} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: '3vw', borderRadius: "50%", boxShadow: "0px 0px 10px 0px #094acd" }}><i className='fa fa-user' style={{ fontSize: '1.5vw' }}></i></span>
                                        <Link id='Profile-info' onMouseOver={() => mouse_over('Logout')} onMouseOut={() => mouse_out('Logout')} to={"/LogInOut"} style={{ justifyContent: 'center', alignItems: 'center', boxShadow: "0px 0px 10px 0px #094acd", borderRadius: "5vw", outline: 'none', color: 'rgba(255, 255, 255, 0.697)', textDecoration: 'none', position: 'absolute', marginTop: '8vw', marginRight:'0.3vw', padding: '0.05vw 0.3vw 0.2vw 0.3vw', background: '#01102d', fontSize:'1.1vw' }}>
                                            <span id='Logout'><i className="fa fa-sign-in"></i> L</span>
                                            ogin
                                        </Link>
                                    </>
                                )
                        }
                    </span>
                </ul>

            ) : showSidebar ? (
                <div id='Nav-div-content' className='a'>
                    <span id="Hamburger-icon" onClick={() => setShowSidebar(!showSidebar)} style={{ width: '70vw', height: '5vh', marginLeft: '5vw' }} >
                        <span style={{ transform: 'translate(0%, 140%) rotate(45deg)' }}></span>
                        <span style={{ transform: 'translate(0%, -140%) rotate(-45deg)' }}></span>
                    </span>
                    <ul id="Nav-content">
                        <span style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "15vw", height: "20vw", margin: "1.5vw", color: "rgba(255, 255, 255, 0.697)" }}>
                            {
                                Object?.keys(userdata)?.length > 0 ? (
                                    <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '15vw', width: '15vw', boxShadow: "0px 0px 10px 0px #094acd", borderRadius: "50%" }}>
                                        <img id='Profile' onMouseOver={showLogout} onMouseOut={hideLogout} onClick={showLogoutPopup} src={userdata?.image} style={{ width: "100%", height: '100%', borderRadius: "50%" }} alt="" />
                                        <span id='Profile-info' style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '14vw', position: 'absolute', fontSize: '0.8vw', marginTop: '10.5vw', marginRight: '12vw', boxShadow: "0px 0px 10px 0px #094acd", padding: '0.05vw 0.3vw 0.4vw 0.3vw', borderRadius: '0.7vw', background: '#01102d' }}>
                                            <li style={{ fontSize: '1vw' }}>
                                                <i className="fa fa-user"></i>
                                                <span style={{ color: '#074fe1' }}>{userdata?.displayName.split(' ')[0][0]}</span>
                                                {userdata?.displayName.split(' ')[0].slice(1,)}
                                                {
                                                    userdata?.displayName.split(' ').length > 1 ?
                                                        (
                                                            <>
                                                                &nbsp;
                                                                <span style={{ color: '#074fe1' }}>{userdata?.displayName.split(' ')[1][0]}</span>
                                                                {userdata?.displayName.split(' ')[1].slice(1,)}
                                                            </>
                                                        ) : (<></>)
                                                }
                                            </li>
                                            <li style={{ fontSize: '0.9vw' }}><i className="fa fa-envelope"></i> {userdata?.email}</li>
                                            <li onMouseOver={() => mouse_over('Logout')} onMouseOut={() => mouse_out('Logout')} onClick={logout} style={{ fontSize: '0.9vw' }}>
                                                <span id='Logout'><i className="fa fa-sign-out"></i> L</span>
                                                ogout
                                            </li>
                                        </span>
                                    </span>
                                )
                                    :
                                    (
                                        <>
                                            <span id='Profile' onMouseOver={showLogout} onMouseOut={hideLogout} onClick={showLogoutPopup} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vw', width: '15vw', borderRadius: "50%", boxShadow: "0px 0px 10px 0px #094acd" }}><i className='fa fa-user' style={{ fontSize: '8vw' }}></i></span>
                                            <Link id='Profile-info' onMouseOver={() => mouse_over('Logout')} onMouseOut={() => mouse_out('Logout')} to={"/LogInOut"} style={{ justifyContent: 'center', alignItems: 'center', boxShadow: "0px 0px 10px 0px #094acd", borderRadius: "5vw", outline: 'none', color: 'rgba(255, 255, 255, 0.697)', textDecoration: 'none', position: 'absolute', marginTop: '25vw', padding: '0.2vw 1.5vw 0.2vw 1vw', background: '#01102d', fontSize:'4vw' }}>
                                                <span id='Logout' style={{display:'flex', alignItems: 'center', justifyContent:'center'}}><i className="fa fa-sign-in"></i> L</span>
                                                ogin
                                            </Link>
                                        </>
                                    )
                            }
                        </span>
                        <li className='Nav-content-li' onMouseOver={() => mouse_over('home')} onMouseOut={() => mouse_out('home')} onClick={() => scroll_into('Home-sec')}>&#60;<span id="home"><i className="fa fa-home"></i>H</span>ome /&#62;</li>
                        <li className='Nav-content-li' onMouseOver={() => mouse_over('creation')} onMouseOut={() => mouse_out('creation')} onClick={() => scroll_into('Creation-sec')}>&#60;<span id="creation"><i className="fa fa-cogs"></i>C</span>reation /&#62;</li>
                        <li className='Nav-content-li' onMouseOver={() => mouse_over('comment')} onMouseOut={() => mouse_out('comment')} onClick={() => scroll_into('Comments-sec')}>&#60;<span id="comment"><i className="fa fa-commenting"></i>C</span>omment /&#62;</li>
                        <li className='Nav-content-li' onMouseOver={() => mouse_over('terminal')} onMouseOut={() => mouse_out('terminal')} onClick={() => scroll_into('Terminal-sec')}>&#60;<span id="terminal"><i className="fa fa-terminal" style={{ fontSize: "120%" }}></i>T</span>erminal /&#62;</li>
                    </ul>
                </div>
            ) : (
                <span id="Hamburger-icon" onClick={() => setShowSidebar(!showSidebar)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            )}

        </nav>
    );
}
export default Navbar;
