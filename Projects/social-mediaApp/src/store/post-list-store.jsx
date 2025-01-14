import {createContext } from "react";

const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const PostListProvider = ({children}) =>{
   const [postList,dispatchPostList] = useReducer()

    return <PostList.Provider value = {[]}>{children}</PostList.Provider>
}

export default PostListProvider;