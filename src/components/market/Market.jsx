import React, { useState } from "react";

import Bell from "../image/Bell.png";
import Check from "../image/Check.png";
import Site from "../image/Site.png"
import Bolt from "../image/Bolt.png"
import Location from "../image/Location.png";
import Premium from "../image/Premium.png";
import Restaurants from "../image/Restaurants.png";
import Ride from "../image/Ride.png";
import Map from "../image/Map.png";

import './Market.css';

import Card from "../card/Card.jsx";


export default function Market() {

    const [length, setLength] = useState(2000000);

    const [stepCompleted, setStepCompleted] = useState({
        completeProfile: false,
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false
    });

    const handleStepCompletion = (step) => {
        setStepCompleted(prevState => ({
            ...prevState,
            [step]: true
        }));
    };



    return (
        <>
            <div className="top top1">
                <button className="my-button">Complete Profile</button>
                <img src={Bell} alt="bell" />
            </div>
            <div className="top top2">
                <h1>Choose your new site</h1>
                <div class="link">
                    <li className="link-item1">
                        <img src={Check} alt="" />
                        <a href="">1</a>
                    </li>
                    <p>-------&gt;</p>
                    <li className="link-item2"><a href="">2</a></li>
                    <p>-------&gt;</p>
                    <li className="link-item3"><a href="">3</a></li>
                </div>

            </div>
            <div className="theme-park">
                <p>Market &gt; Category1 &gt; Theme Park Site &gt;</p>
                <img src={Site} alt="site image" />
            </div>
            <div class="details">
                <div class="div1">
                    <h1>Theme Park Site</h1>

                    <div class="div1a">
                        <img src={Location} />
                        <p>Address of the site</p>
                    </div>
                    <div class="div1b">
                        <button><img src={Bolt} /> Adult rides</button>
                        <button><img src={Ride} /> Family rides</button>
                        <button><img src={Restaurants} /> Restaurants</button>
                        <button><img src={Premium} /> Premium</button>
                    </div>
                    <p class="p"><a href="#">&#8599; View opportunity on polygon</a></p>
                    <div class="div1c">
                        <div>
                            <h3>200 Acres</h3>
                            <p>Area</p>
                        </div>
                        <div>
                            <h3>5 Lacks</h3>
                            <p>Starting Price</p>
                        </div>
                        <div>
                            <h3>10 Days</h3>
                            <p>Remaining days</p>
                        </div>
                        <div>
                            <h3>2.5 years</h3>
                            <p>Next check</p>
                        </div>
                    </div>
                </div>
                <div class="div2">
                    <div class="div2a">
                        <button class="btn block">Complete</button>
                        <button class="btn1 block">Site visit &#62;</button>
                    </div>
                    <div class="div2b">
                        <div class="div2ba">
                            <h3>RS {length}</h3>
                            <h6>RS 6500000</h6>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={6500000}
                            value={length}
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                    </div>

                </div>

            </div>
            <div className="main">
                <div class="overview border">
                    <h2>Overview</h2>
                    <p>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
                </div>
                <div class="why border">
                    <h2>Why?</h2>
                    <p>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
                </div>
                <div class="what border">
                    <h2>What?</h2>
                    <p>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p>
                </div>
                <div className="landmark border">
                    <h2>Landmarks</h2>
                    <div class="mode">
                        <div className="transport">
                            <h4>&#9992; Airport</h4>
                            <div className="distance">
                                <h3>100KM</h3>
                                <h6>Airport1</h6>
                            </div>
                        </div>
                        <div className="transport">
                            <h4>&#9992; Airport</h4>
                            <div className="distance">
                                <h3>25KM</h3>
                                <h6>Green Which Terminal</h6>
                            </div>
                        </div>
                        <div className="transport">
                            <h4>&#128679; Highway</h4>
                            <div className="distance">
                                <h3>25KM</h3>
                                <h6>Highway number 5</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map border">
                    <h2>Map</h2>
                    <img src={Map} alt="map" />
                    <button>Shedule a call &gt;</button>
                </div>
            </div>
            <div className="profile">
                <Card name="CompleteProfile" afterCompletion="Goodjob!" onStepCompletion={() => handleStepCompletion('completeProfile')} stepCompleted={stepCompleted.completeProfile} />
                <Card name="Step1" status="RS 1,00,000" afterCompletion="5% of total amount" beforeText="Pay" afterText="Receipt" onStepCompletion={() => handleStepCompletion('step1')} stepCompleted={stepCompleted.step1} disabled={!stepCompleted.completeProfile} />
                <Card name="Step2" beforeText="Pay" onStepCompletion={() => handleStepCompletion('step2')} stepCompleted={stepCompleted.step2} disabled={!stepCompleted.step1} />
                <Card name="Step3" afterCompletion="We will get back to you in 3 month" onStepCompletion={() => handleStepCompletion('step3')} stepCompleted={stepCompleted.step3} disabled={!stepCompleted.step2} />
                <Card name="Step4" onStepCompletion={() => handleStepCompletion('step4')} stepCompleted={stepCompleted.step4} disabled={!stepCompleted.step3} />
                <Card name="Step5" onStepCompletion={() => handleStepCompletion('step5')} stepCompleted={stepCompleted.step5} disabled={!stepCompleted.step4} />
            </div>
        </>
    );
}