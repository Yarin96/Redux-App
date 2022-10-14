# Redux-App

## The idea behind this project

- Mainly to explore the core concepts of Redux and it's different uses and implementations via a website with products and a cart, using a simple database called Firebase and using GET and PUT (which overrides the existing data) requests.

## About Redux

- Redux is another possibility to handle wide app changes and can operate as a replacement/addition to React Context API.
- It might be a good idea to use Redux over React Context especially in bigger applications where the performance and state management might become more complex.

## Some of the concepts I covered

- Creating a store data with Redux toolkit library. Specifically with the configureStore() method to merge the different reducers into one large reducer, and useSelector to obtain fractions of the desired data from the store data.  
- Using slices of general data sections and attaching reducers / actions to them. Dispatching the actions with useDispatch from the react-redux library, which returns a method to dispatch in order to activate a specific action.
- Understanding that reducers must be pure, side effect free and sync functions.
- Distinguishing between a code which is async and/or uses side effects (in which we should implement it with action creators or inside components) and between a code which doesn't use them at all, in which case we should prefer to code it inside reducers.

## Screenshots:

![image](https://user-images.githubusercontent.com/94289687/195919522-2298155e-910a-45e4-8473-d75975d2d673.png)
