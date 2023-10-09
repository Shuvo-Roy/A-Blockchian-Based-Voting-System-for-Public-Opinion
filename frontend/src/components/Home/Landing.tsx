import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import {MdOutlinePendingActions,MdHowToVote,MdVolunteerActivism} from 'react-icons/md'
import {BiDonateHeart} from 'react-icons/bi'
const Landing = () => {
  return (
    // <div className="landing">
    //   <div className="left">
    //     <div className="logo">
    //       <img src="logo.png" />
    //     </div>

    //     <div className="title-large">Blockchain Based</div>
    //     <div className="title-large">Voting System</div>
    //     <div className="title-small">the future of voting</div>

    //     <div className="button-wrapper">
    //       <Link to="/login">
    //         <button className="button-black">Login</button>
    //       </Link>

    //       <Link to="/view">
    //         <button>View Votes</button>
    //       </Link>
    //     </div>
    //   </div>

    //   <div className="right">
    //     <img src="vote.gif" />
    //   </div>
    // </div>
    <>
    <div className="button-wrapper-ln">
           <Link to="/login">
            <button className="button-black">Login</button>
           </Link>

           <Link to="/view">
            <button className="button-black">View Votes</button>
         </Link>
           <Link to="/blog">
            <button className="button-black">Laws</button>
         </Link>
         </div>
      <p className="header-text">
        A Blockchain based voting system for public opinion
      </p>
      <Hero></Hero>
      <div className="charity">
      <div className="charity-list">
        < MdOutlinePendingActions className="h-16 w-16"/>
        <p className="text-2xl">Our Mission</p>
      </div>
      <div className=" charity-list">
        <MdHowToVote className="h-16 w-16"/> 
        <p className="text-2xl">Voting Events</p>
      </div>
      <div className="make-donation">
        <BiDonateHeart className="h-16 w-16"/>
        <p className="text-2xl">Make Donations</p>
      </div>
      <div className="charity-list">
        <MdVolunteerActivism className="h-16 w-16"/>
        <p className="text-2xl">Join Volunteer</p>
      </div>
      </div>

      {/* ############################### */}
      <p className="politian-title">About Politian</p>
      <p className="Better-Future">We Can Work Together For Create a Better Future.</p>
      <p className="leader">The leader is eager to listen to the needs of the youth generation and to hear what solutions they have to the problems they are facing. He hopes to find solutions that will help them lead meaningful lives and make lasting change in the world.</p>
      <p className="Believes">He believes that the collaboration between the youth and the leaders of society is necessary to bring about a brighter future. Now, he is ready to take the first step to making that happen.</p>
      <p className="small-steps">"We can start by taking small steps and making small changes that can have a big impact on the world.”</p>
    </>
  );
};

export default Landing;
