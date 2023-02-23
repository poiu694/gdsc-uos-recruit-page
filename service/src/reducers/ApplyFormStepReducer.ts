export enum ApplyFormStep {
  COMMON_QUESTIONS = 1,
  TEAM_QUESTIONS,
  CORE_QUESTIONS,
}

interface ApplyForm {
  step: ApplyFormStep;
  isFirstStep: boolean;
  isLastStep: boolean;
  isApplyCore: boolean;
}

interface ApplyActions {
  type: 'prev' | 'next' | 'toggle';
}

export const ApplyFormStepReducer: React.Reducer<ApplyForm, ApplyActions> = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, isApplyCore: !state.isApplyCore };
    case 'prev':
      const prevStep = Math.max(state.step - 1, ApplyFormStep.COMMON_QUESTIONS);
      return {
        ...state,
        isFirstStep: prevStep === ApplyFormStep.COMMON_QUESTIONS,
        isLastStep: false,
        step: prevStep,
      };
    case 'next':
      const lastStep = state.isApplyCore
        ? ApplyFormStep.CORE_QUESTIONS
        : ApplyFormStep.TEAM_QUESTIONS;
      const nextStep = Math.min(state.step + 1, lastStep);
      return { ...state, isLastStep: nextStep === lastStep, isFirstStep: false, step: nextStep };
    default:
      return state;
  }
};
