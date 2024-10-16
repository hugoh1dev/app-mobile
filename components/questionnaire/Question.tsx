import QuestionModel from "@/data/model/Question";
import { View } from "react-native";
import Statement from "./Statement";
import Option from "./Option";

export interface QuestionProps {
    question: QuestionModel
    selectedOption: (index: number) => void
}

export default function Question(props: QuestionProps) {
    return (
        <View style={{ gap: 25 }}>
            <Statement statement={props.question.statement} />
            <View style={{ gap: 15 }}>
                {props.question.options.map((option, index) => (
                    <Option 
                        key={index} 
                        index={index} 
                        text={option} 
                        onPress={() => props.selectedOption(index)} 
                    />
                ))}
            </View>
        </View>
    )
}