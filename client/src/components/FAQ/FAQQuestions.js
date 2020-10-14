import React from "react";




// import "../styles.css";



import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";

function Questions(props) {
    return (
        <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  className="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#Q1"
                onClick={() => props.handleAnswerChange("Q1")}
                className={
                    props.currentQuestion === "Q1"
                        ? "nav-link active float-right text-sm leading-5 font-bold no-underline hover:underline text-blue-900"
                        : "nav-link float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500"
                }
            >
                What is CodeLocker?
            </a>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  className="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#Q2"
                onClick={() => props.handleAnswerChange("Q2")}
                className={
                    props.currentQuestion === "Q2"
                        ? "nav-link active float-right text-sm leading-5 font-bold no-underline hover:underline text-blue-900"
                        : "nav-link float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500"
                }
            >
                How do I cancel my account?
            </a>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  className="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#Q3"
                onClick={() => props.handleAnswerChange("Q3")}
                className={
                    props.currentQuestion === "Q3"
                        ? "nav-link active float-right text-sm leading-5 font-bold no-underline hover:underline text-blue-900"
                        : "nav-link float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500"
                }
            >
                How do I save and retrieve a code snippet?
            </a>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  className="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#Q4"
                onClick={() => props.handleAnswerChange("Q4")}
                className={
                    props.currentQuestion === "Q4"
                        ? "nav-link active float-right text-sm leading-5 font-bold no-underline hover:underline text-blue-900"
                        : "nav-link float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500"
                }
            >
                How can I change my name and email address?
            </a>
        </div>
        {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  className="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#Q5"
                onClick={() => props.handleAnswerChange("Q5")}
                className={
                    props.currentQuestion === "Q5"
                        ? "nav-link active float-right text-sm leading-5 font-bold no-underline hover:underline text-blue-900"
                        : "nav-link float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500"
                }
            >
                Question 5
            </a>
        </div> */}
        </dl>
    );
    }
    
    export default Questions;
