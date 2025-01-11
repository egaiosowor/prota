import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "./label";
import { toStartCase } from "@/lib/utils";

const SelectWithLabel = ({
  label,
  placeholder,
  name,
  options,
  defaultValue,
}) => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <Label htmlFor={name}>{label}</Label>
        <Select name={name} defaultValue={defaultValue}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(options).map((key) => (
              <SelectItem value={options[key]} key={key}>
                {toStartCase(key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SelectWithLabel;
