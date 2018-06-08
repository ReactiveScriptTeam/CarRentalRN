### The App

[Car rental all with React Native](appvideo.mov)

### Tools
- [ReactNative CLI](https://www.npmjs.com/package/react-native-cli)
- [ReactNative Playground](https://snack.expo.io)
- iOS simulator
- VisualStudioCode

### Libraries

- react-native-fontawesome - support for font awesome icons
- react-navigation - router

### Experience

- 5 mins after the insrtallation the app is available for play
- Syncs are rellay fast
- Running the app from the CLI offered shortucts to open the simulator with pre-installed Expo app and ran the app inside
- There is a nice way to show error and warnings directly in the app
- There is quick start button leading the tutorial on the site
- There are interactive samples inside the docs. Not sure how they work but I think they are not “real” RN apps - only a basic simulation
- There are interactive example with emulators hosted in Appetize. However, there are limited amount of simulators available and you are enrolled in a queue if there are not simulators available. I was never able to use them - aways on the queue with 20+ numbers. 
- First run fails offering to execute strange commands ```sudo sysctl -w kern.maxfilesperproc=524288``` which leaves bad impression
- During the getting started we were confused about the three ways to create app and what is the difference. It took some time to understand that first two are same.
	- [```create-react-native-app```](https://www.npmjs.com/package/create-react-native-app)
	- [Expo XDE](https://expo.io/)
	- [ReactNative CLI](https://www.npmjs.com/package/react-native-cli)
- It is not clear right away what the Expo is about. We had to search for blogposts describing if we need Expo project or not.
- Using the react-native cli started xcode build whcih lasted 2-3 mins
- When a module is missing the app fails and suggest to delete node_modules folder
- No easy way to deploy the app to device - should go though xcode with paid Apple dev program
- Debugger starts in browser tab where you should open DevTools by your own
- Adding custom font took more time than expected. No official way to do it - had to rely on a blog-posts some of which were outdated.
- Styling the action bar and navigation was super easy.
- Components with react are really easy to make and are less verbose than angular
- We develped the app testing it on IOS first. After we finished with IOS, Android app looked really good - no platfrom specific code needed

