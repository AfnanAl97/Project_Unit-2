import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletewish } from "../reducers/wishlist/action";

function Wishlistpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      wishlist: state.wishlistReducer.wishlist,
    };
  });

  const userstate = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
    };
  });

  return (
    <div className="wishpage">
      <div className="wishes">
        {console.log(state.wishlist)}
        {state.wishlist[userstate.currentUser.id].length !== 0
          ? state.wishlist[userstate.currentUser.id].map((element) => {
              return (
                <div className="wishcard">
                  <img
                    src={element.image}
                    alt=""
                    onClick={() => {
                      navigate(`/product/${element.id}`);
                    }}
                  />
                  <h3
                    onClick={() => {
                      navigate(`/product/${element.id}`);
                    }}
                  >
                    {element.name}
                  </h3>
                  <button
                    id="delete"
                    onClick={() => {
                      let deleteitem = [
                        {
                          id: userstate.currentUser.id,
                          itemId: element.id,
                        },
                      ];
                      const action = deletewish(deleteitem[0]);
                      dispatch(action);
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            })
          : "There is no wish here ;)"}
        {console.log(state.wishlist[userstate.currentUser.id])}
      </div>
    </div>
  );
}

export default Wishlistpage;
