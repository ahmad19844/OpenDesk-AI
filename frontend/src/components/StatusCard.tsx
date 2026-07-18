interface Props {
  title: string;
  value: string;
}

export default function StatusCard({ title, value }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
      }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
