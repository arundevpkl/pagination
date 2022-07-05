import { dataActions } from "./data-slice";


export const fetchCartData = () => {
    return async (dispatch) => {

      const fetchData = async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch cart data!');
        }
  
        const data = await response.json();
        return data
      };
  
      try {
        const cartData = await fetchData();
        // console.log(cartData);
        dispatch( 
            dataActions.replaceCart(cartData)
        );
      } catch (error) {
       console.log(error)
      }
    };
  };

  export const fetchCommentData = () => {
    return async (dispatch) => {

      const fetchData = async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/comments'
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch cart data!');
        }
  
        const data = await response.json();
        return data
      };
  
      try {
        const cartData = await fetchData();
        // console.log(cartData);
        dispatch( 
            dataActions.replaceComment(cartData)
        );
      } catch (error) {
       console.log(error)
      }
    };
  };