import { useSelector } from "react-redux";

function PrevOders() {
  const state = useSelector((state) => {
    console.log(state);
    return {
      PrevList: state.PrevOrderReducer.PrevList,
    };
  });

  const userstate = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
    };
  });
  console.log(state.PrevList[2][0]);

  return (
    <>
      <div class="parent">
        <h1 id="heading">Previous Orders</h1>
        <div class="summary_card">
          {state.PrevList[userstate.currentUser.id].length !== 0
            ? state.PrevList[userstate.currentUser.id][0].map((element) => {
                return (
                  <div className="item-cart">
                    <h4>{element.name} </h4>
                    <h4 className="price-left">{element.price} SAR</h4>
                  </div>
                );
              })
            : "No previous orders ;)"}

          <hr />
        </div>
      </div>
    </>
  );
}

export default PrevOders;
