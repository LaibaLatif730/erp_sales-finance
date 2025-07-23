// src/types/tabler-icons-react.d.ts

declare module '@tabler/icons-react' {
  import * as React from 'react';

  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    stroke?: number;
  }

  export const IconDashboard: React.FC<IconProps>;
  export const IconReport: React.FC<IconProps>;
  export const IconBuildingStore: React.FC<IconProps>;
  export const IconCash: React.FC<IconProps>;
  export const IconPackage: React.FC<IconProps>;
  export const IconMegaphone: React.FC<IconProps>;
  export const IconUsers: React.FC<IconProps>;
  export const IconHeadphones: React.FC<IconProps>;
  export const IconBrain: React.FC<IconProps>;
}
