import feather from 'feather-icons';

type Props = {
  name: string;
};

const FeatherIcon = ({ name }: Props) => (
  <span
    dangerouslySetInnerHTML={{
      __html: feather.icons[name].toSvg({ style: 'display: block' }),
    }}
  />
);
export default FeatherIcon;
