import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal';
import Cart from './components/cart';
import "./app.css";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const {list: cartList, totalPrice, quantity} = store.getState().cart;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const callbacks = {
    onDeleteItemFromCart: useCallback((item) => {
      store.deleteItemFromCart(item);
    }, [store]),

    onAddItemToCart: useCallback((item) => {
      store.addItemToCart(item);
    }, [store]),

    onOpenModal: useCallback(() => {
      setIsOpenModal(true);
    }, []),

    onCloseModal: useCallback(() => {
      setIsOpenModal(false);
    }, []),
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls onCLick={callbacks.onOpenModal} itemCount={quantity} totalPrice={totalPrice}/>
      <List list={list}
            onButtonCLick={callbacks.onAddItemToCart}
            buttonName={"Добавить"}/>
      <Modal isShow={isOpenModal}>
        <Head title="Корзина">
          <button onClick={callbacks.onCloseModal}>Закрыть</button>
        </Head>
        <Cart cartList={cartList} totalPrice={totalPrice} onDeleteItemFromCart={callbacks.onDeleteItemFromCart}/>
      </Modal>
    </PageLayout>
  );
}

export default App;
