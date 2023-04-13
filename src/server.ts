import { app } from './app';
const notifier = require('node-notifier');
app.listen(8080, () => {
  const message =
    'API available on http://localhost:8080 and You should visit http://localhost:8080/graphql to use GrapQL';
  console.log(message);
  notifier.notify(message);
});
