import LoginScreen from "./screens/LoginScreen";
import { Route, Switch } from 'react-router-dom'
import SignUpScreen from "./screens/SignUpScreen";
import RealTimeAnalysisScreen from "./screens/RealTimeAnalysisScreen";
import AllowRecordingPopup from "./components/AllowRecordingPopup";
import EducatorDashboardScreen from "./screens/EducatorDashboardScreen";
import Test from "./components/Test";
import ResultsModel from "./components/ResultsModel";
function App() {
  return (
    <Switch>

      <Route path="/" exact><AllowRecordingPopup /></Route>

      <Route path="/login" exact><LoginScreen /></Route>

      <Route path="/signup" exact><SignUpScreen /></Route>

      <Route path="/analysis" exact> <RealTimeAnalysisScreen /> </Route>

      <Route path="/dashboard" exact> <EducatorDashboardScreen /> </Route>

      <Route path="/test" exact> <ResultsModel /> </Route>


    </Switch>
  );
}

export default App;
