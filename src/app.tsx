import * as React from "react";

interface Props {
   name: string;
}

class App extends React.Component<Props> {
  public render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default App;
