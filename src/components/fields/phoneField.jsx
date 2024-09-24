const PhoneField = ({value}) => {

    return (
        <div className="flex flex-col space-y-2 w-full">   
            <label className="text-sm text-gray-600 font-semibold" htmlFor="phone">Phone*</label>
            <div className="relative flex">
             
                {/* Phone Number Input */}
                <input
                    type="tel"
                    defaultValue={value}
                    name="phone"
                    pattern="\+?[0-9]*" 
                    maxLength="15"
                    className="w-full p-2 border border-gray-400  rounded-md focus:outline-none"
                />
            </div>
        </div>
    );
};

export default PhoneField;
