
import {useSelector} from 'react-redux';

export const FetchData = () =>{
    const Data = useSelector(state => state.menu.currentMenu);
    return Data;
}

export const FetchMenuSectionItems = () =>{
    let data = FetchData();
    let SectionItems = Object.keys(data).map(items => {
        return [...Array(data[items])].map(item => {
            return item
        })
    });
    return SectionItems;

}
export const FetchMenuSectionItemsById = Id => {
    let data = FetchData();
    const MenuSection = data.filter(({MenuSectionId})=> MenuSectionId === Number(Id));  
     const MenuItems = MenuSection.map(item => item.MenuItems);
    return MenuItems;
};

export const getMasterOptionSet = CollectionName => {
    let temp = [];
    let list = CollectionName.filter(item => item.IsMasterOptionSet === false)
    const {parent} = CollectionName;
    list.parent = parent;
    temp.push(list);
    temp.map(items => {
        return items.map(item =>{
            return item.MenuItemOptionSetItems
        })
    })
    return temp
}

export const getMasterOptionIsMasterFalse = CollectionName => (
    CollectionName.map(items => {
        let data = [...Array(items)].filter(({IsMasterOptionSet}) => IsMasterOptionSet === false);
        let fetched = data.map(item => {
           return item.MenuItemOptionSetItems
        });
        return fetched     
    })
);

export const getMasterOptionIsMasterTrue = CollectionName => (
    CollectionName.map(items => {
        let data = [...Array(items)].filter(({IsMasterOptionSet}) => IsMasterOptionSet === true);
        let fetched = data.map(item => {
           return item.MenuItemOptionSetItems
        });
        return fetched     
    })
)