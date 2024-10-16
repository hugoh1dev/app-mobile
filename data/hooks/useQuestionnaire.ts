import { useState } from "react";
import allQuestions from "@/data/constants/questions"

export default function useQuestionnaire() {
    const [indiceQuestion, setIndiceQuestion] = useState(0)
    const [answers, setAnswers] = useState<number[]>([])
    const [questions, setQuestions] = useState(drawQuestions())

    function drawQuestions() {
        const scrambledQuestions = [...allQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10)
        return scrambledQuestions
    }

    return {
        get question() {
            return questions[indiceQuestion]
        },
        get score() {
            return questions
                .map(p => p.answer)
                .map((a, i) => a === answers[i])
                .filter(Boolean).length
        },
        get totalOfQuestions() {
            return questions.length
        },
        get completed() {
            return indiceQuestion === questions.length
        },
        reply(answer: number) {
            setAnswers([...answers, answer])
            setIndiceQuestion(indiceQuestion + 1)
        },
        restart() {
            setIndiceQuestion(0)
            setAnswers([])
            setQuestions(drawQuestions())
        },
    }
}