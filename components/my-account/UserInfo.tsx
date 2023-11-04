export interface Props {
    name: string;
    email: string;
}

function UserInfo({name, email}: Props) {
  return (
    <div>
        <p class="uppercase font-bold">{name}</p>
        <p class="text-gray-500">{email}</p>
    </div>
    );
}

export default UserInfo;