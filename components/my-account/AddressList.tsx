export interface Props {
    title: string;
    addresses: Address[];
}
import Title from "./Title.tsx";
import Address from "../../sections/MyAccount.tsx";

function AddressList({title = "Endereços", addresses}: Props) {
  return <div>
    <Title title={title} />
    {addresses.map((address) => (
        <div class="form-control">
            <label class="label cursor-pointer">
                <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
                <span class="label-text">Red pill</span> 
                <p>testesteste</p>
                <p>testesteste</p>
                <p>testesteste</p>
            </label>
        </div>
    ))}
  </div>;
}

export default AddressList;