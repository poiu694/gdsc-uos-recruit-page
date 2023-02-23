import { ChipType, TeamKeyType } from 'gdsc-uos-design-system';

import type { ApplyState, UserType } from '@/@types';

export function convertChipColorByState(state: ApplyState) {
  const ChipColor = {
    '서류 제출': 'warning',
    '서류 합격': 'primary',
    '서류 불합격': 'default',
    '최종 합격': 'success',
    '최종 불합격': 'danger',
  } as Record<ApplyState, ChipType>;
  return ChipColor[state];
}

export function convertChipColorByTeam(team: string) {
  const ChipColor = {
    mobile: 'success',
    data_ml: 'primary',
    frontend: 'warning',
    backend: 'danger',
    design: 'default',
  } as Record<TeamKeyType, ChipType>;
  if (team in ChipColor) {
    return ChipColor[team as TeamKeyType];
  }
  return 'darkGray' as ChipType;
}

export function convertChipColorByUserType(userType: UserType) {
  const ChipColor = {
    lead: 'primary',
    core: 'warning',
  } as Record<UserType, ChipType>;
  return ChipColor[userType];
}
