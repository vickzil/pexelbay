// SEARCH IMAGES
export const searchImages = (state) => {
    return state.search;
};
// GET HOMEPAGE IMAGES
export const getRandomImages = (state) => {
    return state.randomImage;
};
// GET PHOTOS PAGE IMAGES
export const getPhotos = (state) => {
    return state.photos;
};
// GET ILLUSTRATION IMAGES
export const getIllustrations = (state) => {
    return state.illustrations;
};
// GET VECTOR IMAGES
export const getVector = (state) => {
    return state.vector;
};

//GET SINGLE PAGE IMAGE
export const getSingleImage = (state) => {
    return state.singleImage;
};
// GET SPONSPORED IMAGES
export const sponsoredImage = (state) => {
    return state.sponsporedImages;
};
// GET FASHION IMAGES
export const getFashion = (state) => {
    return state.fashion;
};
// GET NATURE IMAGES
export const getNature = (state) => {
    return state.nature;
};

// SHOW NAVIGATION MENU
export const showNavMenu = (state) => {
    return state.showNavMenu;
};

// SHOW SEARCH INPUT
export const showSearchInput = (state) => {
    return state.showSearchInput;
};
// PAGE LOADING STATUS
export const pageLoading = (state) => {
    return state.pageloading;
};
// APIKEY
export const APIKEY = (state) => {
    return state.API_KEY;
};