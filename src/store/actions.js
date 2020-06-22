import axios from "axios";
// let APIKEY = "16705730-a3b609fc9d7ce4092f8947558";
let APIKEY = "16484065-548c12b26d972495577e2a544";

let randomWords = [
    "sports",
    "places",
    "business",
    "building",
    "phones",
    "music",
    "health",
    "person",
    "computer",
    "people",
    "work",
    "happy",
    "sad",
    "job",
    "dance",
    "game",
];
let index = Math.floor(Math.random() * randomWords.length);
let shuffledWords = randomWords[index];

// ACTION GET ALL HOMEPAGE IMAGES 
export const getImages = ({
    commit
}) => {

    let index = Math.floor(Math.random() * randomWords.length);
    let shuffledWords = randomWords[index];

    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=" + shuffledWords + "&image_type=all&per_page=46";
    axios.get(imageUrl).then(response => {
        commit("GET_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};



// ACTION GET ALL PHOTO PAGE IMAGES 
export const getPhotos = ({
    commit
}, currentpage) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=" + shuffledWords + "&image_type=photo&per_page=47&page=" + currentpage;
    axios.get(imageUrl).then(response => {
        commit("GET_PHOTOS", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL ILLUSTRATION PHOTOS 
export const getIllustration = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&image_type=illustration&per_page=47";
    axios.get(imageUrl).then(response => {
        commit("GET_ILLUSTRATION", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL VECTOR PHOTOS 
export const getVector = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&image_type=vector&per_page=47";
    axios.get(imageUrl).then(response => {
        commit("GET_VECTOR", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET PHOTO BY ID
export const getImageById = ({
        commit
    },
    id) => {

    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&id=" + id;

    axios.get(imageUrl).then(response => {
        commit("GET_IMAGE_BY_ID", response.data.hits);
    }).catch(err => console.log(err));

};

// ACTION GET ALL RELATED PRODUCTS 
export const getRelatedImages = ({
        commit
    },
    tags) => {

    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=" + tags + "&image_type=photo&per_page=4";

    axios.get(imageUrl).then(response => {
        commit("GET_RELATED_IMAGES", response.data.hits);
    }).catch(err => console.log(err));

};

// ACTION GET ALL SPONSPORED PHOTOS 
export const getSponsoredImages = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=" + shuffledWords + "&image_type=photo&per_page=4";

    axios.get(imageUrl).then(response => {
        commit("GET_SPONSORED_IMAGE", response.data.hits);
    }).catch(err => console.log(err));

};

// SEARCH IMAGES
export const searchImages = ({
    commit
}, image) => {

    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=" + image + "&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("SEARCH_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// GET PHOTO BY CATEGORY 
export const getCategoryImage = ({
    commit
}, image) => {

    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=" + image + "&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_IMAGES_ALL", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET FASHION CATEGORY PHOTOS
export const getCategoryByFashion = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=fashion&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_FASHION_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET NATURE CATEGORY
export const getCategoryByNature = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=nature&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_NATURE_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET SCIENCE PHOTOS
export const getCategoryByScience = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=science&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_SCIENCE_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET EDUCTAION PHOTOS
export const getCategoryByEducation = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=education&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_EDUCATION_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET ALL FEELINGS PHOTOS 
export const getCategoryByFeelings = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=feelings&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_FEELINGS_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL HEALTH PHOTOS 
export const getCategoryByHealth = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY +
        "&q=health&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_HEALTH_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL PEOPLE PHOTOS 
export const getCategoryByPeople = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=people&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_PEOPLE_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL RELIGION PHOTOS 
export const getCategoryByReligion = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=religion&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_RELIGION_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET ALL PLACES PHOTOS 
export const getCategoryByPlaces = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=places&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_PLACES_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET ALL ANIMAL PHOTOS 
export const getCategoryByAnimals = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=animals&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_ANIMALS_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET ALL INDUSTRY PHOTOS
export const getCategoryByIndustry = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=industry&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_INDUSTRY_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET ALL COMPUTER PHOTOS 
export const getCategoryByComputer = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=computer&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_COMPUTER_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET ALL FOOD PHOTOS 
export const getCategoryByFood = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=food&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {

        commit("GET_CATEGORY_BY_FOOD_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL SPORTS PHOTOS 
export const getCategoryBySports = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=sports&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {

        commit("GET_CATEGORY_BY_SPORTS_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL TRANSPORTATION IMAGES 
export const getCategoryByTransportation = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=transportation&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_TRANSPORTATION_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL TRAVEL IMAGES 
export const getCategoryByTravel = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=travel&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_TRAVEL_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL BUILDING IMAGES 
export const getCategoryByBuildings = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=buildings&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_BUILDINGS_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// ACTION GET ALL BUSINESS IMAGES 
export const getCategoryByBusiness = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=business&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_BUSINESS_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};

// ACTION GET ALL MUSIC IMAGES 
export const getCategoryByMusic = ({
    commit
}) => {
    let imageUrl = "https://pixabay.com/api/?key=" + APIKEY + "&q=music&image_type=photo&per_page=47";

    axios.get(imageUrl).then(response => {
        commit("GET_CATEGORY_BY_MUSIC_IMAGES", response.data.hits);
    }).catch(err => console.log(err));
};


// SHOW_NAV_MENU
export const showNavigationMenu = ({
    commit
}) => {
    commit("SHOW_NAV_MENU");
};


// GET MORE PHOTOS
export const getMorePhotos = ({
    commit
}, image) => {
    commit("GET_MORE_PHOTOS", image);
};

// CLOSE NAVIGATION MENU
export const closeNavigationMenu = ({
    commit
}) => {
    commit("CLOSE_NAV_MENU");
};


// SHOW SEARCH DIV
export const showInputSearch = ({
    commit
}) => {
    commit("SHOW_INPUT_SEARCH");
};
// HIDE SEARCH DIV
export const closeInputSearch = ({
    commit
}) => {
    commit("CLOSE_INPUT_SEARCH");
};
// SHOW LOADING
export const showPageLoading = ({
    commit
}) => {
    commit("SHOW_PAGE_LOADING");
};
// HIDE LOADING
export const closePageLoading = ({
    commit
}) => {
    commit("CLOSE_PAGE_LOADING");
};

// TOGGLE LIKE
export const toggleLike = ({
    commit
}) => {
    commit("TOGGLE_LIKE");
};