import React from "react";
import Clock from "./Clock";
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";

function HW9() {
    return (
        <div>
            <Subtitle>
                Task 9
            </Subtitle>

            {/*should work (должно работать)*/}
            <Clock/>

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeClock/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW9;
