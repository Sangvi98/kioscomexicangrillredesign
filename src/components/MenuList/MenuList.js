import React from 'react';
import './MenuList.css';
import menuItems from './MenuItems';


class MenuList extends React.Component {

    render() {
        return (
            <div className='menu-list'>
                {
                    menuItems[this.props.category].items.map(item => {
                        if (item.header !== undefined) {
                            return (
                                <div className='heading'>
                                    <p className='heading-text'>{item.header}</p>
                                </div>  
                            )
                        }

                        if (item.note !== undefined) {
                            return (
                                <div className='note'>
                                    <p className='note-text'>{item.note}</p>
                                </div>  
                            )
                        }

                        if (item.list !== undefined) {
                            return (
                                <ul className='menu-ul'>
                                    {item.list.map(listItem => {
                                        return (<li className='menu-li'>{listItem}</li>)
                                    })}
                                </ul>
                                 
                            )
                        }


                        if (item.priceLong !== undefined) {
                            return (
                                <div className='menu-item'>
                                    <div className='name-price'> 
                                        <p className='item-name'>{item.name}</p>
                                    </div>
                                    <p className='item-priceLong'>{item.priceLong}</p>
                                    <p className='item-description'>{item.description}</p>
                                </div>
                            )
                        }

                        if (item.priceExLong !== undefined) {
                            return (
                                <div className='menu-item'>
                                    <div className='name-price'> 
                                        <p className='item-name'>{item.name}</p>
                                    </div>
                                    {item.priceExLong.map(price => {
                                        return <p className='item-priceExLong'>{price}</p>
                                    })}
                                    <p className='item-description'>{item.description}</p>
                                </div>
                            )
                        }

                        return (
                            <div className='menu-item'>
                                <div className='name-price'> 
                                    <p className='item-name'>{item.name}</p>
                                    <p className='item-price'>{item.price}</p>
                                </div>
                                <p className='item-description'>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default MenuList;