import React from "react"
import { DocumentTitle } from "./document-title"
import { nengos } from "./nengo"
import { NengoCounter } from "./nengo-counter"

const App = () => (
  <>
    <DocumentTitle title="年号早見表" />
    <h1>
      年号<abbr title="早見沙織">早見</abbr>表
    </h1>
    {nengos.map((nengo, i) => (
      <NengoCounter nengo={nengo} from={new Date()} key={i} />
    ))}
  </>
)

export default App
