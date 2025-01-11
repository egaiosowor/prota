import { Label } from "./label";
import { Input } from "./input";
import type { ProfileFormState } from "@/lib/definitions";

type InputWithLabelProps = {
  label: string;
  placeholder?: string;
  name: string;
  type: string;
  defaultValue: string;
  state: ProfileFormState;
};

const InputWithLabel = ({
  label,
  placeholder,
  name,
  type,
  defaultValue,
}: InputWithLabelProps) => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor={name}>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
