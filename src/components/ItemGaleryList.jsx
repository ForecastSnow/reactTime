import ItemGalery from './ItemGalery'

function ItemGaleryList({arrayItems}) {



    return(

        <>

        {arrayItems.map(item => <ItemGalery  item={item} key={item.id}/>)}

        </>

    )


}

export default ItemGaleryList;