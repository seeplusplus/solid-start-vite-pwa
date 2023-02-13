import {
  createHandler,
  renderAsync,
  StartServer,
} from "solid-start/entry-server";

export default createHandler(
  (() => {
    console.log('hello, world');
    return renderAsync((event) => <StartServer event={event} />)
  })()
);
