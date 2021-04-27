import React from 'react';


class SearchProduct extends React.Component {

    state = {

    }

    render() {
        return(
            <>
            <input type="text" placeholder="Search" className={this.state.searchInputClass} />
                <img
                    className='searchIcon'
                    src={SearchIcon}
                    alt='search icon'
                    onClick={() => this.changeInputClass()}
                />
            </>
        )
    }

}

export default SearchProduct;