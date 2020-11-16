import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import LikeButton from "./LikeButton";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

const likeButtonContainer = document.getElementById("like_button_container");
render(<LikeButton />, likeButtonContainer);
