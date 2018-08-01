A user-defined buttons toolbox canvas.

![alt text](https://github.com/gamertense/reactCustomCanvas/raw/master/readme_images/app_screenshot.png "My React application")

# Installation
1. Clone this repository to your computer. Type `git clone https://github.com/gamertense/reactCustomCanvas.git` on Terminal.
2. Open Terminal under your project directory. For example, if you clone into **_/home/gamertense/Documents_**. You need to type `cd /home/gamertense/Documents/reactCustomCanvas`.
3. Type `npm install` or `yarn install` if you have yarn installed on the Terminal and wait for it to finish downloading all required node modules.
4. Type `npm start` or `yarn start` if you have yarn installed. You will see another browser tab popped up in a second.

> This React app has Redux connected.

# Modification
## Styling Button Names and Colors
The name and color of each button is generated from **btnLookup.json** which is located in **_reactCustomCanvas/src/store/buttonsList/_**. This file has 100 buttons and you may not get the idea of its structure. So I created a simpler version which has only three buttons in **btnLookup - old.json**.
```javascript
// Inside btnLookup - old.json
{
    "rectangles": [
        {
            "name": "rect1",
            "color": "red" // or #FF0000
        },
        {
            "name": "rect2",
            "color": "green"
        },
        {
            "name": "rect3",
            "color": "blue"
        }
    ]
}
```
> Don't remove `"rectangles": [... your desired button styles ..]`, otherwise the application will collapse.

I also keep **lookupCreator.js** for a reference. If you open it, you will see there is a for loop statement iterated 100 times.

## Changing Canvas Width & Height
```javascript
// Inside reactCustomCanvas/src/containers/Canvas/Canvas.js
return (
    <div>
        <Stage className="Stage" width={600} height={400} onClick={this.onClickHandler}
                onMouseMove={this.onMouseMove}
                ref={node => {
                    this.stageRef = node
                }}>
            ...
        </Stage>
    </div>
);
```
> Keep in mind that changing width & height affect the export image width & height. Therefore, I resize the image to the desired resolution at the server-side (Flask app).

## Changing Flask Endpoint

```javascript
// Inside reactCustomCanvas/src/store/actions/canvas.js
export const postData = (imgid, imgdata) => {
    return dispatch => {
        axios.post('http://127.0.0.1/flask/post', { // Change this url
            imgid: imgid,
            imgdata: imgdata,
            imgtype: 'color'
        })
        ...
    }
};
```

# Deployment
## Configuring App's Basename in react-router
Before deploying to either a real server or virtual server, you must change app's basename in **App.js** by changing variable **publicPath** to the desired name. The default path is under **react** directory which is accessed via **_localhost/react_** on a browser.

```javascript
// Inside reactCustomCanvas/src/App.js
render() {
    const publicPath = '/react/'; //Change this variable.
    return (
        <BrowserRouter basename={publicPath}>
            <Route exact path='/' component={View}/>
        </BrowserRouter>
    );
}
```
```javascript
// Inside reactCustomCanvas/package.json
...
"homepage": "/react/", // Must be the same as the publicPath variable above.
...
```

## Deployment From The Command-Line
1. Type `npm run build` or `yarn build`. You will see a `build` folder created.
2. Copy all files under `build` folder to the server (The default path is `/var/www/html/react`)