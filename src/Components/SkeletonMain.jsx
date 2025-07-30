import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const SkeletonMain = () => {
  return (
    <SkeletonTheme baseColor="#01143a" highlightColor="#021c50">
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100vw", height: "10vh" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "20vw", height: "10vh", paddingLeft: "1vw", marginTop: "1.2vh" }}>
            <Skeleton variant="rect" width={"20vw"} height={"6vh"} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "50vw", height: "10vh" }}>
            <Skeleton variant="rect" width={"7vw"} height={"2.5vh"} />
            <Skeleton variant="rect" width={"8vw"} height={"2.5vh"} />
            <Skeleton variant="rect" width={"8vw"} height={"2.5vh"} />
            <Skeleton variant="rect" width={"7vw"} height={"2.5vh"} />

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "12vw", height: "4vh" }} >
              <Skeleton variant="rect" width={"1.2vw"} height={"2.5vh"} />
              <Skeleton variant="rect" width={"1.2vw"} height={"2.5vh"} />
              <Skeleton variant="rect" width={"1.2vw"} height={"2.5vh"} />
              <Skeleton variant="rect" width={"1.2vw"} height={"2.5vh"} />
              <Skeleton variant="rect" width={"1.2vw"} height={"2.5vh"} />
              <Skeleton variant="rect" width={"1.2vw"} height={"2.5vh"} />

            </div>
          </div>

        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", width: "100vw", height: "89vh" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "33vw", height: "89vh", marginLeft: "5vw" }}>
            <Skeleton variant="rect" width={"23vw"} height={"23vw"} style={{ clipPath: 'circle(50% at 50% 50%)' }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "67vw", height: "89vh" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30vw", height: "7vh", marginRight: "5vw", marginTop: "5vh" }}>
              <Skeleton variant="rect" width={"28vw"} height={"5vh"} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25vw", height: "5vh", marginRight: "5vw" }}>
              <Skeleton variant="rect" width={"20vw"} height={"4vh"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "45vw", height: "30vh", marginRight: "5vw", marginTop: "7vh" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0.2vw" }}>
                <Skeleton variant="rect" width={"36vw"} height={"3vh"} />
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0.2vw" }}>
                <Skeleton variant="rect" width={"42vw"} height={"3vh"} />
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0.2vw" }}>
                <Skeleton variant="rect" width={"36vw"} height={"3vh"} />
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

export default SkeletonMain;
