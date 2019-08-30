# PurrStream Frontend in React

[Backend can be found here](https://github.com/Hacklor/PurrStreamBackend)

## Prerequisites

- NodeJs (Tested with 12.9)
- Yarn (Tested with 1.17)

In the project directory, you can run:

### `yarn install`

Install all dependencies that are in `package.json`

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Without a running backend it will show "No purrs present"

### `yarn test`

Launches the test runner in the interactive watch mode. Of course all tests should be passing.

### Setting custom url for Backend

There is a `.env` variable present with a default of `http://localhost:8000` to reach the backend.
If you would like to override you can create a `.env.local` file and place the following code there:

```bash
REACT_APP_BACKEND_BASE_URL=http://yoururlhere.com
```

This will override the default. There is also a specific file for the test run named `.env.test
