import { TeamKeyType } from '@gdsc-uos-recruit-page/design-system/@types/Team';
import { ChipType } from '@gdsc-uos-recruit-page/design-system/components/Chip';
import type { ApplyState } from '../@types';

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

export function convertChipColorByTeam(team: TeamKeyType) {
  const ChipColor = {
    mobile: 'success',
    data_ml: 'primary',
    frontend: 'warning',
    backend: 'danger',
    design: 'default',
  } as Record<TeamKeyType, ChipType>;
  return ChipColor[team];
}