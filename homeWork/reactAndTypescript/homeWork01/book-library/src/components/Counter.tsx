type CounterProps = {
  count: number;
};

const Counter = ({ count }: CounterProps) => {
  return (
    <div style={{ padding: '1rem' }}>
      <h4>Total Books: {count}</h4>
    </div>
  );
};

export default Counter;
