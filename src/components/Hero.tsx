export default function Hero(props: { position: string }) {
  return (
    <div id="name">
      <p>{props.position}</p>
    </div>
  );
}
