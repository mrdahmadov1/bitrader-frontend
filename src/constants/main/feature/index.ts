import { FeatureNavItem } from '@/models/IFeatureNavItem';
import thumb1 from '@/components/main/feature/assets/images/thumb-1.png';
import thumb2 from '@/components/main/feature/assets/images/thumb-2.png';
import percentage1 from '@/components/main/feature/assets/images/percentage-1.png';
import percentage2 from '@/components/main/feature/assets/images/percentage-2.png';
import percentage3 from '@/components/main/feature/assets/images/percentage-3.png';
import percentage4 from '@/components/main/feature/assets/images/percentage-4.png';

export const navContent: FeatureNavItem[] = [
  {
    id: 1,
    loanValue: 10,
    percentageImg: percentage1,
    thumbImg: thumb1,
  },
  {
    id: 2,
    loanValue: 18,
    percentageImg: percentage2,
    thumbImg: thumb2,
  },
  {
    id: 3,
    loanValue: 30,
    percentageImg: percentage3,
    thumbImg: thumb1,
  },
  {
    id: 4,
    loanValue: 28,
    percentageImg: percentage4,
    thumbImg: thumb2,
  },
];
