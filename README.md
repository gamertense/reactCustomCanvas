A user-defined buttons toolbox canvas.

# Installation
1. Clone this repository to your computer. Type `git clone https://github.com/gamertense/reactCustomCanvas.git` on Terminal.
2. Open Terminal under your project directory. For example, if you clone into **_/home/gamertense/Documents_**. You need to type `cd /home/gamertense/Documents/reactCustomCanvas`.
3. Type `npm install` or `yarn install` if you have yarn installed on the Terminal and wait for it to finish downloading all required node modules.
4. Type `npm start` or `yarn start` if you have yarn installed. You will see another browser tab popped up in a second.

![alt text](https://github.com/gamertense/reactCustomCanvas/raw/master/readme_images/app_screenshot.png "Our React application")

> This React app has Redux connected.

# Styling button names and colors
The name and color of each button is generated from **btnLookup.json** which is located in **_reactCustomCanvas/src/store/buttonsList/_**. This file has 100 buttons and you may not get the idea of its structure. So I created a simpler version which has only three buttons in **btnLookup - old.json**.

> Don't remove `"rectangles": [... your desired button styles ..]`, otherwise the application will collapsed.

I also keep **lookupCreator.js** for a reference. If you open it, you will see there is a for loop statement iterated 100 times.

# Change image export size


# Deployment
## Configuring app's basename in react-router
Before deploying to either a real server or virtual server, you must change app's basename in **App.js** by changing variable **publicPath** to the desired name. The default path is under **react** directory which is accessed by **_localhost/react_** on a browser.

```javascript
//Inside App.js
render() {
    const publicPath = '/react/'; //Change this variable.
    return (
        <BrowserRouter basename={publicPath}>
            <Route exact path='/' component={View}/>
        </BrowserRouter>
    );
}
```

## Deploy command
1. Type `npm run build` or `yarn build`. You will see a `build` folder created.
2. Copy all files under `build` folder to the server (The default path is `/var/www/html/react`)