import React from "react";

import SHOP_DATA from "./shop.data";

import { PreviewCollection } from "../../components/PreviewCollection/PreviewCollection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const {collection} = this.state;
    return <div className="shop-page">

{collection.map(({id, ...otherCollection}) =>
(
  <PreviewCollection key={id} {...otherCollection} />
))}

    </div>;
  }
}

export default ShopPage;
