import feather from 'feather-icons';

type Props = {
  name: string;
};

const FeatherIcon = ({ name }: Props) => (
  <span dangerouslySetInnerHTML={{ __html: feather.icons[name].toSvg() }} />
);
export default FeatherIcon;
