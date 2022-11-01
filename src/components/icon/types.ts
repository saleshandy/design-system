import { Modify } from '../../utils/modify';

type IconPropsShared = {
  identifier?: string;

  onClick?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export type IconProps = Modify<React.HTMLProps<HTMLElement>, IconPropsShared>;
