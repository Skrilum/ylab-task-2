import {generateCode} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = {
      cart:{
        list: [], // Выбор в сторону производительности {code, title, price, count}
        totalPrice: 0,
        quantity: 0
      },
      list: [],
      ...initState,
    };
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    console.log(this.state);
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   * @param item {Object}
   */
  addItemToCart(item) {
    const existingItemIndex = this.state.cart.list.findIndex(cartItem => cartItem.code === item.code);
    const newCartList = [...this.state.cart.list];
    if (existingItemIndex !== -1) {
      newCartList[existingItemIndex] = {...item, count: newCartList[existingItemIndex].count + 1};
    } else {
      newCartList.push({...item, count: 1});
    }
    this.setCart(newCartList);
  };

  /**
   * Удаление товара из корзины
   * @param item {Object}
   */
  deleteItemFromCart(item) {
    const newCartList = this.state.cart.list.filter(cartItem => cartItem.code !== item.code);
    this.setCart(newCartList);
  };

  /**
   * Установка нового значения корзины и вызов setState
   * @param newCartList {Object}
   */
  setCart(newCartList) {
    this.setState({
      ...this.state,
      cart: {
        list: newCartList,
        totalPrice: newCartList.reduce((total, currentItem) => total + (currentItem.price * currentItem.count), 0),
        quantity: newCartList.reduce((total, currentItem) => total + currentItem.count, 0)
      }
    })
  }
}

export default Store;
