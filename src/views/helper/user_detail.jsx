import React from "react";

import { hydrate } from "react-dom";

import UserDetailReact from "../user_detail";

hydrate(
	<UserDetailReact {...window.__PRELOADED_STATE__} />,
	document.getElementById("reactApp")
);
