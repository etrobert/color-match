import classNames from 'classnames';
import FeatherIcon from './FeatherIcon';

import './NewGarmentButton.css';

type Props = {
  className?: string;
};

const NewGarmentButton = ({ className }: Props) => (
  <button className={classNames('NewGarmentButton', className)}>
    <FeatherIcon name="plus" />
  </button>
);

export default NewGarmentButton;
