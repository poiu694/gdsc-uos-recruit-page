import styled from '@emotion/styled';
import React, { useReducer } from 'react';
import { useTheme } from '@emotion/react';
import { Banner, Button, ButtonHierarchy, TextArea, Typography } from 'gdsc-uos-design-system';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

import { ApplyQuestion } from '@types';
import { QUESTIONS } from '@/constants/dummyApply';
import { formIntroduction } from '@/constants/form';
import { Helmet, ToggleBox } from '@/components/common';
import { ApplyFormStepReducer, ApplyFormStep } from '@/reducers';
import { useDarkTheme } from '@/hooks';

interface Props {
  questions: Record<number, ApplyQuestion[]>;
}

const TitleWithStep: Record<string, string> = {
  '1': '공통 질문지',
  '2': '팀 질문지',
  '3': '코어 질문지',
};

const defaultStepState = {
  step: ApplyFormStep.COMMON_QUESTIONS,
  isFirstStep: true,
  isLastStep: false,
  isApplyCore: false,
};

const defaultAnswerData = (questions: ApplyQuestion[]): Record<string, string> => {
  return questions.reduce(
    (acc, question) => ({
      ...acc,
      [question.id]: '',
    }),
    {},
  );
};

const ApplyPage: NextPage<Props> = ({ questions }: Props) => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const { isDark } = useDarkTheme();
  const [stepState, dispatch] = useReducer(ApplyFormStepReducer, defaultStepState);
  // TODO: API에 따라 형태 변경
  const [answerData, setAnswerData] = React.useState<Record<string, string>>(
    defaultAnswerData([...questions['1'], ...questions['2'], ...questions['3']]),
  );

  const handleClickNextStep = React.useCallback(() => {
    dispatch({ type: 'next' });
  }, []);

  const handleClickPrevStep = React.useCallback(() => {
    dispatch({ type: 'prev' });
  }, []);

  const handleClickToggleApplyCore = React.useCallback(() => {
    dispatch({ type: 'toggle' });
  }, []);

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>, targetId: string) => {
    setAnswerData((prev) => ({ ...prev, [targetId]: e.target.value }));
  };

  const handleClickSubmitButton = React.useCallback(() => {
    //TODO: api 연동
    console.log(answerData);
  }, [answerData]);

  return (
    <>
      <Helmet title="자주 묻는 질문" description="GDSC UOS RECRUIT 자주 묻는 질문 페이지" />
      <Layout>
        <Banner teamName="frontend" />
        <ContentsWrapper>
          <IntroductionSection>
            <Typography type="h3" color={theme.colors.text.bold}>
              지원하기
            </Typography>
            <Typography
              type="body4"
              style={{ whiteSpace: 'pre-line' }}
              color={theme.colors.text.general}
            >
              {formIntroduction(currentYear)}
            </Typography>
          </IntroductionSection>
          <Typography type="h3" style={{ marginBlock: 16 }} color={theme.colors.text.bold}>
            {TitleWithStep[stepState.step]}
          </Typography>
          <QuestionSection>
            {questions[stepState.step]?.map((question, idx) => (
              <AnswerTextarea
                key={question.title}
                isDark={isDark}
                label={`${idx + 1}. ${question.title}`}
                value={answerData[question.id]}
                required={question.required}
                maxLength={question.maxLength}
                onChange={(e) => handleChangeTextArea(e, question.id)}
              />
            ))}
            {stepState.isFirstStep && (
              <ToggleBox
                label={`${questions[stepState.step]?.length + 1}. Core Member에 지원하시겠습니까?`}
                value={stepState.isApplyCore}
                onClick={handleClickToggleApplyCore}
              />
            )}
          </QuestionSection>
          <ButtonSection>
            <StepButton hierarchy={ButtonHierarchy.Gray}>
              <Typography type="body5" color={theme.colors.primary.white}>
                임시 저장
              </Typography>
            </StepButton>
            {!stepState.isFirstStep && (
              <StepButton hierarchy={ButtonHierarchy.DarkGray} onClick={handleClickPrevStep}>
                <Typography type="body5" color={theme.colors.primary.white}>
                  이전 단계
                </Typography>
              </StepButton>
            )}
            <StepButton
              hierarchy={ButtonHierarchy.Success}
              onClick={stepState.isLastStep ? handleClickSubmitButton : handleClickNextStep}
            >
              <Typography type="body5" color={theme.colors.primary.white}>
                {!stepState.isLastStep ? '다음 단계' : '지원 하기'}
              </Typography>
            </StepButton>
          </ButtonSection>
        </ContentsWrapper>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    return {
      props: {
        questions: QUESTIONS,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

const ContentsWrapper = styled.div`
  width: 80%;
  max-width: 768px;
  margin-inline: auto;
`;

const IntroductionSection = styled.section`
  padding-block: 16px;
`;

const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

type AnswerTextareaStyleProps = {
  maxLength?: number;
};
const AnswerTextarea = styled(TextArea)<AnswerTextareaStyleProps>`
  min-height: ${(props) =>
    typeof props.maxLength === 'undefined'
      ? '40px'
      : Number(props.maxLength) > 300
      ? '240px'
      : '80px'};
`;

const ButtonSection = styled.section`
  min-height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const StepButton = styled(Button)`
  padding: 8px;
  box-sizing: border-box;
`;

export default ApplyPage;
