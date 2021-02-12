import React from "react";
import Button from "../../shared/components/functional/Button/Button";
import {Subtitle} from "../../shared/components/styled/Subtitle/Subtitle";
import {useDispatch, useSelector} from "react-redux";
import { AppStoreType } from "./bll/store";
import {loadingStateType, startLoadingAC, stopLoadingAC} from "./bll/loadingReducer";
import {Preloader} from "../../shared/components/styled/Preloader/Preloader";

function HW10() {
    const dispatch = useDispatch()
    const loadingState = useSelector<AppStoreType, loadingStateType>(state => state.loading)

    const loading = loadingState.loading;

    const setLoading = () => {
        dispatch(startLoadingAC())
        console.log("loading...");
        setTimeout( () => {
            dispatch(stopLoadingAC())
        }, 2000)
    };

    return (
        <div>
            <Subtitle>
                Task 10
            </Subtitle>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <Preloader/>
                    </div>
                ) : (
                    <div>
                        <Button onClick={setLoading}>set loading...</Button>
                    </div>
                )
            }

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<Alternative/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW10;
