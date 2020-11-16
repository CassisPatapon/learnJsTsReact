import * as React from "react";

interface LikeButtonProps {}

interface LikeButtonState {
  liked: boolean;
}

export default class LikeButton extends React.Component<
  LikeButtonProps,
  LikeButtonState
> {
  constructor(props: any) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You really liked this.";
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Press if you like
      </button>
    );
  }
}
