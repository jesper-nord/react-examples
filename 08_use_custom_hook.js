import { useWindowSize } from './useWindow'

const Component = () => {

  const windowSize = useWindowSize()

  return (
    <div>
      <p>Window width: {windowSize.width} px</p>
      <p>Window height: {windowSize.height} px</p>
    </div>
  );
}

export default Component
