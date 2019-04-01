import React from "react"

interface Props {
  title: string
}

export class DocumentTitle extends React.PureComponent<Props> {
  public readonly title: string

  constructor(props: Props) {
    super(props)
    this.title = props.title
  }

  public componentDidMount() {
    window.document.title = this.title
  }

  public render() {
    return null
  }
}
