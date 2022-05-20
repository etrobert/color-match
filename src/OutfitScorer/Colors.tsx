import { useState } from 'react';

const Colors = () => {
  const [color, setColor] = useState<string>('#ff00ff');

  return (
    <input
      type="color"
      value={color}
      onChange={(event) => setColor(event.target.value)}
    />
  );
};

export default Colors;
