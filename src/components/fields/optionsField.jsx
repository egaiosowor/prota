import ZodError from "../ui/zodError";
import { toStartCase } from "@/lib/utils";

const OptionsField = ({label, placeholder, name, isRequired, options, defaultValue, state}) => {
    return(
        <div>
            <div className="flex flex-col space-y-2" >
            <label htmlFor={name} className="text-sm text-gray-600 font-semibold">{label}</label>
            <select
                placeholder={placeholder} 
                name={name} 
                defaultValue={defaultValue}
                className="p-2 h-[42px] text-black placeholder:text-black placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                >
                    <option value={""} disabled>{placeholder}</option>
                    {
                        Object.keys(options).map(key => (
                            <option value={options[key]} key={key} >{toStartCase(key)}</option>
                        ))
                    }
                </select>
            </div>  
            <ZodError state={state} name={name} />
        </div>
    )
}

export default OptionsField;