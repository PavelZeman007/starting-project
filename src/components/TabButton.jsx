export default function TabButton({ label, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onClick}>
        {label}
      </button>
    </li>
  );
}
