import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";



const Comments = () => {


    moment.updateLocale('en', {
        relativeTime: {
            future: "in %s",
            past: function (output) {
                if (output === "just now") {
                    return output;
                } else {
                    return output + " ago";
                }
            },
            s: "just now",
            m: "1 min",
            mm: "%d mins",
            h: "1 hr",
            hh: "%d hrs",
            d: "1 day",
            dd: "%d days",
            M: "1 month",
            MM: "%d months",
            y: "1 yr",
            yy: "%d yrs"
        }
    });

    // const [commentLike, setCommentLike] = useState(0);


    const like = async (event) => {
        const element = event.target.closest('.Comments-div2');
        const cardId = element.getAttribute('data-id');
        console.log(cardId);
        await axios.post('http://localhost:5000/likes/submit', { cardId, userdata })
            .then(data => {
                const likesCountElement = element.querySelector('.likesCount');
                const currentLikesCount = parseInt(likesCountElement.textContent);
                if (data.data.message === 'true') {
                    likesCountElement.innerText = currentLikesCount + 1;
                    const likesIcon = element.querySelector('.likesIcon i');
                    if (likesIcon.classList.contains("fa-thumbs-o-up")) {
                        likesIcon.classList.remove("fa-thumbs-o-up");
                        likesIcon.classList.add("fa-thumbs-up");
                    }
                } else {
                    likesCountElement.innerText = currentLikesCount - 1;
                    const likesIcon = element.querySelector('.likesIcon i');
                    if (likesIcon.classList.contains("fa-thumbs-up")) {
                        likesIcon.classList.remove("fa-thumbs-up");
                        likesIcon.classList.add("fa-thumbs-o-up");
                    }
                }

            });
    }

    const disLike = async (event) => {
        const element = event.target.closest('.Comments-div2');
        const cardId = element.getAttribute('data-id');
        console.log(cardId);
        await axios.post('http://localhost:5000/disLikes/submit', { cardId, userdata })
            .then(data => {
                const disLikesCountElement = element.querySelector('.disLikesCount');
                const currentDisLikesCount = parseInt(disLikesCountElement.textContent);
                console.log(currentDisLikesCount, disLikesCountElement);
                if (data.data.message === 'true') {
                    disLikesCountElement.innerText = currentDisLikesCount + 1;
                    const disLikesIcon = element.querySelector('.disLikesIcon i');
                    if (disLikesIcon.classList.contains("fa-thumbs-o-up")) {
                        disLikesIcon.classList.remove("fa-thumbs-o-up");
                        disLikesIcon.classList.add("fa-thumbs-up");
                        disLikesIcon.style.transform = "rotate(180deg)";
                    }
                } else if(data.data.message === 'false') {
                    disLikesCountElement.innerText = currentDisLikesCount - 1;
                    const disLikesIcon = element.querySelector('.disLikesIcon i');
                    if (disLikesIcon.classList.contains("fa-thumbs-up")) {
                        disLikesIcon.classList.remove("fa-thumbs-up");
                        disLikesIcon.classList.add("fa-thumbs-o-up");
                        disLikesIcon.style.transform = "rotate(180deg)";
                    }
                }

            });
    }

    const [userdata, setUserdata] = useState({});

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:5000/login/success", { withCredentials: true });
            const user = JSON.parse(response.data.user);
            setUserdata(user)
        } catch (error) {
            console.log("error", error)
        }
    }



    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const sendData = async () => {
        try {
            await axios.post('http://localhost:5000/comments/submit', { text, userdata });
            getComments();
            // console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const [commentdata, setCommentsdata] = useState([]);

    const getComments = async () => {
        try {
            const response = await axios.get("http://localhost:5000/comments/show", { withCredentials: true });
            // console.log(response.data.comments);
            setCommentsdata(response.data.comments)
        } catch (error) {
            console.log("error", error);
        }
    }
    

    // console.log(commentdata);
    const onFocus = () => {
        document.getElementById('Comments-div1').style.flexDirection = 'column';
        document.getElementById('Comments-div1').style.minHeight = '22vh';
        document.getElementById('Comments-div1-span').style.display = 'flex';
        document.querySelector('.Comments-div1-profile').style.margin = '0vw 0vw 1vw 0vw';
        document.getElementById('Comments-div1-textarea').style.transition = 'border-bottom 0.5s';
        if (window.innerWidth > 900) {
            document.getElementById('Comments-div1-textarea').style.marginTop = '0vw';
            document.getElementById('Comments-sub-div1-user').style.width = '10vw';
            document.getElementById('Comments-div1-textarea').style.minWidth = '100%';
            document.getElementById('Comments-div1-textarea').style.maxWidth = '100%';
            document.getElementById('Comments-div2-container').style.paddingTop = '1vh';
        }
        else {
            document.getElementById('Comments-div1-textarea').style.marginTop = '1vw';
            document.getElementById('Comments-sub-div1-user').style.width = '16vw';
            document.getElementById('Comments-div1-textarea').style.minWidth = '80vw';
            document.getElementById('Comments-div1-textarea').style.maxWidth = '80vw';
        }
        document.getElementById('Comments-sub-div1-user-name').style.display = 'flex';
        document.getElementById('Comments-sub-div1-title').style.display = 'flex';
        document.getElementById('Comments-div1').addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height =
                (this.scrollHeight) + 'px';
        });
    }
    const onBlur = () => {
        document.getElementById('Comments-div1').style.flexDirection = 'row';
        document.getElementById('Comments-div1').style.height = '10vh';
        document.getElementById('Comments-div1').style.minHeight = '10vh';
        document.getElementById('Comments-div1-span').style.display = 'none';
        document.querySelector('.Comments-div1-profile').style.margin = '0vw 1vw 0vw 0vw';
        document.getElementById('Comments-div1-textarea').style.transition = 'border-bottom 0s';

        document.getElementById('Comments-div1-textarea').value = '';
        document.getElementById('Comments-div1-textarea').style.height = 'auto';
        // document.getElementById('Comments-sub-div1-user').style.width = '3vw';
        if (window.innerWidth > 900) {
            document.getElementById('Comments-div1-textarea').style.marginTop = '0.5vw';
            document.getElementById('Comments-sub-div1-user').style.width = '3vw';
            document.getElementById('Comments-div1-textarea').style.minWidth = '65vw';
            document.getElementById('Comments-div1-textarea').style.maxWidth = '65vw';
            document.getElementById('Comments-div2-container').style.paddingTop = '3vh';
        }
        else {
            document.getElementById('Comments-div1-textarea').style.marginTop = '2vw';
            document.getElementById('Comments-sub-div1-user').style.width = '8vw';
            document.getElementById('Comments-div1-textarea').style.minWidth = '71vw';
            document.getElementById('Comments-div1-textarea').style.maxWidth = '71vw';
        }
        document.getElementById('Comments-sub-div1-user-name').style.display = 'none';
        document.getElementById('Comments-sub-div1-title').style.display = 'none';
    }
    useEffect(() => {
        document.getElementById('Comments-div1-textarea').addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height =
                (this.scrollHeight) + 'px';
        });
        document.getElementById('Comments-div1-textarea').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          });
          
        //   const element = document.getElementById('Comments-div2-container');
        //   element.addEventListener('scroll', () => {
        //       if (element.scrollHeight <= element.clientHeight) {
        //       element.style.scrollbarWidth='0px';
        //       } else {
        //       element.style.overflowY = 'scroll';
        //       }

        //   });


        getUser();
    }, []);
    useEffect(() => {
        getComments();
    }, []);
    return (
        <div id="Comments-sec">
            <p id="Comments-banner">
                <i className="fa fa-commenting" style={{ margin: '0.3vh 0.6vh', padding: '0.2vh', color: '#074fe1', fontSize: '90%' }}></i>
            </p>
            <span id='Comments-banner-text'>∼ Comments.</span>
            <div id="Comments">
            <p id='Comments-p'>{commentdata.length} {commentdata.length === 1 ? 'Comment' : 'Comments'}</p>
                <div id="Comments-div1" onFocus={onFocus}>
                    <span className='Comments-div1-profile'>
                        <span id='Comments-sub-div1-title'>Commenting as</span>
                        {Object?.keys(userdata)?.length > 0 ?
                            (<span id='Comments-sub-div1-user'>
                                <img id='Comments-sub-div1-user-img' src={userdata?.image} alt="" />
                                <span id='Comments-sub-div1-user-name'>@{userdata?.displayName}</span>
                            </span>
                            )
                            :
                            (
                                <span id='Comments-sub-div1-user'>
                                    <span id='Comments-sub-div1-user-img'>
                                        <i className='fa fa-user'></i>
                                    </span>
                                    <span id='Comments-sub-div1-user-name'>@Visitor</span>
                                </span>
                            )}
                    </span>
                    <textarea value={text} onChange={handleTextChange} name="Textarea" id="Comments-div1-textarea" placeholder='Add a comment...' rows={"1"} maxLength={"1000"}></textarea>
                    <span id='Comments-div1-span'>
                        <span onClick={onBlur}>Cancel</span>
                        <span onClick={sendData}>Comment</span>
                    </span>
                </div>
                <div id='Comments-div2-container'>
                    {commentdata.map((comment, index) => (
                        <div key={(index)} className="Comments-div2" data-id={comment._id}>
                            <div id="Comments-sub1-div2">
                                <span className='Comments-div1-profile' style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <img id='Comments-sub1-div2-content-img' src={comment.image} alt="" />
                                </span>
                                <div id='Comments-sub1-div2-content'>
                                    <p id='Comments-sub1-div2-content-p1'>@{comment.displayName}&nbsp;&nbsp;<span id='Comments-sub1-div2-content-p1-span'>{moment(comment.createdAt).fromNow()}</span></p>
                                    <p id='Comments-sub1-div2-content-p2'>{comment.comment}</p>
                                </div>
                            </div>
                            <div id='Comments-sub2-div2'>
                                <span id='Comments-sub2-div2-likes' onClick={like}>
                                    <span className='likesIcon'>
                                        {comment.like.indexOf(userdata._id) === -1 ?
                                            (
                                                <i className="fa fa-thumbs-o-up"></i>
                                            )
                                            :
                                            (
                                                <i className="fa fa-thumbs-up"></i>
                                            )}
                                    </span>
                                    <span className='likesCount'>{comment.like.length}</span>
                                </span>
                                <span id='Comments-sub2-div2-disLikes' onClick={disLike}>
                                    <span className='disLikesIcon'>
                                        {(comment.disLike.indexOf(userdata._id) === -1) ?
                                            (
                                                <i className="fa fa-thumbs-o-up" style={{ transform: 'rotate(180deg)' }}></i>
                                            )
                                            :
                                            (
                                                <i className="fa fa-thumbs-up" style={{ transform: 'rotate(180deg)' }}></i>
                                            )}
                                    </span>
                                    <span className='disLikesCount'>{comment.disLike.length}</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Comments;