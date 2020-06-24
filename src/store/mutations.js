// SAVE HOMEPAGE IMAGES
export const GET_IMAGES = (state, image) => {
    state.randomImage = image;
    if (state.randomImage.length > 0) {
        setTimeout(() => {
            state.pageloading = false;
        }, 3000);
    }
};
// SAVE PHOTOS PAGE IMAGES
export const GET_PHOTOS = (state, image) => {
    state.photos = image.hits;
    state.photoTotalHits = image.totalHits;
    if (state.photos.length > 0) {
        setTimeout(() => {
            state.pageloading = false;
        }, 3000);
    }
};

// PUSH MORE PHOTOS
export const GET_MORE_PHOTOS = (state, images) => {
    state.photos = [...state.photos, ...images];
};


// PUSH MORE PHOTOS
export const GET_MORE_SEARCH_PHOTOS = (state, images) => {
    state.search = [...state.search, ...images];
};

// PUSH ILLUSTRATION IMAGES
export const GET_ILLUSTRATION = (state, image) => {
    state.illustrations = image;

    if (state.illustrations.length > 0) {
        setTimeout(() => {
            state.pageloading = false;
        }, 3000);
    }
};

// SAVE VECTOR IMAGES
export const GET_VECTOR = (state, image) => {
    state.vector = image;
    if (state.vector.length > 0) {
        setTimeout(() => {
            state.pageloading = false;
        }, 3000);
    }
};


// SAVE IMAGE BY IDS
export const GET_IMAGE_BY_ID = (state, image) => {
    state.singleImage = image;
    if (image) {
        setTimeout(() => {
            state.pageloading = false;
        }, 3500);
    }
};

// SAVE SPONSPORED IMAGES
export const GET_SPONSORED_IMAGE = (state, image) => {
    state.sponsporedImages = image;
};

// SAVE RELATED IMAGES
export const GET_RELATED_IMAGES = (state, image) => {
    state.randomImages = image;
};

// SAVE RELATED IMAGES
export const GET_MORE_CATEGORY_PHOTOS = (state, image) => {
    state.categoryImage = [...state.categoryImage, ...image];

};

// SAVE CATEGORY IMAGES
export const GET_CATEGORY_IMAGES_ALL = (state, image) => {
    state.categoryImage = image.hits;
    state.categoryTotalHits = image.totalHits;
    if (image) {
        setTimeout(() => {
            state.pageloading = false;
        }, 3000);
    }
};

// SAVE SEARCH RESULTS
export const SEARCH_IMAGES = (state, image) => {
    state.search = image.hits;
    state.searcTotalHits = image.totalHits;
    state.searcInput = ""
    if (image) {
        setTimeout(() => {
            state.pageloading = false;
        }, 3000);

    }
};

// SET FASHION IMAGES
export const GET_CATEGORY_BY_FASHION_IMAGES = (state, image) => {
    state.fashion = image;
};

// SET NATURE IMAGES
export const GET_CATEGORY_BY_NATURE_IMAGES = (state, image) => {
    state.nature = image;
};
// SET SCIENCE IMAGES
export const GET_CATEGORY_BY_SCIENCE_IMAGES = (state, image) => {
    state.science = image;
};
// SET EDUCATION IMAGES
export const GET_CATEGORY_BY_EDUCATION_IMAGES = (state, image) => {
    state.education = image;
};
// SET FEELINGS IMAGES
export const GET_CATEGORY_BY_FEELINGS_IMAGES = (state, image) => {
    state.feeling = image;
};
// SET PEOPLE IMAGES
export const GET_CATEGORY_BY_PEOPLE_IMAGES = (state, image) => {
    state.people = image;
};
// SET HEALTH NEWS IMAGES
export const GET_CATEGORY_BY_HEALTH_IMAGES = (state, image) => {
    state.health = image;
};

// SET PLACES IMAGES
export const GET_CATEGORY_BY_PLACES_IMAGES = (state, image) => {
    state.places = image;
};
// SET ANIMAL IMAGES
export const GET_CATEGORY_BY_ANIMALS_IMAGES = (state, image) => {
    state.animal = image;
};
// SET INDUSTRY IMAGES
export const GET_CATEGORY_BY_INDUSTRY_IMAGES = (state, image) => {
    state.industry = image;
};
// SET COMPUTER IMAGES
export const GET_CATEGORY_BY_COMPUTER_IMAGES = (state, image) => {
    state.computer = image;
};
// SET SPORTS IMAGES
export const GET_CATEGORY_BY_SPORTS_IMAGES = (state, image) => {
    state.sports = image;
};
// SET TRNSPORTATION IMAGES
export const GET_CATEGORY_BY_TRANSPORTATION_IMAGES = (state, image) => {
    state.transportation = image;
};
// SET TRAVEL IMAGES
export const GET_CATEGORY_BY_TRAVEL_IMAGES = (state, image) => {
    state.travel = image;
};
// SET BUILDING IMAGES
export const GET_CATEGORY_BY_BUILDINGS_IMAGES = (state, image) => {
    state.building = image;
};
// SET BUSINESS IMAGES
export const GET_CATEGORY_BY_BUSINESS_IMAGES = (state, image) => {
    state.business = image;
};

// SET MUSIC IMAGES
export const GET_CATEGORY_BY_MUSIC_IMAGES = (state, image) => {
    state.music = image;
};

// SET RELIGION IMAGES
export const GET_CATEGORY_BY_RELIGION_IMAGES = (state, image) => {
    state.religion = image;
};
// SET FOOD IMAGES
export const GET_CATEGORY_BY_FOOD_IMAGES = (state, image) => {
    state.food = image;
};

// TOGGLE LIKE
export const TOGGLE_LIKE = (state) => {
    state.like = !state.like;
};

// SHOW NAVIAGTION MENU
export const SHOW_NAV_MENU = (state) => {
    state.showNavMenu = true;
};

// CLOSE NAVIAGTION MENU
export const CLOSE_NAV_MENU = (state) => {
    state.showNavMenu = false;
};
// SHOW INPUT SEARCH
export const SHOW_INPUT_SEARCH = (state) => {
    state.showSearchInput = true;
};
// CLOSE INPUT SEARCH
export const CLOSE_INPUT_SEARCH = (state) => {
    state.showSearchInput = false;
};
// SHOW PAGE LOADING
export const SHOW_PAGE_LOADING = (state) => {
    state.pageloading = true;
};
// CLOSE PAGE LOADING
export const CLOSE_PAGE_LOADING = (state) => {
    state.pageloading = false;
};