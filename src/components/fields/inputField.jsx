import ZodError from "../zodError";

const InputField = ({label, placeholder, name, type, defaultValue, isRequired, disabled, state}) => {
    return(
        <div>
            <div className="flex flex-col space-y-2" >
              <label htmlFor={name} className="text-sm text-gray-600 font-semibold">{label}</label>
              <input 
                type={type}
                placeholder={placeholder} 
                name={name} 
                defaultValue={defaultValue}
                disabled={disabled}
                className="p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                />
            </div> 
            <ZodError state={state} name={name} />
        </div>
    )
}

export default InputField;