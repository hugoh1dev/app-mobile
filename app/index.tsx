import Question from "@/components/questionnaire/Question";
import Result from "@/components/questionnaire/Result";
import Logo from "@/components/template/Logo";
import Page from "@/components/template/Page";
import useQuestionnaire from "@/data/hooks/useQuestionnaire";
import { View } from "react-native";

export default function Index() {
  const { question, completed, score, totalOfQuestions, reply, restart } = useQuestionnaire()


  return (
    <Page>
      <View style={{ gap: 40 }}>
        <Logo />
        {completed ? (
          <Result 
            score={score} 
            totalOfQuestions={totalOfQuestions} 
            restart={restart} 
          /> 
        ) : (
          <Question question={question} selectedOption={reply} />
        )}
      </View>
    </Page>
  );
}
