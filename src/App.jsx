import React from "react";

import Main from "./Main";
import { AppShell } from "@mantine/core";

function App() {
  return (
    <div>
      <AppShell padding={0}>

        <Main />
      </AppShell>
    </div>
  );
}
export default App;
