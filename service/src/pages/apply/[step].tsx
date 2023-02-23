import React from 'react';
import styled from '@emotion/styled';
import {
  Banner,
  Button,
  ButtonHierarchy,
  TextArea,
  theme,
  Typography,
} from 'gdsc-uos-design-system';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';

import { ApplyQuestion } from '@types';
import { QUESTIONS } from '@/constants/dummyApply';
import { formIntroduction } from '@/constants/form';
import { Bottom, Helmet, ToggleBox } from '@/components/common';

interface Props {
  step: `${number}`;
  isFirstStep: boolean;
  isFinishStep: boolean;
  questions: ApplyQuestion[];
}

const TitleWithStep: Record<`${number}`, string> = {
  '1': '공통 질문지',
  '2': '팀 질문지',
  '3': '코어 질문지',
};

const ApplyPage: NextPage<Props> = ({ step, isFirstStep, isFinishStep, questions }: Props) => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [isApplyCore, setIsApplyCore] = React.useState<boolean>(false);
  const [answerData, setAnswerData] = React.useState<string[]>(
    [...Array(questions.length)].fill('')
  );

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>, targetIndex: number) => {
    const nextAnswerData = [...answerData];
    nextAnswerData[targetIndex] = e.target.value;
    setAnswerData(nextAnswerData);
  };

  const toggleApplyCore = React.useCallback(() => {
    setIsApplyCore((prev) => !prev);
  }, []);

  // TODO: API 나오면 연동
  const handleClickStepButton = async () => {
    if (isFinishStep) {
    } else {
      router.push(`/apply/${Number(step) + 1}`);
    }
  };

  return (
    <>
      <Helmet title="자주 묻는 질문" description="GDSC UOS RECRUIT 자주 묻는 질문 페이지" />
      <Layout>
        <Banner teamName="frontend" />
        <ContentsWrapper>
          <IntroductionSection>
            <Typography type="h3">지원하기</Typography>
            <Typography type="body4" style={{ whiteSpace: 'pre-line' }}>
              {formIntroduction(currentYear)}
            </Typography>
          </IntroductionSection>
          <Typography type="h3" style={{ marginBlock: 16 }}>
            {TitleWithStep[step]}
          </Typography>
          <QuestionSection>
            {questions?.map((question, idx) => (
              <AnswerTextarea
                key={question.title}
                label={`${idx + 1}. ${question.title}`}
                value={answerData[idx]}
                required={question.required}
                maxLength={question.maxLength}
                onChange={(e) => handleChangeTextArea(e, idx)}
              />
            ))}
            {isFirstStep && (
              <ToggleBox
                label={`${questions?.length + 1}. Core Member에 지원하시겠습니까?`}
                value={isApplyCore}
                onClick={toggleApplyCore}
              />
            )}
          </QuestionSection>
          <ButtonSection>
            <StepButton hierarchy={ButtonHierarchy.Gray}>
              <Typography type="body5" color={theme.colors.primary.white}>
                임시 저장
              </Typography>
            </StepButton>
            {!isFirstStep && (
              <StepButton
                hierarchy={ButtonHierarchy.DarkGray}
                onClick={() => router.push(`/apply/${Number(step) - 1}`)}
              >
                <Typography type="body5" color={theme.colors.primary.white}>
                  이전 단계
                </Typography>
              </StepButton>
            )}
            <StepButton hierarchy={ButtonHierarchy.Success} onClick={handleClickStepButton}>
              <Typography type="body5" color={theme.colors.primary.white}>
                {!isFinishStep ? '다음 단계' : '지원 하기'}
              </Typography>
            </StepButton>
          </ButtonSection>
        </ContentsWrapper>
      </Layout>
      <Bottom />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const step = context.params!.step as `${number}`;

  try {
    return {
      props: {
        step,
        isFirstStep: step === '1' ? true : false,
        isFinishStep: step === '3' ? true : false,
        questions: QUESTIONS[step],
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
