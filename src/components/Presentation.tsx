export default function Presentation(props: { firstName: string; lastName: string }) {
  return (
    <h1 id="presentation">
      Hello,
      <br />I am <span className="underline">{props.firstName}</span>
      <br />
      <span className="underline">{props.lastName}</span>
    </h1>
  );
}
