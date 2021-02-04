import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Error404 from "./pages/Error404";
import {navLinksDataType} from "./bll/navLinksData";

type RoutesPropsType = {
    navData: navLinksDataType
}

const Routes: React.FC<RoutesPropsType> = (
    {navData}
) => {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={navData[0].path}/>}/>

                {navData.map( nav =>
                    <Route path={nav.path} render={() => nav.route} />)}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404 navData={navData}/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
