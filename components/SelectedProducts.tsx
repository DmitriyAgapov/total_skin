import * as React from 'react';
import {observer} from "mobx-react-lite";
import CardGood from "./Cards/CardGood";
import {useStore} from "./StoreProvider";

const SelectedProducts = observer(function SelectedProducts(props) {
    const store = useStore()

    return store.productStore.isLoadingData ? 'loading' :(
        <div className={'block__items grid'}>
            {store.productStore.activeProducts ? store.productStore.activeProducts.map((item) => <CardGood key={item.id} props={item}/>) : 'Loading'}
        </div>
    );
})
export default SelectedProducts