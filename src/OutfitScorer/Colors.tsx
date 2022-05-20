import { useState } from 'react';

const Colors = () => {
  const [color, setColor] = useState<string>('#ff00ff');

  return (
    <div className="Colors">
      <input
        type="color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <button>Add</button>
    </div>
  );
};

export default Colors;
