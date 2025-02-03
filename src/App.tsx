import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
// import "./App.css";

Amplify.configure(outputs);

function App() {
  return (
    <FileUploader
      acceptedFileTypes={[".pptx"]}
      path={({ identityId }) => `pp_presentations/${identityId}/`}
      maxFileCount={1}
      isResumable
    />
  );
}

export default App;
