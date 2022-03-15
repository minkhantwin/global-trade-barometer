const filter = (result) => {
    let images = {};
    result.keys().forEach((item, index) => { images[item.replace('./', '')] = result(item); });
    return images
}


// import all country map and flag images
export const importAllMapsAndFlags = () => {
    return filter(require.context('../assets/icons/flags and maps', false,  /.png/));
}

export const importAllFlags = () => {
    return filter(require.context('../assets/icons/flags and maps', false, /-flag.png/));
}


