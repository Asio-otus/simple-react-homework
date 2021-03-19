import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from './Select.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[] | undefined
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, onChangeOption,
        value,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }

    const mappedOptions: any[] | undefined = options ? options.map(option => {
        return (
            <>
                <input key={option}
                       className={s.input}
                       onChange={onChangeCallback}
                       name="test" type="radio"
                       id={option}
                       value={option}
                       checked={value === option}/>
                <label className={s.option} htmlFor={option}>{option}</label>
            </>
        )
    }) : undefined;

    return (
        <div className={s.select} tabIndex={1}>
            {mappedOptions}
        </div>
    );
}

export default SuperSelect;

// type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
//
// type SuperSelectPropsType = DefaultSelectPropsType & {
//     options?: any[] | undefined
//     onChangeOption?: (option: any) => void
// }
//
// const SuperSelect: React.FC<SuperSelectPropsType> = (
//     {
//         options, onChange, onChangeOption,
//         ...restProps
//     }
// ) => {
//     const mappedOptions: any[] | undefined = options ? options.map(option => <option
//         key={option}>{option}</option>) : undefined;
//
//     const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
//         if (onChangeOption) {
//             onChangeOption(e.currentTarget.value)
//         }
//     }
//
//     return (
//         <div className={s.selectContainer}>
//             <select onChange={onChangeCallback} {...restProps}>
//                 {mappedOptions}
//             </select>
//         </div>
//     );
// }