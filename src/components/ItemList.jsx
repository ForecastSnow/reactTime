import Item from './Item'

function ItemList({ items }) {

    return (
        <>
            <div className='ml-36 mr-36 grid grid-cols-3 gap-4 mt-14 xl:ml-56 mr-56 grid-cols-4 2xl:ml-64 mr-64 grid-cols-5'>

                {items.map(item => <Item item={item} key={item.id} />)}

            </div>

        </>
    )

}

export default ItemList;