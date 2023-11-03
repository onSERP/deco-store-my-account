import Title from "../components/my-account/Title.tsx";

export interface Props {
    title: string;
}

function Custom(title) {
  return (
    <div>
        <Title title={title} size="small" />
    </div>
  );
}

export default Custom;