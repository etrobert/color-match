import classNames from 'classnames';
import FeatherIcon from './FeatherIcon';

import './NewGarmentButton.css';

type Props = {
  className?: string;
};

const NewGarmentButton = ({ className }: Props) => (
  <button className={classNames('NewGarmentButton', className)}>
    <FeatherIcon name="plus" options={{ width: '2.5rem', height: '2.5rem' }} />
  </button>
);

export default NewGarmentButton;
