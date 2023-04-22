import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";
import './css/QuoraHeader.css';


function QuoraHeader() {
  return (
    <div className='qHeader'>
        <div className='qHeader-content'>
            <div className='qHeader__logo'>
                <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt="logo" />
            </div>
            <div className='qHeader__icons'>
                <div className='qHeader__icons'>
                    <HomeIcon/>
                </div>
                <div className='qHeader__icons'>
                    <FeaturedPlayListOutlinedIcon/>
                </div>
                <div className='qHeader__icons'>
                    <AssignmentTurnedInOutlined/>
                </div>
                <div className='qHeader__icons'>
                    <PeopleAltOutlined/>
                </div>
                <div className='qHeader__icons'>
                    <NotificationsOutlined/>
                </div>
            </div>
            <div className="qHeader__input">
                <Search/>
                <input type="text" placeholder="Search questions"/>
            </div>
            <div className="qHeader__Rem">
                <Avatar/>
            </div>
            <Button>Add Question</Button>
        </div>
    </div>
  )
}

export default QuoraHeader