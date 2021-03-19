import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from './Radio.module.scss'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={s.radioContainer} key={name + "-" + i}>
            <span>{o}</span>
            <input
                name={name}
                type={"radio"}
                value={o}
                onChange={onChangeCallback}
                checked={value === o}
                {...restProps}
            />
            <div className={s.checkmark}/>
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
