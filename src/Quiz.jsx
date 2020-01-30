import React, { Component } from 'react'
import quizData from './quiz_data';
const {quiz_questions}=quizData;
export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        }
    }
    render() {
        return (
            <div>
                <div className="quizQuestion">{quiz_questions[this.state.quiz_position-1].id}</div>
            </div>
        )
    }
}
