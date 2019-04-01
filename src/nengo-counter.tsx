import React from "react"
import { Nengo } from "./nengo"
import { ShareNengoButton } from "./share-nengo-button"

export const NengoCounter: React.SFC<{ nengo: Nengo; from: Date }> = ({
  from,
  nengo,
}) => (
  <>
    <div>
      今日は{nengo.name}
      {nengo.elapsedYears(from)}年です{" "}
      <ShareNengoButton
        text={`今日は${nengo.name}${nengo.elapsedYears(from)}年です`}
      />
    </div>
  </>
)
