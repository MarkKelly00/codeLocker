import React from "react";




import "../styles.css";



import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";

function Questions(props) {
    return (
        <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  class="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#home"
                onClick={() => props.handleAnswerChange("Q1")}
                className={
                    props.currentQuestion === "Q1"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                Question 1
            </a>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  class="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#home"
                onClick={() => props.handleAnswerChange("Q2")}
                className={
                    props.currentQuestion === "Q2"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                Question 2
            </a>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  class="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#home"
                onClick={() => props.handleAnswerChange("Q3")}
                className={
                    props.currentQuestion === "Q3"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                Question 3
            </a>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  class="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#home"
                onClick={() => props.handleAnswerChange("Q4")}
                className={
                    props.currentQuestion === "Q4"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                Question 4
            </a>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  class="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#home"
                onClick={() => props.handleAnswerChange("Q5")}
                className={
                    props.currentQuestion === "Q5"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                Question 5
            </a>
        </div>
        {/* <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  class="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#home"
                onClick={() => props.handleAnswerChange("Q6")}
                className={
                    props.currentQuestion === "Q6"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                Question 6
            </a>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  class="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#home"
                onClick={() => props.handleAnswerChange("Q7")}
                className={
                    props.currentQuestion === "Q7"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                Question 7
            </a>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <a  class="float-right text-sm leading-5 font-medium no-underline hover:underline    text-blue-500"
                href="#home"
                onClick={() => props.handleAnswerChange("Q8")}
                className={
                    props.currentQuestion === "Q8"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                Question 8
            </a>
        </div> */}
        </dl>
    );
    }
    
    export default Questions;
