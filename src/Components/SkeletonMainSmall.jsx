import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const SkeletonMainSmall = () => {
    return (
        <SkeletonTheme baseColor="#01163f" highlightColor="#021a48">
            <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", overflow:"hidden" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100vw", height: "9vh" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "55vw", height: "9vh"}}>
                        <Skeleton variant="rect" width={"50vw"} height={"3.5vh"} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "10vw", height: "8vh" }}>
                        <Skeleton variant="rect" width={"5vw"} height={"2.5vh"} />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100vw", height: "91vh" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "70vw", height: "50vh" }}>
                        <Skeleton variant="rect" width={"70vw"} height={"70vw"} style={{ clipPath: 'circle(50% at 50% 50%)' }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", width: "67vw", height: "41vh", marginTop:"-7.5vh" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30vw", height: "8vh", marginRight: "5vw"}}>
                            <Skeleton variant="rect" width={"65vw"} height={"2.3vh"} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25vw", height: "8vh", marginRight: "5vw", marginTop:"-1.5vh" }}>
                            <Skeleton variant="rect" width={"45vw"} height={"2vh"} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "45vw", height: "17vh", marginTop:"-1vh"}}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height:"2vh" }}>
                                <Skeleton variant="rect" width={"60vw"} height={"1.5vh"} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height:"2vh" }}>
                                <Skeleton variant="rect" width={"65vw"} height={"1.5vh"} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height:"2vh" }}>
                                <Skeleton variant="rect" width={"60vw"} height={"1.5vh"} />
                            </div>

                        </div>
                    </div>
                </div>
                {/* <Skeleton variant="rect" width={100} height={200} />
              <Skeleton variant="rect" width={100} height={50} /> */}
            </div>
        </SkeletonTheme>
    );
}

export default SkeletonMainSmall;