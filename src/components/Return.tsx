interface ReturnProps {
  onReturn: () => void;
}

export default function Return({ onReturn }: ReturnProps) {
  return (
    <div id="name">
      <p>
        <a onClick={onReturn} style={{ cursor: 'pointer' }}>
          ← Back to Home
        </a>
      </p>
    </div>
  );
}
