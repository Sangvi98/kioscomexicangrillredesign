import React from 'react';
import './Menu.css';
import menuItems from '../MenuList/MenuItems';
import MenuList from '../MenuList/MenuList';


class Menu extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            menuCategory: 'Appetizers',
        }

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.switchSelected = this.switchSelected.bind(this);
        this.onMouseDownHandle = this.onMouseDownHandle.bind(this);

        
    }

    handleCategoryChange(e) {
        this.setState({
            menuCategory: e.target.getAttribute('value'),
        });
    }

    switchSelected(el) {
                // find all the elements in your channel list and loop over them
        Array.prototype.slice.call(document.querySelectorAll('ul[data-tag="menu-categories"] li')).forEach(function(element){
            // remove the selected class
            element.classList.remove('selected');
        });
        // add the selected class to the element that was clicked
        el.target.classList.add('selected');
    }

    onMouseDownHandle(event) {
        this.handleCategoryChange(event);
        this.switchSelected(event);
    }

    render() {
        return (
            <div className="menu"> 
                <ul className="menu-bar" data-tag='menu-categories'>
                    <li onMouseDown={this.onMouseDownHandle} value='Appetizers' className='selected'>Appetizers</li>
                    <li onMouseDown={this.onMouseDownHandle} value='SoupsSalads'>Soups & Salads</li>
                    <li onMouseDown={this.onMouseDownHandle} value='CombinationLunch'>Combination Lunch</li>
                    <li onMouseDown={this.onMouseDownHandle} value='LunchFavorites'>Lunch Favorites</li>
                    <li onMouseDown={this.onMouseDownHandle} value='Burritos'>Burritos</li>
                    <li onMouseDown={this.onMouseDownHandle} value='Enchiladas'>Enchiladas</li>
                    <li onMouseDown={this.onMouseDownHandle} value='Quesadilas'>Quesadilas</li>
                    <li onMouseDown={this.onMouseDownHandle} value='Chimichangas'>Chimichangas</li>
                    <li onMouseDown={this.onMouseDownHandle} value='ChickenDishes'>Chicken Dishes</li>
                    <li onMouseDown={this.onMouseDownHandle} value='BeefandPorkDishes'>Beef and Pork Dishes</li>
                    <li onMouseDown={this.onMouseDownHandle} value='KioscoFavorites'>Kiosco Favorites</li> 
                    <li onMouseDown={this.onMouseDownHandle} value='FajitasMexicanas'>Fajitas Mexicanas</li>
                    <li onMouseDown={this.onMouseDownHandle} value='ComboDinners'>Combo Dinners</li>
                    <li onMouseDown={this.onMouseDownHandle} value='VegetarianCombos'>Vegetarian Combos</li>
                    <li onMouseDown={this.onMouseDownHandle} value='ChildrensPlates'>Children's Plates</li>
                    <li onMouseDown={this.onMouseDownHandle} value='Seafood'>Seafood</li>
                    <li onMouseDown={this.onMouseDownHandle} value='NewPlates'>New Plates</li>
                </ul>
                
                
                <MenuList category={this.state.menuCategory} />
                <p className='disclaimer'>Consuming raw or uncooked meats, poultry, seafood, shellfish, and eggs may increase your risk for food borne illness.</p>
            </div>  
        )
    }
}

export default Menu;