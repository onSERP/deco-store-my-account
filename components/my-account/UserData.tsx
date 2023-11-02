export interface Props {
    title: string;
}

function UserInfo({title}: Props) {
  return (
    <div>
       {title}
    </div>
    );
}

export default UserInfo;