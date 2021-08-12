import React, { useEffect, useState } from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom';

export default function CartList() {

    const [CartBookList, setCartBookList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    let total = 0
    //const [pricebyQuantity, setPricebyQuantity] = useState([])
    let pricebyQuantity = []

    useEffect(async () => {
        let data = await fetch('http://localhost:8000/api/book/cart/list?userid=' + 1);
        data = await data.json()
        console.clear()
        console.log(data)
        setCartBookList(data)

        // if (CartBookList.length > 0) {
        //     CartBookList[1].map((book, index) => {
        //         setTotalPrice(totalPrice + CartBookList[0][index].Quantity * book.Price)
        //     })
        //     setTotalPrice(totalPrice)
        // }

    }, [])

    const updateTotalCartPrice = async (e) => {
        if (CartBookList.length > 0) {
            CartBookList[1].map((book, index) => {
                //setTotalPrice()
                console.log(totalPrice + CartBookList[0][index].Quantity * book.Price);
            })
        }

    }

    if (CartBookList.length < 1) {
        return <p>Data is loading</p>
    }
    else {

        return (

            <div class="site-content bg-punch-light overflow-hidden" id="content">
                <div class="container">
                    <header class="entry-header space-top-2 space-bottom-1 mb-2">
                        {/* <h1 class="entry-title font-size-7">Your cart: {{ count($data[1])}} items</h1> */}
                    </header>
                    <div class="row pb-8">
                        <div id="primary" class="content-area">
                            <main id="main" class="site-main ">
                                <div class="page type-page status-publish hentry">

                                    <div class="entry-content">
                                        <div class="woocommerce">
                                            <form class="woocommerce-cart-form table-responsive" action="#" method="post">
                                                <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                                                    <thead>
                                                        <tr>
                                                            <th class="product-name">Product</th>
                                                            <th class="product-price">Price</th>
                                                            <th class="product-quantity">Quantity</th>
                                                            <th class="product-subtotal">Total</th>
                                                            <th class="product-remove">&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>


                                                        {CartBookList[1].map((book, index) =>
                                                            <tr class="woocommerce-cart-form__cart-item cart_item">
                                                                <td class="product-name" data-title="Product">
                                                                    <div class="d-flex align-items-center">
                                                                        <a href="#">
                                                                            <img src={book.BookSampleImage1} width="120px" height="150px" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                                        </a>
                                                                        <div class="ml-3 m-w-200-lg-down">
                                                                            <a href="#">{book.Name}</a>
                                                                            <a href="#" class="text-gray-700 font-size-2 d-block" tabindex="0">{book.AuthorName}</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="product-price" data-title="Price">
                                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">Taka </span>{book.Price}</span>
                                                                </td>
                                                                <td class="product-quantity" data-title="Quantity">
                                                                    <div class="quantity d-flex align-items-center">

                                                                        <div class="border px-3 width-120">
                                                                            <div class="js-quantity">
                                                                                <div class="d-flex align-items-center">
                                                                                    <label class="screen-reader-text sr-only">Quantity</label>
                                                                                    <a class="js-minus text-dark" href="javascript:;">

                                                                                    </a>

                                                                                    <input type="number" value={CartBookList[0][index].Quantity} readonly class="input-text qty text js-result form-control text-center border-0" step="1" min="1" max="100" name="quantity" title="Qty" />


                                                                                    <a class="js-plus text-dark" href="javascript:;">

                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                                <td class="product-subtotal" data-title="Total">
                                                                    {/* <span class="woocommerce-Price-amount amount">
                                                                <span class="woocommerce-Price-currencySymbol">Taka </span>
                                                                {{ $data[0][$key] -> Quantity * $book -> Price }}</span>
                                                            @php
                                                    $totalCartPrice = $totalCartPrice + $data[0][$key]->Quantity * $book->Price
                                                            @endphp */}
                                                                    {
                                                                        pricebyQuantity[index] = (CartBookList[0][index].Quantity * book.Price)
                                                                    }

                                                                </td>
                                                                <td class="product-remove">
                                                                    <a href="#" class="remove" aria-label="Remove this item">

                                                                    </a>
                                                                </td>

                                                            </tr>

                                                        )}

                                                        <tr>
                                                            <td colspan="5" class="actions">

                                                                <input type="submit" class="button" name="update_cart" value="Update cart" />
                                                                <input type="hidden" id="_wpnonce" name="_wpnonce" value="db025d7a70" /><input type="hidden" name="_wp_http_referer" value="/storefront/cart/" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </main>
                        </div>
                        <div id="secondary" class="sidebar cart-collaterals order-1" role="complementary">
                            <div id="cartAccordion" class="border border-gray-900 bg-white mb-5">


                                <button onClick={updateTotalCartPrice}>Get Total Price</button>

                                <div class="p-4d875 border">
                                    <table class="shop_table shop_table_responsive">
                                        <tbody>
                                            <tr class="order-total">
                                                <th>Total</th>
                                                <td data-title="Total"><strong><span class="woocommerce-Price-amount amount">{total = pricebyQuantity.reduce((a, b) => a + b, 0)}</span> <span class="woocommerce-Price-currencySymbol"> Taka </span></strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="wc-proceed-to-checkout">
                                <a href="{{url('/book/checkout')}}" class="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4">Proceed
                                    to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
