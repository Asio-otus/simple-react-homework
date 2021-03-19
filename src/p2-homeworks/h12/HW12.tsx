import React, {useEffect} from "react";
import s from "./HW12.module.scss";
import {Subtitle} from "../../shared/components/styled/Subtitle/Subtitle";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../h10/bll/store";
import {changeThemeColor, ThemeColorType, ThemeStateType} from "../h10/bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

function HW12() {

    const themesAvailable: Array<ThemeColorType> = ['pink', 'green', 'blue', 'orange']

    const theme = useSelector<AppRootStateType, ThemeStateType>(state => state.theme)
    const dispatch = useDispatch()

    const onChangeOption = (theme: ThemeColorType) => {
        dispatch(changeThemeColor(theme))
    }


    useEffect(() => {
        let root = document.documentElement
        const themeColor = (color: ThemeColorType) => {
            switch (color) {
                case 'pink':
                    return '#e00e69'
                case 'green':
                    return '#54c30f'
                case 'blue':
                    return '#2176c1'
                case 'orange':
                    return '#e3700b'
                default:
                    return '#e00e69'
            }
        }
        root.style.setProperty('--theme-color', themeColor(theme.themeColor))
    }, [theme])

    return (
        <div>
            <Subtitle>
                Task 12
            </Subtitle>
            <div className={s.themeCheck}>
                Current theme color
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={themesAvailable}
                    value={theme.themeColor}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>

            </div>
        </div>
    );
}

export default HW12;
