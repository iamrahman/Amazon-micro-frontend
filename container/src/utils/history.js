import { createBrowserHistory } from "history";

/**
 | --------------------------------------------------------------------------
 | BROWSER HISTORY
 | --------------------------------------------------------------------------
 | Wrapper around history API that lets you manage the history stack, 
 | navigate, and persist state between sessions.
 | 
 */

// createBrowserHistory config
const config = {};

const history = createBrowserHistory(config);

export default history;
