import React from "react";
import MapGen from "../map"
import Profile from "./profile/Profile";
function BodyMid({ user }) {
    return(
        <div>
            <MapGen/>
            <Profile user={user}/>
        </div>
    );
}
export default BodyMid;