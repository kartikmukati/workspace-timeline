import React, { useState } from "react";
import { Avatar } from "rsuite";
import { Progress } from "rsuite";
import PeoplesIcon from "@rsuite/icons/Peoples";
import AdminIcon from "@rsuite/icons/Admin";
import CheckRoundIcon from "@rsuite/icons/CheckRound";

import Card from "../Card/UICard";

import "./Home.css";

const Home = () => {
  const [currentStatus, setCurrentStatus] = useState(1);

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const inputFieldChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const buttonClickHandler = () => {
    setCurrentStatus(() => {
      console.log("button clicked", currentStatus);
      if (currentStatus < 4) return currentStatus + 1;
      else return currentStatus;
    });
  };
  const arr = [
    {
      formFields: [
        {
          label: "Full Name",
          type: "email",
          placeholder: "Full Name",
          name: "fullName",
        },
        {
          label: "Display Name",
          type: "text",
          placeholder: "Display Name",
          name: "displayName",
        },
      ],
      title: "Welcome! First things first...",
      subtitle: "You can always change them later.",
    },
    {
      formFields: [
        {
          label: "Workspace Name",
          type: "text",
          placeholder: "Workspace Name",
          name: "workspacename",
        },
        {
          label: "Workspace URL",
          type: "url",
          placeholder: "Example",
          name: "workspaceurl",
          text: " (optional)",
        },
      ],
      title: "Let's set up a home for all your work",
      subtitle: "You can always create another workspace later.",
    },
    {
      formFields: [
        {
          label: "For myself",
          type: "card",
          placeholder: "Workspace Name",
          name: "workspacename",
          icon: <AdminIcon style={{ color: "black" }}></AdminIcon>,
          text: "Write better. Think more clearly. Stay Organized.",
        },
        {
          label: "With my team",
          type: "card",
          placeholder: "Example",
          name: "workspaceurl",
          icon: <PeoplesIcon style={{ color: "black" }}></PeoplesIcon>,
          text: "Wikis, docs, tasks & projects, all in one place.",
        },
      ],
      title: "How are you planning to use Eden.?",
      subtitle: "We will streamline your setup experience accordingly.",
    },
    {
      formFields: [
        {
          label: "Congratulations",
          type: "success",
          placeholder: "congratulations",
          name: "congratulation",
          icon: (
            <CheckRoundIcon
              style={{ color: "#8000ff", fontSize: "5em" }}
            ></CheckRoundIcon>
          ),
        },
      ],
      title: "Congratulations, Eren!",
      subtitle: "You have completed onboarding, you can start using the Eden!",
    },
  ];

  return (
    <div className="container">
      {/* Header */}
      <div className="row text-center mt-5">
        <div className="col-xl-4 offset-xl-4 text-center">
          <h1>Eden</h1>
        </div>
      </div>
      {/* Timeline */}
      <div className="row mt-3 text-center">
        <div className="col-xl-7 offset-xl-3 col-lg-7 offset-lg-3 col-md-7 offset-md-3 text-center">
          <div className="col-3 offset-1 main">
            <Avatar
              className="avatar"
              circle
              style={{
                background: `${currentStatus >= 1 ? "#8000ff" : "white"}`,
                border: "1px solid #8000ff",
              }}
            >
              1
            </Avatar>
            <Progress.Line
              className="bar"
              strokeWidth={2}
              showInfo={false}
              percent={currentStatus > 1 ? 100 : 60}
              strokeColor="#8000ff"
              status="active"
            />
          </div>
          <div className="col-3 main-2">
            <Avatar
              className="avatar"
              style={{
                color: `${currentStatus >= 2 ? "white" : "black"}`,
                background: `${currentStatus >= 2 ? "#8000ff" : "white"}`,
                border: `1px solid ${currentStatus >= 2 ? "#8000ff" : "grey"}`,
              }}
              circle
            >
              2
            </Avatar>
            <Progress.Line
              className="bar"
              strokeWidth={2}
              strokeColor="#8000ff"
              showInfo={false}
              percent={currentStatus > 2 ? 100 : currentStatus == 2 ? 60 : 0}
              status="active"
            />
          </div>
          <div className="col-3 main-3">
            <Avatar
              className="avatar"
              circle
              style={{
                color: `${currentStatus >= 3 ? "white" : "black"}`,
                background: `${currentStatus >= 3 ? "#8000ff" : "white"}`,
                border: `1px solid ${currentStatus >= 3 ? "#8000ff" : "grey"}`,
              }}
            >
              3
            </Avatar>
            <Progress.Line
              className="bar"
              strokeWidth={2}
              strokeColor="#8000ff"
              showInfo={false}
              percent={currentStatus > 3 ? 100 : currentStatus == 3 ? 60 : 0}
              status="active"
            />
          </div>
          <div className="col-2 main-2">
            <Avatar
              className="avatar"
              circle
              style={{
                color: `${currentStatus >= 4 ? "white" : "black"}`,
                background: `${currentStatus >= 4 ? "#8000ff" : "white"}`,
                border: `1px solid ${currentStatus >= 4 ? "#8000ff" : "grey"}`,
              }}
            >
              4
            </Avatar>
          </div>
        </div>
      </div>
      {/* Congratulation */}
      <div className="row mt-2">
        {currentStatus == 4 ? (
          <Card
            formFields={arr[currentStatus - 1].formFields}
            buttonTitle={"Launch Eden"}
            onclick={buttonClickHandler}
          ></Card>
        ) : null}
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
          <h3 className="mb-3 card-title text-center">
            {arr[currentStatus - 1].title}
          </h3>
          <h5 className="mb-3 text-muted text-center">
            {arr[currentStatus - 1].subtitle}
          </h5>
        </div>
        
          {currentStatus === 4 ? (
            <button
              type="submit"
              style={{ background: "#8000ff", border: "1px solid #8000ff" }}
              className="btn btn-primary mt-2 col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-12 offset-sm-0"
              onClick={buttonClickHandler}
            >
              {"Launch Eden"}
            </button>
          ) : null}
      </div>

      {/* Cards */}

      <div className="row mt-2">
        <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-6 offset-md-3">
          {currentStatus == 1 ? (
            <div className="row mt-2">
            <Card
              formFields={arr[currentStatus - 1].formFields}
              buttonTitle={"Create Workspace"}
              onclick={buttonClickHandler}
            ></Card>
            </div>
          ) : null}

          {currentStatus == 2 ? (
          <div className="row mt-2">
            <Card
              formFields={arr[currentStatus - 1].formFields}
              buttonTitle={"Create Workspace"}
              onclick={buttonClickHandler}
            ></Card>
          </div>
          ) : null}
            {currentStatus == 3 ? (
          <div className="row mt-2">
              <Card
                formFields={arr[currentStatus - 1].formFields}
                buttonTitle={"Create Workspace"}
                onclick={buttonClickHandler}
              ></Card>
          </div>
            ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
