import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import {restoreState, saveState} from "./localStorage/localStorage";
import Button from "../../shared/components/functional/Button/Button";
import {Subtitle} from "../../shared/components/styled/Subtitle/Subtitle";

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        setValue(restoreState<string>("editable-span-value", value));
    };

    return (
        <div>
            <Subtitle>
                Task 6
            </Subtitle>

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div>
            <Button onClick={save}>save</Button>
            <Button onClick={restore}>restore</Button>

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeSuperEditableSpan/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW6;
