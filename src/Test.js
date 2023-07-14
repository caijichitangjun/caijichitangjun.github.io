import React from "react";

export default class Test extends React.Component {
    state = {
        books: [{
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 2
        }, {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
        }, {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
        }, {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
        }]
    }

    renderBooks() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>书籍名称</th>
                            <th>出版日期</th>
                            <th>价格</th>
                            <th>购买数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.date}</td>
                                        <td>{this.formatPrice(item.price)}</td>
                                        <td>
                                            <button disabled={item.count <= 1} onClick={e => this.changeBookCount(index, -1)}>-</button>
                                            <span className="count">{item.count}</span>
                                            <button onClick={e => this.changeBookCount(index, 1)}>+</button>
                                        </td>
                                        <td><button onClick={e => this.removeBook(index)}>移除</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <h2>总价格: {this.getTotalPrice()}</h2>
            </div>
        )
    }
    // 购物车为空
    renderEmptyTip() {
        return <h2>购物车为空~</h2>
    }
    // 条件渲染
    render() {
        return this.state.books.length ? this.renderBooks() : this.renderEmptyTip();
    }
    // 修改书籍数量
    changeBookCount(index, count) {
        const newBooks = [...this.state.books];
        newBooks[index].count += count;
        this.setState({
            books: newBooks
        })
    }
    // 移除书籍
    removeBook(index) {
        this.setState({
            books: this.state.books.filter((item, indey) => index !== indey)
        })
    }
    // 计算书籍总价格
    getTotalPrice() {
        const totalPrice = this.state.books.reduce((preValue, item) => {
            return preValue + item.count * item.price;
        }, 0);

        return this.formatPrice(totalPrice);
    }
    // 处理书籍价格格式
    formatPrice(price) {
        if (typeof price !== "number") {
            price = Number("aaa") || 0;
        }
        return "¥" + price.toFixed(2);
    }
}