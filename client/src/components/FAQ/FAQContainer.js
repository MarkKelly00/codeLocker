import React, { Component } from "react";
import "../styles.css";

import Questions from "./FAQQuestions";
import { A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13 } from "../FAQ/FAQAnswers/indexAnswers"

class FAQContainer extends Component {
    state = {
        currentQuestion: " "
    };


    handleAnswerChange = answer => {
        this.setState({ currentQuestion: answer });
    };

    renderAnswer = () => {
        if (this.state.currentQuestion === "Q1") {
            return <A1 />
    }else if (this.state.currentQuestion === "Q2"){
        return <A2 />;
    }else if (this.state.currentQuestion === "Q3"){
        return <A3 />;
    }else if (this.state.currentQuestion === "Q4"){
        return <A4 />;
    }else if (this.state.currentQuestion === "Q5"){
        return <A5 />;
    }else if (this.state.currentQuestion === "Q6"){
        return <A6 />;
    }else if (this.state.currentQuestion === "Q7"){
        return <A7 />;
    }else if (this.state.currentQuestion === "Q8"){
        return <A8 />;
    }else if (this.state.currentQuestion === "Q9"){
        return <A9 />;
    }else if (this.state.currentQuestion === "Q10"){
        return <A10 />;
    }else if (this.state.currentQuestion === "Q11"){
        return <A11 />;
    }else if (this.state.currentQuestion === "Q12"){
        return <A12 />;
    }else if (this.state.currentQuestion === "Q13"){
        return <A13 />;
    }
    };
    render() {
        return (
        <div>     
            <div className="flex-no-wrap justify-center overflow-hidden shadow-lg bg-blue-700">
                <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Frequently Asked Questions - Answers Below
                        </h3>
                    </div>
                    <div>
                        <Questions 
                            currentQuestion={this.state.currentQuestion}
                            handleAnswerChange={this.handleAnswerChange}
                        />
                    </div>
                </div>
            </div>
            <div className="flex-no-wrap justify-center overflow-hidden shadow-lg bg-blue-700 mt-4">
                <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Answer
                        </h3>
                    </div>
                    <div>
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                                <div class="float-right text-sm leading-5 font-medium no-underline text-blue-800">
                                {this.renderAnswer()}
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default FAQContainer;