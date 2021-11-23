import feather, { FeatherAttributes } from 'feather-icons';

type Props = {
  name: string;
  options?: FeatherAttributes;
};

const FeatherIcon = ({ name, options }: Props) => (
  <span
    dangerouslySetInnerHTML={{
      __html: feather.icons[name].toSvg({
        style: 'display: block', // TODO combine with style from options
        ...options,
      }),
    }}
  />
);
export default FeatherIcon;
