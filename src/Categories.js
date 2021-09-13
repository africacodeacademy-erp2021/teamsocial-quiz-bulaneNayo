import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import General from "./General";
import Sports from "./Sports";
import Programming from "./Programming";
import Registration from "./Registration";

function Categories() {
  function Content() {
    let history = useHistory();
    const HandleSports = () => history.push("./Sports");
    const HandleGeneral = () => history.push("./General");
    const HandleProgramming = () => history.push("./Programming");
    const HandleBack = () => history.push("./Registration");

    const Name = JSON.stringify(localStorage.getItem("Current"));
    const user = Name.replace('"', "");
    const username = user.replace('"', "");

    console.log("Current player :" + username);

    return (
      <div className="categories-div">
        <h3>Welcome {username} choose a category to start </h3>
        <p>
          <button className="category-btn" onClick={HandleSports}>
            Sports
          </button>
        </p>
        <p>
          <button className="category-btn" onClick={HandleGeneral}>
            General Knowledge
          </button>
        </p>
        <p>
          <button className="category-btn" onClick={HandleProgramming}>
            Programming
          </button>
        </p>
        <p>
          <button className="category-back" onClick={HandleBack}>
            Back
          </button>
        </p>
      </div>
    );
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/Sports" exact component={Sports} />
          <Route path="/General" exact component={General} />
          <Route path="/Programming" exact component={Programming} />
          <Route path="/Registration" exact component={Registration} />
          <Route path="/" component={Content} />
        </Switch>
      </Router>
    </>
  );
}

export default Categories;
