import * as iconComponents from './iconComponents';

type IconProps = {
  name: keyof typeof iconComponents;
  color?: string;
  size?: number;
};
function Icon({ name, color = 'black', size = 16 }: IconProps) {
  const IconComp = iconComponents[name];
  return (
    <IconComp
      fill={color}
      size={size}
    />
  );
}

export default Icon;
