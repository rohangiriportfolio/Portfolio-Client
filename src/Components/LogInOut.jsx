import React from 'react';
import './style.css';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
// import { useEffect } from 'react';
    
const LogInOut = () => {
    // const loginwithgoogle = () => {
    //     window.open("http://localhost:5000/auth/google", "_self");
    // }
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          console.log("Access Token:", tokenResponse.access_token);
    
          try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
              headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });
            await axios.post("http://localhost:5000/api/data", res.data, {
              // params: res.data ,
              withCredentials: true,
            });
    
            console.log("User Info:", res.data);
            window.location.href = "/";
          } catch (error) {
            console.error("Error fetching user details:", error);
          }
        },
        onError: (error) => console.error("Login Failed:", error),
      });
    const onMouseOver = () => {
        document.getElementById('LogInGoogle').style.color='#094acd';
    }
    const onMouseOut = () => {
        document.getElementById('LogInGoogle').style.color='rgba(255, 255, 255, 0.697)';
    }


    return (
        
        // <GoogleOAuthProvider clientId="825728309377-u1vkdp77pua096vm4cj9jcb59037fnba.apps.googleusercontent.com">
        // </GoogleOAuthProvider>;
        <div id='LogInOut-sec'>
            <div id='LogInOut'>
                <div id='LogInOut-div'>
                    <img src="p-img.png" alt="Profile_Img" />
                    <span></span>
                    <img src="GoogleLogo.png" alt="GoogleLogo" />
                </div>
                <span id='LogInOut-span1'><i className="fa fa-sign-in"></i> Login To <span style={{color:'#094acd'}}>Rohan's Portfolio</span>  With</span>
                <span id='LogInOut-span2' onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={login} style={{  }}><i className="fa fa-google"></i> <span id='LogInGoogle'>G</span>oogle
                </span>
            </div>
        </div>
    );
}

export default LogInOut;